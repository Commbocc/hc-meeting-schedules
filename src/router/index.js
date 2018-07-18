import Vue from 'vue'
import VueRouter from 'vue-router'

import TV from '../components/TV'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '*',
      component: TV
    }
  ]
})
