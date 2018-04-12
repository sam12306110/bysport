<template>
  <div>
    <div id="sportwrapbox">

      <div class="tbox">
        <div class="sporttop"><h1>{{showType}} &gt; 综合过关</h1></div>
        <div class="tbox_content">
          <dl>
            <dt>
              <pagination :pageInfo="pageInfo" :soPage="soPage" @change="pageChange"></pagination>
            </dt>
            <dd class="refresh">
              <a href="javascript:;" @click="clickRef('180')"><span id="djs">{{time}}</span></a>
            </dd>
            <dd>
              <a href="javascript:;" @click="comShowModel('op')" title="选择联赛"
                 class="thickbox">选择联赛(全)</a>
            </dd>
          </dl>
          <table border="1" cellpadding="0" cellspacing="0" id="data">
            <tbody>
            <tr class="datatop">
              <th nowrap="" style="width: 48px" class="time">时间</th>
              <th nowrap="" style="width: 162px" class="team">赛事</th>
              <th nowrap="" class="h_1x2" style="width: 38px;">独赢</th>
              <th nowrap="" class="h_r" style="width: 93px;">全场 - 让球</th>
              <th nowrap="" class="h_ou" style="width: 93px;">全场 - 大小</th>
              <th nowrap="" class="h_oe" style="width: 49px;">单双</th>
              <th nowrap="" class="h_1x2" style="width: 36px;">独赢</th>
              <th nowrap="" class="h_r" style="width: 91px;">半场 - 让球</th>
              <th nowrap="" class="h_ou" style="width: 88px;">半场 - 大小</th>
            </tr>
            <tr>
              <td colspan="9">
                <table frame="void" cellpadding="0" cellspacing="0" v-for="(item,key) in race" id="stf">
                  <tr>
                    <td colspan="8" class="b_title" style="border-bottom:none">{{key}}</td>
                    <td align="right" class="b_title2" style="border-left:none;border-bottom:none">3串1</td>
                  </tr>
                  <tbody v-for="items in item">
                  <tr>
                    <td style="border-left:1px solid #C3C3C3;border-bottom:1px solid #C3C3C3 ; width: 44px" rowspan="3"
                        v-html="items.Match_Date">
                    </td>
                    <td rowspan="2" align="left" style="width: 172px;">
                      {{items.Match_Master}}<br>{{items.Match_Guest}}
                    </td>
                    <td align="right" style="width: 38px;">
                      <a href="javascript:" :title="items.Match_BzM"
                         @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Master,items.Match_BzM,'1','Match_BzM')" v-if="items.Match_BzM!=null&&items.Match_BzM!='0'">
                        <font>{{items.Match_BzM}}</font>
                      </a>
                    </td>
                    <td align="right" style="width: 93px;">
                      <span class="qiu"
                            v-if="items.Match_Ho!=null&&items.Match_Ho!='0'">{{items.Match_ShowType == 'H' && items.Match_Ho != '0' ? items.Match_RGG : ''}}</span>
                      <a href="javascript:"
                         @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Master,items.Match_Ho,'1','Match_Ho','盘口: '+(items.Match_ShowType=='H' ? '主让' :'客让')+'('+items.Match_RGG+')')"  v-if="items.Match_Ho!=null&&items.Match_Ho!='0'">
                        <font>{{items.Match_Ho}}</font></a>
                    </td>
                    <td align="right" style="width: 93px;">
                      <span class="qiu"
                            v-if="items.Match_DxDpl!=null&&items.Match_DxDpl!='0'">{{items.Match_DxGG1}}</span>
                      <a href="javascript:" title="大"
                         @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_DxGG1,items.Match_DxDpl,'1','Match_DxDpl')"  v-if="items.Match_DxDpl!=null&&items.Match_DxDpl!='0'">
                        <font>{{items.Match_DxDpl}}</font></a>
                    </td>
                    <td style="width: 49px;" align="right">
                      <span class="qiu" v-if="items.Match_DsDpl!=null&&items.Match_DsDpl!='0'">单</span>
                      <a href="javascript:" title="单"
                         @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'单',items.Match_DsDpl,'1','Match_DsDpl')"  v-if="items.Match_DsDpl!=null&&items.Match_DsDpl!='0'">
                        <font>{{items.Match_DsDpl}}</font></a>
                    </td>
                    <td style="width: 36px;" align="right" class="b_1st">
                      <a href="javascript:"
                         v-if="items.Match_Bmdy!=null&&items.Match_Bmdy!='0'" @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Master+'-[上半]',items.Match_Bmdy,'1','Match_Bmdy')">
                        <font>{{items.Match_Bmdy}}</font></a>
                    </td>
                    <td style="width: 91px;" align="right" class="b_1st">
                      <span class="qiu"
                            v-if="items.Match_BHo!=null&&items.Match_BHo!='0'">{{items.Match_ShowType == 'H' && items.Match_Ho != '0' ? items.Match_RGG : ''}}</span>
                      <a href="javascript:"
                         v-if="items.Match_BHo!=null&&items.Match_BHo!='0'" @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Master,items.Match_BHo,'1','Match_BHo','盘口: '+(items.Match_Hr_ShowType=='H'?'主让':'客让')+'('+items.Match_RGG+')')">
                        <font>{{items.Match_BHo}}</font></a>
                    </td>
                    <td style="width: 88px;" align="right" class="b_1st">
                      <span class="qiu"
                            v-if="items.Match_Bdpl!=null&&items.Match_Bdpl!='0'">{{items.Match_Bdxpk1}}</span>
                      <a href="javascript:" title="大"
                         v-if="items.Match_Bdpl!=null&&items.Match_Bdpl!='0'" @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Bdxpk1.replace('@',''),items.Match_Bdpl,'1','Match_Bdpl')">
                        <font>{{items.Match_Bdpl}}</font></a>
                    </td>
                  </tr>
                  <tr>
                    <td align="right">
                      <a @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Guest,items.Match_BzG,'1','Match_BzG')"
                         href="javascript:" :title="items.Match_BzG" v-if="items.Match_BzG!=null&&items.Match_BzG!='0'">
                        <font>{{items.Match_BzG}}</font>
                      </a>
                    </td>
                    <td align="right">
                      <span class="qiu"
                            v-if="items.Match_Ao!=null&&items.Match_Ao!='0'">{{items.Match_ShowType == 'C' && items.Match_Ao != '0' ? items.Match_RGG : ''}}</span>
                      <a href="javascript:"
                         @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Guest,items.Match_Ao,'1','Match_Ao','盘口: '+(items.Match_ShowType=='H' ? '主让' :'客让')+'('+items.Match_RGG+')')" v-if="items.Match_Ao!=null&&items.Match_Ao!='0'">
                        <font>{{items.Match_Ao}}</font></a>
                    </td>
                    <td align="right">
                      <span class="qiu"
                            v-if="items.Match_DxXpl!=null&&items.Match_DxXpl!='0'">{{items.Match_DxGG2}}</span>
                      <a href="javascript:" title="小"
                         @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_DxGG2,items.Match_DxXpl,'1','Match_DxXpl')"  v-if="items.Match_DxXpl!=null&&items.Match_DxXpl!='0'">
                        <font>{{items.Match_DxXpl}}</font></a>
                    </td>
                    <td align="right">
                      <span class="qiu" v-if="items.Match_DsDpl!=null&&items.Match_DsDpl!='0'">双</span>
                      <a href="javascript:" title="双"
                         v-if="items.Match_DsSpl!=null&&items.Match_DsSpl!='0'" @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'双',items.Match_DsSpl,'1','Match_DsDpl')">
                        <font>{{items.Match_DsSpl}}</font></a>
                    </td>
                    <td align="right" class="b_1st">
                      <a href="javascript:"
                         v-if="items.Match_Bgdy1!=null&&items.Match_Bgdy1!='0'" @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Guest+'-[上半]',items.Match_Bgdy1,'1','Match_Bgdy1')">
                        <font>{{items.Match_Bgdy1}}</font></a>
                    </td>
                    <td align="right" class="b_1st">
                      <span class="qiu"
                            v-if="items.Match_BAo!=null&&items.Match_BAo!='0'">{{items.Match_ShowType == 'C' && items.Match_Ao != '0' ? items.Match_RGG : ''}}</span>
                      <a href="javascript:"
                         v-if="items.Match_BAo!=null&&items.Match_BAo!='0'" @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Guest,items.Match_BAo,'1','Match_BAo','盘口: '+(items.Match_Hr_ShowType=='H'?'主让':'客让')+'('+items.Match_RGG+')')">
                        <font>{{items.Match_BAo}}</font></a>
                    </td>
                    <td align="right" class="b_1st">
                      <span class="qiu"
                            v-if="items.Match_Bdpl!=null&&items.Match_Bdpl!='0'">{{items.Match_Bdxpk2}}</span>
                      <a href="javascript:" title="小"
                         v-if="items.Match_Bdpl!=null&&items.Match_Bdpl!='0'" @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Bdxpk2.replace('@',''),items.Match_Bxpl,'1','Match_Bxpl')">
                        <font>{{items.Match_Bxpl}}</font></a>
                    </td>
                  </tr>
                  <tr>
                    <td align="left">和局</td>
                    <td align="right">
                      <a href="javascript:" title="和局"
                         v-if="items.Match_BzH!=null&&items.Match_BzH!='0'" @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'和局',items.Match_BzH,'1','Match_BzH')">
                        <font>{{items.Match_BzH}}</font>
                      </a>
                    </td>
                    <td colspan="3"></td>
                    <td align="right" class="b_1st">
                      <a href="javascript:" title="和局"
                         v-if="items.Match_Bhdy1!=null&&items.Match_Bhdy1!='0'" @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'和局',items.Match_Bhdy1,'1','Match_Bhdy1')">
                        <font>{{items.Match_Bhdy1}}</font></a>
                    </td>
                    <td colspan="2" class="b_1st"></td>
                  </tr>
                  <tr>
                    <td colspan="10" class="space"></td>
                  </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="refresh_down" class="refresh_M_btn" @click="clickRef('180')" ><span>刷新</span>
      </div>
      <model :windowLsm="windowLsm" :modelData="modelData" @modelClose="getChild"></model>
    </div>
  </div>
