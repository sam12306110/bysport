<template>
  <div>
    <div id="sportwrapbox">
      <div class="tbox">
        <div class="sporttop"><h1>{{showType}} &gt; 入球数</h1></div>
        <div class="tbox_content">
          <dl>
            <dt>
              <pagination :pageInfo="pageInfo" :soPage="soPage" @change="pageChange"></pagination>
            </dt>
            <dd class="refresh">
              <a href="javascript:;" @click="clickRef('180')" ><span id="djs">{{time}}</span></a>
            </dd>
            <dd>
              <a  title="选择联赛" class="thickbox" href="javascript:;" @click="comShowModel('op')">选择联赛(全)</a>
            </dd>
          </dl>
          <table border="1" cellpadding="0" cellspacing="0" id="data">
            <tbody>
            <tr class="datatop">
              <th class="time" style="width: 19px">时间</th>
              <th class="team" style="width: 183px">主客队伍</th>
              <th style="width: 38px">0~1</th>
              <th style="width: 38px">2~3</th>
              <th style="width: 38px">4~6</th>
              <th style="width: 38px">7up</th>
            </tr>
            <tr>
              <td colspan="6">
                <table frame="void" cellpadding="0" cellspacing="0" v-for="(item,key) in race" id="totalGoal">
                  <tr>
                    <td colspan="6" class="b_title" style="border-top:none;border-bottom:none">{{key}}</td>
                  </tr>
                  <tr v-for="items in item">
                    <td v-html="items.Match_Date" style="border-left:1px solid #C3C3C3;width: 35px"></td>
                    <td style="width: 354px">
                      {{items.Match_Master}}
                      <br>
                      {{items.Match_Guest}}
                    </td>
                    <td style="width: 78px">
                      <a @click="ClickBet('足球单式','入球数-0~1',items.Match_ID,'Match_Total01Pl','0',0,'0~1')"
                         v-if="items.Match_Total01Pl!=null&&items.Match_Total01Pl!='0'" href="javascript:;">
                        {{items.Match_Total01Pl}}
                      </a>
                    </td>
                    <td style="width: 76px">
                      <a @click="ClickBet('足球单式','入球数-2~3',items.Match_ID,'Match_Total23Pl','0',0,'2~3')"
                         v-if="items.Match_Total23Pl!=null&&items.Match_Total23Pl!='0'" href="javascript:;">
                        {{items.Match_Total23Pl}}
                      </a>
                    </td>
                    <td style="width: 76px">
                      <a @click="ClickBet('足球单式','入球数-4~6',items.Match_ID,'Match_Total46Pl','0',0,'4~6')"
                         v-if="items.Match_Total46Pl!=null&&items.Match_Total46Pl!='0'" href="javascript:;">
                        {{items.Match_Total46Pl}}
                      </a>
                    </td>
                    <td style="width: 76px">
                      <a @click="ClickBet('足球单式','入球数-7UP',items.Match_ID,'Match_Total7upPl','0',0,'7UP')"
                         v-if="items.Match_Total7upPl!=null&&items.Match_Total7upPl!='0'" href="javascript:;">
                        {{items.Match_Total7upPl}}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="refresh_down" class="refresh_M_btn" @click="clickRef('180')" ><span>刷新</span>
      </div>
    </div>
    <model :windowLsm="windowLsm" :modelData="modelData" @modelClose="getChild"></model>
  </div>
</template>
<script>
  import Mixin from '@/Mixin'
  import pagination from '../../components/vue-pagination'
  import model from '../../components/model'
  export default {
    name: 'totalGoal',
    mixins: [Mixin],
    components: {
      pagination,
      model
    },
    data: function () {
      return {
        action: '../api/app/member/show/json/ft_2_2.php',
        showType: '足球早盘',
        time: 180,
        pageInfo: {
          current: 1,
          pagegroup: 5,
          skin: '#86715',
        },
        eventName:''
      }
    },
    created: function () {

    },
    mounted: function () {
      let _self = this;
      _self.dataType=window.sessionStorage.getItem('dataType');
      if(_self.dataType==2){
        _self.action= '../api/app/member/show/json/ft_2_2.php';
        this.showType='足球早盘'
      }
      if(_self.dataType==1){
        _self.action= '../api/app/member/show/json/ft_1_2.php';
        this.showType='今日足球'
      }
      if (_self.time > 1) {
        clearInterval(_self.timer());
        _self.time = '';
        _self.timer('180')
      } else {
        _self.timer('180')
      }
    },
    methods: {
      pageChange: function (current) {
        this.getData('',current-1)
      },
      getChild: function (data) {
        let _self = this;
        _self.modelData = data;
        _self.eventName = _self.modelData.selectData;
        _self.getData(_self.modelData.selectData, '0');
      },
    }
  }

</script>
