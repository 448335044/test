<template>
    <div>
       <!--轮播图区域-->
      <mt-swipe :auto="4000">
        <mt-swipe-item></mt-swipe-item>
        <mt-swipe-item></mt-swipe-item>
        <mt-swipe-item></mt-swipe-item>
      </mt-swipe>
      <!--分类-->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="goods/elcList">
          <img src="../image/新闻.png" alt="">
          <div class="mui-media-body">商品</div>
          </router-link>
        </li>
         <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../image/新闻.png" alt="">
          <div class="mui-media-body">新闻</div></a></li>
           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../image/新闻.png" alt="">
          <div class="mui-media-body">新闻</div></a></li>
           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../image/新闻.png" alt="">
          <div class="mui-media-body">新闻</div></a></li>
           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../image/新闻.png" alt="">
          <div class="mui-media-body">新闻</div></a></li>
           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../image/新闻.png" alt="">
          <div class="mui-media-body">新闻</div></a></li>
        </ul>
    </div>

</template>

<script>
    export default {}
</script>

<style>
.mint-swipe{
  height: 200px;
}
.mint-swipe-item:nth-child(1){
  background: url("../lib/img/01.jpg");
}
.mint-swipe-item:nth-child(2){
  background: url("../lib/img/0.jpg");
}
.mint-swipe-item:nth-child(3){
  background: url("../lib/img/01.jpg");
}
.mint-swipe-item img{
  width: 100%;
  height: 100%;
}
.mui-grid-9 img{
    width: 50px;
    height: 50px;
}
</style>
