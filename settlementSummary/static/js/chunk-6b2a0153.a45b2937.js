(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b2a0153"],{"6e7a":function(a,t,l){},"7d76":function(a,t,l){"use strict";l.r(t);var e=function(){var a=this,t=a.$createElement,l=a._self._c||t;return l("div",{staticClass:"page-container common-css"},[l("div",{staticClass:"searchBox"},[l("div",{staticClass:"flex"},[l("div",{staticClass:"text"},[a._v("日期：")]),l("el-date-picker",{attrs:{type:"date",size:"small",placeholder:"选择日期"},model:{value:a.dataQuery.statisData,callback:function(t){a.$set(a.dataQuery,"statisData",t)},expression:"dataQuery.statisData"}})],1),l("div",{staticClass:"flex",staticStyle:{"margin-left":"30px"}},[l("div",{staticClass:"text"},[a._v("用户标识：")]),l("el-input",{attrs:{placeholder:"请输入userId",size:"small"},model:{value:a.dataQuery.userId,callback:function(t){a.$set(a.dataQuery,"userId",t)},expression:"dataQuery.userId"}})],1),l("div",{staticClass:"flex",staticStyle:{"margin-left":"30px"}},[l("div",{staticClass:"text"},[a._v("电话号码：")]),l("el-input",{attrs:{placeholder:"请输入电话号码",size:"small"},model:{value:a.dataQuery.servNo,callback:function(t){a.$set(a.dataQuery,"servNo",t)},expression:"dataQuery.servNo"}})],1),l("el-button",{staticStyle:{"margin-left":"50px"},attrs:{icon:"el-icon-search",type:"primary",size:"small"}},[a._v("搜索")])],1),l("div",{staticClass:"tableBox"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,size:"small","header-cell-style":{background:"rgb(160,207,255)",color:"#fff"},border:""}},[l("el-table-column",{attrs:{prop:"data",label:"日期"}}),l("el-table-column",{attrs:{prop:"data",label:"开户归属地市代码",width:"150"}}),l("el-table-column",{attrs:{prop:"data",label:"开户归属地县代码",width:"150"}}),l("el-table-column",{attrs:{prop:"data",label:"开户归属营业部",width:"150"}}),l("el-table-column",{attrs:{prop:"data",label:"用户标识"}}),l("el-table-column",{attrs:{prop:"data",label:"手机号码"}}),l("el-table-column",{attrs:{prop:"data",label:"性别"}}),l("el-table-column",{attrs:{prop:"data",label:"年龄"}}),l("el-table-column",{attrs:{prop:"data","min-width":"100",label:"用户品牌"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"用户消状态"}}),l("el-table-column",{attrs:{prop:"data","min-width":"100",label:"在网月份"}}),l("el-table-column",{attrs:{prop:"data",label:"姓氏"}}),l("el-table-column",{attrs:{prop:"data",label:"生日"}}),l("el-table-column",{attrs:{prop:"data",label:"用户大状态"}}),l("el-table-column",{attrs:{prop:"data",label:"用户大状态"}}),l("el-table-column",{attrs:{prop:"data","min-width":"100",label:"用户服务品牌"}}),l("el-table-column",{attrs:{prop:"data",label:"客户品牌"}}),l("el-table-column",{attrs:{prop:"data",label:"入网时间"}}),l("el-table-column",{attrs:{prop:"data",label:"离网时间"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"通话归属区县"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"是否在网用户"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"是否在网物联网卡用户"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"是否在网个人客户"}}),l("el-table-column",{attrs:{prop:"data",label:"主套餐ID"}}),l("el-table-column",{attrs:{prop:"data",label:"主套餐优惠"}}),l("el-table-column",{attrs:{prop:"data",label:"主套餐价值"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"套餐折扣名称"}}),l("el-table-column",{attrs:{prop:"data",label:"套餐折扣率"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"用户主用终端品牌"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"用户主用终端型号"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"当月语音套餐饱和度"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"当月套餐就来饱和度"}}),l("el-table-column",{attrs:{prop:"data",label:"当月流量"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"推荐套餐档次"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"阅读作者偏好"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"偏好阅读内容类型"}}),l("el-table-column",{attrs:{prop:"data","min-width":"120",label:"音乐歌手偏好"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"偏好音乐内容类型"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"偏好游戏内容类型"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"游戏内容类型偏好排名"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"偏好视频内容类型"}}),l("el-table-column",{attrs:{prop:"data","min-width":"150",label:"视频内容类型偏好排名"}})],1)],1),l("div",{staticClass:"pageBox"},[l("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"current-page":1,"page-size":10,total:200,layout:"total, prev, pager, next, jumper"}})],1)])},r=[],s={data:function(){return{dataQuery:{statisData:"",userId:"",servNo:""},value1:"",input1:"",tableData:[{data:"王小虎"},{data:"王小虎"},{data:"王小虎"},{data:"王小虎"}]}}},o=s,d=(l("a7c0"),l("2877")),n=Object(d["a"])(o,e,r,!1,null,null,null);t["default"]=n.exports},a7c0:function(a,t,l){"use strict";var e=l("6e7a"),r=l.n(e);r.a}}]);
//# sourceMappingURL=chunk-6b2a0153.a45b2937.js.map