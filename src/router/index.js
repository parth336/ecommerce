import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import addCategory from '../views/category/addCategory.vue'
import categories from '../views/category/categories.vue'
import Admin from '../views/category/admin.vue'
import viewItem from '../views/viewItem.vue'
import cart from '../views/cart.vue'
import logout from '../views/logout.vue'
import login from '../views/login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:"/admin",
    name:"Admin",
    component:Admin
  },
  {
    path:"/admin/category/add",
    name:"AddCategory",
    component: addCategory
  },
  {
    path:"/admin/categories",
    name:"Categories",
    component: categories
  },
  {
    path:"/viewItem/:id",
    name:"viewItem",
    component:viewItem
  },
  {
    path:"/cart",
    name:"Cart",
    component:cart
  },
  {
    path:"/logout",
    name:"Logout",
    component:logout
  },
  {
    path:"/login",
    name:"Login",
    component:login
  }

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
