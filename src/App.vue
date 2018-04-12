<template>
  <div id="app">
    <div id="sportsbox">
      <div class="bodyset">
        <div id="container">
          <div id="welcome">
            <ul class="level1">
              <!--会员帐号-->
              <li class="name">您好,
                <strong id="userid">
                  {{userName}}
                </strong>
                <div id="head_date" style="">{{nowTime}}
                  <span id="rbType" style="display:none;">
                    FT
                  </span>
                </div>
              </li>
              <li :class="menuBg=='gq'?'rb rb_on':'rb'" id="rb_btn" style="visibility: visible; ">
                <a href="javascript:;" id="rbyshow" @click="menuEvent('gq')">滚球</a>
              </li>
              <li :class="menuBg=='jr'?'rb rb_on':'rb'" id="today_btn">
                <a href="javascript:;" id="todayshow" @click="menuEvent('jr')">今日赛事</a>
              </li>
              <li :class="menuBg=='zp'?'rb rb_on':'rb'" id="early_btn">
                <a href="javascript:;" id="earlyshow" style="cursor:hand;" @click="menuEvent('zp')">早盘</a>
              </li>
              <li class="rb">
                <a href="/visual" target="_top">视讯直播</a>
              </li>
              <li class="rb">
                <a href="/game" target="_top">电子游艺</a>
              </li>
              <li class="rb">
                <a href="/jl" target="_top">彩票游戏</a>
              </li>
              <!--<li class="live_tv"><a href="#" onclick="OpenLive()">&nbsp;</a></li>-->
            </ul>

          </div>
          <div id="nav" style="">
            <ul class="level1" id="nav1" v-if="menuBg=='jr'||menuBg=='zp'">
              <li id="navli1" :class="selectBg=='FT'?'ft sel':'ft'" @click="checkSelect('FT')">
                    <span class="ball">
                      <a href="javascript:;">
                        足球
                          (<strong class="game_sum" id="FT_games">530</strong>)
                      </a>

                    </span>
              </li>
              <li id="navli2"  :class="selectBg=='BK'?'bk sel':'bk'" @click="checkSelect('BK')">
                    <span class="ball">
                      <a href="javascript:;">
                           篮球<span class="ball_nf"></span>
                          美式足球
                          <span class="ball_rl"></span>
                          橄榄球
                          (<strong class="game_sum" id="BK_games">86</strong>)
                      </a>
                    </span>
              </li>
            </ul>
            <ul class="level1" id="nav2" v-if="menuBg=='gq'">
              <li id="navli3" :class="selectBg=='GFT'?'ft sel':'ft'" @click="checkSelect('GFT')">
                    <span class="ball">
                      <a href="javascript:;">
                           足球
                          (<strong class="game_sum" id="EFT_games">901</strong>)
                      </a>
                    </span>
              </li>
              <li id="navli6" :class="selectBg=='GBK'?'bk sel':'bk'" @click="checkSelect('GBK')">
                    <span class="ball">
                      <a href="javascript:;">
                           篮球
                          <span class="ball_nf"></span>
                          美式足球
                          <span class="ball_rl"></span
                          >橄榄球
                          (<strong class="game_sum" id="EBK_games_RB">0</strong>)
                      </a>
                    </span>
              </li>
            </ul>
          </div>
          <div id="type">
            <ul v-if="selectBg=='FT'"  id="tshow3">
              <li class="re">
                <router-link id="ftn12" class="type_on" :to="'/'" target="showFrame">独赢 ＆ 让球 ＆ 大小 &amp; 单 / 双
                </router-link>
              </li>
              <li class="pd">
                <router-link id="ftn13" class="type_out" :to="'/waves'" target="showFrame">波胆</router-link>
              </li>
              <li class="to">
                <router-link id="ftn14" class="type_out" :to="'/totalGoal'" target="showFrame">总入球</router-link>
              </li>
              <li class="hf">
                <router-link id="ftn15" class="type_out" :to="'/fullField'" target="showFrame">半场 / 全场</router-link>
              </li>
              <li class="hp3">
                <router-link id="ftn16" class="type_out" :to="'/comprehensive'" target="showFrame">综合过关</router-link>
              </li>
              <li class="reuls">
                <a class="type_out" href="/html/qa.html" target="_blank">规则</a>
              </li>
              <li class="result">
                <a id="ftn17" class="type_out" href="/hg_sports/index/sg/ft" target="showFrame">赛果</a>
              </li>
            </ul>
            <ul v-if="selectBg=='GBK'||selectBg=='GFT'" id="tshow4">
              <li class="rb">
                <a id="ftn1" class="type_out" href="/hg_sports/index/ft/gq" target="showFrame">滚球
                  <span class="rb_sum">
                  (<span class="game_sum" id="subRBFT_games">0</span>)
                </span>
                </a>
              </li>
            </ul>
            <ul v-if="selectBg=='BK'"  id="tshow6">
              <li class="re">
                <router-link id="ftn20" class="type_on" :to="'/drugAddiction'" target="showFrame">
                  独赢 ＆ 让球 ＆ 大小 &amp; 单 / 双
                </router-link>
              </li>
              <li class="hp3">
                <router-link id="ftn21" class="type_out" :to="'/basketComprehensive'" target="showFrame">综合过关
                </router-link>
              </li>
              <li class="reuls">
                <a class="type_out" href="/html/qa.html" target="_blank">规则</a>
              </li>
              <li class="result">
                <a id="ftn22" class="type_out" href="/hg_sports/index/sg/bb" target="showFrame">赛果</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="mem_box">
          <div id="mem_main">
            <span class="his">
              <a href="/member-center#module/memberBet/action/query/catalog/TY" target="top">帐户历史</a>
            </span> |
            <span class="wag">
              <a href="/member-center#module/memberMoney" target="top">交易状况</a>
            </span>
          </div>
          <div id="credit_main">
                <span id="credit">
                  人民币 {{userMoney}}
                </span>
            <input name="" type="button" class="re_credit" value="" onclick="javascript:reloadCrditFunction();">
          </div>
        </div>
      </div>
      <div id="OSEL">
        <div id="main" class="main">
          <div id="menu">
            <div :class="checkRecord=='jy'?'ord_on':'ord_btn'" id="order_button" @click="setRecord('jy')">交易单</div>
            <div :class="checkRecord=='jy'?'record_btn':'record_on'" id="record_button" @click="setRecord('sr')">最新十笔交易</div>
          </div>
          <div id="order_div" style="overflow:hidden;">
            <div v-if="checkRecord=='jy'" id="pls_bet">
              <img src="../static/images/header/order_none.jpg" width="216" height="22">
              <div  style="display: none" class="peilv">
                <font style="font:1em Arial, Helvetica, sans-serif; font-weight:bold;">
                  点击赔率便可将<br>选项加到交易单里。
                </font>
              </div>
              <Bet :userMy="userMoney"></Bet>
            </div>
            <div v-if="checkRecord=='sr'" id="rec5_div" >
              <div id="orderBox">
                <div class="title">
                  <h1>最新十笔交易</h1>
                  <div class="tiTimer"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="euro_open" style="z-index: -1;">
            <div id="euro_menu">
              <div class="rb_over" id="RB_btn1"></div>
            </div>
            <div id="oly_main111">
              <div id="RB_oly">
                <div id="FT_RB" @click="showRB('FT');" class="oly_tr" >足球(<span id="ftrbnum">6</span>)</div>
                <div id="BK_RB" @click="showRB('BK');" class="oly_tr">篮球 / 美式足球 / 橄榄球(<span
                  id="bkrbnum">0</span>)
                </div>
              </div>
            </div>
          </div>
          <ul id="gms" style="display:none;">
            <li class="visual">
              <a href="/visual" target="showFrame">
                <span></span>
                真人视讯
              </a>
            </li>
            <li class="egame">
              <a href="/game/new-slots" target="showFrame">
                <span></span>
                电子游艺
              </a>
            </li>
            <li class="caipiao">
              <a href="/jl" target="showFrame">
                <span></span>
                彩票游戏
              </a>
            </li>
            <li class="kefu">
              <a href="https://messenger.providesupport.com/messenger/0slgahth9pzet0nusy37rfmww3.html" target="_blank">
                <span></span>
                在线客服
              </a>
            </li>
          </ul>
          <!--公告 Start-->
          <div id="info_div" style="top: 241px;">
            <div class="msg_box">
              <h2>
                公告
                <span class="more">
                <a href="/hg_sports/index/notice?TB_iframe=true&amp;width=700&amp;height=400" target="showFrame">更多</a>
               </span>
              </h2>
              <div class="msg_main">
                <marquee height="70" scrollamount="1" direction="up" onmouseover="this.stop();"
                         onmouseout="this.start();">
                  <span id="real_msg">
                    篮球赛事:03月15日 NBA美国职业篮球联赛 (孟菲斯灰熊 VS 芝加哥公牛), (犹他爵士 VS 菲尼克斯太阳) 因技术问题导致计时器比分和时间没有更新, 所有的注单本公司依然视为有效.
                  </span>
                </marquee>
              </div>
            </div>
          </div>
          <!--公告 End-->
        </div>
      </div>
      <div id="box">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>
