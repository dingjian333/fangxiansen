<template>
  <div>
      <my-header></my-header>
      <div id="gonglue">
      		<input type="text" placeholder="请输入关键字"/>
      		<button>搜索</button>
      </div>
      <ul id="gongluel">
      		<li style="color: #39C894;border-bottom: 1px solid #39C894;">装修前</li>
      		<li>装修中</li>
      		<li>装修后</li>
      </ul>
      <ul id="gongluea">
      			<li>
      				<div>
      					<span class="iconfont icon-house"></span>
      				</div>
      				<p>收房验房</p>
      			</li>
      			<li><router-link to="/zhuangxouyusuan">
      				<div>
      					<span class="iconfont icon-budget"></span>
      				</div>
      				<p>装修预算</p></router-link>
      			</li>
      			<li>
      				<div>
      					<span class="iconfont icon-taiji"></span>
      				</div>
      				<p>装修风水</p>
      			</li>
      			<li>
      				<div>
      					<span class="iconfont icon-designer"></span>
      				</div>
      				<p>装修设计</p>
      			</li>
      </ul>
      <button id="gonglued">
      	<router-link to="/zhuangxouliucheng">了解装修流程</router-link>
      </button>
      <div id="gongluebox">
      	<div id="gonglueb">
      	<p>为您推荐</p>
      </div>
      
			     <ul id="zxgl">
						<li v-for="item in arr.infoi">
							<div id="zxgl_left">
								<img :src="item.src" alt="" />
							</div>
							<div id="zxgl_right">
								<p>{{item.name}}</p>
								<p>
									<span class="iconfont icon-time">&nbsp;{{item.time}}</span>
									<span class="iconfont icon-view">&nbsp;{{item.tel}}</span>
								</p>
							</div>
						</li>
					</ul>
					<button id="gongluee"><span>换一换</span><span class="iconfont icon-change"></span></button>
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
			this.getJSON()	
		},
		methods:{
			getJSON:function(){
				var that = this
				axios.get("../static/one.json")
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
#gonglue{
	width: 94%;
	height: 35px;
	margin-left: 3%;
	display: flex;
	margin-top: 55px;
	border: 1px solid #39C894;
}
#gonglue input{
	width: 80%;
	height: 35px;
	border: 0px;
	font-size: 14px;
	color: #aaa;
	text-indent: 8px;
	letter-spacing: 1px;
}
#gonglue button{
	width: 20%;
	height: 35px;
	background: #39C894;
	color: white;
	text-align: center;
	display: block;
	letter-spacing: 1px;
	border: 0px;
}
#gongluel{
	width: 100%;
	margin-top: 10px;
	border-top: 8px solid #F4F4F4;
	display: flex;
	justify-content: center;
}
#gongluel li{
	width: 30%;
	height: 37px;
	text-align: center;
	font-size: 14px;
	line-height: 37px;
	color: #000;
	border-bottom: 1px solid #efefef;
}
#gongluea{
	width: 94%;
	margin-left: 3%;
	display: flex;
}
#gongluea p{
	font-size: 14px;
	margin-top: 12px;
	color: #000000;
}
#gongluea li{
	width: 25%;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
  text-align: center;
}
#gongluea li a{
	text-decoration: none;
}
#gongluea div{
	width: 52px;
	margin: 0 auto;
	height: 52px;
	border: 1px solid #39C894;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.iconfont{
	font-size: 30px;
	color: #39C894;
}
#gonglued{
	margin-top: 14px;
	width: 94%;
	margin-left: 3%;
	height: 35px;
	text-align: center;
	line-height: 35px;
	border: 1px solid #39C894;
	color: #39C894;
	background: white;
	letter-spacing: 1px;
}
#gonglued a{
	text-decoration: none;
	color: #39C894;
}
#gongluee{
	width: 94%;
	margin-left: 3%;
	height: 35px;
	text-align: center;
	line-height: 35px;
	border: 1px solid #999;
	color: #39C894;
	background: white;
	letter-spacing: 1px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
}
#gongluebox{
	width: 100%;
	margin-top: 10px;
	border-top: 8px solid #F4F4F4;
	border-bottom: 8px solid #F4F4F4;
}
#gonglueb{
	width: 94%;
	margin-left: 3%;
	margin-top: 10px;
	border-left: 4px solid #39C894;
}
#gonglueb p{
	margin-left: 6px;
	letter-spacing: 1px;
}
#zxgl{
			width: 94%;
			margin-left: 3%;
		}
		#zxgl li{
			width: 100%;
			display: flex;
			margin-top: 15px;
			justify-content: space-between;
			border-bottom: 1px solid lightgray;
		}
		#zxgl li:nth-of-type(3){
			border: 0px;
		}
		#zxgl_left{
			width: 95px;
			height: 72px;
			margin-bottom: 15px;
		}
		#zxgl_left img{
			width: 100%;
			height: 100%;
		}
		#zxgl_right{
			width:249px ;
			height: 72px;
		}
		#zxgl_right p{
			font-size: 18px;
		}
		#zxgl_right p:nth-of-type(2){
			margin-bottom: 0px;
		}
		#zxgl_right span{
			font-size: 14px;
			color: #999;
		}
		#zxgl_right span:nth-of-type(2){
			margin-left: 37.5px;
		}
		.icon-change:before{
			font-size: 15px;
			margin-left: 8px;
			vertical-align: middle;
		}
</style>
