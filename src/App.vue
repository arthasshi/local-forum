<template>
  <div id="app">
    <mu-paper class="header" :z-depth="3" >
      <div class="title">走廊</div>
      <mu-text-field class="serach" placeholder="搜索"></mu-text-field>
      <div class="sub-menu">
        <mu-button flat>首页</mu-button>
        <mu-button flat>我</mu-button>
        <mu-button flat>设置</mu-button>
        <mu-button flat>登出</mu-button>
      </div>
    </mu-paper>
    <router-view class="view"/>
  </div>
</template>

<style lang="scss">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background: #f5f5f5;
  @extend %col;
  justify-content: flex-start;
  .view{
    width: 80%;
    height: 100%;
    min-width: 1366px;
    margin-top: 20px;
  }
  .header{
    width: 100%;
    background: #fff;
    height: 68px;;
    min-height: 68px;
    @extend %row;
    justify-content: space-between;
    .title{
      font-weight: 400;
      color: #000;
      font-size: 40px;
      margin-left: 10%;
    }
    .serach{
      align-content: flex-end;
      height: 100%;
    }
    .sub-menu{
      @extend %row;
      justify-content: flex-end;
      margin-right: 10%;
    }
  }
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
