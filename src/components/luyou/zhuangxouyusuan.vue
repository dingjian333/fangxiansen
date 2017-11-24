<template>
  <div>
      <my-header></my-header>
      <div class="swiper-container" id="bannerc">
  		<ul class="swiper-wrapper">
  			<li class="swiper-slide">
  					<img src="../../../static/img/house_info.jpg" alt="" />
  			</li>
  			<li class="swiper-slide">
  					<img src="../../../static/img/house_info.jpg" alt="" />
  			</li>
  		</ul>
  		<div class="swiper-pagination"></div>
  	</div>
  	<p id="yusuan">
  		<span>房先森&nbsp;/&nbsp;装修攻略&nbsp;/&nbsp;装修预算&nbsp;/&nbsp;正文</span>
  	</p>
  	<div id="yusuana">
  		<p>装修预算注意事项</p>
  		<p><span class="iconfont icon-time"><small>2016-07-09</small></span><span class="iconfont icon-view"><small>115</small></span></p>
  	</div>
  	<div id="yunsuanbox">
  	<ul id="yusuanb">
  		<li>客厅隔断</li>
  		<li>客厅装修图</li>
  		<li>客厅装修效果</li>
  		<li>客厅装修隔断</li>
  		<li>客厅装修图</li>
  		<li>客厅装修效果</li>
  	</ul>
  	<p id="yusuanc">
			装修时，很容易因为买贵了材料而超出预算。业主只有充分了解
			装修材料价格清单，让价格透明化，才能把预算做的更准确。下
			面是装修材料价格清单大全，做装修预算全靠它啦，和小编来看看吧！
  	</p>
  	<p id="yusuand">
  		<img src="static/img/pec_03.png" />
  	</p>
  	<button id="butaa">点击展开全文</button>
  	<ul id="yusuane">
  		<li><router-link to="/pingluen">
  			<div><span class="iconfont icon-pencle"></span></div>
  			<p>评价（10）</p></router-link>
  		</li>
  		<li>
  			<div  v-on:click="xiala"><span class="iconfont icon-share"></span></div>
  			<p>分享</p>
  		</li>
  	</ul>
  	<button id="butaa">进入装修预算</button>
  </div>
  <div id="fenxiang" v-show="!flag">
  		<ul>
  			<li>
  				<img src="../../../static/img/icon_weibo.png" />
  				<p>新浪微博</p>
  			</li>
  			<li>
  				<img src="../../../static/img/icon_tx.png" />
  				<p>腾讯微博</p>
  			</li>
  			<li>
  				<img src="../../../static/img/icon_qzone.png" />
  				<p>QQ空间</p>
  			</li>
  		</ul>
  		<button v-on:click="xiala">取消</button>
  </div>
  <div id="yusuanf">
  <div id="she-b">
  			<p>装修攻略</p>
  		</div>	
		<ul id="zxgl">
			<li v-for="item in arr.infof">
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
  				arr:[],
  				flag:true
  			}
  },
  components:{
			"my-header":Header,
			"my-bottom":Bottom,
			"my-guanggao":Guanggao
		},
  mounted:function(){
  	this.getJSON()
  	  setTimeout(function(){
  	  	var swiper = new Swiper("#bannerc",{
	  			autoplay: 2000,
					loop: true,
					pagination: ".swiper-pagination"
  	  	})
  	  },500)	
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
			},
			xiala:function(){  
                this.flag = !this.flag  
         }
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#bannerc{
		width: 100%;
		height: 118.5px;
		margin-top: 50px;
	}
	#bannerc img{
		width: 100%;
		height: 118.5px;
	}
	#yusuan{
		width: 94%;
		height: 26px;
		margin-top: 10px;
		margin-left: 3%;
		background: #f4f4f4;
		
		border-radius: 5px;
	}
	#yusuan span{
		font-size: 12px;
		color: #000;
		line-height: 26px;
		margin-left: 10px;
		padding: 0px 0px 2px 0px;
	}
	#yusuana{
		width: 100%;
		text-align: center;
		margin-top: 18px;
		border-bottom: 1px solid #EAEAEA;
	}
	#yusuana p:nth-of-type(1){
		font-size: 18px;
		color: #000;
	}
	#yusuana p:nth-of-type(2){
		font-size: 12px;
		color: #999;
		margin-top: 10px;
		margin-bottom: 15px;
	}
	#yusuana p span{
		margin-left: 15px;
	}
	#yusuana p:nth-of-type(2) small{
		font-size: 12px;
		margin-left: 5px;
	}
	.iconfont{
		font-size: 15px;
		vertical-align: middle;
	}
  #yunsuanbox{
  	width: 94%;
  	margin-left: 3%;
  	margin-top: 15px;  }
  #yusuanb{
  	width: 100%;
  	display: flex;
  	flex-wrap: wrap;
  }
  #yusuanb li{
  	border: 1px solid #EAEAEA;
  	border-radius: 20px;
  	margin-bottom: 9px;
  	margin-left: 6px;
  	color: #999999;
  	font-size: 12px;
  	padding: 1px 6px 1px 6px;
  }
 #yusuanc{
 	text-indent: 2em;
 	font-size: 12px;
 	color: #666;
 	margin-bottom: 15px;
 }
#yusuand{
	width:74%;
	margin-left: 11%;
}
#yusuand img{
	width: 100%;
}
#butaa{
	width: 100%;
	margin-top: 20px;
	height: 35px;
	text-align: center;
	line-height: 35px;
	font-size: 15px;
	color: #39C894;
	border: 1px solid #39C894;
	letter-spacing: 1px;
	background: white;
}
#yusuane {
	width: 80%;
	margin-left: 10%;
	display: flex;
	
}
#yusuane li{
	width: 50%;
	text-align: center;
}
#yusuane li  div{
	height: 50px;
	width: 50px;
	display: flex;
	justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 50%;
  margin: 17px auto;
}
#yusuane li:nth-of-type(1) p{
	color: #1b9af7;
}
.icon-share:before{
	font-size: 26px;
}
.icon-pencle:before{
	font-size: 26px;
}
#yusuane li:nth-of-type(2){
	color: #FEB505;
}
#yusuane li:nth-of-type(1)  div{
	color: #1b9af7;
}
#yusuane li:nth-of-type(2)  div{
	color: #FEB505;
}
#she-b{
		display: flex;
		width: 100%;
		margin-top: 16px;
		margin-bottom: 22px;
		border-left: 2.5px solid #39c894;
	}
	#she-b p{
		font-size: 18px;
		color: #000;
		margin-left: 5px;
	}
	#zxgl{
			width: 100%;
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
		#zxgl_right span{
			font-size: 14px;
			color: #999;
		}
		#zxgl_right span:nth-of-type(2){
			margin-left: 37.5px;
		}
		#yusuanf{
			width: 94%;
			margin-left: 3%;
			margin-top: 35px;
		}
		#yusuane li a{
			text-decoration: none;
		}
	#fenxiang{
		width: 94%;
		margin-left: 3%;
		background: rgba(0,0,0,0.7);
    position: fixed;
    top: 40%;
	}
	#fenxiang ul{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	#fenxiang ul li{
		width: 33%;
		text-align: center;
		color: white;
		font-size: 14px;
	}
	#fenxiang li img{
		width: 60%;
		margin-top: 40px;
		margin-bottom: 10px;
	}
	#fenxiang button{
		width: 80%;
		margin-left: 10%;
		height: 40px;
		border: 1px ;
		border-radius: 5px;
		background: #FFFFFF;
		margin-top: 30px;
		margin-bottom: 17px;
		position: ;
	}
</style>
