(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2c859d"],{"70a1":function(a,t,l){},"8ed7":function(a,t,l){"use strict";var e=l("70a1"),r=l.n(e);r.a},e318:function(a,t,l){"use strict";l.r(t);var e=function(){var a=this,t=a.$createElement,l=a._self._c||t;return l("div",{staticClass:"page-container common-css"},[l("div",{staticClass:"searchBox"},[l("div",{staticClass:"flex"},[l("div",{staticClass:"text"},[a._v("日期：")]),l("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",size:"small",placeholder:""},model:{value:a.dataQuery.statisDate,callback:function(t){a.$set(a.dataQuery,"statisDate",t)},expression:"dataQuery.statisDate"}})],1),l("div",{staticClass:"flex",staticStyle:{"margin-left":"30px"}},[l("div",{staticClass:"text"},[a._v("地市名称：")]),l("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"",size:"small"},model:{value:a.dataQuery.cityName,callback:function(t){a.$set(a.dataQuery,"cityName",t)},expression:"dataQuery.cityName"}})],1),l("div",{staticClass:"flex",staticStyle:{"margin-left":"30px"}},[l("div",{staticClass:"text"},[a._v("区县名称：")]),l("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"",size:"small"},model:{value:a.dataQuery.cntyName,callback:function(t){a.$set(a.dataQuery,"cntyName",t)},expression:"dataQuery.cntyName"}})],1),l("div",{staticClass:"flex",staticStyle:{"margin-left":"30px"}},[l("div",{staticClass:"text"},[a._v("网格名称：")]),l("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"",size:"small"},model:{value:a.dataQuery.gridName,callback:function(t){a.$set(a.dataQuery,"gridName",t)},expression:"dataQuery.gridName"}})],1),l("div",{staticClass:"flex",staticStyle:{"margin-left":"30px"}},[l("div",{staticClass:"text"},[a._v("营业部名称：")]),l("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"",size:"small"},model:{value:a.dataQuery.townsName,callback:function(t){a.$set(a.dataQuery,"townsName",t)},expression:"dataQuery.townsName"}})],1),l("el-button",{staticStyle:{"margin-left":"50px"},attrs:{icon:"el-icon-search",type:"primary",size:"small"}},[a._v("搜索")])],1),l("div",{staticClass:"tableBox"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,size:"small","header-cell-style":{background:"rgb(160,207,255)",color:"#fff"},border:""}},[l("el-table-column",{attrs:{prop:"data",label:"统计月份"}}),l("el-table-column",{attrs:{prop:"data",label:"地市代码"}}),l("el-table-column",{attrs:{prop:"data",label:"地市名称"}}),l("el-table-column",{attrs:{prop:"data",label:"区县代码"}}),l("el-table-column",{attrs:{prop:"data",label:"区县名称"}}),l("el-table-column",{attrs:{prop:"data",label:"营业部id"}}),l("el-table-column",{attrs:{prop:"data",label:"营业部名称"}}),l("el-table-column",{attrs:{prop:"data",label:"乡镇id"}}),l("el-table-column",{attrs:{prop:"data",label:"乡镇名称"}}),l("el-table-column",{attrs:{prop:"data",label:"网格id"}}),l("el-table-column",{attrs:{prop:"data",label:"网格名称"}}),l("el-table-column",{attrs:{prop:"data",label:"地市级别"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"期末5g客户数"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"当日净增5g客户数"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"当月净增5g客户数"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"当年净增5g客户数"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"5g套餐客户数"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"特惠流量包客户数"}}),l("el-table-column",{attrs:{prop:"data","min-width":"140",label:"直通包客户数"}}),l("el-table-column",{attrs:{prop:"data",label:"全球通客户"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"动感地带客户"}}),l("el-table-column",{attrs:{prop:"data","min-width":"160",label:"5g智享套餐个人版客户"}}),l("el-table-column",{attrs:{prop:"data","min-width":"160",label:"5g智享套餐家庭版客户"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"线上渠道合计"}}),l("el-table-column",{attrs:{prop:"data",label:"一级电渠"}}),l("el-table-column",{attrs:{prop:"data",label:"省内电渠"}}),l("el-table-column",{attrs:{prop:"data",label:"在线公司"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"在线公司-5g特惠流量包"}}),l("el-table-column",{attrs:{prop:"data","min-width":"160",label:"在线公司-5g直通包"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"在线公司-5g套餐"}}),l("el-table-column",{attrs:{prop:"data",label:"和掌柜"}}),l("el-table-column",{attrs:{prop:"data",label:"线下渠道"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"线下渠道-5g套餐"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"线下渠道-5g特惠流量包"}}),l("el-table-column",{attrs:{prop:"data","min-width":"160",label:"线下渠道-5g直通包"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"使用了5g流量的客户数"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"本月累计流量(m)"}}),l("el-table-column",{attrs:{prop:"data","min-width":"100",label:"0流量客户"}}),l("el-table-column",{attrs:{prop:"data","min-width":"100",label:"dou(0,1g]"}}),l("el-table-column",{attrs:{prop:"data","min-width":"100",label:"dou(1,10g]"}}),l("el-table-column",{attrs:{prop:"data","min-width":"100",label:"dou 10g以上"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"流量超套客户"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"本月累计在线时长"}}),l("el-table-column",{attrs:{prop:"data","min-width":"100",label:"0通话客户"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"mou (0,100分钟]"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"mou 100分钟以上"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"语音超套用户"}}),l("el-table-column",{attrs:{prop:"data",label:"arpu值"}}),l("el-table-column",{attrs:{prop:"data","min-width":"130",label:"产生漫游客户数"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"使用了短信的客户数"}})],1)],1),l("div",{staticClass:"pageBox"},[l("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"current-page":1,"page-size":10,total:200,layout:"total, prev, pager, next, jumper"}})],1)])},r=[],i={data:function(){return{dataQuery:{statisDate:"",cityName:"",cntyName:"",gridName:"",townsName:""},value1:"",input1:"",tableData:[{data:"王小虎"},{data:"王小虎"},{data:"王小虎"},{data:"王小虎"}]}}},s=i,o=(l("8ed7"),l("2877")),d=Object(o["a"])(s,e,r,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d2c859d.908c41aa.js.map