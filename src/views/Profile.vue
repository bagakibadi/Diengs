<template>
  <body data-topbar="colored" data-layout="horizontal" data-layout-size="boxed">

        <!-- Begin page -->
        <div id="layout-wrapper">

            <header id="page-topbar">
                <div class="navbar-header">
                    <div class="container-fluid">
                        <div class="float-right">
                            <div class="dropdown d-inline-block">
                                <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img class="rounded-circle header-profile-user" src="../assets/images/users/avatar-1.jpg" alt="Header Avatar">
                                    <span class="d-none d-sm-inline-block ml-1">{{profileUser.first_name}}</span>
                                    <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <!-- item-->
                                    <router-link class="dropdown-item" to="/profile"><i class="mdi mdi-face-profile font-size-16 align-middle mr-1"></i> Profile</router-link>
                                    <div class="dropdown-divider"></div>
                                    <router-link class="dropdown-item" to='/logout'><i class="mdi mdi-logout font-size-16 align-middle mr-1"></i> Logout</router-link>
                                </div>
                            </div>
                        </div>

                        <!-- LOGO -->
                        <div class="navbar-brand-box">
                            <router-link to="/" class="logo logo-dark">
                                <span class="logo-sm">
                                    <img src="../assets/images/miceshadow.png" alt="" height="45">
                                </span>
                                <span class="logo-lg" style="box-shadow: 0 0 5px 0">
                                    <img src="../assets/images/miceshadow.png" alt="" height="45">
                                </span>
                            </router-link>

                            <router-link to="/" class="logo logo-light">
                                <span class="logo-sm">
                                    <img src="../assets/images/miceshadow.png" alt="" height="45">
                                </span>
                                <span class="logo-lg">
                                    <img src="../assets/images/miceshadow.png" alt="" height="45">
                                </span>
                            </router-link>
                        </div>

                        <button type="button" class="btn btn-sm mr-2 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content">
                            <i class="fa fa-fw fa-bars"></i>
                        </button>

                        <div class="topnav">
                            <nav class="navbar navbar-light navbar-expand-lg topnav-menu">

                                <!-- <div class="collapse navbar-collapse" id="topnav-menu-content">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="dashboard.html">
                                                Dashboard
                                            </a>
                                        </li>

                                        <li class="nav-item dropdown">
                                            <a class="nav-link" href="manajemen_user.html">
                                               Manajemen User
                                            </a>
                                        </li>

                                        <li class="nav-item dropdown">
                                            <a class="nav-link" href="manajemen_room.html">
                                               Manajemen Room
                                            </a>
                                        </li>
                                    </ul>
                                </div> -->
                            </nav>
                        </div>
                    </div>
                </div>

    
            </header>

            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->
            <div class="main-content">

                <div class="page-content">
                    
                    <!-- Page-Title -->
                    <div class="page-title-box">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h4 class="page-title mb-1">Edit Profile</h4>
                                    <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item active">Selamat datang di website Event Dieng</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end page title end breadcrumb -->

                    <div class="page-content-wrapper">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="header-title mt-4">Edit Profile</h5>
                                            <p>
                                            Untuk mengubah profile anda harap edit informasi dibawah ini
                                            </p>
                                            <form @submit.prevent="updateprofile">
                                                <div class="row mb-2">
                                                    <div class="input-group col-sm-6">
                                                        <input class="form-control" type="text" required placeholder="Alamat..." v-model="profile.alamat">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">Alamat</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="input-group col-sm-6">
                                                        <input class="form-control" type="text" required placeholder="No HP" v-model="profile.no_hp">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">No HP</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="input-group col-sm-6">
                                                        <input class="form-control" type="text" required placeholder="Provinsi" v-model="profile.provinsi">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">Provinsi</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="input-group col-sm-6">
                                                        <input class="form-control" type="text" required placeholder="Kabupaten" v-model="profile.kabupaten">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">Kabupaten</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="input-group col-sm-6">
                                                        <input class="form-control" type="text" required placeholder="Kode Pos" v-model="profile.kode_pos">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">Kode Pos</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="input-group col-sm-6">
                                                        <input type="submit" class="btn btn-info">
                                                    </div>
                                                </div>
                                            </form>
                                            <h5 class="header-title mt-4">Edit Kredensial User</h5>
                                            <p>Untuk mengubah kredensial user harap edit informasi dibawah ini</p>
                                            <form action="#" @submit.prevent="kredensialuser">
                                                <div class="row mb-2">
                                                    <div class="input-group col-sm-6">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">First Name</span>
                                                        </div>
                                                        <input class="form-control" type="text" placeholder="First Name..." v-model="user.first">
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="input-group col-sm-6">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Last Name</span>
                                                        </div>
                                                        <input class="form-control" type="text" placeholder="Last Name..." v-model="user.last">
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="input-group col-sm-6">
                                                        <input type="submit" value="Update Kredensial" class="btn
                                                        btn-warning">
                                                    </div>
                                                </div>
                                            </form>
                                            <h5 class="header-title mt-4">Ganti Password</h5>
                                            <p>Untuk mengganti password harap masukkan disini...</p>
                                            <form action="#" @submit.prevent="changepass">
                                                <div class="row mb-2">
                                                    <div class="input-group col-sm-6">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Password</span>
                                                        </div>
                                                        <input class="form-control" type="password" placeholder="Password..." v-model="change.password">
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="input-group col-sm-6">
                                                        <input type="submit" value="Ganti Password" class="btn
                                                                                    btn-danger">
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end row -->
                        </div> <!-- container-fluid -->
                    </div>
                    <!-- end page-content-wrapper -->
                </div>
                <!-- End Page-content -->


                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                2020 © Xoric.
                            </div>
                            <div class="col-sm-6">
                                <div class="text-sm-right d-none d-sm-block">
                                    Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesdesign
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <!-- end main content-->

        </div>
        <!-- END layout-wrapper -->
    </body>
