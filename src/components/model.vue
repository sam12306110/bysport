<template>
    <div>
      <div  v-if="showBg" id="TB_overlay" class="TB_overlayBG"></div>
      <div  v-if="showBg" id="TB_window" style=" width: 690px;">
        <div id="TB_title">
          <div id="TB_ajaxWindowTitle">选择联赛</div>
          <div id="TB_closeAjaxWindow">Esc Key
            <a href="#" id="TB_closeWindowButton">
              <img src="//static1.tbk-app.net/images/close.jpg" border="0">
            </a>
          </div>
        </div>
        <div id="TB_ajaxContent" style="width:660px;height:395px">
            <ul>
              <li><input type="checkbox" name="leagues[]" value="南澳洲国家超级联赛">南澳洲国家超级联赛</li>
              <li><input type="checkbox" name="leagues[]" value="南韩国家联赛">南韩国家联赛</li>
              <li><input type="checkbox" name="leagues[]" value="哥伦比亚甲组联赛" checked="">哥伦比亚甲组联赛</li>
              <li><input type="checkbox" name="leagues[]" value="国际友谊赛">国际友谊赛</li>
            </ul>
            <div class="btnBox">
              <input type="hidden" name="select_all" class="selectAll" value="">
              <input type="button" name="all"  value="全选" class="btn">
              <input type="reset" name="unall" value="全不选" class="btn">
              <input type="submit" name="submit" value="确定" class="btn">
            </div>
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
              showB:this.showBg
            }
        },
        created: function () {
         console.log(this.showBg)
        },
        mounted: function () {

        },
        methods: {}
    }

</script>
