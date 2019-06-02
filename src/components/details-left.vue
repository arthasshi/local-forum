<template>
  <!-- 详情页的左侧组件 -->
  <div class="details">
    <details-header :tit="tit"></details-header>
    <div class='post-content'>
      <div class='title'>{{list.title}}</div>
      <div class='msg'>
        <div class='msg-item'>{{list.name}}</div>
        <div class='msg-item'>{{list.time}}</div>
        <div class='msg-item'>点击次数：{{list.clickcount}}次</div>
      </div>
      <div class='post'>{{list.post}}</div>
    </div>
    <div class="bottom">
        <mu-button small flat color="primary">收藏</mu-button>
        <mu-button small flat color="primary" class="mic">感谢</mu-button>
    </div>
    <div class="reply-top">
      <div class="reply-top-left">0 回复</div>
      <div class="reply-top-right">
        <mu-button small round ripple color="primary" class="but">web</mu-button>
        <mu-button small round ripple color="primary" class="but">试试</mu-button>
        <mu-button small round ripple color="primary" class="but">版本</mu-button>
      </div>
    </div>
    <div class="reply-bottom">暂无回复</div>
    <div class="add">添加一条回复</div>
    <div class="answer">
      <div class="btn">
        <mu-button small flat color="primary" :class="{ite:edi}" @click="change1">编辑</mu-button>
        <mu-button small flat color="primary" :class="{ite:pre}" @click="change2">预览</mu-button>
      </div>
      <textarea v-model="answer" v-if="edi" name="answer"></textarea>
      <div class="preview" v-else>{{answer}}</div>
    </div>
    <div class="annotation">
      <ul>
        <li>请尽量让自己的回复能够对别人有帮助</li>
        <li>支持 Markdown 格式, **粗体**、~~删除线~~、`单行代码`</li>
        <li>支持 @ 本站用户；支持表情（输入 : 提示），见 Emoji cheat sheet</li>
        <li>图片支持拖拽、截图粘贴等方式上传</li>
      </ul>
      <mu-button small color="primary">提交</mu-button>
    </div>
  </div>
</template>
<script>
import DetailsHeader from '@/components/details-header';

export default {
  name: 'TittleTattle',
  props: ['tit'],
  data() {
    return {
      edi: true,
      pre: false,
      answer: '',
      tti: '',
      list: {
        title: 'Go 语言实现的 Web Server：Caddy，终于发布 1.0 稳定版本了',
        name: '小明',
        time:'21:30',
        clickcount: '300',
        post:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      },
    };
  },
  components: {
    DetailsHeader,
  },
  mounted() {
    this.tti = this.rel;
  },
  methods: {
    change1() {
      this.edi = true;
      this.pre = false;
    },
    change2() {
      this.pre = true;
      this.edi = false;
    },
  },
};
</script>
<style lang='scss' scoped>
%row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
%col {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(161, 159, 159);
}
.details {
  width: 72%;
  height: 100%;
  margin: 0 10px 0 80px;
  font-size: 16px;
  .post-content{
    background: #fff;
    .title{
      font-size: 20px;
      display: flex;
      padding: 30px;
    }
    .msg{
      display: flex;
      .msg-item{
        margin-left:30px;
      }
    }
    .post{
      font-size: 14px;
      color: rgb(155, 151, 151);
      display: flex;
      flex-wrap: wrap;
      padding: 30px;
    }
  }
  .bottom {
    background: rgb(227, 231, 220);
    padding: 10px;
    @extend %row;
    border: 1px solid #f2f2f2;
    border-radius: 0 0 5px 5px;
  }
  .reply-top {
    @extend %row;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
    padding: 10px;
    margin-top: 20px;
    background: #fff;
    .mu-button {
      margin-left: 8px;
    }
  }
  .reply-bottom {
    @extend %row;
    justify-content: center;
    padding: 20px;
    background: #fff;
  }
  .add {
    width: 100%;
    @extend %row;
    background: #fff;
    margin-top: 20px;
    padding: 10px;
    border-bottom: 1px solid #f2f2f2;
  }
  .answer {
    padding: 10px 10px 0 10px;
    background: #fff;
    .btn {
      @extend %row;
      justify-content: flex-start;
      .normal {
        margin: 3px;
        border: 1px solid #f2f2f2;
        border-radius: 8px;
        cursor: pointer;
      }
      .ite {
        background: #2196f3;
        color: #fff;
      }
    }
    textarea,
    .preview {
      width: 100%;
      height: 200px;
      overflow: hidden;
      border: 1px solid #f2f2f2;
    }
    .preview {
      display: flex;
    }
  }
  .annotation {
    background: #fff;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;

    ul {
      @extend %col;
      background: #fff;
      align-items: flex-start;
      padding-left: 15px;
    }
  }
}
</style>
