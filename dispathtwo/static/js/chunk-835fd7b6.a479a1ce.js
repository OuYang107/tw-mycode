(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-835fd7b6"],{"0d5e":function(t,e,a){"use strict";var l=a("0c6d"),n=a("99b1"),s=a("c59a");function r(t){var e=s["a"].production;return Object.assign({},{url:e+t.url,data:t.data,showLoading:t.showLoading})}var o=function(t){return t.url=n["a"].loginSso,Object(l["b"])(r(t))},u=function(t){return t.url=n["a"].findUserInfo,Object(l["b"])(r(t))},i=function(t){return t.url=n["a"].findUserInfos,Object(l["b"])(r(t))},c=function(t){return t.url=n["a"].prodExcelFile,Object(l["a"])(r(t))},d=function(t){return t.url=n["a"].prodFindProdInfo,Object(l["b"])(r(t))},f=function(t){return t.url=n["a"].prodUpdateProdInfo,Object(l["b"])(r(t))},p=function(t){return t.url=n["a"].prodInsertProdInfo,Object(l["b"])(r(t))},b=function(t){return t.url=n["a"].canalExcelFile,Object(l["a"])(r(t))},m=function(t){return t.url=n["a"].canalFindChnnlInfo,Object(l["b"])(r(t))},y=function(t){return t.url=n["a"].canalUpdateChnlInfo,Object(l["b"])(r(t))},h=function(t){return t.url=n["a"].canalInsertProdInfo,Object(l["b"])(r(t))},v=function(t){return t.url=n["a"].canalCheckChnnlInfo,Object(l["a"])(r(t))},g=function(t){return t.url=n["a"].canalRemoveChnlByCode,Object(l["b"])(r(t))},D=function(t){return t.url=n["a"].prodCheckProdInfo,Object(l["a"])(r(t))},_=function(t){return t.url=n["a"].prodRemoveProdByCode,Object(l["b"])(r(t))},w=function(t){return t.url=n["a"].findMenuInfo,Object(l["b"])(r(t))},I=function(t){return t.url=n["a"].findProdInfo,Object(l["b"])(r(t))},q=function(t){return t.url=n["a"].updateProdInfo,Object(l["b"])(r(t))},k=function(t){return t.url=n["a"].findCBdiIntfInfo,Object(l["b"])(r(t))},S=function(t){return t.url=n["a"].findSchedulingReloadInfo,Object(l["b"])(r(t))},C=function(t){return t.url=n["a"].updateSchedulingReloadInfo,Object(l["b"])(r(t))},x=function(t){return t.url=n["a"].findActivemonitorHelpInfo,Object(l["b"])(r(t))},j=function(t){return t.url=n["a"].findActivemonitorQuestionInfo,Object(l["b"])(r(t))};e["a"]={loginSso:o,findUserInfos:i,findUserInfo:u,prodExcelFile:c,prodFindProdInfo:d,prodUpdateProdInfo:f,prodInsertProdInfo:p,prodCheckProdInfo:D,canalExcelFile:b,canalFindChnnlInfo:m,canalUpdateChnlInfo:y,canalInsertProdInfo:h,canalCheckChnnlInfo:v,canalRemoveChnlByCode:g,prodRemoveProdByCode:_,findCBdiIntfInfo:k,findMenuInfo:w,findProdInfo:I,updateProdInfo:q,findSchedulingReloadInfo:S,updateSchedulingReloadInfo:C,findActivemonitorHelpInfo:x,findActivemonitorQuestionInfo:j}},"3ed1":function(t,e,a){"use strict";var l=a("bdca"),n=a.n(l);n.a},"4d57":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container common-css"},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"0"}},[t._v("调度协同")]),a("el-menu-item",{attrs:{index:"1"}},[t._v("华为发起")]),a("el-menu-item",{attrs:{index:"2"}},[t._v("对端发起")])],1),a("div",{staticClass:"block Mt-20"},[a("el-carousel",{ref:"carousel",attrs:{height:"1200px","indicator-position":"none",autoplay:!1,arrow:"never","initial-index":0}},[a("el-carousel-item",[a("div",{staticClass:"page-main"},[a("div",{staticClass:"page-menu"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,size:"small"}},[a("div",{staticClass:"menu-left"},[a("el-form-item",{attrs:{label:"时间段"}},[a("el-date-picker",{attrs:{type:"datetimerange",value:"yyyyMMddHHmmss","value-format":"yyyyMMddHHmmss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small",clearable:!1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),a("el-form-item",{attrs:{label:"接口"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{size:"small"},model:{value:t.queryData.intfCode,callback:function(e){t.$set(t.queryData,"intfCode",e)},expression:"queryData.intfCode"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:t.queryData.status,callback:function(e){t.$set(t.queryData,"status",e)},expression:"queryData.status"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.findTable(1)}}},[t._v("查询")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.reset}},[t._v("重置")])],1)],1)])],1),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,border:"","header-cell-style":{background:"rgb(160,207,255)",color:"#fff"}}},[a("el-table-column",{attrs:{label:"接口时间","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:-1==e.row.status?"red":""},[t._v(t._s(e.row.intfDate))])]}}])}),a("el-table-column",{attrs:{label:"接口编码"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:-1==e.row.status?"red":""},[t._v(t._s(e.row.intfCode))])]}}])}),a("el-table-column",{attrs:{label:"调度ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:-1==e.row.status?"red":""},[t._v(t._s(e.row.flowId))])]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:-1==e.row.status?"red":""},[t._v(t._s(e.row.status))])]}}])}),a("el-table-column",{attrs:{label:"响应时间(ms)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:-1==e.row.status?"red":""},[t._v(t._s(e.row.duration))])]}}])}),a("el-table-column",{attrs:{label:"请求消息"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-collapse",{class:-1==e.row.status?"red":""},[a("el-collapse-item",{attrs:{title:"展开",name:"1"}},[a("div",{class:-1==e.row.status?"red":""},[t._v(t._s(e.row.requestMsg))])])],1)]}}])}),a("el-table-column",{attrs:{label:"响应消息"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-collapse",{class:-1==e.row.status?"red":""},[a("el-collapse-item",{attrs:{title:"展开",name:"1"}},[a("div",{class:-1==e.row.status?"red":""},[t._v(t._s(e.row.responseMsg))])])],1)]}}])}),a("el-table-column",{attrs:{label:"响应结果码"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:-1==e.row.status?"red":""},[t._v(t._s(e.row.responseCode))])]}}])}),a("el-table-column",{attrs:{label:"响应结果"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:-1==e.row.status?"red":""},[t._v(t._s(e.row.responseDesc))])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"current-page":t.queryData.pageNo,"page-size":t.queryData.pageSize,total:t.queryData.total,"page-sizes":[10,20,30,50,70,100],layout:"total, prev, pager, next, jumper"},on:{"update:currentPage":function(e){return t.$set(t.queryData,"pageNo",e)},"update:current-page":function(e){return t.$set(t.queryData,"pageNo",e)},"current-change":t.handleCurrentChange}})],1)]),a("el-carousel-item",[a("div",{staticClass:"page-main"},[a("div",{staticClass:"page-menu"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,size:"small"}},[a("div",{staticClass:"menu-left"},[a("el-form-item",{attrs:{label:"时间段"}},[a("el-date-picker",{attrs:{type:"datetimerange",value:"yyyyMMddHHmmss","value-format":"yyyyMMddHHmmss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small",clearable:!1},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),a("el-form-item",{attrs:{label:"调度ID"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{size:"small"},model:{value:t.queryData2.flowId,callback:function(e){t.$set(t.queryData2,"flowId",e)},expression:"queryData2.flowId"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:t.queryData2.status,callback:function(e){t.$set(t.queryData2,"status",e)},expression:"queryData2.status"}},t._l(t.options2,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.findTable2(1)}}},[t._v("查询")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.reset2}},[t._v("重置")])],1)],1)])],1),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData2,border:"","header-cell-style":{background:"rgb(160,207,255)",color:"#fff"}}},[a("el-table-column",{attrs:{label:"任务ID","min-width":"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.jobId))])]}}])}),a("el-table-column",{attrs:{label:"时间","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.infoTime))])]}}])}),a("el-table-column",{attrs:{label:"调度ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.flowId))])]}}])}),a("el-table-column",{attrs:{label:"重跑周期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.dataTime))])]}}])}),a("el-table-column",{attrs:{label:"重跑原因"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.content))])]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.status))])]}}])}),a("el-table-column",{attrs:{label:"对端处理结果"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.dealWithStatus))])]}}])}),a("el-table-column",{attrs:{label:"对端处理备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.note))])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"30px","text-align":"center"},attrs:{"current-page":t.queryData2.pageNo,"page-size":t.queryData2.pageSize,total:t.queryData2.total,"page-sizes":[10,20,30,50,70,100],layout:"total, prev, pager, next, jumper"},on:{"update:currentPage":function(e){return t.$set(t.queryData2,"pageNo",e)},"update:current-page":function(e){return t.$set(t.queryData2,"pageNo",e)},"current-change":t.handleCurrentChange2}})],1)]),a("el-carousel-item",[a("div",{staticClass:"page-main"},[a("div",{staticClass:"page-menu"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,size:"small"}},[a("div",{staticClass:"menu-left"},[a("el-form-item",{attrs:{label:"时间段"}},[a("el-date-picker",{attrs:{type:"datetimerange",value:"yyyyMMddHHmmss","value-format":"yyyyMMddHHmmss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small",clearable:!1},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1),a("el-form-item",{attrs:{label:"调度ID"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{size:"small"},model:{value:t.queryData3.flowId,callback:function(e){t.$set(t.queryData3,"flowId",e)},expression:"queryData3.flowId"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:t.queryData3.status,callback:function(e){t.$set(t.queryData3,"status",e)},expression:"queryData3.status"}},t._l(t.options3,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.findTable3(1)}}},[t._v("查询")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.reset3}},[t._v("重置")])],1)],1)])],1),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData3,border:"","header-cell-style":{background:"rgb(160,207,255)",color:"#fff"}}},[a("el-table-column",{attrs:{label:"任务ID","min-width":"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.jobId))])]}}])}),a("el-table-column",{attrs:{label:"时间","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.infoTime))])]}}])}),a("el-table-column",{attrs:{label:"调度ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.flowId))])]}}])}),a("el-table-column",{attrs:{label:"重跑周期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.dataTime))])]}}])}),a("el-table-column",{attrs:{label:"重跑原因"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.content))])]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.status))])]}}])}),a("el-table-column",{attrs:{label:"处理状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"open"==e.row.status?"red":""},[t._v(t._s(e.row.dealWithStatus))])]}}])}),a("el-table-column",{attrs:{label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.note))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return["open"==e.row.status?a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.openDialog(e.row.jobId)}}},[t._v("处理")]):t._e()]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"30px","text-align":"center"},attrs:{"current-page":t.queryData3.pageNo,"page-size":t.queryData3.pageSize,total:t.queryData3.total,"page-sizes":[10,20,30,50,70,100],layout:"total, prev, pager, next, jumper"},on:{"update:currentPage":function(e){return t.$set(t.queryData3,"pageNo",e)},"update:current-page":function(e){return t.$set(t.queryData3,"pageNo",e)},"current-change":t.handleCurrentChange3}})],1)])],1),a("el-dialog",{attrs:{title:"处理",visible:t.centerDialogVisible,width:"30%"},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"处理结果"}},[a("el-input",{attrs:{type:"textarea",rows:5},model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.editClick}},[t._v("确 定")])],1)],1)],1)],1)},n=[],s=a("0d5e"),r=(a("bc3a"),{data:function(){return{centerDialogVisible:!1,value1:"",value2:"",value3:"",tableData:[],tableData2:[],tableData3:[],queryData:{statisDate:"",endDate:"",intfCode:"",status:"",total:0,pageSize:10,pageNo:1},queryData2:{statisDate:"",endDate:"",flowId:"",status:"",total:0,pageSize:10,pageNo:1,type:2},queryData3:{statisDate:"",endDate:"",flowId:"",status:"",total:0,pageSize:10,pageNo:1,type:1},form:{note:""},jobId:"",activeIndex:"0",options:[{value:"0",label:"0"},{value:"-1",label:"-1"}],options2:[{value:"open",label:"open"},{value:"closed",label:"closed"}],options3:[{value:"open",label:"open"},{value:"closed",label:"closed"}]}},computed:{},mounted:function(){this.findTable()},methods:{findTable:function(t){var e=this;t&&(this.queryData.pageNo=t),this.queryData.statisDate=this.value1[0]?this.value1[0]:"",this.queryData.endDate=this.value1[1]?this.value1[1]:"",s["a"].findCBdiIntfInfo({data:this.queryData}).then((function(t){e.tableData=t.data.data.records,e.queryData.total=t.data.data.total}))},findTable2:function(t){var e=this;t&&(this.queryData2.pageNo=t),this.queryData2.statisDate=this.value2[0]?this.value2[0]:"",this.queryData2.endDate=this.value2[1]?this.value2[1]:"",s["a"].findSchedulingReloadInfo({data:this.queryData2}).then((function(t){e.tableData2=t.data.data.records,e.queryData2.total=t.data.data.total}))},handleSelect:function(t){switch(this.activeIndex=t,this.$refs.carousel.setActiveItem(t),t){case"0":this.findTable();case"1":this.findTable2();break;case"2":this.findTable3();break}},findTable3:function(t){var e=this;t&&(this.queryData3.pageNo=t),this.queryData3.statisDate=this.value3[0]?this.value3[0]:"",this.queryData3.endDate=this.value3[1]?this.value3[1]:"",s["a"].findSchedulingReloadInfo({data:this.queryData3}).then((function(t){e.tableData3=t.data.data.records,e.queryData3.total=t.data.data.total}))},openDialog:function(t){this.centerDialogVisible=!0,this.jobId=t},editClick:function(){var t=this,e={jobId:this.jobId,note:this.form.note};s["a"].updateSchedulingReloadInfo({data:e}).then((function(e){t.centerDialogVisible=!1,t.form.note="","0"===e.data.code?t.$message.success(e.data.msg):t.$message.error(e.data.msg),t.findTable3()}))},handleCurrentChange:function(t){this.queryData.pageNo=t,this.findTable()},reset:function(){this.value1="",this.queryData.statisDate="",this.queryData.endDate="",this.queryData.intfCode="",this.queryData.status="",this.queryData.pageNo1=1},reset2:function(){this.value2="",this.queryData2.statisDate="",this.queryData2.endDate="",this.queryData2.flowId="",this.queryData2.status="",this.queryData2.pageNo1=1},reset3:function(){this.value3="",this.queryData3.statisDate="",this.queryData3.endDate="",this.queryData3.flowId="",this.queryData3.status="",this.queryData3.pageNo1=1},handleCurrentChange2:function(t){this.queryData2.pageNo=t,this.findTable2()},handleCurrentChange3:function(t){this.queryData3.pageNo=t,this.findTable3()}}}),o=r,u=(a("3ed1"),a("2877")),i=Object(u["a"])(o,l,n,!1,null,null,null);e["default"]=i.exports},bdca:function(t,e,a){}}]);
//# sourceMappingURL=chunk-835fd7b6.a479a1ce.js.map