(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e7727f0"],{"704a":function(t,e,n){"use strict";var a=n("f579"),r=n.n(a);r.a},b6220:function(t,e,n){"use strict";var a=n("0c6d"),r=n("99b1"),o=n("c59a");function u(t,e){var n=o["a"].production;return e=e||"",Object.assign({},{url:n+e+t.url,data:t.data||"",showLoading:t.showLoading||"",timeOut:t.timeOut||"",loadingTime:t.loadingTime||"",isLoading:t.isLoading||""})}var c=function(t){return t.url=r["a"].getSummaryData,Object(a["c"])(u(t))},l=function(t){return t.url=r["a"].getDetailData,Object(a["c"])(u(t))},i=function(t){return t.url=r["a"].getTypes,Object(a["c"])(u(t))},d=function(t){return t.url=r["a"].uploadExcel,Object(a["b"])(u(t))},s=function(t){return t.url=r["a"].getExcelTemplate,Object(a["a"])(u(t))},f=function(t){return t.url=r["a"].mobile,Object(a["c"])(u(t))},m=function(t){return t.url=r["a"].mobileSelect,Object(a["c"])(u(t))},p=function(t){return t.url=r["a"].broadband,Object(a["c"])(u(t))},b=function(t){return t.url=r["a"].broadbandSelect,Object(a["c"])(u(t))},g=function(t){return t.url=r["a"].family,Object(a["c"])(u(t))},h=function(t){return t.url=r["a"].familySelect,Object(a["c"])(u(t))},y=function(t){return t.url=r["a"].government,Object(a["c"])(u(t))},x=function(t){return t.url=r["a"].governmentSelect,Object(a["c"])(u(t))},v=function(t){return t.url=r["a"].querypagedata,Object(a["c"])(u(t))},I=function(t){return t.url=r["a"].queryregion,Object(a["c"])(u(t))},w=function(t){return t.url=r["a"].querytype,Object(a["c"])(u(t))};e["a"]={getSummaryData:c,getDetailData:l,getTypes:i,uploadExcel:d,getExcelTemplate:s,mobile:f,mobileSelect:m,broadband:p,broadbandSelect:b,family:g,familySelect:h,government:y,governmentSelect:x,querypagedata:v,queryregion:I,querytype:w}},c740:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").findIndex,o=n("44d2"),u=n("ae40"),c="findIndex",l=!0,i=u(c);c in[]&&Array(1)[c]((function(){l=!1})),a({target:"Array",proto:!0,forced:l||!i},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(c)},c948:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[t.menuList.length>0?n("el-col",{attrs:{span:4}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"0","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.setMenuIndex}},t._l(t.menuList,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:t.getIndex(a)}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.class1Name))])])})),1)],1):t._e(),t.menuList.length>0?n("el-col",{attrs:{span:20}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.productData,"expand-row-keys":t.expands,"row-key":"codeKey"},on:{"expand-change":t.getExpand}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-table",{attrs:{data:e.row.children,"row-key":"index"}},[n("el-table-column",{attrs:{label:"客户群 ID",prop:"tagId"}}),n("el-table-column",{attrs:{label:"客户群名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{attrs:{"data-link":e.row.url,target:"_blank"},on:{click:t.openLink}},[t._v(t._s(e.row.tagName))])]}}],null,!0)}),n("el-table-column",{attrs:{label:"引用到期时间",prop:"endDate"}})],1)]}}],null,!1,1841160151)}),n("el-table-column",{attrs:{label:"产品 ID",prop:"campnProdCode"}}),n("el-table-column",{attrs:{label:"产品名称",prop:"campnProdName"}}),n("el-table-column",{attrs:{label:"被引客户群数"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{color:"rgb(140, 197, 255)","font-weight":"bold"}},[t._v(t._s(e.row.counts))])]}}],null,!1,2888101899)})],1)],1):t._e()],1)},r=[],o=(n("c740"),n("d81d"),n("d3b7"),n("25f0"),n("b6220")),u={data:function(){return{tableData:[],menuList:[],menuClassId:"",productId:"",productData:[],expands:[]}},mounted:function(){this.getMenu()},methods:{getIndex:function(t){return t.toString()},openLink:function(t){var e=t.target.getAttribute("data-link");window.open(e,"_blank")},setMenuIndex:function(t){this.menuClassId=this.menuList[t].class1Id,this.getProducts()},getMenu:function(){var t=this;o["a"].findTdCaCrmCampnConfigInfo().then((function(e){t.menuList=e.data.data,t.menuClassId=t.menuList[0].class1Id,t.getProducts()}))},getProducts:function(){var t=this,e={class1Id:this.menuClassId};o["a"].findTdCaCrmCampnConfigProdInfo({data:e,showLoading:!0}).then((function(e){e.data.data.map((function(t,e){var n=t;return n["codeKey"]=t.campnProdCode+"_"+e,n})),t.productData=e.data.data,t.expands=[]}))},getExpand:function(t,e){var n=this,a=this.productData.findIndex((function(e){return e.codeKey==t.codeKey}));if(e.length>0){var r={resourceId:t.campnProdCode};e.length>1&&(this.expands=[]),o["a"].findTCkmSegmentInfo({data:r,showLoading:!0}).then((function(e){e.data.data.map((function(t,e){var n=t;return n["index"]=e,n})),n.children=e.data.data,n.productData[a].children=e.data.data,n.expands.push(t.codeKey)}))}else this.expands=[]}}},c=u,l=(n("704a"),n("2877")),i=Object(l["a"])(c,a,r,!1,null,"67ab202b",null);e["default"]=i.exports},f579:function(t,e,n){}}]);
//# sourceMappingURL=chunk-9e7727f0.cd3d9073.js.map