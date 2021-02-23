import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import FindUser from '@/components/FindUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/find',
      name: 'FindUser',
      component: FindUser
    },
    {
      path: '/index',
      name: 'App',
      component: App
    }
  ]
})
