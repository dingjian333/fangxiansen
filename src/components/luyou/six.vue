<template>
  <div>
  		<my-header></my-header>
  		<p id="daikuan">
  				<img src="../../../static/img/loans.jpg" />
  		</p>
  		<p id="guanyua">申请房先森装修贷</p>
  		<p id="guanyub">
  			<span>————————</span>
  			<span><img src="../../../static/img/icon_title.png"></span>
  			<span>————————</span>
  		</p>
  		<div id="yuyue-a">
  		<div id="yuyue-c">
	  		<input type="text" placeholder="电话" id="txt"/>
	  		<input type="text" placeholder="小区名" id="txt"/>
	  		<input type="text" placeholder="建筑面积" id="txt"/>
	  		<button id="but">立即申请</button>
  		</div>
		</div>
		<div id="daikuan_a">
			<p>什么是装修贷款？</p>
			<p>
				装修贷款是无担保个人信用贷款,是房先森装修和建行共同为准备装修的工薪人士
				发放的个人信用贷款,用于房屋装修相关的支出。<font>无需担保,无需抵押,</font>
				以个人信誉度作为判断依据,<font>最高可贷50万。</font>
			</p>
		</div>
		<p id="guanyua">申请流程</p>
  		<p id="guanyub">
  			<span>————————</span>
  			<span><img src="../../../static/img/icon_title.png"></span>
  			<span>————————</span>
  		</p>
  		<ul id="daikuan_b">
  				<li>
  					<div><span class="iconfont icon-pencle"></span></div>
  					<p>01</p>
  					<small>在线预约</small>
  				</li>
  				<li>
  					<div><span class="iconfont icon-audit"></span></div>
  					<p>02</p>
  					<small>银行评估初审</small>
  				</li>
  				<li>
  					<div><span class="iconfont icon-loans"></span></div>
  					<p>03</p>
  					<small>提交材料放款</small>
  				</li>
  		</ul>
  		<p id="guanyua">申请条件</p>
  		<p id="guanyub">
  			<span>————————</span>
  			<span><img src="../../../static/img/icon_title.png"></span>
  			<span>————————</span>
  		</p>
  		<div id="daikuan_c">
  				<ul>
  					<li>
  						 <div><span class="iconfont icon-social-security"></span></div>
  						 <p>社保缴纳记录</p>
  					</li>
  					<li>
  						 <div><span class="iconfont icon-document"></span></div>
  						 <p>购房资料或房产证</p>
  					</li>
  					<li>
  						 <div><span class="iconfont icon-building"></span></div>
  						 <p>房管局拉房产证明</p>
  					</li>
  					<li>
  						 <div><span class="iconfont icon-bank"></span></div>
  						 <p>没有银行违约的信用记录</p>
  					</li>
  				</ul>
	  	</div>
	  	<div id="daikuan_d">
	  		<img src="../../../static/img/16装修贷款_spec_02.jpg" />
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
		},
  mounted:function(){
  	  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#daikuan{
	margin-top: 50px;
	width: 100%;
	height: 149px;
}
#daikuan img{
	width: 100%;
	height: 100%;
}
#guanyua{
	width: 100%;
	text-align: center;
	padding-top: 20px;
	margin-bottom: 10px;
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
		width: 100%;
		margin-top: 20px;
		text-align: center;
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
	#yuyue-a{
		margin-left: 10px;
		width:355px ;
	}
	#daikuan_a{
		width: 94%;
		margin-left: 3%;
		margin-top: 15px;
		border: 1px dashed #39C894;
		position: relative;
	}
	#daikuan_a p:nth-of-type(1){
		position: absolute;
    top: -13px;
    font-size: 18px;
    background: white;
    left: 27%;
    width: 50%;
    text-align: center;
    letter-spacing: 1px;
	}
	#daikuan_a p:nth-of-type(2){
		margin-top: 18px;
		font-size: 13px;
		width: 96%;
		margin-left: 2%;
		margin-bottom:10px;
	}
	#daikuan_a p font{
		color: #39C894;
	}
	#daikuan_b{
		width: 94%;
		margin-left: 3%;
		margin-top: 15px;
		display: flex;
		justify-content: space-between;
	}
	#daikuan_b li{
		width: 30%;
		border: 1px solid #39C894;
		text-align: center;
	}
	#daikuan_b p{
		margin-top: 8px;
	}
	#daikuan_b small{
		color: #999;
		font-size: 14px;
	}
	#daikuan_b li div{
		width: 50px;
		height: 50px;
		border: 1px solid #39C894;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		margin-top: 10px;
		color: #39C894;
	}
	#daikuan_c{
		width: 94%;
		margin-left: 3%;
		margin-top: 15px;
	}
	#daikuan_c ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	#daikuan_c ul li{
		width: 49%;
		text-align: center;
	}
	#daikuan_c ul li div{
		width: 51px;
		height: 51px;
		border-radius: 50%;
		background: #39C894;
		color: white;
		margin: 10px auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#daikuan_c ul li p{
		margin-bottom: 10px;
		margin-top: 7px;
		font-size: 13px;
	}
	#daikuan_c ul li:nth-of-type(1){
		border-right: 1px solid #EAEAEA;
		border-bottom: 1px solid #EAEAEA;
	}
	#daikuan_c ul li:nth-of-type(4){
		border-left: 1px solid #EAEAEA;
		border-top: 1px solid #EAEAEA;
	}
	.iconfont{
		font-size: 30px;
	}
	#daikuan_d{
		width: 100%;
		margin-top: 8px;
	}
	#daikuan_d img{
		width: 100%;
	}
</style>
