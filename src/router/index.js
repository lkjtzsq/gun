import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import LoginStudent from '@/components/loginStudent/LoginStudent'
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
    }
  ]
})
