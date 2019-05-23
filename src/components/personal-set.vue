<template>
<!-- 个人信息设置组件---后期可以直接组装在个人信息页里 -->
  <div @click="pesonalClick" class="personal-data">个人资料设置</div>
</template>
<script>
import bus from "@/utils/bus.js";

export default {
  name: "PersonalSet",
  methods: {
    pesonalClick() {
      bus.$emit("gotoPersonal", "/personal-data");
    }
  }
};
</script>
<style scoped>
.personal-data {
  cursor: pointer;
}
</style>
