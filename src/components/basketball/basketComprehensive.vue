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
                <a href="javascript:;" @click="clickRef('90')"><span id="djs">{{time}}</span></a>
              </dd>
              <dd>
                <a @click="comShowModel('op')" href="javascript:;" title="选择联赛" class="thickbox">选择联赛(全                        )</a>
              </dd>
            </dl>
            <table border="1" cellpadding="0" cellspacing="0" id="data">
                <tbody>
              <tr class="datatop">
                <th class="time" style="width: 44px">时间</th>
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
                      <td style="border-left:1px solid #C3C3C3;border-bottom:1px solid #C3C3C3 ; width: 44px" rowspan="2" v-html="items.Match_Date">
                      </td>
                      <td rowspan="2" align="left" style="width: 200px;">
                        {{items.Match_Master}}<br>{{items.Match_Guest}}
                      </td>
                      <td align="right" style="width: 60px;">
                        <a href="javascript:"  :title="items.Match_BzM" v-if="items.Match_BzM!=null&&items.Match_BzM!='0'"><font>{{items.Match_BzM}}</font></a>
                      </td>
                      <td align="right" style="width: 135px;">
                        <span class="qiu" v-if="items.Match_Ho!=null&&items.Match_Ho!='0'">{{items.Match_ShowType == 'H' && items.Match_Ho != '0' ? items.Match_RGG : ''}}</span>
                        <a href="javascript:"  v-if="items.Match_Ho!=null&&items.Match_Ho!='0'"><font>{{items.Match_Ho}}</font></a>
                      </td>
                      <td  align="right" style="width: 133px;">
                        <span class="qiu" v-if="items.Match_DxDpl!=null&&items.Match_DxDpl!='0'">{{items.Match_DxGG1}}</span>
                        <a href="javascript:"title="大" v-if="items.Match_DxDpl!=null&&items.Match_DxDpl!='0'"><font>{{items.Match_DxDpl}}</font></a>
                      </td>
                      <td style="width: 134px;" align="right">
                        <span class="qiu" v-if="items.Match_DsDpl!=null&&items.Match_DsDpl!='0'">单</span>
                        <a href="javascript:" title="单" v-if="items.Match_DsDpl!=null&&items.Match_DsDpl!='0'"><font>{{items.Match_DsDpl}}</font></a>
                      </td>
                    </tr>
                    <tr>
                      <td align="right">
                        <a href="javascript:"  :title="items.Match_BzG" v-if="items.Match_BzG!=null&&items.Match_BzG!='0'"><font>{{items.Match_BzG}}</font></a>
                      </td>
                      <td align="right">
                        <span class="qiu" v-if="items.Match_Ao!=null&&items.Match_Ao!='0'">{{items.Match_ShowType=='C'&&items.Match_Ao!='0'?items.Match_RGG:''}}</span>
                        <a href="javascript:"  v-if="items.Match_Ao!=null&&items.Match_Ao!='0'"><font>{{items.Match_Ao}}</font></a>
                      </td>
                      <td align="right">
                        <span class="qiu" v-if="items.Match_DxXpl!=null&&items.Match_DxXpl!='0'">{{items.Match_DxGG2}}</span>
                        <a href="javascript:"  title="小" v-if="items.Match_DxXpl!=null&&items.Match_DxXpl!='0'"><font>{{items.Match_DxXpl}}</font></a></td>
                      <td align="right">
                        <span class="qiu" v-if="items.Match_DsDpl!=null&&items.Match_DsDpl!='0'">双</span>
                        <a href="javascript:" title="双"  v-if="items.Match_DsSpl!=null&&items.Match_DsSpl!='0'"><font>{{items.Match_DsSpl}}</font></a>
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
        <div id="refresh_down" class="refresh_M_btn" @click="clickRef('90')">
          <span>刷新</span></div>
      </div>
      <model :windowLsm="windowLsm" :modelData="modelData" @modelClose="getChild"></model>
    </div>
</template>
<script>
    import Mixin from '@/Mixin'
    import pagination from '../../components/vue-pagination'
    import model from '../../components/model'
    export default {
        name: 'basketComprehensive',
        mixins: [Mixin],
        components: {
          pagination,
          model
        },
        data: function () {
            return {
              action:'../api/app/member/show/json/bk_2_1.php',
              showType:'篮球早盘',
              pageInfo: {
                current: 1,
                pagegroup: 5,
                skin: '#86715',
              },
              eventName:'',
              time:120
            }
        },
        created: function () {

        },
        mounted: function () {
          let _self=this;
          _self.dataType = window.sessionStorage.getItem('dataType');
          if (_self.dataType == 2) {
            _self.action = '../api/app/member/show/json/bk_2_1.php';
            this.showType = '篮球早盘'
          }
          if (_self.dataType == 1) {
            _self.action = '../api/app/member/show/json/bk_1_1.php';
            this.showType = '今日篮球'
          }
          if (_self.time > 1) {
            clearInterval(_self.timer());
            _self.time = '';
            _self.timer('120')
          } else {
            _self.timer('120')
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
