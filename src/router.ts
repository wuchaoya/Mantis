import Vue from 'vue'
import Router from 'vue-router';
import BroadcastFlow from '@/components/BroadcastFlow';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  
    {
      path: '/',
      name: 'signin',
      component: () => import('./views/SignIn') // 登录
    },
  
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home') // 首页播流
    },
  
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Order') // 订单中心
    },
  
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/Message') // 消息中心
    },
  
    {
      path: '/result',
      name: 'result',
      component: () => import('./views/Result') // 支付结果
    },
  
    {
      path: '/package',
      name: 'package',
      component: () => import('./views/Package') // 套餐
    },
  
  
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/Test')
    },
    
  ]
})
