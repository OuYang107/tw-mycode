<template>
  <div class="box">
    <div class="page">
      <div class="content">
        <el-row>
          <el-col :span="4">
            <div class="grid-content">
              优惠编码:
              <el-input style="width: 140px"
                        v-model="searchData.discCode"
                        size="mini"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content">
              优惠名称:
              <!-- <el-input style="width: 140px"
                        v-model="searchData.discName"
                        size="mini"></el-input> -->

              <el-autocomplete style="width: 140px"
                               v-model="searchData.discName"
                               :fetch-suggestions="querySearch"
                               placeholder="请输入内容"
                               @select="handleSubmit"></el-autocomplete>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="block grid-content">
              <span style="font-size: 12px width: 140px">导入日期:</span>
              <el-date-picker v-model="rangeDate"
                              size="mini"
                              type="daterange"
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content">
              导入人员:
              <el-input style="width: 140px"
                        v-model="searchData.settleId"
                        size="mini"></el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content a">
              <el-row>
                <el-button type="primary"
                           size="mini"
                           @click="query">查询</el-button>
                <el-button size="mini"
                           @click="dialogVisible = true">导入</el-button>
                <!-- <el-button size="mini"
                         type="warning"
                         @click="noresetting">导出</el-button> -->
              </el-row>
              <el-col :span="3">
                <!-- <el-button
          style="margin-left: 350px;"
                size="mini"
                type="warning"
                @click="resetting"
              >明细查询页面</el-button> -->
                <!-- <el-link type="primary" size="mini"  style="margin-left: 350px;">明细查询页面</el-link> -->
              </el-col>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="table">
        <el-table :data="tableData"
                  align="center"
                  style="width: 100%"
                  border
                  height="410"
                  tooltip-effect="light"
                  :header-cell-style="rowClass"
                  :cell-style="cellStyle">
          <el-table-column prop="discCode"
                           label="优惠编码"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="discName"
                           label="优惠名称"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="discDesc"
                           label="优惠描述"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="startDate"
                           label="生效时间"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="endDate"
                           label="失效时间"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="importTime"
                           label="导入时间"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="importPerson"
                           label="导入人员"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column label="操作"
                           align="center"
                           width="120">
            <template slot-scope="scope">
              <!-- <a href="#"
                 @click="handeleDetail(scope.row.discCode)">删除</a>
              <a href="#"
                 @click="handeleDetail(scope.row.discCode)">编辑</a> -->

              <el-button @click="handeleDetail(scope.row.discCode)"
                         type="text"
                         size="mini">删除</el-button>
              <el-button @click="handeleDetail(scope.row.discCode)"
                         type="text"
                         size="mini">编辑</el-button>
            </template>
          </el-table-column>
          <!-- <el-table-column prop=""
                         label=""
                         width="105"
                         align="center">
        </el-table-column> -->
          <!-- <el-table-column prop=""
                         label=""
                         width="105"
                         align="center">
        </el-table-column> -->
        </el-table>
        <el-pagination :current-page.sync="searchData.pageNo"
                       :page-size="searchData.pageSize"
                       :total="searchData.total"
                       style="margin-top: 20px; text-align: center"
                       :page-sizes="[1, 5, 10, 30]"
                       layout="total, sizes, prev, pager, next, jumper"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange" />
      </div>
    </div>
    <div class="dialog">
      <!--    //==================== -->
      <!-- <el-row> -->

      <el-dialog :visible.sync="dialogVisible"
                 :before-close="handleDialogClose"
                 width="70%">

        <div style="text-align: right">
          <el-button @click="getDownload"
                     type="success"
                     size="mini">模板下载</el-button>
        </div>
        <el-upload class="upload-demo"
                   action="#"
                   :http-request="uploadFiles"
                   :on-change="setChange"
                   multiple
                   ref="upfiles"
                   :limit="10000"
                   :file-list="fileList">
          <el-button size="small"
                     style="text-align: left"
                     type="primary">点击上传</el-button>
          <div slot="tip"
               class="el-upload__tip"> 只能上传Excel文件，且不超过500kb
            <!-- <span slot="tip"
                  style="color: 	#FF0000">注：每次导入表格都会进行覆盖。</span> -->
          </div>
        </el-upload>
        <div class="listtpey">
          <p v-for="(item,index) in content"
             :key="index">{{item }}</p>
        </div>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="clearFile()"
                     size="mini">取 消</el-button>
          <el-button type="primary"
                     @click="confirm"
                     size="mini">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import baseUrl from "@/api/baseUrl";
