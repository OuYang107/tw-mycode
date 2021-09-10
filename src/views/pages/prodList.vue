<template>
  <div class="page-container" style="background:#f3f3f4" ref="multipleTable">
    <el-row :gutter="20">
      <el-col :span="4">
        <div style="background:#fff;height:700px;padding:20px 10px;box-sizing:border-box;border-radius:8px">
          <el-tree accordion :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
      </el-col>
      <el-col :span="20">
        <div style="background:#fff;padding:20px;box-sizing:border-box;border-radius:8px;height:700px">
          <transition name="el-fade-in-linear">
            <div v-if="showHome">
                <div class="flex-jus-bet">
                  <div>
                    <div style="padding-left:10px;border-left:5px solid #409eff">销售品列表</div>
                  </div>
                  <div style="display:flex;border-radius:8px">
                    <el-input size="small" placeholder="请输入产品名称或产品编码" style="width:200px" v-model="params.name"></el-input>
                    <el-button type="primary" size="small" style="margin-left:20px" @click="getTableList(1)">搜索</el-button>
                  </div>
                </div>
                  <el-table
                    :header-cell-style="{background:'#eff3f8',color:'#333'}"
                    :data="tableData"
                    style="width: 100%;margin-top:20px">
                    <el-table-column type="index" v-if="false"></el-table-column>
                    <el-table-column
                      prop="ids"
                      label="编码"
                      min-width="80" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="名称"
                      min-width="80" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="rsrvStr1"
                      label="办理口径" min-width="100" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="rsrvStr2"
                      label="办理口径说明" min-width="100" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="rsrvStr3"
                      label="长链接" min-width="100" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="rsrvStr4"
                      label="短链接" min-width="100" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="rsrvStr5"
                      label="最后修改人" min-width="100" show-overflow-tooltip>
                    </el-table-column>
                    <!-- <el-table-column
                      prop="address"
                      label="目录" min-width="100" show-overflow-tooltip>
                    </el-table-column> -->
                    <el-table-column
                      label="操作">
                      <template slot-scope="scope">
                        <div class="edit" @click="toEdit(scope.$index)">
                          <div class="el-icon-edit"></div>
                        </div>
                      </template>
                    </el-table-column>
                </el-table>
                <div style="margin-top:20px;text-align:center">
                  <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="params.pageNo"
                    :page-size="params.pageSize"
                    layout="total, prev, pager, next"
                    :total="params.total">
                  </el-pagination>
                </div>
            </div>
          </transition>
          <transition name="el-fade-in-linear">
            <div v-if="showDetail">
                  <el-button icon="el-icon-back" @click="detailToEdit"></el-button>
                  <div class="flex-jus-bet" style="margin-top:20px">
                    <div>
                      <div style="padding-left:10px;border-left:5px solid #409eff">销售品列表</div>
                    </div>
                    <div style="display:flex;border-radius:8px">
                      <el-button type="primary" size="small" style="margin-left:20px">确认选择</el-button>
                    </div>
                  </div>
                    <el-table
                      :header-cell-style="{background:'#eff3f8',color:'#333'}"
                      :data="tableData"
                      style="width: 100%;margin-top:20px">
                      <el-table-column
                        type="selection"
                        min-width="55">
                      </el-table-column>
                      <el-table-column
                        prop="date"
                        label="编码"
                        min-width="80" show-overflow-tooltip>
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="名称"
                        min-width="80" show-overflow-tooltip>
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="状态" min-width="60" show-overflow-tooltip>
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="生效时间" min-width="120" show-overflow-tooltip>
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="失效时间" min-width="120" show-overflow-tooltip>
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="目录" min-width="180" show-overflow-tooltip>
                      </el-table-column>
                  </el-table>
                  <!-- <div style="margin-top:20px;text-align:center">
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page.sync="currentPage1"
                      :page-size="100"
                      layout="total, prev, pager, next"
                      :total="1000">
                    </el-pagination>
                  </div> -->
            </div>
          </transition>
          <transition name="el-fade-in-linear">
            <div v-if="showEdit">
                <div>
                  <el-button icon="el-icon-back" @click="editToHome"></el-button>
                </div>
                <div style="margin-top:20px">
                  <div style="padding:10px;background:#f0f0f0;font-weight:600;">编辑</div>
                </div>
                <el-form class="cs-el-form" ref="form" :model="detailInfo" label-width="100px" style="margin-top:20px">
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item label="编码">
                        <el-input v-model="detailInfo.ids" size="small" disabled></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="名称">
                        <el-input v-model="detailInfo.name" size="small" disabled></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item label="办理口径">
                        <el-tooltip class="item" effect="dark" content="可输入多个口径,最多输入2000个字符,格式为xxx,xxx" placement="top">
                          <el-input v-model="detailInfo.rsrvStr1" maxlength="2000" size="small" style="position:relative;" type="textarea" :rows="5" show-word-limit></el-input>
                        </el-tooltip>
                        <!-- <el-button @click="toDetail" size="small" style="position:absolute;right:0;top: 50%;transform: translateY(-50%);">选择</el-button> -->
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="办理口径说明">
                        <el-input v-model="detailInfo.rsrvStr2" size="small" type="textarea" :rows="5"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item label="关联长链接">
                        <el-input v-model="detailInfo.rsrvStr3" size="small"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="关联短链接">
                        <el-input v-model="detailInfo.rsrvStr4" size="small"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item label="酬金核发大类">
                        <el-input v-model="detailInfo.rsrvStr6" size="small"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
                <div style="text-align:right;">
                  <el-button size="small" type="primary" @click="update">修改</el-button>
                </div>
            </div>
          </transition>
        </div>
      </el-col>
    </el-row>
    <div>
    </div>
  </div>
