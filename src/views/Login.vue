<template>
  <body class="bg-primary bg-pattern">
        <div class="home-btn d-none d-sm-block">
            <router-link to="/"><i class="mdi mdi-home-variant h2 text-white"></i></router-link>
        </div>

        <div class="account-pages pb-sm-5 pt-sm-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center mb-5">
                            <router-link to="/" class="logo"><img src="../assets/images/miceshadow.png" height="45" alt="logo"></router-link>
                            <h5 class="font-size-16 text-white-50 mb-4">Selamat datang di halaman Login Event Dieng</h5>
                        </div>
                    </div>
                </div>
                <!-- end row -->

                <div class="row justify-content-center">
                    <div class="col-xl-5 col-sm-8">
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="p-2">
                                    <h5 class="mb-5 text-center">Login untuk melanjutkan</h5>
                                    <form class="form-horizontal" @submit.prevent="logins">

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group form-group-custom mb-4">
                                                    <input type="email" class="form-control" id="email" required v-model="login.email">
                                                    <label for="email">Email</label>
                                                </div>

                                                <div class="form-group form-group-custom mb-4">
                                                    <input type="password" class="form-control" id="userpassword" required v-model="login.password">
                                                    <label for="userpassword">Password</label>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="customControlInline">
                                                            <label class="custom-control-label"
                                                                for="customControlInline">Ingat saya</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="text-md-right mt-3 mt-md-0">
                                                            <a href="#" class="text-muted"><i
                                                                    class="mdi mdi-lock"></i> Lupa Password ?</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-4">
                                                    <button class="btn btn-success btn-block waves-effect waves-light" type="submit">Log In</button>
                                                </div>
                                                <div class="mt-4 text-center">
                                                    <router-link to="/register" class="text-muted"><i class="mdi
                                                            mdi-account-circle mr-1"></i> Buat akun</router-link>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row -->
            </div>
        </div>
        <!-- end Account pages -->

        <!-- JAVASCRIPT -->
        <!-- <script src="assets/libs/jquery/jquery.min.js"></script>
        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>

        <script src="https://unicons.iconscout.com/release/v2.0.1/script/monochrome/bundle.js"></script>

        <script src="assets/js/app.js"></script> -->

    </body>
</template>

<script>
// import Axios from 'axios'
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    logins() {
      this.$store.dispatch('postApi', {
        url: 'login',
        data: {
          username: this.login.email,
          password: this.login.password,
        }
      })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res)
          if (res.data.valid === null) {
            // eslint-disable-next-line no-console
            console.log('blom valid')
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Akun Anda Belum Diverifikasi'
            })
          }
          else if (res.data.status === 3) {
            // eslint-disable-next-line no-console
            console.log('salah')
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Email Atau Password Salah!',
            })
          }
          else if (res.data.accessToken) {
            localStorage.token = res.data.accessToken
          
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Login Success',
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
    },
  },
  created() {
    if (localStorage.token) {
      this.$router.push('/stages')
    }
  }
}
</script>

<style>
  @import '../assets/css/bootstrap.min.css';
  @import '../assets/css/icons.min.css';
  @import '../assets/css/app.min.css';
</style>