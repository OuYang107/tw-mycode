(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-355e670e"],{"146a":function(t,a,l){"use strict";var e=l("fff4"),i=l.n(e);i.a},"9db2":function(t,a,l){"use strict";l.r(a);var e=function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("div",{staticClass:"page-container common-css"},[l("div",{staticClass:"searchBox"},[l("div",{staticClass:"flex"},[l("div",{staticClass:"text"},[t._v("日期：")]),l("el-date-picker",{attrs:{type:"month",size:"small",placeholder:"选择月份"},model:{value:t.dataQuery.statisMonth,callback:function(a){t.$set(t.dataQuery,"statisMonth",a)},expression:"dataQuery.statisMonth"}})],1),l("div",{staticClass:"flex",staticStyle:{"margin-left":"30px"}},[l("div",{staticClass:"text"},[t._v("地市编码：")]),l("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入地市编码",size:"small"},model:{value:t.dataQuery.cityCode,callback:function(a){t.$set(t.dataQuery,"cityCode",a)},expression:"dataQuery.cityCode"}})],1),l("div",{staticClass:"flex",staticStyle:{"margin-left":"30px"}},[l("div",{staticClass:"text"},[t._v("用户标识：")]),l("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入userId",size:"small"},model:{value:t.dataQuery.userId,callback:function(a){t.$set(t.dataQuery,"userId",a)},expression:"dataQuery.userId"}})],1),l("div",{staticClass:"flex",staticStyle:{"margin-left":"30px"}},[l("div",{staticClass:"text"},[t._v("电话号码：")]),l("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入电话号码",size:"small"},model:{value:t.dataQuery.servNo,callback:function(a){t.$set(t.dataQuery,"servNo",a)},expression:"dataQuery.servNo"}})],1),l("el-button",{staticStyle:{"margin-left":"50px"},attrs:{icon:"el-icon-search",type:"primary",size:"small"}},[t._v("搜索")])],1),l("div",{staticClass:"tableBox"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,size:"small","header-cell-style":{background:"rgb(160,207,255)",color:"#fff"},border:""}},[l("el-table-column",{attrs:{prop:"data",label:"统计月份"}}),l("el-table-column",{attrs:{prop:"data",label:"地市编码"}}),l("el-table-column",{attrs:{prop:"data",label:"用户id"}}),l("el-table-column",{attrs:{prop:"data",label:"手机号码"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"是否为家庭关键人"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"是否为家庭圈成员"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"是否为家庭圈异网成员"}}),l("el-table-column",{attrs:{prop:"data","min-width":"130",label:"用户所在家庭成员数"}}),l("el-table-column",{attrs:{prop:"data","min-width":"130",label:"是否办理家庭类产品"}}),l("el-table-column",{attrs:{prop:"data","min-width":"130",label:"是否办理移动宽带"}}),l("el-table-column",{attrs:{prop:"data","min-width":"140",label:"是否办理魔百和/电视"}}),l("el-table-column",{attrs:{prop:"data",label:"是否有老人"}}),l("el-table-column",{attrs:{prop:"data",label:"是否有儿童"}}),l("el-table-column",{attrs:{prop:"data",label:"是否有宠物"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"是否亲情网潜客"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"是否智能音箱"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"是否语音遥控器"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"是否智能组网潜客"}}),l("el-table-column",{attrs:{prop:"data","min-width":"80",label:"稳定度级别"}}),l("el-table-column",{attrs:{prop:"data","min-width":"80",label:"价制度级别"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"4g客户不满意原因类型自动"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"4g客户不满意原因类型人工"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"宽带客户不满意原因类型自动"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"宽带客户不满意原因类型人工"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"是否宽带问卷调查潜客"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"是否4g问卷调查潜客"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"是否4g升越级投诉倾向客户"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"是否本网高三校园用户"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"是否本网高校校园用户"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"用户常驻小区"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"用户常驻聚类市场"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"是否聚类市场商铺经营者"}}),l("el-table-column",{attrs:{prop:"data","min-width":"200",label:"是否聚类市场商铺已办理本网宽带"}}),l("el-table-column",{attrs:{prop:"data","min-width":"180",label:"是否聚类市场商铺已办理专线"}}),l("el-table-column",{attrs:{prop:"data","min-width":"160",label:"是否abc类集团成员甄别"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"是否abc类集团潜客"}}),l("el-table-column",{attrs:{prop:"data","min-width":"160",label:"是否abc类集团v网潜客"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"家庭圈异网号码集"}})],1)],1),l("div",{staticClass:"pageBox"},[l("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"current-page":1,"page-size":10,total:200,layout:"total, prev, pager, next, jumper"}})],1)])},i=[],r={data:function(){return{dataQuery:{statisMonth:"",cityCode:"",userId:"",servNo:""},value1:"",input1:"",tableData:[{data:"王小虎"},{data:"王小虎"},{data:"王小虎"},{data:"王小虎"}]}}},s=r,o=(l("146a"),l("2877")),d=Object(o["a"])(s,e,i,!1,null,null,null);a["default"]=d.exports},fff4:function(t,a,l){}}]);
//# sourceMappingURL=chunk-355e670e.4178da0e.js.map