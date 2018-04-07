<template>
    <div>
      <div id="sportwrapbox">

        <div class="tbox">
          <div class="sporttop"><h1>今日足球 &gt; 综合过关</h1></div>
          <div class="tbox_content">
            <dl>
              <dt>
				         <span id="pg_txt"><span class="pageBar"><span>[65]</span>  <span class="pageNow">1</span> <span><a href="/hg_sports/index/ft/zhgg_page-2-65_" title="最后页" target="_self">[ 2 ]</a></span> <span><a href="/hg_sports/index/ft/zhgg_page-2-65_" title="下一页" target="_self">下一页</a></span> </span>
                 </span>
              </dt>
              <dd class="refresh">
                <a href="javascript:;" onclick="reloadList()"><span id="djs">173</span></a>
              </dd>
              <dd>
                <a href="#TB_inline?height=400&amp;width=660&amp;inlineId=leagueBox" title="选择联赛" class="thickbox">选择联赛(全)</a>
              </dd>
            </dl>
            <table border="1" cellpadding="0" cellspacing="0" id="data">
              <tbody>
                  <tr class="datatop">
                        <th nowrap="" style="width: 39px"  class="time">时间</th>
                        <th nowrap="" style="width: 157px" class="team">赛事</th>
                        <th nowrap="" class="h_1x2" style="width: 38px;">独赢</th>
                        <th nowrap="" class="h_r"  style="width: 93px;">全场 - 让球</th>
                        <th nowrap="" class="h_ou" style="width: 93px;">全场 - 大小</th>
                        <th nowrap="" class="h_oe" style="width: 49px;">单双</th>
                        <th nowrap="" class="h_1x2" style="width: 36px;">独赢</th>
                        <th nowrap="" class="h_r" style="width: 91px;">半场 - 让球</th>
                  <th nowrap="" class="h_ou" style="width: 88px;">半场 - 大小</th>
                </tr>
                  <tr>
                <td colspan="9" >
                  <table frame="void" cellpadding="0" cellspacing="0" v-for="(item,key) in race" id="stf">
                    <tr>
                      <td colspan="8" class="b_title" style="border-bottom:none">{{key}}</td>
                      <td align="right" class="b_title2" style="border-left:none;border-bottom:none">3串1</td>
                    </tr>
                    <tbody v-for="items in item">
                       <tr>
                      <td style="border-left:1px solid #C3C3C3;border-bottom:1px solid #C3C3C3 ; width: 35px" rowspan="3" v-html="items.Match_Date">
                      </td>
                      <td rowspan="2" align="left" style="width: 157px;">
                        {{items.Match_Master}}<br>{{items.Match_Guest}}
                      </td>
                      <td align="right" style="width: 38px;">
                        <a href="javascript:"  title=""><font>{{items.Match_BzM}}</font></a>
                      </td>
                      <td align="right" style="width: 93px;">
                        <a href="javascript:"  title=""><font>{{items.Match_Ho}}</font></a>
                      </td>
                      <td align="right" style="width: 93px;">
                        <span class="qiu">{{items.Match_DxGG1}}</span>
                        <a href="javascript:"title="大"><font>{{items.Match_DxDpl}}</font></a>
                      </td>
                      <td style="width: 49px;" align="right">
                        <span class="qiu">单</span>
                        <a href="javascript:" title="单"><font>{{items.Match_DsDpl}}</font></a>
                      </td>
                      <td style="width: 36px;" align="right" class="b_1st">
                        <a href="javascript:"  title=""><font>{{items.Match_Bmdy}}</font></a>
                      </td>
                      <td style="width: 91px;" align="right" class="b_1st">
                        <a href="javascript:"  title=""><font>{{items.Match_BHo}}</font></a>
                      </td>
                      <td style="width: 88px;" align="right" class="b_1st">
                        <span class="qiu">{{items.Match_Bdxpk1}}</span>
                        <a href="javascript:"  title="大"><font>{{items.Match_Bdpl}}</font></a>
                      </td>
                    </tr>
                       <tr>
                      <td align="right">
                        <a href="javascript:"  title=""><font>{{items.Match_BzG}}</font></a>
                      </td>
                      <td align="right">
                        <span class="qiu">{{items.Match_ShowType=='C'&&items.Match_Ao!='0'?items.Match_RGG:''}}</span>
                        <a href="javascript:"  title=""><font>{{items.Match_Ao}}</font></a>
                      </td>
                      <td align="right">
                        <span class="qiu">{{items.Match_DxGG2}}</span>
                        <a href="javascript:"  title="小"><font>{{items.Match_DxXpl}}</font></a></td>
                      <td align="right">
                        <span class="qiu">双</span>
                        <a href="javascript:" title="双"><font>{{items.Match_DsSpl}}</font></a>
                      </td>
                      <td align="right" class="b_1st">
                        <a href="javascript:"  title="洛克达尔"><font>{{items.Match_Bgdy1}}</font></a>
                      </td>
                      <td align="right" class="b_1st">
                        <span class="qiu">{{items.Match_ShowType=='C'&&items.Match_Ao!='0'?items.Match_RGG:''}}</span>
                        <a href="javascript:" title="洛克达尔"><font>{{items.Match_BAo}}</font></a>
                      </td>
                      <td align="right" class="b_1st">
                        <span class="qiu">{{items.Match_Bdxpk2}}</span>
                        <a href="javascript:" title="小"><font>{{items.Match_Bxpl}}</font></a>
                      </td>
                    </tr>
                       <tr >
                      <td align="left">和局</td>
                      <td align="right">
                        <a href="javascript:"title="和局"><font>{{items.Match_BzH}}</font></a>
                      </td>
                      <td colspan="3"></td>
                      <td align="right" class="b_1st">
                        <a href="javascript:" title="和局"><font>{{items.Match_Bhdy1}}</font></a>
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
        <div id="refresh_down" class="refresh_M_btn" onclick="this.className='refresh_M_on';javascript:refload();"><span>刷新</span></div>
      </div>
    </div>
</template>
<script>
    import Mixin from '@/Mixin'

    export default {
        name: 'Comprehensive',
        mixins: [Mixin],
        components: {},
        data: function () {
            return {
                action:'../api/app/member/show/json/ft_1_1.php',
                showType:'今日',
                time: 121,
            }
        },
        created: function () {

        },
        mounted: function () {
          let _self=this;
          _self.getData()
        },
        methods: {}
    }

</script>
