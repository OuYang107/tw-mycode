(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed6bb6fc"],{"0d97":function(t,a,e){},1029:function(t,a,e){"use strict";var n=e("0d97"),l=e.n(n);l.a},"267f":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-container common-css"},[e("div",{staticClass:"page-main"},[e("div",{staticClass:"page-menu"},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline,size:"small"}},[e("div",{staticClass:"menu-left"},[e("el-form-item",{attrs:{label:"日期:"}},[e("el-date-picker",{attrs:{type:"date",placeholder:"选择一个日期"},model:{value:t.formInline.statisDate,callback:function(a){t.$set(t.formInline,"statisDate",a)},expression:"formInline.statisDate"}})],1),e("el-form-item",{attrs:{label:"疑似客户分类:"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formInline.customMenus,callback:function(a){t.$set(t.formInline,"customMenus",a)},expression:"formInline.customMenus"}},t._l(t.customMenus,(function(t,a){return e("el-option",{key:a,attrs:{label:t.name,value:t.value}})})),1)],1),e("el-form-item",{attrs:{label:"疑似客户来源:"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formInline.customOrigin,callback:function(a){t.$set(t.formInline,"customOrigin",a)},expression:"formInline.customOrigin"}},t._l(t.customOrigin,(function(t,a){return e("el-option",{key:a,attrs:{label:t.name,value:t.value}})})),1)],1)],1)]),e("div",{staticClass:"data-map"},[t._m(0),e("div",{staticClass:"area-right"},[e("div",{ref:"map",staticClass:"GisMap",attrs:{id:"map"}})])])],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"row-key":"id",border:"",lazy:"",load:t.load,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[e("el-table-column",{attrs:{prop:"city",label:"地市/地区",width:"180"}}),e("el-table-column",{attrs:{label:"疑似涉诈"}},[e("el-table-column",{attrs:{prop:"swindle_grand",label:"当日疑似客户数",width:"180"}}),e("el-table-column",{attrs:{prop:"swindle_total",label:"累计疑似客户数"}})],1),e("el-table-column",{attrs:{label:"疑似骚扰"}},[e("el-table-column",{attrs:{prop:"harass_grand",label:"当日疑似客户数",width:"180"}}),e("el-table-column",{attrs:{prop:"harass_total",label:"累计疑似客户数"}})],1),e("el-table-column",{attrs:{label:"公安通报"}},[e("el-table-column",{attrs:{prop:"notice_grand",label:"当日疑似客户数",width:"180"}}),e("el-table-column",{attrs:{prop:"notice_total",label:"累计疑似客户数"}})],1),e("el-table-column",{attrs:{label:"123321举报"}},[e("el-table-column",{attrs:{prop:"report_grand",label:"当日疑似客户数",width:"180"}}),e("el-table-column",{attrs:{prop:"report_total",label:"累计疑似客户数"}})],1)],1)],1)])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"area-left"},[e("div",[e("span",[t._v("湖南累计疑似涉诈客户数：")]),e("span",{staticClass:"c-num"},[t._v("27")])]),e("div",[e("span",[t._v("湖南当日疑似涉诈客户数：")]),e("span",{staticClass:"c-num"},[t._v("9")])]),e("div",[e("span",[t._v("湖南累计疑似骚扰客户数：")]),e("span",{staticClass:"c-num"},[t._v("20")])]),e("div",[e("span",[t._v("湖南当日疑似骚扰客户数：")]),e("span",{staticClass:"c-num"},[t._v("4")])]),e("div",[e("span",[t._v("湖南累计公安通报客户数：")]),e("span",{staticClass:"c-num"},[t._v("50")])]),e("div",[e("span",[t._v("湖南当日公安通报客户数：")]),e("span",{staticClass:"c-num"},[t._v("10")])]),e("div",[e("span",[t._v("湖南累计12321举报客户数：")]),e("span",{staticClass:"c-num"},[t._v("24")])]),e("div",[e("span",[t._v("湖南当日12321举报客户数：")]),e("span",{staticClass:"c-num"},[t._v("3")])])])}],r=(e("d81d"),e("b0c0"),e("5530")),s=(e("0d5e"),e("bc3a")),o=e.n(s),i=(e("3f2a"),e("c59a")),c=e("2f62"),d={data:function(){return{baseUrl:i["a"].production,formInline:{region:0,origin:"",statisDate:"",customMenus:"",customOrigin:""},customMenus:[{name:"所有",value:0},{name:"骚扰",value:1},{name:"诈骗",value:2}],customOrigin:[{name:"所有",value:0},{name:"模型识别",value:1},{name:"人工导入",value:2},{name:"公安通报",value:3},{name:"12321举报",value:4}],lv:2,layer:null,cityInfo:{center:[]},cntyInfo:{name:""},gridInfo:{name:""},tableData:[{id:1,city:"岳阳市",swindle_grand:2,swindle_total:21,harass_grand:11,harass_total:22,notice_grand:123,notice_total:23,report_grand:11,report_total:1},{id:2,city:"益阳市",swindle_grand:2,swindle_total:21,harass_grand:11,harass_total:22,notice_grand:123,notice_total:23,report_grand:11,report_total:1},{id:3,city:"长沙市",swindle_grand:"2",swindle_total:"21",harass_grand:"21",harass_total:"22",notice_grand:"23",notice_total:"2",report_grand:"11",report_total:"1",children:[{id:31,city:"天心区",swindle_grand:"2",swindle_total:"21",harass_grand:"21",harass_total:"22",notice_grand:"23",notice_total:"2",report_grand:"11",report_total:"1"},{id:4,city:"开福区",swindle_grand:"2",swindle_total:"21",harass_grand:"21",harass_total:"22",notice_grand:"23",notice_total:"2",report_grand:"11",report_total:"1"}]},{id:5,city:"娄底市",swindle_grand:"2",swindle_total:"21",harass_grand:"21",harass_total:"22",notice_grand:"23",notice_total:"2",report_grand:"11",report_total:"1"},{id:6,city:"湘潭市",swindle_grand:"2",swindle_total:"21",harass_grand:"21",harass_total:"22",notice_grand:"23",notice_total:"2",report_grand:"11",report_total:"1"},{id:7,city:"株洲市",swindle_grand:"2",swindle_total:"21",harass_grand:"21",harass_total:"22",notice_grand:"23",notice_total:"2",report_grand:"11",report_total:"1"}]}},computed:Object(r["a"])({},Object(c["b"])(["authInfo"])),created:function(){this.findLeft(),this.findMapList(1),this.findTable()},methods:{initData:function(){var t=i["a"].production;o.a.post(t+"/heatmap/selectSumMapData",{areaId:"",statisDate:this.formInline.statisDate}).then((function(t){console.log(data)}))},findLeft:function(){},findTable:function(){},load:function(t,a,e){setTimeout((function(){e([{id:31,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:32,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"}])}),1e3)},initGisMap:function(){var t=new BaseMap({boxId:"map",Zoom:0});this.map=t.loadBaseMap(),this.map.flyTo({lat:27.4,lng:111.55},0),this.map.dragging.disable(),this.map.scrollWheelZoom.disable(),this.map.keyboard.disable(),this.loadColorBlock("0","ColorBlock",!0)},findMapList:function(t){var a=this;this.$post(Url.findMapInfo,this.mapQuery,"complex").then((function(e){switch(t){case 1:a.cityInfo.list=e.data,a.initGisMap();break;case 2:a.cntyInfo.list=e.data,a.lv=e.data[0].lv,a.map.setView(a.cntyInfo.center,1),a.loadColorBlock("0","ColorBlock",!0);break;case 3:a.gridInfo.list=e.data,a.lv=e.data[0].lv,a.map.setView(a.gridInfo.center,3),a.loadColorBlock("0","ColorBlock",!0);break}console.log(a.cityInfo,"cityInfo")}))},loadColorBlock:function(t,a,e){var n=this;this.layer=new ColorBlock({key:a,baseMap:this.map,showName:!0,data:2===this.lv?this.cityInfo.list:3===this.lv?this.cntyInfo.list:4===this.lv?this.gridInfo.list:this.cityInfo.list,callback:function(t,a){console.log(t,"item"),2===t.lv&&(n.cntyInfo.center=t.center,n.cntyInfo.name=t.name,n.findMapList(2),n.layer.hide()),3===t.lv&&(n.gridInfo.center=t.center,n.gridInfo.name=t.name,n.findMapList(3),n.layer.hide()),4===t.lv||n.initData()}}),n.layer.draw(),e?n.layer.show():n.layer.hide()}}},u=d,p=(e("1029"),e("2877")),f=Object(p["a"])(u,n,l,!1,null,null,null);a["default"]=f.exports},"3f2a":function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));var n=e("bc3a"),l=e.n(n),r=e("4360"),s=e("5c96");function o(t,a,e){l()({method:"post",url:t,headers:{"Content-Type":"application/json;charset=UTF-8",token:r["a"].state.token},data:a}).then((function(t){s["Message"].success(t.data.msg)})).catch((function(t){s["Message"].error(t.data.msg)}))}},5530:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("159b");function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function r(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}},dbb4:function(t,a,e){var n=e("23e7"),l=e("83ab"),r=e("56ef"),s=e("fc6a"),o=e("06cf"),i=e("8418");n({target:"Object",stat:!0,sham:!l},{getOwnPropertyDescriptors:function(t){var a,e,n=s(t),l=o.f,c=r(n),d={},u=0;while(c.length>u)e=l(n,a=c[u++]),void 0!==e&&i(d,a,e);return d}})},e439:function(t,a,e){var n=e("23e7"),l=e("d039"),r=e("fc6a"),s=e("06cf").f,o=e("83ab"),i=l((function(){s(1)})),c=!o||i;n({target:"Object",stat:!0,forced:c,sham:!o},{getOwnPropertyDescriptor:function(t,a){return s(r(t),a)}})}}]);
//# sourceMappingURL=chunk-ed6bb6fc.f60d86d3.js.map