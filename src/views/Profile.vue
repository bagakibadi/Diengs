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
                                                <div class="form-group col-sm-6">
                                                    <label for="alamat">Alamat</label>
                                                    <input type="text" class="form-control" id="alamat" placeholder="Silahkan Masukan Alamat" v-model="profile.alamat">
                                                </div>
                                                <!-- <div class="form-group col-sm-6">
                                                    <label for="hp">No.Hp</label>
                                                    <input type="number" class="form-control" id="hp" placeholder="Silahkan Masukan No.Hp" v-model="profile.hp">
                                                </div> -->
                                                <div class="form-group col-sm-6">
                                                    <label for="provinsi">Provinsi</label>
                                                    <select class="form-control" id="provinsi" v-model="provinsi" @change="getKota">
                                                        <option selected>Silahkan Pilih Provinsi</option>
                                                        <option v-for="(provs, index) in ongkir" 
                                                        :key="index"
                                                        :value="provs.province_id">{{ provs.province }}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-sm-6">
                                                    <label for="kota">Kabupaten</label>
                                                    <select :placeholder="isLoading ? 'Loading...' : 'Silahkan Pilih Kabupaten'" class="form-control" id="kota" v-model="kabupaten">
                                                        <option selected>-Silahkan Pilih Kabupaten-</option>
                                                        <option v-for="(kota, index) in kota" 
                                                        :key="index"
                                                        :value="kota.city_id">{{ kota.city_name }}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-sm-6">
                                                    <label for="kodepos">Kode Pos</label>
                                                    <input type="text" class="form-control" id="kodepos" placeholder="Silahkan Masukan Kode Pos" v-model="profile.pos">
                                                </div>
                                                <div>
                                                    <button type="submit" class="btn btn-primary" style="width:200px;height:45px;border-radius:25px">Submit</button>
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

            </div>
            <!-- end main content-->

        </div>
        <!-- END layout-wrapper -->
    </body>
</template>

<script>

/* eslint-disable no-console */


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
      profile: {},
      change: {
        password: '',
      },
      prov: [],
      provinsi: null,
      kabupaten: null,
      news: [],
    //   kota: []
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
    getKota() {
      this.$store.dispatch('startFetch')
      this.$store.dispatch('getApi', {
        url: `rajaongkir/kota/${this.provinsi}`,
        mutation: "GET_KOTA"
      })
        .then((res) => {
            this.$store.dispatch('endFetch')
            // eslint-disable-next-line no-console
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
            this.$store.dispatch('endFetch')
        })
    },
    updateprofile() {
      Axios.post(`${process.env.VUE_APP_API}profile`, {
        alamat: this.profile.alamat,
        no_hp: this.profile.hp,
        provinsi: this.provinsi,
        kabupaten: this.kabupaten,
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
            console.log(res)
            Axios.get(`${process.env.VUE_APP_API}rajaongkir/ongkos/37/${this.kabupaten}/1/jne`)
                .then((res) => {
                    // eslint-disable-next-line no-console
                    console.log(res.data.rajaongkir.results[0].costs[1])
                    localStorage.url = 'kurir'
                    localStorage.jneReg = res.data.rajaongkir.results[0].costs[0].cost[0].value
                    localStorage.etdReg = res.data.rajaongkir.results[0].costs[0].cost[0].etd
                    localStorage.jneOke = res.data.rajaongkir.results[0].costs[1].cost[0].value
                    localStorage.etdOke = res.data.rajaongkir.results[0].costs[1].cost[0].etd
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Update Profile Success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(() => {
                        this.$router.push('/kurir')
                    }, 2000)
                })
                .catch((err) => {
                    // eslint-disable-next-line no-console
                    console.log(err)
                })

            // }
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
    },
  },
  created() {
      // eslint-disable-next-line no-console
      console.log(this.profile)
      if(!localStorage.token) {
          this.$router.push('/masuk')
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
    ...mapState(['isLoading']),
    ...mapState(['profileUser']),
    ...mapState(['ongkir']),
    ...mapState(['kota']),
  },
  mounted() {
    this.$store.dispatch('getAcc')
    this.$store.dispatch('getOngkir')
  },
  updated() {
      // eslint-disable-next-line no-console
    // if (this.provinsi === null) {
    //   return;
    // }
    // if (this.kota.length > 0) {
    //   return
    // }
    // this.$store.dispatch('getApi', {
    //     url: `rajaongkir/kota/${this.provinsi}`,
    //     mutation: "GET_KOTA"
    // })
  }

}
</script>

<style lang="scss" scoped>
  .submit{
    padding: 10px 35px;
    border-radius: 25px;
    font-weight: bold;
  }
</style>