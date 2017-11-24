<template>
  <div>
  		<my-header></my-header>
  		<div id="baojia">
  				<img src="../../../static/img/10quoted.jpg" />
  		</div>
  		<p id="guanyua">房先森10S报价</p>
  		<p id="guanyub">
  			<span>————————</span>
  			<span><img src="../../../static/img/icon_title.png"></span>
  			<span>————————</span>
  		</p>
  		<div id="yuyue-c">
  		<input type="text" placeholder="请填写建筑面积" id="txt"/>
  		<select id="baojia_a">
  			<option value="">现代</option>
  			<option value="">美式</option>
  			<option value="">中式</option>
  			<option value="">欧式</option>
  			<option value="">地中海</option>
  		</select>
  		<p id="baojia_c">
  			<select id="baojia_aa">
	  			<option value="">1室</option>
	  			<option value="">2室</option>
	  			<option value="">3室</option>
	  		</select>
	  		<select id="baojia_aa">
	  			<option value="">1厅</option>
	  			<option value="">2厅</option>
	  			<option value="">3厅</option>
	  		</select>
  		</p>
  		<p id="baojia_c">
  			<select id="baojia_aaa">
	  			<option value="">1厨</option>
	  			<option value="">2厨</option>
	  			<option value="">3厨</option>
	  		</select>
	  		<select id="baojia_aaa">
	  			<option value="">1卫</option>
	  			<option value="">2卫</option>
	  			<option value="">3卫</option>
	  		</select>
	  		<select id="baojia_aaa">
	  			<option value="">1阳台</option>
	  			<option value="">2阳台</option>
	  			<option value="">3阳台</option>
	  		</select>
  		</p>
  		<button id="but">立即申请</button>
  		</div>
  		<div id="daikuan_a">
				<p>装修报价</p>
				<p>全装装修报价：<font>81,889,78</font>元</p>
				<p>您还可以选择</p>
				<p>房先森装修半包套餐价，<span>399</span>元/平米</p>
				<button id="buta">预约399套餐</button>
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
		},
  mounted:function(){
  	  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#baojia{
	width: 100%;
	margin-top: 51px;
}
#baojia img{
	width: 100%;
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
	width: 50px;
}
#yuyue-c{
		width: 80%;
		margin-left: 10%;
		text-align: center;
		margin-top: 20px;
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
	#yuyue-c #txt{
		width: 100%;
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
	#baojia_a{
		width: 100%;
		height: 35px;
		border: 1px;
		border: 1px solid #EAEAEA;
		border-radius: 5px;
		font-size: 14px;
		margin-bottom: 12.5px;
		text-indent: 10px;
		letter-spacing: 2px;
	}
	#baojia_c{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	#baojia_aa{
		width: 48%;
		height: 35px;
		border: 1px;
		border: 1px solid #EAEAEA;
		border-radius: 5px;
		font-size: 14px;
		margin-bottom: 12.5px;
		text-indent: 10px;
		letter-spacing: 2px;
	}
	#baojia_aaa{
		width: 31%;
		height: 35px;
		border: 1px;
		border: 1px solid #EAEAEA;
		border-radius: 5px;
		font-size: 14px;
		margin-bottom: 12.5px;
		text-indent: 10px;
		letter-spacing: 2px;
	}
	#yuyue-c #but{
		width: 100%;
		text-align: center;
		height: 35px;
		border: 1px;
		border-radius: 5px;
		border: 1px solid #EAEAEA;
		background: #feb505;
		color: white;
		letter-spacing: 2px;
		font-size: 15px;
		margin-bottom: 18px;
	}
	#daikuan_a{
		width: 94%;
		margin-left: 3%;
		margin-top: 18px;
		border: 1px dashed #39C894;
		position: relative;
		text-align: center;
	}
	#daikuan_a p:nth-of-type(1){
		position: absolute;
    top: -33px;
    font-size: 18px;
    background: white;
    left: 23%;
    width: 50%;
    text-align: center;
    letter-spacing: 1px;
	}
	#daikuan_a p{
		margin-top: 13px;
		font-size: 13px;
		width: 96%;
		margin-left: 2%;
		margin-bottom:10px;
	}
	#daikuan_a p font{
		color:#FF4351 ;
	}
	#daikuan_a p span{
		color: #FEB505;
	}
	#buta{
		width: 80%;
		text-align: center;
		height: 35px;
		border: 1px;
		border-radius: 5px;
		border: 1px solid #39C894;
		background: white;
		color: #39C894;
		letter-spacing: 2px;
		font-size: 15px;
		margin-top: 8px;
		margin-bottom: 12px;
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
