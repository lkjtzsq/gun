import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import LoginStudent from '@/components/loginStudent/LoginStudent'
import Forget from '@/components/forget/Forget'
import ForgetNext from '@/components/forgetNext/ForgetNext'
import NewPassWord from '@/components/newPassWord/NewPassWord'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta:{
        keepAlive:false
      },
      component: Home
    },
    {
      path: '/loginStudent',
      name: 'LoginStudent',
      meta:{
        keepAlive:true
      },
      component: LoginStudent
    },
    {
      path: '/forget',
      name: 'Forget',
      meta:{
        keepAlive:true
      },
      component: Forget
    },
    {
      path: '/forgetNext',
      name: 'ForgetNext',
      meta:{
        keepAlive:true
      },
      component: ForgetNext
    },
    {
      path: '/newPassWord',
      name: 'NewPassWord',
      meta:{
        keepAlive:true
      },
      component: NewPassWord
    }
  ]
})
