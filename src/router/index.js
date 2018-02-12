import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Index'
import Contacts from '@/components/Contacts'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/contacts',
      component: Contacts
    }
  ]
})
