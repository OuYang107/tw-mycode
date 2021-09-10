import { Path } from "leaflet";
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
// import '@/router/permission.js'
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err);
};
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function push (location) {
  return originalReplace.call(this, location).catch(err => err);
};
const webpackInfo = require('@/utils/webpack')
import webpack from "../utils/webpack";
export default new Router({
  mode: 'hash',
  routes: [
    // {
    // path: "/",
    // component: Layout,
    // redirect: "/cannalTable",
    // name: "home",
    // children: [{
    //   path: "cannalTable",
    //   component: () =>
    //     import("@/views/pages/cannalTable"),
    //   name: "cannalTable",
    //   meta: {
    //     navbar: 1, 
    //     title : '渠道维表'
    //   }
    // }, 
    // {
    //   path: "productTable",
    //   component: () =>
    //     import("@/views/pages/productTable"),
    //   name: "productTable",
    //   meta: {
    //     navbar: 2,
    //     title : '产品维表'  
    //   }
    //   },
    //   {
    //     path: "other",
    //     component: () =>
    //       import("@/views/pages/other"),
    //     name: "other",
    //     meta: {
    //       navbar: 1,
    //       title : '产品维表'  
    //     }
    //     }
    // ]
    // }
    //  { 
    //    path: "/",
    //  component: () => import("@/views/nofroms/" + webpackInfo.page),
    //   name:"webpackInfo.page",
    // },
    // ------------------------------------------
    // {
    //   path: "/",
    //   component: () => import("@/views/nofroms/" + webpackInfo.page),
    //   name: "webpackInfo.page",
    //   children: [
    //     {
    //       path: "/",
    //       component: () =>
    //         import("@/views/nofroms/nophone"),
    //       name: "nophone",
    //     },
    //     {
    //       path: "generation",
    //       component: () =>
    //         import("@/views/nofroms/generation"),
    //       name: "generation",
    //     },
    //     {
    //       path: "nobroadband",
    //       component: () =>
    //         import("@/views/nofroms/nobroadband"),
    //       name: "nobroadband",
    //     },
    //     {
    //       path: "keynote",
    //       component: () =>
    //         import("@/views/nofroms/keynote"),
    //       name: "keynote",
    //     },
    //     {
    //       path: "special",
    //       component: () =>
    //         import("@/views/nofroms/special"),
    //       name: "special",
    //     },
    //     {
    //       path: "qinetwork",
    //       component: () =>
    //         import("@/views/nofroms/qinetwork"),
    //       name: "qinetwork",
    //     },

    //   ],
    // }
    // ---------------------------    满意度6个
    {              //新利哥三个导入页面
      path: "/",
      component: () =>
        import("@/views/dengdatain/" + webpackInfo.page),
      name: webpackInfo.page,
    },
    // ==========================
    // {
    //   path: "/",
    //   component: () => import("@/views/datain/" + webpackInfo.page),
    //   name: "webpackInfo.page",
    //   children: [
    //     {
    //       path: "/",
    //       component: () =>
    //         import("@/views/datain/nophone"),
    //       name: "nophone",
    //     },
    //     {
    //       path: "generation",
    //       component: () =>
    //         import("@/views/datain/generation"),
    //       name: "generation",
    //     },
    //     {
    //       path: "broadband",
    //       component: () =>
    //         import("@/views/datain/broadband"),
    //       name: "broadband",
    //     },
    //     {
    //       path: "keynote",
    //       component: () =>
    //         import("@/views/datain/keynote"),
    //       name: "keynote",
    //     },
    //     {
    //       path: "special",
    //       component: () =>
    //         import("@/views/datain/special"),
    //       name: "special",
    //     },
    //     {
    //       path: "lianqinetwork",
    //       component: () =>
    //         import("@/views/datain/lianqinetwork"),
    //       name: "lianqinetwork",
    //     },
    //     {
    //       path: "juedecision",
    //       component: () =>
    //         import("@/views/datain/juedecision"),
    //       name: "juedecision",
    //     },
    //   ],
    // }
    //  -===================================  详情导入
    // {
    //   path: "/",
    //   component: () => import("@/views/froms/" + webpackInfo.page),
    //   name: "webpackInfo.page",
    //   // path: "/",
    //   // component: () =>
    //   //   import("@/views/froms/phone"),
    //   // name: "phone",
    //   children: [
    //     {
    //       path: "/",
    //       component: () =>
    //         import("@/views/froms/phone"),
    //       name: "phone",
    //     },
    //     {
    //       path: "/broadband",
    //       component: () =>
    //         import("@/views/froms/broadband"),
    //       name: "broadband",
    //     },
    //     {
    //       path: "family",
    //       component: () => import("@/views/froms/family"),
    //       name: "family",
    //     },
    //     {
    //       path: "separate",
    //       component: () =>
    //         import("@/views/froms/separate"),
    //       name: "separate",
    //     },
    //   ]
    // },
    // ---------------------------- 4个../
    // {
    //   path: "/",
    //   component: () =>
    //     import("@/views/grid/" + webpackInfo.page),
    //     name: webpackInfo.page,
    //   // redirect : '/productTable'
    // }

    // {
    //   path: "/cannalTable",
    //   component: () =>
    //     import("@/views/pages/cannalTable"),
    //   name: "cannalTable",
    //   meta: {
    //     navbar: 1, 
    //     title : 'IOP渠道维表' 
    //   }   
    // },
    // {
    //   path: "/productTable",
    //   component: () =>
    //     import("@/views/pages/productTable"),
    //   name: "productTable",
    //   meta: {
    //     navbar: 1,
    //     title : 'IOP产品维表'  
    //   }
    // },
    // {
    //   path: "/family",
    //   component: () =>
    //     import("@/views/pages/family"),
    //   name: "family",
    //   meta: {
    //     navbar: 1, 
    //     title : 'family' 
    //   }   
    // },
    // {
    //   path: "/personal",
    //   component: () =>
    //     import("@/views/pages/personal"),
    //   name: "personal",
    //   meta: {
    //     navbar: 1,
    //     title : 'personal'  
    //   }
    // },
    // {
    //   path: "/report",
    //   component: () =>
    //     import("@/views/pages/report"),
    //   name: "report",
    //   meta: {
    //     navbar: 1,
    //     title : 'report'  
    //   }
    // },
    // {
    //   path: "/",
    //   component: () =>
    //     import("@/views/pages/index"),
    //   name: "index",
    //   meta: {
    //     navbar: 1,
    //     title : '热力图'  
    //   }
    // } 
  ]
});