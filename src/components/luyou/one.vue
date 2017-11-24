<template>
  <div>
  	
  		<my-header> </my-header>
  		<div id="box_aa">
  			<p id="aaa">123213</p>
  				<ul id="top_fangan">
  						<li>
  							<p id="fangan_a">局部装修</p>
  							<router-link to="/fanganxiangqing">
  								<img src="../../../static/img/case.jpg" />
  								</router-link>
  								<div id="fangan_bottom">
  								<div id="fangan_left">
	  								<p>399元/㎡半包装修套餐</p>
	  								<small>特惠：<font>可选300元/㎡品牌主材包</font></small>
	  							</div>
	  							<div id="fangan_right">
	  								已预约295套
	  							</div>
  							</div>
  						</li>
  						<li>
  							<p id="fangan_a">局部装修</p>
  								<router-link to="/fanganxiangqing">
  										<img src="../../../static/img/case1.jpg" />
  								</router-link>
  								<div id="fangan_bottom">
  								<div id="fangan_left">
	  								<p>699元/㎡半包装修套餐</p>
	  								<small>正式发售：<font>全包套餐火爆预约中</font></small>
	  							</div>
	  							<div id="fangan_right">
	  								已预约335套
	  							</div>
  							</div>
  						</li>
  				</ul>
  		</div>
  		<my-bottom></my-bottom>
  		<my-guanggao></my-guanggao>
  </div>
</template>

<script>
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
			"my-header":Header,
			"my-bottom":Bottom,
			"my-guanggao":Guanggao
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#box_aa{
	width: 100%;
	height: 520px;
	background: #f4f4f4;
	margin-top: 0px;
}
#top_fangan{
	width: 94%;
	margin-left: 3%;
	margin-top: 42px;
	background: #f4f4f4;
	
}
#top_fangan li{
	width: 100%;
	background: white;
	position: relative;
	margin-top: 12px;
}
#top_fangan li img{
	width: 100%;
}
#fangan_bottom{
	display: flex;
	height: 60px;
	margin-top: 15px;
	justify-content: space-between;
}
#fangan_left{
	margin-left: 8px;
}
#fangan_left font{
	color: red;
}
#fangan_right{
	height: 40px;
	line-height: 40px;
	font-size: 15px;
	background: #ff4450;
	color: white;
	padding:0px 6px 0px 15px;
	border-radius: 20px 0px 0px 20px;
}
#fangan_a{
	position: absolute;
	top: 10px;
	font-size: 13px;
	color: white;
	background: #39C894;
	padding:1px 5px 1px 10px;
	left: -7px;
}
</style>
