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
          <!-- <div class="buton">
            <router-link @click="destroy" to="/masuk">
              <button class="btn btn-primary masuk">Masuk</button>
            </router-link>
          </div> -->
        </div>
      </div>
      <div class="content text-center">
        <div class="jqer">
          <div class="judul">
            <h2>Dieng Culture Festival 2020</h2>
          </div>
          <div class="isi">
            <p>Dieng Culture Festival merupakan acara tahunan khas Dataran Tinggi Dieng yang menampilkan berbagai kesenian dan budaya dengan inti acara pemotongan rambut gimbal anak-anak Dieng</p>
          </div>
        </div>
        <div class="divcard">
          <div @click="free" class="card">
            <img src="../assets/images/icon_card_02.png" alt="">
            <h3>Gratis</h3>
          </div>
          <div @click="paket1" class="card">
            <img src="../assets/images/icon_card_01.png" alt="">
            <h3>Paket A</h3>
            <p>Cutlery set dan Magnet kulkas</p>
            <h4>Rp. 40.000</h4>
          </div>
          <div @click="paket2" class="card">
            <img src="../assets/images/icon_card_04.png" alt="">
            <h3>Paket B</h3>
            <p>Cutlery set, Magnet kulkas dan Tshirt</p>
            <h4>Rp. 130.000</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div id="Website__5">
	<img id="background_01" src="../assets/images/background_01.png">
	<img onclick="application.goToTargetView(event)" id="Logo_2" src="../assets/images/Logo_2.png">
	<div id="Dieng_Culture_Festival_2020">
		<span>Dieng Culture Festival 2020</span>
	</div>
	<div id="Dieng_Culture_Festival_merupak">
		<span>Dieng Culture Festival merupakan acara tahunan khas Dataran Tinggi Dieng yang menampilkan berbagai kesenian dan budaya dengan inti acara pemotongan rambut gimbal anak-anak Dieng</span>
	</div>
	<svg class="Rectangle_84">
		<rect id="Rectangle_84" rx="45" ry="45" x="0" y="0" width="340" height="300">
		</rect>
	</svg>
	<div id="PAKET_A">
		<span>PAKET A</span>
	</div>
	<img id="icon_card_01" src="../assets/images/icon_card_01.png">
	<svg class="Rectangle_83">
		<rect id="Rectangle_83" rx="45" ry="45" x="0" y="0" width="340" height="300">
		</rect>
	</svg>
	<div id="GRATIS">
		<span>GRATIS</span>
	</div>
	<img id="icon_card_02" src="../assets/images/icon_card_02.png">
	<svg class="Rectangle_84_w">
		<rect id="Rectangle_84_w" rx="45" ry="45" x="0" y="0" width="340" height="300">
		</rect>
	</svg>
	<div id="PAKET_B">
		<span>PAKET B</span>
	</div>
	<img id="icon_card_04" src="../assets/images/icon_card_04.png">
	<div id="Cutlery_set_dan_Magnet_kulkas">
		<span>Cutlery set dan Magnet kulkas</span>
	</div>
	<div id="Cutlery_set_Magnet_kulkas_dan_">
		<span>Cutlery set, Magnet kulkas dan Tshirt</span>
	</div>
	<div id="Rp_40000">
		<span>Rp 40.000</span>
	</div>
	<div id="Rp_150000">
		<span>Rp 150.000</span>
	</div>
</div> -->
</template>

<script>
export default {
  methods: {
    free() {
      localStorage.tipe = 0
      this.$router.push('/daftar')
    },
    paket1() {
      localStorage.tipe = 1
      this.$router.push('/daftar')
    },
    paket2() {
      localStorage.tipe = 2
      this.$router.push('/daftar')
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
      background: url('../assets/images/background_01.png');
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
        width: 100%;
        height: calc(100vh + 30px);
        display: flex;
        flex-direction: column;
        align-items: center;
        .jqer{
          padding: 20px;
          width: 550px;
          margin-bottom: 50px;
        }
        .divcard{
          width: 100%;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          .card{
            cursor: pointer;
            box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.15);
            width: 300px;
            height: 340px;
            border-radius: 45px;
            display: flex;
            flex-direction: column;
            img{
              width: 100%;
              height: 220px;
              // border-top-left-radius: 25px;
              // border-top-right-radius: 25px;
            }
            p{
              color: rgba(138,138,138,1);
            }
            h4{
              color: #f96565;
            }
          }
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
</style>