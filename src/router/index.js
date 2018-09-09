/*
路由
* */
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home/Home.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import Category from '../pages/Category/Category.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Person from '../pages/Person/Person.vue'
const router = new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      meta:{
        showFooter: true,
        showToTop: true
      }
    },
    {
      path: '/category',
      component: Category,
      meta:{
        showFooter: true,
        showToTop: false
      }
    },
    {
      path: '/shiwu',
      component: Shiwu,
      meta:{
        showFooter: true,
        showToTop: true
      }
    },
    {
      path: '/shopping',
      component: Shopping,
      meta:{
        showFooter: true,
        showToTop: false
      }
    },
    {
      path: '/person',
      component: Person,
      showToTop: false
    }
  ]
})

export default router
