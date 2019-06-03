<template>
  <div class="personal">
    <mu-paper class="left" :z-depth="1">
      <mu-tabs :value.sync="active1" inverse color="primary"
      indicator-color="secondary" text-color="rgba(0, 0, 0, 54)"  left>
      <mu-tab ripple>全部 20</mu-tab>
      <mu-tab ripple>Apple 15</mu-tab>
      <mu-tab ripple>走廊 5</mu-tab>
      </mu-tabs>
      <div class="content-a">
        <div class="chlid-a" v-for="(item,index) in list" :key="index">
          <div class="son">
            在<a href="">{{item.tb}}</a>
            发帖<a href="">{{item.nr}}</a>
            {{item.reply}}
          </div>
          <div class="daughter">{{item.time}}</div>
        </div>
      </div>
      <div class="content-b">
        <div class="title">回复列表</div>
        <div class="child-b" v-for="(msg,index) in listA" :key="index">
          <div class="boy">
            <a href="">{{msg.name}}</a>回复
            <a href="">{{msg.hf}}</a>
          </div>
          <div class="girl">{{msg.time}}</div>
        </div>
      </div>
    </mu-paper>
    <div class="right" >
      <mu-paper class="user-info" :z-depth='1'>
        <div class="part-a">
          <img class="touxiang" src="../assets/tx.jpg">
          <div class="nc">昵称：烙饼得翻个儿</div>
        </div>
        <div class="part-b">
          <div class="aa">注册时间 2019-02-17</div>
          <div class="aa">在线时间 1024小时</div>
          <div class="aa">金币排名 66名</div>
          <div class="aa">荣誉墙</div>
          <div class="rongyu">
          <img class="bb" src="../assets/LT1.gif">
          <img class="bb" src="../assets/LT2.gif">
          <img class="bb" src="../assets/LT3.gif">
          <img class="bb" src="../assets/LT4.gif">
          <img class="bb" src="../assets/LT5.gif">
          <img class="bb" src="../assets/LT6.gif">
          </div>
        </div>
      </mu-paper>
    </div>
  </div>
</template>
<script>
import { getAllUsers, addUser } from '@/api/user';

export default {
  name: '',
  components: {
  },
  data() {
    return {
      list: [
        {
          tb: 'web前端开发吧',
          nr: '这款电脑用来编程怎么样',
          reply: '回复（123）',
          time: '19:29',
        },
        {
          tb: '栀子花吧',
          nr: '栀子花好养吗',
          reply: '回复（666）',
          time: '19:29',
        },
        {
          tb: '农业银行吧',
          nr: '农行钻石卡如何办理',
          reply: '回复（678）',
          time: '19:29',
        },
        {
          tb: '中国银行吧',
          nr: '农业银行哪张信用卡比较好',
          reply: '回复（220）',
          time: '19:29',
        },
        {
          tb: '电影吧',
          nr: '最近比较好看的美剧，谁推荐一下啊',
          reply: '回复（329）',
          time: '19:29',
        },
        {
          tb: '二级建造师吧',
          nr: '二级建造师报名时有专业限制吗',
          reply: '回复（889）',
          time: '19:29',
        },
      ],
      listA: [
        {
          name: '蘑菇',
          hf: '用来编程挺好的',
          time: '20:19',
        },
        {
          name: '菜菜',
          hf: '栀子花稍耐阴，不宜强烈阳光宜射',
          time: '20:19',
        },
        {
          name: '豆豆',
          hf: '带上你的砖',
          time: '20:19',
        },
        {
          name: '章三',
          hf: '资质好的话申精粹白吧',
          time: '20:19',
        },
        {
          name: '李斯',
          hf: '权力的游戏第八季',
          time: '20:19',
        },
        {
          name: '王武',
          hf: '不太清楚啊，让楼下回答你吧',
          time: '20:19',
        },
      ],
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    add() {
      const userObj = {
        name: '',
        sdsd: '',
      };
      addUser(userObj).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    },
    getAll() {
      getAllUsers().then((res) => {
        console.log(res);
      });
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
  height: 50px;
  width: 100%;
  border-bottom: #f2f2f2 solid 1px;
  justify-content: space-between;
}
.personal{
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
    .content-a{
      @extend %col;
      width: 100%;
      justify-content: flex-start;
      margin-top: 20px;
      .chlid-a{
        @extend %com;
        @extend %row;
      }
    }
  }
  .son,.boy{
    letter-spacing: 2px;
    margin-left: 20px;
  }
  .daughter,.girl{
    margin-right: 20px;
  }
  .content-b{
    @extend %col;
    width: 100%;
    align-items: flex-start;
    margin-top: 100px;
    .title{
      font-size:18px;
      margin-bottom: 30px;
      margin-left: 20px;
    }
    .child-b{
      @extend %row;
      @extend %com;
    }
  }
  .right{
    width: 26%;
    @extend %col;
    justify-content: flex-start;
    .user-info{
      height: 400px;
      width: 100%;
      margin-bottom: 20px;
      .part-a{
        width: 100%;
        height:50%;
        background: rgb(42, 131, 233);
        @extend %col;
        justify-content: space-around;
        .touxiang{
          border-radius: 50px;
        }
        .nc{
          font-size: 16px;
          font-weight: bold;
        }
      }
      .part-b{
        @extend %col;
        align-items: flex-start;
        margin: 20px;
        .aa{
          font-size: 16px;
          margin: 5px;
        }
        .bb{
          margin: 5px;
        }
      }
    }
  }
}
</style>
