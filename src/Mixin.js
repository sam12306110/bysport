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
          let temp_point=parseFloat($("input[name='bet_point[]']").val())+parseInt($("input[name='ben_add[]']").val(),10);
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
