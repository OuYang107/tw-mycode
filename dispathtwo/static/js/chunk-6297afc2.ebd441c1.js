(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6297afc2"],{"034c":function(t,e,a){},"0d5e":function(t,e,a){"use strict";var n=a("0c6d"),i=a("99b1"),o=a("c59a");function l(t){var e=o["a"].production;return Object.assign({},{url:e+t.url,data:t.data,showLoading:t.showLoading})}var r=function(t){return t.url=i["a"].loginSso,Object(n["b"])(l(t))},s=function(t){return t.url=i["a"].findUserInfo,Object(n["b"])(l(t))},c=function(t){return t.url=i["a"].findUserInfos,Object(n["b"])(l(t))},u=function(t){return t.url=i["a"].prodExcelFile,Object(n["a"])(l(t))},d=function(t){return t.url=i["a"].prodFindProdInfo,Object(n["b"])(l(t))},f=function(t){return t.url=i["a"].prodUpdateProdInfo,Object(n["b"])(l(t))},p=function(t){return t.url=i["a"].prodInsertProdInfo,Object(n["b"])(l(t))},m=function(t){return t.url=i["a"].canalExcelFile,Object(n["a"])(l(t))},b=function(t){return t.url=i["a"].canalFindChnnlInfo,Object(n["b"])(l(t))},g=function(t){return t.url=i["a"].canalUpdateChnlInfo,Object(n["b"])(l(t))},h=function(t){return t.url=i["a"].canalInsertProdInfo,Object(n["b"])(l(t))},v=function(t){return t.url=i["a"].canalCheckChnnlInfo,Object(n["a"])(l(t))},y=function(t){return t.url=i["a"].canalRemoveChnlByCode,Object(n["b"])(l(t))},x=function(t){return t.url=i["a"].prodCheckProdInfo,Object(n["a"])(l(t))},I=function(t){return t.url=i["a"].prodRemoveProdByCode,Object(n["b"])(l(t))},C=function(t){return t.url=i["a"].findMenuInfo,Object(n["b"])(l(t))},Q=function(t){return t.url=i["a"].findProdInfo,Object(n["b"])(l(t))},D=function(t){return t.url=i["a"].updateProdInfo,Object(n["b"])(l(t))},k=function(t){return t.url=i["a"].findCBdiIntfInfo,Object(n["b"])(l(t))},w=function(t){return t.url=i["a"].findSchedulingReloadInfo,Object(n["b"])(l(t))},_=function(t){return t.url=i["a"].updateSchedulingReloadInfo,Object(n["b"])(l(t))},$=function(t){return t.url=i["a"].findActivemonitorHelpInfo,Object(n["b"])(l(t))},S=function(t){return t.url=i["a"].findActivemonitorQuestionInfo,Object(n["b"])(l(t))};e["a"]={loginSso:r,findUserInfos:c,findUserInfo:s,prodExcelFile:u,prodFindProdInfo:d,prodUpdateProdInfo:f,prodInsertProdInfo:p,prodCheckProdInfo:x,canalExcelFile:m,canalFindChnnlInfo:b,canalUpdateChnlInfo:g,canalInsertProdInfo:h,canalCheckChnnlInfo:v,canalRemoveChnlByCode:y,prodRemoveProdByCode:I,findCBdiIntfInfo:k,findMenuInfo:C,findProdInfo:Q,updateProdInfo:D,findSchedulingReloadInfo:w,updateSchedulingReloadInfo:_,findActivemonitorHelpInfo:$,findActivemonitorQuestionInfo:S}},"328d":function(t,e,a){"use strict";var n=a("034c"),i=a.n(n);i.a},"5ced":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"turnContent box-start"},[a("div",{staticClass:"leftMenu"},[a("div",{staticClass:"menuItem box-v-center",class:{activeMenu:1===t.activeIndex},on:{click:function(e){return t.goMenu(1)}}},[t._v("帮助")]),a("div",{staticClass:"menuItem box-v-center",class:{activeMenu:2===t.activeIndex},on:{click:function(e){return t.goMenu(2)}}},[t._v("问题与建议")])]),a("div",{staticClass:"rightContent"},[a("div",{staticClass:"W100 H100"},[1===t.activeIndex?a("subpackage",{ref:"subpackage"}):t._e(),2===t.activeIndex?a("faq",{ref:"faq"}):t._e()],1)])])},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"W100 H100",staticStyle:{"overflow-y":"auto"}},[a("div",{staticClass:"box-start filterDiv W100",staticStyle:{"box-sizing":"border-box"}},[a("div",[t._v("文件名")]),a("el-input",{staticStyle:{width:"200px","margin-left":"10px"},attrs:{placeholder:"请输入关键词搜素"},model:{value:t.dataQuery.dataName,callback:function(e){t.$set(t.dataQuery,"dataName",e)},expression:"dataQuery.dataName"}}),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(e){return t.getTableList(1)}}},[t._v("搜索")]),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(e){t.centerDialogVisible=!0}}},[t._v("导入")])],1),a("div",{staticClass:"tableContent Mt-20"},[a("el-table",{staticClass:"orgTable",staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.tableData,"row-key":"id",stripe:""}},[a("el-table-column",{attrs:{prop:"dataName",label:"文件名称","min-width":"200"}}),a("el-table-column",{attrs:{prop:"dataDesc",label:"文件描述","min-width":"150"}}),a("el-table-column",{attrs:{prop:"dataOuth",label:"更新人","min-width":"120"}}),a("el-table-column",{attrs:{prop:"uptime",label:"更新时间","min-width":"150"}}),a("el-table-column",{attrs:{label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"el-icon-download",staticStyle:{"font-size":"25px",color:"#5cb6ff",cursor:"pointer"},on:{click:function(a){return t.downExcel(e.row.url)}}})]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"current-page":t.dataQuery.currentPage,"page-size":t.dataQuery.pageSize,total:t.dataQuery.total,layout:"total, prev, pager, next, sizes, jumper"},on:{"current-change":t.changePage}})],1),a("el-dialog",{attrs:{title:"导入",visible:t.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e},close:t.delData}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",rules:t.rules}},[a("el-form-item",{attrs:{label:"文件名称",prop:"dataName"}},[a("el-input",{model:{value:t.form.dataName,callback:function(e){t.$set(t.form,"dataName",e)},expression:"form.dataName"}})],1),a("el-form-item",{attrs:{label:"文件描述",prop:"dataDesc"}},[a("el-input",{model:{value:t.form.dataDesc,callback:function(e){t.$set(t.form,"dataDesc",e)},expression:"form.dataDesc"}})],1),a("el-form-item",{attrs:{label:"导入文件",prop:"file"}},[a("el-upload",{ref:"uploadDemo",staticClass:"upload-demo",attrs:{action:"#","http-request":t.uploadFile,"on-remove":t.deleteFile,multiple:"",limit:1}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),a("el-form-item",[a("div",{staticClass:"flex-end"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submitInfo}},[t._v("提交")])],1)])],1)],1)],1)},l=[],r=a("99b1"),s=a("0d5e"),c=a("c59a"),u=a("bc3a"),d=a.n(u),f=a("2b0e"),p=a("2f62");f["default"].use(p["a"]);var m=new p["a"].Store({state:{token:""},mutations:{setToken:function(t,e){t.token=e}},actions:{changeToken:function(t,e){t.commit("setToken",e)}}}),b={name:"table1",data:function(){return{centerDialogVisible:!1,tableData:[],dataQuery:{dataName:"",pageNo:1,pageSize:10,total:0},form:{dataName:"",dataDesc:"",file:""},rules:{dataName:[{required:!0,message:"请输入文件名称",trigger:"blur"}],dataDesc:[{required:!0,message:"请输入文件描述",trigger:"blur"}],file:[{required:!0,message:"请上传文件",trigger:"change"}]}}},mounted:function(){this.$httpLoading.show(),this.getTableList()},methods:{getTableList:function(t){var e=this;t&&(this.dataQuery.pageNo=1),s["a"].findActivemonitorHelpInfo({data:this.dataQuery}).then((function(t){e.tableData=t.data.data.records,e.dataQuery.total=t.data.data.total,e.$httpLoading.close()}))},submitInfo:function(){var t=this,e=new FormData,a=this.form;for(var n in a)e.append(n,a[n]);this.$refs["form"].validate((function(a){a&&(t.$httpLoading.show(),d.a.post(c["a"].production+r["a"].importData,e,{headers:{"Content-Type":"multipart/form-data",token:m.state.token}}).then((function(e){"0"===e.data.code?(t.$httpLoading.close(),t.centerDialogVisible=!1,t.$message.success(e.data.msg),t.getTableList(),t.delData()):(t.$httpLoading.close(),t.centerDialogVisible=!1,t.$message.error(e.data.msg),t.delData())})).catch((function(e){t.$httpLoading.close(),t.centerDialogVisible=!1,t.$message.error(e.data.msg),t.delData()})))}))},changePage:function(t){this.dataQuery.pageNo=t,this.getTableList()},uploadFile:function(t){this.form.file=t.file},deleteFile:function(){this.form.file=""},downExcel:function(t){window.open(t)},delData:function(){this.form.dataName="",this.form.dataDesc="",this.form.file="",this.$refs.uploadDemo.clearFiles()}}},g=b,h=(a("328d"),a("2877")),v=Object(h["a"])(g,o,l,!1,null,"aa038fea",null),y=v.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"W100 H100",staticStyle:{"overflow-y":"auto",padding:"20px 40px","box-sizing":"border-box"}},[a("div",{staticClass:"box-start W100",staticStyle:{"box-sizing":"border-box"}},[a("div",[t._v("我来说两句")]),a("el-select",{staticStyle:{"margin-left":"20px"},attrs:{placeholder:"请选择",size:"small"},model:{value:t.dataQuery.dataType,callback:function(e){t.$set(t.dataQuery,"dataType",e)},expression:"dataQuery.dataType"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-input",{staticClass:"Mt-20",attrs:{type:"textarea",maxlength:"500",rows:5,"show-word-limit":""},model:{value:t.dataQuery.dataDesc,callback:function(e){t.$set(t.dataQuery,"dataDesc",e)},expression:"dataQuery.dataDesc"}}),a("div",{staticClass:"flex Mt-20"},[a("el-upload",{ref:"uploadDemo",staticClass:"upload-demo",attrs:{action:"#","http-request":t.uploadFile,"on-remove":t.deleteFile,multiple:"",limit:1}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("文件大小不能超过20M")])],1),a("el-button",{staticStyle:{height:"32px"},attrs:{type:"primary",size:"small"},on:{click:t.submitInfo}},[t._v("提交")])],1),a("div",{staticClass:"title Mt-30"},[t._v("评论列表（"+t._s(t.selectQuery.total)+"）")]),a("div",{staticClass:"box-start W100 Mt-20",staticStyle:{"box-sizing":"border-box"}},[a("span",{staticClass:"demonstration"},[t._v("问题类型")]),a("el-select",{staticClass:"Ml-20",attrs:{placeholder:"请选择",size:"small"},model:{value:t.selectQuery.dataType,callback:function(e){t.$set(t.selectQuery,"dataType",e)},expression:"selectQuery.dataType"}},t._l(t.options2,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("span",{staticClass:"demonstration Ml-20"},[t._v("查询时间")]),a("el-date-picker",{staticClass:"Ml-20",attrs:{type:"date",placeholder:"选择日期"},model:{value:t.selectQuery.uptime,callback:function(e){t.$set(t.selectQuery,"uptime",e)},expression:"selectQuery.uptime"}}),a("el-button",{staticClass:"Ml-20",attrs:{type:"primary"},on:{click:function(e){return t.getTableList(1)}}},[t._v("搜索")])],1),a("div",{staticClass:"flex-custom"},[t._l(t.tableList,(function(e,n){return a("div",{key:n},[a("el-divider"),a("div",[a("span",{staticStyle:{"font-size":"20px","font-weight":"550"}},[t._v(t._s(e.dataOuth))]),a("span",{staticClass:"Ml-10",staticStyle:{color:"#666"}},[t._v(t._s(e.dataType)+" "+t._s(e.uptime))])]),a("div",{staticClass:"Mt-10"},[a("span",{staticStyle:{color:"#666"}},[t._v(t._s(e.dataDesc))])]),a("div",{staticClass:"Mt-10"},[a("span",[t._v("附件：")]),a("span",{staticStyle:{"text-decoration":"underline",cursor:"pointer"},on:{click:function(a){return t.downExcel(e.url)}}},[t._v(t._s(e.dataName))])])],1)})),a("div",{staticClass:"Mt-20"},[a("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"current-page":t.selectQuery.currentPage,"page-size":t.selectQuery.pageSize,total:t.selectQuery.total,layout:"total, prev, pager, next, sizes, jumper"},on:{"current-change":t.changePage}})],1)],2)],1)},I=[],C=(a("b0c0"),{name:"table1",data:function(){return{selectQuery:{uptime:"",dataType:"",pageNo:1,pageSize:10,total:0},dataQuery:{dataName:"",dataType:"",dataDesc:"",file:""},options:[{value:"客户标签操作",label:"客户标签操作"},{value:"客户标签数据",label:"客户标签数据",disabled:!0},{value:"活动配置操作",label:"活动配置操作"},{value:"活动监控数据",label:"活动监控数据"}],options2:[{value:"",label:"全部"},{value:"客户标签操作",label:"客户标签操作"},{value:"客户标签数据",label:"客户标签数据",disabled:!0},{value:"活动配置操作",label:"活动配置操作"},{value:"活动监控数据",label:"活动监控数据"}],tableList:[]}},mounted:function(){this.$httpLoading.show(),this.getTableList()},methods:{getTableList:function(t){var e=this;t&&(this.selectQuery.pageNo=1),s["a"].findActivemonitorQuestionInfo({data:this.selectQuery}).then((function(t){e.tableList=t.data.data.records,e.selectQuery.total=t.data.data.total,e.$httpLoading.close()}))},submitInfo:function(){var t=this,e=new FormData,a=this.dataQuery;for(var n in a)e.append(n,a[n]);this.$httpLoading.show(),d.a.post(c["a"].production+r["a"].importDataQuestion,e,{headers:{"Content-Type":"multipart/form-data",token:m.state.token}}).then((function(e){"0"===e.data.code?(t.$httpLoading.close(),t.$message.success(e.data.msg),t.getTableList(),t.delData()):(t.$httpLoading.close(),t.$message.error(e.data.msg),t.delData())})).catch((function(e){t.$httpLoading.close(),console.log(e,"111111"),t.$message.error(e.data.msg),t.delData()}))},uploadFile:function(t){this.dataQuery.dataName=t.file.name,this.dataQuery.file=t.file},deleteFile:function(){this.form.file=""},changePage:function(t){this.dataQuery.pageNo=t,this.getTableList()},downExcel:function(t){window.open(t)},delData:function(){this.dataQuery.dataName="",this.dataQuery.dataType="",this.dataQuery.dataDesc="",this.dataQuery.file="",this.$refs.uploadDemo.clearFiles()}}}),Q=C,D=(a("bbc7"),Object(h["a"])(Q,x,I,!1,null,"79dceacd",null)),k=D.exports,w={name:"index",components:{subpackage:y,faq:k},data:function(){return{activeIndex:1}},mounted:function(){this.goMenu(1)},methods:{goMenu:function(t){this.activeIndex=t}}},_=w,$=(a("d64f"),Object(h["a"])(_,n,i,!1,null,"0580dabe",null));e["default"]=$.exports},ac62:function(t,e,a){},bbc7:function(t,e,a){"use strict";var n=a("ac62"),i=a.n(n);i.a},d64f:function(t,e,a){"use strict";var n=a("e2a7"),i=a.n(n);i.a},e2a7:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6297afc2.ebd441c1.js.map