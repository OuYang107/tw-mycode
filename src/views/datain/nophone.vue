<template>
  <div class="box">
    <!-- <el-row>  11111111111111111111
      <el-col :span="24">
        <div class=" bg-purple-dark">手机 </div>
      </el-col>
    </el-row> -->
    <div class="content">
      <el-row>
        <el-col :span="3">
          <div class="grid-content">
            年份：
            <el-select size="mini "
                       style="width: 100px"
                       v-model="searchData.statisYear"
                       placeholder="选择年"
                       @change="handleChangetype">
              <el-option v-for="item in optiontype"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
            <!-- <el-date-picker
              style="width: 180px"
              v-model="year"
              type="year"
              placeholder="选择年"
              size="mini"
              format="yyyy"
              value-format="yyyy"
            >
            </el-date-picker> -->
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            期数：
            <el-select size="mini "
                       v-model="searchData.cycNum"
                       style="width: 90px"
                       placeholder="请选择"
                       @change="handleChange">
              <el-option v-for="item in timeoption"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>

          </div>
        </el-col>
        <el-col :span="5">
          <!-- <div class="grid-content b">
          </div> -->
        </el-col>
        <el-col :span="4">
          <!-- <div class="miss"> -->
          <!-- <div class="grid-content selects"> -->
          <!-- <el-cascader
                class="cerd"
                size="mini"
                v-model="search"
                placeholder="地市搜索"
                :options="options"
                clearable
                :show-all-levels="false"
                :props="{checkStrictly: true}"
                filterable
                @change="cityname"
              >
              </el-cascader> -->
          <!-- </div> -->
          <!-- </div> -->
        </el-col>

        <el-col :span="6">
          <div class="grid-content a">
            <el-row>
              <el-button type="primary"
                         size="mini"
                         @click="query">查询</el-button>
              <el-button size="mini"
                         @click="dialogVisible = true">导入</el-button>
              <!-- <el-button size="mini"
                         type="warning"
                         @click="noresetting">导出</el-button> -->
            </el-row>
            <el-col :span="3">
              <!-- <el-button
          style="margin-left: 350px;"
                size="mini"
                type="warning"
                @click="resetting"
              >明细查询页面</el-button> -->
              <!-- <el-link type="primary" size="mini"  style="margin-left: 350px;">明细查询页面</el-link> -->
            </el-col>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="table">
      <el-table :data="tableData"
                align="center"
                style="width: 100%"
                border
                height="370"
                tooltip-effect="light"
                :header-cell-style="rowClass"
                :cell-style="cellStyle">
        <el-table-column prop="predCityName"
                         label="城市"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="predCityName"
                         label="区县"
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="familyServNo"
                         label="家庭电话"
                         align="center"
                         width="105">
        </el-table-column>

        <el-table-column prop="oppOpertrName"
                         label="运营商类型"
                         width="105"
                         show-overflow-tooltip
                         align="center">
        </el-table-column>
        <el-table-column prop="areaName"
                         label="区域"
                         width="105"
                         show-overflow-tooltip
                         align="center">
        </el-table-column>
        <el-table-column prop="hmfq"
                         label="HMFQ"
                         width="100"
                         show-overflow-tooltip
                         align="center">
        </el-table-column>

        <el-table-column prop="servNo"
                         label="手机号码"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>

        <el-table-column prop="cityName"
                         label="城市"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="cntyName"
                         label="区县"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="oppOpertrType"
                         label="YYS,运营商类型"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="d2Question"
                         label="D2,请问您接听电话的这个手机号码，是您本人在使用吗？"
                         show-overflow-tooltip
                         width="125"
                         align="center">
        </el-table-column>
        <el-table-column prop="d3Question"
                         label="D3,请问您目前使用的是5G手机吗？"
                         show-overflow-tooltip
                         width="115"
                         align="center">
        </el-table-column>
        <el-table-column prop="q1Question"
                         label="Q1,结合您使用这个手机号码接打电话的体验，您给中国%TEMP%的语音通话质量打几分？"
                         show-overflow-tooltip
                         width="155"
                         align="center">
        </el-table-column>
        <el-table-column prop="q2Question"
                         label="Q2,结合您使用这个手机号码进行流量上网的体验，您给中国%TEMP%的手机上网质量打几分？"
                         show-overflow-tooltip
                         width="155"
                         align="center">
        </el-table-column>
        <el-table-column prop="q3Question"
                         label="Q3,您觉得中国%TEMP%手机套餐内容及规则是否清晰易懂，可以打几分？"
                         show-overflow-tooltip
                         width="155"
                         align="center">
        </el-table-column>
        <el-table-column prop="q4Question"
                         label="Q4,您觉得中国%TEMP%手机套餐内容是否满足您日常通话和流量使用，可以打几分？"
                         show-overflow-tooltip
                         width="155"
                         align="center">
        </el-table-column>
        <el-table-column prop="q5Question"
                         label="Q5,您觉得中国%TEMP%手机套餐的订购或变更过程是否便捷，可以打几分？"
                         show-overflow-tooltip
                         width="155"
                         align="center">
        </el-table-column>
        <el-table-column prop="q6Question"
                         label="Q6,您觉得中国%TEMP%手机套餐的订购或变更过程是否规范,可以打几分?"
                         show-overflow-tooltip
                         width="155"
                         align="center">
        </el-table-column>
        <el-table-column prop="q7Question"
                         label="Q7,您给中国%TEMP%的话费账单服务打几分？"
                         show-overflow-tooltip
                         width="135"
                         align="center">
        </el-table-column>
        <el-table-column prop="q811Question"
                         label="Q8-1_1,%TEMP%营业厅"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q812Question"
                         label="Q8-1_2,%TEMP%@RX@客服热线"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q813Question"
                         label="Q8-1_3,手机营业厅(指APP客户端)"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q814Question"
                         label="Q8-1_4,官方微信公众号或小程序"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q815Question"
                         label="Q8-1_5,@RX@短信"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q816Question"
                         label="Q8-1_6,%TEMP%官方网站"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q817Question1"
                         label="Q8-1_7,其他，请记录"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q817Question2"
                         label="Q8-1_7,其他，请记录-V-C"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q818Question"
                         label="Q8-1_8,不清楚/不记得"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q819Question"
                         label="Q8-1_9,以上都没有使用过"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q8Question"
                         label="Q8,结合您在以上渠道的服务体验，您给中国%TEMP%的服务质量打几分？"
                         show-overflow-tooltip
                         width="145"
                         align="center">
        </el-table-column>
        <el-table-column prop="q9Question"
                         label="Q9,结合您这个手机号码的使用体验，您给中国%TEMP%手机业务的整体表现打几分？"
                         show-overflow-tooltip
                         width="155"
                         align="center">
        </el-table-column>
        <el-table-column prop="q10Question"
                         label="Q10,总的来说，您有多大可能性推荐他人使用中国%TEMP%的手机业务？"
                         show-overflow-tooltip
                         width="155"
                         align="center">
        </el-table-column>
        <el-table-column prop="q211Question"
                         label="Q2-1_1,部分区域无信号/信号弱"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q212Question"
                         label="Q2-1_2,无法上网（无法打开页面）"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q213Question"
                         label="Q2-1_3,上网速度慢/卡顿"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q214Question"
                         label="Q2-1_4,打电话时无法上网"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q215Question"
                         label="Q2-1_5,无5G信号覆盖"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q216Question"
                         label="Q2-1_6,5G网络慢，感知与宣传差异大"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q217Question1"
                         label="Q2-1_7,其他，请注明"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q217Question2"
                         label="Q2-1_7,其他，请注明-V-C"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q2198Question"
                         label="Q2-1_98,不知道/拒答"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q2199Question"
                         label="Q2-1_99,无/没有"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q21100Question"
                         label="Q2-1_100,中途拒访"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q311Question"
                         label="Q3-1_1,对套餐价格及包含内容等不清楚"
                         show-overflow-tooltip
                         width="115"
                         align="center">
        </el-table-column>
        <el-table-column prop="q312Question"
                         label="Q3-1_2,对套餐权益不清楚"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q336Question"
                         label="Q3-1_3,对套餐使用规则不清楚"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q314Question"
                         label="Q3-1_4,对参加活动赠送的内容及优惠规则不清楚"
                         show-overflow-tooltip
                         width="125"
                         align="center">
        </el-table-column>
        <el-table-column prop="q315Question"
                         label="Q3-1_5,对套餐如何收费/收费规则不清楚"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q316Question"
                         label="Q3-1_6,对套餐变更/退订条件或方式不清楚"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q317Question1"
                         label="Q3-1_7,其他，请注明"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q317Question2"
                         label="Q3-1_7,其他，请注明-V-C"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q3198Question"
                         label="Q3-1_98,不知道/拒答"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q3199Question"
                         label="Q3-1_99,无/没有"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q31100Question"
                         label="Q3-1_100,中途拒访"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q411Question"
                         label="Q4-1_1,套餐内语音/流量用不完"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q412Question"
                         label="Q4-1_2,套餐内语音/流量不够用"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q413Question"
                         label="Q4-1_3,套餐限速/封顶影响使用"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q414Question"
                         label="Q4-1_4,套餐赠送的流量不能分享给副卡使用"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q415Question"
                         label="Q4-1_5,流量/语音没用完被清零"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q416Question"
                         label="Q4-1_6,感觉流量/语音用的太快，与使用感知不符"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q417Question"
                         label="Q4-1_7,对语音和流量收费有质疑，认为计费不准"
                         show-overflow-tooltip
                         width="135"
                         align="center">
        </el-table-column>
        <el-table-column prop="q418Question1"
                         label="Q4-1_8,其他，请注明"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q418Question2"
                         label="Q4-1_8,其他，请注明-V-C"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q4198Question"
                         label="Q4-1_98,不知道/拒答"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q4199Question"
                         label="Q4-1_99,无/没有"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q41100Question"
                         label="Q4-1_100,中途拒访"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q611Question"
                         label="Q6-1_1,不知情开通或取消"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q612Question"
                         label="Q6-1_2,工作人员没有对业务规则进行清晰告知"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q613Question"
                         label="Q6-1_3,办理时没有短信验证码确认或签字"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q614Question"
                         label="Q6-1_4,推诿不能办理"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q615Question"
                         label="Q6-1_5,工作人员虚假宣传"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q616Question"
                         label="Q6-1_6,个人号码（非10085、10086号码）拨打邀请办理"
                         show-overflow-tooltip
                         width="135"
                         align="center">
        </el-table-column>
        <el-table-column prop="q617Question1"
                         label="Q6-1_7,其他，请注明"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q617Question2"
                         label="Q6-1_7,其他，请注明-V-C"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q6198Question"
                         label="Q6-1_98,不知道/拒答"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q6199Question"
                         label="Q6-1_99,无/没有"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="q61100Question"
                         label="Q6-1_100,中途拒访"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
        <el-table-column prop="d1Question"
                         label="D1,性别"
                         show-overflow-tooltip
                         width="105"
                         align="center">
        </el-table-column>
      </el-table>
      <el-pagination :current-page.sync="searchData.pageNo"
                     :page-size="searchData.pageSize"
                     :total="searchData.total"
                     style="margin-top: 20px; text-align: center"
                     :page-sizes="[1, 5, 10, 30]"
                     layout="total, sizes, prev, pager, next, jumper"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange" />
    </div>
    <div class="dialog">
      <!--    //==================== -->
      <!-- <el-row> -->
      <el-dialog :visible.sync="dialogVisible"
                 :before-close="handleDialogClose"
                 width="70%">
        <div class="grid-content"
             style="display: inline-block"> 年份：
          <el-select size="mini"
                     style="width: 100px"
                     v-model="searchData.statisYear"
                     placeholder="选择年"
                     @change="handleChangetype">
            <el-option v-for="item in optiontype"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="grid-content"
             style="display: inline-block">
          期数：
          <el-select size="mini"
                     style="width: 90px"
                     v-model="searchData.cycNum"
                     placeholder="请选择"
                     @change="handleChange">
            <el-option v-for="item in timeoption"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div style="text-align: right">
          <el-button @click="getDownload"
                     type="success"
                     size="mini">模板下载</el-button>
        </div>
        <!-- <el-upload class="upload-demo"
                   multiple
                   drag
                   action="#"
                   accept=".list,.xlsx,.xls,.dat"
                   :http-request="uploadFiles"
                   :on-change="setChange"
                   :limit="5"
                   :file-list="fileList"
                   ref="upfiles"
                   list-type="excel">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip"
               slot="tip">
            只能上传Excel文件，且不超过500kb
          </div>
        </el-upload> -->
        <el-upload class="upload-demo"
                   action="#"
                   :http-request="uploadFiles"
                   :on-change="setChange"
                   multiple
                   ref="upfiles"
                   :limit="10000"
                   :file-list="fileList">
          <el-button size="small"
                     style="text-align: left"
                     type="primary">点击上传</el-button>
          <div slot="tip"
               class="el-upload__tip"> 只能上传Excel文件，且不超过500kb
            <span slot="tip"
                  style="color: 	#FF0000">注：每次导入表格都会对本周期进行全覆盖。</span>
          </div>
        </el-upload>
        <div class="listtpey">
          <p v-for="(item,index) in content"
             :key="index">{{item }}</p>
        </div>

        <span slot="footer"
              class="dialog-footer">
          <el-button @click="clearFile()"
                     size="mini">取 消</el-button>
          <el-button type="primary"
                     @click="confirm"
                     size="mini">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import baseUrl from "@/api/baseUrl";
