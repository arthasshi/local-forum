<template>
  <div class="path">
    <list-header option="过道儿"></list-header>
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
  name: "path",
  data() {
    return {
      list: [
        {
          tit: "path1",
          time: "2019.5.3",
          name: "阿芳",
          number: "11324525"
        },
        {
          tit: "path1",
          time: "2019.5.3",
          name: "阿芳",
          number: "11324525"
        },
        {
          tit: "path1",
          time: "2019.5.3",
          name: "阿芳",
          number: "11324525"
        },
        {
          tit: "path1",
          time: "2019.5.3",
          name: "阿芳",
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
.path {
  width: 100%;
  height: 100%;
  .posts {
    background: #f3f0f0;
  }
}
</style>
