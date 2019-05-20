<template>
  <div class="tittle-tattle">
    <list-header option="杂谈"></list-header>
    <div class="posts">
      <tt-item
        :tit="item.tit"
        :time="item.time"
        :name="item.name"
        :number="item.number"
        v-for="(item,index) 
         of list"
        :key="index"
      ></tt-item>
    </div>
  </div>
</template>
<script>
import ListHeader from "@/components/list-header.vue";
import TtItem from "@/components/tt-item.vue";
export default {
  name: "TittleTattle",
  data() {
    return {
      list: [
        {
          tit: "杂谈一",
          time: "2019.5.3",
          name: "小明",
          number: "11324525"
        },
        {
          tit: "杂谈一",
          time: "2019.5.3",
          name: "小明",
          number: "11324525"
        },
        {
          tit: "杂谈一",
          time: "2019.5.3",
          name: "小明",
          number: "11324525"
        },
        {
          tit: "杂谈一",
          time: "2019.5.3",
          name: "小明",
          number: "11324525"
        }
      ]
    };
  },
  components: {
    ListHeader,
    TtItem
  }
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
}
.tittle-tattle {
  width: 100%;
  height: 100%;
  .posts {
    background: #f3f0f0;
  }
}
</style>
