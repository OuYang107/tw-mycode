(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d68f1388"],{"0d5e":function(t,e,a){"use strict";var r=a("0c6d"),n=a("99b1"),o=a("c59a");function l(t,e){var a=o["a"].production;return e=e||"",console.log(t),Object.assign({},{url:a+e+t.url,data:t.data||"",showLoading:t.showLoading||"",timeOut:t.timeOut||"",loadingTime:t.loadingTime||"",isLoading:t.isLoading||""})}var i=function(t){return t.url=n["a"].loginSso,Object(r["d"])(l(t))},s=function(t){return t.url=n["a"].findUserInfo,Object(r["d"])(l(t))},d=function(t){return t.url=n["a"].findUserInfos,Object(r["d"])(l(t))},c=function(t){return t.url=n["a"].prodExcelFile,Object(r["b"])(l(t))},f=function(t){return t.url=n["a"].prodFindProdInfo,Object(r["d"])(l(t))},u=function(t){return t.url=n["a"].prodUpdateProdInfo,Object(r["d"])(l(t))},p=function(t){return t.url=n["a"].prodInsertProdInfo,Object(r["d"])(l(t))},m=function(t){return t.url=n["a"].canalExcelFile,Object(r["b"])(l(t))},b=function(t){return t.url=n["a"].canalFindChnnlInfo,Object(r["d"])(l(t))},h=function(t){return t.url=n["a"].canalUpdateChnlInfo,Object(r["d"])(l(t))},v=function(t){return t.url=n["a"].canalInsertProdInfo,Object(r["d"])(l(t))},g=function(t){return t.url=n["a"].canalCheckChnnlInfo,Object(r["b"])(l(t))},w=function(t){return t.url=n["a"].canalRemoveChnlByCode,Object(r["d"])(l(t))},I=function(t){return t.url=n["a"].prodCheckProdInfo,Object(r["b"])(l(t))},S=function(t){return t.url=n["a"].prodRemoveProdByCode,Object(r["d"])(l(t))},x=function(t){return t.url=n["a"].findMenuInfo,Object(r["d"])(l(t))},y=function(t){return t.url=n["a"].findProdInfo,Object(r["d"])(l(t))},k=function(t){return t.url=n["a"].updateProdInfo,Object(r["d"])(l(t))},C=function(t){return t.url=n["a"].findCBdiIntfInfo,Object(r["d"])(l(t))},j=function(t){return t.url=n["a"].findSchedulingReloadInfo,Object(r["d"])(l(t))},O=function(t){return t.url=n["a"].updateSchedulingReloadInfo,Object(r["d"])(l(t))},T=function(t){return t.url=n["a"].findActivemonitorHelpInfo,Object(r["d"])(l(t))},P=function(t){return t.url=n["a"].findActivemonitorQuestionInfo,Object(r["d"])(l(t))},D=function(t){return t.url=n["a"].getSummaryData,Object(r["d"])(l(t))},$=function(t){return t.url=n["a"].getDetailData,Object(r["d"])(l(t))},z=function(t){return t.url=n["a"].getTypes,Object(r["d"])(l(t))};e["a"]={getTypes:z,getDetailData:$,getSummaryData:D,loginSso:i,findUserInfos:d,findUserInfo:s,prodExcelFile:c,prodFindProdInfo:f,prodUpdateProdInfo:u,prodInsertProdInfo:p,prodCheckProdInfo:I,canalExcelFile:m,canalFindChnnlInfo:b,canalUpdateChnlInfo:h,canalInsertProdInfo:v,canalCheckChnnlInfo:g,canalRemoveChnlByCode:w,prodRemoveProdByCode:S,findCBdiIntfInfo:C,findMenuInfo:x,findProdInfo:y,updateProdInfo:k,findSchedulingReloadInfo:j,updateSchedulingReloadInfo:O,findActivemonitorHelpInfo:T,findActivemonitorQuestionInfo:P}},"3cfb":function(t,e,a){"use strict";var r=a("5b44"),n=a.n(r);n.a},"3f2a":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var r=a("bc3a"),n=a.n(r),o=a("4360"),l=a("5c96");function i(t,e,a){n()({method:"post",url:t,headers:{"Content-Type":"application/json;charset=UTF-8",token:o["a"].state.token},data:e}).then((function(t){l["Message"].success(t.data.msg)})).catch((function(t){l["Message"].error(t.data.msg)}))}},"5b44":function(t,e,a){},b057:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"multipleTable",staticClass:"page-container",staticStyle:{background:"#f3f3f4"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticStyle:{background:"#fff",height:"700px",padding:"20px 10px","box-sizing":"border-box","border-radius":"8px"}},[a("el-tree",{attrs:{accordion:"",data:t.treeData,props:t.defaultProps},on:{"node-click":t.handleNodeClick}})],1)]),a("el-col",{attrs:{span:20}},[a("div",{staticStyle:{background:"#fff",padding:"20px","box-sizing":"border-box","border-radius":"8px",height:"700px"}},[a("transition",{attrs:{name:"el-fade-in-linear"}},[t.showHome?a("div",[a("div",{staticClass:"flex-jus-bet"},[a("div",[a("div",{staticStyle:{"padding-left":"10px","border-left":"5px solid #409eff"}},[t._v("销售品列表")])]),a("div",{staticStyle:{display:"flex","border-radius":"8px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"请输入产品名称或产品编码"},model:{value:t.params.name,callback:function(e){t.$set(t.params,"name",e)},expression:"params.name"}}),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.getTableList(1)}}},[t._v("搜索")])],1)]),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{"header-cell-style":{background:"#eff3f8",color:"#333"},data:t.tableData}},[t._e(),a("el-table-column",{attrs:{prop:"ids",label:"编码","min-width":"80","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"80","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"rsrvStr1",label:"办理口径","min-width":"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"rsrvStr2",label:"办理口径说明","min-width":"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"rsrvStr3",label:"长链接","min-width":"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"rsrvStr4",label:"短链接","min-width":"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"rsrvStr5",label:"最后修改人","min-width":"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"edit",on:{click:function(a){return t.toEdit(e.$index)}}},[a("div",{staticClass:"el-icon-edit"})])]}}],null,!1,1335994634)})],1),a("div",{staticStyle:{"margin-top":"20px","text-align":"center"}},[a("el-pagination",{attrs:{"current-page":t.params.pageNo,"page-size":t.params.pageSize,layout:"total, prev, pager, next",total:t.params.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.params,"pageNo",e)},"update:current-page":function(e){return t.$set(t.params,"pageNo",e)}}})],1)],1):t._e()]),a("transition",{attrs:{name:"el-fade-in-linear"}},[t.showDetail?a("div",[a("el-button",{attrs:{icon:"el-icon-back"},on:{click:t.detailToEdit}}),a("div",{staticClass:"flex-jus-bet",staticStyle:{"margin-top":"20px"}},[a("div",[a("div",{staticStyle:{"padding-left":"10px","border-left":"5px solid #409eff"}},[t._v("销售品列表")])]),a("div",{staticStyle:{display:"flex","border-radius":"8px"}},[a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"}},[t._v("确认选择")])],1)]),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{"header-cell-style":{background:"#eff3f8",color:"#333"},data:t.tableData}},[a("el-table-column",{attrs:{type:"selection","min-width":"55"}}),a("el-table-column",{attrs:{prop:"date",label:"编码","min-width":"80","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"80","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"address",label:"状态","min-width":"60","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"address",label:"生效时间","min-width":"120","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"address",label:"失效时间","min-width":"120","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"address",label:"目录","min-width":"180","show-overflow-tooltip":""}})],1)],1):t._e()]),a("transition",{attrs:{name:"el-fade-in-linear"}},[t.showEdit?a("div",[a("div",[a("el-button",{attrs:{icon:"el-icon-back"},on:{click:t.editToHome}})],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("div",{staticStyle:{padding:"10px",background:"#f0f0f0","font-weight":"600"}},[t._v("编辑")])]),a("el-form",{ref:"form",staticClass:"cs-el-form",staticStyle:{"margin-top":"20px"},attrs:{model:t.detailInfo,"label-width":"100px"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"编码"}},[a("el-input",{attrs:{size:"small",disabled:""},model:{value:t.detailInfo.ids,callback:function(e){t.$set(t.detailInfo,"ids",e)},expression:"detailInfo.ids"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{size:"small",disabled:""},model:{value:t.detailInfo.name,callback:function(e){t.$set(t.detailInfo,"name",e)},expression:"detailInfo.name"}})],1)],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"办理口径"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"可输入多个口径,最多输入2000个字符,格式为xxx,xxx",placement:"top"}},[a("el-input",{staticStyle:{position:"relative"},attrs:{maxlength:"2000",size:"small",type:"textarea",rows:5,"show-word-limit":""},model:{value:t.detailInfo.rsrvStr1,callback:function(e){t.$set(t.detailInfo,"rsrvStr1",e)},expression:"detailInfo.rsrvStr1"}})],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"办理口径说明"}},[a("el-input",{attrs:{size:"small",type:"textarea",rows:5},model:{value:t.detailInfo.rsrvStr2,callback:function(e){t.$set(t.detailInfo,"rsrvStr2",e)},expression:"detailInfo.rsrvStr2"}})],1)],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"关联长链接"}},[a("el-input",{attrs:{size:"small"},model:{value:t.detailInfo.rsrvStr3,callback:function(e){t.$set(t.detailInfo,"rsrvStr3",e)},expression:"detailInfo.rsrvStr3"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"关联短链接"}},[a("el-input",{attrs:{size:"small"},model:{value:t.detailInfo.rsrvStr4,callback:function(e){t.$set(t.detailInfo,"rsrvStr4",e)},expression:"detailInfo.rsrvStr4"}})],1)],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"酬金核发大类"}},[a("el-input",{attrs:{size:"small"},model:{value:t.detailInfo.rsrvStr6,callback:function(e){t.$set(t.detailInfo,"rsrvStr6",e)},expression:"detailInfo.rsrvStr6"}})],1)],1)],1)],1),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.update}},[t._v("修改")])],1)],1):t._e()])],1)])],1),a("div")],1)},n=[],o=(a("b0c0"),a("ac1f"),a("1276"),a("0d5e")),l=(a("bc3a"),a("3f2a"),a("c59a"),{data:function(){return{showHome:!0,showEdit:!1,showDetail:!1,form:{name:""},params:{id:"",name:"",pageNo:0,pageSize:10,total:0},detailInfo:{},treeData:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]}],defaultProps:{children:"children",label:"name"},tableData:[]}},computed:{},created:function(){},mounted:function(){this.getLeftList(),this.getTableList()},methods:{getLeftList:function(){var t=this;o["a"].findMenuInfo({}).then((function(e){t.treeData=e.data.data}))},getTableList:function(t){var e=this;t&&(this.params.pageNo=t),o["a"].findProdInfo({data:this.params}).then((function(t){e.tableData=t.data.data.records,e.params.total=t.data.data.total}))},handleCurrentChange:function(t){this.params.pageNo=t,this.getTableList()},handleNodeClick:function(t){this.params.name="",this.params.id=t.id,this.getTableList()},toEdit:function(t){this.detailInfo=this.tableData[t],this.showHome=!1,this.showEdit=!0,this.$refs.multipleTable.scrollTop=0},editToHome:function(){this.showHome=!0,this.showEdit=!1},toDetail:function(){this.showEdit=!1,this.showDetail=!0},update:function(){var t=this,e=/^\d+(\.\d+)?$/,a=this.detailInfo.rsrvStr1.split(/[,，]/);console.log(a);for(var r=0;r<a.length;r++)if(8!==a[r].length||!e.test(a[r]))return this.$message.error("仅支持8位的优惠编码或平台业务编码"),!1;var n={id:this.detailInfo.ids,rsrvStr1:this.detailInfo.rsrvStr1,rsrvStr2:this.detailInfo.rsrvStr2,rsrvStr3:this.detailInfo.rsrvStr3,rsrvStr4:this.detailInfo.rsrvStr4,rsrvStr6:this.detailInfo.rsrvStr6};o["a"].updateProdInfo({data:n}).then((function(e){"0"===e.data.code&&(t.$message.success("修改成功"),t.editToHome(),t.$refs.multipleTable.scrollTop=0,t.getTableList())}))},detailToEdit:function(){this.showEdit=!0,this.showDetail=!1}}}),i=l,s=(a("3cfb"),a("2877")),d=Object(s["a"])(i,r,n,!1,null,"2d2ee75c",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-d68f1388.ff80151b.js.map