<template>
  <div class="box">
    <!-- <el-row>  11111111111111111111
      <el-col :span="24">
        <div class=" bg-purple-dark">手机 </div>
      </el-col>
    </el-row> -->
    <div class="content">
      <el-row>
        <el-col :span="3">
          <div class="grid-content">
            年份：
            <el-select size="mini "
                       style="width:100px"
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
                tooltip-effect="light"
                :header-cell-style="rowClass "
                :cell-style="cellStyle">

        <el-table-column prop="sn"
                         label="序号"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="contctNo"
                         label="拜访人联系电话"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="predCityName"
                         label="地市"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q1Question"
                         label="Q1 整体感知"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q2Question"
                         label="Q2 方案设计"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q211Question"
                         label="Q2.1.1 您觉得专线产品的方案设计有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q212Question"
                         label="Q2.1.2 您觉得专线产品的方案设计有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q213Question"
                         label="Q2.1.3 您觉得专线产品的方案设计有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q214Question"
                         label="Q2.1.4 您觉得专线产品的方案设计有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q215Question"
                         label="Q2.1.5 您觉得专线产品的方案设计有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q215vQuestion"
                         label="Q2.1.5V 您觉得专线产品的方案设计有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q2198Question"
                         label="Q2.1.98 您觉得专线产品的方案设计有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q2199Question"
                         label="Q2.1.99 您觉得专线产品的方案设计有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q3Question"
                         label="Q3 产品开通/变更"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q4Question"
                         label="Q4 施工专业性（产品交付）"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q5Question"
                         label="Q5 施工人员服务（产品交付）"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q6Question"
                         label="Q6 上网质量"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q611Question"
                         label="Q6.1.1  您觉得专线产品的网络质量有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q612Question"
                         label="Q6.1.2  您觉得专线产品的网络质量有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q613Question"
                         label="Q6.1.3  您觉得专线产品的网络质量有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q614Question"
                         label="Q6.1.4  您觉得专线产品的网络质量有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q615Question"
                         label="Q6.1.5  您觉得专线产品的网络质量有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q615vQuestion"
                         label="Q6.1.5V  您觉得专线产品的网络质量有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q6198Question"
                         label="Q6.1.98  您觉得专线产品的网络质量有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q6199Question"
                         label="Q6.1.99  您觉得专线产品的网络质量有哪些地方需要改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q71Question"
                         label="Q7.1  请问您是否就专线产品向中国移动提出过报修或投诉？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q7Question"
                         label="Q7 故障处理"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q721Question"
                         label="Q7.2.1 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q722Question"
                         label="Q7.2.2 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q723Question"
                         label="Q7.2.3 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q724Question"
                         label="Q7.2.4 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q725Question"
                         label="Q7.2.5 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q726Question"
                         label="Q7.2.6 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop=""
                         label="Q7.2.7 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q727vQuestion"
                         label="Q7.2.7V 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q7298Question"
                         label="Q7.2.98 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？  "
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q7299Question"
                         label="Q7.2.99 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="commitDate"
                         label="提交时间"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="contctName"
                         label="联系人姓名"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="isValid"
                         label="拜访人是否有效"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="changeContctName"
                         label="变更后联系人"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="vistorDate"
                         label="上门拜访日期"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="vistorCompany"
                         label="客户单位名称"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="predCntyName"
                         label="所属区县"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="isSatis"
                         label="是否10分满意"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="questionBusiType"
                         label="存在问题业务分类"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="questionDesc"
                         label="问题详情"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="isPhoto"
                         label="现场拍照"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="vistorRecord"
                         label="拜访记录反馈表"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="recordRsrv1"
                         label="记录1"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="recordRsrv2"
                         label="记录2"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="recordRsrv3"
                         label="记录3"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <!-- <el-table-column prop=""
                         label=""
                         show-overflow-tooltip
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
               class="el-upload__tip"> 只能上传Excel文件，且不超过500kb <span slot="tip"
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
      options: [
        {
          label: '长沙市',
          value: '731',
          children: [

          ]
        },
        {
          label: '岳阳市', value: '730',
          children: [

          ]
        },
        {
          label: '益阳市', value: '737',
          children: [

          ]
        },
        {
          label: '常德市', value: '736',
          children: [

          ]
        },
        {
          label: '张家界市', value: '744',
          children: [

          ]
        },
        {
          label: '自治州', value: '743',
          children: [

          ]
        },
        {
          label: '怀化市', value: '745',
          children: [

          ]
        },
        {
          label: '娄底市', value: '738',
          children: [

          ]
        },
        {
          label: '湘潭市', value: '732',
          children: [
          ]
        },
        {
          label: '株洲市', value: '733',
          children: [
          ]
        },
        {
          label: '邵阳市', value: '739',
          children: [
          ]
        },
        {
          label: '衡阳市', value: '734',
          children: [
          ]
        },
        {
          label: '永州市', value: '746',
          children: [
          ]
        },
        {
          label: '郴州市', value: '735',
          children: [
          ]
        }
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
      apiSend.findgroupSRLSatisInfo({ data: this.searchData }).then(res => {
        // console.log(res, 11111111111)
        // this.searchData.total = res.data.data.current
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

      let obj = { type: 5 }
      download(base + "/SatisfactionImport/download5GSatisModel", obj, "groupSrlSatis")
      // window.open(
      //   base + "/dist/groupSrlSatis.xlsx"
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
      apiSend.groupSRLSatisImport({ data: formData }).then(res => {
        let arr = res.data.data
        if (arr.code == 1) {
          obj.push(arr.msg)
          this.content = obj
        }
        if (arr.code == 0) {
          obj.unshift(arr.msg)
        }
        this.content = obj
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
      console.log(val)
      this.searchData.pageNo = val;

      this.query()
    },
    handleSizeChange (val) {   // 一页多少条 
      console.log(val)
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
