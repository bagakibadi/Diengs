<template>
  <div class="firster">
    <div class="contact">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAA+VBMVEX///8A/2gA1iQA/WUA3jQA9VkA1B8A+F4A8VMA7U0A4jsA5UAA2y4A91sA3TMA6kgA0QC78L8o/3QA0ADM+dMA/2P4//vM9tEA1gAA/V0A/FYA91MA80UA6D8A5zUA3iLx/vXM/9xI/4Xl/+24/cqk/bxR+4cA+E3q/vAA7D3Z++AQ6UsA5CoA5DWV8Kbd+uR16Iuk7q7G/9aT/7N5/6Nt/5mD/6qf/7oX/3Gw/8db/o6L/qy//tA6/Xtv+5ZN+X8q82ZV832A9Zll84dC726I8Z2e869x7Ycn5lSv9Lw852Bl6X014lZU5W2N7JtH4mFY4m2C5owp2TsdHxkVAAAJLUlEQVR4nO2d6ULiOhSAHVxARAFl6QK0LsgybI44uM64DAKiIr7/w9xCky5JujBKG+ee79fYnHPM1yRtWsVZWQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgq1R/l0+7Z8cHN7t9zc3Nw2f3ZO6qHLeOT/e65KGaz2dVvH2VVq5IVxYNeNWwnT3rfxOyHfUl76Xg/bC9XLrLiJzvrZKWDw7DdHFEPliOti/fC1nOgnv3s6W1DvAxbkMkPaZnSGtndsBUZ7C/bmkvvQ+njNyxPxOOwNUnOl7quMdJp2J52fi7vGm735uo+pk3xYMgehK1q5TIbkPaq9CNsV5PABpuv4b4SF+++iFh0nnC0ur8t1HFRlMTdy+5pr1zunXYvb7QvF5AXubmYt/3P8awonXePiAE7vL7alfyaZ2/CkaQp+53jorTbc5ij6sWB5K+MlAvWzpEzX/3VBrrbditTPRUlH0Mu8fLsfRP1YS2Kp97DVF71PoPiRQBKfoh6I1Z++pubPUn0KsXLNU30Gu2odOP7tqM+SO7lxO4yXfyTq3iMz3alTKSo+xdXvy6Pjy9/XZV/kC8Ir2XXARfPghJzp+qhLZ7bh/q6u1qRZLxdkaVK9OxItQbkbiS3cpw8fdbdtWXby6D9M1kWt8npIFeOr61RXZeS25zcuOtuYxOtWJfi0W6FVMYyUtS6EsrO3tucvGPZl92sLdfd/XPZQXquI0ctt6YjR+/t8+AVWbhpV8zXvOqx00gbQhXLBd/RezsahiSNi7Z8ZURdy26TwhA3Z/qFgzcv2pnKtgPyLyPo3jHITsW8AJ46pPCuLd8aMb9lf9azJBUnPbCTeNF2UpJVHHLr21rLihpp0XWetR1Gu2Dcihex3t5eX1dRXrvAauZGe52FubBvZGaAM1H82HLKzAzJk8BJG/f9YVHrddnYiN1+Ne0K3nuUC4taa973KHmflRyWqJ0Mq2uxW9R6aLbGCoVKoeBr7Av4dfgdIzwkTwKmttHv25hhHZ2/Dvrlxzsmo/Q2VTzGjXaM5hY1ls1GfKGSGeEUxjS/o8I51i4c6W05s9Myfp1w78u7gLbndao6x9p4jvYNRXwiZqvdj7Z8h8JvqabgFVkwtPEUzZlNt2bCbz/asQJ6u1ymygduyIShXUC/O9gzmgojM+Ha33Cj7Y76dbRxzywnQrVk+LHWUtAl8M8mn9o1ssObaI7v19h9bSX9aNfQBHkko4MWZENr19BDyL3R4c0/1gyVymCxiS5qdXv0JjfamwQ1VW+JmYfubCkPSTKFRQ1FE/W51UYdO7Q02EZbmwa+tDN69N3X0E4+6A0ja4M1I0edKCbFlh7eL9qPBy3IhtLG3b23dLdm/ZGPvzm+mUQrw3b6+NWuoQ3ZncWuZrlv98kEJ2LsbxC8IgtaG63J7xbtpLm4ycFzpqQnWK8RWiVutdG2smadyyXjNxmK/qb4LEdfGbnSl9A2emv1Kz7gePIK5aKNnsJs5y/5PRRLikwtaaekzo+rJftR4zM+m0mf4JSi7Sgv2iWyt+r8eJU4PsQJ+ca/qa1PcmK0k7U+znglM/4l7Rx5vGFM87ti0g94bdsLcauNLtq0m/HbSkNf3g11HqzaFwW32ui+PdwiGormA4ndu1hinoaGHtv+IqONdmT0VC4Zy3vljyWrOai3GObFIesbFLnR3rLTfNUb+sUtkoa5R+038EFd7+Q7Wac41iNHTdthXrXxXD4iG2beGTNvC7U3Vf3A6HvJdqKaj/rx+6+hvbWlN1QbVIPmbflkcr/UtB85GpYYoU/2WcOtdgM9ZQ4Z2jZvtd8sWea9xpFFsYmOEWePE+08NailtN7Sb5Itc++8NXtEfOZlYOQ00dKuk/WDkPKG1m4O9Baqw8h75FLN1G6gF5Et8uQt3cgXtHY8jpqGcbZ337naU9yjSJxbbeN6fcIe7q3Gk+pUrYElm+jcHBI1+NGOk+BZvtKkmnCEw0TPKDgC7Uy1OU6k8qsdb6Ddd4vRhiKemB8cecKSzQ46skVm8qKtkB2Lx5UT1Og43PGmMqbFB0YtRdWPpKnqHGsbfRuxGg3xp7StkjoxrdFLZ3P4v4S2gtfuxHm84/E1pdkxdqu5lrJmNAydi/OsvYZvPxmX4daHvDl+HKVHj2PFEqng+f/MOGthidphascVY6fmrq2doaYywxqnoIcQ1hpZ40Z7jQG+JA1ZjR4oY1w7wWjlWhstziqz0Z3EEy49+GraCnrVMFpcWzHeLGeYyVxro8esMWu83K2fcWGVfcq41kaNi1u/GIWf2ckcaydQ5+uLznHBfDgbO+WG5EmQV3Yo8Ob00WhLKAk6jEpLmK/a+oyyOiF5ErC0BbTdmMxcEwlFWBukp4KHeEIYmJ92bglOUfxqG10TZsrK+GT+U532xE08ITxb3rK9Olnzo625ESjoeTstCC+PFpn6i6BQwXqG8JSx1BzQNQ041kY700yeDK6+7tDmipCY2h5CJw4nZ857MFpe1GltQXWLb70kBEFBaP+avNr/qmd9x8068exQN2DatLZnz6qZUWva6UxbJxnqXUPLZYLPmCxHY1GqVDfxzvRvqA89rCNvn9f1j5Cj+ilQS3oll3b9mysYdewhrWkPvMsEArUSBSIg//osCALj1RlBtSNEvKwTG9MlaSxKguhr5MXSWG9NtKvWLCIiTNKONTTyb8KGp7S2gh7digTIhNAW8GvT9smbdqWOGM0RIdLJsGvkpwkfIz2v7nruAmRKDNJ8Z1odjSNCKkJOhA1BmLQytj+1Us0/vm0IG/6kUXUeSGsDamVnJd3ZETQRB7R1Lry/jDvTaWf88j77yjGUlR22LkYltBO+PDbmLOCL0sbeHQqI58V7/9dws7RXVkaCd3c/TTtsWQvBaad4uWvPaKUC01bDdrUSCWh1pz6w218C+WCGeyMRtihBJxDvFC9bFYPn1MbSSbn9ilNIvC/dO9Xy7kXwLHu8U7w8ehEMluqd4md7RpBOLU08NeH4f9DJTZcjnopwO9Q6uVZkL7X3mcpaOfe3MpzQPnnbSO3tpT7OnlblvZNWwzbyTa5az2fSHySfb6thiwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D/gP8rPyGwRmN3oAAAAAElFTkSuQmCC" alt="">
      <h5>Kontak Admin</h5>
    </div>
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
      background: white;
      // border-radius: 25px;
      padding: 10px;
      cursor: pointer;
      position:fixed;
      bottom: 50px;
      left: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 100px;
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