import requestUrl from "@/api/url";
import apiSend from "@/api/httpRequest.js";
export default {
  data () {
    return {
      rangeDate: [],
      dialogVisible: false,
      tableData: [],
      searchData: {
        // statisYear: 2021,
        pageNo: 1,    //一页条数
        pageSize: 10,      //页数
        total: 10,
        discCode: "",
        discName: "",
        importEndTime: "",
        importPerson: "",
        importStartTime: "",
      },
      // input: '',
      // search: '',
      // arr: '',
      // optionreason: [],
      // cityCode: '',
      // isfugai: '否', //期数
      timeoption: [
        { value: 1, label: "是" },
        { value: 0, label: "否" }
      ],
      // cntyArrOptins: [],
      //存放区县
      // options1: [],
      files: {
        type: 0,
        files: {},
        // statisYear: 2021,
        token: "12",
      },
      fileList: [],
      content: '',
      discCodes: []
    };
  },
  mounted () {
    this.query()
  },
  methods: {
    //查询按钮
    query () {
      if (this.rangeDate[0]) {
        const d = new Date(this.rangeDate[0])
        this.searchData.importStartTime = d.getFullYear() + '-' + ((d.getMonth() + 1)) + '-' + (d.getDate())
      }
      if (this.rangeDate[1]) {
        const d = new Date(this.rangeDate[1])
        this.searchData.importEndTime = d.getFullYear() + '-' + ((d.getMonth() + 1)) + '-' + (d.getDate())
      }
      apiSend.findSalesPromotionInfo({ data: this.searchData }).then(res => {
        console.log(res)
        // this.searchData.total = res.data.data.current
        this.searchData.total = res.data.data.total
        this.tableData = res.data.data.records
      }).catch(err => {
        console.log(err)
      })
    },

    handeleDetail (row) {
      console.log()
      // this.discCodes.splice(0, 1, row)
      this.discCodes.push(row)
      // let obj = { discCodes: this.discCodes }
      // obj.append('discCodes', this.discCodes)          删除
      apiSend.deleteSalesPromotionInfos({ data: this.discCodes }).then(res => {
        // console.log(res.data)

      }).catch(err => {
        console.log(err)
      })
    },
    handleChange (_q) {//第几期按钮
      // console.log(q)
    },
    resetting () { // 导入按钮
      this.dialogVisible = true
    },
    setChange (_file, fileList) {
      // console.log(fileList)
      this.fileList = fileList;
    },
    uploadFiles (e) {     //导入文件
      // console.log(e.file)
      // this.files.files.append(e.file)
    },
    handleDialogClose () {        // X 按钮
      this.dialogVisible = false;
      this.$refs["upfiles"].clearFiles();
    },
    //模板下载按钮
    getDownload () {
      // this.TemplateData["statisMonth"] = this.files.statisYear
      const base =
        process.env.NODE_ENV == "development"
          ? baseUrl.development
          : baseUrl.production;
      window.open(
        base + "/dist/photoSatis.xlsx"

      );
    },
    confirm () {  //确认按钮      
      // this.$refs["upfiles"].clearFiles();
      // this.dialogVisible = false;
      if (this.fileList.length == 0) {
        this.$message.warning("请上传文件！");
        return;
      }
      let formData = new FormData();
      // console.log(this.fileList)
      let list = []
      this.fileList.forEach((item) => {
        formData.append('file', item.raw);
        list.push(item.raw)
      })
      // console.log()
      formData.append('type', this.files.type);
      // formData.append("token", this.files.token)
      // formData.append('statisYear', this.files.statisYear);
      // console.log(list)
      // return;
      // -------------------
      let obj = []
      apiSend.checkExcel({ data: formData }).then(res => {
        let arr = res.data.data
        console.log(res.data.data)
        if (arr.code == 1) {            //item.msg +  item.fileName + 
          // this.$message.warning('导入失败,第2行数据已存在，是否进行覆盖导入!');
          this.$confirm(arr.error + ", 是否确认导入?", "提示", {
            confirmButtomText: "确认",
            cancelButtonText: "取消",
            type: "warning",
          })
            .then((res) => {
              if (confirm) {
                // console.log(999999999999)
                //再调接口
                this.files.type = 1;
                // formData.append('type', this.files.type);
                formData.set("type", this.files.type);
                apiSend.excelFile({ data: formData }).then((res) => {
                  // console.log(res.data.data.msg)
                  this.files.type = 0;
                  obj.push(res.data.data.msg)
                  //调完导入接口后查询
                  // this.$message.warning(res.data.data.msg + "!");
                })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
        if (arr.code == 0) {
          obj.unshift(arr.msg)
        }
        // console.log(obj)
        this.content = obj
      }).catch(err => {
        console.log(err)
      })
    },
    clearFile () {       // 取消按钮
      // clearFiles
      this.content = "";
      this.dialogVisible = false;
      this.$refs["upfiles"].clearFiles();
    },
    noresetting () {      //导出按钮
    },
    handleChangetype (_val, _key) {      //结算月份按钮
      // console.log(val, key)
    },
    rowClass () {
    },
    cellStyle () {
    },
    handleCurrentChange (val) { // 条数
      this.searchData.pageNo = val;
      this.query()
    },
    handleSizeChange (val) {   // 一页多少条 
      this.searchData.pageSize = val;
      this.query()
    },
  }
};
</script>
<style lang="less" scoped>
.listtpey {
  overflow-y: scroll;
  height: 150px;
  width: 700px;
  border: 1px solid black;
}
.el-cascader-panel {
  // height: 300px;
}
.selects /deep/ .el-input--suffix {
  height: 28px;
}
.selects /deep/ .el-cascader .el-input .el-input__inner {
  height: 28px !important;
}
.selects /deep/ .el-input--suffix {
  height: 28px !important;
}

.selects /deep/ .el-input__inner {
  height: 28px !important;
  // display: l;
}
.miss {
  // padding: 5px;
}
.content /deep/ .selects .el-cascader .el-input .el-input__inner {
  height: 28px !important;
}
.content /deep/ .el-input--suffix .el-input__inner {
  padding-right: 15px;
}
/deep/.miss .selects .el-input__inner {
  height: 28px;
  height: 28px !important;
}
.box {
  // background: white;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 24px;
}

.page {
  background: white;
}
// .box /deep/ .el-pagination {
//   margin-top: 0px !important;
//   background: white;
// }
.selects {
  width: 100%;
  line-height: 28px;
  // border: 1px solid red;
  height: 28px !important;
}
.bg-purple-dark {
  box-sizing: border-box;
  // border: 1px solid red;
  width: 100vw;
  height: 100px;
}
.content {
  background: white;
  box-sizing: border-box;
  // margin: 10px;
  padding: 0 10px;
}
.el-row {
  // margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.grid-content {
  // border: 1px solid green;
  margin: 5px 3px;
  // padding: 0 5px;
  min-height: 36px;
  font-size: 12px;
  // font-weight: 600;
  display: flex;
  align-items: center;
}
.row-bg {
  background-color: #f9fafc;
}
/deep/ .el-table {
  // background: white;
  margin-top: 10px;
  width: 100%;
  table {
    width: 100% !important;
  }
  .warning-row {
    background-color: rgb(242, 245, 252);
  }
  thead {
    th {
      background-color: rgb(242, 245, 252);
      color: #999;
      font-weight: 500;
      padding: 5px 0;
      font-size: 12px;
      // letter-spacing: 1px;
    }
  }
  tbody {
    td {
      font-size: 12px;
      padding: 5px 0;
    }
    tr:hover > td {
      background-color: rgb(217, 236, 255) !important;
    }
  }
}

.page-title {
  padding: 10px 10px 10px 0;
  margin-bottom: 10px;
  color: #409eff;
  font-size: 18px;
  color: #409eff;
  letter-spacing: 1px;
  font-family: "Microsoft YaHei";
  position: relative;
}
.page-title::after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #ddd;
  // padding:0;
  position: absolute;
  bottom: 0;
  left: 0;
  // padding-bottom: 10px;
}
.block {
  // margin-top: 10px;
}
.block /deep/ .el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner {
  width: 280px;
}
</style>
