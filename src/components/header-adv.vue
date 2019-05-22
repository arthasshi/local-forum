<template>
  <div class="advertising">
    <mu-icon 
      value="clear" 
      @click='$emit("close-adv")'
      right class="close-adv"
     >
     </mu-icon>
    <img :src="url" title="广告图片" alt="广告图片">
  </div>
</template>
<script>
export default {
  name: "HeaderAdv",
  props: ["url"]
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
.advertising {
  padding: 0 80px;
  margin-bottom: 20px;
  width: 100%;
  height: 80px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .close-adv {
    font-size: 5px;
    color: #fff;
    display: inline-block;
    border-radius: 3px;
    position: absolute;
    padding: 5px;
    right: 80px;
    background: #2196f3;
    mu-icon {
      border: 1px solid red;
    }
  }
}
</style>