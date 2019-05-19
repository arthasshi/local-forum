<template>
  <div class="home">
    <mu-paper class="left" :z-depth="1">
       <mu-tabs :value.sync="active1" inverse color="primary"
      indicator-color="primary" text-color="rgba(0, 0, 0, .54)"  center>
      <mu-tab ripple>杂谈</mu-tab>
      <mu-tab ripple>Apple</mu-tab>
      <mu-tab ripple>过道儿</mu-tab>
      <mu-tab ripple>鬼市</mu-tab>
      </mu-tabs>
      <div class="content">
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
      <div class="withe"></div>
        <div class="top-map">
          <div class="gps">节点导航</div>
          <div class="all">浏览全部节点</div>
        </div>
        <div class="border"></div>
        <div class="fir-map">
          <div class="Go-lan">Go语言</div>
          <div>balala</div>
          <div>balalala</div>
        </div>
        <div class="border"></div>
        <div class="sce-map">
          <div class="geek">Geek</div>
          <div>balala</div>
          <div>balalala</div>
        </div>
        <div class="border"></div>
        <div class="thd-map">
        <div class="found">分享与探索</div>
        <div>balala</div>
        <div>balalala</div>
        </div>
        <div class="border"></div>
        <div class="for-map">
          <div class="go-china">Go中文网</div>
          <div>balala</div>
          <div>balalala</div>
        </div>
        <div class="border"></div>
        <div class="fin-map">
          <div class="life">生活</div>
          <div>balala</div>
          <div>balalala</div>
        </div>
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
  };
  .withe{
    height: 10px;
    width: 100%;
    background:#f2f2f2; 
  };
  .top-map{
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    height: 30px;
  };
  .gps{
    margin-right: 800px;
    color: #666;
  };
  .fir-map{
    display: flex;
    width: 100%;
    height: 30px
  };
  .Go-lan{
    color: #666;
    width: 90px;
    text-align:right;
    margin-right: 10px;
  };
  .sce-map{
    display: flex;
    width: 100%;
    height: 30px;
  };
  .geek{
    color: #666;
    width: 90px;
    text-align:right;
    margin-right: 10px;
  };
  .thd-map{
    display: flex;
    width: 100%;
    height: 30px;
  }
  .found{
    width: 90px;
    text-align:right;
    margin-right: 10px;
    color: #666;
  };
  .for-map{
    display: flex;
    width: 100%;
    height: 30px;
  };
  .go-china{
    width: 90px;
    text-align:right;
    margin-right: 10px;
    color: #666;
  };
  .fin-map{
    display:flex;
    width: 100%;
    height: 30px;
  };
  .life{
    width: 90px;
    text-align:right;
    margin-right: 10px;
    color: #666;
    };
    .border{
      height: 2px;
      width: 100%;
      background: #f2f2f2
    }
}
</style>
