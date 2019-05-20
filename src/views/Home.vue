<template>
  <div class="home">
    <mu-paper class="left" :z-depth="1">
       <mu-tabs :value.sync="active1" inverse color="primary"
      indicator-color="primary" text-color="rgba(0, 0, 0, .54)"  center>
      <mu-tab ripple @click="gotoPage('/tittle-tattle')" >杂谈</mu-tab>
      <mu-tab ripple @click="gotoPage('/apple')">Apple</mu-tab>
      <mu-tab ripple @click="gotoPage('/path')">过道儿</mu-tab>
      <mu-tab ripple @click="gotoPage('/ghost-market')">鬼市</mu-tab>
      </mu-tabs>
      <div class="content" v-if='visible'>
        <div class="item">
          <div class="avatar"></div>
          <div class="title-other">
            <div class="title">
              扣篮大赛来打卡了
            </div>
            <div class="other">
              哈哈哈·2019-1-1 12:39·
            </div>
          </div>
        </div>
        <div class="item">
          <div class="avatar"></div>
          <div class="title-other">
            <div class="title">
              扣篮大赛来打卡了
            </div>
            <div class="other">
              哈哈哈·2019-1-1 12:39·
            </div>
          </div>
        </div>
        <div class="item">
          <div class="avatar"></div>
          <div class="title-other">
            <div class="title">
              扣篮大赛来打卡了
            </div>
            <div class="other">
              哈哈哈·2019-1-1 12:39·
            </div>
          </div>
        </div>
      </div>
      <router-view/>
    </mu-paper>
    <div class="right" >
      <mu-paper class="user-info" :z-depth='1'>
        个人信息
      </mu-paper>
      <mu-paper class="user-info" :z-depth='1'>
        广告位
      </mu-paper>
      <mu-paper class="user-info" :z-depth='1'>
        我的关注
      </mu-paper>
      <mu-paper class="user-info" :z-depth='1'>
       我的收藏
      </mu-paper>
      <mu-paper class="user-info" :z-depth='1'>
        哈哈哈
      </mu-paper>
      <mu-paper class="user-info" :z-depth='1'>
        哈哈哈
      </mu-paper>
      <mu-paper class="user-info" :z-depth='1'>
        哈哈哈
      </mu-paper>
      <mu-paper class="user-info" :z-depth='1'>
        哈哈哈
      </mu-paper>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data(){
   return {
     visible:true,
   }
  },
  methods: {
    gotoPage(pathStr) {
      this.$router.push(pathStr);
      this.visible = false;
    },
  },
};
</script>
<style lang="scss" scope="">
%row{
  display: flex;
  flex-direction: row;
  align-items: center;
}
%col{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home{
  width: 100%;
  overflow: hidden;
  @extend %row;
  justify-content: space-between;
  align-items: flex-start;
  .left{
    width: 72%;
    @extend %col;
    height: 100%;
    justify-content: flex-start;
    background: #fff;
    .content{
      @extend %col;
      width: 100%;
      justify-content: flex-start;
      margin-top: 10px;
      .item{
        height: 80px;
        border-bottom: #f2f2f2 solid 1px;
        width: 100%;
        @extend %row;
        justify-content: flex-start;
        .avatar{
          width: 60px;
          height: 60px;
          border-radius: 4px;
          background: #666;
          margin:0 20px;
        }
        .title-other{
          @extend %col;
          justify-content: space-between;
          align-items: flex-start;
          height: 60px;

          .title{
            color: #666;
            font-size: 20px;
          }
          .other{
            color: #999;
            font-size: 15px;
          }
        }
      }
    }
  }
  .right{
    width: 26%;
    @extend %col;
    justify-content: flex-start;
    .user-info{
      height: 220px;
      width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>
