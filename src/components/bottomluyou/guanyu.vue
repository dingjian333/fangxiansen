<template>
  <div>
  	
  		<my-header> </my-header>
  		<div id="lianxi_top">
  		 		<img src="../../../static/img/g_02.png" />
  		</div>
  		<p id="guanyua">房先森简介</p>
  		<p id="guanyub">
  			<span>————————</span>
  			<span><img src="../../../static/img/icon_title.png"></span>
  			<span>————————</span>
  		</p>
  		<p id="jianjie">						
				房先森互联网装修平台由杭州瑞壹网络科技有限公司运营管理，房先森立足刚需房，专注于家庭装修服务
				，利用互联网将装修、供应链、金融进行融合，多维度实现用户对设计师、工长、工地、材料等的线上选
				择体验，房先森以自营的模式真正意义上过滤掉传统家装公司利润，将利润让给业主。房先森与银行合作
				的专项装修贷款能够解决业主装修资金问题，并以装修套餐 + 个性化定制的模式，提供创新型装修服务。
  		</p>
  		<div id="guanyuc">
	  			<p id="guanyua">我们是谁，我们如何与众不同？</p>
	  			<p id="guanyub">
		  			<span>————————</span>
		  			<span><img src="../../../static/img/icon_title.png"></span>
		  			<span>————————</span>
	  			</p>
	  			<p id="guanyud">
	  				<img src="../../../static/img/aaa.png" />
	  			</p>
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
	height: 150px;
}
#lianxi_top img{
	width: 100%;
	height: 100%;
}
#guanyua{
	width: 100%;
	text-align: center;
	padding-top: 17px;
	margin-bottom: 13px;
	letter-spacing: 1px;
}
#guanyub{
	width: 94%;
	margin-left: 3%;
	display: flex;
	justify-content:space-around;
	color: darkgray;
}
#guanyub img{
	vertical-align: middle;
	width: 60px;
}
#jianjie{
	width: 94%;
	margin-left: 3%;
	margin-top: 16px;
	margin-bottom: 19px;
	font-size: 14px;
	color: #333;
	text-indent: 2em;
}
#guanyuc{
	width: 100%;
	background: #F4F4F4;
	margin-top: 0px;
}
#guanyud{
	width: 100%;
	margin-top: 10px;
}
#guanyud img{
	width: 100%;
	margin-bottom: 15px;
}
</style>