</template>
<script>
  import Mixin from '@/Mixin'
  import pagination from '../../components/vue-pagination'
  import model from '../../components/model'
  export default {
    name: 'Comprehensive',
    mixins: [Mixin],
    components: {
      pagination,
      model
    },
    data: function () {
      return {
        action: '../api/app/member/show/json/ft_2_1.php',
        showType: '足球早盘',
        time: 180,
        pageInfo: {
          current: 1,
          pagegroup: 5,
          skin: '#86715',
        },
        eventName: ''
      }
    },
    created: function () {

    },
    mounted: function () {
      let _self = this;
      _self.dataType = window.sessionStorage.getItem('dataType');
      if (_self.dataType == 2) {
        _self.action = '../api/app/member/show/json/ft_2_1.php';
        this.showType = '足球早盘'
      }
      if (_self.dataType == 1) {
        _self.action = '../api/app/member/show/json/ft_1_1.php';
        this.showType = '今日足球'
      }
      if (_self.time > 1) {
        clearInterval(_self.timer());
        _self.time = '';
        _self.timer('180')
      } else {
        _self.timer('180')
      }
    },
    methods: {
      pageChange: function (current) {
        this.getData('', current - 1)
      },
      getChild: function (data) {
        let _self = this;
        _self.modelData = data;
        _self.eventName = _self.modelData.selectData;
        _self.getData(_self.modelData.selectData, '0');
      },
    }
  }

</script>
