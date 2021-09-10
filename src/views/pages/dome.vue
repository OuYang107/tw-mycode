<template>
  <div>
   <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="接口名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="调用总量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="成功总量" 
         width="180">
      </el-table-column>
          <el-table-column
        prop="noaddress"
        label="失败总量"  
        width="180">
      </el-table-column>
          <el-table-column
        prop="add"
        label="调用时间" 
         width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
   data() {
        return {
          tableData: [{
            date: '画像分类查询接口',
            name: '0',
            address: '0',
            noaddress:"0",
            add:"20210806"
          }, {
            date: '画像分类查询接口',
            name: '0',
            address: '0',noaddress:"0",
            add:"20210806"
          }, {
            date: '画像分类查询接口',
            name: '0',
            address: '0',noaddress:"0",
            add:"20210806"
          }, 
          {
            date: '画像分类查询接口',
            name: '0',
            address: '0',noaddress:"0",
            add:"20210806"
          },
           {
            date: '画像分类查询接口',
            name: '0',
            address: '0',noaddress:"0",
            add:"20210806"
          },
           {
            date: '画像分类查询接口',
            name: '0',
            address: '0',noaddress:"0",
            add:"20210806"
          },
           {
            date: '画像分类查询接口',
            name: '0',
            address: '0',noaddress:"0",
            add:"20210806"
          },
           {
            date: '画像分类查询接口',
            name: '0',
            address: '0',noaddress:"0",
            add:"20210806"
          }
          ]
        }
      }
}
</script>

<style>

</style>