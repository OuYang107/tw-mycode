(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5d39dd2"],{"0f58":function(t,e,l){},"25b2":function(t,e,l){"use strict";var o=l("0f58"),a=l.n(o);a.a},"7b9f":function(t,e,l){"use strict";l.r(e);var o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"box"},[l("div",{staticClass:"content"},[l("el-row",[l("el-col",{attrs:{span:3}},[l("div",{staticClass:"grid-content"},[t._v(" 年份： "),l("el-select",{staticStyle:{width:"100px"},attrs:{size:"mini ",placeholder:"选择年"},on:{change:t.handleChangetype},model:{value:t.searchData.statisYear,callback:function(e){t.$set(t.searchData,"statisYear",e)},expression:"searchData.statisYear"}},t._l(t.optiontype,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),l("el-col",{attrs:{span:3}},[l("div",{staticClass:"grid-content"},[t._v(" 期数： "),l("el-select",{staticStyle:{width:"90px"},attrs:{size:"mini ",placeholder:"请选择"},on:{change:t.handleChange},model:{value:t.searchData.cycNum,callback:function(e){t.$set(t.searchData,"cycNum",e)},expression:"searchData.cycNum"}},t._l(t.timeoption,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),l("el-col",{attrs:{span:5}}),l("el-col",{attrs:{span:4}}),l("el-col",{attrs:{span:5}},[l("div",{staticClass:"grid-content a"},[l("el-row",[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.query}},[t._v("查询")]),l("el-button",{attrs:{size:"mini"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("导入")])],1),l("el-col",{attrs:{span:3}})],1)])],1)],1),l("div",{staticClass:"table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,align:"center",border:"",height:"370","tooltip-effect":"light","header-cell-style":t.rowClass,"cell-style":t.cellStyle}},[l("el-table-column",{attrs:{prop:"sn",label:"序号","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"contctNo",label:"拜访人联系电话","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"predCityName",label:"地市","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q1Question",label:"Q1 整体感知","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q2Question",label:"Q2 方案设计","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q211Question",label:"Q2.1.1 您觉得专线产品的方案设计有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q212Question",label:"Q2.1.2 您觉得专线产品的方案设计有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q213Question",label:"Q2.1.3 您觉得专线产品的方案设计有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q214Question",label:"Q2.1.4 您觉得专线产品的方案设计有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q215Question",label:"Q2.1.5 您觉得专线产品的方案设计有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q215vQuestion",label:"Q2.1.5V 您觉得专线产品的方案设计有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q2198Question",label:"Q2.1.98 您觉得专线产品的方案设计有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q2199Question",label:"Q2.1.99 您觉得专线产品的方案设计有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q3Question",label:"Q3 产品开通/变更","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q4Question",label:"Q4 施工专业性（产品交付）","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q5Question",label:"Q5 施工人员服务（产品交付）","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q6Question",label:"Q6 上网质量","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q611Question",label:"Q6.1.1  您觉得专线产品的网络质量有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q612Question",label:"Q6.1.2  您觉得专线产品的网络质量有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q613Question",label:"Q6.1.3  您觉得专线产品的网络质量有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q614Question",label:"Q6.1.4  您觉得专线产品的网络质量有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q615Question",label:"Q6.1.5  您觉得专线产品的网络质量有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q615vQuestion",label:"Q6.1.5V  您觉得专线产品的网络质量有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q6198Question",label:"Q6.1.98  您觉得专线产品的网络质量有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q6199Question",label:"Q6.1.99  您觉得专线产品的网络质量有哪些地方需要改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q71Question",label:"Q7.1  请问您是否就专线产品向中国移动提出过报修或投诉？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q7Question",label:"Q7 故障处理","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q721Question",label:"Q7.2.1 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q722Question",label:"Q7.2.2 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q723Question",label:"Q7.2.3 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q724Question",label:"Q7.2.4 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q725Question",label:"Q7.2.5 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q726Question",label:"Q7.2.6 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"",label:"Q7.2.7 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q727vQuestion",label:"Q7.2.7V 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q7298Question",label:"Q7.2.98 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？  ","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"q7299Question",label:"Q7.2.99 您认为专线产品的故障或投诉处理服务有哪些地方可以改进？","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"commitDate",label:"提交时间","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"contctName",label:"联系人姓名","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"isValid",label:"拜访人是否有效","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"changeContctName",label:"变更后联系人","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"vistorDate",label:"上门拜访日期","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"vistorCompany",label:"客户单位名称","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"predCntyName",label:"所属区县","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"isSatis",label:"是否10分满意","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"questionBusiType",label:"存在问题业务分类","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"questionDesc",label:"问题详情","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"isPhoto",label:"现场拍照","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"vistorRecord",label:"拜访记录反馈表","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"recordRsrv1",label:"记录1","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"recordRsrv2",label:"记录2","show-overflow-tooltip":"",width:"105",align:"center"}}),l("el-table-column",{attrs:{prop:"recordRsrv3",label:"记录3","show-overflow-tooltip":"",width:"105",align:"center"}})],1),l("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"current-page":t.searchData.page,"page-size":t.searchData.limit,total:t.searchData.total,"page-sizes":[1,5,10,30],layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(e){return t.$set(t.searchData,"page",e)},"update:current-page":function(e){return t.$set(t.searchData,"page",e)},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),l("div",{staticClass:"dialog"},[l("el-dialog",{attrs:{visible:t.dialogVisible,"before-close":t.handleDialogClose,width:"70%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[l("div",{staticClass:"grid-content",staticStyle:{display:"inline-block"}},[t._v(" 年份： "),l("el-select",{staticStyle:{width:"100px"},attrs:{size:"mini ",placeholder:"选择年"},on:{change:t.handleChangetype},model:{value:t.searchData.statisYear,callback:function(e){t.$set(t.searchData,"statisYear",e)},expression:"searchData.statisYear"}},t._l(t.optiontype,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),l("div",{staticClass:"grid-content",staticStyle:{display:"inline-block"}},[t._v(" 期数： "),l("el-select",{staticStyle:{width:"90px"},attrs:{size:"mini",placeholder:"请选择"},on:{change:t.handleChange},model:{value:t.searchData.cycNum,callback:function(e){t.$set(t.searchData,"cycNum",e)},expression:"searchData.cycNum"}},t._l(t.timeoption,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),l("div",{staticStyle:{"text-align":"right"}},[l("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.getDownload}},[t._v("模板下载")])],1),l("el-upload",{ref:"upfiles",staticClass:"upload-demo",attrs:{action:"#","http-request":t.uploadFiles,"on-change":t.setChange,multiple:"",limit:1e4,"file-list":t.fileList}},[l("el-button",{staticStyle:{"text-align":"left"},attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),l("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传Excel文件，且不超过500kb "),l("span",{staticStyle:{color:"#FF0000"},attrs:{slot:"tip"},slot:"tip"},[t._v("注：每次导入表格都会对本周期进行全覆盖。")])])],1),l("div",{staticClass:"listtpey"},t._l(t.content,(function(e,o){return l("p",{key:o},[t._v(t._s(e))])})),0),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.clearFile()}}},[t._v("取 消")]),l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.confirm}},[t._v("确 定")])],1)],1)],1)])},a=[],i=(l("4160"),l("159b"),l("c59a")),n=(l("99b1"),l("b6220")),s={data:function(){return{dialogVisible:!1,tableData:[],searchData:{cycNum:"Q1",statisYear:2021,pageNo:1,pageSize:10,total:10},input:"",search:"",arr:"",optionreason:[],cityCode:"",timeoption:[{label:"Q1",value:"Q1"},{label:"Q2",value:"Q2"},{label:"Q3",value:"Q3"},{label:"Q4",value:"Q4"}],optiontype:[{label:"2021",value:"2021"},{label:"2020",value:"2020"}],options:[{label:"长沙市",value:"731",children:[]},{label:"岳阳市",value:"730",children:[]},{label:"益阳市",value:"737",children:[]},{label:"常德市",value:"736",children:[]},{label:"张家界市",value:"744",children:[]},{label:"自治州",value:"743",children:[]},{label:"怀化市",value:"745",children:[]},{label:"娄底市",value:"738",children:[]},{label:"湘潭市",value:"732",children:[]},{label:"株洲市",value:"733",children:[]},{label:"邵阳市",value:"739",children:[]},{label:"衡阳市",value:"734",children:[]},{label:"永州市",value:"746",children:[]},{label:"郴州市",value:"735",children:[]}],cntyArrOptins:[],options1:[],files:{cycNum:"Q1",files:{},statisYear:2021,token:"12"},fileList:[],content:""}},mounted:function(){this.query()},methods:{query:function(){var t=this;n["a"].findgroupSRLSatisInfo({data:this.searchData}).then((function(e){t.searchData.total=e.data.data.total,t.tableData=e.data.data.records})).catch((function(t){console.log(t)}))},handleChange:function(t){},resetting:function(){this.dialogVisible=!0},setChange:function(t,e){this.fileList=e},uploadFiles:function(t){},handleDialogClose:function(){this.dialogVisible=!1,this.$refs["upfiles"].clearFiles()},getDownload:function(){var t=i["a"].production;window.open(t+"/dist/groupSrlSatis.xlsx")},confirm:function(){var t=this;if(0!=this.fileList.length){var e=new FormData,l=[];this.fileList.forEach((function(t){e.append("file",t.raw),l.push(t.raw)})),e.append("cycNum",this.files.cycNum),e.append("statisYear",this.files.statisYear);var o=[];n["a"].groupSRLSatisImport({data:e}).then((function(e){var l=e.data.data;1==l.code&&(o.push(l.msg),t.content=o),0==l.code&&o.unshift(l.msg),t.content=o})).catch((function(t){console.log(t)}))}else this.$message.warning("请上传文件！")},clearFile:function(){this.dialogVisible=!1,this.$refs["upfiles"].clearFiles()},noresetting:function(){},handleChangetype:function(t,e){},rowClass:function(){},cellStyle:function(){},handleCurrentChange:function(t){console.log(t),this.searchData.pageNo=t,this.query()},handleSizeChange:function(t){console.log(t),this.searchData.pageSize=t,this.query()}}},r=s,c=(l("25b2"),l("2877")),p=Object(c["a"])(r,o,a,!1,null,"1e5eec9e",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-f5d39dd2.453ce0f8.js.map