import requestUrl from "@/api/url";
import apiSend from "@/api/httpRequest.js";
export default {
  data () {
    return {
      dialogVisible: false,
      // year: "2021",

      tableData: [],
      searchData: {
        // statisTypeId: "5",
        // statisTypeId2: '',
        // lvlCode: "",
        // statisMonthtimeoption: "2021q1",
        // statisMonth: '', //年份
        cycNum: 'Q1', //期数
        statisYear: 2021,
        // Code: "",
        // cityCode: '',   //地市
        // cntyCode: '',//区县
        // gridCode: '',// 网格
        // unsatisType: '',//类型 
        pageNo: 1,    //一页条数
        pageSize: 10,      //页数
        total: 10,
      },
      input: '',
      search: '',
      arr: '',
      optionreason: [],
      cityCode: '',
      timeoption: [
        { label: 'Q1', value: 'Q1' },
        { label: 'Q2', value: 'Q2' },
        { label: 'Q3', value: 'Q3' },
        { label: 'Q4', value: 'Q4' },
      ],
      optiontype: [
        { label: '2021', value: '2021' },
        { label: '2020', value: '2020' },
      ],
      options: [
        {
          label: '长沙市',
          value: '731',
          children: [

          ]
        },
        {
          label: '岳阳市', value: '730',
          children: [

          ]
        },
        {
          label: '益阳市', value: '737',
          children: [

          ]
        },
        {
          label: '常德市', value: '736',
          children: [

          ]
        },
        {
          label: '张家界市', value: '744',
          children: [

          ]
        },
        {
          label: '自治州', value: '743',
          children: [

          ]
        },
        {
          label: '怀化市', value: '745',
          children: [

          ]
        },
        {
          label: '娄底市', value: '738',
          children: [

          ]
        },
        {
          label: '湘潭市', value: '732',
          children: [
          ]
        },
        {
          label: '株洲市', value: '733',
          children: [
          ]
        },
        {
          label: '邵阳市', value: '739',
          children: [
          ]
        },
        {
          label: '衡阳市', value: '734',
          children: [
          ]
        },
        {
          label: '永州市', value: '746',
          children: [
          ]
        },
        {
          label: '郴州市', value: '735',
          children: [
          ]
        }
      ],
      cntyArrOptins: [],
      //存放区县
      options1: [],
      files: {
        cycNum: "Q1",
        files: {},
        statisYear: 2021,
        token: "12",
      },
      fileList: [],
      content: ''
    };
  },
  mounted () {
    this.query()
  },
  methods: {
    //查询按钮
    query () {
      apiSend.findPhotoSatisInfo({ data: this.searchData }).then(res => {
        // console.log(res, 11111111111)
        this.searchData.total = res.data.data.current
        this.searchData.total = res.data.data.total
        this.tableData = res.data.data.records
      }).catch(err => {
        console.log(err)
      })
    },
    handleChange (_q) {//第几期按钮
      // console.log(q)
    },
    resetting () { // 导入按钮
      this.dialogVisible = true

    },
    setChange (_file, fileList) {
      // console.log(fileList)
      this.fileList = fileList;
    },
    uploadFiles (e) {     //导入文件
      // console.log(e.file)
      // this.files.files.append(e.file)
    },
    handleDialogClose () {        // X 按钮
      this.dialogVisible = false;

      this.$refs["upfiles"].clearFiles();
    },
    //模板下载按钮
    getDownload () {
      // this.TemplateData["statisMonth"] = this.files.statisYear
      const base =
        process.env.NODE_ENV == "development"
          ? baseUrl.development
          : baseUrl.production;
      window.open(
        base + "/dist/photoSatis.xlsx"
        // requestUrl.getExcelTemplate +
        // "?statisMonth=" +
        // this.TemplateData["statisMonth"],
      );
    },
    confirm () {  //确认按钮
      // this.$refs["upfiles"].clearFiles();
      // this.dialogVisible = false;

      if (this.fileList.length == 0) {
        this.$message.warning("请上传文件！");
        return;
      }
      let formData = new FormData();
      // console.log(this.fileList)
      let list = []
      this.fileList.forEach((item) => {
        formData.append('file', item.raw);
        list.push(item.raw)
      })
      // console.log()
      formData.append('cycNum', this.files.cycNum);
      formData.append('statisYear', this.files.statisYear);
      // console.log(list)
      // return;
      let obj = []
      apiSend.photoSatisImport({ data: formData }).then(res => {
        let arr = res.data.data
        console.log(res.data.data)
        // res.data.data.forEach(item => {
        // console.log(item)
        if (arr.code == 1) {        //item.msg +  item.fileName + 
          obj.push(arr.msg)
          // console.log(obj)             
          // for (var _demo in item) {
          //   if (_demo.indexOf('exception') != -1)
          //     obj.push(item.fileName + item[_demo])
          // }
          // console.log(obj, '111111111111')
          // obj.push(item.fileName + item.exception2)
          // console.log(obj, '10111')
          // this.$message.warning(1111111111 + item.fileName);
          // obj.push(+ item.fileName)
        }
        if (arr.code == 0) {
          // obj = item.fileName + item.msg
          // console.log(item.fileName + item.msg)
          obj.unshift(arr.msg)
          // this.$message.success( + item.fileName);
        }
        // if (item.code == 2) {
        //   obj.push(item.fileName + item.msg)
        // }
        // let result = [];
        // let a = {};
        // obj.forEach((item) => {
        //   if (!a[item.value]) {
        //     result.push(item)
        //     a[item.value] = true;
        //   }
        // })
        console.log(obj)
        this.content = obj
        // })
      }).catch(err => {
        console.log(err)
      })
    },
    clearFile () {       // 取消按钮
      // clearFiles
      this.content = "";
      this.dialogVisible = false;
      this.$refs["upfiles"].clearFiles();
    },
    noresetting () {      //导出按钮

    },
    handleChangetype (_val, _key) {      //结算月份按钮
      // console.log(val, key)
    },
    rowClass () {

    },
    cellStyle () {

    },
    handleCurrentChange (val) { // 条数
      this.searchData.pageNo = val;
      this.query()
    },
    handleSizeChange (val) {   // 一页多少条 
      this.searchData.pageSize = val;
      this.query()
    },
  }
};
</script>
<style lang="less" scoped>
.listtpey {
  overflow-y: scroll;
  height: 150px;
  width: 700px;
  border: 1px solid black;
}
.el-cascader-panel {
  // height: 300px;
}
.selects /deep/ .el-input--suffix {
  height: 28px;
}
.selects /deep/ .el-cascader .el-input .el-input__inner {
  height: 28px !important;
}
.selects /deep/ .el-input--suffix {
  height: 28px !important;
}

