<template>
  <div class="box">
    <!-- <el-row>
      <el-col :span="24">
        <div class=" bg-purple-dark">手机 </div>
      </el-col>
    </el-row> -->
    <div class="content">
      <el-row>
        <el-col :span="3">
          <div class="grid-content">
            年份：
            <el-date-picker style="width: 100px"
                            v-model="year"
                            type="year"
                            placeholder="选择年"
                            size="mini"
                            format="yyyy"
                            value-format="yyyy">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            期数：
            <el-select size="mini"
                       style="width: 90px"
                       v-model="qishu"
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
        <el-col :span="5.5">
          <div class="grid-content b">
            商业过程：
            <el-select size="mini "
                       v-model="searchData.statisTypeId2"
                       placeholder="请选择"
                       @change="handleChangetype">
              <el-option v-for="item in optiontype"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="miss">
            <div class="grid-content selects">
              地域： <el-cascader class="cerd"
                           size="mini"
                           v-model="search"
                           placeholder="全省"
                           :options="options"
                           clearable
                           :show-all-levels="false"
                           :props="{checkStrictly: true}"
                           filterable
                           @change="cityname">
              </el-cascader>
            </div>
          </div>
        </el-col>
        <el-col :span="3">
          <!-- <div class="grid-content bg-purple-light">
            <el-input
              v-model="input"
              size="mini"
              style="width: 160px"
              placeholder="请输入内容"
            ></el-input>
          </div> -->
        </el-col>
        <el-col :span="5">
          <div class="grid-content a">
            <el-row>
              <el-button type="primary"
                         size="mini"
                         @click="query ">查询</el-button>
              <el-button size="mini"
                         plain
                         @click="resetting">重置</el-button>
              <!-- <el-button
                size="mini"
                type="text"
              >更多筛选</el-button> -->
            </el-row>
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
                :header-cell-style="rowClass "
                :cell-style="cellStyle">
        <el-table-column prop="statisMonth"
                         label="统计周期"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="name"
                         label="地域"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="satisType2"
                         label="商业过程"
                         align="center"
                         width="120">
        </el-table-column>
        <el-table-column prop="cmccSatisScore"
                         label="移动 "
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="cmccSatisRank"
                         label="排名"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="cmccValidNum"
                         label="移动有效样本"
                         width="120"
                         align="center">
        </el-table-column>

        <el-table-column prop="unicomSatisScore"
                         label="联通"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="unicomSatisRank"
                         label="排名"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="unicomValidNum"
                         label="联通有效样本"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="telecomSatisScore"
                         label="电信 "
                         align="center"
                         width="120">
        </el-table-column>
        <el-table-column prop="unicomSatisRank"
                         label="排名"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="telecomValidNum"
                         label="电信有效样本"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="goodUnicomScore"
                         label="领先联通"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="goodTelecomScore"
                         label="领先电信"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="goodScore"
                         label="领先度"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="goodRank"
                         label="排名"
                         width="120"
                         align="center">
        </el-table-column>

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
  </div>
</template>

