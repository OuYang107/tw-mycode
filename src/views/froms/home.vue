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
            <el-menu-item class="a"
                          index="phone">4G不满评估</el-menu-item>
            <el-menu-item class="b"
                          index="broadband">宽带不满评估</el-menu-item>
            <el-menu-item class="c"
                          index="family">家庭不满评估</el-menu-item>
            <el-menu-item class="d"
                          index="separate"> 政企不满评估</el-menu-item>
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
      activeIndex: 'phone',
    }
  },
  methods: {
    handleSelect (key) {
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
// .box :hover /deep/ .el-menu-item :hover {
//   color: red;
//}
// .box /deep/ .el-menu-item .is-active :hover {
//   color: red;
//}
// .box /deep/ .el-menu--horizontal > .el-menu-item :hover {
//   color: red;
//}
.boxs {
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
  height: 50px;
}
.content {
  // padding: 0 24px 24px 24px;
  box-sizing: border-box;
  width: 100%;
}
</style>