import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import postWant from '@/pages/postWant'
import wantsList from '@/pages/wantsList'
import login from '@/pages/login'
import info from '@/pages/personal/info'
import news from '@/pages/personal/news'
import myWants from '@/pages/personal/myWants'
import history from '@/pages/personal/history'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/postWant',
      name: 'postWant',
      component: postWant
    },
    {
      path: '/wantsList',
      name: 'wantsList',
      component: wantsList
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/myWants',
      name: 'myWants',
      component: myWants
    },
    {
      path: '/history',
      name: 'history',
      component: history
    }
  ]
})