<script>
import apiSend from "@/api/httpRequest.js";
export default {
  data () {
    return {
      year: "2021",
      qishu: "Q1",
      tableData: [],
      searchData: {
        statisTypeId: "1",
        statisTypeId2: '',
        lvlCode: "",
        // statisMonthtimeoption: "2021q1",
        statisMonth: '', //年份
        timeoption: '第一期', //期数
        // Code: "",
        cityCode: '',   //地市
        cntyCode: '',//区县
        gridCode: '',// 网格

        unsatisType: '',//类型 
        limit: 5,    //一页条数
        page: 1,      //页数
        total: 1,
      },
      input: '',
      search: '',
      arr: '',
      // searchDatas: {

      // },
      optionreason: [],
      cityCode: '',
      timeoption: [
        { label: 'Q1', value: 'Q1' },
        { label: 'Q2', value: 'Q2' },
        { label: 'Q3', value: 'Q3' },
        { label: 'Q4', value: 'Q4' },
      ],
      optiontype: [
        // { label: '网络', value: 'network' },
        // { label: '服务', value: 'service' },
        // { label: '资费', value: 'charge', },
        // { label: '增值业务', value: 'business' },
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
      options1: []
    };
  },
  created () {
    this.handleChangetype()
  },
  mounted () {
    this.query()
  },
  methods: {
    handleChangetype (value) {
      apiSend.querytype({ data: this.searchData }).then((res) => {
        this.query()
        // this.searchData.page = res.data.
        // this.tableData = res.data.data.data.list
      })
        .catch((err) => {
          console.log(err);
        });
      // ------------
      let statisTypeId = {
        statisTypeId: this.searchData.statisTypeId
      }
      apiSend.querytype({ data: statisTypeId }).then(res => {
        this.optiontype = res.data.data.data.map(item => {
          let arr = {}
          // console.log(item.SATISTYPEID2, item.SATISTYPE2)
          arr.label = item.SATISTYPE2
          arr.value = item.SATISTYPEID2
          return arr
        })
      }).catch(err => {
        console.log(err)
      })

      // console.log(value,)
      let obj = {}
      this.optiontype.forEach(item => {
        if (item.value == value) {
          console.log(item.value)
          // obj.unsatisType = item.value
        }
      })
    },
    handleChange (val) {
      this.query()
      // let obj = {}
      this.timeoption.forEach(i => {
        // console.log(i.label, i.value)
        if (i.value === val) {
          // let arr = val
          //  = this.searchData.statisMonth + arr
          this.searchData.statisMonth = this.year + this.qishu
          // console.log(this.searchData.statisMonth)
          // this.searchData.statisMonth = obj
          // console.log(this.searchData.statisMonth)
        }
      })
    },
    //重置按钮
    resetting () {
      // this.year = ''
      // this.qishu = ''
      this.searchData.cityCode = '',   //地市
        this.searchData.cntyCode = '',//区县
        this.searchData.gridCode = '',// 网格
        this.searchData.statisTypeId2 = ''
      this.search = ''
      // this.$message.warning(日期 + "!");
      // this.searchData.unsatisReason = ''
      // this.input = ''
    },
    rowClass ({ row, rowIndex, column }) {
      // console.log(this.searchData.cntyCode)
      // console.log(column)
      // console.log(rowIndex)
      if (["网格", "区县", "地市"].indexOf(column.label) != -1) {
        if (this.searchData.gridCode) {
          column.label = "网格"
        } else if (this.searchData.cntyCode) {
          column.label = "区县"
        } else {
          column.label = "地市"
        }
      }
    },
    cellStyle ({ row, column, rowIndex, columnIndex }) {
      // console.log(column)
    },
    //查询按钮
    query () {
      // this.handleChange()
      this.searchData.statisMonth = this.year + this.qishu
      apiSend.querypagedata({ data: this.searchData }).then((res) => {
        // console.log(res.data.data.data)
        this.tableData = res.data.data.data.list
        this.searchData.limit = res.data.data.data.pageSize
        this.searchData.total = res.data.data.data.totalCount
        // this.searchData.total = res.data.data.data.total;
        // console.log(this.searchData)
      })
        .catch((err) => {
          console.log(err);
        });
    },
    //地市查询
    cityname (val) {
      console.log(val.length)
      let o = {};
      o.cityCode = val[0] ? val[0] : ''
      this.searchData.cityCode = o.cityCode
      o.cntyCode = val[1] ? val[1] : ''
      this.searchData.cntyCode = o.cntyCode
      o.gridCode = val[2] ? val[2] : ''
      this.searchData.gridCode = o.gridCode
      apiSend.queryregion({ data: o }).then((res) => {
        // console.log(res.data.data.data)
        //第三级
        // this.searchData.Code = o       洗数据-------如果有没有到网格就把数据给区县 如果到了就给网格
        // 洗出来的数据  放在clickCity里
        let clickCity = res.data.data.data.map((item) => {
          let cntyArr = {}
          if (val[1]) {
            cntyArr.label = item.GRIDNAME
            cntyArr.value = item.GRIDCODE
          } else {
            cntyArr.label = item.CNTYNAME
            cntyArr.value = item.CNTYCODE
            cntyArr.children = []
          }
          return cntyArr
        })
        if (val[1]) {         // 给网格级去重
          let result = [];
          let obj = {};
          clickCity.forEach((item) => {
            if (!obj[item.value]) {
              result.push(item)
              obj[item.value] = true;
            }
          })
          //公共存放区   cntyArrOptins 
          this.cntyArrOptins.children = this.cntyArrOptins.forEach((item => {
            if (item.value === val[1]) {
              // item.children     网格级数据
              item.children = result
            }
          }))
        } else {
          var result = [];
          var obj = {};
          clickCity.forEach((item) => {
            if (!obj[item.value]) {
              result.push(item)
              obj[item.value] = true;
            }
          })
          this.cntyArrOptins = result
        }
        //
        this.options.forEach((item) => {
          if (item.value === val[0]) {
            item.children = this.cntyArrOptins
          }
        })
      })
        .catch((err) => {
          console.log(err);
        });
    },
    handleCurrentChange (val) {
      console.log(val)
      this.searchData.page = val;
      this.query()
    },
    handleSizeChange (val) {
      this.searchData.limit = val;
      this.query()
    },

  },
  computed: {

  }
};
</script>
<style lang="less" scoped>
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
}
.miss {
  // padding: 5px;
}
.content /deep/ .selects .el-cascader .el-input .el-input__inner {
  height: 28px !important;
}
.content /deep/ .el-input--suffix .el-input__inner {
  padding-right: 0px;
  // width: 10px;
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
  width: 100%;
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
</style>>
