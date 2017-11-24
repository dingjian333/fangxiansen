<template>
  <div>
  	
  		<my-header> </my-header>
  		 <div id="lianxi_top">
  		 		<img src="../../../static/img/l.png" />
  		 </div>
  		 <ul id="lianxia">
  		 	<li>
  		 		<div id="lianxileft">
  		 			<span class="iconfont icon-location"></span>
  		 		</div>
  		 		<p>杭州市滨江区长河街道越达巷79号连连大厦A懂301</p>
  		 	</li>
  		 	<li>
  		 		<div id="lianxileft">
  		 			<span class="iconfont icon-tel"></span>
  		 		</div>
  		 		<p>400-9977-658</p>
  		 	</li>
  		 </ul>
  		 <div id="lianxib">
  		 		<img src="../../../static/img/l1.png" />
  		 		<p>长按识别二维码关注微信咨询</p>
  		 </div>
  		<my-bottom></my-bottom>
  </div>
</template>

<script>
	import Header from "@/components/header";
	import Bottom from "@/components/bottom";
	export default {
  data () {
  			return{
  				arr:[]
  			}
  },
 	components:{
			"my-header":Header,
			"my-bottom":Bottom
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#lianxi_top{
	width: 100%;
	margin-top: 50px;
	height: 210px;
}
#lianxi_top img{
	width: 100%;
	height: 100%;
}
#lianxia{
	width: 100%;
	display: flex;
	margin-top: 18px;
	margin-bottom: 22px;
	justify-content: space-around;
}
#lianxia li{
	width: 44%;
	text-align: center;
}
#lianxia li p{
	font-size: 14px;
	color: #333;
}
#lianxileft{
	width:60px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	margin: 0 auto;
	border-radius: 50%;
	background: #39C893;
	margin-bottom: 14px;
}
.icon-location{
	color: white;
	font-size: 30px;
}
.icon-tel{
	color: white;
	font-size: 30px;
}
#lianxib{
	width: 100%;
	background: #F4F4F4;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
#lianxib img{
	width: 132px;
	height: 132px;
	margin-top: 12.5px;
}
#lianxib p{
	margin-top: 11px;
	margin-bottom: 22px;
	color: #333;
	font-size: 15px;
}
</style>
