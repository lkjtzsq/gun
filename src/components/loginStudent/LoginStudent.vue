<template>
  <div class="login">
    <div class="logo">
      <img :src="logoSrc"/>
    </div>
    <div class="login-part">
      <div class="input-group">
        <mt-field :placeholder="hoderTel" type="telephone" v-model="telephone" @blur.native.capture="inputBlur"></mt-field>
      </div>
      <div class="input-group">
        <mt-field :placeholder="hoderPwd" type="password" v-model="password"></mt-field>
      </div>
      <div class="button" @click="submit">登 录</div>
      <div class="login-bottom">
        <router-link to="/" class="login-short">短信验证码登录</router-link>
        <router-link to="/" class="register">注册</router-link>
      </div>
      <div class="login-bottom">
        <router-link to="/forget" class="login-short">忘记密码？</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"LoginStudent",
  data(){
    return {
        logoSrc:require("@/assets/images/gun-logo.png"),
        input: "",
        hoderTel:"请输入手机号",
        hoderPwd:"请输入密码",
        telephone:"",
        password:"",
        show:false,
        popup:""
    }
  },
  methods:{
    inputBlur(){
      const reg=/^1[0-9]{10}/g
      if(!reg.test(this.telephone)){
        this.$toast({
          message: '手机号格式错误！',
          position: 'bottom',
          iconClass:'',
          duration: 3000
        });
      }
    },
    submit(){
      // this.inputBlur()
      this.$router.push('/')
    }
  },
  created(){
    this.axios.get(this.$store.state.domain+"/api/meeting",{
      params:{
        date:"2019-6-22",
        token:"29d216fab87b6eb6f0fe8fe18658b00f"
      }
    }).then((data)=>{
      console.log(data);
    })
  }
}
</script>
<style scoped>
.login {
  text-align: center;
}
.login-part {
  margin: 50px 20px;
}
.input-group{
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
.login-bottom {
  overflow: hidden;
  margin-top: 20px;
}
.login-bottom a {
  color: #00a7f5;
}
.login-short {
  float: left;
}
.register {
  float: right;
}


</style>
