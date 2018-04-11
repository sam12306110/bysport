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
                <a title="选择联赛" class="thickbox">选择联赛(全)</a>
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
              action:'../api/app/member/show/json/bk_1_1.php',
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
