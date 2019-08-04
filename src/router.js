import Vue from 'vue'
import Router from 'vue-router'
import measure from './views/Measure.vue'
import custom from './views/Custom.vue'
import me from './views/Me.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'measure',
      component: measure
    },
    {
      path: '/custom',
      name: 'custom',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: custom
    },
    {
      path:'/Me',
      name: 'me',
      component: me
    },
    {
      path: '/clothing-list',
      name: 'clothing-list',
      component: () => import('./views/ClothingList.vue')
    },
    {
      path: '/clothes/:id',
      name: 'clothes',
      component: () => import('./views/Clothes.vue')
    }
  ]
})
