<template>
    <div>
      <div id="orderBox">
        <p>可用额度：{{userMoney}}</p>
        <h6>
          {{$store.state.betData.typeName}}
        </h6>
        <div class="ord">
          <p class="league"></p>
          <p> {{$store.state.betData.zhuKe.zhu}}<em> VS </em>{{$store.state.betData.zhuKe.ke}}</p>
          <p>{{$store.state.betData.eventMing}} @ <span class="odds">{{$store.state.betData.peiLv}}</span></p>
          <p>下注金额：<input type="text" class="gold" v-model="amount"></p>
          <p>可赢金额：<font class="win" id="canWin">{{amount ? winAmount : '0.00'}}</font></p>
        </div>
        <div class="tb_confirm">
          <input type="button" name="close" value="取消交易"  class="no">
          <span id="submit"><input type="button" id="ordersubmit" name="submit" value="确定交易" class="yes"></span>
        </div>
        <div class="remark">
          <p>自动接受最新赔率</p>
          <p>最低限额：{{limit}}</p>
          <p>单注限额：100000</p>
          <p>单场最高：200000</p>
        </div>
      </div>
    </div>
</template>
<script>
    import Mixin from '@/Mixin'
    import $store from '../_vuex/store'
    export default {
        name: 'Bet',
        props:['userMoney'],
        mixins: [Mixin],
        components: {},
        data: function () {
            return {
              amount: '',
              winAmount: '',
              limit: 20,

              suInfo:''
            }
        },
      watch: {
        amount(nev) {
          if (Number(nev) > Number(this.userMoney)) {
            alert('您的账户余额不足');
            this.amount = '';
            return
          }
          if (this.$store.state.sportArr.length !== 0) {
            let sum = 1;
            this.$store.state.sportArr.forEach((v, i) => {
              if (v[7].indexOf('独赢') !== -1 || v[7].indexOf('和局') !== -1 || v[7].indexOf('单双') !== -1) {

                sum *= (v[4] - 0)
              } else {
                sum *= (v[4] - 0 + 1);
              }
            });
            this.winAmount = (sum * nev).toFixed(2);
          } else {
            this.winAmount = (nev * $store.state.betData.peiLv).toFixed(2)
          }

        }
      },
        created: function () {

        },
        mounted: function () {

        },
        methods: {
          submitBet: function (type) {
            let _self = this;
            let reg=/^[1-9]+[0-9]*]*$/;
            if(!reg.test(_self.amount)){
              alert('请输入纯数字');
              return
            }
            if (_self.limit > _self.amount) {
              alert('交易金额最少为 ' + _self.limit);
              return
            }
            let data = {};
            let event = [],
              typename = [],
              match_id_in = [],
              peiLv = [],
              point_column = [];
            if (type === '0') {
              typename.push($store.state.betData.typeName);
              match_id_in.push($store.state.betData.match_id_in);
              peiLv.push($store.state.betData.peiLv);
              event.push($store.state.betData.event);
              point_column.push($store.state.betData.point_column);
              data.touzhutype = '0';
              data.bet_money = _self.amount;
              data.ball_sort = typename;
              data.match_id = match_id_in;
              data.bet_point = peiLv;
              data.match_name =event ;
              data.point_column =point_column ;
            }
            else {
              data.touzhutype = '1';

              for (let i = 0; i < _self.$store.state.sportArr.length; i++) {
                event.push(_self.$store.state.sportArr[i][0]);
                typename.push(_self.$store.state.sportArr[i][1]);
                match_id_in.push(_self.$store.state.sportArr[i][2]);
                peiLv.push(_self.$store.state.sportArr[i][4]);
                point_column.push(_self.$store.state.sportArr[i][6])
              }
              data.bet_money = this.amount;
              data.ball_sort = typename;
              data.match_id = match_id_in;
              data.bet_point = peiLv;
              data.match_name = event;
              data.point_column = point_column;
            }
            axios.post('../api/app/member/bet.php', data
            ).then(function (res) {
              _self.amount = '';
              _self.$store.state.BetSwitch = false;
              _self.$store.state.sportArr = [];
              _self.sportArr1 = [];
              if (res.status === 200 && res.data.code === 0) {
                _self.userMoney=res.data.data.money;
                _self.suInfo=res.data.msg;
              }

            }).catch(function (err) {
              throw err
            })
          },
          removeArr: function (index) {
            this.$store.state.sportArr.splice(index, 1);
            if (this.$store.state.sportArr.length === 0) {
              this.$store.state.betShow = false
            }
          },

        }
    }

</script>
