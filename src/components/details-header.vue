<template>
<!-- 面包屑组件 -->
  <div class="header">
    <mu-breadcrumbs class="demo-color-btn" color="Red">
      <mu-breadcrumbs-item><span @click="headerHandelClick">首页</span></mu-breadcrumbs-item>
      <mu-breadcrumbs-item :disabled='disabled'>{{tit}}</mu-breadcrumbs-item>
    </mu-breadcrumbs>
  </div>
</template>
<script>
import bus from '@/utils/bus.js';

export default {
  name: 'DetailsHeader',
  props: ['tit'],
  data() {
    return {
      disabled: true,
      title: '',
    };
  },
  methods: {
    headerHandelClick() {
      bus.$emit('handelChange', '/');
    },
  },
};
</script>
<style lang='scss' scoped>
.header {
  border-bottom: 2px solid #f2f2f2;
}
</style>
