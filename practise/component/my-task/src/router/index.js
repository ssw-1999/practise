import Vue from 'vue'
import Router from 'vue-router'
import wrapper from '../components/wrapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wrapper',
      component: wrapper
    }
  ]
})
