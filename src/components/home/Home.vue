<template>
  <div class="hello">
    <img :src="imgUrl">

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgUrl:require("@/assets/images/home-back.png")// 首页图片
     }
  },
  created(){
    this.toLogin();
  },
  methods:{
    // 定时跳转
    toLogin(){
      const seconds=3000 // 定时器时长
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer=setTimeout(()=>{
        this.$router.push("/LoginStudent")
      },seconds)

    }
  }
}
</script>
<style scoped lang="stylus">
  .hello{
    position: relative
    width:100%
    height: 100%
  }
  .hello img{
    width:100%
    height: 100%
  }
</style>
