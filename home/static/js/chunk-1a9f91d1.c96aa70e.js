(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a9f91d1"],{bd1a:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"content"},[a("el-row",[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content"},[t._v(" 年份： "),a("el-select",{staticStyle:{width:"100px"},attrs:{size:"mini",placeholder:"选择年"},on:{change:t.handleChangetype},model:{value:t.searchData.statisYear,callback:function(e){t.$set(t.searchData,"statisYear",e)},expression:"searchData.statisYear"}},t._l(t.optiontype,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content"},[t._v(" 期数： "),a("el-select",{staticStyle:{width:"90px"},attrs:{size:"mini",placeholder:"请选择"},on:{change:t.handleChange},model:{value:t.searchData.cycNum,callback:function(e){t.$set(t.searchData,"cycNum",e)},expression:"searchData.cycNum"}},t._l(t.timeoption,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),a("el-col",{attrs:{span:5}}),a("el-col",{attrs:{span:4}}),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content a"},[a("el-row",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.query}},[t._v("查询")]),a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("导入")])],1),a("el-col",{attrs:{span:3}})],1)])],1)],1),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,align:"center",border:"",height:"370","header-cell-style":t.rowClass,"cell-style":t.cellStyle}},[a("el-table-column",{attrs:{prop:"sn",label:"序号",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"contctNo",label:"联系号码",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"predCityName",label:"地市",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q1Question",label:"Q1 整体感知",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q2Question",label:"Q2 资费",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q3Question",label:"Q3 装机服务",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q4Question",label:"Q4 上网质量",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q411Question",label:"Q4.1.1.  您觉得企业宽带的上网质量有哪些地方需要改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q412Question",label:"Q4.1.2.  您觉得企业宽带的上网质量有哪些地方需要改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q413Question",label:"Q4.1.3.  您觉得企业宽带的上网质量有哪些地方需要改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q414Question",label:"Q4.1.4.  您觉得企业宽带的上网质量有哪些地方需要改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q415Question",label:"Q4.1.5.  您觉得企业宽带的上网质量有哪些地方需要改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q415vQuestion",label:"Q4.1.5V.  您觉得企业宽带的上网质量有哪些地方需要改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q4198Question",label:"Q4.1.98.  您觉得企业宽带的上网质量有哪些地方需要改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q4199Question",label:"Q4.1.99.  您觉得企业宽带的上网质量有哪些地方需要改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q51Question",label:"Q5-1. 请问您是否就企业宽带向中国移动提出过报修或投诉？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q5Question",label:"Q5 故障处理",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q521Question",label:"Q5.2.1. 您认为企业宽带的故障或投诉处理服务有哪些地方可以改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q522Question",label:"Q5.2.2. 您认为企业宽带的故障或投诉处理服务有哪些地方可以改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"",label:"Q5.2.3. 您认为企业宽带的故障或投诉处理服务有哪些地方可以改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q524Question",label:"Q5.2.4. 您认为企业宽带的故障或投诉处理服务有哪些地方可以改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q525Question",label:"Q5.2.5. 您认为企业宽带的故障或投诉处理服务有哪些地方可以改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q526Question",label:"Q5.2.6. 您认为企业宽带的故障或投诉处理服务有哪些地方可以改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q527Question",label:"Q5.2.7. 您认为企业宽带的故障或投诉处理服务有哪些地方可以改进？",width:"105",align:"center"}}),a("el-table-column",{attrs:{prop:"q527vQuestion",label:"Q5.2.7V. 您认为企业宽带的故障或投诉处理服务有哪些地方可以改进？",width:"105",align:"center"}})],1),a("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"current-page":t.searchData.page,"page-size":t.searchData.limit,total:t.searchData.total,"page-sizes":[1,5,10,30],layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(e){return t.$set(t.searchData,"page",e)},"update:current-page":function(e){return t.$set(t.searchData,"page",e)},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("div",{staticClass:"dialog"},[a("el-dialog",{attrs:{visible:t.dialogVisible,"before-close":t.handleDialogClose,width:"70%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"grid-content",staticStyle:{display:"inline-block"}},[t._v(" 年份： "),a("el-select",{staticStyle:{width:"100px"},attrs:{size:"mini",placeholder:"选择年"},on:{change:t.handleChangetype},model:{value:t.searchData.statisYear,callback:function(e){t.$set(t.searchData,"statisYear",e)},expression:"searchData.statisYear"}},t._l(t.optiontype,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticClass:"grid-content",staticStyle:{display:"inline-block"}},[t._v(" 期数： "),a("el-select",{staticStyle:{width:"90px"},attrs:{size:"mini",placeholder:"请选择"},on:{change:t.handleChange},model:{value:t.searchData.cycNum,callback:function(e){t.$set(t.searchData,"cycNum",e)},expression:"searchData.cycNum"}},t._l(t.timeoption,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.getDownload}},[t._v("模板下载")])],1),a("el-upload",{ref:"upfiles",staticClass:"upload-demo",attrs:{action:"#","http-request":t.uploadFiles,"on-change":t.setChange,multiple:"",limit:1e4,"file-list":t.fileList}},[a("el-button",{staticStyle:{"text-align":"left"},attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传Excel文件，且不超过500kb "),a("span",{staticStyle:{color:"#FF0000"},attrs:{slot:"tip"},slot:"tip"},[t._v("注：每次导入表格都会对本周期进行全覆盖。")])])],1),a("div",{staticClass:"listtpey"},t._l(t.content,(function(e,l){return a("p",{key:l},[t._v(t._s(e))])})),0),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.clearFile()}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.confirm}},[t._v("确 定")])],1)],1)],1)])},i=[],n=(a("4160"),a("159b"),a("c59a")),s=(a("99b1"),a("b6220")),o=a("0c6d"),c={data:function(){return{dialogVisible:!1,tableData:[],searchData:{cycNum:"Q1",statisYear:2021,pageNo:1,pageSize:10,total:10},input:"",search:"",arr:"",optionreason:[],cityCode:"",timeoption:[{label:"Q1",value:"Q1"},{label:"Q2",value:"Q2"},{label:"Q3",value:"Q3"},{label:"Q4",value:"Q4"}],optiontype:[{label:"2021",value:"2021"},{label:"2020",value:"2020"}],cntyArrOptins:[],options1:[],files:{cycNum:"Q1",files:{},statisYear:2021,token:"12"},fileList:[],content:""}},mounted:function(){this.query()},methods:{query:function(){var t=this;s["a"].findGroupKDSatisInfo({data:this.searchData}).then((function(e){console.log(e),t.searchData.total=e.data.data.total,t.tableData=e.data.data.records})).catch((function(t){console.log(t)}))},handleChange:function(t){},resetting:function(){this.dialogVisible=!0},setChange:function(t,e){this.fileList=e},uploadFiles:function(t){},handleDialogClose:function(){this.dialogVisible=!1,this.$refs["upfiles"].clearFiles()},getDownload:function(){var t=n["a"].production,e={type:3};Object(o["a"])(t+"/SatisfactionImport/download5GSatisModel",e,"groupKdSatis")},confirm:function(){var t=this;if(0!=this.fileList.length){var e=new FormData,a=[];this.fileList.forEach((function(t){e.append("file",t.raw),a.push(t.raw)})),e.append("cycNum",this.files.cycNum),e.append("statisYear",this.files.statisYear);var l=[];s["a"].groupKDSatisImport({data:e}).then((function(e){var a=e.data.data;1==a.code&&(l.push(a.msg),t.content=l),0==a.code&&l.unshift(a.msg),t.content=l})).catch((function(t){console.log(t)}))}else this.$message.warning("请上传文件！")},clearFile:function(){this.dialogVisible=!1,this.$refs["upfiles"].clearFiles()},noresetting:function(){},handleChangetype:function(t,e){},rowClass:function(){},cellStyle:function(){},handleCurrentChange:function(t){console.log(t),this.searchData.pageNo=t,this.query()},handleSizeChange:function(t){console.log(t),this.searchData.pageSize=t,this.query()}}},r=c,u=(a("bf05"),a("2877")),p=Object(u["a"])(r,l,i,!1,null,"79d79db2",null);e["default"]=p.exports},bf05:function(t,e,a){"use strict";var l=a("fe26"),i=a.n(l);i.a},fe26:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1a9f91d1.c96aa70e.js.map