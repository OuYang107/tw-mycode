<template>
  <div class="box">
    <div class="page">
      <div class="content">
        <el-row>
          <el-col :span="4">
            <div class="grid-content">
              客户类型：
              <el-select size="mini"
                         clearable
                         style="width: 130px"
                         v-model="searchData.disctpye"
                         placeholder="请选择"
                         @click.native="marquee()">
                <el-option v-for="item in optiontype"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content">
              匹配规模：
              <el-autocomplete style="width: 130px"
                               clearable
                               v-model="searchData.discguimo"
                               placeholder="请输入内容"
                               size="mini"
                               :trigger-on-focus="false"></el-autocomplete>
            </div>
          </el-col>
          <el-col :span="7">
            <!-- <div class="block grid-content">
              <span style="font-size: 12px width: 140px">导入日期:</span>
              <el-date-picker v-model="rangeDate"
                              clearable
                              size="mini"
                              type="daterange"
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期">
              </el-date-picker>
            </div>-->
          </el-col>
          <el-col :span="4">
            <!-- <div class="grid-content">
              导入人员: -->
            <!-- <el-input style="width: 140px"
                        v-model="searchData.settleId"
                        size="mini"></el-input>  -->
            <!-- <el-autocomplete style="width: 140px"
                               clearable
                               v-model="searchData.importPerson"
                               :fetch-suggestions="querySearchAsynctow"
                               placeholder="请输入内容"
                               size="mini"
                               :trigger-on-focus="false"
                               @select="handleSubmittow"></el-autocomplete> -->
            <!-- </div> -->
          </el-col>
          <el-col :span="6">
            <div class="grid-content a">
              <el-row>
                <el-button type="primary"
                           size="mini"
                           @click="query">自动分配</el-button>
                <el-button size="mini"
                           @click="dialogVisible = true">导入</el-button>
              </el-row>
              <el-col :span="3">
                <el-button size="mini"
                           style="margin-left: 600px"
                           @click="noresetting">导出</el-button>
                <!-- <el-button type="success" type="warning"
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
                  height="390"
                  tooltip-effect="light"
                  @cell-dblclick="tableDbEdit"
                  :header-cell-style="rowClass"
                  :cell-style="cellStyle"
                  @selection-change="handleSelectionChange">
          <el-table-column prop="a"
                           label="地市"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="b"
                           label="区县"
                           width="105"
                           align="center">
          </el-table-column>
          <el-table-column prop="c"
                           label="客户数"
                           width="105"
                           align="center">
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
        <div style=" text-align: right; margin-right:10px">
          <el-button size="mini">保存</el-button>
          <el-button size="mini"
                     type="success"
                     @click="dialogVisibleone = true">申请</el-button>
        </div>
        <!-- <el-pagination :current-page.sync="searchData.pageNo"
                       :page-size="searchData.pageSize"
                       :total="searchData.total"
                       style="margin-top: 20px; text-align: center"
                       :page-sizes="[1, 5, 10, 30]"
                       layout="total, sizes, prev, pager, next, jumper"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange" /> -->
      </div>
    </div>
    <div class="dialog">
      <!--    //==================== -->
      <!-- <el-row> -->
      <el-dialog :visible.sync="dialogVisible"
                 :before-close="handleDialogClose"
                 width="50%">
        <!-- 是否全覆盖 <el-select size="mini"
                   style="width: 140px"
                   v-model="isfugai"
                   placeholder="请选择">
          <el-option v-for="item in timeoption"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select> -->
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
      <el-dialog :visible.sync="dialogVisibleone"
                 width="30%">
        <span>申请规模：{{}}xxx户，是否确定申请？点击确定后，24小时内，将不允许重新申请。</span>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="dialogVisibleone = false"
                     size="mini">取 消</el-button>
          <el-button type="primary"
                     @click="dialogVisibleone = false"
                     size="mini">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import baseUrl from "@/api/baseUrl";
