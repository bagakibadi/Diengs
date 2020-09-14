import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import Router from 'vue-router'
const Login = () => import ('@/views/Login')
const Register = () => import ('@/views/Daftar')
// const Ticket = () => import ('@/views/Ticket')
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
const Kurir = () => import ('@/views/Kurir')
const NewRegist = () => import ('@/views/NewRegist')
const Pilihkurir = () => import ('@/views/Kurirs')

Vue.use(Router)

const routes = [
  {
    path: '/pilihkurir',
    name: 'Kurirs',
    component: Pilihkurir
  },
  {
    path: '/kurir',
    name: 'Kurir',
    component: Kurir
  },
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
    path: '/masuk',
    name: 'Login',
    component: Login
  },
  {
    path: '/daftar',
    name: 'Daftar',
    component: Register,
  },
  {
    path: '/ticket',
    name: 'Ticket',
    component: NewRegist
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '*',
    name: 'Page Not Found',
    component: () => import('@/views/PageNotFound.vue'),
    meta: {
      title: 'Halaman Tidak Ditemukan | Carrent'
    }
  }
];

const router = new Router({
  mode: 'history',
  routes
})
export default router