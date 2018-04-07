<template>
    <div>
         <div id="sportwrapbox">
        <div class="tbox">
          <div class="sporttop"><h1>篮球 &gt; 滚球&gt;</h1></div>
          <div class="tbox_content">
            <dl>
              <dt>
                <span id="pg_txt"></span>
              </dt>
              <dd class="refresh">
                <a href="javascript:;" onclick="reloadList()"><span id="djs">8</span></a>
              </dd>
              <dd>
                <a href="#TB_inline?height=400&amp;width=660&amp;inlineId=leagueBox" title="选择联赛" class="thickbox">选择联赛(全)</a>
              </dd>
            </dl>
            <table border="1" cellpadding="0" cellspacing="0" id="data">
              <tbody><tr class="datatop">
                <th class="time">时间</th>
                <th class="team">主客队伍</th>
                <th>独赢盘</th>
                <th>让分</th>
                <th>大小</th>
                <th>单/双</th>
                <th colspan="2">球队得分：大/小</th>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="refresh_down" class="refresh_M_btn" onclick="this.className='refresh_M_on';javascript:refload();">
          <span>刷新</span>
        </div>
      </div>
    </div>
</template>
<script>
    import Mixin from '@/Mixin'
    export default {
        name: 'basketRollBall',
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
