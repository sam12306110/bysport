<template>
    <div>
         <div id="sportwrapbox">
        <div class="tbox">
          <div class="sporttop"><h1>篮球 &gt; 滚球&gt;</h1></div>
          <div class="tbox_content">
            <dl>
              <dt>
                <pagination :pageInfo="pageInfo" :soPage="soPage" @change="pageChange"></pagination>
              </dt>
              <dd class="refresh">
                <a href="javascript:;" @click="clickRef('20')"><span id="djs">{{time}}</span></a>
              </dd>
              <dd>
                <a  title="选择联赛" href="javascript:;" @click="comShowModel('op')" class="thickbox">选择联赛(全)</a>
              </dd>
            </dl>
            <table border="1" cellpadding="0" cellspacing="0" id="data">
              <tbody>
                 <tr class="datatop">
                <th class="time" style="width: 47px">时间</th>
                <th class="team" style="width: 200px">主客队伍</th>
                <th style="width: 60px;">独赢盘</th>
                <th style="width: 135px;">让分</th>
                <th style="width: 133px;">大小</th>
                <th style="width: 134px;">单双</th>

              </tr>
                 <tr>
                <td colspan="9">
                  <table frame="void" cellpadding="0" cellspacing="0" v-for="(item,key) in race" id="stf">
                    <tr><td colspan="9" class="b_title" style="border-top:none;border-bottom:none">{{key}}</td></tr>
                    <tbody v-for="items in item">
                    <tr>
                      <td rowspan="2">
                        <div class="bf">{{items.Match_Time}}<br><span>{{items.Match_NowScore}}</span></div>
                      </td>
                      <td rowspan="2" align="left" style="width: 200px;">
                        {{items.Match_Master}}<br>{{items.Match_Guest}}
                      </td>
                      <td align="right" style="width: 60px;">
                        <a href="javascript:;"
                           @click="ClickBet('篮球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Master,items.Match_BzM,'0','Match_BzM')"   :title="items.Match_BzM" v-if="items.Match_BzM!=null&&items.Match_BzM!='0'">
                          <font>{{items.Match_BzM}}</font></a>
                      </td>
                      <td align="right" style="width: 135px;">
                        <span class="qiu" v-if="items.Match_Ho!=null&&items.Match_Ho!='0'">{{items.Match_ShowType == 'H' && items.Match_Ho != '0' ? items.Match_RGG : ''}}</span>
                        <a href="javascript:;"
                           @click="ClickBet('篮球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Master,items.Match_Ho,'0','Match_Ho','盘口: '+(items.Match_ShowType=='H' ? '主让' :'客让')+'('+items.Match_RGG+')')"  v-if="items.Match_Ho!=null&&items.Match_Ho!='0'">
                          <font>{{items.Match_Ho}}</font></a>
                      </td>
                      <td  align="right" style="width: 133px;">
                        <span class="qiu" v-if="items.Match_DxDpl!=null&&items.Match_DxDpl!='0'">{{items.Match_DxGG1}}</span>
                        <a href="javascript:" title="大"
                           @click="ClickBet('篮球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_DxGG1,items.Match_DxDpl,'0','Match_DxDpl')"  v-if="items.Match_DxDpl!=null&&items.Match_DxDpl!='0'">
                          <font>{{items.Match_DxDpl}}</font></a>
                      </td>
                      <td style="width: 134px;" align="right">
                        <span class="qiu" v-if="items.Match_DsDpl!=null&&items.Match_DsDpl!='0'">单</span>
                        <a href="javascript:"
                           @click="ClickBet('篮球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'单',items.Match_DsDpl,'0','Match_DsDpl')" title="单" v-if="items.Match_DsDpl!=null&&items.Match_DsDpl!='0'">
                          <font>{{items.Match_DsDpl}}</font></a>
                      </td>
                    </tr>
                    <tr>
                      <td align="right">
                        <a href="javascript:"
                           @click="ClickBet('篮球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Guest,items.Match_BzG,'0','Match_BzG')"  :title="items.Match_BzG" v-if="items.Match_BzG!=null&&items.Match_BzG!='0'">
                          <font>{{items.Match_BzG}}</font></a>
                      </td>
                      <td align="right">
                        <span class="qiu" v-if="items.Match_Ao!=null&&items.Match_Ao!='0'">{{items.Match_ShowType=='C'&&items.Match_Ao!='0'?items.Match_RGG:''}}</span>
                        <a href="javascript:;"
                           @click="ClickBet('篮球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_Guest,items.Match_Ao,'0','Match_Ao','盘口: '+(items.Match_ShowType=='H' ? '主让' :'客让')+'('+items.Match_RGG+')')"  v-if="items.Match_Ao!=null&&items.Match_Ao!='0'">
                          <font>{{items.Match_Ao}}</font></a>
                      </td>
                      <td align="right">
                        <span class="qiu" v-if="items.Match_DxXpl!=null&&items.Match_DxXpl!='0'">{{items.Match_DxGG2}}</span>
                        <a href="javascript:"  title="小" @click="ClickBet('篮球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},items.Match_DxGG2,items.Match_DxXpl,'0','Match_DxXpl')" v-if="items.Match_DxXpl!=null&&items.Match_DxXpl!='0'">
                          <font>{{items.Match_DxXpl}}</font></a></td>
                      <td align="right">
                        <span class="qiu" v-if="items.Match_DsDpl!=null&&items.Match_DsDpl!='0'">双</span>
                        <a href="javascript:" title="双"
                           @click="ClickBet('篮球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'双',items.Match_DsDpl,'0','Match_DsDpl')" v-if="items.Match_DsSpl!=null&&items.Match_DsSpl!='0'">
                          <font>{{items.Match_DsSpl}}</font></a>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="refresh_down" class="refresh_M_btn" @click="clickRef('20')">
          <span>刷新</span>
        </div>
      </div>
    </div>
</template>
<script>
    import Mixin from '@/Mixin'
    import pagination from '../../components/vue-pagination'
    import model from '../../components/model'
    export default {
        name: 'basketRollBall',
        mixins: [Mixin],
        components: {
          pagination,
          model,
        },
        data: function () {
            return {
              action: '../api/app/member/show/json/bk_1_0.php',
              time: 20,
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
          if (_self.time > 1) {
            clearInterval(_self.timer());
            _self.time = '';
            _self.timer('20')
          } else {
            _self.timer('20')
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
