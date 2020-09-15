<template>
  <body class="bg-primary bg-pattern">
        <div class="home-btn d-none d-sm-block">
            <router-link to="/"><i class="mdi mdi-home-variant h2 text-white"></i></router-link>
        </div>

        <div class="account-pages pb-sm-5 pt-sm-5 loginpage">
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
                                                    <!-- <div class="col-md-6">
                                                        <div class="text-md-right mt-3 mt-md-0">
                                                            <a href="#" class="text-muted"><i
                                                                    class="mdi mdi-lock"></i> Lupa Password ?</a>
                                                        </div>
                                                    </div> -->
                                                </div>
                                                <div class="mt-4">
                                                    <button class="btn btn-success btn-block waves-effect waves-light" type="submit">Log In</button>
                                                </div>
                                                <div class="mt-4 text-center" v-if="!tipe">
                                                    <!-- <router-link to="/ticket" class="text-muted"><i class="mdi -->
                                                            <!-- mdi-account-circle mr-1"></i> Buat akun</router-link> -->
                                                </div>
                                                <div class="mt-4 text-center" v-else>
                                                    <router-link to="/ticket" class="text-muted"><i class="mdi
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
      },
      tipe: localStorage.tipe
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
          if (res.data.valid === null && res.data.tipe === 0) {
            // eslint-disable-next-line no-console
            console.log('blom valid')
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
          else if (res.data.status === 3) {
            // eslint-disable-next-line no-console
            console.log('salah')
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Email Atau Password Salah!',
            })
          }
          // else if (res.data.tipe === 0) {
          //   localStorage.token = res.data.accessToken
          
          //   Swal.fire({
          //     position: 'center',
          //     icon: 'success',
          //     title: 'Login Success',
          //     showConfirmButton: false,
          //     timer: 1500
          //   })
          //   setTimeout(() => {
          //     this.$router.push('/stages')
          //   }, 2000)
          // }
          else if (res.data.tipe === 1 || res.data.tipe === 2 && res.data.valid === null && !localStorage.url) {          
            // Swal.fire({
            //   position: 'center',
            //   icon: 'success',
            //   title: 'Login Success',
            //   showConfirmButton: false,
            //   timer: 1500
            // })
            // setTimeout(() => {
            //   this.$router.push('/profile')
            // }, 2000)
            Swal.fire({
              icon: 'error',
              title: 'Akun anda belum diaktivasi',
              text: 'Silahkan tunggu beberapa menit atau hubungi Admin untuk verifikasi',
            })
          }
          else if (res.data.valid === 1) {
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
          else{
            localStorage.token = res.data.accessToken
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Login Success',
              showConfirmButton: false,
              timer: 1500
            })
            setTimeout(() => {
              this.$router.push('/profile')
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
      // this.$router.push('/profile')
      if (localStorage.url) {
        this.$router.push(`/${localStorage.url}`)
      } else {
        this.$router.push('/stages')
      }
    }
  }
}
</script>

<style>

  @import '../assets/css/bootstrap.min.css';
  @import '../assets/css/icons.min.css';
  @import '../assets/css/app.min.css';
  @media only screen and (max-width: 600px) {
    .loginpage{
      height: 100vh !important;
    }
  }
</style>