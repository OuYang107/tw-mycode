<template>
  <div class="box">
    <!-- <el-row>
      <el-col :span="24">
        <div class=" bg-purple-dark">手机 </div>
      </el-col>
    </el-row> -->
    <div class="content">
      <el-row>
        <el-col :span="5.5">
          <div class="grid-content">
            统计月份：
            <el-date-picker style="width: 180px"
                            type="month"
                            v-model="searchData.statisMonth"
                            placeholder="请选择统计月份"
                            size="mini"
                            format="yyyyMM"
                            value-format="yyyyMM"
                            :editable="false">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="5">
          <!-- <div class="grid-content">
      
          </div> -->
        </el-col>
        <el-col :span="5">
          <!-- <div class="grid-content b">
            不满意类型：
          
            <el-select
              size="mini "
              v-model="searchData.unsatisType"
              placeholder="请选择"
              @change="handleChange"
            >
              <el-option
                v-for="item in optiontype"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >{{item.label}}
              </el-option>
            </el-select>
          </div> -->
        </el-col>
        <el-col :span="4.5">
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
                style="width: 100%"
                border
                height="370"
                tooltip-effect="light"
                :header-cell-style="rowClass "
                :cell-style="cellStyle">

        <el-table-column prop="statisMonth"
                         label="统计月份"
                         width="100"
                         align="center">
        </el-table-column>
        <el-table-column prop="familyId"
                         label="家庭ID"
                         show-overflow-tooltip
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="familyServNo"
                         label="家庭关键人号码"
                         show-overflow-tooltip
                         align="center"
                         width="120">
        </el-table-column>
        <el-table-column prop="familyCityName"
                         label="家庭归属地市"
                         show-overflow-tooltip
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="familyCntyName"
                         label="家庭归属区县"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="familyCellName"
                         label="家庭归属小区"
                         width="120"
                         align="center">
        </el-table-column>

        <el-table-column prop="unsatisMemerFlux"
                         label="不满意成员数量"
                         width="120"
                         show-overflow-tooltip
                         align="center">
        </el-table-column>
        <el-table-column prop="unsatisKdFlux"
                         label="不满意宽带数量"
                         width="120"
                         show-overflow-tooltip
                         align="center">
        </el-table-column>
        <el-table-column prop="fsumEval"
                         label="满意度评估"
                         width="120"
                         show-overflow-tooltip
                         align="center">
        </el-table-column>
        <el-table-column prop="familyCircleType"
                         label="家庭类型"
                         align="center"
                         show-overflow-tooltip
                         width="120">
        </el-table-column>
        <el-table-column prop="familyArpuValStamp"
                         label="家庭arpu值特征"
                         show-overflow-tooltip
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="familyRiskStamp"
                         label="家庭风险特征"
                         width="120"
                         show-overflow-tooltip
                         align="center">
        </el-table-column>
        <el-table-column prop="familyQQwMergeStamp"
                         label="家庭亲情网融合特征"
                         width="130"
                         show-overflow-tooltip
                         align="center">
        </el-table-column>
        <el-table-column prop="familyOldSmallValStamp"
                         label="家庭老小特征"
                         width="120"
                         show-overflow-tooltip
                         align="center">
        </el-table-column>
        <!-- <el-table-column
          prop="province"
          label="家庭arpu值特征"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="province"
          label="家庭风险特征"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="province"
          label="家庭亲情网融合特征"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="province"
          label="家庭老小特征"
          width="120"
          align="center"
        >
        </el-table-column> -->
        <!-- <el-table-column
        prop="province"
        label="不满意原因标识"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="不满意原因"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="维系方式"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="zip"
        label="维系策略编码"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="zip"
        label="维系策略"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="zip"
        label="客户等级"
        width="120"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="province"
        label="主套餐"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="主套餐费用"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="套外费用"
        align="center"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="超套餐流量费用"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="超套餐语音费用"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="流量饱和度"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="语音饱和度"
        width="120"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="province"
        label="IMEI"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="终端品牌"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="终端型号"
        align="center"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="终端使用时长"
        width="120"
        align="center"
      >
      </el-table-column> -->

      </el-table>
      <el-pagination :current-page.sync="searchData.pageNo"
                     :page-size="searchData.pageSize"
                     :total="searchData.total"
                     style="margin-top: 20px; text-align: center"
                     :page-sizes="[1, 5, 10,20, 30]"
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
    const current_year = new Date().getFullYear();
    const current_month =
      new Date().getMonth() + 1 >= 10
        ? new Date().getMonth() + 1
        : "0" + (new Date().getMonth());
    const currentDate = current_year + current_month;
    return {
      tableData: [],
      searchData: {
        statisMonth: currentDate, //月份
        // Code: "",
        cityCode: '',   //地市
        cntyCode: '',//区县
        gridCode: '',// 网格
        unsatisReason: '', //原因  
        unsatisType: '',//类型 
        pageSize: 10,    //一页条数
        pageNo: 1,      //页数
        total: 0,
      },
      input: '',
      search: '',
      arr: '',
      // searchDatas: {

      // },
      optionreason: [],
      cityCode: '',
      optiontype: [
        { label: '网络', value: 'network' },
        { label: '服务', value: 'service' },
        { label: '资费', value: 'charge', },
        { label: '增值业务', value: 'business' },
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
    this.query()
  },
  methods: {
    handleChange (value) {

      console.log(value,)
      let obj = {}
      this.optiontype.forEach(item => {
        // console.log(item.value, value)
        if (item.value == value) {
          obj.unsatisType = item.value
          // if (item.label == value)
        }
      })
      // for (let i of this.optiontype) {
      //   // console.log(i)
      //   // console.log(i.label, i.value)
      //   if (i.value == value) {
      //     obj.value = i.value
      //     obj.label = i.label
      //   }
      // }
      // console.log(obj)
      // this.searchData.unsatisType = obj
      // console.log(this.searchData.unsatisType)
      apiSend.familySelect({ data: obj }).then(res => {
        let arr = []
        res.data.data.forEach(item => {
          // console.log(item)
          let object = {}
          // console.log(item) 
          object.label = item.unsatisReasonName
          object.value = item.unsatisReason
          // console.log(object.value)


          arr.push(object)

          // arr.forEach((item) => {
          //   if (!obj[item.value]) {
          //     result.push(item)
          //     obj[item.value] = true;
          //   }
          // })
          // console.log(arr)
        })
        let result = [];
        let obj = {};
        arr.forEach((item) => {
          console.log(item)
          console.log(item.value)

          if (!obj[item.value]) {
            result.push(item)
            obj[item.value] = true;
          }
        })
        // console.log(result)
        this.optionreason = result
        this.searchData.unsatisReason = ''
        // this.optionreason.forEach((item) => {
        //   // console.log(item)
        //   // console.log(item.value)
        //   let result = [];
        //   let obj = {};
        //   if (!obj[item.value]) {
        //     result.push(item)
        //     obj[item.value] = true;

        //   }
        // })
        // console.log(res.data.data[0].unsatisReasonName)
      }).catch(err => {
        console.log(err)
      })
      // console.log(value[0])
      // console.log(JSON.stringify(value))

      // switch (value[0]) {
      //   case 'network':
      //     this.optionreason = [{ label: '资费1', value: '101', },]
      //     break
      //   case 'service':
      //     this.optionreason = [{ label: '资费2', value: '2', },]
      //     break
      //   case 'charge':
      //     this.optionreason = [{ label: '资费3', value: '3', },]
      //     break
      //   case 'business':
      //     this.optionreason = [{ label: '资费4', value: '4', },]
      // }
    },
    // rowClass ({ row, rowIndex }) {
    //   console.log(rowIndex) //表头行标号为0
    //   return 'background:red'
    // },
    //重置按钮
    resetting () {
      // this.searchData.statisMonth = ''
      this.searchData.unsatisType = ''
      this.searchData.unsatisReason = ''
      this.search = ''
      this.input = ''
    },
    rowClass ({ row, rowIndex, column }) {
      // console.log(column)
      // console.log(row[0].label)
      // for (let i in row) {
      //   if (i === "基础属性")
      //     console.log(i)
      // }
      // console.log(rowIndex)
      if (column.label === "基础属性") {
        // console.log(1)background: '#409EFF', background: '#409EFF', color: '#444'
        return {}
      }
      if (column.label === "资费") {
        // console.log(1)
        return {}
      }
      if (column.label === "网络") {
        // console.log(1)
        return {}
      }

      return {}
    },
    cellStyle ({ row, column, rowIndex, columnIndex }) {
      // console.log(row)
      // console.log(column)
      // console.log(rowIndex)
      // console.log(columnIndex)
      // if (rowIndex === 1 && columnIndex === 2) { //指定坐标rowIndex ：行，columnIndex ：列
      //   return 'background:red' //rgb(105,0,7)
      // } else {
      //   return ''
      // }
    },
    //查询按钮
    query () {
      apiSend.family({ data: this.searchData }).then((res) => {
        console.log(res)
        this.tableData = res.data.data
        // console.log(res.data.data.total)
        this.searchData.total = res.data.data.total;
      })
        .catch((err) => {
          console.log(err);
        });
    },
    //地市查询
    cityname (val) {
      console.log(val)
      let o = {};
      // this.searchData.Code = o
      o.cityCode = val[0] ? val[0] : ''
      this.searchData.cityCode = o.cityCode
      o.cntyCode = val[1] ? val[1] : ''
      this.searchData.cntyCode = o.cntyCode
      o.gridCode = val[2] ? val[2] : ''
      this.searchData.gridCode = o.gridCode
      // if (val.length == 1) {
      //   o = { cityCode: val[0] }
      // } else {
      //   o = { cntyCode: val[1] }
      // }
      // console.log(o);
      // return;
      apiSend.familySelect({ data: o }).then((res) => {
        //第三级
        // this.searchData.Code = o
        let clickCity = res.data.data.map((item) => {
          let cntyArr = {}
          if (val[1]) {
            cntyArr.label = item.familyCellName
            cntyArr.value = item.familyCellId
          } else {
            cntyArr.label = item.familyCntyName
            cntyArr.value = item.familyCntyCode
            cntyArr.children = []
          }
          // cntyArr.label = val[1] ? item.gridName : item.cntyName
          // cntyArr.value = val[1] ? item.gridCode : item.gridCode
          // cntyArr.children = []
          return cntyArr
        })
        if (val[1]) {
          let result = [];
          let obj = {};
          clickCity.forEach((item) => {
            if (!obj[item.value]) {
              result.push(item)
              obj[item.value] = true;
            }
          })
          this.cntyArrOptins.children = this.cntyArrOptins.forEach((item => {
            if (item.value === val[1]) {
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
        this.options.forEach((item) => {
          if (item.value === val[0]) {
            item.children = this.cntyArrOptins
            // item
          }
        })
        // console.log(this.options, '1111111111111111')
        // res.data.data.forEach((item) => {
        //   let arrTest = {}
        //   // console.log(item)
        //   arrTest['label'] = item.gridName;
        //   arrTest['value'] = item.gridCode;
        //   console.log(arrTest)
        //   // console.log(Object.keys(arrTest), Object.values(arrTest))
        //   // let obj = { 'Object.keys(arrTest)': Object.values(arrTest) }
        //   let arrows = []
        //   for (let key in arrTest) {
        //     var temp = {}
        //     if (key == 'label') {
        //       temp.label = arrTest[key]
        //       arrows.push(temp)
        //     }
        //     if (key == 'value') {
        //       temp.value = arrTest[key]
        //       arrows.push(temp)
        //     }
        //   }
        //   // console.log(temp)
        //   this.arr = arrows
        // })
        // let current = res.data.data[0];
        // console.log(current, 'current')
        // // // console.log(current)
        // res.data.data.forEach((item) => {
        //   item['label'] = item.cntyName;
        //   item['value'] = item.cntyCode;
        //   item['children'] = this.arr
        //   // console.log(item)
        // })
        // // -----------------
        // this.options.forEach((item) => {
        //   // console.log(item.value, current.cityCode)
        //   if (item.value == current.cityCode) {
        //     item['children'] = res.data.data
        //   }
        // })

        // let arrTest = []
        // for (let item in res.data.data) {
        //   arrTest['label'] = item.gridName;
        //   arrTest['value'] = item.gridCode;
        // }
        // console.log(arrTest)
      })
        .catch((err) => {
          console.log(err);
        });
      // console.log(val[0])
    },

    handleCurrentChange (val) {
      this.searchData.pageNo = val;
      this.query()
    },
    handleSizeChange (val) {
      this.searchData.pageSize = val;
      this.query()
    },
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
  // padding: 0 24px;
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
  margin: 5px 9px;
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
  // margin-top: 10px;
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
      border: 1px solid white;

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
