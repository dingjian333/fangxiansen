<template>
  <div>
  	<div id="aaa"></div>
  		<my-header> </my-header>
  		<ul id="liucheng">
  		    <li> </li>
  		    <li>
  		    		<span class="la">【装修前】</span>
  		    		<span class="lb">NO.1&nbsp;收房验房</span>
  		    		<span class="lc">NO.2&nbsp;装修预算</span>
  		    		<span class="ld">NO.3&nbsp;装修风水</span>
  		    		<span class="le">NO.4&nbsp;装修设计</span>
  		    </li>
  		    <li>
  		    		<span class="laa">【装修中】</span>
  		    		<span class="lbb">NO.5&nbsp;材料选择</span>
  		    		<span class="lcc">NO.6&nbsp;水电工程</span>
  		    		<span class="ldd">NO.7&nbsp;泥木工程</span>
  		    		<span class="lee">NO.8&nbsp;油漆工程</span>
  		    </li> 
  		    <li> 
  		    		<span class="laaa">【装修后】</span>
  		    		<span class="lb">NO.9&nbsp;装修验房</span>
  		    		<span class="lc">NO.10&nbsp;去污保洁</span>
  		    		<span class="lddd">NO.11&nbsp;软装搭配</span>
  		    		<span class="leee">NO.12&nbsp;家居生活</span>
  		    </li> 
  		</ul>
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
		},
  mounted:function(){
  	  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		#liucheng{
			width: 100%;
			margin-top:50px;
		}
		#liucheng li:nth-of-type(1){
			width: 100%;
			height: 125px;
			background-image: url(../../../static/img/process1.jpg);
			background-size: 100% 100%;
		}
		#liucheng li:nth-of-type(2){
			position: relative;
			width: 100%;
			height: 427px;
			background-image: url(../../../static/img/process2.jpg);
			background-size: 100% 100%;
		}
		#liucheng li:nth-of-type(3){
			position: relative;
			width: 100%;
			height: 444px;
			background-image: url(../../../static/img/process3.png);
			background-size: 100% 100%;
		}
		#liucheng li:nth-of-type(4){
			position: relative;
			width: 100%;
			height: 475px;
			background-image: url(../../../static/img/process4.jpg);
			background-size: 100% 100%;
		}
		.la{
			color: #ff4351;
			font-size: 18px;
			position: absolute;
			top: 27px;
			left: 58px;
		}
		.laaa{
			color: #7b72e9;
			font-size: 18px;
			position: absolute;
			top: 27px;
			left: 58px;
		}
		.lb{
			position: absolute;
			font-size: 14px;
			color: #000;
			top: 97px;
			left: 93px;
		}
		.lc{
			position: absolute;
			font-size: 14px;
			color: #000;
			top: 177px;
			right: 96px;
		}
		.ld{
			position: absolute;
			font-size: 14px;
			color: #000;
			bottom: 153px;
			left: 93px;
		}
		.lddd{
			position: absolute;
			font-size: 14px;
			color: #000;
			bottom: 203px;
			left: 93px;
		}
		.le{
			position: absolute;
			font-size: 14px;
			color: #000;
			bottom: 79px;
			right: 96px;
		}
		.leee{
			position: absolute;
			font-size: 14px;
			color: #000;
			bottom: 125px;
			right: 96px;
		}
		.laa{
			color: #1b9af7;
			font-size: 18px;
			position: absolute;
			top: 24px;
			right: 58px;
		}
		.lbb{
			position: absolute;
			font-size: 14px;
			color: #000;
			top: 100px;
			right: 93px;
		}
		.lcc{
			position: absolute;
			font-size: 14px;
			color: #000;
			top: 184px;
			left: 96px;
		}
		.ldd{
			position: absolute;
			font-size: 14px;
			color: #000;
			bottom: 164px;
			right: 93px;
		}
		.lee{
			position: absolute;
			font-size: 14px;
			color: #000;
			bottom: 81px;
			left: 96px;
		}
</style>
