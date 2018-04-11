let MyMixin = {
  data:function(){
    return {
            source:[],
            race:{},
            soPage:'',
            dataType:1,
            windowLsm:'',
            pageData:'',
            betMoney:'',
            userMoney:'',
            modelData: {
        showBg: false,
        selectData: '',
      },
            }
  },
  computed:{
  },

  mounted:function () {
    // _self.showModel();
    // this.getBalance()
  } ,
  methods:{
    getData: function (data, page) {
      let _self = this;
      let cPage = 0;
      let sData = '';
      if (page) {
        cPage = page
      }
      if (data) {
        sData = data
      }
      _self.animation = true;
      axios.get(_self.action, {
        params: {
          leaguename: sData,
          CurrPage: cPage,
        }
      }).then(function (res) {
        let resData = res;
        if (resData.status===200) {
          _self.animation = false;
          if (resData.data.db) {
            _self.source = resData.data.db;
            let name = _self.source[0].Match_Name;
            let arr = [];
            let obj = {};
            for (let i = 0, source = _self.source.length; i < source; i++) {
              if (name === _self.source[i].Match_Name) {
                arr.push(_self.source[i]);
              }
              else {
                arr = [];
                arr.push(_self.source[i]);
                name = _self.source[i].Match_Name;
              }
              obj[name] = arr;
            }
            _self.race = obj;
            _self.windowLsm = resData.data.lsm.split('|');
            _self.soPage = resData.data.fy.p_page;
            // if (_self.soPage.length === 0) {
            //   for (let l = 0; l < pages; l++) {
            //     _self.soPage.push(l)
            //   }
            // } else {
            //   _self.soPage = [];
            //   for (let ls = 0; ls < pages; ls++) {
            //     _self.soPage.push(ls)
            //   }
            // }
          }
        }
      }).catch(function (err) {
        throw err
      })
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
    timer: function (date) {
      return setInterval(() => {
        let _self = this;
        _self.time = _self.time - 1;
        if (_self.time < 1) {
          switch (date) {
            case '90':
              _self.time = 90;
              break;
            case '180':
              _self.time = 180;
              break;
            case '999':
              _self.time = 999;
              break;
            case '20':
              _self.time = 20;
              break
          }

          this.getData(_self.eventName, '')
        }
      }, 1000)
    },
    clickRef: function (date) {
      let _self = this;

      _self.getData(_self.eventName, '0');
      switch (date) {
        case '90':
          _self.time = 90;
          break;
        case '180':
          _self.time = 180;
          break;
        case '999':
          _self.time = 999;
          break;
        case '20':
          _self.time = 20;
          break
      }
    },
    comShowModel: function (type) {
      if (type === 'op') {
        this.modelData.showBg = true;
      }
      if (type === 'cl') {
        this.modelData.showBg = false;
      }
    },
  }
};
export default MyMixin;
