<template>
  <div>
    <div id="sportwrapbox">
      <div class="tbox">
        <div class="sporttop"><h1>{{showType}}&gt; 半全场</h1></div>
        <div class="tbox_content">
          <dl>
            <dt>
              <pagination :pageInfo="pageInfo" :soPage="soPage" @change="pageChange"></pagination>
            </dt>
            <dd class="refresh">
              <a href="javascript:;" @click="clickRef('180')"><span id="djs">{{time}}</span></a>
            </dd>
            <dd>
              <a @click="comShowModel('op')" href="javascript:;" title="选择联赛"
                 class="thickbox">选择联赛(全)</a>
            </dd>
          </dl>
          <table border="1" cellpadding="0" cellspacing="0" id="data">
            <tbody>
            <tr class="datatop">
              <th class="time" style="width: 38px">时间</th>
              <th class="team" style="width: 140px">主客队伍</th>
              <th style="width: 60px">主/主</th>
              <th style="width: 55px">主/和</th>
              <th style="width: 55px">主/客</th>
              <th style="width: 55px">和/主</th>
              <th style="width: 55px">和/和</th>
              <th style="width: 55px">和/客</th>
              <th style="width: 55px">客/主</th>
              <th style="width: 55px">客/和</th>
              <th style="width: 55px">客/客</th>
            </tr>
            <tr>
              <td colspan="11">
                <table frame="void" cellpadding="0" cellspacing="0" v-for="(item,key) in race" id="totalGoal">
                  <tr>
                    <td colspan="11" class="b_title" style="border-top:none;border-bottom:none">{{key}}</td>
                  </tr>
                  <tr v-for="items in item">
                    <td v-html="items.Match_Date" width="2px"></td>
                    <td width="143px">
                      {{items.Match_Master}}
                      <br>
                      {{items.Match_Guest}}
                    </td>
                    <td width="60px">
                      <a @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'主/主',items.Match_BqMM,'0','Match_BqMM')" v-if="items.Match_BqMM!=null&&items.Match_BqMM!='0'" href="javascript:;">
                        {{items.Match_BqMM}}
                      </a>
                    </td>
                    <td width="55px">
                      <a @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'主/和',items.Match_BqMH,'0','Match_BqMH')" v-if="items.Match_BqMH!=null&&items.Match_BqMH!='0'" href="javascript:;">
                        {{items.Match_BqMH}}
                      </a>
                    </td>
                    <td width="54px">
                      <a @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'主/客',items.Match_BqMG,'0','Match_BqMG')" v-if="items.Match_BqMG!=null&&items.Match_BqMG!='0'" href="javascript:;">
                        {{items.Match_BqMG}}
                      </a>
                    </td>
                    <td width="55px">
                    <a @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'和/主',items.Match_BqHM,'0','Match_BqHM')" v-if="items.Match_BqHM!=null&&items.Match_BqHM!='0'" href="javascript:;">
                      {{items.Match_BqHM}}
                    </a>
                      </td>
                    <td width="55px">
                    <a @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'和/和',items.Match_BqHH,'0','Match_BqHH')" v-if="items.Match_BqHH!=null&&items.Match_BqHH!='0'" href="javascript:;">
                      {{items.Match_BqHH}}
                    </a>
                    </td>
                    <td width="55px">
                      <a @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'和/客',items.Match_BqHG,'0','Match_BqHG')" v-if="items.Match_BqHG!=null&&items.Match_BqHG!='0'" href="javascript:;">
                        {{items.Match_BqHG}}
                      </a>
                    </td>
                    <td width="55px">
                      <a @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'客/主',items.Match_BqGM,'0','Match_BqGM')" v-if="items.Match_BqGM!=null&&items.Match_BqGM!='0'" href="javascript:;">
                        {{items.Match_BqGM}}
                      </a>
                    </td>
                    <td width="55px">
                      <a @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'客/和',items.Match_BqGH,'0','Match_BqGH')" v-if="items.Match_BqGH!=null&&items.Match_BqGH!='0'" href="javascript:;">
                        {{items.Match_BqGH}}
                      </a>
                    </td>
                    <td width="54px">
                      <a @click="ClickBet('足球单式',key,items.Match_ID,items.Match_Date,{zhu:items.Match_Master,ke:items.Match_Guest},'客/客',items.Match_BqGG,'0','Match_BqGG')" v-if="items.Match_BqGG!=null&&items.Match_BqGG!='0'" href="javascript:;">
                        {{items.Match_BqGG}}
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

      <div id="refresh_down" class="refresh_M_btn" @click="clickRef('180')"><span>刷新</span>
      </div>
      <model :windowLsm="windowLsm" :modelData="modelData" @modelClose="getChild"></model>
    </div>
  </div>
</template>
<script>
  import Mixin from '@/Mixin'
  import pagination from '../../components/vue-pagination'
  import model from '../../components/model'

  export default {
    name: 'fullField',
    mixins: [Mixin],
    components: {
      pagination,
      model
    },
    data: function () {
      return {
        action: '../api/app/member/show/json/ft_2_3.php',
        showType: '足球早盘',
        time: 180,
        pageInfo: {
          current: 1,
          pagegroup: 5,
          skin: '#86715',
        },
        eventName: ''
      }
    },
    created: function () {

    },
    mounted: function () {
      let _self = this;

      _self.dataType = window.sessionStorage.getItem('dataType');
      if (_self.dataType == 2) {
        _self.action = '../api/app/member/show/json/ft_2_3.php';
        this.showType = '足球早盘'
      }
      if (_self.dataType == 1) {
        _self.action = '../api/app/member/show/json/ft_1_3.php';
        this.showType = '今日足球'
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
        this.getData('', current - 1)
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
