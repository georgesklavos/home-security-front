import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Home from "../views/Home.vue";
import Dashboard from "../components/Dashboard.vue";
import Users from "../components/Users/Users.vue";
import Alarms from "../components/Alarms/Alarms.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    redirect: () => {
      return {path: "/main/dashboard"};
    },
    children: [
      {
        path: "dashboard",
        component: Dashboard
      },
      {
        path: "alarms",
        component: Alarms
      },
      {
        path: "users",
        component: Users
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes
})

export default router
