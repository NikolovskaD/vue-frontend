import Vue from 'vue'
import VueRouter from 'vue-router'
import Login2 from '../views/Login2.vue'
import Login from '../views/Login.vue'
import NewAdvertisement from "../components/NewAdvertisement";
import AllAdvertisements from "../components/AllAdvertisements";
import SingleAdvertisement from "../components/SingleAdvertisement";
import Profile from "../views/Profile";
import Register2 from "../views/Register2";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component:() => import( '../views/Home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component:() => import( '../views/Home.vue')
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
    path: '/contact',
    name: 'Contact',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/login2',
    name: 'Login2',
    component: Login2
  },
  {
    path: '/new-ad',
    name: 'NewAdvertisement',
    component: NewAdvertisement
  },
  {
    path: '/all-ads',
    name: 'AllAdvertisements',
    component: AllAdvertisements
  },
  {
    path: '/ad/:id',
    name: 'SingleAdvertisement',
    component: SingleAdvertisement
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/register',
    name: 'Register',
    component: Register2
  },
  {
    path: '/admin',
    name: 'admin',
    // lazy-loaded
    component: () => import('../views/BoardAdmin.vue')
  },
  {
    path: '/mod',
    name: 'moderator',
    // lazy-loaded
    component: () => import('../views/BoardModerator.vue')
  },
  {
    path: '/user',
    name: 'user',
    // lazy-loaded
    component: () => import('../views/BoardUser.vue')
  }


];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router
