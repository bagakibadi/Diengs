import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import ('@/views/Login')
const Register = () => import ('@/views/Daftar')
const Ticket = () => import ('@/views/Ticket')
const Index = () => import ('@/views/Homes')
const Admin = () => import ('@/views/Admin')
const Test = () => import ('@/views/Test')
const Profile = () => import ('@/views/Profile')
const Stages = () => import ('@/views/Stages')
const Logout = () => import ('@/views/Logout')
const Room = () => import ('@/views/Room')
const Pembayaran = () => import ('@/views/Pembayaran')
const Upload = () => import ('@/views/Upload')
const Meeting = () => import ('@/components/Meeting')

Vue.use(Router)

const routes = [
  {
    path: '/meeting',
    name: 'Meeting',
    component: Meeting
  },
  {
    path: '/uploadproof',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/pembayaran',
    name: 'Pembayaran',
    component: Pembayaran
  },
  {
    path: '/bos/room',
    name: 'Room',
    component: Room
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/stages',
    name: 'Stages',
    component: Stages,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/bos',
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