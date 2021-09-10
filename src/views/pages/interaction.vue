<template>
  <div class="turnContent box-start">
    <div class="leftMenu">
      <div class="menuItem box-v-center"
           :class="{activeMenu:activeIndex===1}"
           @click="goMenu(1)">帮助</div>
      <div class="menuItem box-v-center"
           :class="{activeMenu:activeIndex===2}"
           @click="goMenu(2)">问题与建议</div>
    </div>
    <div class="rightContent">
      <div class="W100 H100">
        <subpackage ref="subpackage" v-if="activeIndex===1" />
        <faq ref="faq" v-if="activeIndex===2" />
      </div>
    </div>
  </div>
</template>

<script>
import subpackage from '@/components/subpackage'
import faq from '@/components/faq'
export default {
  name: 'index',
  components: { subpackage,faq },
  data () {
    return {
      activeIndex: 1
    }
  },
  mounted(){
    this.goMenu(1)
  },
  methods: {
    goMenu (index) {
      this.activeIndex = index
      // switch(this.activeIndex){
      //   case 1:
      //     this.$refs.chnlCRM.initData()
      //   case 2:
      //     this.$refs.chnlXKF.initData()
      // }
    }
  }
}
</script>

<style scoped >
.turnContent {
  height: 100%;
  width: 100%;
}
.leftMenu {
  width: 160px;
  min-width: 160px;
  height: 96%;
  position: relative;
  border-radius: 0px 10px 10px 0px;
  background-color: white;
  /* animation: bouncelnLeft2 .8s forwards;
  -webkit-animation: bouncelnLeft2 .8s forwards; */
}
@keyframes bouncelnLeft2 {
  0% {
    /* opacity: 0; */
    -webkit-transform: translate3d(-100%, 0, 0);
    -ms-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    /* opacity: 1; */
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
.menuItem {
  height: 40px;
  color: #333333;
  font-size: 15px;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
}
.menuItem:hover {
  background-color: #f5f5fc;
}
.activeMenu {
  background-color: #f5f5fc;
  color: black;
  font-weight: 600;
}
.rightContent {
  background-color: white;
  height: 96%;
  margin-left: 20px;
  width: calc(100vw - 180px) !important;
  /* width: 1000px; */
  border-radius: 10px 0px 0px 10px;
  /* animation: bouncelnRight2 .8s forwards;
  -webkit-animation: bouncelnRight2 .8s forwards; */
}
@keyframes bouncelnRight2 {
  0% {
    /* opacity: 0; */
    -webkit-transform: translate3d(0, -100%, 0);
    -ms-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    /* opacity: 1; */
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
</style>
