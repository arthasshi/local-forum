<template>
<div class="header">
<mu-breadcrumbs>
    <mu-breadcrumbs-item to='/tittle-tattle'>
      首页
    </mu-breadcrumbs-item>
    <mu-breadcrumbs-item :disabled='true'>
        {{option}}
    </mu-breadcrumbs-item>
</mu-breadcrumbs>
</div>
</template>
<script>
export default{
    name:'ListHeader',
    props:['option'],
}
</script>
<style lang='scss' scoped>
 .header{
     border-bottom: 2px solid rgb(150, 147, 147);
     border-radius: 5px;
 }
</style>