import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Text from '../views/Text.vue'
import Table from '../views/Table.vue'
import Bar from '../views/Bar.vue'
import Graph from '../views/Graph.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/Home',
    name: 'home',
    component: Home,
    children:[
      {
        path: '/Text',
        name: 'text',
        component: Text
      },{
        path: '/Table',
        name: 'table',
        component: Table
      },{
        path: '/Bar',
        name: 'bar',
        component: Bar
      },{
        path: '/Graph',
        name: 'graph',
        component: Graph
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
