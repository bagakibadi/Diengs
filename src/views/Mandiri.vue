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
                                    <img class="rounded-circle header-profile-user" src="../assets/images/iconprofiles.png" alt="Header Avatar">
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
                                    <h4 class="page-title mb-1">Bayar</h4>
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
                                            <div class="row justify-content-center">
                                                <div class="col-lg-10">
                                                    <div class="text-center mt-4">
                                                        <h2>Pembayaran</h2>
                                                        <!-- <p class="text-muted">If several languages coalesce, the grammar of the resulting language</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-5 d-flex align-items-center" style="flex-direction: column;">
                                                <h5>Silahkan Transfer Sebesar</h5>
                                                <h5>Rp.{{total}}</h5>
                                                <h5>Ke Rekening Mandiri :</h5>
                                                <div class="card d-flex align-items-center" style="flex-direction: column; padding: 20px 20px 10px 20px; border: 1px solid #999;">
                                                    <img src="https://statik.tempo.co/data/2018/02/06/id_682386/682386_720.jpg" style="width:150px">
                                                    <p class="mb-0 mt-2">164-000-1873043</p>
                                                    <span>a/n</span>
                                                    <p>PT. Prima Mandiri Komunikasi</p>
                                                </div>
                                                <div class="d-flex justify-content-center mb-2" style="flex-direction: column; align-items: center">
                                                    <h5>Jika ada Kendala Dalam Pembayaran Silahkan Hubungi Customer Service di WA</h5>
                                                    <a href="http://wa.me/628113475177" target="_blank">
                                                        <img src="../assets/images/wa.png" style="width:100px">
                                                    </a>
                                                </div>
                                                <form @submit.prevent="uploadFile">
                                                    <div class="text-center">
                                                        <h5 for="upload">Silahkan Upload Bukti pembayaran anda disini :</h5>
                                                        <input @change="click" type="file" id="upload" required>
                                                    </div>
                                                    <div class="form-group form-group-custom mb-4 mt-3">
                                                        <input type="text" class="form-control" id="rekening" required v-model="rekening">
                                                        <label for="rekening">Masukan No.Rekening Anda</label>
                                                    </div>
                                                    <div>
                                                        <button type="submit" class="btn btn-primary mt-3" style="width: 200px;height:50px;border-radius:25px">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
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
import Axios from 'axios'
// import Swal from 'sweetalert2'
import { mapState } from 'vuex'
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      total: localStorage.total,
      file: null,
      rekening: null,
      namakurir: null,
      hargakurir: null
    }
  },
  methods: {
    click(event) {
      this.file = event.target.files[0]
    },
    uploadFile() {
      const fd = new FormData()
    //   Bukti Pembayaran
      fd.append('pembayaran', this.file)
    //   NO. Rekening Pembeli
      fd.append('no_rek', this.rekening)
    //   Nama Kurir
      fd.append('kurir', localStorage.namakurir)
    //   Harga Kurir
      fd.append('keterangan', localStorage.pilih)
    //   Nominal Kurir
      fd.append('nominal', localStorage.total)
        Axios.post(`${process.env.VUE_APP_API}pembayaran`,fd
        ,{
            headers: {
                'Authorization' : `${localStorage.token}`
            }
        })
            .then((res) => {
                // eslint-disable-next-line no-console
                console.log(res)
                if (res.data.status === true) {
                // eslint-disable-next-line no-console
                console.log('bener')
                Swal.fire(
                    'Upload Foto Berhasil',
                    'Silahkan Logout dan Hubungi Admin untuk meminta verifikasi',
                    'success'
                )
                setTimeout(() => {
                    localStorage.clear()
                    this.$router.push('/')
                }, 2000)
                } else{
                // eslint-disable-next-line no-console
                console.log('salah')
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
    ...mapState(['profileUser']),
    ...mapState(['ongkir']),
    ...mapState(['kota']),
  },
  mounted() {
    this.$store.dispatch('getAcc')
    this.$store.dispatch('getOngkir')
    // this.getKota()
  },
  updated() {
    this.$store.dispatch('getApi', {
        url: `rajaongkir/kota/${this.provinsi}`,
        mutation: "GET_KOTA"
    })
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