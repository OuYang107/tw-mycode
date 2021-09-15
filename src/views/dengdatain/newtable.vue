<template>
  <div class="box">
    <div class="page">
      <div class="content">
        <el-row>
          <el-col :span="4">
            <div class="grid-content">
              部门:
              <!-- <el-autocomplete style="width: 140px"
                               v-model="searchData.deptName"
                               :fetch-suggestions="querySearchAsyncone"
                               placeholder="请输入内容"
                               size="mini"
                               :trigger-on-focus="false"
                               @select="handleSubmitone"></el-autocomplete> -->
              <el-select size="mini"
                         clearable
                         style="width: 140px"
                         v-model="searchData.deptName"
                         placeholder="请选择"
                         @click.native="marquee()">
                <el-option v-for="item in optiontype"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
              <!-- <el-input style="width: 140px"
                        v-model="searchData.discCode"
                        placeholder="请输入内容"
                        size="mini"></el-input> -->
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content">
              策略名称:
              <!-- <el-input style="width: 140px"
                        clearable
                        v-model="searchData.advicename"
                        placeholder="请输入内容"
                        size="mini"></el-input> -->
              <el-autocomplete style="width: 140px"
                               v-model="searchData.advicename"
                               :fetch-suggestions="querySearchAsync"
                               placeholder="请输入内容"
                               size="mini"
                               :trigger-on-focus="false"
                               @select="handleSubmit"></el-autocomplete>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="block grid-content">
              <span style="font-size: 12px width: 140px">导入日期:</span>
              <el-date-picker v-model="rangeDate"
                              size="mini"
                              clearable
                              type="daterange"
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="4">
            <!-- <div class="grid-content">
              导入人员:
              <el-autocomplete style="width: 140px"
                               v-model="searchData.settleId"
                               :fetch-suggestions="querySearchAsynctow"
                               placeholder="请输入内容"
                               size="mini"
                               :trigger-on-focus="false"
                               @select="handleSubmittow"></el-autocomplete>
            </div> -->
          </el-col>
          <el-col :span="3">
            <div class="grid-content a">
              <el-row>
                <el-button type="primary"
                           size="mini"
                           @click="query">查询</el-button>
                <!-- <el-button size="mini"
                           @click="dialogVisible = true">导入</el-button> -->
              </el-row>
              <el-col :span="3">
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
          <el-table-column prop="statisDate"
                           label="执行日期"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="adviceCode"
                           label="策略编码"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="adviceName"
                           label="策略名称"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="deptName"
                           label="部门"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="chnlType"
                           label="渠道"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="busiType"
                           label="业务类型"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="adviceType"
                           label="策略类型"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="startTime"
                           label="执行开始时间"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="endTime"
                           label="执行结束时间"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="unsatisCustNum"
                           label="不满客户数"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="contctCustNum"
                           label="接触客户数"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="contctRatio"
                           label="接触率"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="dealCustNum"
                           label="办理客户数"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="dealRatio"
                           label="办理率"
                           width="105"
                           align="center">
          </el-table-column>

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
        advicename: "",
        deptName: "",
        endTime: "",
        startTime: "",
        // discCode: "",
        // discName: "",
        // importEndTime: "",
        // importPerson: "",
        // importStartTime: "",
      },
      // input: '',
      // search: '',
      // arr: '',
      // optionreason: [],
      // cityCode: '',
      // isfugai: '否', //期数
      // timeoption: [
      //   { value: 1, label: "部门1" },
      //   { value: 0, label: "部门2" }
      // ],
      optiontype: [
        // { value: 1, label: "部门1" },
        // { value: 0, label: "部门2" }
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
      discCodes: [],
      restaurants: [],

    };
  },
  mounted () {
    this.query()
    // this.restaurants = this.tableData
    // console.log(this.tableData)
  },
  created () {
    // console.log(this.tableData)
  },
  methods: {
    //查询按钮
    query () {
      if (this.rangeDate[0]) {
        const d = new Date(this.rangeDate[0])
        this.searchData.StartTime = d.getFullYear() + '-' + ((d.getMonth() + 1)) + '-' + (d.getDate())
      }
      if (this.rangeDate[1]) {
        const d = new Date(this.rangeDate[1])
        this.searchData.EndTime = d.getFullYear() + '-' + ((d.getMonth() + 1)) + '-' + (d.getDate())
      }
      apiSend.findTaDtUsUnsatisEvalMid05DInfo({ data: this.searchData }).then(res => {
        console.log(res)
        // this.searchData.total = res.data.data.current
        this.searchData.total = res.data.data.total
        this.tableData = res.data.data.records
        this.restaurants = this.tableData
      }).catch(err => {
        console.log(err)
      })
    },
    marquee () {
      apiSend.findTaDtUsUnsatisEvalMid05DByDeptName({}).then(res => {
        console.log(res)
        this.optiontype = res.data.data.map(item => {
          let arr = {}
          // console.log(item.SATISTYPEID2, item.SATISTYPE2)
          arr.label = item.deptName
          arr.value = item.deptName
          return arr
        })
        console.log(this.optiontype)


        // res.data.data.forEach(item => {
        //   console.log(item.deptName)
        //   this.optiontype.value = item.deptName
        //   this.optiontype.label = item.deptName
        // })
        // this.searchData.total = res.data.data.current
        // this.searchData.total = res.data.data.total
        // this.tableData = res.data.data.records
        // this.restaurants = this.tableData
      }).catch(err => {
        console.log(err)
      })
    },
    // handleChangetype () {
    //   apiSend.findTaDtUsUnsatisEvalMid05DByDeptName({}).then(res => {
    //     console.log(res)
    //     // this.searchData.total = res.data.data.current
    //     // this.searchData.total = res.data.data.total
    //     // this.tableData = res.data.data.records
    //     // this.restaurants = this.tableData
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // },
    querySearchAsync (queryString, cb) {
      // console.log(this.restaurants)
      var restaurants = this.restaurants.map(item => {
        console.log(item)
        return { value: item.adviceName }
      })
      // console.log(restaurants)
      var results = queryString ? restaurants.filter(this.createStateFilterone(queryString)) : restaurants;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        // console.log(results)
        cb(results);
        // console.log(cb(results))
      }, 1000 * Math.random());
    },
    createStateFilterone (queryString) {
      // console.log(queryString)
      // state.value = state.cellCode
      return (state) => {
        // console.log(state.value)
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1);
      };
    },
    handleSubmit (item) {
      // console.log(item);
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


      // -------------------
      let obj = []
      apiSend.checkExcels({ data: formData }).then(res => {
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
                apiSend.excelFiles({ data: formData }).then((res) => {
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
