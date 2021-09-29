<template>
  <div class="box">
    <!-- <el-row>  11111111111111111111
      <el-col :span="24">
        <div class=" bg-purple-dark"> </div>
      </el-col>
    </el-row> -->
    <div class="content">
      <el-row>
        <el-col :span="3">
          <div class="grid-content">
            年份：
            <el-select size="mini "
                       style="width: 100px"
                       v-model="searchData.statisYear"
                       placeholder="选择年"
                       @change="handleChangetype">
              <el-option v-for="item in optiontype"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
            <!-- <el-date-picker
              style="width: 180px"
              v-model="year"
              type="year"
              placeholder="选择年"
              size="mini"
              format="yyyy"
              value-format="yyyy"
            >
            </el-date-picker> -->
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            期数：
            <el-select size="mini "
                       style="width: 90px"
                       v-model="searchData.cycNum"
                       placeholder="请选择"
                       @change="handleChange">
              <el-option v-for="item in timeoption"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>

          </div>
        </el-col>
        <el-col :span="5">
          <!-- <div class="grid-content b">
          </div> -->
        </el-col>
        <el-col :span="4">
          <!-- <div class="miss"> -->
          <!-- <div class="grid-content selects"> -->
          <!-- <el-cascader
                class="cerd"
                size="mini"
                v-model="search"
                placeholder="地市搜索"
                :options="options"
                clearable
                :show-all-levels="false"
                :props="{checkStrictly: true}"
                filterable
                @change="cityname"
              >
              </el-cascader> -->
          <!-- </div> -->
          <!-- </div> -->
        </el-col>

        <el-col :span="5">
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
                height="370"
                :header-cell-style="rowClass"
                :cell-style="cellStyle">

        <el-table-column prop="sn"
                         label="序号"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="contctNo"
                         label="联系号码"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="cityName"
                         label="地市"
                         align="center"
                         width="105">
        </el-table-column>

        <el-table-column prop="cntyName"
                         label="县分"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="oppOpertrType"
                         label="运营商"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="d1Question"
                         label="性别"
                         width="120"
                         align="center">
        </el-table-column>

        <el-table-column prop="d2Question"
                         label="D2 请问您接听电话的这个手机号码，是您本人在使用吗？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="j1Question"
                         label="J1 请问您家正在使用的是哪家运营商的家庭宽带？"
                         width="105"
                         align="center">
        </el-table-column>

        <el-table-column prop="j2Question"
                         label="J2 您家正在使用的中国移动家庭宽带是多少兆？"
                         align="center"
                         width="105">
        </el-table-column>
        <el-table-column prop="j2vQuestion"
                         label="J2 您家正在使用的中国移动家庭宽带是多少兆？"
                         width="105"
                         align="center">
        </el-table-column>

        <el-table-column prop="r1Question"
                         label="R1 上网质量"
                         align="center"
                         width="105">
        </el-table-column>
        <el-table-column prop="r111Question"
                         label="R1.1.1 您觉得家庭宽带上网质量方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r112Question"
                         label="R1.1.2 您觉得家庭宽带上网质量方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r113Question"
                         label="R1.1.3 您觉得家庭宽带上网质量方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r114Question"
                         label="R1.1.4 您觉得家庭宽带上网质量方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r115Question"
                         label="R1.1.5 您觉得家庭宽带上网质量方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r115vQuestion"
                         label="R1.1.5V 您觉得家庭宽带上网质量方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r116Question"
                         label="R1.1.6 您觉得家庭宽带上网质量方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>

        <el-table-column prop="r11100Question"
                         label="R1.1.100 您觉得家庭宽带上网质量方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r2Question"
                         label="R2 资费套餐"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r2Question"
                         label="R3 装机服务"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r41Question"
                         label="R4.1 您最近3个月是否向中国移动报修过家庭宽带故障？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r4Question"
                         label="R4 维修服务"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r411Question"
                         label="R4.1.1 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r412Question"
                         label="R4.1.2 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r413Question"
                         label="R4.1.3 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r414Question"
                         label="R4.1.4 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r415Question"
                         label="R4.1.5 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r416Question"
                         label="R4.1.6 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r417Question"
                         label="R4.1.7 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r418Question"
                         label="R4.1.8 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r419Question"
                         label="R4.1.9 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r4110Question"
                         label="R4.1.10 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r41101Question"
                         label="R4.1.101 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r41101vQuestion"
                         label="R4.1.101v 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r4111Question"
                         label="R4.1.11 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r41100Question"
                         label="R4.1.100 您觉得家庭宽带故障维修方面有哪些地方需要改进？"
                         width="105"
                         align="center">
        </el-table-column>
        <!-- ---------- 加 -->
        <el-table-column prop="r5Question"
                         label="R5 整体感知"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r6Question"
                         label="R6 推荐意愿"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r71Question"
                         label="R7.1 请问您家是否正在使用中国移动的互联网电视盒子？"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="r7Question"
                         label="R7 互联网电视"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="innetDate"
                         label="用户入网时间"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="openDate"
                         label="宽带开通日期"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="kdRate"
                         label="宽带速率"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="mergeKdType"
                         label="融合宽带"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="KdType"
                         label="宽带类型"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="mainDiscName"
                         label="主套餐"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="brandName"
                         label="品牌类型"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="custLvl"
                         label="全球通等级"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="kdVol"
                         label="宽带流量（M）"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="familyType"
                         label="家庭特征"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="diffMainCard"
                         label="异网主卡"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="diffDeputyCard"
                         label="异网副卡"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="diffKd"
                         label="异网宽带"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="diffFamily"
                         label="异网家庭"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="isMbh"
                         label="魔百和"
                         width="105"
                         align="center">
        </el-table-column>

        <!--  <el-table-column prop=""
                         label=""
                         width="105"
                         align="center">
        </el-table-column> -->
      </el-table>
      <el-pagination :current-page.sync="searchData.page"
                     :page-size="searchData.limit"
                     :total="searchData.total"
                     style="margin-top: 20px; text-align: center"
                     :page-sizes="[1, 5, 10, 30]"
                     layout="total, sizes, prev, pager, next, jumper"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange" />
    </div>
    <div class="dialog">
      <!--    //==================== -->
      <!-- <el-row> -->
      <el-dialog :visible.sync="dialogVisible"
                 :before-close="handleDialogClose"
                 width="70%">
        <div class="grid-content"
             style="display: inline-block"> 年份：
          <el-select size="mini"
                     style="width: 100px"
                     v-model="searchData.statisYear"
                     placeholder="选择年"
                     @change="handleChangetype">
            <el-option v-for="item in optiontype"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="grid-content"
             style="display: inline-block">
          期数：
          <el-select size="mini"
                     style="width: 90px"
                     v-model="searchData.cycNum"
                     placeholder="请选择"
                     @change="handleChange">
            <el-option v-for="item in timeoption"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div style="text-align: right">
          <el-button @click="getDownload"
                     type="success"
                     size="mini">模板下载</el-button>
        </div>
        <!-- <el-upload class="upload-demo"
                   multiple
                   drag
                   action="#"
                   accept=".list,.xlsx,.xls,.dat"
                   :http-request="uploadFiles"
                   :on-change="setChange"
                   :limit="5"
                   :file-list="fileList"
                   ref="upfiles"
                   list-type="excel">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip"
               slot="tip">
            只能上传Excel文件，且不超过500kb
          </div>
        </el-upload> -->
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
            <span slot="tip"
                  style="color: 	#FF0000">注：每次导入表格都会对本周期进行全覆盖。</span>
          </div>
        </el-upload>
        <div class="listtpey">
          <p v-for="(item,index) in content"
             :key="index">{{item}}</p>
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
import { download } from "@/api/request.js"
export default {
  data () {
    return {
      dialogVisible: false,
      // year: "2021",

      tableData: [],
      searchData: {
        // statisTypeId: "5",
        // statisTypeId2: '',
        // lvlCode: "",
        // statisMonthtimeoption: "2021q1",
        // statisMonth: '', //年份
        cycNum: 'Q1', //期数
        statisYear: 2021,
        // Code: "",
        // cityCode: '',   //地市
        // cntyCode: '',//区县
        // gridCode: '',// 网格
        // unsatisType: '',//类型 
        pageNo: 1,    //一页条数
        pageSize: 10,      //页数
        total: 10,
      },
      input: '',
      search: '',
      arr: '',
      optionreason: [],
      cityCode: '',
      timeoption: [
        { label: 'Q1', value: 'Q1' },
        { label: 'Q2', value: 'Q2' },
        { label: 'Q3', value: 'Q3' },
        { label: 'Q4', value: 'Q4' },
      ],
      optiontype: [
        { label: '2021', value: '2021' },
        { label: '2020', value: '2020' },
      ],
      cntyArrOptins: [],
      //存放区县
      options1: [],
      files: {
        cycNum: "Q1",
        files: {},
        statisYear: 2021,
        token: "12",
      },
      fileList: [],
      content: ''
    };
  },
  mounted () {
    this.query()
  },
  methods: {
    //查询按钮
    query () {
      apiSend.findKdSatisInfo({ data: this.searchData }).then(res => {
        // console.log(res)
        // this.searchData.total  = res.data.data.current
        this.searchData.total = res.data.data.total
        this.tableData = res.data.data.records
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
      let obj = { type: 6 }
      download(base + "/SatisfactionImport/download5GSatisModel", obj, "kdSatis")
      // window.open(
      //   base + "/dist/kdSatis.xlsx"
      // requestUrl.getExcelTemplate +
      // "?statisMonth=" +
      // this.TemplateData["statisMonth"],
      // );
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
      formData.append('cycNum', this.files.cycNum);
      formData.append('statisYear', this.files.statisYear);
      // console.log(list)
      // return;
      let obj = []
      apiSend.kdSatisImport({ data: formData }).then(res => {
        let arr = res.data.data
        if (arr.code == 1) {        //item.msg +  item.fileName + 
          obj.push(arr.msg)
        }
        if (arr.code == 0) {
          obj.unshift(arr.msg)
        }
        // res.data.data.forEach(item => {
        // if (item.code == 1) {
        //   for (var _demo in item) {
        //     if (_demo.indexOf('exception') != -1)
        //       obj.push(item.fileName + item[_demo])
        //   }
        // }
        // if (item.code == 0) {
        //   console.log(item.fileName + item.msg)
        //   obj.push(item.fileName + item.msg)
        // }
        this.content = obj
        // })
      }).catch(err => {
        console.log(err)
      })
    },
    clearFile () {
      // clearFiles
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
      // console.log(val)
      this.searchData.pageNo = val;

      this.query()
    },
    handleSizeChange (val) {   // 一页多少条 
      // console.log(val)
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
  background: white;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
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
  margin: 5px 5px;
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
</style>
