import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import ('@/views/Login')
const Register = () => import ('@/views/Daftar')
const Ticket = () => import ('@/views/Ticket')
const Index = () => import ('@/views/Home')
const Admin = () => import ('@/views/Admin')
const Test = () => import ('@/views/Test')

Vue.use(Router)

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Daftar',
    component: Register,
  },
  {
    path: '/ticket',
    name: 'Ticket',
    component: Ticket
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
];

const router = new Router({
  mode: 'history',
  routes
})
export default router