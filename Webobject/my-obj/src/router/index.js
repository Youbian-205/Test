import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Panda from '@/components/panda'
import Lalala from '@/components/Lalala'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Panda
    },
    {
      path: '/HelloWorld',
      name: '测试页面',
      component: HelloWorld
    },
    {
      path: '/lalala',
      name: '跳转页面',
      component: Lalala
    },
  ]
})
