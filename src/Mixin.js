let MyMixin = {
  data:function(){
    return {
            source:[],
            race:{},
            soPage:[],
            dataType:1,
            window_lsm:0,
            window_hight:0,
            pageData:'',
            betMoney:'',
            userMoney:'',
            }
  },
  computed:{
  },
  watch:{
    betMoney(newVal){
      let user_money= $('#user_money').html();
      if(newVal>user_money){
        alert('您的账户余额不足');
        this.betMoney='';
      }else{
        let bet_money=parseFloat(newVal);
        user_money=parseFloat(user_money.replace("RMB"," "));
        if(newVal>0&&newVal<=user_money){
          let temp_point=parseFloat($("input[name='bet_point[]']").val())+parseInt($("input[name='ben_add[]']").val(),10)
          let win=(bet_money*temp_point).toFixed(2);
                $("#win_span").html(win);
                $("#win_span1").html(win);
                $("#bet_win").val(win);
        }
      }


    }
  },
  mounted:function () {
    // _self.showModel();
    // this.getBalance()
  } ,
  methods:{
    showModel:function(type){
      let _self=this;
      let inp=`<input id="jd_submit" style="background-color: blue;" value="提交" type="button"  class="button1">`
      $("#xzls").on('click',function () {
        if(_self.window_lsm.length > 2000){
          if(window.XMLHttpRequest){ //Mozilla, Safari, IE7
            if(!window.ActiveXObject){ // Mozilla, Safari,
              JqueryDialog.Open('足球单式', '../api/app/member/show/json/dialog.php?lsm='+_self.window_lsm, 600, _self.window_hight);
              }else{ //IE7
              JqueryDialog.Open('足球单式', '../api/app/member/show/json/dialog.php?lsm=zqds', 600, _self.window_hight);
              }
              }else{ //IE6
              JqueryDialog.Open('足球单式', '../api/app/member/show/json/dialog.php?lsm=zqds', 600, _self.window_hight);
              }
              }else{
              JqueryDialog.Open('足球单式', '../api/app/member/show/json/dialog.php?lsm='+_self.window_lsm, 600, _self.window_hight);
              }
              $("#jd_dialog_m_h_r").children('img').attr('src','/static/images/bg/tb1.gif')
              $('.jd_dialog_m_t_s').children('#jd_submit').remove();
              $('#jd_dialog_m_t').find("span").first().append(inp)
              $("#jd_submit").on('click',function () {
                 _self.pageData='1'
                  let lsm='';
                  let checkBox=$('#jd_iframe').contents().find('.cb_div').children()
                  for(let i=0;i<checkBox.length;i++) {
                     if(checkBox[i].checked){
                           lsm += checkBox[i].value+"$";
                          }
                       }
                   if(lsm == '') return false;
                   $("#league").val(lsm)	;
                  _self.getData(lsm,'');
              })
      })
    },
    getData:function (data,page) {
      let _self=this;
      let  cPage=0;
      let  sData='';
      if(page){
        cPage=page
      }
      if(data){
        sData=data
      }
      $.ajax({
        type: 'GET',
        url:_self.action,
        data:{
          leaguename:sData,
          CurrPage:cPage,
        },
        success:function (res) {
          let data=JSON.parse(res)
          if(data){
            _self.window_lsm=data.lsm
            _self.window_hight=data.dh
            if(data.db){
              _self.source =data.db;
              let name =  _self.source[0].Match_Name;
              let arr = [];
              let obj = {};
              for(let i= 0,source=_self.source.length;i<source;i++){
                if(name ===_self.source[i].Match_Name){
                  arr.push(_self.source[i]);
                }
                else{
                  arr=[];
                  arr.push(_self.source[i]);
                  name = _self.source[i].Match_Name;
                }
                obj[name] = arr;
              }
              _self.race=obj;
              let pages=data.fy.p_page;
              if(_self.soPage.length==0){
                for(let l=0;l<pages;l++){
                  _self.soPage.push(l)
                }
              }
              if(_self.pageData=='1'){
                  _self.soPage=[];
                for(let ls=0;ls<pages;ls++){
                  _self.soPage.push(ls)
                }
              }
              _self.pageData='2'
            }
          }
        },
        error:function (res) {
        }
      })
    },
    getNowFormatDate : function () {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
           month = "0" + month;
       }
      if (strDate >= 0 && strDate <= 9) {
           strDate = "0" + strDate;
       }
       let currentDate = year + '-' + month + '-' + strDate;
       return currentDate;
},
    CurentTime :function() {
          let now = new Date();
          let year = now.getFullYear();       //年
          let month = now.getMonth() + 1;     //月
          let day = now.getDate();            //日

          let hh = now.getHours();            //时
          let mm = now.getMinutes();          //分
          let ss = now.getSeconds();           //秒

          let clock = year + "年";

           if(month < 10)
              clock += "0";

              clock += month + "月";

              if(day < 10)
              clock += "0";

              clock += day + "日 ";

              if(hh < 10)
              clock += "0";

              clock += hh + ":";
              if (mm < 10) clock += '0';
              clock += mm + ":";

              if (ss < 10) clock += '0';
              clock += ss;
              return  clock;
},

  }
};
export default MyMixin;
