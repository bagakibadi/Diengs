<template>
  <body class="bg-primary bg-pattern" style="height: 100vh;display: flex;align-items: center">
      <div class="home-btn d-none d-sm-block">
          <a href="index.html"><i class="mdi mdi-home-variant h2 text-white"></i></a>
      </div>

      <div class="account-pages" style="width:100%">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="text-center mb-5">
                          <a href="index.html" class="logo"><img src="../assets/images/logo-light.png" height="24" alt="logo"></a>
                          <h5 class="font-size-16 text-white-50 mb-4">Selamat datang di halaman Pilih Tiket Event
                              Dieng</h5>
                      </div>
                  </div>
              </div>
              <!-- end row -->

              <div class="row justify-content-center">
                  <div class="col-xl-5 col-sm-8">
                      <div class="card">
                          <div class="card-body p-4">
                              <div class="p-2">
                                  <h5 class="mb-5 text-center">Pilih Tiket</h5>
                                  <div class="form-horizontal">
                                  <!--  -->
                                      <div class="row">
                                          <div class="form-row col-md-12">
                                              <div class="col-md-6">
                                                  <button @click="free" class="btn btn-info btn-block waves-effect waves-light">
                                                      Free
                                                  </button>
                                              </div>
                                              <div class="col-md-6">
                                                  <button @click="pay" class="btn btn-warning btn-block waves-effect waves-light">
                                                      Sovenir
                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <!--  -->
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

  </body>
</template>

  <script src="../assets/libs/jquery/jquery.min.js"></script>
  <script src="../assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../assets/libs/metismenu/metisMenu.min.js"></script>
  <script src="../assets/libs/simplebar/simplebar.min.js"></script>
  <script src="../assets/libs/node-waves/waves.min.js"></script>
  <script src="../https://unicons.iconscout.com/release/v2.0.1/script/monochrome/bundle.js"></script>
  <script src="../assets/js/app.js"></script>
<script>
export default {
  // data() {
  //   return {

  //   }
  // },
  methods: {
    free() {
      localStorage.tipe = 0
      this.$router.push('/register')
    },
    pay() {
      localStorage.tipe = 1
      this.$router.push('/register')
    }
  }
}
</script>

<style>
  @import '../assets/css/bootstrap.min.css';
  @import '../assets/css/icons.min.css';
  @import '../assets/css/app.min.css';
</style>
