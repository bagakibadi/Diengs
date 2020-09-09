<template>
  <div class="containers">
    <!-- Navbars -->
    <!-- <div class="navbars">
      <div class="logos">
        <img src="../assets/images/mice.png" alt="">
      </div>
      <div class="login">
        <router-link class="btn btn-danger mr-3" to="/login">Login</router-link>
        <router-link class="btn btn-danger mr-2" to="/register">Register</router-link>
      </div>
    </div> -->
    <div class="teqtt">
    <header id="page-topbar">
                <div class="navbar-header">
                    <div class="container-fluid">
                        <div class="float-right">
                          <div class="buttoner" v-if="!isLogin">
                            <router-link class="btn btn-success login" to="/login">Login</router-link>
                            <router-link class="btn btn-success" to="/register">Daftar</router-link>
                          </div>
                          <div class="dropdown d-inline-block" v-else>
                              <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <img class="rounded-circle header-profile-user" src="../assets/images/users/avatar-1.jpg" alt="Header Avatar">
                                  <span class="d-none d-sm-inline-block ml-1">{{profileUser.first_name}}</span>
                                  <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                              </button>
                              <div class="dropdown-menu dropdown-menu-right">
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
    </div>
    <!--  -->
    <!--Carousel Wrapper-->
    <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">
      <!--Indicators-->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-1z" data-slide-to="1"></li>
        <li data-target="#carousel-example-1z" data-slide-to="2"></li>
      </ol>
      <!--/.Indicators-->
      <!--Slides-->
      <div class="carousel-inner" role="listbox">
        <!--First slide-->
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://loket-development.s3.amazonaws.com/images/ss/1596134412_8uFDbG.jpg"
            alt="First slide">
        </div>
        <!--/First slide-->
        <!--Second slide-->
        <div class="carousel-item">
          <img class="d-block w-100" src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1598443215_vptrt5.jpg"
            alt="Second slide">
        </div>
        <!--/Second slide-->
        <!--Third slide-->
        <div class="carousel-item">
          <img class="d-block w-100" src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1599017003_O4igGH.jpg"
            alt="Third slide">
        </div>
        <!--/Third slide-->
      </div>
      <!--/.Slides-->
      <!--Controls-->
      <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <!--/.Controls-->
    </div>
    <!--  -->
    <!-- Content Event -->
    <div class="contents">
      <div class="featureds">
        <h1>Featured Event</h1>
        <div class="cardevent">
          <div class="imagecard">
            <img src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20200831194010_5f4cefaac1d09.jpg" alt="">
          </div>
          <div class="cardcontent">
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
               maxime eum consectetur quasi iste adipisci nam quas esse quaerat
                laboriosam
            </p>
            <div>
              <router-link to="/ticket">
                <button class="btn btn-primary">BELI TIKET</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="topsells">
        <h1>Top Selling</h1>
        <div class="cardsells">
          <div class="cards" v-for="i in 3" :key="i.id">
            <div class="imgcards">
              <img src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20200818181327_5f3bb7d79bb4f.jpg" alt="">
            </div>
            <div class="contentcards">
              <div>
                <div class="judulcards">
                  <h1>Komodik</h1>
                </div>
                <div class="cntncards">
                  <div class="textcards">
                    <p>Comika Entertainment</p>
                    <p>20 December 2020</p>
                    <p>Istora Senayan, DKI Jakarta</p>
                  </div>
                  <div class="buton">
                    <button class="btn btn-primary">BELI</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <div class="pluscntn bg-info">
      <div class="imgplus">
        <img src="https://loket-asset-production.s3.amazonaws.com/loket-live.png" alt="">
      </div>
      <div class="cntnplus">
        <div class="judulplus">
          <h1>Buat Event Online sekarang lebih mudah di LOKET</h1>
          <p>Mulai dari acara musik, diskusi, workshop hingga online webinar LOKET
             sekarang hadir dengan fitur LOKET LIVE
             untuk event creator yang membutuhkan layanan streaming langsung</p>
        </div>
        <!-- <div>
        </div> -->
        <div class="btn btn-primary">BUAT EVENT</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      isLogin: localStorage.token
    }
  },
  computed: {
    ...mapState(['profileUser'])
  },
  mounted() {
    this.$store.dispatch('getAcc')
  }
};
</script>

<style lang="scss" scoped>
  .buttoner{
    height: 70px;
    display: flex;
    align-items: center;
    .login{
      margin-right: 10px;
    }
  }
  #page-topbar{
    background: #f96565;
  }
  .teqtt{
    height: 70px;
    margin-bottom: 10px;
  }
  .navbars{
    width: 100%;
    height: 70px;
    background: #f96565;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .logos img{
    width: 150px;
    margin-left: 30px;
  }
  .contents{
    display: flex;
    justify-content: center;
    padding: 30px 0;
    margin-bottom: 30px;
  }
  .featureds{
    display: flex;
    flex-direction: column;
  }
  .featureds h1{
    font-size: 20px;
    font-weight: bolder;
  }
  .cardevent{
    width: 472px;
    height: 410px;
    background: white;
    border-radius: 10px;
    margin-right: 10px;
    box-shadow: 0 2px 6px 0 rgba(28,29,29,.25);
  }
  .topsells{
    display: flex;
    flex-direction: column;
  }
  .imagecard{
    width: 100%;
    height: 225px;
    object-fit: cover;
  }
  .imagecard img{
    width: 100%;
    height: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .cardcontent{
    padding: 15px 10px;
  }
  .cardcontent h1{
    font-weight: bold;
  }
  .cardcontent p{
    font-size: 15px;
    max-height: 66px;
  }
  .topsells h1{
    font-size: 20px;
    font-weight: bolder;
  }
  .cardsells{
    width: 472px;
    height: 410px;
    background: white;
    border-radius: 10px;
    margin-right: 10px;
    box-shadow: 0 2px 6px 0 rgba(28,29,29,.25);
  }
  .cardsells .cards{
    width: 100%;
    height: calc(100% /3);
    padding: 10px;
    background: white;
    display: flex;
    border-bottom: 1px solid #d8d8d8;
  }
  .imgcards img{
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 10px;
  }
  .contentcards{
    padding: 0 10px;
    display: flex;
  }
  .judulcards h1{
    font-size: 14px;
    max-width: 265px;
    overflow: hidden !important;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cntncards{
    display: flex;
  }
  .textcards{
    max-width: 200px;
  }
  .textcards p{
    font-size: 14px;
    margin: 0;
    max-height: 21px;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .buton{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 30px;
  }
  .buton button{
    padding: 5px 25px;
  }
  .pluscntn{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    margin-top: 60px;
    .imgplus{
      width: 500px;
      img{
        width: 450px;
      }
    }
    .cntnplus{
      width: 500px;
      .judulplus{
        color: white;
        h1{
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
          color: black;
        }
        p{
          font-size: 16px;
        }
      }
    }
  }
</style>
