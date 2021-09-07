import { createRouter, createWebHashHistory } from "vue-router";

import Start from './StPage'
import Search from './Search'
import Index from './Index'
import PickSearch from './PickSearch'

export default createRouter({

  history: createWebHashHistory(),
  routes:[
    {
      path: '/',
      component: Start
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: 'picksearch',
          component: PickSearch
        },
      ]
    },
    // {
    //   path: '/picksearch',
    //   component: PickSearch
    // },
    {
      path: '/index',
      component: Index
    },
  ]
})
