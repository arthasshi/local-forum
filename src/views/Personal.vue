<template>
<div class="container">
    <div class="menu">
        <button class="bt" @click="gotoHome">首页</button>
        <button class="bt">会员</button>
        <button class="bt">我的信息</button>
    </div>
    <div class="content-a">
        <div class="item-a">
         <!--    <mu-button color="darkBlack">
            <mu-icon value="remove_circle" left></mu-icon>初级会员
        </mu-button> -->
        <!-- <div class="box-a">初级会员</div> -->
        <div class="wz">初级会员： 第37099位会员</div>
        <div class="wz">论坛 ID： KK886666</div>
        <div class="wz">注册时间： 2019-05-19 09:18:02</div>
        <div class="wz">是否在线： online</div>
        </div>
        <div class="box">
            <img src="../assets/tx.jpg">
            <div class="box-b">我的收藏</div>
            <div class="box-c">编辑信息</div>
        </div>
    </div>
    <div class="footer" v-for="(item,index) in list" :key="index">
        <div class="ft-a">
            <div class="zt">{{item.zt}}</div>
            <div class="zt">{{item.gd}}</div>
        </div>
        <div class="ft-b"></div>
        <div class="ft-c">
            <div class="zt1">{{item.zw}}</div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      list: [
        {
          zt: '最近发布的主题',
          gd: '更多>>',
          zw: '暂无',
        },
        {
          zt: '最近发布的文章',
          gd: '更多>>',
          zw: '暂无',
        },
        {
          zt: '最近分享的资源',
          gd: '更多>>',
          zw: '暂无',
        },
        {
          zt: '最近发布的评论',
          gd: '更多>>',
          zw: '暂无',
        },
      ],
    };
  },
  methods: {
    gotoHome() {
      this.$router.push('/');
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
%com{
    width: 90px;
    height: 30px;
    color: #fff;
    line-height: 30px;
    text-align: center;
}
.container{
    width: 100%;
    height: 100%;
    background:rgb(223, 221, 221);
    @extend %col;
}
.menu{
    width: 100%;
    height: 50px;
    @extend %row;
    justify-content: flex-start;
    .bt{
        margin: 0 10px;
    }
}
.content-a{
    width: 100%;
    height: 250px;
    background:rgb(252, 252, 252);
    @extend %row;
    justify-content: space-between;
    .item-a{
        @extend %col;
        align-items: flex-start;
        /* .box-a{
            @extend %com;
            background: black;
        } */
        .wz{
            font-size: 18px;
            font-weight: bold;
            margin: 7px 0;
        }
    }
    .box{
        @extend %col;
        justify-content: space-between;

        .box-b{
            @extend %com;
            background:rgb(47, 255, 82);
            margin: 10px 0;
        }
        .box-c{
            @extend %com;
            background: black;
        }
    }
}
.wz{
    text-align: end;
}
.footer{
    width: 100%;
    height: 120px;
    background: #fff;
    margin-top: 25px;
    .ft-a{
        @extend %row;
        justify-content: space-between;
        .zt{
            font-size:20px;
            margin-top: 5px;
        }
    }
}
.ft-b{
    width: 100%;
    height:1px;
    background: rgb(221, 219, 219);
    margin-top: 10px;
}
.zt1{
    font-size:20px;
    margin-top: 20px;
}
</style>
