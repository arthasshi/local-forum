<template>
  <div>
    <header-adv :url="url" @close-adv="hadleClick" v-if="show"></header-adv>
    <div class="home">
      <router-view v-if="visible ==false"></router-view>
      <mu-paper class="left" :z-depth="1" v-else>
        <mu-tabs
          :value.sync="active1"
          inverse
          color="primary"
          indicator-color="primary"
          text-color="rgba(0, 0, 0, .54)"
          center
        >
          <mu-tab ripple @click="changeList('杂谈')">杂谈</mu-tab>
          <mu-tab ripple @click="changeList('apple')">Apple</mu-tab>
          <mu-tab ripple @click="changeList('过道儿')">过道儿</mu-tab>
          <mu-tab ripple @click="changeList('鬼市')">鬼市</mu-tab>
        </mu-tabs>
        <div class="content">
          <div class="item">
            <div class="avatar"></div>
            <div class="title-other">
              <div class="title" @click="gotoPage('/details')">扣篮大赛来打卡了</div>
              <div class="other">哈哈哈·2019-1-1 12:39·</div>
            </div>
          </div>
          <div class="item">
            <div class="avatar"></div>
            <div class="title-other">
              <div class="title" @click="gotoPage('/details')">扣篮大赛来打卡了</div>
              <div class="other">哈哈哈·2019-1-1 12:39·</div>
            </div>
          </div>
          <div class="item">
            <div class="avatar"></div>
            <div class="title-other">
              <div class="title" @click="gotoPage('/details')">扣篮大赛来打卡了</div>
              <div class="other">哈哈哈·2019-1-1 12:39·</div>
            </div>
          </div>
        </div>
      </mu-paper>
      <div class="right">
        <mu-paper class="user-info" :z-depth="1">个人信息</mu-paper>
        <mu-paper class="user-info" :z-depth="1">广告位</mu-paper>
        <mu-paper class="user-info" :z-depth="1">我的关注</mu-paper>
        <mu-paper class="user-info" :z-depth="1">我的收藏</mu-paper>
        <mu-paper class="user-info" :z-depth="1">哈哈哈</mu-paper>
        <mu-paper class="user-info" :z-depth="1">哈哈哈</mu-paper>
        <mu-paper class="user-info" :z-depth="1">哈哈哈</mu-paper>
        <mu-paper class="user-info" :z-depth="1">哈哈哈</mu-paper>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderAdv from "@/components/header-adv";
import bus from '@/utils/bus.js'
export default {
  name: "home",
  components: {
    HeaderAdv
  },
  data() {
    return {
      visible: true,
      show: true,
      type: "",
      url:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558527926592&di=3e76615e6c1c3b6e0463f48a189526f5&imgtype=0&src=http%3A%2F%2Fwww.grabsun.com%2Fuploads%2Fimages%2F2015%2F69%2FwKiom1SJXAnzN4fZAAEiWmZK-wg849.jpg"
    };
  },
  methods: {
    gotoPage(pathStr) {
      this.$router.push({ path: pathStr, query: { type: this.type } });
      this.visible = false;
    },
    hadleClick() {
      this.show = false;
    },
    changeList(type) {
      this.type = type;
    }
  },
  beforeMounted() {
    if (this.type != "") {
      this.visible = false;
    }
  },
  mounted(){
    let this_ = this;
    bus.$on('handelChange',msg => this_.visible = msg )
  }
};
</script>
<style lang="scss" scope="">
%row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
%col {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home {
  width: 100%;
  overflow: hidden;
  @extend %row;
  justify-content: space-between;
  align-items: flex-start;
  .left {
    width: 72%;
    @extend %col;
    height: 100%;
    justify-content: flex-start;
    background: #fff;
    .content {
      @extend %col;
      width: 100%;
      justify-content: flex-start;
      margin-top: 10px;
      .item {
        height: 80px;
        border-bottom: #f2f2f2 solid 1px;
        width: 100%;
        @extend %row;
        justify-content: flex-start;
        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 4px;
          background: #666;
          margin: 0 20px;
        }
        .title-other {
          @extend %col;
          justify-content: space-between;
          align-items: flex-start;
          height: 60px;

          .title {
            color: #666;
            font-size: 20px;
          }
          .other {
            color: #999;
            font-size: 15px;
          }
        }
      }
    }
  }
  .right {
    width: 26%;
    @extend %col;
    justify-content: flex-start;
    .user-info {
      height: 220px;
      width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>
