<template>
<div>
  <mt-header title="安全监测">
    <router-link to="/forget" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>

  <div class="main">
    <div class="input-group">
      <mt-field label="验证码" v-model="captcha" @click.native.capture="getCode">{{text}}
      </mt-field>
    </div>
    <router-link to="/newPassWord">
      <div class="button">下一步</div>
    </router-link>
  </div>
</div>
</template>
<script>
export default {
  name: "ForgetNext",
  data() {
    return {
      captcha: "",
      text:"10秒后重新获取",
      timer:null
    }
  },
  created(){
    if(this.timer){
      clearInterval(this.timer)
    }
    this.codeTimer()
  },
  methods:{
    getCode(){
      if(this.timer==null){
        this.text="10秒后重新获取"
        this.codeTimer()
      }
    },
    codeTimer(){
      let seconds=10
      this.timer=setInterval(()=>{
        seconds--
        this.text=seconds+"秒后重新获取"
        if(seconds==0){
          clearInterval(this.timer)
          this.timer=null
          this.text="点击重新获取"
        }
      },1000)
    }
  }
}
</script>
<style scoped>
.mint-header {
  background: none;
  color: #000;
}

.main {
  margin: 0 20px;
}

.input-group {
  border-bottom: 1px solid #000;
}
.button {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #000;
  color: #fff;
  margin-top: 10px;
}
</style>
