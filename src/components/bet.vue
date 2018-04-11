<template>
    <div>
      <div id="orderBox">
        <p>可用额度：9590.38</p>
        <h6>
          足球-单式
        </h6>
        <div class="ord">
          <p class="league">俄罗斯甲组联赛</p>
          <p>法克尔<em> VS </em>库班</p>
          <p>全场-独赢<br>和局 @ <span class="odds">3.15</span></p>
          <p>下注金额：<input type="text" class="gold"></p>
          <p>可赢金额：<font class="win" id="canWin">0</font></p>
        </div>
        <div class="tb_confirm">
          <input type="hidden" name="match_id" value="3174948">
          <input type="hidden" name="stype" value="ft">
          <input type="hidden" name="type" value="ds">
          <input type="hidden" name="btype" value="dy_d">
          <input type="button" name="close" value="取消交易" onclick="cancelOrder()" class="no">
          <span id="submit"><input type="submit" id="ordersubmit" name="submit" value="确定交易" class="yes"></span>
        </div>
        <div class="remark">
          <p>自动接受最新赔率</p>
          <p>最低限额：20</p>
          <p>单注限额：100000</p>
          <p>单场最高：200000</p>
        </div>

      </div>

    </div>
</template>
<script>
    import Mixin from '@/Mixin'
    export default {
        name: 'Bet',
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
