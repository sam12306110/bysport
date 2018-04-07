<template>
    <div>
      <div id="sportwrapbox">


        <div class="tbox">
          <div class="sporttop"><h1>篮球 &gt; 综合过关</h1></div>
          <div class="tbox_content">
            <dl>
              <dt>
                <span id="pg_txt"><span class="pageBar">共 32 条</span></span>
              </dt>
              <dd class="refresh">
                <a href="javascript:;" onclick="reloadList()"><span id="djs">47</span></a>
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
                <th>单/双</th>
                <th colspan="2">球队得分：大/小</th>
              </tr>
              <tr><td colspan="7" class="b_title">韩国篮球联赛</td><td align="right" class="b_title2">3串1</td></tr>                    <tr class="b_cen">
                <td rowspan="2">03-20<br>06:00<div class="roll">滚球</div></td>
                <td rowspan="2" align="left">全州KCC宙斯盾<br>仁川东土大象 </td>
                <td>&nbsp;</td>
                <td align="right"><span class="qiu">5.5</span><a href="javascript:" onclick="parent.orderFrame.selectMatch(&quot;2449022&quot;,&quot;bb&quot;,&quot;zhgg&quot;,&quot;rq_h&quot;)" title="全州KCC宙斯盾"><font>1.70</font></a></td>
                <td align="right"><span class="qiu">大166.5</span>
                  <a href="javascript:" onclick="parent.orderFrame.selectMatch(&quot;2449022&quot;,&quot;bb&quot;,&quot;zhgg&quot;,&quot;dx_h&quot;)" title="大"><font>2.01</font></a></td>
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
                <td align="right"><a href="javascript:" onclick="parent.orderFrame.selectMatch(&quot;2449022&quot;,&quot;bb&quot;,&quot;zhgg&quot;,&quot;rq_c&quot;)" title="仁川东土大象"><font>2.16</font></a></td>
                <td align="right"><span class="qiu">小166.5</span>
                  <a href="javascript:" onclick="parent.orderFrame.selectMatch(&quot;2449022&quot;,&quot;bb&quot;,&quot;zhgg&quot;,&quot;dx_c&quot;)" title="小"><font>1.81</font></a></td>
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
                <td rowspan="2">03-20<br>06:00<div class="roll">滚球</div></td>
                <td rowspan="2" align="left">全州KCC宙斯盾<br>仁川东土大象 </td>
                <td>&nbsp;</td>
                <td align="right"><span class="qiu">7.5</span><a href="javascript:" onclick="parent.orderFrame.selectMatch(&quot;2449015&quot;,&quot;bb&quot;,&quot;zhgg&quot;,&quot;rq_h&quot;)" title="全州KCC宙斯盾"><font>2.00</font></a></td>
                <td align="right"><span class="qiu">大164.5</span>
                  <a href="javascript:" onclick="parent.orderFrame.selectMatch(&quot;2449015&quot;,&quot;bb&quot;,&quot;zhgg&quot;,&quot;dx_h&quot;)" title="大"><font>1.81</font></a></td>
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
                <td align="right"><a href="javascript:" onclick="parent.orderFrame.selectMatch(&quot;2449015&quot;,&quot;bb&quot;,&quot;zhgg&quot;,&quot;rq_c&quot;)" title="仁川东土大象"><font>1.84</font></a></td>
                <td align="right"><span class="qiu">小164.5</span>
                  <a href="javascript:" onclick="parent.orderFrame.selectMatch(&quot;2449015&quot;,&quot;bb&quot;,&quot;zhgg&quot;,&quot;dx_c&quot;)" title="小"><font>2.01</font></a></td>
                <td>
                </td>
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
        <div id="refresh_down" class="refresh_M_btn" onclick="this.className='refresh_M_on';javascript:refload();">
          <span>刷新</span></div>
      </div>
    </div>
</template>
<script>
    import Mixin from '@/Mixin'

    export default {
        name: 'basketComprehensive',
        mixins: [Mixin],
        components: {},
        data: function () {
            return {}
        },
        created: function () {

        },
        mounted: function () {

        },
        methods: {}
    }

</script>
