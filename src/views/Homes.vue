<template>
  <div class="firster">
    <a href="https://wa.me/628113475177" target="_blank">
      <div class="contact">
        <img src="../assets/images/wa.png" alt="">
        <h5>Customer Service</h5>
      </div>
    </a>
    <div class="contains">
      <div class="navfirst">
        <div class="nav">
          <div class="logo">
            <router-link to="/">
              <img src="@/assets/images/mice.png" alt="">
            </router-link>
          </div>
          <div class="buton">
            <router-link @click="destroy" to="/masuk">
              <button class="btn btn-primary masuk">Masuk</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="judul">
          <h1>Dieng Culture Festival 2020</h1>
        </div>
        <div class="isi">
          <p>Dieng Culture Festival merupakan acara tahunan khas Dataran Tinggi Dieng yang menampilkan berbagai kesenian dan budaya dengan inti acara pemotongan rambut gimbal anak-anak Dieng</p>
        </div>
        <div class="gratis">
          <button @click="gratis" class="btn btn-primary">IKUTI EVENT</button>
        </div>
        <!-- <div class="souvenir">
          <button @click="pay" class="btn btn-primary">SOUVENIR</button>
        </div> -->
      </div>
    </div>
    <div class="content2">
      <div class="tengah">
        <div class="judul">
          <h1>Hiburan</h1>
        </div>
        <div class="isi">
        <p>Ada banyak hiburan yang bisa ditemukan dalam acara Dieng Culture Festival 2020, misalnya pagelaran kesenian
        tradisional. Lalu ada Aksi Dieng Bersih, Jazz Atas Awan, hingga Ritual Adat Pencukuran Rambut Gembel yang merupakan puncak acara dari
Festival Dieng 2020.</p>
        </div>
      </div>
      <div class="logos">
        <img src="../assets/images/logoprima.png" alt="">
        <img src="../assets/images/dieng.png" alt="">
      </div>
      <div class="footers">
        <p>©primakom</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tipe: null
    }
  },
  methods: {
    destroy() {
      delete localStorage.tipe
    },
    gratis() {
      // this.tipe = 0
      this.$router.push('/ticket')
    },
    // pay() {
    //   this.tipe = 1
    // }
  }
}
</script>

<style lang="scss" scoped>
  .firster{
    position: relative;
    background: white;
    width: 100%;
    height: auto;
    .contact{
      // border-radius: 25px;
      cursor: pointer;
      position:fixed;
      bottom: 50px;
      left: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 80px;
        // border-radius: 25px;
      }
    }
    .contains{
      background: url('../assets/images/home.png');
      width: 100%;
      height: auto;
      background-size: cover;
      background-repeat: no-repeat;
      .navfirst{
        position: relative;
        height: 100px;
        width: 100%;
        .nav{
          // background: white;
          position: fixed;
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .logo{
            padding-left: 50px;
          }
          .buton{
            padding-right: 50px;
            .masuk{
              border-radius: 25px;
              padding: 10px 35px;
              font-weight: bold;
            }
          }
        }
      }
      .content{
        width: 850px;
        height: calc(100vh + 30px);
        display: flex;
        flex-direction: column;
        // justify-content: center;
        padding-left: 250px;
        padding-top: 70px;
        .btn{
          width: 200px;
          height: 50px;
          border-radius: 25px;
          margin: 10px;
        }
      }
    }
    .content2{
      width: 100%;
      background: url('../assets/images/bot.png');
      height: auto;
      background-repeat: no-repeat;
      background-size: contain;
      background-position-y: bottom;
      .tengah{
        width: 100%;
        // height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 150px 0 150px;
      }
      .logos{
        width: 100%;
        padding: 80px 80px 0 80px;
        display: flex;
        justify-content: space-between;
      }
      .footers{
        padding-top: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .logos{
      padding: 100px 0 0 0 !important;
    }
    .content{
      width: 100% !important;
      padding: 100px 20px 0 20px !important;
    }
    .content2{
      margin-top: -130px;
    }
    .tengah{
      padding: 0px 20px !important;
    }
    .footers{
      padding-top: 20px !important;
    }
  }
</style>
