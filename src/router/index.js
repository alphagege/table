import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Table from '@/components/page/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Pos',
      // component: Pos,
      name:'table',
      component:Table
    }
  ]
})
