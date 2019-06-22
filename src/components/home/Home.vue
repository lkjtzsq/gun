<template>
  <div class="hello">
    <img :src="imgUrl">
    <div class="seconds">倒计时：{{seconds}}</div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      imgUrl:require("@/assets/images/home-back.png"), // 首页图片
      seconds:3
     }
  },
  created(){
    this.toLogin();
  },
  methods:{
    // 定时跳转
    toLogin(){
      if(this.timer){
        clearInterval(this.timer)
      }
      this.timer=setInterval(()=>{
        this.seconds--
        if(this.seconds==0){
          clearInterval(this.timer)
          setTimeout(()=>{
            this.$router.push("/LoginStudent")
          },500)
        }
      },1000)

    }
  }
}
</script>
<style scoped>
  .hello{
    position: relative;
    width:100%;
    height: 100%;
  }
  .hello img{
    width:100%;
    height: 100%;
  }
  .seconds{
    position: absolute;
    right:0;
    top:35px;
    padding:10px;
    background: rgba(0,0,0,.7);
    color:#fff;
  }
</style>
