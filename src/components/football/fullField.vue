<template>
    <div>
      <div id="sportwrapbox">
        <div class="tbox">
          <div class="sporttop"><h1>今日足球 &gt; 半全场</h1></div>
          <div class="tbox_content">
            <dl>
              <dt>
                <span id="pg_txt"><span class="pageBar">共 16 条</span></span>
              </dt>
              <dd class="refresh">
                <a href="javascript:;" onclick="reloadList()"><span id="djs">176</span></a>
              </dd>
              <dd>
                <a href="#TB_inline?height=400&amp;width=660&amp;inlineId=leagueBox" title="选择联赛" class="thickbox">选择联赛(全)</a>
              </dd>
            </dl>
            <table border="1" cellpadding="0" cellspacing="0" id="data">
              <tbody>
              <tr class="datatop">
                <th class="time" style="width: 38px">时间</th>
                <th class="team" style="width: 140px">主客队伍</th>
                <th style="width: 60px">主/主</th>
                <th style="width: 55px">主/和</th>
                <th style="width: 55px">主/客</th>
                <th style="width: 55px">和/主</th>
                <th style="width: 55px">和/和</th>
                <th style="width: 55px">和/客</th>
                <th style="width: 55px">客/主</th>
                <th style="width: 55px">客/和</th>
                <th style="width: 55px">客/客</th>
              </tr>
              <tr>
                  <td colspan="11">
                      <table frame="void" cellpadding="0" cellspacing="0" v-for="(item,key) in race" id="totalGoal">
                        <tr>
                          <td colspan="11" class="b_title" style="border-top:none;border-bottom:none">{{key}}</td>
                        </tr>
                        <tr v-for="items in item">
                          <td  v-html="items.Match_Date" width="2px"></td>
                          <td width="143px" >
                            {{items.Match_Master}}
                            <br>
                            {{items.Match_Guest}}
                          </td>
                          <td width="60px" >
                            <a @click="ClickBet('足球单式','半全场-主/主',items.Match_ID,'Match_BqMM','0','0','主/主')" v-if="items.Match_BqMM!=null&&items.Match_BqMM!='0'" href="javascript:;">
                              {{items.Match_BqMM}}
                            </a>
                          </td>
                          <td width="55px" >
                            <a @click="ClickBet('足球单式','半全场-主/和',items.Match_ID,'Match_BqMH','0','0','主/和')" v-if="items.Match_BqMH!=null&&items.Match_BqMH!='0'" href="javascript:;">
                              {{items.Match_BqMH}}
                            </a>
                          </td>
                          <td width="54px" >
                            <a @click="ClickBet('足球单式','半全场-主/客',items.Match_ID,'Match_BqMG','0','0','主/客')" v-if="items.Match_BqMG!=null&&items.Match_BqMG!='0'" href="javascript:;">
                              {{items.Match_BqMG}}
                            </a>
                          </td>
                          <td width="55px" >
                            <a @click="ClickBet('足球单式','半全场-和/主',items.Match_ID,'Match_BqHM','0','0','和/主')" v-if="items.Match_BqHM!=null&&items.Match_BqHM!='0'" href="javascript:;">
                              {{items.Match_BqHM}}
                            </a>
                          </td>
                          <td width="55px" >
                            <a @click="ClickBet('足球单式','半全场-和/和',items.Match_ID,'Match_BqHH','0','0','和/和')" v-if="items.Match_BqHH!=null&&items.Match_BqHH!='0'" href="javascript:;">
                              {{items.Match_BqHH}}
                            </a>
                          </td>
                          <td width="55px" >
                            <a @click="ClickBet('足球单式','半全场-和/客',items.Match_ID,'Match_BqHG','0','0','和/客')" v-if="items.Match_BqHG!=null&&items.Match_BqHG!='0'" href="javascript:;">
                              {{items.Match_BqHG}}
                            </a>
                          </td>
                          <td width="55px" >
                            <a @click="ClickBet('足球单式','半全场-客/主',items.Match_ID,'Match_BqGM','0','0','客/主')" v-if="items.Match_BqGM!=null&&items.Match_BqGM!='0'" href="javascript:;">
                              {{items.Match_BqGM}}
                            </a>
                          </td>
                          <td width="55px" >
                            <a @click="ClickBet('足球单式','半全场-客/和',items.Match_ID,'Match_BqGH','0','0','客/和')" v-if="items.Match_BqGH!=null&&items.Match_BqGH!='0'" href="javascript:;">
                              {{items.Match_BqGH}}
                            </a>
                          </td>
                          <td width="54px" >
                            <a @click="ClickBet('足球单式','半全场-客/客',items.Match_ID,'Match_BqGG','0','0','客/客')" v-if="items.Match_BqGG!=null&&items.Match_BqGG!='0'" href="javascript:;">
                              {{items.Match_BqGG}}
                            </a>
                          </td>
                        </tr>
                      </table>
                  </td>
              </tr>


              </tbody>
            </table>
          </div></div>

        <div id="refresh_down" class="refresh_M_btn" onclick="this.className='refresh_M_on';javascript:refload();"><span>刷新</span></div>
      </div>
    </div>
</template>
<script>
    import Mixin from '@/Mixin'

    export default {
        name: 'fullField',
        mixins: [Mixin],
        components: {},
        data: function () {
            return {
                action:'../api/app/member/show/json/ft_1_3.php',
                showType:'半场/全场',
                time: 121,
            }
        },
        created: function () {

        },
        mounted: function () {
          let _self=this;
          _self.getData()
        },
        methods: {

        }
    }

</script>
