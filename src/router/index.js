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
import suggest from '@/pages/foot/suggest'
import contactUs from '@/pages/foot/contactUs'
import aboutUs from '@/pages/foot/aboutUs'
import disclaimer from '@/pages/foot/disclaimer'
Vue.use(Router)

/**
 * 重写路由的replace方法
 */
const routerPush = Router.prototype.push
Router.prototype.replace = function replace (location) {
  return routerPush.call(this, location).catch(error => error)
}
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
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: suggest
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/disclaimer',
      name: 'disclaimer',
      component: disclaimer
    }
  ]
})
