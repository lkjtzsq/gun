import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import LoginStudent from '@/components/loginStudent/LoginStudent'
import Forget from '@/components/forget/Forget'
import ForgetNext from '@/components/forgetNext/ForgetNext'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/loginStudent',
      name: 'LoginStudent',
      component: LoginStudent
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/forgetNext',
      name: 'ForgetNext',
      component: ForgetNext
    }
  ]
})
