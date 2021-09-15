<template>
  <div class="boxs">
    <el-row>
      <el-col :span="24">
        <div class=" bg-purple-dark">
          <el-menu route
                   :default-active="activeIndex"
                   class="el-menu-demo"
                   mode="horizontal"
                   @select="handleSelect"
                   text="">
            <el-menu-item index="nophone">
              <a style="text-decoration:none;"
                 title="手机客户满意度调研数据明细导入">手机客户满意度... </a>
            </el-menu-item>
            <el-menu-item index="generation"
                          title="5G客户满意度调研数据明细导入">5G客户满意度...</el-menu-item>
            <el-menu-item index="broadband"
                          title="家宽客户满意度调研数据明细导入">家宽客户满意度...</el-menu-item>
            <el-menu-item index="juedecision"
                          title="决策人满意度调研数据明细导入"> 决策人满意度...</el-menu-item>
            <el-menu-item index="lianqinetwork"
                          title="联系人满意度调研数据明细导入"> 联系人满意度...</el-menu-item>
            <el-menu-item index="keynote"
                          title=" 企宽满意度调研数据明细导入"> 企宽满意度...</el-menu-item>
            <el-menu-item index="special"
                          title=" 专线满意度调研数据明细导入"> 专线满意度...</el-menu-item>
            <!-- <el-menu-item index="qinetwork"> 政企宽带</el-menu-item> -->
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
      // console.log(key, 11111, this.$router.push({ name: key }));
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
  // height: 100%;
}
</style>