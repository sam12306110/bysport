<template>
  <div id="app">
    <div id="sportsbox">
        <div class="bodyset">
          <div id="container">
          <div id="header">
               <span>
                 <h1>&nbsp;</h1>
               </span>
          </div>
          <div id="welcome">
            <ul class="level1">
              <!--会员帐号-->
              <li class="name">您好, <strong id="userid">
                111qqq                    </strong>
                <div id="head_date" style="">{{nowTime}}
                  <span id="rbType" style="display:none;">FT</span>
                </div>
              </li>
              <li class="rb" id="rb_btn" style="visibility: visible; ">
                <a href="javascript:;"  id="rbyshow">滚球</a>
              </li>
              <li class="rb rb_on" id="today_btn">
                <a href="javascript:;" id="todayshow" >今日赛事</a>
              </li>
              <li class="rb" id="early_btn">
                <a href="javascript:;"id="earlyshow" style="cursor:hand;">早盘</a>
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
            <div class="pass" style="display:none;">
              <a href="/member-center#module/member/action/password" id="chg_pwd">更改密码</a>
            </div>
          </div>
          <div id="nav" style="">
            <ul class="level1" id="nav1" style="display: none;">
              <li id="navli1" class="ft">
                    <span class="ball">
                        <a href="/hg_sports/index/ft/ds" target="showFrame" onclick="chg_button_bg('FT','today');chg_navli(1);chg_type_class('ftn',2);">足球 (<strong class="game_sum" id="FT_games">530</strong>)</a>
                    </span>
              </li>
              <li id="navli2" class="bk">
                    <span class="ball">
                        <a href="/hg_sports/index/bb/ds" target="showFrame" onclick="chg_button_bg('BK','today');chg_navli(2);chg_type_class('ftn',9);">篮球<span class="ball_nf"></span>美式足球<span class="ball_rl"></span>橄榄球 (<strong class="game_sum" id="BK_games">86</strong>)</a>
                    </span>
              </li>
            </ul>
            <ul class="level1" id="nav2" style="display: block;">
              <li id="navli3" class="ft sel">
                    <span class="ball">
                        <a href="/hg_sports/index/fu/ds" target="showFrame" onclick="chg_button_bg('FT','early');chg_navli(3);chg_type_class('ftn',12);">足球 (<strong class="game_sum" id="EFT_games">901</strong>)</a>
                    </span>
              </li>
              <li id="navli6" class="bk">
                    <span class="ball">
                        <a href="/hg_sports/index/bbfu/ds" target="showFrame" onclick="chg_button_bg('BK','early');chg_navli(6);chg_type_class('ftn',20);">篮球<span class="ball_nf"></span>美式足球<span class="ball_rl"></span>橄榄球 (<strong class="game_sum" id="EBK_games_RB">0</strong>)</a>
                    </span>
              </li>
            </ul>
            <ul class="level1" id="nav3" style="display: none;">
              <li id="navli4" class="ft">
                    <span class="ball">
                        <a href="/hg_sports/index/ft/gq" target="showFrame" onclick="chg_button_bg('FT','rb');chg_navli(4);chg_type_class('ftn',1);">足球 (<strong class="game_sum" id="FT_games_RB">0</strong>)</a>
                    </span>
              </li>
              <li id="navli5" class="bk">
                    <span class="ball">
                        <a href="/hg_sports/index/bb/gq" target="showFrame" onclick="chg_button_bg('BK','rb');chg_navli(5);chg_type_class('ftn',8);">篮球<span class="ball_nf"></span>美式足球<span class="ball_rl"></span>橄榄球 (<strong class="game_sum" id="BK_games_RB">0</strong>)</a>
                    </span>
              </li>
            </ul>
          </div>
          <div id="type" style="">
            <!--<ul id="tshow1" style="display: none;">-->
              <!--&lt;!&ndash;<li class="rb"><a id="ftn1" class="type_out" href="/hg_sports/index/ft/gq" target="showFrame" onClick="chg_button_bg('FT','rb');chg_type_class('ftn',1);" >滚球<span class="rb_sum"> (<span class="game_sum" id="subRBFT_games">0</span>)</span></a></li>&ndash;&gt;-->
              <!--<li class="re">-->
                <!--<a id="ftn2" class="type_out" href="/hg_sports/index/ft/ds" target="showFrame" onclick="chg_button_bg('FT','today');chg_type_class('ftn',2);">独赢 ＆ 让球 ＆ 大小 &amp; 单 / 双</a>-->
              <!--</li>-->
              <!--<li class="pd">-->
                <!--<a id="ftn3" class="type_out" href="/hg_sports/index/ft/bd" target="showFrame" onclick="chg_button_bg('FT','today');chg_type_class('ftn',3);">波胆</a>-->
              <!--</li>-->
              <!--<li class="to">-->
                <!--<a id="ftn4" class="type_out" href="/hg_sports/index/ft/zrq" target="showFrame" onclick="chg_button_bg('FT','today');chg_type_class('ftn',4);">总入球</a>-->
              <!--</li>-->
              <!--<li class="hf">-->
                <!--<a id="ftn5" class="type_out" href="/hg_sports/index/ft/bqs" target="showFrame" onclick="chg_button_bg('FT','today');chg_type_class('ftn',5);">半场 / 全场</a>-->
              <!--</li>-->
              <!--<li class="hp3">-->
                <!--<a id="ftn6" class="type_out" href="/hg_sports/index/ft/zhgg" target="showFrame" onclick="chg_button_bg('FT','today');chg_type_class('ftn',6);">综合过关</a>-->
              <!--</li>-->
              <!--<li class="reuls">-->
                <!--<a class="type_out" href="/html/qa.html" target="_blank">规则</a>-->
              <!--</li>-->
              <!--<li class="result">-->
                <!--<a id="ftn7" class="type_out" href="/hg_sports/index/sg/ft" target="showFrame" onclick="chg_button_bg('FT','today');chg_type_class('ftn',7);">赛果</a>-->
              <!--</li>-->
            <!--</ul>-->
            <!--<ul id="tshow2" style="display: none;">-->
              <!--&lt;!&ndash;<li class="rb"><a id="ftn8" class="type_out" href="/hg_sports/index/bb/gq" target="showFrame" onClick="chg_button_bg('BK','rb');chg_type_class('ftn',8);" >滚球<span class="rb_sum"> (<span class="game_sum" id="subRBBK_games">0</span>)</span></a></li>&ndash;&gt;-->
              <!--<li class="re">-->
                <!--<a id="ftn9" class="type_out" href="/hg_sports/index/bb/ds" target="showFrame" onclick="chg_button_bg('BK','today');chg_type_class('ftn',9);">独赢 ＆ 让球 ＆ 大小 &amp; 单 / 双</a>-->
              <!--</li>-->
              <!--<li class="hp3">-->
                <!--<a id="ftn10" class="type_out" href="/hg_sports/index/bb/zhgg" target="showFrame" onclick="chg_button_bg('BK','today');chg_type_class('ftn',10);">综合过关</a>-->
              <!--</li>-->
              <!--<li class="reuls">-->
                <!--<a class="type_out" href="/html/qa.html" target="_blank">规则</a>-->
              <!--</li>-->
              <!--<li class="result">-->
                <!--<a id="ftn11" class="type_out" href="/hg_sports/index/sg/bb" target="showFrame" onclick="chg_button_bg('BK','today');chg_type_class('ftn',11);">赛果</a>-->
              <!--</li>-->
            <!--</ul>-->
            <ul id="tshow3" style="display: block;">
              <li class="re">
                <router-link id="ftn12" class="type_on" :to="'/'" target="showFrame">独赢 ＆ 让球 ＆ 大小 &amp; 单 / 双</router-link>
              </li>
              <li class="pd">
                <router-link id="ftn13" class="type_out" :to="'/waves'" target="showFrame">波胆</router-link>
              </li>
              <li class="to">
                <router-link id="ftn14" class="type_out" :to="'/totalGoal'" target="showFrame" >总入球</router-link>
              </li>
              <li class="hf">
                <router-link id="ftn15" class="type_out" :to="'/fullField'" target="showFrame" >半场 / 全场</router-link>
              </li>
              <li class="hp3">
                <router-link id="ftn16" class="type_out" :to="'/comprehensive'" target="showFrame" >综合过关</router-link>
              </li>
              <li class="reuls">
                <a class="type_out" href="/html/qa.html" target="_blank">规则</a>
              </li>
              <li class="result">
                <a id="ftn17" class="type_out" href="/hg_sports/index/sg/ft" target="showFrame" onclick="chg_button_bg('FT','early');chg_type_class('ftn',17);">赛果</a>
              </li>
            </ul>
            <ul id="tshow4" style="display: none;">
              <li class="rb">
                <a id="ftn1" class="type_out" href="/hg_sports/index/ft/gq" target="showFrame" onclick="chg_button_bg('FT','rb');chg_type_class('ftn',1);">滚球<span class="rb_sum"> (<span class="game_sum" id="subRBFT_games">0</span>)</span></a>
              </li>
            </ul>
            <ul id="tshow6" style="display: none;">
              <li class="re">
                <router-link id="ftn20" class="type_on" :to="'/drugAddiction'" target="showFrame" onclick="chg_button_bg('BK','early');chg_type_class('ftn',20);">独赢 ＆ 让球 ＆ 大小 &amp; 单 / 双</router-link>
              </li>
              <li class="hp3">
                <router-link id="ftn21" class="type_out" :to="'/basketComprehensive'" target="showFrame" onclick="chg_button_bg('BK','early');chg_type_class('ftn',21);">综合过关</router-link>
              </li>
              <li class="reuls">
                <a class="type_out" href="/html/qa.html" target="_blank">规则</a>
              </li>
              <li class="result">
                <a id="ftn22" class="type_out" href="/hg_sports/index/sg/bb" target="showFrame" onclick="chg_button_bg('BK','today');chg_type_class('ftn',22);">赛果</a>
              </li>

            </ul>
            <!--<ul id="tshow5" style="display:none;">-->
              <!--<li class="rb">-->
                <!--<a id="ftn8" class="type_out" href="/hg_sports/index/bb/gq" target="showFrame" onclick="chg_button_bg('BK','rb');chg_type_class('ftn',8);">滚球<span class="rb_sum"> (<span class="game_sum" id="subRBBK_games">0</span>)</span></a>-->
              <!--</li>-->
            <!--</ul>-->

          </div>
        </div>
          <div id="back" style="display:none;">
          <ul>
            <li class="lang_top"><a href="#">简体</a><!--<![endif]-->
              <ul class="pd">
                <li class="cn">
                  <a href="javascript:void(0);" onclick="changeLangx('zh-cn')">简体</a>
                </li>
                <li class="tw">
                  <a href="javascript:void(0);" onclick="changeLangx('zh-tw')">繁体</a>
                </li>
                <li class="us">
                  <a href="javascript:void(0);" onclick="changeLangx('en-us')">English</a>
                </li>
              </ul>

            </li>
            <li class="mail" onclick="OnMouseOverEvent();">
              <a href="javascript:void(0);" onclick="window.open('##','QA','location=no,status=no,width=800,height=428,toolbar=no,top=0,left=0,scrollbars=yes,resizable=yes,personalbar=yes');">联系我们</a>
            </li>
            <li class="qa">
              <a href="#">帮助<!--[if IE 7]><!--></a><!--<![endif]-->
              <ul class="pd">
                <li class="qa_on"><a href="javascript:;">帮助</a></li>
                <li class="msg"><a href="javascript:;">公告栏</a></li>
                <li class="roul"><a href="javascript:;" onclick="window.open('#','QA','location=no,status=no,width=800,height=428,toolbar=no,top=0,left=0,scrollbars=yes,resizable=yes,personalbar=yes');">体育规则</a></li>
                <li class="wap"><a href="javascript:;" onclick="window.open('#','WAP','location=no,status=no,width=680,height=500,toolbar=no,top=0,left=0,scrollbars=no,resizable=no,personalbar=yes');">Wap指南</a></li>
                <li class="odd"><a href="javascript:;" target="showFrame">详细设定</a></li>
              </ul>
            </li>
            <li class="home" onmouseover="OnMouseOutEvent()"><a href="/cn/logout" target="_top">退出</a></li>
          </ul>
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
                  人民币 9590.38
                </span>
            <input name="" type="button" class="re_credit" value="" onclick="javascript:reloadCrditFunction();">
          </div>
        </div>
          <div id="qaView" style="display:none;" class="qaView">
          <div>
            <iframe id="qaFrame" frameborder="no" border="0" allowtransparency="true"></iframe>
          </div>
          <div class="qa_foot"></div>
        </div>
          <div id="extra2"></div>
      </div>
        <div id="OSEL">
            <div id="main" class="main">
            <div id="menu">
            <div class="ord_on" id="order_button" onclick="showOrder();">交易单</div>
            <div class="record_btn" id="record_button" onclick="showRec('/hg_sports/order/index');">最新十笔交易</div>
          </div>
            <div id="order_div"  style="overflow:hidden;">
            <div id="pls_bet"  style="background-color: rgb(227, 207, 170); left: 0; top: 0; display: none; ">
              <img src="../static/images/header/order_none.jpg" width="216" height="22">
              <div style="width:216px; height:63px; text-align:center; padding-top:16px;">
                <font style="font:0.75em Arial, Helvetica, sans-serif; font-weight:bold;">
                  点击赔率便可将<br>选项加到交易单里。
                </font>
              </div>
            </div>
            <div id="bet_div">
              <img src="../static/images/header/order_none.jpg" width="216" height="22">
              <div style="width:216px; height:100px; text-align:center; padding-top:16px;">
                <font style=" Arial, Helvetica, sans-serif; font-weight:bold;">点击赔率便可将<br>选项加到交易单里。</font>
              </div>
            </div>
            <div id="rec5_div"  style="display: none; ">
              <div id="orderBox">
                <div class="title">
                  <h1>最新十笔交易</h1>
                  <div class="tiTimer" onclick="window.location.href='/hg_sports/order/index?go=ten';"></div>
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
                <div id="FT_RB" @click="showRB('FT');" class="oly_tr" style="">足球(<span id="ftrbnum">6</span>)</div>
                <div id="BK_RB" @click="showRB('BK');" class="oly_tr" style="">篮球 / 美式足球 / 橄榄球(<span id="bkrbnum">0</span>)</div>
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
             <div id="info_div" name="info_div" style="top: 241px;">
            <div class="msg_box">
              <h2>
                公告
                <span class="more">
                <a href="/hg_sports/index/notice?TB_iframe=true&amp;width=700&amp;height=400" target="showFrame">更多</a>
               </span>
              </h2>
              <div class="msg_main">
                <marquee height="70" scrollamount="1" direction="up" onmouseover="this.stop();" onmouseout="this.start();">
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
        <!--<div id="leagueBox">-->
        <!--<form action="/hg_sports/index/ft/ds" method="post" id="leagueForm">-->
          <!--<ul>-->
            <!--<li><input type="checkbox" name="leagues[]" value="北美联合足球联赛" checked="">北美联合足球联赛</li>-->
            <!--<li><input type="checkbox" name="leagues[]" value="墨西哥超级联赛" checked="">墨西哥超级联赛</li>-->
            <!--<li><input type="checkbox" name="leagues[]" value="纽西兰超级联赛" checked="">纽西兰超级联赛</li>-->
          <!--</ul>-->
          <!--<div class="btnBox">-->
            <!--<input type="hidden" name="select_all" class="selectAll" value="">-->
            <!--<input type="button" name="all" onclick="selectAll()" value="全选" class="btn">-->
            <!--<input type="reset" name="unall" onclick="unselectAll()" value="全不选" class="btn">-->
            <!--<input type="submit" name="submit" value="确定" class="btn">-->
          <!--</div>-->
        <!--</form></div>-->
    </div>
  </div>
</template>
<script>
import Mixin from '@/Mixin'
import $router from './router'
export default {
  name: 'App',
  mixins: [Mixin],
  components: {

  },
  data: function () {
    return {
        nowTime:''
    }
  },
  created: function () {
    let _self=this;
    _self.nowTime=_self.CurentTime();
    $router.push('/')
  },
  mounted: function () {
     $('.level1').on('click','a',function () {
       let _self=$(this);
      _self.parent('li').addClass('rb_on').siblings('li').removeClass('rb_on');
       if(_self.html()==='滚球'){
          $('#tshow4').show().siblings('ul').hide();
            $router.push('rollBall')
       }else{
          $('#tshow3').show().siblings('ul').hide();
            $router.push('/')
       }
    })
  },
  methods: {
        showRB:function (type) {
           $('#rb_btn').addClass('rb_on').siblings('li').removeClass('rb_on');
           $('#tshow4').show().siblings('ul').hide();
           if(type==="FT"){
             $('#navli3').addClass('sel').siblings('li').removeClass('sel');
             $router.push('rollBall')
           }
           if(type==="BK"){
             $('#navli6').addClass('sel').siblings('li').removeClass('sel');
             $router.push('basketRollBall')
           }
        },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
