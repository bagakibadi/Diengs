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
                                    <a class="dropdown-item" href="profile.html"><i class="mdi mdi-face-profile font-size-16 align-middle mr-1"></i> Profile</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="auth-login.html"><i class="mdi mdi-logout font-size-16 align-middle mr-1"></i> Logout</a>
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

                                <div class="collapse navbar-collapse" id="topnav-menu-content">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <router-link to="/" class="nav-link">
                                                Dashboard
                                            </router-link>
                                        </li>

                                        <li class="nav-item dropdown">
                                            <router-link class="nav-link" to="/admin">Manajemen User</router-link>
                                        </li>

                                        <li class="nav-item dropdown">
                                            <router-link to="/admin/room" class="nav-link">
                                                Manajemen Room
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
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
                                    <h4 class="page-title mb-1">Manajemen Room</h4>
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
                                            <h5 class="header-title mb-4">Manajemen Room</h5>
                                            <p>
                                            Untuk Mengubah video di halaman Stages harap ubah URL disini
                                            </p>
                                            <form @submit.prevent="updateurl" class="form-row">
                                                <div class="input-group col-sm-6">
                                                    <input class="form-control" type="text" required v-model="url" placeholder="Masukin Link Embed Youtube...">
                                                    <div class="input-group-append">
                                                        <button type="submit" class="btn btn-info">Update URL</button>
                                                    </div>
                                                </div>
                                            </form>
                                            <p></p>
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

            </div>
            <!-- end main content-->

        </div>
        <!-- END layout-wrapper -->
    </body>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      url: ''
    }
  },
  methods: {
    updateurl() {
      this.$store.dispatch('postApi', {
        url: 'videourl',
        data: {
          url: this.url
        }
      })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res)
          Swal.fire(
            'Update Url Berhasil',
            // 'You clicked the button!',
            'success'
          )
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
  @import '../assets/libs/air-datepicker/css/datepicker.min.css';
  @import '../assets/css/bootstrap.min.css';
  @import '../assets/css/icons.min.css';
  @import '../assets/css/app.min.css';
</style>