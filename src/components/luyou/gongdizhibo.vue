<template>
  <div>
      <my-header></my-header>
      <div id="zb">
      	<p>观澜时代国际花园云邸5幢 <font>泥木工程</font></p>
      	<p><span>户型：</span><small>二室</small><span>面积：</span><small>60-90㎡</small><span>装修预算：</span><small>18万</small></p>
      	<p><span>工地直播：</span><small>百万平米超级大盘，占据钱塘江北岸最美的江湾和湿地</small></p>
      	<p>
      		<button><span class="iconfont icon-pencle"></span>评论（10）</button>
      		<button><span class="iconfont icon-tag"></span>预约参观工地</button>      		
      	</p>
      </div>
      <div id="zbox">
      	<p><span>设计师：</span><u>吴飞柯</u><span>项目经理：</span><font>王永龙</font></p>
				<div id="zboxa">
					  <div id="zba">
					  		<div id="zbb"></div><font>——</font>
					  		<span>2016-07-11</span><span>泥木</span>
					  		<span>验收阶段</span>
					  </div>
					  <p id="zbc">泥木工程验收成功</p>
					  <div id="zbd">
					  	<img src="../../../static/img/c_03.png" />
					  </div>
					   <div id="zba">
					  		<div id="zbb"></div><font>——</font>
					  		<span>2016-04-27</span><span>水电</span>
					  		<span>验收阶段</span>
					  </div>
					  <p id="zbca">水电工程验收成功</p>
					  <div id="zbd">
					  	<img src="../../../static/img/c_06.png" />
					  </div>
					   <div id="zba">
					  		<div id="zbb"></div><font>——</font>
					  		<span>2016-04-15</span><span>水电</span>
					  		<span id="zbbb">施工阶段</span>
					  </div>
					  <p id="zbcaa">水电施工作业现场直播</p>
					  <div id="zbd">
					  	<img src="../../../static/img/c_08.png" />
					  </div>
				</div>     
      </div>
      <my-bottom></my-bottom>
      <my-guanggao></my-guanggao>
  </div>
</template>

<script>
	import Header from "@/components/header";
	import Bottom from "@/components/bottom";
	import Guanggao from "@/components/guanggao";
	import axios from "axios";
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
#zb{
	width: 94%;
	margin-left: 3%;
	margin-top: 72px;
}
#zb p:nth-of-type(1){
	font-size: 14px;
	color: #000000;
	
}
#zb font{
	background: #39C894;
	color: white;
	margin-left: 10px;
	font-size: 12px;
	padding: 0px 5px 0px 5px;
	border-radius: 5px;
}
#zb p{
	margin-bottom: 13px;
}
#zb p span{
	font-size: 12px;
}
#zb p small{
	font-size: 12px;
	color: #999999;
	margin-left: 3px;
}
#zb span:nth-of-type(2),span:nth-of-type(3){
	margin-left: 15px;
}
#zb p:nth-of-type(4){
	display: flex;
}
#zb button{
	width: 50%;
	height: 35px;
	border: 1px solid #999999;
	background: white;
}
.iconfont{
	margin-right: 5px;
}
#zb button:nth-of-type(1){
	color: #1B9AF7;
}
#zb button:nth-of-type(2){
	color: #39C894;
}
#zbox{
	width: 100%;
	background: #F4F4F4;
}
#zbox p:nth-of-type(1){
	margin-left: 3%;
	padding-top: 18px;
	font-size: 14px;
}
#zbox p u{
	color: #39C894;
}
#zbox p:nth-of-type(1) span:nth-of-type(2){
	margin-left: 10%;
}
#zboxa{
	width: 92%;
	margin-top: 18px;
	margin-left: 5%;
	border-left: 1px solid #dcdcdc;
	position: relative;
}
#zba{
	width: 100%;
	display: flex;
	height: 30px;
	line-height: 30px;
	position: absolute;
	left: -15px;
}
#zbb{
	width: 30px;
	height: 30px;
	background: #39C893;
	border-radius: 50%;
}
#zba font{
	color: #39C893;
}
#zba span:nth-of-type(1){
	display: block;
	background: #eaeaea;
	font-size: 14px;
	height: 30px;
	color: #666;
	line-height: 30px;
	padding: 0 10px 0 10px;
}
#zba span:nth-of-type(2){
	display: block;
	background: #39c895;
	font-size: 14px;
	height: 30px;
	color: white;
	line-height: 30px;
	padding: 0 10px 0 10px;
}
#zba span:nth-of-type(3){
	display: block;
	background: #FEB605;
	font-size: 14px;
	height: 30px;
	color: white;
	line-height: 30px;
	padding: 0 10px 0 10px;
}
 #zboxa #zbc{
   margin-left: 15%;
   padding-top: 37px;
   font-size: 14px;
}
#zbd{
	width: 85%;
	margin-left: 15%;
	margin-top: 15px;
	margin-bottom: 20px;
}
#zbd img{
	width: 100%;
}
 #zboxa #zbca{
   margin-left: 15%;
   margin-top: 60px;
   font-size: 14px;
}
 #zboxa #zbcaa{
   margin-left: 15%;
   margin-top: 60px;
   font-size: 14px;
}
#zboxa #zbbb{
	display: block;
	background: #AAAAAA;
	font-size: 14px;
	height: 30px;
	color: white;
	line-height: 30px;
	padding: 0 10px 0 10px;
}
</style>
