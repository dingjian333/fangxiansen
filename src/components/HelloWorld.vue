<template>
  <div class="hello">
  		<!--导航-->
  		<my-header></my-header>
  		<!--锚点-->
  		<p id="aaa"></p>
   		<!--轮播-->
   		<my-swiper> </my-swiper>
   		<!--路由导航-->
   		<my-luyou> </my-luyou>
   		<!--轮播-2-->
   		<my-swipera> </my-swipera>
   		<!--装修预约-->
   		<my-yuyue> </my-yuyue>
   		<!--设计师-->
   		<my-shejishi> </my-shejishi>
   		<!--底部-->
   		<my-bottom></my-bottom>
   		<my-guanggao></my-guanggao>
  </div>
</template>

<script>
	import Swiper from "@/components/swiper";
	import Luyou from "@/components/luyou";
	import Swipera from "@/components/swiper-2";
	import Yuyue from "@/components/yuyue";
	import Shejishi from "@/components/shejishi";
	import Header from "@/components/header";
	import Bottom from "@/components/bottom";
	import Guanggao from "@/components/guanggao";
	
	export default {
	  data () {
	  	return{
	  		arr:[]
	  	}
	  },
	  components:{
	  	"my-swiper":Swiper,
	  	"my-luyou":Luyou,
	  	"my-swipera":Swipera,
	  	"my-yuyue":Yuyue,
	  	"my-shejishi":Shejishi,
	  	"my-header":Header,
	  	"my-bottom":Bottom,
	  	"my-guanggao":Guanggao
	  	
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	#aaa{
		margin-top: 50px;
	}
</style>
