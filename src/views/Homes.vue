<template>
  <div class="firster">
    <div class="contains">
      <div class="navfirst">
        <div class="nav">
          <div class="logo">
            <router-link to="/">
              <img src="@/assets/images/mice.png" alt="">
            </router-link>
          </div>
          <div class="buton">
            <router-link to="/login">
              <button class="btn btn-primary masuk">Masuk</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="judul">
          <h1>Lorem Ipsum dolor sit amet</h1>
        </div>
        <div class="isi">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
        </div>
        <div class="gratis">
          <button @click="gratis" class="btn btn-primary">GRATIS</button>
        </div>
        <div class="souvenir">
          <button @click="pay" class="btn btn-primary">SOUVENIR</button>
        </div>
      </div>
    </div>
    <div class="content2">
      <div class="tengah">
        <div class="judul">
          <h1>Lorem ipsum dolor</h1>
        </div>
        <div class="isi">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
            m nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
             At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
               dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div class="logos">
        <img src="../assets/images/logoprima.png" alt="">
        <img src="../assets/images/dieng.png" alt="">
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
    gratis() {
      this.tipe = 0
      this.$router.push('/register')
    },
    pay() {
      this.tipe = 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .firster{
    background: white;
    width: 100%;
    height: auto;
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
        justify-content: center;
        padding-left: 250px;
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
      height: calc(100vh - 100px);
      background-repeat: no-repeat;
      background-size: contain;
      background-position-y: bottom;
      .tengah{
        width: 100%;
        // height: 100%;
        display: flex;
        flex-direction: column;
        padding: 100px 150px 0 150px;
      }
      .logos{
        width: 100%;
        padding: 35px 130px 0 130px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>