</template>

<script>

import apiSend from '@/api/axios.js'
import axios from 'axios'
import { download } from '@/api/export.js'
import base from "@/api/baseUrl";
import { mapState } from 'vuex'
export default {
  data () {
    return {
      showHome:true,
      showEdit:false,
      showDetail:false,
      form: {
          name: ''
      },
      params:{
        id:'',
        name:'',
        pageNo:0,
        pageSize:10,
        total:0,
      },
      detailInfo:{},
      treeData: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        tableData: []
    }
  },
  computed: {
  },
  created () {
  },
  mounted(){
    this.getLeftList()
    this.getTableList()
  },
  methods: {
    getLeftList(){
      apiSend.findMenuInfo({}).then(res=>{
        this.treeData = res.data.data
      })
    },
    getTableList(page){
      if(page){
        this.params.pageNo = page
      }
      apiSend.findProdInfo({data:this.params}).then(res=>{
        this.tableData = res.data.data.records
        this.params.total = res.data.data.total
      })
    },
    handleCurrentChange(val){
      this.params.pageNo = val
      this.getTableList()
    },
    // 点击菜单
    handleNodeClick(data) {
        this.params.name = ''
        this.params.id = data.id
        this.getTableList()
    },
    // 详情
    toEdit(index){
      this.detailInfo = this.tableData[index]
      this.showHome = false
      this.showEdit = true
      this.$refs.multipleTable.scrollTop = 0
    },
    editToHome(){
      this.showHome = true
      this.showEdit = false
    },
    toDetail(){
      this.showEdit = false
      this.showDetail = true
    },
    update(){
      var reg = /^\d+(\.\d+)?$/
      let newArr = this.detailInfo.rsrvStr1.split(/[,，]/)
      console.log(newArr)
      for(let i=0;i<newArr.length;i++){
        if(newArr[i].length !== 8 || !reg.test(newArr[i])){
          this.$message.error('仅支持8位的优惠编码或平台业务编码')
          return false
        }
      }
      const params = {
        id:this.detailInfo.ids,
        rsrvStr1:this.detailInfo.rsrvStr1,
        rsrvStr2:this.detailInfo.rsrvStr2,
        rsrvStr3:this.detailInfo.rsrvStr3,
        rsrvStr4:this.detailInfo.rsrvStr4,
        rsrvStr6:this.detailInfo.rsrvStr6
      }
      apiSend.updateProdInfo({data:params}).then(res=>{
        if(res.data.code === '0'){
          this.$message.success('修改成功')
          this.editToHome()
          this.$refs.multipleTable.scrollTop = 0
          this.getTableList()
        }
      })
    },
    detailToEdit(){
      this.showEdit = true
      this.showDetail = false
    }
  }
};
</script>
<style lang="less" scoped>
.flex-end{
  display: flex;
  justify-content: flex-end;
}
.flex{
  display: flex;
}
.flex-jus-bet{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.edit{
  background: #a0cfff;
  width: 25px;
  height: 25px;
  cursor: pointer;
  line-height: 25px;
  border-radius: 50%;
  text-align: center;
}
/deep/ .cs-el-form .el-textarea__inner{
  padding: 0px 15px 20px;
}
/deep/ .cs-el-form .el-input__count{
  background: none;
  bottom: 0px;
  right: 20px;
}
</style>