/*
路由
* */
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*import Home from '../pages/Home/Home.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import Category from '../pages/Category/Category.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Person from '../pages/Person/Person.vue'
import Login from '../pages/Login/Login.vue'*/

const Home = () =>  import('../pages/Home/Home.vue')
const Shiwu = () =>  import('../pages/Shiwu/Shiwu.vue')
const Category = () =>  import('../pages/Category/Category.vue')
const Shopping = () =>  import('../pages/Shopping/Shopping.vue')
const Person = () =>  import('../pages/Person/Person.vue')
const Login = () =>  import('../pages/Login/Login.vue')

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
        showFooter: true
      }
    },
    {
      path: '/category',
      component: Category,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/shiwu',
      component: Shiwu,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/shopping',
      component: Shopping,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/person',
      component: Person
    },
    {
      path: '/phoneLg',
      component: Login
    },
    {
      path: '/messageLg',
      component: Login
    },
  ]
})

router.beforeEach((to,from,next) => {
  //console.log(to,from,next)  进入所有的组件前都会执行这个函数
  document.body.scrollTop = 0

  next()
})

export default router