// import requestUrl from "@/api/url";
import apiSend from "@/api/httpRequest.js";
import { download } from "@/api/request.js"
export default {
  data () {
    return {
      rangeDate: [],
      dialogVisible: false,
      dialogVisibleone: false,
      tableData: [
        { a: 145, b: 122, c: 43 },
        { a: 121, b: 22, c: 51 },
        { a: 11, b: 212, c: 92 },
      ],
      searchData: {
        // statisYear: 2021,
        pageNo: 1,    //一页条数
        pageSize: 10,      //页数
        total: 0,
        disctpye: "个人客户",
        discguimo: "",
      },
      // input: '',
      // search: '',
      // arr: '',
      // optionreason: [],
      // cityCode: '',
      isfugai: 0,
      optiontype: [
        { value: 1, label: "个人客户" },
        { value: 0, label: "5G客户" },
        { value: 2, label: "宽带客户" }
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
      content: ' ',
      discCodes: [],
      restaurants: [],
      multipleSelection: []
    };
  },
  mounted () {
    setTimeout(() => {
      // let arr = [
      //   { serialNumber: 6 },
      //   { serialNumber: 7 },
      //   { serialNumber: 8 },
      //   { serialNumber: 8 },
      //   { serialNumber: 8 }
      // ]
      // if (!arr.length) return;
      // if (arr.length == 1) return 1;
      // var h = {},
      //   maxnum = 0,
      //   maxel = '';
      // for (var i = 0; i < arr.length; i++) {
      //   // console.log(arr[i].serialNumber)
      //   var a = arr[i].serialNumber
      //   // console.log(a)
      //   h[a] == undefined ? h[a] = 1 : (h[a]++)
      //   // console.log(h[a])
      //   console.log(maxnum)
      //   if (h[a] > maxnum) {
      //     maxnum = h[a]
      //     maxel = a
      //     // console.log(a)
      //   }
      // }
      // console.log(maxel, maxnum)

      // ---------------
      // var arr = [45, 56, 14, 12, 12, 12]
      // let str = 0
      // for (let i of arr) {
      //   str = str + i
      // }
      // console.log(str)
      // ------------
      // let obj = {}
      // let o = []
      // arr.forEach(i => {
      //   if (!obj[i]) {
      //     obj[i] = true
      //     o.push(i)
      //   }
      // })
      // console.log(o)
      // -----------------

    }, 1000)
    // this.query()
    // this.restaurants = this.tableData
    // console.log(this.tableData)
  },
  created () {
    // console.log(this.tableData)
  },
  methods: {
    //查询按钮
    query () {
      if (this.searchData.discguimo == 0 || this.searchData.discguimo < 150) {
        this.$message("匹配规模太少，请手工分配。")
      }
      // apiSend.findSalesPromotionInfo({ data: this.searchData }).then(res => {
      //   console.log(res)
      //   // this.searchData.total = res.data.data.current
      //   this.searchData.total = res.data.data.total
      //   this.tableData = res.data.data.records
      //   this.restaurants = this.tableData
      // }).catch(err => {
      //   console.log(err)
      // })
    },
    marquee () { },
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
      this.content = "";
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
      let obj = { type: 9 }
      download(base + "/SatisfactionImport/download5GSatisModel", obj, "promote")
      //   const base =
      //     process.env.NODE_ENV == "development"
      //       ? baseUrl.development
      //       : baseUrl.production;
      //   window.open(
      //     base + "/dist/photoSatis.xlsx"
      //   );
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
      formData.append('type', this.isfugai);
      // formData.append("token", this.files.token)
      // formData.append('statisYear', this.files.statisYear);
      // console.log(list)
      // return;
      // -------------------
      let obj = []
      apiSend.checkExcel({ data: formData }).then(res => {
        let arr = res.data.data
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
                // this.isfugai = 1;
                // formData.append('type', this.files.type);
                formData.set("type", this.isfugai);
                apiSend.excelFile({ data: formData }).then((res) => {
                  // console.log(res.data.data.msg)
                  // this.isfugai = 0;
                  obj.push(arr.error)
                  obj.unshift(arr.question)
                  let item = arr
                  for (var _demo in item) {
                    if (_demo.indexOf('exception') != -1)
                      // console.log(item[_demo])
                      obj.push(item[_demo])
                  }
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
        if (arr.code == 2) {
          this.$confirm(arr.question + ", 是否确认导入?", "提示", {
            confirmButtomText: "确认",
            cancelButtonText: "取消",
            type: "warning",
          }).then((res) => {
            if (confirm) {
              formData.set("type", this.isfugai);
              apiSend.excelFile({ data: formData }).then((res) => {
                console.log(111111)
                obj.push(arr.error)
                // obj.push(arr.exception1)
                // console.log(arr, 14545456)
                // console.log(111111111)
                let item = arr
                for (var _demo in item) {
                  if (_demo.indexOf('exception') != -1) {
                    obj.push(item[_demo])
                    // console.log(item[_demo])
                  }
                }
                obj.push(res.data.data.msg)
              })
                .catch((err) => {
                  console.log(err);
                });
            }
          })
            .catch((err) => {
              console.log(err);
            });
          obj.unshift(arr.question)
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
    // --------------------------
    tableDbEdit (row, column, cell, event) {
      // console.log(row, column, cell, event);

      if (column.label == "客户数") {
        // console.log(243245432)
        event.target.innerHTML = "";
        let cellInput = document.createElement("input");
        cellInput.value = "";
        cellInput.setAttribute("type", "text");
        cellInput.style.width = "50%";
        cell.appendChild(cellInput);
        cellInput.onblur = function () {
          cell.removeChild(cellInput);
          event.target.innerHTML = cellInput.value;
        };
      }
    },
    toggleSelection () {       //批量删除按钮
      // console.log(this.multipleSelection)
      // if (this.multipleSelection.length) {
      //   apiSend.deleteSalesPromotionInfos({ data: this.multipleSelection }).then(res => {
      //     console.log(res)
      //     this.query()
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // } else {
      //   this.$message.warning('请选择要删除的数据');
      //   // this.$confirm("mdxl")
      //   // console.log(11)
      //   // this.$refs.multipleTable.clearSelection();
      // }
    },
    handleSelectionChange (val) {
      let obj = []
      val.forEach(item => {
        // console.log(item.discCode)
        obj.push(item.discCode)
      })
      this.multipleSelection = obj
      console.log(this.multipleSelection)
    },
    noresetting () {      //导出按钮
    },
    rowClass () {
    },
    cellStyle () {
    },
    handleCurrentChange (val) { // 条数
      this.searchData.pageNo = val;
      console.log(111)
      this.query()
    },
    handleSizeChange (val) {   // 一页多少条 
      this.searchData.pageSize = val;
      console.log(22222)
      this.query()
    },
  }
};
</script>
<style lang="less" scoped>
.listtpey {
  overflow-y: scroll;
  height: 150px;
  width: 80%;
  border: 1px solid black;
}
// .selects /deep/ .el-input--suffix {
//   height: 28px;
// }
// .selects /deep/ .el-cascader .el-input .el-input__inner {
//   height: 28px !important;
// }
// .selects /deep/ .el-input--suffix {
//   height: 28px !important;
// }

// .selects /deep/ .el-input__inner {
//   height: 28px !important;
//   // display: l;
// }
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