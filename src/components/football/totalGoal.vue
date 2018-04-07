<template>
  <div>
    <div id="sportwrapbox">

      <div class="tbox">
        <div class="sporttop"><h1>今日足球 &gt; 入球数</h1></div>
        <div class="tbox_content">
          <dl>
            <dt>
              <span id="pg_txt"><span class="pageBar">共 16 条</span></span>
            </dt>
            <dd class="refresh">
              <a href="javascript:;" onclick="reloadList()"><span id="djs">5</span></a>
            </dd>
            <dd>
              <a href="#TB_inline?height=400&amp;width=660&amp;inlineId=leagueBox" title="选择联赛"
                 class="thickbox">选择联赛(全)</a>
            </dd>
          </dl>
          <table border="1" cellpadding="0" cellspacing="0" id="data">
            <tbody>
            <tr class="datatop">
              <th class="time" style="width: 19px">时间</th>
              <th class="team" style="width: 183px">主客队伍</th>
              <th style="width: 38px">0~1</th>
              <th style="width: 38px">2~3</th>
              <th style="width: 38px">4~6</th>
              <th style="width: 38px">7up</th>
            </tr>
            <tr>
              <td colspan="6">
                <table frame="void" cellpadding="0" cellspacing="0" v-for="(item,key) in race" id="totalGoal">
                  <tr>
                    <td colspan="6" class="b_title" style="border-top:none;border-bottom:none">{{key}}</td>
                  </tr>
                  <tr v-for="items in item">
                    <td v-html="items.Match_Date" style="border-left:1px solid #C3C3C3;width: 35px"></td>
                    <td style="width: 354px">
                      {{items.Match_Master}}
                      <br>

                      {{items.Match_Guest}}
                    </td>
                    <td style="width: 78px">
                      <a @click="ClickBet('足球单式','入球数-0~1',items.Match_ID,'Match_Total01Pl','0',0,'0~1')"
                         v-if="items.Match_Total01Pl!=null&&items.Match_Total01Pl!='0'" href="javascript:;">
                        {{items.Match_Total01Pl}}
                      </a>
                    </td>
                    <td style="width: 76px">
                      <a @click="ClickBet('足球单式','入球数-2~3',items.Match_ID,'Match_Total23Pl','0',0,'2~3')"
                         v-if="items.Match_Total23Pl!=null&&items.Match_Total23Pl!='0'" href="javascript:;">
                        {{items.Match_Total23Pl}}
                      </a>
                    </td>
                    <td style="width: 76px">
                      <a @click="ClickBet('足球单式','入球数-4~6',items.Match_ID,'Match_Total46Pl','0',0,'4~6')"
                         v-if="items.Match_Total46Pl!=null&&items.Match_Total46Pl!='0'" href="javascript:;">
                        {{items.Match_Total46Pl}}
                      </a>
                    </td>
                    <td style="width: 76px">
                      <a @click="ClickBet('足球单式','入球数-7UP',items.Match_ID,'Match_Total7upPl','0',0,'7UP')"
                         v-if="items.Match_Total7upPl!=null&&items.Match_Total7upPl!='0'" href="javascript:;">
                        {{items.Match_Total7upPl}}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="refresh_down" class="refresh_M_btn" onclick="this.className='refresh_M_on';javascript:refload();"><span>刷新</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Mixin from '@/Mixin'

  export default {
    name: 'totalGoal',
    mixins: [Mixin],
    components: {},
    data: function () {
      return {
        action: '../api/app/member/show/json/ft_1_2.php',
        showType: '总入球',
        time: 121,
      }
    },
    created: function () {

    },
    mounted: function () {
      let _self = this;
      _self.getData()
    },
    methods: {}
  }

</script>
