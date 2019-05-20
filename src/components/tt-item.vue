<template>
<div class='tt-item'>
  <div class='tit'>{{tit}}</div>
  <div class='tt-item-bottom'>
      <div class='tt-item-bottom-ite'>{{time}}</div>
      <div class='tt-item-bottom-ite'>{{name}}</div>
      <div class='tt-item-bottom-ite cursor'>
         <div @mouseover="show" @mouseout="hide">
              <mu-icon 
              value='chat_bubble'
              color='rgb(172, 165, 165)'
              ></mu-icon>
              评论：{{number}}条
         </div>
         <div class='search-comment' v-if="visible">查看评论</div>
      </div>
  </div>
</div>
</template>
<script>
export default{
    name:'TtItem',
    props:['tit','time','name','number'],
    data(){
        return {
            visible:false,
        }
    },
    methods:{
        show(){
         this.visible = true;
        },
        hide(){
            this.visible = false;
        }
    }
}
</script>
<style lang='scss' scoped>
%col{
    display: flex;
    flex-direction: column;
    align-items: center;
}
%row{
    display: flex;
    align-items: center;
}
.tt-item{
    width: 100%;
    border-bottom: 2px solid rgb(150, 147, 147);
    border-radius: 5px;
    @extend %col;
    align-items: flex-start;
    margin-bottom: 30px;
    background: #fff;
    .tit{
        height: 80%;
        width: 100%;
        border-bottom:1px solid rgb(185, 187, 185);
        @extend %row;
        flex-wrap:wrap;
        justify-content: flex-start;
        font-size: 20px;
        padding: 30px;
        cursor:pointer;
    }
    .tit:hover{
        color: red;
    }
    .tt-item-bottom{
        @extend %row;
        .tt-item-bottom-ite{
            padding: 30px 80px;
            position: relative;
            .search-comment{
                position: absolute;
                padding: 5px;
                font-size: 10px;
                bottom:-10px;
                left:90px;
                border-radius: 3px;
                background: rgb(202, 200, 200);
                color: rgb(65, 62, 62);
            }
           
        }
    }
    .cursor{
        cursor: pointer;
        div{
            @extend %row;
        }
    }
}
</style>