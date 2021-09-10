<template>
  <div class="boxs">
    <el-row>
      <el-col :span="24">
        <div class=" bg-purple-dark">
          <el-menu route
                   :default-active="activeIndex"
                   class="el-menu-demo"
                   mode="horizontal"
                   @select="handleSelect">
            <el-menu-item index="nophone">手机客户满意度</el-menu-item>
            <el-menu-item index="generation">5G客服满意</el-menu-item>
            <el-menu-item index="nobroadband">家宽客服满意</el-menu-item>
            <el-menu-item index="keynote"> 政企重点满意</el-menu-item>
            <el-menu-item index="special"> 政企专线</el-menu-item>
            <el-menu-item index="qinetwork"> 政企宽带</el-menu-item>
          </el-menu>
        </div>
        <!-- <router-view> -->
      </el-col>
    </el-row>
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      activeIndex: 'nophone',
    }
  },
  methods: {
    handleSelect (key, indexPath) {
      this.$router.push({ name: key })
      // console.log(key, 11111, indexPath);
    },
    // menuselect (index) {
    //   this.$router.push({ path: index })
    //   console.log(index, 111111);
    // }
  }
}
</script>
<style lang="less" scoped>
.boxs {
  // border: 1px solid red;
  // background: white;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 24px;
}
.bg-purple-dark {
  box-sizing: border-box;
  /* // border: 1px solid red; */
  width: 100%;
  height: 60px;
}
.content {
  box-sizing: border-box;
  width: 100%;
}
</style>