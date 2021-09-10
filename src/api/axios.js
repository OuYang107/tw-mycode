import { requestGet, requestPost,requestFile,requestExcel } from "./request";
import url from "./url";
import base from "@/api/baseUrl";

function getParams (params,name) {
  let baseUrl = process.env.NODE_ENV === "development" ? base.development : base.production;
  name = name ? name : "";
  console.log(params)
  return Object.assign(
    {},
    {
        url: baseUrl + name + params.url,
        data: params.data || "",
        showLoading: params.showLoading || "",
        timeOut: params.timeOut || "",
        loadingTime: params.loadingTime || "",
        isLoading: params.isLoading || ""
    }
);
}
const loginSso = function (params) {
  params.url = url.loginSso;
  return requestPost(getParams(params));
};
// const getToken = function (params) {
//   params.url = url.getToken;
//   return requestPost(getParams(params));
// };
// const excelFile = function (params) {
//   params.url = url.excelFile;
//   return requestFile(getParams(params));
// };
// 获取用户权限
const findUserInfo = function (params) {
  params.url = url.findUserInfo;
  return requestPost(getParams(params));
};  
// 获取用户权限
const findUserInfos = function (params) {
  params.url = url.findUserInfos;
  return requestPost(getParams(params));
};  
// IOP产品维表导入
const prodExcelFile = function (params) {
  params.url = url.prodExcelFile;
  return requestFile(getParams(params));
};
// IOP产品维表查询
const prodFindProdInfo = function (params) {
  params.url = url.prodFindProdInfo;
  return requestPost(getParams(params));
};
// IOP产品维表修改
const prodUpdateProdInfo = function (params) {
  params.url = url.prodUpdateProdInfo;
  return requestPost(getParams(params));
};
// IOP产品新增
const prodInsertProdInfo = function (params) {
  params.url = url.prodInsertProdInfo;
  return requestPost(getParams(params));
};
// const prodDownloadProdExcel = function (params) {
//   params.url = url.prodDownloadProdExcel;
//   return requestPost(getParams(params));
// };
// IOP渠道维表导入
const canalExcelFile = function (params) {
  params.url = url.canalExcelFile;
  return requestFile(getParams(params));
};
// IOP渠道维表查询
const canalFindChnnlInfo = function (params) {
  params.url = url.canalFindChnnlInfo;
  return requestPost(getParams(params));
};
// IOP渠道维表修改 
const canalUpdateChnlInfo = function (params) {
  params.url = url.canalUpdateChnlInfo;
  return requestPost(getParams(params));
};
// IOP渠道维表新增
const canalInsertProdInfo = function (params) {
  params.url = url.canalInsertProdInfo;
  return requestPost(getParams(params));
};
//IOP渠道维表导入监测
const canalCheckChnnlInfo = function (params) {
  params.url = url.canalCheckChnnlInfo;
  return requestFile(getParams(params));
};
//IOP渠道维表删除
const canalRemoveChnlByCode = function (params) {
  params.url = url.canalRemoveChnlByCode;
  return requestPost(getParams(params));
};
//IOP产品维表导入监测
const prodCheckProdInfo = function (params) {
  params.url = url.prodCheckProdInfo;
  return requestFile(getParams(params));
};
//IOP产品维表删除
const prodRemoveProdByCode = function (params) {
  params.url = url.prodRemoveProdByCode;
  return requestPost(getParams(params));
};




//IOP销售产品  菜单
const findMenuInfo = function (params) {
  params.url = url.findMenuInfo;
  return requestPost(getParams(params));
};

//IOP销售产品  列表
const findProdInfo = function (params) {
  params.url = url.findProdInfo;
  return requestPost(getParams(params));
};

//IOP销售产品  修改
const updateProdInfo = function (params) {
  params.url = url.updateProdInfo;
  return requestPost(getParams(params));
};

//调度协同
const findCBdiIntfInfo = function (params) {
  params.url = url.findCBdiIntfInfo;
  return requestPost(getParams(params));
};

//调度协同  华为发起
const findSchedulingReloadInfo = function (params) {
  params.url = url.findSchedulingReloadInfo;
  return requestPost(getParams(params));
};

//调度协同  对端发起  修改
const updateSchedulingReloadInfo = function (params) {
  params.url = url.updateSchedulingReloadInfo;
  return requestPost(getParams(params));
};


//互动专区  帮助查询
const findActivemonitorHelpInfo = function (params) {
  params.url = url.findActivemonitorHelpInfo;
  return requestPost(getParams(params));
};

//互动专区 
const findActivemonitorQuestionInfo = function (params) {
  params.url = url.findActivemonitorQuestionInfo;
  return requestPost(getParams(params));
};


//全現網結算  查詢
const getSummaryData = function (params) {
  params.url = url.getSummaryData;
  return requestPost(getParams(params));
};
//现网结算  详情查询接口

const getDetailData = function (params) {
  params.url = url.getDetailData;
  return requestPost(getParams(params));
};

//现网结算  首页全量类型接口
const getTypes = function (params) {
    params.url = url.getTypes;
    return requestPost(getParams(params));
  };



export default {
  getTypes,
  getDetailData,
  getSummaryData,
  loginSso,
  findUserInfos,
  findUserInfo,
  prodExcelFile,
  prodFindProdInfo,
  prodUpdateProdInfo,
  prodInsertProdInfo,
  prodCheckProdInfo,
  canalExcelFile,
  canalFindChnnlInfo,
  canalUpdateChnlInfo,
  canalInsertProdInfo,
  canalCheckChnnlInfo,
  canalRemoveChnlByCode,
  prodRemoveProdByCode,
  findCBdiIntfInfo,
  findMenuInfo,
  findProdInfo,
  updateProdInfo,
  findSchedulingReloadInfo,
  updateSchedulingReloadInfo,
  findActivemonitorHelpInfo,
  findActivemonitorQuestionInfo,
};
