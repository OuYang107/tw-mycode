<template>
  <div class="page-container common-css">
    <el-row>
      <el-col :span="24">
        <div class="grid-content"
             v-if="isshow==1">
          总体概览-全网性业务结算差异对比汇总
        </div>
      </el-col>
    </el-row>
    <div class="page-main">
      <div class="page-menu"
           style="margin-top: 10px"
           v-if="isshow==1">
        <el-row>
          <el-col :span="6"
                  style="margin-left: 50px">
            <div class="flex-cen">
              结算月份：
              <el-date-picker style="width: 191px"
                              v-model="searchData.statisMonth"
                              type="month"
                              placeholder="请选择结算月份"
                              size="mini"
                              format="yyyyMM"
                              value-format="yyyyMM"
                              :editable="false">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="flex-cen">
              业务线：
              <el-select v-model="searchData.busiType"
                         placeholder="请选择业务线"
                         size="mini"
                         style="width: 205px">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"
                           @click.native="select(item.value)">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="5"
                  style="margin-left: 30px">
            <div class="flex-cen">
              结算单：
              <el-input style="width: 140px"
                        v-model="searchData.settleId"
                        size="mini"></el-input>
            </div>
          </el-col>
          <el-button type="primary"
                     size="mini"
                     @click="search">搜索</el-button>

          <el-button size="mini"
                     type="success"
                     @click="dialogVisible = true">导入</el-button>
          <el-button size="mini"
                     type="success"
                     @click="dialogVisibleone = true">原因导入</el-button>
        </el-row>
        <el-row style="margin-top: 10px">
          <el-col :span="6"
                  style="margin-left: 50px">
            <div class="flex-cen">
              本月结入差异率是否为0：
              <el-select style="width: 100px"
                         size="mini"
                         v-model="searchData.jieruisfilter"
                         placeholder="请选择">
                <el-option v-for="item in jieruisfilter"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="flex-cen">
              本月结出差异率是否为0：
              <el-select style="width: 100px"
                         size="mini "
                         v-model="searchData.jiechuisfilter"
                         placeholder="请选择">
                <el-option v-for="item in jiechuisfilter"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <!-- <el-button type="success" style="margin-left:30px" size="small" @click="uploadExcel">导入</el-button> -->
        <!-- <el-button
            type="warning"
            size="mini"
          >导出</el-button> -->

      </div>
      <!-- <div class="">
         结算月份 : {{this.searchData.statisMonth}}
      </div> -->
      <div style="width: 100%; margin-top: 10px"
           v-if="isshow==1">
        <el-table :data="tableData"
                  style="width: 100%"
                  :header-cell-style="{ background: '#eaeff7', color: '#444' }">
          <el-table-column prop="statisMonth"
                           label="结算月份"
                           min-width="80"
                           align="center">
          </el-table-column>
          <el-table-column label="结算单信息"
                           align="center">
            <el-table-column align="center"
                             prop="busiType"
                             label="业务线"
                             min-width="80">
            </el-table-column>
            <el-table-column align="center"
                             prop="settleId"
                             label="编码"
                             min-width="55">
            </el-table-column>
            <el-table-column align="center"
                             prop="settleName"
                             label="名称"
                             min-width="150">
            </el-table-column>
          </el-table-column>
          <el-table-column label="本月结入"
                           align="center">
            <el-table-column align="center"
                             prop="taxMoneySettleIn"
                             label="省内(元)"
                             min-width="90">
            </el-table-column>
            <el-table-column align="center"
                             prop="taxMoneySettleInJiTuan"
                             label="集团(元)"
                             min-width="90"
                             class-name="isaction">
            </el-table-column>
            <el-table-column align="center"
                             prop="diffMoneyIn"
                             label="差异费用(元)"
                             min-width="100">
            </el-table-column>
            <el-table-column align="center"
                             prop="diffMoneyRateIn"
                             label="结入差异率(%)"
                             min-width="90">
            </el-table-column>
          </el-table-column>
          <el-table-column label="本月结出"
                           align="center">
            <el-table-column align="center"
                             prop="taxMoneySettleOut"
                             label="省内(元)"
                             min-width="90">
            </el-table-column>
            <el-table-column align="center"
                             prop="taxMoneySettleOutJiTuan"
                             label="集团(元)"
                             min-width="90"
                             class-name="isaction">
            </el-table-column>
            <el-table-column align="center"
                             prop="diffMoneyOut"
                             label="差异费用(元)"
                             min-width="100">
            </el-table-column>
            <el-table-column align="center"
                             prop="diffMoneyRateOut"
                             label="结出差异率(%)"
                             min-width="80">
            </el-table-column>
          </el-table-column>
          <el-table-column align="center"
                           label="明细查看"
                           min-width="80">
            <template slot-scope="scope">
              <a href="#"
                 @click="handeleDetail(scope.row.settleId)">{{ scope.row.settleId }}明细查看</a>
            </template>
          </el-table-column>
          <el-table-column align="center"
                           label="差异原因"
                           min-width="80">
            <template slot-scope="scope">
              <a href="#"
                 @click="account(scope.row.settleId)">{{ scope.row.settleId }}差异原因</a>
            </template>
          </el-table-column>
        </el-table>
        <div class="flex-end">
          <el-pagination :current-page.sync="searchData.pageNo"
                         :page-size="searchData.pageSize"
                         :total="searchData.total"
                         style="margin-top: 20px; text-align: center"
                         :page-sizes="[1, 5, 10, 30]"
                         layout="total, sizes, prev, pager, next, jumper"
                         @size-change="handleSizeChange"
                         @current-change="handleCurrentChange" />
        </div>
      </div>
      <div v-else-if="isshow==2">
        <el-row>
          <el-col :span="24">
            <div class="grid-content">差异说明</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6"
                  style="margin-left: 50px; margin-bottom: 10px; margin-top: 10px">
            <div class="flex-cen">
              结算月份：
              <el-date-picker style="width: 160px"
                              v-model="searchData.statisMonth"
                              type="month"
                              placeholder="请选择结算月份"
                              size="mini"
                              format="yyyyMM"
                              value-format="yyyyMM"
                              :editable="false">
              </el-date-picker>
            </div>
          </el-col>
          <el-button type="primary"
                     style="margin-left: 750px; margin-top: 10px"
                     size="mini"
                     @click="revert">返回</el-button>
        </el-row>
        <el-table :data="tableDatas"
                  :header-cell-style="{ background: '#eaeff7', color: '#444' }">
          <el-table-column :label="item['FIELD_NAME']"
                           :prop="item['UPPER(FIELD)']"
                           :class-name="getClass(item['UPPER(FIELD)'])"
                           align="center"
                           v-for="(item, index) in searchDatas"
                           :key="index">
            <!-- :class-name= "`${item['UPPER(FIELD)'] == 'SETTLE_IN_TAX_MONEY' ? 'isaction' : ''}${item['UPPER(FIELD)'] == 'SETTLE_OUT_TAX_MONEY' ? 'isaction' : ''}`"  -->
            <!-- "item['UPPER(FIELD)'] == ('SETTLE_IN_TAX_MONEY' && 'SETTLE_OUT_TAX_MONEY') ? 'isaction' : '' "
                :class-name="(item['UPPER(FIELD)'] == 'ID') ? 'isaction' : '' "
                `${condition1 ? 'font' : ''}${condition1 ? ' size' : ''}` -->
            <!--  :min-width="item['FIELD_NAME'].length * 30 + 'px'" -->
          </el-table-column>
        </el-table>
        <el-pagination :current-page.sync="searchDatas.pageNo"
                       :page-size="searchDatas.pageSize"
                       :total="searchDatas.total"
                       style="margin-top: 20px; text-align: center"
                       :page-sizes="[1, 5, 10, 30]"
                       layout="total, sizes, prev, pager, next, jumper"
                       @size-change="handleSizeChangeone"
                       @current-change="handleCurrentChangeone" />
      </div>

      <div v-else-if="isshow==3">
        <el-row>
          <el-col :span="24">
            <div class="grid-content">差异原因</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6"
                  style="margin-left: 50px; margin-bottom: 10px; margin-top: 10px">
            <div class="flex-cen">
              结算月份：
              <el-date-picker style="width: 160px"
                              v-model="searchData.statisMonth"
                              type="month"
                              placeholder="请选择结算月份"
                              size="mini"
                              format="yyyyMM"
                              value-format="yyyyMM"
                              :editable="false">
              </el-date-picker>
            </div>
          </el-col>
          <el-button type="primary"
                     style="margin-left: 750px; margin-top: 10px"
                     size="mini"
                     @click="revert">返回</el-button>
        </el-row>
        <el-table :data="tableDatas"
                  style="width: 100%"
                  fit
                  :header-cell-style="{ background: '#eaeff7', color: '#444' }">
          <!-- <el-table-column :label="item['FIELD_NAME']"
                           :prop="item['UPPER(FIELD)']"
                           :class-name="getClass(item['UPPER(FIELD)'])"
                           align="center"
                           v-for="(item, index) in searchDatas"
                           :key="index">
          </el-table-column> -->
          <el-table-column label="业务类型"
                           prop="BUSI_TYPE"
                           width="180"
                           align="center">
          </el-table-column>
          <el-table-column label="结算单编码"
                           prop="SETTLE_ID"
                           width="120"
                           align="center">
          </el-table-column>
          <el-table-column label="结算单名称"
                           prop="SETTLE_NAME"
                           width="180"
                           align="center">
          </el-table-column>
          <el-table-column label="差异原因说明"
                           prop="DIFFERENCE_REASON_EXPLAIN"
                           width="783"
                           align="center">
          </el-table-column>
        </el-table>
        <el-pagination :current-page.sync="searchDatas.pageNo"
                       :page-size="searchDatas.pageSize"
                       :total="searchDatas.total"
                       style="margin-top: 20px; text-align: center"
                       :page-sizes="[1, 5, 10, 30]"
                       layout="total, sizes, prev, pager, next, jumper"
                       @size-change="handleSizeChangetow"
                       @current-change="handleCurrentChangetow" />
      </div>
    </div>

    <el-dialog :visible.sync="dialogVisible"
               :before-close="handleDialogClose"
               width="60%">
      <div style="text-align: right">
        <el-button @click="getDownload"
                   type="success"
                   size="mini">模板下载</el-button>
      </div>
      <el-upload class="upload-demo"
                 drag
                 action="#"
                 :http-request="uploadFiles"
                 :limit="1"
                 ref="upfiles"
                 list-type="excel"
                 multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip"
             slot="tip">
          只能上传Excel文件，且不超过500kb
        </div>
      </el-upload>
      <!-- <el-upload
            class="upload-demo"
            ref="upload"
            action="#"
            :http-request="dialogVisible"
            :limit="1">下载文件</el-upload> -->
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="clearFiles"
                   size="mini">取 消</el-button>
        <el-button type="primary"
                   @click="confirm"
                   size="mini">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync="dialogVisibleone"
               :before-close="handleDialogCloseone"
               width="60%">
      <div style="text-align: right">
        <el-button @click="getDownloadone"
                   type="success"
                   size="mini">模板下载</el-button>
      </div>
      <el-upload class="upload-demo"
                 drag
                 action="#"
                 :http-request="uploadFiless"
                 :limit="1"
                 ref="upfilesone"
                 list-type="excel"
                 multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip"
             slot="tip">
          只能上传Excel文件，且不超过500kb
        </div>
      </el-upload>
      <!-- <el-upload
            class="upload-demo"
            ref="upload"
            action="#"
            :http-request="dialogVisible"
            :limit="1">下载文件</el-upload> -->
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="clearFilesone"
                   size="mini">取 消</el-button>
        <el-button type="primary"
                   @click="confirmone"
                   size="mini">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 导入重复文件弹出框 -->
    <!-- <el-dialog
  :visible.sync="dialogVisible"
  :before-close="handleDialogClose"
  width="30%"
