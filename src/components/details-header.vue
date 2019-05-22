<template>
  <div class="header">
    <mu-breadcrumbs class="demo-color-btn" color="Red">
      <mu-breadcrumbs-item><span @click="handelClick">首页</span></mu-breadcrumbs-item>
      <mu-breadcrumbs-item disabled=false>{{tit}}</mu-breadcrumbs-item>
    </mu-breadcrumbs>
  </div>
</template>
<script>
import bus from '@/utils/bus.js'
export default {
  name: "DetailsHeader",
  props: ["tit"],
  data(){
    return {
      bool:true,
    }
  },
  methods:{
    handelClick(){
      bus.$emit('handelChange',this.bool)
    }
  }
};
</script>
<style lang='scss' scoped>
.header {
  border-bottom: 2px solid rgb(185, 179, 179);
}
</style>