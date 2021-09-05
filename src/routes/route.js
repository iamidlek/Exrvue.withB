import { createRouter, createWebHashHistory } from "vue-router";

import Start from './StPage'
import Search from './Search'
import Index from './Index'

export default createRouter({

  history: createWebHashHistory(),
  routes:[
    {
      path: '/',
      component: Start
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/index',
      component: Index
    },
  ]
})
