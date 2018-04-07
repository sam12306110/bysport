<template>
    <div>
      <div  v-if="showB" id="TB_overlay" class="TB_overlayBG"></div>
      <div  v-if="showB" id="TB_window" style=" width: 690px;">
        <div id="TB_title">
          <div id="TB_ajaxWindowTitle">选择联赛</div>
          <div id="TB_closeAjaxWindow">Esc Key
            <a href="#" id="TB_closeWindowButton">
              <img src="//static1.tbk-app.net/images/close.jpg" border="0">
            </a>
          </div>
        </div>
        <div id="TB_ajaxContent" style="width:660px;height:395px">
          <form action="/hg_sports/index/ft/ds" method="post" id="leagueForm">
            <ul>
              <li><input type="checkbox" name="leagues[]" value="南澳洲国家超级联赛">南澳洲国家超级联赛</li>
              <li><input type="checkbox" name="leagues[]" value="南韩国家联赛">南韩国家联赛</li>
              <li><input type="checkbox" name="leagues[]" value="哥伦比亚甲组联赛" checked="">哥伦比亚甲组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="国际友谊赛">国际友谊赛</li>
              <li><input type="checkbox" name="leagues[]" value="国际友谊赛U18">国际友谊赛U18</li>
              <li><input type="checkbox" name="leagues[]" value="国际友谊赛U20">国际友谊赛U20</li>
              <li><input type="checkbox" name="leagues[]" value="国际友谊赛U23">国际友谊赛U23</li>
              <li><input type="checkbox" name="leagues[]" value="国际足球锦标赛(在中国)">国际足球锦标赛(在中国)</li>
              <li><input type="checkbox" name="leagues[]" value="室内五人足球-俄罗斯超级联赛50分钟">室内五人足球-俄罗斯超级联赛50分钟</li>
              <li><input type="checkbox" name="leagues[]" value="巴西东北杯" checked="">巴西东北杯</li>
              <li><input type="checkbox" name="leagues[]" value="巴西伯南布哥甲组一联赛">巴西伯南布哥甲组一联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西卡德里那斯甲组联赛" checked="">巴西卡德里那斯甲组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西国亚诺甲组联赛">巴西国亚诺甲组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西圣保罗州甲组一联赛" checked="">巴西圣保罗州甲组一联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西圣保罗州甲组三联赛" checked="">巴西圣保罗州甲组三联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西圣保罗州甲组二联赛">巴西圣保罗州甲组二联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西巴西利亚甲组联赛" checked="">巴西巴西利亚甲组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西帕拉伊巴甲组联赛" checked="">巴西帕拉伊巴甲组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西帕拉尼恩斯乙组联赛">巴西帕拉尼恩斯乙组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西帕拉尼恩斯甲组联赛">巴西帕拉尼恩斯甲组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西米内罗甲组联赛" checked="">巴西米内罗甲组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西里约州甲组联赛" checked="">巴西里约州甲组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西里约州甲组联赛U20">巴西里约州甲组联赛U20</li>
              <li><input type="checkbox" name="leagues[]" value="巴西高卓甲组一联赛" checked="">巴西高卓甲组一联赛</li>
              <li><input type="checkbox" name="leagues[]" value="巴西高卓甲组二联赛" checked="">巴西高卓甲组二联赛</li>
              <li><input type="checkbox" name="leagues[]" value="库班女子春季锦标赛U19(在俄罗斯)">库班女子春季锦标赛U19(在俄罗斯)</li>
              <li><input type="checkbox" name="leagues[]" value="德国东北部联赛" checked="">德国东北部联赛</li>
              <li><input type="checkbox" name="leagues[]" value="德国北部联赛" checked="">德国北部联赛</li>
              <li><input type="checkbox" name="leagues[]" value="德国女子乙组联赛">德国女子乙组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="德国尼德赫茵杯">德国尼德赫茵杯</li>
              <li><input type="checkbox" name="leagues[]" value="德国戊组联赛" checked="">德国戊组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="德国萨克森安哈尔特杯">德国萨克森安哈尔特杯</li>
              <li><input type="checkbox" name="leagues[]" value="德国西部联赛">德国西部联赛</li>
              <li><input type="checkbox" name="leagues[]" value="意大利丁组联赛">意大利丁组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="意大利丙组联赛" checked="">意大利丙组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="意大利女子杯">意大利女子杯</li>
              <li><input type="checkbox" name="leagues[]" value="日本J2联赛">日本J2联赛</li>
              <li><input type="checkbox" name="leagues[]" value="欧洲U17青年锦标赛外围赛">欧洲U17青年锦标赛外围赛</li>
              <li><input type="checkbox" name="leagues[]" value="欧洲U19青年锦标赛外围赛" checked="">欧洲U19青年锦标赛外围赛</li>
              <li><input type="checkbox" name="leagues[]" value="欧洲女子冠军联赛" checked="">欧洲女子冠军联赛</li>
              <li><input type="checkbox" name="leagues[]" value="法国乙组全国联赛">法国乙组全国联赛</li>
              <li><input type="checkbox" name="leagues[]" value="英格兰乙组联赛" checked="">英格兰乙组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="英格兰伊斯米安超级联赛" checked="">英格兰伊斯米安超级联赛</li>
              <li><input type="checkbox" name="leagues[]" value="英格兰甲组联赛" checked="">英格兰甲组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="英格兰足球协会全国联赛" checked="">英格兰足球协会全国联赛</li>
              <li><input type="checkbox" name="leagues[]" value="葡萄牙甲组联赛">葡萄牙甲组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="西班牙丙组联赛" checked="">西班牙丙组联赛</li>
            </ul>
            <div class="btnBox">
              <input type="hidden" name="select_all" class="selectAll" value="">
              <input type="button" name="all" onclick="selectAll()" value="全选" class="btn">
              <input type="reset" name="unall" onclick="unselectAll()" value="全不选" class="btn">
              <input type="submit" name="submit" value="确定" class="btn">
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
<script>
//    import Mixin from '@/Mixin'
    export default {
        name: 'model',
//        mixins: [Mixin],
        props:['showBg'],
        computed:{
        },
        data: function () {
            return {
                showB:showBg
            }
        },
        created: function () {

        },
        mounted: function () {

        },
        methods: {}
    }

</script>
