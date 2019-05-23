<template>
<!-- 该页面是详情页面 -->
  <div>
    <div class="home">
      <details-left :tit="title"></details-left>
      <div class="right">
        <mu-paper class="user-info" :z-depth="1">
          个人信息
          <personal-set></personal-set>
        </mu-paper>
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
import PersonalSet from "@/components/personal-set";
import bus from "@/utils/bus.js";
import DetailsLeft from "@/components/details-left";

export default {
  name: "home",
  components: {
    DetailsLeft,
    PersonalSet
  },
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    this.title = this.$route.query.msg;
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
