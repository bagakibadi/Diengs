<template>
  <div class="meeting">
    <div class="container-zoom">
      <ZoomFrame :nickname="nickname" :meetingId="meetingId"/>
    </div>
  </div>
</template>

<script>
import ZoomFrame from "./ZoomFrame.vue";

export default {
  name: "app",
  data: function () {
      return {
          nickname: '',
          meetingId: '',
      }
  },
  components: {
    ZoomFrame,
  },
  created : function (){
      this.nickname = this.$route.query.nickname;
      this.meetingId = this.$route.query.meetingId;
  }
};
</script>

<style>
.chat-container__chat-control{
  height: auto !important;
}
.ReactVirtualized__List{
  outline: none;
}
.chat-box__chat-textarea{
  outline: none;
  margin-top: 5px;
  padding-top: 5px;
  height: auto !important;
  border: 1px solid #999;
  margin-left: 1px;
}
#wc-footer{
  padding: 0 !important;
}
.container-zoom {
  width: 70%;
  height: 100%;
}
.security-option-menu__button{
  width: 500px;
  background: black ;
}
</style>