<script>
  import Mixin from '@/Mixin'
  import $router from './router'
  import Bet from '@/components/Bet'
  export default {
    name: 'App',
    mixins: [Mixin],
    components: {
      Bet
    },
    data: function () {
      return {
        nowTime: '',
        checkMenu: true,
        menuBg: 'jr',
        selectBg:'FT',
        checkRecord:'jy',
        userMoney: '',
        userName: '',
      }
    },
    created: function () {
      let _self = this;
      _self.nowTime = _self.CurentTime();
      $router.push('/todayBall');
      _self.getUserInfo();
    },
    mounted: function () {

    },
    methods: {
      menuEvent:function (type) {
        let _self = this;
        switch (type) {
          case 'gq' :
            _self.menuBg = 'gq';
            $router.push('/rollBall');
            _self.selectBg='GFT';
            break;
          case 'jr' :
            _self.menuBg = 'jr';
            window.sessionStorage.setItem('dataType', 1);
            _self.selectBg='FT';
            $router.push('/todayBall');

            break;
          case 'zp' :
            _self.menuBg = 'zp';
            window.sessionStorage.setItem('dataType', 2);
            _self.selectBg='FT';
            $router.push('/');
            break;
        }
      },
      showRB:function (e) {
           if(e==='FT'){
             $router.push('/rollBall');
             this.menuBg='gq';
           }else {
             $router.push('/basketRollBall');
             this.menuBg='gq';
           }

      },
      checkSelect:function (ele) {
        let _self = this;
           switch (ele){
             case 'FT':
               $router.push('/');
               _self.selectBg='FT';
               break;
             case  'BK':
               $router.push('/drugAddiction');
               _self.selectBg='BK';
               break;
             case 'GFT':
               $router.push('/rollBall');
               _self.selectBg='GFT';
               break;
             case 'GBK':
               $router.push('/basketRollBall');
               _self.selectBg='GBK'
           }
      },
      setRecord:function (pl) {
             if(pl==='jy'){
               this.checkRecord='jy'
             }else {
                this.checkRecord='sr'
             }
      },
      getUserInfo: function () {
        axios.get('/api/json/center/?r=Money').then(res => {
          this.userMoney = res.data.data.user_money;
          this.userName = res.data.data.user_name
        }).catch(err => {
          throw err
        })
      }
    }
  }
</script>

<style>

</style>
