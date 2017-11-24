<template>
  <div>
  	
  		<my-header> </my-header>
  		<div id="lianxi_top">
  		 		<img src="../../../static/img/g_02.png" />
  		</div>
  		<p id="guanyua">预约房先森服务</p>
  		<p id="guanyub">
  			<span>————————</span>
  			<span><img src="../../../static/img/icon_title.png"></span>
  			<span>————————</span>
  		</p>
  		<div id="yuyue-a">
  		<div id="yuyue-c">
  		<input type="text" placeholder="小区名" id="txt"/>
  		<input type="text" placeholder="手机号" id="txt"/>
  		<input type="text" placeholder="建筑面积" id="txt"/>
  		<button id="but">立即申请</button>
  		</div>
  	</div>
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
  		<p id="guanyua">我们可以为您提供</p>
  		<p id="guanyub">
  			<span>————————</span>
  			<span><img src="../../../static/img/icon_title.png"></span>
  			<span>————————</span>
  		</p>
  		<ul id="baojia_d">
  				<li>
  						<div><span class="iconfont icon-app"></span></div>
  						<p>产品系列</p>
  						<small>半包，全包套餐，全屋定制及个性化升级</small>
  				</li>
  				<li>
  						<div><span class="iconfont icon-price"></span></div>
  						<p>产品系列</p>
  						<small>半包，全包套餐，全及个性化升级</small>
  				</li>
  				<li>
  						<div><span class="iconfont icon-live"></span></div>
  						<p>产品系列</p>
  						<small>半包，全屋定制及个性化升级</small>
  				</li>
  				<li>
  						<div><span class="iconfont icon-protection"></span></div>
  						<p>产品系列</p>
  						<small>半包，全包套及个性化升级</small>
  				</li>
  				<li>
  						<div><span class="iconfont icon-construction-site"></span></div>
  						<p>产品系列</p>
  						<small>半包，全包套餐，及个性化升级</small>
  				</li>
  				<li>
  						<div><span class="iconfont icon-protection"></span></div>
  						<p>产品系列</p>
  						<small>半包，全包套餐，全屋定制及个性</small>
  				</li>
  		</ul>
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
	width: 50px;
}
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
	width: 40px;
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
	#yuyue-c{
		width: 100%;
		text-align: center;
	}
	#yuyue-a{
		margin-left: 10px;
		width:355px ;
		margin-top: 13px;
	}
	#yuyue-c #txt{
		width: 293px;
		height: 35px;
		border: 1px;
		border: 1px solid #EAEAEA;
		border-radius: 5px;
		font-size: 14px;
		color: #cacaca;
		margin-bottom: 12.5px;
		text-indent: 10px;
		letter-spacing: 2px;
	}
	#yuyue-c #but{
		width: 293px;
		text-align: center;
		height: 35px;
		border: 1px;
		border-radius: 5px;
		border: 1px solid #EAEAEA;
		background: #feb505;
		color: white;
		letter-spacing: 2px;
		font-size: 18px;
		margin-bottom: 18px;
	}
	#baojia_d{
  	width: 94%;
  	margin-left: 3%;
  	display: flex;
  	flex-wrap: wrap;
  	justify-content: space-between;
  }
  #baojia_d li{
  	width: 33%;
  	text-align: center;
  }
  #baojia_d li div{
  	width: 50px;
  	height: 50px;
  	border-radius: 50%;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	background: #39C894;
  	color: white;
  	margin: 10px auto;
  }
  #baojia_d li small{
  	
  	font-size: 12px;
  	color: #666;
  }
  #baojia_d li:nth-of-type(1){
  	border-right: 1px solid #EAEAEA;
  	border-bottom: 1px solid #EAEAEA;
  }
  #baojia_d li:nth-of-type(3){
  	border-left: 1px solid #EAEAEA;
  	border-bottom: 1px solid #EAEAEA;
  }
  #baojia_d li:nth-of-type(5){
  	border-right: 1px solid #EAEAEA;
  	border-top: 1px solid #EAEAEA;
  	border-left: 1px solid #EAEAEA;
  }
  .iconfont{
  	font-size: 26px;
  }
</style>
