import { requestGet, requestPost, requestFile, requestExcel, urlGetRequest, requestMultFile } from "@/api/request";
import url from "./url";
import base from "@/api/baseUrl";
// console.log(url)
function getParams (params, name) {
  let baseUrl = process.env.NODE_ENV === "development" ? base.development : base.production;
  name = name ? name : "";
  // let linkUrl = params.url.indexOf('?') == -1 ? params.url + '?r=' + new Date().getTime() : params.url + '&r=' + new Date().getTime();
  // console.log(linkUrl)\]
  // console.log(params)
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
function getStatic () {
  let baseUrl = process.env.NODE_ENV === "development" ? base.development : base.production;
  return Object.assign(
    {},
    {
      url: baseUrl + params.url,
      data: params.data,
      showLoading: params.showLoading,
      timeOut: params.timeOut,
      loadingTime: params.loadingTime,
      isLoading: params.isLoading,
      cache: false
    }
  );
}


//全网结算  查詢
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
//现网结算  首页导入接口
const uploadExcel = function (params) {
  params.url = url.uploadExcel;
  return requestFile(getParams(params));
};
//   数据模板下载接口
const getExcelTemplate = function (params) {
  params.url = url.getExcelTemplate;
  return requestExcel(getParams(params));
};
// const getSummaryData = function (params = {}) {
//     params.url = url.getSummaryData;
//     return requestPost(getParams(params));
// };

const mobile = function (params) {
  params.url = url.mobile;
  return requestPost(getParams(params));
};

const mobileSelect = function (params) {
  params.url = url.mobileSelect;
  return requestPost(getParams(params));
};
// broadband  broadbandSelect  family familySelect government  governmentSelect
const broadband = function (params) {
  params.url = url.broadband;
  return requestPost(getParams(params));
};

const broadbandSelect = function (params) {
  params.url = url.broadbandSelect;
  return requestPost(getParams(params));
};

const family = function (params) {
  params.url = url.family;
  return requestPost(getParams(params));
};

const familySelect = function (params) {
  params.url = url.familySelect;
  return requestPost(getParams(params));
};

const government = function (params) {
  params.url = url.government;
  return requestPost(getParams(params));
};

const governmentSelect = function (params) {
  params.url = url.governmentSelect;
  return requestPost(getParams(params));
};
const querypagedata = function (params) {
  params.url = url.querypagedata;
  return requestPost(getParams(params));
};
const queryregion = function (params) {
  params.url = url.queryregion;
  return requestPost(getParams(params));
};
const querytype = function (params) {
  params.url = url.querytype;
  return requestPost(getParams(params));
};

const queryzhenqipagedata = function (params) {
  params.url = url.queryzhenqipagedata;
  return requestPost(getParams(params));
};
// -----彪哥导入接口 zong
const fileUpload = function (params) {
  params.url = url.fileUpload;
  return requestMultFile(getParams(params));
};
// -----彪哥查询接口  zong
// const findTaRpUsGroupSatisAMid01MByDate = function (params) {
//   params.url = url.findTaRpUsGroupSatisAMid01MByDate;
//   return requestMultFile(getParams(params));
// };
const findTaRpUsGroupSatisAMid01MByDate = function (params) { // 总表查询接口     
  params.url = url.findTaRpUsGroupSatisAMid01MByDate;
  return requestPost(getParams(params));
};

const findFiveGSatisInfo = function (params) {    // 5G客户满意度调研数据明细查询
  params.url = url.findFiveGSatisInfo;
  return requestPost(getParams(params));
};

const findPhotoSatisInfo = function (params) {    //手机客户满意度调研数据明细查询
  params.url = url.findPhotoSatisInfo;
  return requestPost(getParams(params));
};

const findKdSatisInfo = function (params) {   //家宽客户满意度调研数据明细查询
  params.url = url.findKdSatisInfo;
  return requestPost(getParams(params));
};

const findGroupContctSatisInfo = function (params) {   // 联系人满意度调研数据明细查询
  params.url = url.findGroupContctSatisInfo;
  return requestPost(getParams(params));
};

const findGroupKDSatisInfo = function (params) {     //企宽满意度调研数据明细查询
  params.url = url.findGroupKDSatisInfo;
  return requestPost(getParams(params));
};

const findGroupPolicySatisInfo = function (params) {         //决策人满意度调研数据明细查询
  params.url = url.findGroupPolicySatisInfo;
  return requestPost(getParams(params));
};
const findgroupSRLSatisInfo = function (params) {         //专线满意度调研数据明细查询
  params.url = url.findgroupSRLSatisInfo;
  return requestPost(getParams(params));
};


const photoSatisImport = function (params) {         //手机客户明细导入
  params.url = url.photoSatisImport;
  return requestPost(getParams(params));
};

const fiveGSatisImport = function (params) {         //5G客户明细导入
  params.url = url.fiveGSatisImport;
  return requestPost(getParams(params));
};

const kdSatisImport = function (params) {         //家宽客户明细导入
  params.url = url.kdSatisImport;
  return requestPost(getParams(params));
};
const groupPolicySatisImport = function (params) {         //决策人明细导入
  params.url = url.groupPolicySatisImport;
  return requestPost(getParams(params));
};

const groupContctSatisImport = function (params) {        //联系人明细导入
  params.url = url.groupContctSatisImport;
  return requestPost(getParams(params));
};
const groupKDSatisImport = function (params) {         //企宽明细导入
  params.url = url.groupKDSatisImport;
  return requestPost(getParams(params));
};
const groupSRLSatisImport = function (params) {         //专线明细导入
  params.url = url.groupSRLSatisImport;
  return requestPost(getParams(params));
};
const findSalesPromotionInfo = function (params) {         //促销查询
  params.url = url.findSalesPromotionInfo;
  return requestPost(getParams(params));
};
const deleteSalesPromotionInfos = function (params) {         //促销删除
  params.url = url.deleteSalesPromotionInfos;
  return requestPost(getParams(params));
};

const checkExcel = function (params) {   //促销测试导入
  params.url = url.checkExcel;
  return requestPost(getParams(params));
};

const excelFile = function (params) {   //促销导入
  params.url = url.excelFile;
  return requestPost(getParams(params));
};

const findBlackSpotsInfo = function (params) {   //查询质差和黑点
  params.url = url.findBlackSpotsInfo;
  return requestPost(getParams(params));
};

const deleteBlackSpotsInfos = function (params) {   //删除
  params.url = url.deleteBlackSpotsInfos;
  return requestPost(getParams(params));
};

const checkExcels = function (params) {   //  测试导入
  params.url = url.checkExcels;
  return requestPost(getParams(params));
};

const excelFiles = function (params) {   //导入
  params.url = url.excelFiles;
  return requestPost(getParams(params));
};
const findTaDtUsUnsatisEvalMid05DByDeptName = function (params) {   //查询不满客户修复效果分析部门
  params.url = url.findTaDtUsUnsatisEvalMid05DByDeptName;
  return requestPost(getParams(params));
};

const findTaDtUsUnsatisEvalMid05DInfo = function (params) {   //查询不满客户修复效果分析
  params.url = url.findTaDtUsUnsatisEvalMid05DInfo;
  return requestPost(getParams(params));
};

const download5GSatisModel = function (params) {   // 模板下载
  params.url = url.download5GSatisModel;
  return requestExcel(getParams(params));
};

const getDifferences = function (params) {   //查询不满客户修复效果分析
  params.url = url.getDifferences;
  return requestPost(getParams(params));
};
// const getDIffExcelTemplate = function (params) {      //导入原因模板下载
//   params.url = url.getDIffExcelTemplate;
//   return requestExcel(getParams(params));
// };

// const diffUploadExcel = function (params) {   //差异原因导入
//   params.url = url.diffUploadExcel;
//   return requestPost(getParams(params));
// };
const diffUploadExcel = function (params) {
  params.url = url.diffUploadExcel;
  return requestFile(getParams(params));
};


const getDIffExcelTemplate = function (params) {
  params.url = url.getDIffExcelTemplate;
  return requestGet(getParams(params));
};

export default {
  getSummaryData,
  getDetailData,
  getTypes,
  uploadExcel,
  getExcelTemplate,
  mobile,
  mobileSelect,
  broadband,
  broadbandSelect,
  family,
  familySelect,
  government,
  governmentSelect,
  querypagedata,
  queryregion,
  querytype,
  queryzhenqipagedata,

  fileUpload,
  findTaRpUsGroupSatisAMid01MByDate,

  findFiveGSatisInfo,
  findPhotoSatisInfo,
  findKdSatisInfo,
  findGroupContctSatisInfo,
  findGroupKDSatisInfo,
  findGroupPolicySatisInfo,
  findgroupSRLSatisInfo,

  photoSatisImport,
  fiveGSatisImport,
  kdSatisImport,
  groupPolicySatisImport,
  groupContctSatisImport,
  groupKDSatisImport,
  groupSRLSatisImport,

  findSalesPromotionInfo,
  deleteSalesPromotionInfos,
  checkExcel,
  excelFile,
  findBlackSpotsInfo,
  deleteBlackSpotsInfos,
  checkExcels,
  excelFiles,
  findTaDtUsUnsatisEvalMid05DByDeptName,
  findTaDtUsUnsatisEvalMid05DInfo,

  download5GSatisModel,
  getDifferences,
  getDIffExcelTemplate,
  diffUploadExcel,

};
