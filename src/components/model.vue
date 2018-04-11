<template>
    <div>
      <div  v-if="modelData.showBg" id="TB_overlay" class="TB_overlayBG"></div>
      <div  v-if="modelData.showBg" id="TB_window" style=" width: 690px;">
        <div id="TB_title">
          <div id="TB_ajaxWindowTitle">选择联赛</div>
          <div @click="choseData('gb')" id="TB_closeAjaxWindow">Esc Key
            <a href="#" id="TB_closeWindowButton">
              <img src="//static1.tbk-app.net/images/close.jpg" border="0">
            </a>
          </div>
        </div>
        <div id="TB_ajaxContent" style="width:660px;height:395px" >
            <ul v-for="item in windowLsm">
              <li><input type="checkbox" name="leagues[]" :checked="checked" v-model="selectList"  :value="item">{{item}}</li>
            </ul>
            <div class="btnBox">
              <input type="button" name="all"  value="全选"  @click="choseData('qx')" class="btn">
              <input type="reset" name="unall" value="全不选" class="btn" @click="choseData('qbx')">
              <input type="submit" name="submit" value="确定" class="btn" @click="choseData('tj')">
            </div>
        </div>
      </div>
    </div>
</template>
<script>
//    import Mixin from '@/Mixin'
    export default {
        name: 'model',
//        mixins: [Mixin],
        props:['modelData','windowLsm'],
        computed:{
        },
        data: function () {
            return {
              checked: false,
              selectList:[],
              sendMessage:{
                modelClose: false,
                selectData:'',
              }
            }
        },
        created: function () {
        },
        mounted: function () {

        },
        methods: {
          choseData: function (type) {
            let _self = this;
            switch (type) {
              case 'qx' :
                  _self.selectList=_self.windowLsm;
                break;
              case 'qbx':
                 _self.selectList=[];
                break;
              case 'gb':
                if(_self.modelData.showBg===true){
                  _self.sendMessage.modelClose=false
                }
                this.$emit('modelClose', _self.sendMessage);
                break;
              case 'tj' :
                if(_self.modelData.showBg===true){
                  _self.sendMessage.modelClose=false;
                }
                for (let i = 0; i < _self.selectList.length; i++) {
                  _self.sendMessage.selectData += _self.selectList[i]+ "$";
                }
                this.$emit('modelClose',_self.sendMessage);
                _self.selectList=[];
                _self.sendMessage.selectData='';
                break;

            }


          },
        }
    }

</script>
