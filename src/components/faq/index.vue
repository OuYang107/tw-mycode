<template>
  <div
    class="W100 H100"
    style="overflow-y: auto; padding: 20px 40px; box-sizing: border-box"
  >
    <div class="box-start W100" style="box-sizing: border-box">
      <div>我来说两句</div>
      <el-select
        v-model="dataQuery.dataType"
        placeholder="请选择"
        size="small"
        style="margin-left: 20px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <el-input
      type="textarea"
      v-model="dataQuery.dataDesc"
      class="Mt-20"
      maxlength="500"
      :rows="5"
      show-word-limit
    ></el-input>
    <div class="flex Mt-20">
      <el-upload
        ref="uploadDemo"
        class="upload-demo"
        action="#"
        :http-request="uploadFile"
        :on-remove="deleteFile"
        multiple
        :limit="1"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">文件大小不能超过20M</div>
      </el-upload>
      <el-button
        type="primary"
        size="small"
        style="height: 32px"
        @click="submitInfo"
        >提交</el-button
      >
    </div>
    <div class="title Mt-30">评论列表（{{selectQuery.total}}）</div>
    <div class="box-start W100 Mt-20" style="box-sizing: border-box">
      <span class="demonstration">问题类型</span>
      <el-select
        class="Ml-20"
        v-model="selectQuery.dataType"
        placeholder="请选择"
        size="small"
      >
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span class="demonstration Ml-20">查询时间</span>
      <el-date-picker
        class="Ml-20"
        v-model="selectQuery.uptime"
        type="date"
        placeholder="选择日期"
      >
      </el-date-picker>
      <el-button type="primary" class="Ml-20" @click="getTableList(1)">搜索</el-button>
    </div>
    <div class="flex-custom">
      <div v-for="(item, index) in tableList" :key="index">
        <el-divider></el-divider>
        <div>
          <span style="font-size: 20px; font-weight: 550">{{item.dataOuth}}</span>
          <span class="Ml-10" style="color: #666">{{item.dataType}}  {{item.uptime}}</span>
        </div>
        <div class="Mt-10">
          <span style="color: #666">{{item.dataDesc}}</span>
        </div>
        <div class="Mt-10">
          <span>附件：</span>
          <span style="text-decoration: underline;cursor: pointer;" @click="downExcel(item.url)">{{item.dataName}}</span>
        </div>
      </div>
      <div class="Mt-20">
        <el-pagination
          :current-page="selectQuery.currentPage"
          :page-size="selectQuery.pageSize"
          :total="selectQuery.total"
          @current-change="changePage"
          style="margin-top: 20px; text-align: center;"
          layout="total, prev, pager, next, sizes, jumper"/>
      </div>
    </div>
  </div>
</template>

<script>
import Url from "@/api/url";
import apiSend from '@/api/axios.js'
import base from "@/api/baseUrl"
import axios from "axios";
import store from '@/store/login'
export default {
  name: "table1",
  data() {
    return {
      selectQuery:{
        uptime:'',
        dataType:'',
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      dataQuery: {
        dataName: "",
        dataType: "",
        dataDesc: "",
        file: "",
      },
      options: [
        {
          value: "客户标签操作",
          label: "客户标签操作",
        },
        {
          value: "客户标签数据",
          label: "客户标签数据",
          disabled: true,
        },
        {
          value: "活动配置操作",
          label: "活动配置操作",
        },
        {
          value: "活动监控数据",
          label: "活动监控数据",
        },
      ],
      options2: [
        {
          value: "",
          label: "全部",
        },
        {
          value: "客户标签操作",
          label: "客户标签操作",
        },
        {
          value: "客户标签数据",
          label: "客户标签数据",
          disabled: true,
        },
        {
          value: "活动配置操作",
          label: "活动配置操作",
        },
        {
          value: "活动监控数据",
          label: "活动监控数据",
        },
      ],
      tableList: [],
    };
  },
  mounted() {
    this.$httpLoading.show()
    this.getTableList();
  },
  methods: {
    getTableList(page) {
      if (page) {
        this.selectQuery.pageNo = 1;
      }
      apiSend.findActivemonitorQuestionInfo({data:this.selectQuery}).then(res=>{
        this.tableList = res.data.data.records;
        this.selectQuery.total = res.data.data.total;
        this.$httpLoading.close()
      })
    },
    submitInfo() {
      var formData = new FormData();
      let form = this.dataQuery;
      for (var i in form) {
        formData.append(i, form[i]);
      }
      this.$httpLoading.show()
      axios
        .post((process.env.NODE_ENV === "development" ? base.development : base.production) + Url.importDataQuestion, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "token": store.state.token,
          },
        })
        .then((res) => {
          if (res.data.code === "0") {
            this.$httpLoading.close()
            this.$message.success(res.data.msg);
            this.getTableList();
            this.delData()
          } else {
            this.$httpLoading.close()
            this.$message.error(res.data.msg);
            this.delData()
          }
        })
        .catch((err) => {
          this.$httpLoading.close()
          console.log(err,'111111')
          this.$message.error(err.data.msg);
          this.delData()
        });
    },
    uploadFile(file) {
      this.dataQuery.dataName = file.file.name;
      this.dataQuery.file = file.file;
    },
    deleteFile() {
      this.form.file = "";
    },
    changePage(e){
      this.dataQuery.pageNo = e
      this.getTableList()
    },
    downExcel(url){
      window.open(url)
    },
    delData(){
      this.dataQuery.dataName = ''
      this.dataQuery.dataType = ''
      this.dataQuery.dataDesc = ''
      this.dataQuery.file = ''
      this.$refs.uploadDemo.clearFiles();
    }
  },
};
</script>

<style scoped >
.filterDiv {
  height: 60px;
  padding-left: 20px;
  padding-top: 20px;
}
.tableContent {
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  overflow-x: auto;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.title {
  font-weight: 550;
}
.flex-custom {
  display: flex;
  flex-direction: column;
}
</style>