>
  <span slot="footer" class="dialog-footer">
    <el-button @click="clearFiles()" size="mini">取 消</el-button>
    <el-button type="primary" @click="confirm()" size="mini">确 定</el-button>
  </span>
</el-dialog> -->
  </div>
</template>
<script>
import apiSend from "@/api/httpRequest.js";
import baseUrl from "@/api/baseUrl";
import requestUrl from "@/api/url";
var qs = require("qs"); //    使用application/x-www-form-urlencoded格式
import fileRequest from "@/api/export.js";
// console.log(fileRequest);
export default {
  data () {
    const current_year = new Date().getFullYear();
    const current_month =
      new Date().getMonth() + 1 >= 10
        ? new Date().getMonth() + 1
        : "0" + (new Date().getMonth() + 1);
    // const current_day = new Date().getDate() >= 10 ? new Date().getDate(): '0' + new Date().getDate();
    const currentDate = current_year + current_month;
    // parseInt(currentDate)

    // console.log(typeof parseInt(currentDate))
    return {
      dialogVisible: false,
      dialogVisibleone: false,
      isshow: 1,
      jieruisfilter: [
        {
          value: null,
          label: '全部'
        }
        , {
          value: false,
          label: '是'
        },
        {
          value: true,
          label: '否'
        }
      ],
      jiechuisfilter: [
        {
          value: null,
          label: '全部'
        }
        , {
          value: false,
          label: '是'
        },
        {
          value: true,
          label: '否'
        }
      ],
      searchData: {
        jiechuisfilter: "",
        jieruisfilter: "",
        statisMonth: currentDate,
        busiType: "",
        settleId: "",
        total: 0,
        pageSize: 10,
        pageNo: 1,
      },
      DescriptionData: {
        settleId: "settleId",
        statisMonth: currentDate,
        pageSize: 10,
        pageNo: 1,
      },
      pagethreeData: {
        settleId: "settleId",
        statisMonth: currentDate,
        pageSize: 10,
        pageNo: 1,
      },
      options: [
        // {
        //   value: '全量业务',
        //   // label: '全量业务'
        //   label: '全量业务'
        //      }
        //        ,{
        //     value: '单量业务',
        //     // label: '全量业务'
        //     label: '单量业务'
        //      }
      ],
      TemplateData: {
        statisMonth: "",
        pageSize: "2",
        pageNo: "1",
        busiType: "",
      },
      tableData: [],
      //详情分页
      searchDatas: {
        total: 0,
        pageSize: 10,
        pageNo: 1,
      },
      tableDatas: [],
      detailId: "",
      files: {
        file: "",
        iscover: false,
      },
      filesone: {
        file: "",
        iscover: false,
      },
    };
  },

  computed: {
    //  length(){
    //    return  this.searchDatas.forEach( item => {
    //       item.FIELD_NAME.length * 20
    //      })
    //      }
  },
  created () { },
  mounted () {
    this.marquee();
    this.findTable();
  },
  methods: {
    // cellstyle (row) {
    //   // console.log(row.row.diffMoneyRateIn)
    //   // console.log(row.row.diffMoneyRateOut)
    //   if (row.column.label === '结入差异率(%)') {
    //     let rateIn = row.row.diffMoneyRateIn || "";
    //     return rateIn.split('%')[0] < 100 ? 'color :red;' : 'color:green';
    //   }
    //   if (row.column.label === '结出差异率(%)') {
    //     let rateOut = row.row.diffMoneyRateOut || "";
    //     return rateOut.split('%')[0] < 100 ? 'color :red;' : 'color:green';
    //   }
    //   return ''
    // },
    getClass (current) {
      // console.log(current);
      // return current == ('SETTLE_IN_TAX_MONEY' || 'SETTLE_OUT_TAX_MONEY') ? 'isaction' : '' ;
      return current == "SETTLE_IN_TAX_MONEY" ||
        current == "SETTLE_OUT_TAX_MONEY"
        ? "isaction"
        : "";
    },
    handleDialogClose () {
      this.dialogVisible = false;
      this.$refs["upfiles"].clearFiles();
    },
    handleDialogCloseone () {
      this.dialogVisibleone = false;
      this.$refs["upfilesone"].clearFiles();
    },
    //取消按钮
    clearFiles () {
      // clearFiles
      this.dialogVisible = false;
      this.$refs["upfiles"].clearFiles();
    },
    clearFilesone () {
      // clearFiles
      this.dialogVisibleone = false;
      this.$refs["upfilesone"].clearFiles();
    },
    //确认
    confirm () {
      this.$refs["upfiles"].clearFiles();
      this.dialogVisible = false;
      if (this.files.file == "") {
        this.$message.warning("请上传文件！");
        return;
      }
      apiSend
        .uploadExcel({ data: this.files })
        .then((res) => {
          this.$message.warning(res.data.data.msg + "!");
          console.log(res.data.data);
          if (res.data.data.msg == "导入成功") {
            this.findTable(); //调完导入接口后对插入的数据查询
          }
          if (res.data.data.code == 2) {
            this.$confirm(res.data.data.msg + ", 确认提交?", "提示", {
              confirmButtomText: "确认",
              cancelButtonText: "取消",
              type: "warning",
            })
              .then((res) => {
                if (confirm) {
                  //再调接口
                  this.files.iscover = true;
                  apiSend.uploadExcel({ data: this.files })
                    .then((res) => {
                      this.files.iscover = false;
                      this.findTable(); //调完导入接口后查询
                      // this.$message.warning(res.data.data.msg + "!");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              })
              .catch((err) => {
                console.log(err);
              });
            return;
          }
        })
        .catch((err) => {
          console.log(err);
          this.$message.warning(err.data.data.msg + "!");
        });
    },
    confirmone () {       //
      this.$refs["upfilesone"].clearFiles();
      this.dialogVisibleone = false;
      // console.log(this.filesone.file, 1111111)
      // console.log(this.filesone.file)
      if (this.filesone.file == "") {
        this.$message.warning("请上传文件！111111111111");
        return;
      }
      apiSend
        .diffUploadExcel({ data: this.filesone })
        .then((res) => {
          this.$message.warning(res.data.data.msg + "!");
          // console.log(res);
          if (res.data.data.msg == "导入成功") {
            this.findTable(); //调完导入接口后对插入的数据查询
          }
          if (res.data.data.code == 2) {
            // this.$message.warning('导入失败,第2行数据已存在，是否进行覆盖导入!');
            this.$confirm(res.data.data.msg + ", 确认提交?", "提示", {
              confirmButtomText: "确认",
              cancelButtonText: "取消",
              type: "warning",
            })
              .then((res) => {
                if (confirm) {
                  //再调接口
                  this.filesone.iscover = true;
                  apiSend.diffUploadExcel({ data: this.filesone })
                    .then((res) => {
                      this.filesone.iscover = false;
                      this.findTable(); //调完导入接口后查询
                      // this.$message.warning(res.data.data.msg + "!");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              })
              .catch((err) => {
                console.log(err);
              });
            return;
          }
        })
        .catch((err) => {
          console.log(err);
          // this.$message.warning(err.data.data.msg + "!");
          this.$message.warning(err.data.msg + "!");

        });
    },
    //模板下载按钮
    getDownload () {
      this.TemplateData["statisMonth"] = this.searchData["statisMonth"];
      const base =
        process.env.NODE_ENV == "development"
          ? baseUrl.development
          : baseUrl.production;
      window.open(
        base +
        requestUrl.getExcelTemplate +
        "?statisMonth=" +
        this.TemplateData["statisMonth"],
        "_blank"
      );
    },
    //模板下载按钮2
    getDownloadone () {
      // this.TemplateData["statisMonth"] = this.searchData["statisMonth"];
      // apiSend.getDIffExcelTemplate({ data: this.TemplateData["statisMonth"] }).then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })
      this.TemplateData["statisMonth"] = this.searchData["statisMonth"];
      const base =
        process.env.NODE_ENV == "development"
          ? baseUrl.development
          : baseUrl.production;
      window.open(
        base +
        requestUrl.getDIffExcelTemplate +
        "?statisMonth=" +
        this.TemplateData["statisMonth"],
        "_blank"
      );
    },
    //导入按钮
    uploadFiles (e) {
      this.files.file = e.file;
    },
    //导入按钮2
    uploadFiless (e) {
      this.filesone.file = e.file;
    },
    //全量业务选择
    select (value) {
      this.searchData.busiType = value;
    },
    //搜索按钮
    search () {
      this.findTable();
    },
    // 返回按钮
    revert () {
      this.isshow = 1;
    },
    //现网  全量业务接口
    marquee () {
      apiSend
        .getTypes({})
        .then((res) => {
          this.options = res.data.data.types;
          //  obj ={}
          this.options.unshift({ label: "全部", value: "" })
          //  console.log(res)
          //  console.log(res.data.data.types[0].value)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    findTable () {
      // this.TemplateData['statisMonth'] = this.DescriptionData['statisMonth'];
      // debugger    首页搜索接口
      // console.log(this.searchData.busiType);
      // if (this.searchData.busiType == "") {
      //   this.$message.warning("请选择业务类型!");
      //   return;
      // }
      apiSend
        .getSummaryData({ data: this.searchData })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.data.records;
          //  this.total = Number(res.data.total)
          this.searchData.total = res.data.data.total;
          //  -------------
          //  this.DescriptionData.settleId = res.data.settleId
          //  console.log(this.tableData)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //现网详情接口
    handeleDetail (id) {
      this.isshow = 2;
      this.detailId = id;
      this.DescriptionData["statisMonth"] = this.searchData["statisMonth"];
      this.DescriptionData["settleId"] = id;
      apiSend
        .getDetailData({ data: this.DescriptionData })
        .then((res) => {
          this.tableDatas = res.data.data.records;
          let current = res.data.data.fields.filter(
            (item) => !(item["FIELD_NAME"] && item["FIELD_NAME"] == "统计月份")
          );
          this.searchDatas = current;
          this.searchDatas.total = res.data.data.total;
          // console.log(res.data.fields[0].UPPER(FIELD))
          //  console.log(res.data.fields(value).forEach( item => {
          //   return item(value)
          //  })  )
          //  console.log(this.tableDatas)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    account (id) {   //差异原因
      this.isshow = 3;
      this.detailId = id;
      this.pagethreeData["statisMonth"] = this.searchData["statisMonth"];
      this.pagethreeData["settleId"] = id;

      apiSend
        .getDifferences({ data: this.pagethreeData })
        .then((res) => {
          console.log(res)
          this.tableDatas = res.data.data.records;
          let current = res.data.data.fields.filter(
            (item) => !(item["FIELD_NAME"] && item["FIELD_NAME"] == "统计月份")
          );
          this.searchDatas = current;
          this.searchDatas.total = res.data.data.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleCurrentChange (val) {
      this.searchData.pageNo = val;
      this.findTable();
    },
    handleSizeChange (val) {
      this.searchData.pageSize = val;
      this.findTable();
    },
    handleCurrentChangeone (val) {
      this.searchDatas.pageNo = val;
      this.handeleDetail(this.detailId);
    },
    handleSizeChangeone (val) {
      this.searchDatas.pageSize = val;
      this.handeleDetail(this.detailId);
    },

    handleCurrentChangetow (val) {
      this.searchDatas.pageNo = val;
      this.handeleDetail(this.detailId);
    },
    handleSizeChangetow (val) {
      this.searchDatas.pageSize = val;
      this.handeleDetail(this.detailId);
    },
  },
};
</script>
<style lang="less">
//月入-两列高亮
.isaction {
  // background: rgba(62, 59, 66, 0.329);
  color: #000;
  font-weight: 600;
}
.grid-content {
  min-height: 54px;
  background: #002060;
  color: #fff;
  line-height: 54px;
  font-weight: 550;
  padding-left: 20px;
  box-sizing: border-box;
}
.flex-cen {
  // border: 1px solid red;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
}
.flex-end {
  display: flex;
  // justify-content: flex-end;
  justify-content: center;
  // margin-right: 50px;
}
.menu-right .menu-btn {
  display: flex !important;
}
.page-container {
  box-sizing: border-box;
  width: 100%;
  // padding: 30px 20px;
  box-shadow: 0 0 5px #999;
  border-radius: 5px;
  background-color: #fff;
  .menu-right .upload-demo {
    display: inline-block;
    margin: 10px;
  }
}
.export-dialog {
  .dialog-top {
    display: flex;
    justify-content: space-between;
    .dialog-left {
      display: flex;
      .upload-demo {
        margin-right: 10px;
        position: relative;
        .el-upload-list {
          position: absolute;
          top: 30px;
          left: 0;
        }
      }
    }
  }
  .dialog-info {
    margin-top: 50px;
    min-height: 300px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 1.5;
  }
  .btn-group {
    text-align: right;
  }
}
.el-message .el-message-box__wrapper {
  z-index: 99999;
}
.upload-demo {
  display: inline-block;
}
.el-row .el-button {
  margin-left: 20px;
  &:nth-child(0) {
    margin-left: 0;
  }
}
</style>