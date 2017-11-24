<template>
  <div>
  		<my-header> </my-header>
  		<ul id="shejishixiangqing">
  				<li>
  					<div id="shejishi_a">
  						<img src="../../../static/img/s_03.png" />
  					</div>
  						<div id="shejishi_b">
  							<p>陈冲<font>优秀</font></p>
		  					<p><span>作品：<small>12个</small></span><span>经验：<small>5年</small></span></p>
		  					<p><span>擅长风格：<small>现代/美式/简约/新古典</small></span></p>
		  					<p><span>设计理念：<small>在满足使用功能的前提下达到审美功能的最大化</small></span></p>
  						</div>
  				</li>
  		</ul>
  		<ul id="shejishi_c">
  			<li>
  				<div><span class="iconfont icon-thumb-up"></span></div>
  				<p>人气（618）</p>
  			</li>
  			<li>
  				<div><span class="iconfont icon-pencle"></span></div>
  				<p>评价（1）</p>
  			</li>
  			<li>
  				<div><span class="iconfont icon-measurement"></span></div>
  				<p>找我设计</p>
  			</li>
  		</ul>
  		<div id="shejishi_d">
  			<p>个人简介：<span>毕业于浙江理工大学环境艺术（室内设计专业），主要作品有湘湖美地、名门世家
  				、下沙观澜时代云邸（LOFT）、瑞金华庭（LOFT）、星悦湾、青秀城、仁苑等  </span> </p>
  		</div>
  		<div id="shejishi_e">
  			<p>设计作品</p>
  			<span>设计收费&nbsp;50-100元/㎡</span>
  		</div>
  		<ul id="xiaoguo_zhong">
  			<li v-for="item in arr.infog">
  				<img :src="item.src" alt="" />
  				<p>{{item.name}}</p>
  				<small><span>{{item.tel}}</span><span>{{item.tela}}</span><span>{{item.telb}}</span></small>
  			</li>
  		</ul>
  		<my-bottom></my-bottom>
  </div>
</template>
<script>
	
	import Header from "@/components/header";
	import Bottom from "@/components/bottom";
	import axios from "axios";
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
	  	  this.getJSON()
	  },
	  methods:{
			getJSON:function(){
				var that = this
				axios.get("../../static/one.json")
				.then(function(res){	
					that.arr = res.data
					console.log(that.arr)
				},function(err){
					alert(err.status)
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#shejishixiangqing{
	margin-top: 60px;
	width: 96%;
	margin-left: 2%;
}
#shejishixiangqing li{
	width: 100%;
	display: flex;
	justify-content: space-between;
}
#shejishi_a{
	width: 30%;
}
#shejishi_a img{
	width: 80%;
}
#shejishi_b{
	width: 65%;
}
#shejishi_b p:nth-of-type(1){
	font-size: 17px;
}
#shejishi_b p{
	font-size: 14px;
}
#shejishi_b font{
	font-size: 11px;
	background: #39C894;
	margin-left: 8px;
	color: white;
	padding: 1px 5px 1px 5px;
	border-radius: 5px;
}
#shejishi_b p small{
	color: #999;
	margin-left: 5px;
	font-size: 13px;
}
#shejishi_b p:nth-of-type(2) span:nth-of-type(2){
	margin-left: 15px;
}
#shejishi_b p{
	margin-top: 5px;
}
#shejishi_c{
	width: 80%;
	display: flex;
	justify-content: space-between;
	margin-left: 10%;
	margin-top: 30px;
}
#shejishi_c li{
	text-align: center;
	width: 33.3%;
}
#shejishi_c li div{
	width: 52px;
	height: 52px;
	border-radius: 50%;
	border: 1px solid;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
}
#shejishi_c li p{
	font-size: 12px;
	margin-top: 12px;
}
#shejishi_c li:nth-of-type(1){
	color: #FE8864;
}
#shejishi_c li:nth-of-type(2){
	color: #1B9AF7;
}
#shejishi_c li:nth-of-type(3){
	color: #FF4351;
}
.iconfont{
	font-size: 30px;
}
#shejishi_d{
	width: 100%;
	font-size: 15px;
	margin-top: 30px;
	border-bottom: 8px solid #F4F4F4;
}
#shejishi_d p{
	width: 94%;
	margin-left: 3%;
	margin-bottom: 10px;
}
#shejishi_d span{
	font-size: 14px;
	color: #999;
}
#shejishi_e{
	width: 94%;
	margin-left: 3%;
	border-left: 3px solid #39C894;
	margin-top: 10px;
	display: flex;
	justify-content:space-between;
}
#shejishi_e p{
	font-size: 15px;
	margin-left: 5px;
}
#shejishi_e span{
	color: #999;
	font-size: 12px;
}
#xiaoguo_zhong{
   	width: 94%;
   	margin-left: 3%;
   	display: flex;
   	flex-wrap: wrap;
   	justify-content:space-around;
   	margin-top: 12px;
   	margin-bottom: 18px;
   }
   #xiaoguo_zhong li{
   	width: 48%;
   	text-align: center;
   	margin-bottom: 6px;
   	background: white;
   	border: 1px solid #EAEAEA;
   }
   #xiaoguo_zhong li img{
   	width: 100%;
   }
   #xiaoguo_zhong li span{
   	color: #999;
   	font-size: 10px;
   }
</style>
