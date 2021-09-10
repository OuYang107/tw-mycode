<template>
  <div class="page-container common-css">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0">调度协同</el-menu-item>
      <el-menu-item index="1">华为发起</el-menu-item>
      <el-menu-item index="2">对端发起</el-menu-item>
    </el-menu>
    <div class="block Mt-20">
    <el-carousel height="1200px" indicator-position="none" :autoplay="false" arrow="never" ref="carousel" :initial-index="0">
      <el-carousel-item>
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
                    size="small"
                    :clearable="false">
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
      </el-carousel-item>
      <el-carousel-item>
        <div class="page-main">
          <div class="page-menu">
            <el-form :inline="true"
                    class="demo-form-inline"
                    size="small">
              <div class="menu-left">
                <el-form-item label="时间段">
                  <el-date-picker
                    v-model="value2"
                    type="datetimerange"
                    value="yyyyMMddHHmmss"
                    value-format="yyyyMMddHHmmss"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    size="small"
                    :clearable="false">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="调度ID">
                    <el-input size="small" style="width:150px" v-model="queryData2.flowId"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select style="width:150px" v-model="queryData2.status" placeholder="请选择">
                      <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary"
                            @click="findTable2(1)"
                            size="small">查询</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="small" @click="reset2">重置</el-button>
                </el-form-item>
              </div>
            </el-form>
          </div>
          <el-table :data="tableData2"
                    border
                    :header-cell-style="{background:'rgb(160,207,255)',color:'#fff'}"
                    style="width: 100%; margin-top: 20px">
            <el-table-column label="任务ID" min-width="80px">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.jobId}}</span>
              </template>      
            </el-table-column>
            <el-table-column label="时间" min-width="100px">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.infoTime}}</span>
              </template>      
            </el-table-column>
            <el-table-column label="调度ID">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.flowId}}</span>
              </template>   
            </el-table-column>
            <el-table-column label="重跑周期">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.dataTime}}</span>
              </template>   
            </el-table-column>
            <el-table-column label="重跑原因">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.content}}</span>
              </template>   
            </el-table-column>
            <el-table-column label="状态">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.status}}</span>
              </template>   
            </el-table-column>
            <el-table-column label="对端处理结果">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.dealWithStatus}}</span>
              </template>   
            </el-table-column>
            <el-table-column label="对端处理备注">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.note}}</span>
              </template>   
            </el-table-column>
          </el-table>
          <el-pagination :current-page.sync="queryData2.pageNo"
                        :page-size="queryData2.pageSize"
                        :total="queryData2.total"
                        style="margin-top: 30px; text-align: center;"
                        :page-sizes="[10, 20, 30, 50, 70, 100]"
                        layout="total, prev, pager, next, jumper"
                        @current-change="handleCurrentChange2" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="page-main">
          <div class="page-menu">
            <el-form :inline="true"
                    class="demo-form-inline"
                    size="small">
              <div class="menu-left">
                <el-form-item label="时间段">
                  <el-date-picker
                    v-model="value3"
                    type="datetimerange"
                    value="yyyyMMddHHmmss"
                    value-format="yyyyMMddHHmmss"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    size="small"
                    :clearable="false">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="调度ID">
                    <el-input size="small" style="width:150px" v-model="queryData3.flowId"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select style="width:150px" v-model="queryData3.status" placeholder="请选择">
                      <el-option
                        v-for="item in options3"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="small" @click="findTable3(1)">查询</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="small" @click="reset3">重置</el-button>
                </el-form-item>
              </div>
            </el-form>
          </div>
          <el-table :data="tableData3"
                    border
                    :header-cell-style="{background:'rgb(160,207,255)',color:'#fff'}"
                    style="width: 100%; margin-top: 20px">
            <el-table-column label="任务ID" min-width="80px">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.jobId}}</span>
              </template>      
            </el-table-column>
            <el-table-column label="时间" min-width="100px">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.infoTime}}</span>
              </template>      
            </el-table-column>
            <el-table-column label="调度ID">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.flowId}}</span>
              </template>   
            </el-table-column>
            <el-table-column label="重跑周期">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.dataTime}}</span>
              </template>
            </el-table-column>
            <el-table-column label="重跑原因">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.content}}</span>
              </template>   
            </el-table-column>
            <el-table-column label="状态">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.status}}</span>
              </template>   
            </el-table-column>
            <el-table-column label="处理状态">
              <template slot-scope="scope">
                <span :class="scope.row.status == 'open' ? 'red' : '' ">{{scope.row.dealWithStatus}}</span>
              </template>   
            </el-table-column>
            <el-table-column label="备注">
              <template slot-scope="scope">
                <span>{{scope.row.note}}</span>
              </template>   
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button v-if="scope.row.status == 'open'" size="mini" @click="openDialog(scope.row.jobId)" type="primary" icon="el-icon-edit">处理</el-button>
              </template>   
            </el-table-column>
          </el-table>
          <el-pagination :current-page.sync="queryData3.pageNo"
                        :page-size="queryData3.pageSize"
                        :total="queryData3.total"
                        style="margin-top: 30px; text-align: center;"
                        :page-sizes="[10, 20, 30, 50, 70, 100]"
                        layout="total, prev, pager, next, jumper"
                        @current-change="handleCurrentChange3" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-dialog
          title="处理"
          :visible.sync="centerDialogVisible"
          width="30%">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="处理结果">
              <el-input v-model="form.note" type="textarea" :rows="5"></el-input>
            </el-form-item>
          </el-form>  
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editClick">确 定</el-button>
          </span>
        </el-dialog>
  </div>
  </div>