</template>

<script>
import Axios from 'axios'
import Swal from 'sweetalert2'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      user: {
        first: '',
        last: '',
      },
      profile: {
        // alamat: '',
        // provinsi: '',
        // kabupaten: '',
        // pos: '',
      },
      change: {
        password: '',
      }
    //   test: {}
    }
  },
  methods: {
    getProfile() {
      Axios.get(`${process.env.VUE_APP_API}profile`, {
          headers: {
            'Authorization': `${localStorage.getItem('token')}`
          }
      })
        .then((res) => {
            // eslint-disable-next-line no-console
            console.log(res)
            this.profile = res.data
        })
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err)
        })
    },
    updateprofile() {
      Axios.post(`${process.env.VUE_APP_API}profile`, {
        alamat: this.profile.alamat,
        no_hp: this.profile.hp,
        provinsi: this.profile.provinsi,
        kabupaten: this.profile.kabupaten,
        kode_pos: this.profile.pos
      }, {
        headers: {
          'Authorization': `${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res)
          if (res.data.msg === "Berhasil") {
            // eslint-disable-next-line no-console
            console.log('benar')
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Update Profile Success',
              showConfirmButton: false,
              timer: 1500
            })
            setTimeout(() => {
              this.$router.push('/stages')
            }, 2000)
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
    }
  },
  created() {
      // eslint-disable-next-line no-console
      console.log(this.profile)
      if(!localStorage.token) {
          this.$router.push('/login')
      } else {
          Axios.get(`${process.env.VUE_APP_API}profile`, {
                headers: {
                    'Authorization': `${localStorage.getItem('token')}`
                }
            })
                .then((res) => {
                    // eslint-disable-next-line no-console
                    console.log(res)
                    this.profile = res.data
                })
                .catch((err) => {
                    // eslint-disable-next-line no-console
                    console.log(err)
                })
      }
  },
  computed: {
    ...mapState(['profileUser'])
  },
  mounted() {
    this.$store.dispatch('getAcc')
  }
}
</script>

<style>

</style>