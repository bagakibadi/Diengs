<template>
  <div id="Website__2">
	<img id="background_01" src="../assets/images/background_01.png" srcset="../assets/images/background_01.png 1x, background_01@2x.png 2x">
	<img onclick="application.goToTargetView(event)" id="Logo_2" src="../assets/images/Logo_2.png" srcset="../assets/images/Logo_2.png 1x, Logo_2@2x.png 2x">
	<div id="Dieng_Culture_Festival_2020">
		<span>Dieng Culture Festival 2020</span>
	</div>
	<div id="Dieng_Culture_Festival_merupak">
		<span>Dieng Culture Festival merupakan acara tahunan khas Dataran Tinggi Dieng yang menampilkan berbagai kesenian dan budaya dengan inti acara pemotongan rambut gimbal anak-anak Dieng</span>
	</div>
	<!-- <div id="Group_406">
		<svg class="Rectangle_84">
			<rect id="Rectangle_84" rx="45" ry="45" x="0" y="0" width="280" height="300">
			</rect>
		</svg>
		<div id="SOUVENIR">
			<span>SOUVENIR</span>
		</div>
		<img id="icon_card_01" src="icon_card_01.png" srcset="icon_card_01.png 1x, icon_card_01@2x.png 2x">
	</div> -->
	<div class="teq">
		<!-- <router-link to="/register"> -->
			<div id="Group_405" @click="free">
				<svg class="Rectangle_83">
					<rect id="Rectangle_83" rx="45" ry="45" x="0" y="0" width="280" height="300">
					</rect>
				</svg>
				<div id="GRATIS">
					<span>GRATIS</span>
				</div>
				<img id="icon_card_02" src="../assets/images/icon_card_02.png" srcset="../assets/images/icon_card_02.png 1x, icon_card_02@2x.png 2x">
			</div>
		<!-- </router-link> -->
	</div>
</div>
</template>

<script>
export default {
  methods: {
    free() {
      localStorage.tipe = 0
      this.$router.push('/daftar')
    }
  }
}
</script>

<style lang="scss" scoped>
.mediaViewInfo {
	--web-view-name: Website – 2;
	--web-view-id: Website__2;
	--web-scale-on-resize: true;
	--web-enable-deep-linking: true;
}
:root {
	--web-view-ids: Website__2;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	border: none;
	font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
#Website__2 {
	position: absolute;
	width: 100%;
	height: 768px;
	background-color: rgba(255,255,255,1);
	overflow: hidden;
	--web-view-name: Website – 2;
	--web-view-id: Website__2;
	--web-scale-on-resize: true;
	--web-enable-deep-linking: true;
}
@keyframes fadein {

	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}

}
#background_01 {
	position: absolute;
	width: 100%;
	height: 768px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Logo_2 {
	position: fixed;
	width: 100px;
	height: 37.483px;
	left: 40px;
	top: 40px;
	overflow: visible;
	transition: all 0.3s ease-out;
	--web-animation: fadein 0.3s ease-out;
	--web-action-type: page;
	--web-action-target: Website___3.html;
	cursor: pointer;
}
#Dieng_Culture_Festival_2020 {
	left: 417px;
	top: 125px;
	position: absolute;
	overflow: visible;
	width: 534px;
	height: 53px;
	text-align: center;
	font-family: Open Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 32px;
	color: rgba(70,70,70,1);
	letter-spacing: 0.05px;
}
#Dieng_Culture_Festival_merupak {
	left: 367px;
	top: 178px;
	position: absolute;
	overflow: visible;
	width: 634px;
	height: 85px;
	line-height: 28px;
	margin-top: -5px;
	text-align: center;
	font-family: Open Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	color: rgba(138,138,138,1);
	letter-spacing: 0.05px;
}
#Group_406 {
	position: absolute;
	width: 300px;
	height: 280px;
	left: 811px;
	top: 323px;
	overflow: visible;
}
#Rectangle_84 {
	fill: rgba(255,255,255,1);
}
.Rectangle_84 {
	filter: drop-shadow(5px 5px 11px rgba(90, 90, 90, 0.149));
	width: 280px;
	height: 300px;
	position: absolute;
	overflow: visible;
	transform: translate(-799px, -368px) matrix(1,0,0,1,809,358) rotate(90deg);
	transform-origin: center;
}
#SOUVENIR {
	left: 78px;
	top: 231px;
	position: absolute;
	overflow: visible;
	width: 145px;
	white-space: nowrap;
	text-align: left;
	font-family: Open Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 28px;
	color: rgba(70,70,70,1);
	letter-spacing: 0.05px;
}
#icon_card_01 {
	position: absolute;
	width: 300px;
	height: 220px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
.teq{
	position: relative;
	height: auto;
	width: 100%;
	display: flex;
	justify-content: center;
	top: 325px;
	cursor: pointer;
}
#Group_405 {
	position: absolute;
	width: 300px;
	height: 280px;
	/* left: 255px;
	top: 323px; */
	overflow: visible;
}
#Rectangle_83 {
	fill: rgba(255,255,255,1);
}
.Rectangle_83 {
	filter: drop-shadow(5px 5px 11px rgba(90, 90, 90, 0.149));
	width: 280px;
	height: 300px;
	position: absolute;
	overflow: visible;
	transform: translate(-266px, -368px) matrix(1,0,0,1,276,358) rotate(90deg);
	transform-origin: center;
}
#GRATIS {
	left: 100px;
	top: 231px;
	position: absolute;
	overflow: visible;
	width: 101px;
	white-space: nowrap;
	text-align: left;
	font-family: Open Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 28px;
	color: rgba(70,70,70,1);
	letter-spacing: 0.05px;
}
#icon_card_02 {
	position: absolute;
	width: 300px;
	height: 220px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
</style>