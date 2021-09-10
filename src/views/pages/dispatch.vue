<template>
  <div class="page-container common-css">
    <div class="page-main">
      <div class="page-menu">
        <el-form :inline="true"
                 class="demo-form-inline"
                 size="small">
          <div class="menu-left">
            <el-form-item label="时间段">
              <el-date-picker
                v-model="value1"
                type="datetimerange"
                value="yyyyMMddHHmmss"
                value-format="yyyyMMddHHmmss"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="small">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="接口">
                <el-input size="small" style="width:150px" v-model="queryData.intfCode"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select style="width:150px" v-model="queryData.status" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click="findTable(1)"
                         size="small">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         size="small" @click="reset">重置</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <el-table :data="tableData"
                border
                :header-cell-style="{background:'rgb(160,207,255)',color:'#fff'}"
                style="width: 100%; margin-top: 20px">
        <el-table-column label="接口时间" min-width="100px">
          <template slot-scope="scope">
            <span :class="scope.row.status == -1 ? 'red' : '' ">{{scope.row.intfDate}}</span>
          </template>      
        </el-table-column>
        <el-table-column label="接口编码">
          <template slot-scope="scope">
            <span :class="scope.row.status == -1 ? 'red' : '' ">{{scope.row.intfCode}}</span>
          </template>   
        </el-table-column>
        <el-table-column label="调度ID">
          <template slot-scope="scope">
            <span :class="scope.row.status == -1 ? 'red' : '' ">{{scope.row.flowId}}</span>
          </template>   
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span :class="scope.row.status == -1 ? 'red' : '' ">{{scope.row.status}}</span>
          </template>   
        </el-table-column>
        <el-table-column label="响应时间(ms)">
          <template slot-scope="scope">
            <span :class="scope.row.status == -1 ? 'red' : '' ">{{scope.row.duration}}</span>
          </template>   
        </el-table-column>
        <el-table-column
                         label="请求消息">
                          <template slot-scope="scope">
                            <el-collapse :class="scope.row.status == -1 ? 'red' : '' ">
                              <el-collapse-item  title="展开" name="1">
                                <div :class="scope.row.status == -1 ? 'red' : '' ">{{scope.row.requestMsg}}</div>
                              </el-collapse-item>
                            </el-collapse>
                          </template>
                         </el-table-column>
        <el-table-column label="响应消息">
                         <template slot-scope="scope">
                           <el-collapse :class="scope.row.status == -1 ? 'red' : '' ">
                            <el-collapse-item title="展开" name="1">
                              <div :class="scope.row.status == -1 ? 'red' : '' ">{{scope.row.responseMsg}}</div>
                            </el-collapse-item>
                           </el-collapse>
                         </template>
                         </el-table-column>
        <el-table-column label="响应结果码">
          <template slot-scope="scope">
            <span :class="scope.row.status == -1 ? 'red' : '' ">{{scope.row.responseCode}}</span>
          </template>   
        </el-table-column>
        <el-table-column label="响应结果">
          <template slot-scope="scope">
            <span :class="scope.row.status == -1 ? 'red' : '' ">{{scope.row.responseDesc}}</span>
          </template>   
        </el-table-column>
      </el-table>
      <el-pagination :current-page.sync="queryData.pageNo"
                     :page-size="queryData.pageSize"
                     :total="queryData.total"
                     style="margin-top: 20px; text-align: center;"
                     :page-sizes="[10, 20, 30, 50, 70, 100]"
                     layout="total, prev, pager, next, jumper"
                     @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script>
import apiSend from '@/api/axios.js'
import axios from 'axios'
export default {
  data () {
    return {
      value1:'',
      queryData: {
        statisDate:'',
        endDate:'',
        intfCode:'',
        status:'',
        total: 0,
        pageSize: 10,
        pageNo: 1,
      },
      tableData: [],
      options: [{
          value: '0',
          label: '0'
        }, {
          value: '-1',
          label: '-1'
        }],
    };
  },
  computed: {

  },
  mounted () {
    this.findTable()
  },
  methods: {
    // 表格
    findTable(page){
      if(page){
        this.queryData.pageNo = page
      }
      this.queryData.statisDate = this.value1[0]
      this.queryData.endDate = this.value1[1]
      apiSend.findCBdiIntfInfo({data:this.queryData}).then(res=>{
        this.tableData = res.data.data.records
        this.queryData.total = res.data.data.total
      })
    },
    handleCurrentChange (val) {
      this.queryData.pageNo = val
      this.findTable()
    },
    reset(){
      this.value1 = ''
      this.queryData.statisDate = ''
      this.queryData.endDate = ''
      this.queryData.intfCode = ''
      this.queryData.status = ''
    }
  }

}
</script>
<style lang="less">
.menu-right .menu-btn {
  display: flex !important;
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