<template>
<div>
  <mt-header title="新密码">
    <router-link to="/forgetNext" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
  <div class="main">
    <div class="input-group">
      <mt-field label="新密码" placeholder="请填写新密码" type="text" v-model="password"></mt-field>
    </div>
    <router-link to="/main">
      <div class="button">修改</div>
    </router-link>
  </div>
</div>
</template>
<script>
export default {
  name: "NewPassWord",
  data() {
    return {
      password: ""
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
