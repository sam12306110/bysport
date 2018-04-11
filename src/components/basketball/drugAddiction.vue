<template>
    <div>
      <div id="sportwrapbox">

        <div class="tbox">
          <div class="sporttop"><h1>篮球 &gt; 单式</h1></div>
          <div class="tbox_content">
            <dl>
              <dt>
                <span id="pg_txt"><span class="pageBar">共 34 条</span></span>
              </dt>
              <dd class="refresh">
                <a href="javascript:;" onclick="reloadList()"><span id="djs">82</span></a>
              </dd>
              <dd>
                <a href="#TB_inline?height=400&amp;width=660&amp;inlineId=leagueBox" title="选择联赛" class="thickbox">选择联赛(全                        )</a>
              </dd>
            </dl>
            <table border="1" cellpadding="0" cellspacing="0" id="data">
              <tbody>
              <tr class="datatop">
                <th class="time">时间</th>
                <th class="team">主客队伍</th>
                <th>独赢盘</th>
                <th>让分</th>
                <th>大小</th>
                <th>单双</th>
                <th colspan="2">球队得分：大/小</th>
              </tr>
              <tr>
                <td colspan="10" class="b_title">韩国篮球联赛</td>
              </tr>
              <tr class="b_cen">
                <td rowspan="2" style=" white-space:nowrap;">
                  03-20<br>06:00<div class="roll">滚球</div>                        </td>
                <td rowspan="2" align="left">全州KCC宙斯盾<br>仁川东土大象 </td>
                <td>&nbsp;</td>
                <td align="right">
                  <span class="qiu">5.5</span><a href="javascript:" title="全州KCC宙斯盾"><font>0.74</font></a>                        </td>
                <td align="right">
                  <span class="qiu">大166.5</span>
                  <a href="javascript:" title="大"><font>1.03</font></a>                        </td>
                <td>
                </td>
                <td>
                  <span class="qiu"></span>
                  &nbsp;                        </td>
                <td>
                  <span class="qiu"></span>
                  &nbsp;                        </td>
              </tr>
              <tr class="b_cen">
                <td>&nbsp;</td>
                <td align="right">
                  <a href="javascript:"  title="仁川东土大象"><font>1.14</font></a>                        </td>
                <td align="right">
                  <span class="qiu">小166.5</span>
                  <a href="javascript:" title="小"><font>0.83</font></a>                        </td>
                <td>
                </td>
                <td>
                  <span class="qiu"></span>
                  &nbsp;                        </td>
                <td>
                  <span class="qiu"></span>
                  &nbsp;                        </td>
              </tr>
              <tr class="b_cen">
                <td rowspan="2" style=" white-space:nowrap;">
                  03-20<br>06:00<div class="roll">滚球</div>                        </td>
                <td rowspan="2" align="left">全州KCC宙斯盾<br>仁川东土大象 </td>
                <td>&nbsp;</td>
                <td align="right">
                  <span class="qiu">7.5</span><a href="javascript:"  title="全州KCC宙斯盾"><font>1.04</font></a>                        </td>
                <td align="right">
                  <span class="qiu">大164.5</span>
                  <a href="javascript:" title="大"><font>0.83</font></a>                        </td>
                <td>
                </td>
                <td>
                  <span class="qiu"></span>
                  &nbsp;                        </td>
                <td>
                  <span class="qiu"></span>
                  &nbsp;                        </td>
              </tr>
              <tr class="b_cen">
                <td>&nbsp;</td>
                <td align="right">
                  <a href="javascript:"  title="仁川东土大象"><font>0.84</font></a>                        </td>
                <td align="right">
                  <span class="qiu">小164.5</span>
                  <a href="javascript:" title="小"><font>1.03</font></a>
                </td>
                <td>
                </td>
                <td>
                  <span class="qiu"></span>
                  &nbsp;                        </td>
                <td>
                  <span class="qiu"></span>
                  &nbsp;                        </td>
              </tr>
              <tr class="b_cen">
                <td rowspan="2" style=" white-space:nowrap;">
                  03-20<br>06:00                        </td>
                <td rowspan="2" align="left">全州KCC宙斯盾 - (第1节)<br>仁川东土大象 - (第1节) </td>
                <td><a href="javascript:" title="全州KCC宙斯盾 - (第1节)"><font>1.48</font></a></td>
                <td align="right">
                  <span class="qiu">2.5</span><a href="javascript:"  title="全州KCC宙斯盾 - (第1节)"><font>0.84</font></a>
                </td>
                <td align="right">
                  <span class="qiu">大40.5</span>
                  <a href="javascript:" title="大"><font>0.90</font></a>                        </td>
                <td>
                  <span class="qiu">单</span><a href="javascript:"  title="单"><font>1.91</font></a>                        </td>
                <td>
                  <span class="qiu"></span>
                  &nbsp;                        </td>
                <td>
                  <span class="qiu"></span>
                  &nbsp;                        </td>
              </tr>
              <tr class="b_cen">
                <td><a href="javascript:" title="仁川东土大象 - (第1节)"><font>2.57</font></a></td>
                <td align="right">
                  <a href="javascript:" title="仁川东土大象 - (第1节)"><font>1.02</font></a>                        </td>
                <td align="right">
                  <span class="qiu">小40.5</span>
                  <a href="javascript:"title="小"><font>0.94</font></a>                        </td>
                <td>
                  <span class="qiu">双</span><a href="javascript:" title="双"><font>1.91</font></a>                        </td>
                <td>
                  <span class="qiu"></span>
                  &nbsp;                        </td>
                <td>
                  <span class="qiu"></span>
                  &nbsp;                        </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
        <div id="refresh_down" class="refresh_M_btn" >
          <span>刷新</span>
        </div>
      </div>
    </div>
</template>
<script>
    import Mixin from '@/Mixin'

    export default {
        name: 'drugAddiction',
        mixins: [Mixin],
        components: {},
        data: function () {
            return {
              action:'../api/app/member/show/json/bk_2_1.php',
            }
        },
        created: function () {

        },
        mounted: function () {
          this.getData()
        },
        methods: {}
    }

</script>
