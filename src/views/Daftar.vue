<template>
  <body class="bg-primary bg-pattern">
        <div class="home-btn d-none d-sm-block">
            <a href="dashboard.html"><i class="mdi mdi-home-variant h2 text-white"></i></a>
        </div>

        <div class="account-pages pb-sm-5 pt-sm-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center mb-5">
                            <router-link to="/" class="logo"><img src="../assets/images/miceshadow.png" height="45" alt="logo"></router-link>
                            <h5 class="font-size-16 text-white-50 mb-4">Selamat datang di halaman Registrasi Event Dieng</h5>
                        </div>
                    </div>
                </div>
                <!-- end row -->

                <div class="row justify-content-center">
                    <div class="col-xl-5 col-sm-8">
                        <div class="card">
                            <div class="card-body p-4">
                                <div class="p-2">
                                    <h5 class="mb-5 text-center">Daftarkan akun anda untuk melanjutkan</h5>
                                    <form class="form-horizontal" @submit.prevent="daftars" >

                                        <div class="row">
                                            <div class="col-md-12">
                                                <!-- <div class="form-group form-group-custom mb-4">
                                                    <input type="text" class="form-control" id="username" required>
                                                    <label for="username">Username</label>
                                                </div> -->
                                                <div class="form-row form-group-custom mb-4">
                                                    <div class="col-md-6">
                                                        <input class="form-control" type="text" id="first_name" required v-model="daftar.first"> 
                                                        <label for="first_name">First Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input class="form-control" type="text" id="last_name" required v-model="daftar.last">
                                                        <label for="last_name">Last Name</label>
                                                    </div>
                                                </div>
                                                <div class="form-group form-group-custom mb-4">
                                                    <input type="number" class="form-control" id="hp" required v-model="daftar.hp">
                                                    <label for="hp">No. Hp</label>
                                                </div>
                                                <div class="form-group form-group-custom mb-4">
                                                    <input type="email" class="form-control" id="useremail" required v-model="daftar.email">
                                                    <label for="useremail">Email</label> 
                                                </div>
                                                <div class="form-group form-group-custom mb-4">
                                                    <input type="password" class="form-control" id="userpassword" required v-model="daftar.password">
                                                    <label for="userpassword">Password</label>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="term-conditionCheck">
                                                    <label class="custom-control-label font-weight-normal"
                                                        for="term-conditionCheck">Saya menerima <a href="#"
                                                            class="text-primary">Syarat dan Ketentuan</a></label>
                                                </div>
                                                <div class="mt-4">
                                                    <button class="btn btn-success btn-block waves-effect waves-light" type="submit">Register</button>
                                                </div>
                                                <div class="mt-4 text-center">
                                                    <router-link to="/masuk" class="text-muted"><i class="mdi
                                                             mdi-account-circle mr-1"></i> Sudah punya akun ?</router-link>
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
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      daftar: {
        email: '',
        password: '',
        first: '',
        last: '',
        hp: ''
      }
    }
  },
  created() {
    if (!localStorage.tipe) {
      this.$router.push('/ticket')
    }
  },
  methods: {
    daftars() {
      this.$store.dispatch('postApi', {
        url: 'register',
        data: {
          email: this.daftar.email,
          username: this.daftar.email,
          password: this.daftar.password,
          first_name: this.daftar.first,
          last_name: this.daftar.last,
          tipe: localStorage.tipe,
          no_hp: this.daftar.hp
        }
      })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res)
          if (res.data.status === 2) {
            // eslint-disable-next-line no-console
            console.log('salah')
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Email Sudah Terdaftar',
            })
          }
          else if (res.data.email !== null) {
            // eslint-disable-next-line no-console
            console.log('bener')
            if (localStorage.tipe == 0) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Register Success Silahkan Hubungi Admin untuk Aktivasi',
                showConfirmButton: false,
              })
            }
            else{
              this.$store.dispatch('postApi', {
                url: 'login',
                data: {
                  username: this.daftar.email,
                  password: this.daftar.password
                }
              })
                .then((res) => {
                  // eslint-disable-next-line no-console
                  console.log(res)
                  if (res.data.status === 3) {
                    delete localStorage.tipe
                    // this.$router.push('/')
                  } else {
                    // eslint-disable-next-line no-console
                    console.log(res)
                    localStorage.token = res.data.accessToken
                    Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'Register Success',
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
              // setTimeout(() => {
              //   this.$router.push('/profile')
              // }, 2000)
            }
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>