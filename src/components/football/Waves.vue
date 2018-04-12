<template>
  <div>
    <div id="sportwrapbox">
      <div class="tbox">
        <div class="sporttop"><h1>{{showType}} &gt; 波胆</h1></div>
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
              <th class="time" style="width: 35px">时间</th>
              <th class="team" style="width: 135px">主客队伍</th>
              <th style="width: 29px">1:0</th>
              <th style="width: 31px">2:0</th>
              <th style="width: 31px">2:1</th>
              <th style="width: 31px">3:0</th>
              <th style="width: 31px">3:1</th>
              <th style="width: 31px">3:2</th>
              <th style="width: 31px">4:0</th>
              <th style="width: 31px">4:1</th>
              <th style="width: 31px">4:2</th>
              <th style="width: 31px">4:3</th>
              <th style="width: 25px">0:0</th>
              <th style="width: 30px">1:1</th>
              <th style="width: 30px">2:2</th>
              <th style="width: 30px">3:3</th>
              <th style="width: 30px">4:4</th>
              <th style="width: 30px">其它</th>
            </tr>
            <tr>
              <td colspan="18">
                <table frame="void" cellpadding="0" cellspacing="0" v-for="(item,key) in race" id="wave">
                  <tr>
                    <td colspan="18" class="b_title" style="border-top:none;border-bottom:none">{{key}}</td>
                  </tr>
                  <tbody v-for="items in item">
                  <tr>
                    <td style="border-left:1px solid #C3C3C3;border-bottom:1px solid #C3C3C3 ;width: 32px " rowspan="2"
                        v-html="items.Match_Date">
                    </td>
                    <td style="width: 137px" rowspan="2" align="left">{{items.Match_Master}}<br>{{items.Match_Guest}}
                    </td>
                    <td style="width: 29px"><a href="javascript:" title="1:0"
                                               v-if="items.Match_Bd10!=null&&items.Match_Bd10!='0'"><font>{{items.Match_Bd10}}</font></a>
                    </td>
                    <td style="width: 31px"><a href="javascript:" title="2:0"
                                               v-if="items.Match_Bd20!=null&&items.Match_Bd20!='0'"><font>{{items.Match_Bd20}}</font></a>
                    </td>
                    <td style="width: 30px"><a href="javascript:" title="2:1"
                                               v-if="items.Match_Bd21!=null&&items.Match_Bd21!='0'"><font>{{items.Match_Bd21}}</font></a>
                    </td>
                    <td style="width: 30px"><a href="javascript:" title="3:0"
                                               v-if="items.Match_Bd30!=null&&items.Match_Bd30!='0'"><font>{{items.Match_Bd30}}</font></a>
                    </td>
                    <td style="width: 30px"><a href="javascript:" title="3:1"
                                               v-if="items.Match_Bd31!=null&&items.Match_Bd31!='0'">
                      <font>{{items.Match_Bd31}}</font></a></td>
                    <td style="width: 32px"><a href="javascript:" title="3:2"
                                               v-if="items.Match_Bd32!=null&&items.Match_Bd32!='0'"><font>{{items.Match_Bd32}}</font></a>
                    </td>
                    <td style="width: 30px"><a href="javascript:" title="4:0"
                                               v-if="items.Match_Bd40!=null&&items.Match_Bd40!='0'"><font>{{items.Match_Bd40}}</font></a>
                    </td>
                    <td style="width: 31px"><a href="javascript:" title="4:1"
                                               v-if="items.Match_Bd41!=null&&items.Match_Bd41!='0'"><font>{{items.Match_Bd41}}</font></a>
                    </td>
                    <td style="width: 31px"><a href="javascript:" title="4:2"
                                               v-if="items.Match_Bd42!=null&&items.Match_Bd42!='0'"><font>{{items.Match_Bd42}}</font></a>
                    </td>
                    <td style="width: 31px"><a href="javascript:" title="4:3"
                                               v-if="items.Match_Bd43!=null&&items.Match_Bd43!='0'"><font>{{items.Match_Bd43}}</font></a>
                    </td>
                    <td style="width: 26px" rowspan="2"><a href="javascript:" title="0:0"
                                                           v-if="items.Match_Bd00!=null&&items.Match_Bd00!='0'"><font>{{items.Match_Bd00}}</font></a>
                    </td>
                    <td style="width: 29px" rowspan="2"><a href="javascript:" title="1:1"
                                                           v-if="items.Match_Bd11!=null&&items.Match_Bd11!='0'"><font>{{items.Match_Bd11}}</font></a>
                    </td>
                    <td style="width: 30px" rowspan="2"><a href="javascript:" title="2:2"
                                                           v-if="items.Match_Bd22!=null&&items.Match_Bd22!='0'"><font>{{items.Match_Bd22}}</font></a>
                    </td>
                    <td style="width: 30px" rowspan="2"><a href="javascript:" title="3:3"
                                                           v-if="items.Match_Bd33!=null&&items.Match_Bd33!='0'"><font>{{items.Match_Bd33}}</font></a>
                    </td>
                    <td style="width: 29px" rowspan="2"><a href="javascript:" title="4:4"
                                                           v-if="items.Match_Bd44!=null&&items.Match_Bd44!='0'"><font>{{items.Match_Bd44}}</font></a>
                    </td>
                    <td style="width: 29px" rowspan="2"><a href="javascript:" title="其它"
                                                           v-if="items.Match_Bdup5!=null&&items.Match_Bdup5!='0'"><font>{{items.Match_Bdup5}}</font></a>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="javascript:" title="0:1" v-if="items.Match_Bdg10!=null&&items.Match_Bdg10!='0'"><font>{{items.Match_Bdg10}}</font></a>
                    </td>
                    <td><a href="javascript:" title="0:2" v-if="items.Match_Bdg20!=null&&items.Match_Bdg20!='0'"><font>{{items.Match_Bdg20}}</font></a>
                    </td>
                    <td><a href="javascript:" title="1:2" v-if="items.Match_Bdg21!=null&&items.Match_Bdg21!='0'"><font>{{items.Match_Bdg21}}</font></a>
                    </td>
                    <td><a href="javascript:" title="0:3" v-if="items.Match_Bdg30!=null&&items.Match_Bdg30!='0'"><font>{{items.Match_Bdg30}}</font></a>
                    </td>
                    <td><a href="javascript:" title="1:3" v-if="items.Match_Bdg31!=null&&items.Match_Bdg31!='0'"><font>{{items.Match_Bdg31}}</font></a>
                    </td>
                    <td><a href="javascript:" title="2:3" v-if="items.Match_Bdg32!=null&&items.Match_Bdg32!='0'"><font>{{items.Match_Bdg32}}</font></a>
                    </td>
                    <td><a href="javascript:" title="0:4" v-if="items.Match_Bdg40!=null&&items.Match_Bdg40!='0'"><font>{{items.Match_Bdg40}}</font></a>
                    </td>
                    <td><a href="javascript:" title="1:4" v-if="items.Match_Bdg41!=null&&items.Match_Bdg41!='0'"><font>{{items.Match_Bdg41}}</font></a>
                    </td>
                    <td><a href="javascript:" title="2:4" v-if="items.Match_Bdg42!=null&&items.Match_Bdg42!='0'"><font>{{items.Match_Bdg42}}</font></a>
                    </td>
                    <td><a href="javascript:" title="3:4" v-if="items.Match_Bdg43!=null&&items.Match_Bdg43!='0'"><font>{{items.Match_Bdg43}}</font></a>
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
    name: 'waves',
    mixins: [Mixin],
    components: {
      pagination,
      model
    },
    data: function () {
      return {
        action: '../api/app/member/show/json/ft_2_4.php',
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
        _self.action= '../api/app/member/show/json/ft_2_4.php';
        this.showType='足球早盘'
      }
      if(_self.dataType==1){
        _self.action= '../api/app/member/show/json/ft_1_4.php';
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
