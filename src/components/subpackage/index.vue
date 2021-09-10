<template>
  <div class="W100 H100" style="overflow-y:auto;">
    <div class="box-start filterDiv W100" style="box-sizing:border-box;">
        <div>文件名</div>
        <el-input v-model="dataQuery.dataName" placeholder="请输入关键词搜素" style="width:200px;margin-left:10px"></el-input>
        <el-button style="margin-left:20px" type="primary" @click="getTableList(1)">搜索</el-button>
        <el-button style="margin-left:20px" type="primary" @click="centerDialogVisible=true">导入</el-button>
    </div>
    <div class="tableContent Mt-20">
        <el-table
          :data="tableData"
          style="width: 100%;margin-bottom: 20px;"
          row-key="id"
          class="orgTable"
          stripe>
          <el-table-column prop="dataName" label="文件名称" min-width="200"></el-table-column>
          <el-table-column prop="dataDesc" label="文件描述" min-width="150"></el-table-column>
          <el-table-column prop="dataOuth" label="更新人" min-width="120"></el-table-column>
          <el-table-column prop="uptime" label="更新时间" min-width="150"></el-table-column>
          <el-table-column label="操作" width="80">
            <template slot-scope="scope">
              <div class="el-icon-download" style="font-size:25px;color:#5cb6ff;cursor:pointer;" @click="downExcel(scope.row.url)"></div>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :current-page="dataQuery.currentPage"
          :page-size="dataQuery.pageSize"
          :total="dataQuery.total"
          @current-change="changePage"
          style="margin-top: 20px; text-align: center;"
          layout="total, prev, pager, next, sizes, jumper"/>
      </div>
      <el-dialog
        title="导入"
        :visible.sync="centerDialogVisible"
        @close="delData"
        width="30%"
        center>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="文件名称" prop="dataName">
            <el-input v-model="form.dataName"></el-input>
          </el-form-item>
          <el-form-item label="文件描述" prop="dataDesc">
            <el-input v-model="form.dataDesc"></el-input>
          </el-form-item>
          <el-form-item label="导入文件" prop="file">
            <el-upload
              ref="uploadDemo"
              class="upload-demo"
              action="#"
              :http-request="uploadFile"
              :on-remove="deleteFile"
              multiple
              :limit="1">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <div class="flex-end">
              <el-button type="primary" @click="submitInfo">提交</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-dialog>    
  </div>
</template>

<script>
import Url from '@/api/url'
import apiSend from '@/api/axios.js'
import base from "@/api/baseUrl"
import axios from 'axios'
import store from '@/store/login'
export default {
  name: 'table1',
  data () {
    return {
      centerDialogVisible: false,
      tableData:[],
      dataQuery:{
        dataName: "",
        pageNo: 1,
        pageSize: 10,
        total: 0
      },
      form: {
          dataName: '',
          dataDesc: '',
          file: '',
      },
      rules: {
          dataName: [
            { required: true, message: '请输入文件名称', trigger: 'blur' },
          ],
          dataDesc: [
            { required: true, message: '请输入文件描述', trigger: 'blur' }
          ],
          file: [
            { required: true, message: '请上传文件', trigger: 'change' }
          ],
        }
    }
  },
  mounted () {
    this.$httpLoading.show()
    this.getTableList()
  },
  methods: {
    getTableList(page){
      if(page){
        this.dataQuery.pageNo = 1
      }
      apiSend.findActivemonitorHelpInfo({data:this.dataQuery}).then(res=>{
        this.tableData = res.data.data.records
        this.dataQuery.total = res.data.data.total
        this.$httpLoading.close()
      })
    },
    submitInfo(){
      var formData = new FormData()
      let form = this.form
      for(var i in form){
        formData.append(i,form[i])
      }
      this.$refs['form'].validate((valid) => {
        if(valid){
          this.$httpLoading.show()
          axios.post((process.env.NODE_ENV === "development" ? base.development : base.production) + Url.importData, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              "token": store.state.token,
            }
          }).then(res=>{
            if(res.data.code === '0'){
              this.$httpLoading.close()
              this.centerDialogVisible = false
              this.$message.success(res.data.msg)
              this.getTableList()
              this.delData()
            }else{
              this.$httpLoading.close()
              this.centerDialogVisible = false
              this.$message.error(res.data.msg)
              this.delData()
            }
          }).catch(err=>{
            this.$httpLoading.close()
            this.centerDialogVisible = false
            this.$message.error(err.data.msg)
            this.delData()
          }) 
        }
     })
    },
    changePage(e){
      this.dataQuery.pageNo = e
      this.getTableList()
    },
    uploadFile(file){
      this.form.file = file.file
    },
    deleteFile(){
      this.form.file = ''
    },
    downExcel(url){
      window.open(url)
    },
    delData(){
      this.form.dataName = ''
      this.form.dataDesc = ''
      this.form.file = ''
      this.$refs.uploadDemo.clearFiles();
    }
  }
}
</script>

<style scoped >
.filterDiv{
  height: 60px;
  padding-left: 20px;
  padding-top: 20px;
}
.tableContent{
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  overflow-x: auto;
}
.flex-end{
  display: flex;
  justify-content: flex-end;
}
</style>