</template>

<script>
import apiSend from '@/api/axios.js'
import axios from 'axios'
export default {
  data () {
    return {
      centerDialogVisible:false,
      value1:'',
      value2:'',
      value3:'',
      tableData: [],
      tableData2: [],
      tableData3: [],
      queryData: {
        statisDate:'',
        endDate:'',
        intfCode:'',
        status:'',
        total: 0,
        pageSize: 10,
        pageNo: 1,
      },
      queryData2: {
        statisDate:'',
        endDate:'',
        flowId:'',
        status:'',
        total: 0,
        pageSize: 10,
        pageNo: 1,
        type: 2
      },
      queryData3: {
        statisDate:'',
        endDate:'',
        flowId:'',
        status:'',
        total: 0,
        pageSize: 10,
        pageNo: 1,
        type: 1,
      },
      form: {
        note: '',
      },
      jobId: '',
      activeIndex: '0',
      options: [{
          value: '0',
          label: '0'
        }, {
          value: '-1',
          label: '-1'
        }],
      options2: [{
          value: 'open',
          label: 'open'
        }, {
          value: 'closed',
          label: 'closed'
        }],
      options3: [{
          value: 'open',
          label: 'open'
        }, {
          value: 'closed',
          label: 'closed'
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
      this.queryData.statisDate = this.value1[0] ? this.value1[0] : ''
      this.queryData.endDate = this.value1[1] ? this.value1[1] : ''
      apiSend.findCBdiIntfInfo({data:this.queryData}).then(res=>{
        this.tableData = res.data.data.records
        this.queryData.total = res.data.data.total
      })
    },
    findTable2(page){
      if(page){
        this.queryData2.pageNo = page
      }
      this.queryData2.statisDate = this.value2[0] ? this.value2[0] : ''
      this.queryData2.endDate = this.value2[1] ? this.value2[1] : ''
      apiSend.findSchedulingReloadInfo({data:this.queryData2}).then(res=>{
        this.tableData2 = res.data.data.records
        this.queryData2.total = res.data.data.total
      })
    },
    handleSelect(e){
      this.activeIndex = e
      this.$refs.carousel.setActiveItem(e)
      switch(e){
        case '0':
          this.findTable()
        case '1':
          this.findTable2()
          break
        case '2':
          this.findTable3()
          break  
      }
    },
    findTable3(page){
      if(page){
        this.queryData3.pageNo = page
      }
      this.queryData3.statisDate = this.value3[0] ? this.value3[0] : ''
      this.queryData3.endDate = this.value3[1] ? this.value3[1] : ''
      apiSend.findSchedulingReloadInfo({data:this.queryData3}).then(res=>{
        this.tableData3 = res.data.data.records
        this.queryData3.total = res.data.data.total
      })
    },
    openDialog(jobId){
      this.centerDialogVisible = true
      this.jobId = jobId
    },
    editClick(){
      let params = {
        jobId:this.jobId,
        note:this.form.note
      }
      apiSend.updateSchedulingReloadInfo({data:params}).then(res=>{
        this.centerDialogVisible = false
        this.form.note = ''
        if(res.data.code === '0'){
          this.$message.success(res.data.msg)
        }else{
          this.$message.error(res.data.msg)
        }
        this.findTable3()
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
      this.queryData.pageNo1 = 1
    },
    reset2(){
      this.value2 = ''
      this.queryData2.statisDate = ''
      this.queryData2.endDate = ''
      this.queryData2.flowId = ''
      this.queryData2.status = ''
      this.queryData2.pageNo1 = 1
    },
    reset3(){
      this.value3 = ''
      this.queryData3.statisDate = ''
      this.queryData3.endDate = ''
      this.queryData3.flowId = ''
      this.queryData3.status = ''
      this.queryData3.pageNo1 = 1
    },
    handleCurrentChange2 (val) {
      this.queryData2.pageNo = val
      this.findTable2()
    },
    handleCurrentChange3 (val) {
      this.queryData3.pageNo = val
      this.findTable3()
    },
  }

}
</script>
<style lang="less">
.menu-right .menu-btn {
  display: flex !important;
}
.el-dialog__body{
  padding: 30px 20px 0px 20px;
}
.dialog-footer{
  justify-content: flex-end;
}
.el-dialog__header {
  border-bottom: 1px solid #eee;
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