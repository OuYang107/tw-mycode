<template>
  <div class="content common-css">
    <el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item) in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
      <transition name="el-fade-in-linear">
        <div class="mid" v-if="editableTabsValue == '1'">
          <el-row :gutter="20">
            <el-col :span="16"><div class="top-cnt"></div></el-col>
            <el-col :span="8"><div class="top-cnt"></div></el-col>
          </el-row>
        </div>
        <div class="mid" v-if="editableTabsValue == '2'">
          <iframe src="https://www.w3school.com.cn/tags/tag_iframe.asp" name="displayArea" width="100%" height="100%" scrolling="no" id="displayArea" frameborder="0" ></iframe>
        </div>
      </transition>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import apiSend from '@/api/axios.js'
import axios from 'axios'
export default {
  data () {
    return {
      editableTabsValue: '1',
        editableTabs: [
          {
          title: '工作台',
          name: '1',
          },
          {
          title: '帮助',
          name: '2',
          }
        ],
        tabIndex: 1
    };
  },
  computed: {

  },
  mounted () {
  },
  methods: {
    
  }

}
</script>
<style lang="less">
body{
  background: #ccc;
}
.menu-right .menu-btn {
  display: flex !important;
}
.content{
  width: 100%;
}
.mid{
  width: 100%;
  height: 100vh;
}
.top-cnt{
  height: 100px;
  background: #ccc;
}
.page-container {
  box-sizing: border-box;
  width: 100%;
  padding: 30px 20px;
  box-shadow: 0 0 5px #999;
  border-radius: 5px;
  background-color: #fff;
  .menu-right .upload-demo {
    display: inline-block;
    margin: 10px;
  }
}
.export-dialog {
  .dialog-top {
    display: flex;
    justify-content: space-between;
    .dialog-left {
      display: flex;
      .upload-demo {
        margin-right: 10px;
        position: relative;
        .el-upload-list {
          position: absolute;
          top: 30px;
          left: 0;
        }
      }
    }
  }
  .dialog-info {
    margin-top: 50px;
    min-height: 300px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 1.5;
  }
  .btn-group {
    text-align: right;
  }
}
.el-message .el-message-box__wrapper {
  z-index: 99999;
}
.red{
  color: red;
  .el-collapse-item__header{
    color:red;
  }
}
</style>