(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05880502"],{1180:function(e,t,a){},"15fd":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("a4d3"),a("c975"),a("b64b");function o(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}function n(e,t){if(null==e)return{};var a,n,l=o(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}},1889:function(e,t,a){"use strict";var o=a("1180"),n=a.n(o);n.a},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},a4bf:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container common-css"},[a("div",{staticClass:"page-main"},[a("div",{staticClass:"page-menu"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,size:"small"}},[a("div",{staticClass:"menu-left"},[a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入查询关键字"},model:{value:e.formInline.search,callback:function(t){e.$set(e.formInline,"search",t)},expression:"formInline.search"}})],1),a("el-form-item",{attrs:{label:"查询类别"}},[a("el-select",{attrs:{placeholder:"查询类别"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},e._l(e.menuOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.findTable}},[e._v("查询")])],1)],1),a("div",{staticClass:"menu-right"},[a("el-form-item",{staticClass:"menu-btn"},[1==e.authInfo.remove?a("el-button",{attrs:{type:"danger",icon:"el-icon-remove",size:"small"},on:{click:e.deleteTable}},[e._v("删除")]):e._e(),1==e.authInfo.inser?a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus",size:"small"},on:{click:e.addTable}},[e._v("新增")]):e._e(),1==e.authInfo.inser?a("el-button",{attrs:{type:"warning",icon:"el-icon-upload",size:"small"},on:{click:function(t){return e.showTableVisible()}}},[e._v("导入")]):e._e(),a("el-button",{attrs:{type:"success",icon:"el-icon-download",size:"small"},on:{click:e.exportTable}},[e._v("导出")])],1)],1)])],1),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","header-cell-style":{background:"rgb(160,207,255)",color:"#fff"}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"prodcode",label:"产品编码"}}),a("el-table-column",{attrs:{prop:"prodname",label:"产品名称"}}),a("el-table-column",{attrs:{prop:"prodbidcode",label:"推荐类型编码"}}),a("el-table-column",{attrs:{prop:"prodbidname",label:"推荐类型名称"}}),a("el-table-column",{attrs:{prop:"prodsmallcode",label:"产品小类编码"}}),a("el-table-column",{attrs:{prop:"prodsmallname",label:"产品小类名称"}}),a("el-table-column",{attrs:{prop:"note",label:"备注"}}),a("el-table-column",{attrs:{prop:"operationuser",label:"操作人"}}),a("el-table-column",{attrs:{prop:"operationtime",label:"操作时间","min-width":"110"}}),1==e.authInfo.updat?a("el-table-column",{attrs:{label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])]}}],null,!1,2788234419)}):e._e()],1),a("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"current-page":e.queryData.pageNo,"page-size":e.queryData.pageSize,total:e.queryData.total,"page-sizes":[10,20,30,50,70,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){return e.$set(e.queryData,"pageNo",t)},"update:current-page":function(t){return e.$set(e.queryData,"pageNo",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("el-dialog",{staticClass:"export-dialog",attrs:{title:"导入框",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("div",{staticClass:"dialog-top"},[a("div",{staticClass:"dialog-left"},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"#",limit:1,"http-request":e.httpRequest}},[a("el-button",{attrs:{type:"warning",icon:"el-icon-upload",size:"small"}},[e._v("选择文件")])],1),a("el-button",{attrs:{type:"primary",size:"small",disabled:!e.checkPass},nativeOn:{click:function(t){return e.importTable(t)}}},[e._v("确定")])],1),a("div",{staticClass:"dialog-right"},[a("el-button",{attrs:{type:"success",icon:"el-icon-download",size:"small"},nativeOn:{click:function(t){return e.downloadExcel(t)}}},[e._v("模板下载 ")])],1)]),a("div",{staticClass:"dialog-info"},e._l(e.notice,(function(t,o){return a("div",{key:o},[e._v(e._s(t))])})),0)]),a("el-dialog",{staticClass:"export-dialog",attrs:{title:e.modalInfo.title,visible:e.modalInfo.show},on:{"update:visible":function(t){return e.$set(e.modalInfo,"show",t)},close:e.closeDialog}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px",size:"small"}},[a("el-form-item",{staticClass:"menu-btn",attrs:{label:"产品编码",prop:"prodcode"}},[a("el-input",{attrs:{placeholder:"请输入产品编码",disabled:"修改框"==e.modalInfo.title},model:{value:e.ruleForm.prodcode,callback:function(t){e.$set(e.ruleForm,"prodcode",t)},expression:"ruleForm.prodcode"}})],1),a("el-form-item",{staticClass:"menu-btn",attrs:{label:"产品名称",prop:"prodname"}},[a("el-input",{attrs:{placeholder:"请输入产品名称"},model:{value:e.ruleForm.prodname,callback:function(t){e.$set(e.ruleForm,"prodname",t)},expression:"ruleForm.prodname"}})],1),a("el-form-item",{staticClass:"menu-btn",attrs:{label:"推荐类型编码",prop:"prodbidcode"}},[a("el-input",{attrs:{placeholder:"请输入推荐类型编码"},model:{value:e.ruleForm.prodbidcode,callback:function(t){e.$set(e.ruleForm,"prodbidcode",t)},expression:"ruleForm.prodbidcode"}})],1),a("el-form-item",{staticClass:"menu-btn",attrs:{label:"推荐类型名称",prop:"prodbidname"}},[a("el-input",{attrs:{placeholder:"请输入推荐类型名称"},model:{value:e.ruleForm.prodbidname,callback:function(t){e.$set(e.ruleForm,"prodbidname",t)},expression:"ruleForm.prodbidname"}})],1),a("el-form-item",{staticClass:"menu-btn",attrs:{label:"产品小类编码",prop:"prodsmallcode"}},[a("el-input",{attrs:{placeholder:"请输入产品小类编码"},model:{value:e.ruleForm.prodsmallcode,callback:function(t){e.$set(e.ruleForm,"prodsmallcode",t)},expression:"ruleForm.prodsmallcode"}})],1),a("el-form-item",{staticClass:"menu-btn",attrs:{label:"产品小类名称",prop:"prodsmallname"}},[a("el-input",{attrs:{placeholder:"请输入产品小类名称"},model:{value:e.ruleForm.prodsmallname,callback:function(t){e.$set(e.ruleForm,"prodsmallname",t)},expression:"ruleForm.prodsmallname"}})],1),a("el-form-item",{staticClass:"menu-btn",attrs:{label:"备注",prop:"note"}},[a("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.ruleForm.note,callback:function(t){e.$set(e.ruleForm,"note",t)},expression:"ruleForm.note"}})],1)],1),a("div",{staticClass:"btn-group"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("确定")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.modalInfo.show=!1}}},[e._v("取消")])],1)],1)],1)},n=[],l=(a("4160"),a("b64b"),a("ac1f"),a("841c"),a("159b"),a("15fd")),r=a("5530"),i=a("0d5e"),s=(a("bc3a"),a("3f2a")),c=a("c59a"),u=a("2f62"),d={data:function(){return{baseUrl:c["a"].production,modalInfo:{title:"",show:!1},ruleForm:{prodcode:"",prodname:"",prodbidcode:"",prodbidname:"",prodsmallcode:"",prodsmallname:"",note:""},queryData:{total:0,pageSize:10,pageNo:1},dialogTableVisible:!1,notice:[],formInline:{search:"",region:0},menuOptions:[{name:"产品编码",value:0},{name:"产品名称",value:1}],tableData:[],rules:{prodcode:[{required:!0,message:"产品编码不能为空",trigger:"blur"}],prodname:[{required:!0,message:"产品名称不能为空",trigger:"blur"}],prodbidcode:[{required:!0,message:"推荐类型编码不能为空",trigger:"blur"}],prodbidname:[{required:!0,message:"推荐类型名称不能为空",trigger:"blur"}],prodsmallcode:[{required:!0,message:"产品小类编码不能为空",trigger:"blur"}],prodsmallname:[{required:!0,message:"产品小类名称不能为空",trigger:"blur"}]},fileData:"",checkPass:!1,multipleSelection:[]}},computed:Object(r["a"])({},Object(u["b"])(["authInfo"])),created:function(){this.findTable()},methods:{exportTable:function(){var e={pageNo:this.queryData.pageNo,pageSize:this.queryData.pageSize},t=0==this.formInline.region?"prodCode":"prodName",a="prodCode"==t?"prodName":"prodCode";e[t]=this.formInline.search,e[a]="",Object(s["a"])(this.baseUrl+"/s/IopChnnlDTableController/downChnlInfo",e,"IOP渠道维表")},downloadExcel:function(){window.location.href=this.baseUrl+"/iop/IOPChnlImportTemp.xlsx"},closeDialog:function(){this.$refs["ruleForm"].resetFields()},handleSelectionChange:function(e){this.multipleSelection=e},showTableVisible:function(){var e=this;this.dialogTableVisible=!0,this.notice=[],this.checkPass=!1,this.$nextTick((function(){e.$refs["ruleForm"].resetFields()}))},findTable:function(){var e=this,t={pageNo:this.queryData.pageNo,pageSize:this.queryData.pageSize},a=0==this.formInline.region?"prodCode":"prodName",o="prodCode"==a?"prodName":"prodCode";t[a]=this.formInline.search,t[o]="",i["a"].canalFindChnnlInfo({data:t}).then((function(t){e.tableData=t.data.data.records,e.queryData.total=t.data.data.total}))},handleCurrentChange:function(e){this.queryData.pageNo=e,this.findTable()},handleSizeChange:function(e){this.queryData.pageSize=e,this.findTable()},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){e&&("新增框"==t.modalInfo.title?i["a"].canalInsertProdInfo({data:t.ruleForm}).then((function(e){t.modalInfo.show=!1,t.$message.success("新增成功!"),t.findTable()})).catch((function(e){t.$message.error(e.data.msg)})):i["a"].canalUpdateChnlInfo({data:t.ruleForm}).then((function(e){t.modalInfo.show=!1,t.$message.success("修改成功!"),t.findTable()})).catch((function(e){t.$message.error(e.data.msg)})))}))},importTable:function(){var e=this;i["a"].canalExcelFile({data:this.fileData}).then((function(t){var a=[];if("0"==t.data.data.code)e.dialogTableVisible=!1,e.$message.success(t.data.data.msg);else{var o=t.data.data,n=(o.code,o.msg,Object(l["a"])(o,["code","msg"]));Object.keys(n).forEach((function(e){a.push(n[e])})),a.length||a.push(t.data.data.msg),e.notice=a}e.findTable()})).catch((function(t){e.$message.error(t.data.msg)}))},httpRequest:function(e){var t=this;e.file;this.fileData={excelFile:e.file},this.checkPass=!1,i["a"].canalCheckChnnlInfo({data:this.fileData}).then((function(e){t.$refs.upload.clearFiles();var a=[],o=e.data.data,n=o.code,r=Object(l["a"])(o,["code"]);"0"==n?(t.checkPass=!0,a.push(r.msg)):Object.keys(r).forEach((function(e){a.push(r[e])})),t.notice=a})).catch((function(e){}))},addTable:function(){this.modalInfo.show=!0,this.modalInfo.title="新增框"},deleteTable:function(){var e=this;this.multipleSelection.length?this.$confirm("进行删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t="";e.multipleSelection.forEach((function(e,a){t+=0==a?e.prodcode:","+e.prodcode}));var a={prodCode:t};i["a"].canalRemoveChnlByCode({data:a}).then((function(t){e.$message.success("删除成功!"),e.findTable()})).catch((function(t){e.$message.error(t.data.msg)}))})).catch((function(){})):this.$message.warning("请选择要删除的项!")},handleDelete:function(e,t){var a=this;this.$confirm("进行删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e={prodCode:t.prodcode};i["a"].canalRemoveChnlByCode({data:e}).then((function(e){a.$message.success("删除成功!"),a.findTable()})).catch((function(e){a.$message.error(e.data.msg)}))})).catch((function(){}))},handleEdit:function(e,t){t.operationtime,t.operationuser;var a=Object(l["a"])(t,["operationtime","operationuser"]),o=this;o.$nextTick((function(){o.$refs.ruleForm.resetFields()})),this.ruleForm=a,this.modalInfo.show=!0,this.modalInfo.title="修改框"}}},m=d,p=(a("1889"),a("2877")),f=Object(p["a"])(m,o,n,!1,null,null,null);t["default"]=f.exports},dbb4:function(e,t,a){var o=a("23e7"),n=a("83ab"),l=a("56ef"),r=a("fc6a"),i=a("06cf"),s=a("8418");o({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){var t,a,o=r(e),n=i.f,c=l(o),u={},d=0;while(c.length>d)a=n(o,t=c[d++]),void 0!==a&&s(u,t,a);return u}})},e439:function(e,t,a){var o=a("23e7"),n=a("d039"),l=a("fc6a"),r=a("06cf").f,i=a("83ab"),s=n((function(){r(1)})),c=!i||s;o({target:"Object",stat:!0,forced:c,sham:!i},{getOwnPropertyDescriptor:function(e,t){return r(l(e),t)}})}}]);
//# sourceMappingURL=chunk-05880502.aa905cbe.js.map