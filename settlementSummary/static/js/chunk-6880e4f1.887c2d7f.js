(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6880e4f1"],{"0d5e":function(t,n,e){"use strict";var a=e("0c6d"),r=e("99b1"),o=e("c59a");function l(t,n){var e=o["a"].production;return n=n||"",console.log(t),Object.assign({},{url:e+n+t.url,data:t.data||"",showLoading:t.showLoading||"",timeOut:t.timeOut||"",loadingTime:t.loadingTime||"",isLoading:t.isLoading||""})}var i=function(t){return t.url=r["a"].loginSso,Object(a["c"])(l(t))},c=function(t){return t.url=r["a"].findUserInfo,Object(a["c"])(l(t))},s=function(t){return t.url=r["a"].findUserInfos,Object(a["c"])(l(t))},d=function(t){return t.url=r["a"].prodExcelFile,Object(a["b"])(l(t))},u=function(t){return t.url=r["a"].prodFindProdInfo,Object(a["c"])(l(t))},f=function(t){return t.url=r["a"].prodUpdateProdInfo,Object(a["c"])(l(t))},p=function(t){return t.url=r["a"].prodInsertProdInfo,Object(a["c"])(l(t))},m=function(t){return t.url=r["a"].canalExcelFile,Object(a["b"])(l(t))},b=function(t){return t.url=r["a"].canalFindChnnlInfo,Object(a["c"])(l(t))},h=function(t){return t.url=r["a"].canalUpdateChnlInfo,Object(a["c"])(l(t))},g=function(t){return t.url=r["a"].canalInsertProdInfo,Object(a["c"])(l(t))},_=function(t){return t.url=r["a"].canalCheckChnnlInfo,Object(a["b"])(l(t))},v=function(t){return t.url=r["a"].canalRemoveChnlByCode,Object(a["c"])(l(t))},I=function(t){return t.url=r["a"].prodCheckProdInfo,Object(a["b"])(l(t))},y=function(t){return t.url=r["a"].prodRemoveProdByCode,Object(a["c"])(l(t))},O=function(t){return t.url=r["a"].findMenuInfo,Object(a["c"])(l(t))},w=function(t){return t.url=r["a"].findProdInfo,Object(a["c"])(l(t))},C=function(t){return t.url=r["a"].updateProdInfo,Object(a["c"])(l(t))},j=function(t){return t.url=r["a"].findCBdiIntfInfo,Object(a["c"])(l(t))},k=function(t){return t.url=r["a"].findSchedulingReloadInfo,Object(a["c"])(l(t))},P=function(t){return t.url=r["a"].updateSchedulingReloadInfo,Object(a["c"])(l(t))},D=function(t){return t.url=r["a"].findActivemonitorHelpInfo,Object(a["c"])(l(t))},M=function(t){return t.url=r["a"].findActivemonitorQuestionInfo,Object(a["c"])(l(t))},B=function(t){return t.url=r["a"].getSummaryData,Object(a["c"])(l(t))},S=function(t){return t.url=r["a"].getDetailData,Object(a["c"])(l(t))},U=function(t){return t.url=r["a"].getTypes,Object(a["c"])(l(t))};n["a"]={getTypes:U,getDetailData:S,getSummaryData:B,loginSso:i,findUserInfos:s,findUserInfo:c,prodExcelFile:d,prodFindProdInfo:u,prodUpdateProdInfo:f,prodInsertProdInfo:p,prodCheckProdInfo:I,canalExcelFile:m,canalFindChnnlInfo:b,canalUpdateChnlInfo:h,canalInsertProdInfo:g,canalCheckChnnlInfo:_,canalRemoveChnlByCode:v,prodRemoveProdByCode:y,findCBdiIntfInfo:j,findMenuInfo:O,findProdInfo:w,updateProdInfo:C,findSchedulingReloadInfo:k,updateSchedulingReloadInfo:P,findActivemonitorHelpInfo:D,findActivemonitorQuestionInfo:M}},"0d97":function(t,n,e){},1029:function(t,n,e){"use strict";var a=e("0d97"),r=e.n(a);r.a},"267f":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-container common-css"},[e("div",{staticClass:"page-main"},[e("div",{staticClass:"page-menu"},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline,size:"small"}},[e("div",{staticClass:"menu-left"},[e("el-form-item",{attrs:{label:"日期:"}},[e("el-date-picker",{attrs:{type:"date",placeholder:"选择一个日期"},model:{value:t.formInline.statisDate,callback:function(n){t.$set(t.formInline,"statisDate",n)},expression:"formInline.statisDate"}})],1),e("el-form-item",{attrs:{label:"疑似客户分类:"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formInline.customMenus,callback:function(n){t.$set(t.formInline,"customMenus",n)},expression:"formInline.customMenus"}},t._l(t.customMenus,(function(t,n){return e("el-option",{key:n,attrs:{label:t.name,value:t.value}})})),1)],1),e("el-form-item",{attrs:{label:"疑似客户来源:"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formInline.customOrigin,callback:function(n){t.$set(t.formInline,"customOrigin",n)},expression:"formInline.customOrigin"}},t._l(t.customOrigin,(function(t,n){return e("el-option",{key:n,attrs:{label:t.name,value:t.value}})})),1)],1)],1)]),e("div",{staticClass:"data-map"},[t._m(0),e("div",{staticClass:"area-right"},[e("div",{ref:"map",staticClass:"GisMap",attrs:{id:"map"}})])])],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"row-key":"id",border:"",lazy:"",load:t.load,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[e("el-table-column",{attrs:{prop:"city",label:"地市/地区",width:"180"}}),e("el-table-column",{attrs:{label:"疑似涉诈"}},[e("el-table-column",{attrs:{prop:"swindle_grand",label:"当日疑似客户数",width:"180"}}),e("el-table-column",{attrs:{prop:"swindle_total",label:"累计疑似客户数"}})],1),e("el-table-column",{attrs:{label:"疑似骚扰"}},[e("el-table-column",{attrs:{prop:"harass_grand",label:"当日疑似客户数",width:"180"}}),e("el-table-column",{attrs:{prop:"harass_total",label:"累计疑似客户数"}})],1),e("el-table-column",{attrs:{label:"公安通报"}},[e("el-table-column",{attrs:{prop:"notice_grand",label:"当日疑似客户数",width:"180"}}),e("el-table-column",{attrs:{prop:"notice_total",label:"累计疑似客户数"}})],1),e("el-table-column",{attrs:{label:"123321举报"}},[e("el-table-column",{attrs:{prop:"report_grand",label:"当日疑似客户数",width:"180"}}),e("el-table-column",{attrs:{prop:"report_total",label:"累计疑似客户数"}})],1)],1)],1)])},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"area-left"},[e("div",[e("span",[t._v("湖南累计疑似涉诈客户数：")]),e("span",{staticClass:"c-num"},[t._v("27")])]),e("div",[e("span",[t._v("湖南当日疑似涉诈客户数：")]),e("span",{staticClass:"c-num"},[t._v("9")])]),e("div",[e("span",[t._v("湖南累计疑似骚扰客户数：")]),e("span",{staticClass:"c-num"},[t._v("20")])]),e("div",[e("span",[t._v("湖南当日疑似骚扰客户数：")]),e("span",{staticClass:"c-num"},[t._v("4")])]),e("div",[e("span",[t._v("湖南累计公安通报客户数：")]),e("span",{staticClass:"c-num"},[t._v("50")])]),e("div",[e("span",[t._v("湖南当日公安通报客户数：")]),e("span",{staticClass:"c-num"},[t._v("10")])]),e("div",[e("span",[t._v("湖南累计12321举报客户数：")]),e("span",{staticClass:"c-num"},[t._v("24")])]),e("div",[e("span",[t._v("湖南当日12321举报客户数：")]),e("span",{staticClass:"c-num"},[t._v("3")])])])}],o=(e("d81d"),e("b0c0"),e("5530")),l=(e("0d5e"),e("bc3a")),i=e.n(l),c=(e("3f2a"),e("c59a")),s=e("2f62"),d={data:function(){return{baseUrl:c["a"].production,formInline:{region:0,origin:"",statisDate:"",customMenus:"",customOrigin:""},customMenus:[{name:"所有",value:0},{name:"骚扰",value:1},{name:"诈骗",value:2}],customOrigin:[{name:"所有",value:0},{name:"模型识别",value:1},{name:"人工导入",value:2},{name:"公安通报",value:3},{name:"12321举报",value:4}],lv:2,layer:null,cityInfo:{center:[]},cntyInfo:{name:""},gridInfo:{name:""},tableData:[{id:1,city:"岳阳市",swindle_grand:2,swindle_total:21,harass_grand:11,harass_total:22,notice_grand:123,notice_total:23,report_grand:11,report_total:1},{id:2,city:"益阳市",swindle_grand:2,swindle_total:21,harass_grand:11,harass_total:22,notice_grand:123,notice_total:23,report_grand:11,report_total:1},{id:3,city:"长沙市",swindle_grand:"2",swindle_total:"21",harass_grand:"21",harass_total:"22",notice_grand:"23",notice_total:"2",report_grand:"11",report_total:"1",children:[{id:31,city:"天心区",swindle_grand:"2",swindle_total:"21",harass_grand:"21",harass_total:"22",notice_grand:"23",notice_total:"2",report_grand:"11",report_total:"1"},{id:4,city:"开福区",swindle_grand:"2",swindle_total:"21",harass_grand:"21",harass_total:"22",notice_grand:"23",notice_total:"2",report_grand:"11",report_total:"1"}]},{id:5,city:"娄底市",swindle_grand:"2",swindle_total:"21",harass_grand:"21",harass_total:"22",notice_grand:"23",notice_total:"2",report_grand:"11",report_total:"1"},{id:6,city:"湘潭市",swindle_grand:"2",swindle_total:"21",harass_grand:"21",harass_total:"22",notice_grand:"23",notice_total:"2",report_grand:"11",report_total:"1"},{id:7,city:"株洲市",swindle_grand:"2",swindle_total:"21",harass_grand:"21",harass_total:"22",notice_grand:"23",notice_total:"2",report_grand:"11",report_total:"1"}]}},computed:Object(o["a"])({},Object(s["b"])(["authInfo"])),created:function(){this.findLeft(),this.findMapList(1),this.findTable()},methods:{initData:function(){var t=c["a"].production;i.a.post(t+"/heatmap/selectSumMapData",{areaId:"",statisDate:this.formInline.statisDate}).then((function(t){console.log(data)}))},findLeft:function(){},findTable:function(){},load:function(t,n,e){setTimeout((function(){e([{id:31,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:32,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"}])}),1e3)},initGisMap:function(){var t=new BaseMap({boxId:"map",Zoom:0});this.map=t.loadBaseMap(),this.map.flyTo({lat:27.4,lng:111.55},0),this.map.dragging.disable(),this.map.scrollWheelZoom.disable(),this.map.keyboard.disable(),this.loadColorBlock("0","ColorBlock",!0)},findMapList:function(t){var n=this;this.$post(Url.findMapInfo,this.mapQuery,"complex").then((function(e){switch(t){case 1:n.cityInfo.list=e.data,n.initGisMap();break;case 2:n.cntyInfo.list=e.data,n.lv=e.data[0].lv,n.map.setView(n.cntyInfo.center,1),n.loadColorBlock("0","ColorBlock",!0);break;case 3:n.gridInfo.list=e.data,n.lv=e.data[0].lv,n.map.setView(n.gridInfo.center,3),n.loadColorBlock("0","ColorBlock",!0);break}console.log(n.cityInfo,"cityInfo")}))},loadColorBlock:function(t,n,e){var a=this;this.layer=new ColorBlock({key:n,baseMap:this.map,showName:!0,data:2===this.lv?this.cityInfo.list:3===this.lv?this.cntyInfo.list:4===this.lv?this.gridInfo.list:this.cityInfo.list,callback:function(t,n){console.log(t,"item"),2===t.lv&&(a.cntyInfo.center=t.center,a.cntyInfo.name=t.name,a.findMapList(2),a.layer.hide()),3===t.lv&&(a.gridInfo.center=t.center,a.gridInfo.name=t.name,a.findMapList(3),a.layer.hide()),4===t.lv||a.initData()}}),a.layer.draw(),e?a.layer.show():a.layer.hide()}}},u=d,f=(e("1029"),e("2877")),p=Object(f["a"])(u,a,r,!1,null,null,null);n["default"]=p.exports},"3f2a":function(t,n,e){"use strict";e.d(n,"b",(function(){return i}));var a=e("bc3a"),r=e.n(a),o=e("4360"),l=e("5c96");function i(t,n,e){r()({method:"post",url:t,headers:{"Content-Type":"application/json;charset=UTF-8",token:o["a"].state.token},data:n}).then((function(t){l["Message"].success(t.data.msg)})).catch((function(t){l["Message"].error(t.data.msg)}))}},5530:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("159b");function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}},dbb4:function(t,n,e){var a=e("23e7"),r=e("83ab"),o=e("56ef"),l=e("fc6a"),i=e("06cf"),c=e("8418");a({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var n,e,a=l(t),r=i.f,s=o(a),d={},u=0;while(s.length>u)e=r(a,n=s[u++]),void 0!==e&&c(d,n,e);return d}})},e439:function(t,n,e){var a=e("23e7"),r=e("d039"),o=e("fc6a"),l=e("06cf").f,i=e("83ab"),c=r((function(){l(1)})),s=!i||c;a({target:"Object",stat:!0,forced:s,sham:!i},{getOwnPropertyDescriptor:function(t,n){return l(o(t),n)}})}}]);
//# sourceMappingURL=chunk-6880e4f1.887c2d7f.js.map