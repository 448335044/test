<template>
   <div class="goodsList">
     <router-link class="goodsItems" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/' + item.id" tag="div">
     <img :src="item.img_url" alt=""/>
     <h1 class="title">{{item.title}}</h1>
     <div class="info">
       <p class="price">
         <span class="now">￥{{item.sell_price}}</span>
         <span class="last">￥{{item.market_price}}</span>
       </p>
       <p class="detail">
         <span>热卖中</span>
         <span>剩{{item.stock_quantity}}件</span>
       </p>
     </div>
   </router-link>
    <!-- <mt-button type="danger" size="large">加载更多</mt-button>-->
     <button type="button" class="mui-btn mui-btn-block mui-btn-primary" @click="getMore">加载更多</button>

   </div>
</template>

<script>
    export default {
      data(){
      //data是往自己组件内部，挂载一些私有的数据
      return {
        pageindex:1,
        goodslist:[]
      };
    },
    created(){
      this.getGoodsList();
    },
    methods:{
      getGoodsList(){
        //获取商品列表
        this.$http
          .get("http://www.liulongbin.top:3005/api/getgoods?pageindex=" + this.pageindex)
          .then(result => {
          if(result.body.status === 0 ){
            //this.goodslist = result.body.message;
            //加载更多，拼接
            this.goodslist = this.goodslist.concat(result.body.message);
            this.goodslist.splice(8,2);
          }
        })
      },
      getMore(){
        this.pageindex++;
        this.getGoodsList();
      }
    }
    }
</script>

<style>
.goodsList{
  display: flex;
  flex-wrap: wrap;
  padding:7px;
  justify-content: space-between;

}
.goodsItems{
  width: 49%;
  border: 1px solid #d3d3d3;
  box-shadow: 0 0 8px #d3d3d3;
  margin-bottom: 7px;
  padding-bottom: 0;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  min-height: 329px;

}
.goodsItems .title{
  font-size: 20px;
  padding-left: 7px;
}
.goodsItems img{
  width: 100%;

}
.goodsItems .info{
  background-color: #d3d3d3;
}
.goodsItems .info p{
  margin: 0;
  padding: 5px 7px;
}
.goodsItems .info p .now{
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.goodsItems .info p .last{
  margin-left: 10px;
  text-decoration: line-through;
}
.detail{
  display: flex;
  justify-content:space-between;
}
</style>
