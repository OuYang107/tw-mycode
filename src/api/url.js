export default {
  /*****************************************iop督办 */
  getToken: "/getToken", // 接口名
  // excelFile: '/Common/excelFile', // 上传
  findUserInfos: '/Common/findUserInfos', // 获取loginName
  findUserInfo: '/Common/findUserInfo', // 获取用户权限
  prodFindProdInfo: '/IopProdDTableController/findProdInfo', // IOP产品维表查询
  prodExcelFile: '/IopProdDTableController/excelFile', // IOP产品维表导入
  prodUpdateProdInfo: '/IopProdDTableController/updateProdInfo', // IOP产品维表修改
  prodInsertProdInfo: '/IopProdDTableController/insertProdInfo', // IOP产品新增
  prodRemoveProdByCode: '/IopProdDTableController/removeProdByCode', //IOP产品维表删除
  prodCheckProdInfo: '/IopProdDTableController/checkProdInfo', //IOP产品维表导入监测
  // ProdDownloadProdExcel: '/IopChnnlDTableController/downloadProdExcel', // IOP渠道维表下载模板
  // prodDownProdInfo: '/IopProdDTableController/downProdInfo', // IOP导出
  canalExcelFile: '/IopChnnlDTableController/excelFile', // IOP渠道维表导入
  canalFindChnnlInfo: '/IopChnnlDTableController/findChnnlInfo', // IOP渠道维表查询
  canalUpdateChnlInfo: '/IopChnnlDTableController/updateChnlInfo', // IOP渠道维表修改  
  canalInsertProdInfo: '/IopChnnlDTableController/insertChnlInfo', // IOP渠道维表新增
  canalCheckChnnlInfo: '/IopChnnlDTableController/checkChnnlInfo', //IOP渠道维表导入监测
  canalRemoveChnlByCode: '/IopChnnlDTableController/removeChnlByCode', //IOP渠道维表删除

  /*调度协同*****************************************/
  // findCBdiIntfInfo: '/scheduling/schedulingController/findCBdiIntfInfo', //调度协同
  findCBdiIntfInfo: '/schedulingController/findCBdiIntfInfo',
  findSchedulingReloadInfo: '/CBdiReloadInfoController/findSchedulingReloadInfo',
  updateSchedulingReloadInfo: '/CBdiReloadInfoController/updateSchedulingReloadInfo',

  /*销售产品列表*****************************************/
  findMenuInfo: '/salesGoods/findMenuInfo', //查询菜单列表
  findProdInfo: '/salesGoods/findProdInfo', //查询产品列表
  updateProdInfo: '/salesGoods/updateProdInfo', //修改产品信息

  /*互动专区*****************************************/
  findActivemonitorHelpInfo: '/BaseController/findActivemonitorHelpInfo', //帮助查询
  importData: '/BaseController/importData', //帮助导入文件
  findActivemonitorQuestionInfo: '/BaseController/findActivemonitorQuestionInfo', //问题与建议查询
  importDataQuestion: '/BaseController/importDataQuestion', //导入


  findActiveOfferOffInfo: "/findActiveOfferOffInfo", // 正式
  findTCkmSegmentInfo: '/CrmProdController/findTCkmSegmentInfo', // 查询客户群id,客户群名称,引到期时间
  findTdCaCrmCampnConfigInfo: '/CrmProdController/findTdCaCrmCampnConfigInfo', // 查询目录
  findTdCaCrmCampnConfigProdInfo: '/CrmProdController/findTdCaCrmCampnConfigProdInfo', // 查询产品id，产品名称，引用客户群数量
  // findActiveOfferOffInfo: '/findActiveOfferActInfo' //  测试 

  getSummaryData: '/summary/getSummaryData',    //首页查询
  getDetailData: "/detail/getDetailData",   //详情查询接口
  getTypes: '/summary/getTypes',     // 首页的全量业务类型接口
  uploadExcel: "/system/uploadExcel", //首页导入接口
  getExcelTemplate: "/system/getExcelTemplate", //数据模板下载
  // getSummaryData:"/summary/getSummaryData"

  mobile: "/dissatisfied/mobile",   //手机不满查询接口
  mobileSelect: "/dissatisfied/mobileSelect", //手机不满下拉框接口

  broadband: '/dissatisfied/broadband',   //宽带不满接口
  broadbandSelect: '/dissatisfied/broadbandSelect', //宽带不满下拉框接口

  family: '/dissatisfied/family',   //家庭不满接口
  familySelect: '/dissatisfied/familySelect',     //家庭不满下拉框接口

  government: '/dissatisfied/government',     //政企不满接口
  governmentSelect: '/dissatisfied/governmentSelect', //政企不满下拉框接口

  querypagedata: "/querypagedata",
  queryregion: '/queryregion',
  querytype: "/querytype",
  queryzhenqipagedata: "/queryzhenqipagedata",

  ///SatisfactionImport/fileUpload        详情导入接口        总表
  fileUpload: '/SatisfactionImport/fileUpload',
  // /SatisfactionImport/findTaRpUsGroupSatisAMid01MByDate   详情查询接口      总表
  findTaRpUsGroupSatisAMid01MByDate: "/SatisfactionImport/findTaRpUsGroupSatisAMid01MByDate",

  // /SatisfactionImport/findFiveGSatisInfo 5G客户满意度调研数据明细查询
  findFiveGSatisInfo: "/SatisfactionImport/findFiveGSatisInfo",

  // /SatisfactionImport/findPhotoSatisInfo  手机客户满意度调研数据明细查询
  findPhotoSatisInfo: "/SatisfactionImport/findPhotoSatisInfo",

  // /SatisfactionImport/findKdSatisInfo家宽客户满意度调研数据明细查询
  findKdSatisInfo: "/SatisfactionImport/findKdSatisInfo",

  // /SatisfactionImport/findGroupContctSatisInfo 联系人满意度调研数据明细查询
  findGroupContctSatisInfo: "/SatisfactionImport/findGroupContctSatisInfo",

  // /SatisfactionImport/findGroupKDSatisInfo企宽满意度调研数据明细查询
  findGroupKDSatisInfo: "/SatisfactionImport/findGroupKDSatisInfo",

  //  /SatisfactionImport/findGroupPolicySatisInfo决策人满意度调研数据明细查询
  findGroupPolicySatisInfo: "/SatisfactionImport/findGroupPolicySatisInfo",

  //  /SatisfactionImport/findgroupSRLSatisInfo  专线满意度调研数据明细查询,
  findgroupSRLSatisInfo: "/SatisfactionImport/findgroupSRLSatisInfo",
  // ===============================================================================
  // /SatisfactionImport/photoSatisImport 手机客户满意度调研数据明细导入
  photoSatisImport: "/SatisfactionImport/photoSatisImport",

  // /SatisfactionImport/fiveGSatisImport  5G客户满意度调研数据明细导入
  fiveGSatisImport: "/SatisfactionImport/fiveGSatisImport",

  // /SatisfactionImport/kdSatisImport  家宽客户满意度调研数据明细导入 
  kdSatisImport: "/SatisfactionImport/kdSatisImport",

  // /SatisfactionImport/groupPolicySatisImport 决策人满意度调研数据明细导入
  groupPolicySatisImport: "/SatisfactionImport/groupPolicySatisImport",

  // /SatisfactionImport/groupContctSatisImport  联系人满意度调研数据明细导入
  groupContctSatisImport: "/SatisfactionImport/groupContctSatisImport",

  // /SatisfactionImport/groupKDSatisImport  企宽满意度调研数据明细导入
  groupKDSatisImport: "/SatisfactionImport/groupKDSatisImport",

  // /SatisfactionImport/groupSRLSatisImport  专线满意度调研数据明细导入
  groupSRLSatisImport: "/SatisfactionImport/groupSRLSatisImport",

  //  新利哥的三个导入
  // /salesPromotion/findSalesPromotionInfo  查询促销活动
  findSalesPromotionInfo: "/SalesPromotion/findSalesPromotionInfo",

  // /salesPromotion/deleteSalesPromotionInfos  删除促销活动
  deleteSalesPromotionInfos: "/SalesPromotion/deleteSalesPromotionInfos",

  // /salesPromotion/checkExcel  促销活动检测导入
  checkExcel: "/SalesPromotion/checkExcel",

  // /SalesPromotion/excelFile 促销活动导入
  excelFile: "/SalesPromotion/excelFile",

  // /BlackSpotsController/findBlackSpotsInfo  查询质差和黑点
  findBlackSpotsInfo: "/BlackSpotsController/findBlackSpotsInfo",

  // /BlackSpotsController/deleteBlackSpotsInfos  删除质差和黑点
  deleteBlackSpotsInfos: "/BlackSpotsController/deleteBlackSpotsInfos",

  // /BlackSpotsController/checkExcel  质差和黑点检测导入  ---------检测导入和促销活动检测导入一样
  checkExcels: "/BlackSpotsController/checkExcel",

  // /BlackSpotsController/excelFile 质差和黑点导入------- 上同
  excelFiles: "/BlackSpotsController/excelFile",

  // /TaDtUsUnsatisEvalMid05DController/findTaDtUsUnsatisEvalMid05DByDeptName 查询不满客户修复效果分析部门
  findTaDtUsUnsatisEvalMid05DByDeptName: "/TaDtUsUnsatisEvalMid05DController/findTaDtUsUnsatisEvalMid05DByDeptName",

  //   /TaDtUsUnsatisEvalMid05DController/findTaDtUsUnsatisEvalMid05DInfo
  // 查询不满客户修复效果分析
  findTaDtUsUnsatisEvalMid05DInfo: "/TaDtUsUnsatisEvalMid05DController/findTaDtUsUnsatisEvalMid05DInfo",

  // /SatisfactionImport/download5GSatisModel集团满意度模板下载
  download5GSatisModel: "/SatisfactionImport/download5GSatisModel",

  // /detail/getDifferences 全网结算新增页面接口
  getDifferences: "/detail/getDifferences",

  // /system/getDIffExcelTemplate 差异原因模板下载
  getDIffExcelTemplate: "/system/getDIffExcelTemplate",

  // /system/diffUploadExcel差异原因导入接口
  diffUploadExcel: "/system/diffUploadExcel"
};
