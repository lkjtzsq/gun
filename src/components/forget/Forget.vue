<template>
<div>
  <mt-header title="忘记密码">
    <router-link to="/loginStudent" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
  <div class="main">
    <div class="input-group">
      <mt-field label="手机号" placeholder="请输入手机号" type="text" v-model="phone"></mt-field>
    </div>
    <router-link to="/forgetNext">
      <div class="button">下一步</div>
    </router-link>
  </div>
</div>
</template>
<script>
export default {
  name: "Forget",
  data() {
    return {
      phone: ""
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