.selects /deep/ .el-input__inner {
  height: 28px !important;
  // display: l;
}
.miss {
  // padding: 5px;
}
.content /deep/ .selects .el-cascader .el-input .el-input__inner {
  height: 28px !important;
}
.content /deep/ .el-input--suffix .el-input__inner {
  padding-right: 15px;
}
/deep/.miss .selects .el-input__inner {
  height: 28px;
  height: 28px !important;
}
.box {
  background: white;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.selects {
  width: 100%;
  line-height: 28px;
  // border: 1px solid red;
  height: 28px !important;
}
.bg-purple-dark {
  box-sizing: border-box;
  // border: 1px solid red;
  width: 100vw;
  height: 100px;
}
.content {
  box-sizing: border-box;
  // margin: 10px;
  padding: 0 10px;
}
.el-row {
  // margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.grid-content {
  // border: 1px solid green;
  margin: 5px 5px;
  min-height: 36px;
  font-size: 12px;
  // font-weight: 600;
  display: flex;
  align-items: center;
}
.row-bg {
  background-color: #f9fafc;
}
/deep/ .el-table {
  margin-top: 10px;
  width: 100%;
  table {
    width: 100% !important;
  }
  .warning-row {
    background-color: rgb(242, 245, 252);
  }
  thead {
    th {
      background-color: rgb(242, 245, 252);
      color: #999;
      font-weight: 500;
      padding: 5px 0;
      font-size: 12px;
      // letter-spacing: 1px;
    }
  }
  tbody {
    td {
      font-size: 12px;
      padding: 5px 0;
    }
    tr:hover > td {
      background-color: rgb(217, 236, 255) !important;
    }
  }
}

.page-title {
  padding: 10px 10px 10px 0;
  margin-bottom: 10px;
  color: #409eff;
  font-size: 18px;
  color: #409eff;
  letter-spacing: 1px;
  font-family: "Microsoft YaHei";
  position: relative;
}
.page-title::after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #ddd;
  // padding:0;
  position: absolute;
  bottom: 0;
  left: 0;
  // padding-bottom: 10px;
}
</style>
