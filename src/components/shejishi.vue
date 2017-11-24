<template>
	<div>
		
   <!--设计师-->
   
  <div id="she">
  	<div id="she-a">
  		<div id="she-b">
  			<p>设计师</p>
  		</div>
  		<ul id="she-c" v-show="!flag">
  			<li v-for="item in arr.infod"><router-link to="/shejishixiangqing">
  				<img :src="item.src" alt="" />
  				<p>{{item.name}}</p>
  				<span>{{item.tel}}</span></router-link>
  			</li>
  		</ul>
  		<ul id="she-c" v-show="!flaga">
  			<li v-for="item in arr.infoda">
  				<router-link to="/shejishixiangqing">
	  				<img :src="item.src" alt="" />
	  				<p>{{item.name}}</p>
	  				<span>{{item.tel}}</span>
  				</router-link>
  			</li>
  		</ul>
  		<ul id="she-d">
  			<li v-on:click="qiehuan">换一换<span class="iconfont icon-change"></span></li> 
  			<li id="shejishi_f"><router-link to="/three">更多设计师</router-link><span class="iconfont icon-more"></span></li>
  		</ul>
  	</div>
  </div>
  
  <!--效果图-->
  
  <div id="she">
  	<div id="she-a" v-show="!fla">
  		<div id="she-b">
  			<p>效果图</p>
  		</div>	
  		<p id="she-ba">
  			<img src="../../static/img/113.png" />
  		</p>
  		<ul id="she-e">
  			<li v-for="item in arr.infoe">
  				<img :src="item.src" alt="" />
  			</li>
  		</ul>
  		<ul id="she-d">
  			<li v-on:click="showD">换一换<span class="iconfont icon-change"></span></li>
  			<li id="shejishi_f"><router-link to="/two">更多效果图</router-link><span class="iconfont icon-more"></span></li>
  		</ul>
  	</div>
  	<div id="she-a" v-show="!flb">
  		<div id="she-b">
  			<p>效果图</p>
  		</div>	
  		<p id="she-ba">
  			<img src="../../static/img/125.png" />
  		</p>
  		<ul id="she-e">
  			<li v-for="item in arr.infoea">
  				<img :src="item.src" alt="" />
  			</li>
  		</ul>
  		<ul id="she-d">
  			<li v-on:click="showD">换一换<span class="iconfont icon-change"></span></li>
  			<li id="shejishi_f"><router-link to="/two">更多效果图</router-link><span class="iconfont icon-more"></span></li>
  		</ul>
  	</div>
  </div>
  
  <!--工地直播-->
  
   <div id="she" v-show="!flagc">
  	<div id="she-a">
  		<div id="she-b">
  			<p>工地直播</p>
  		</div>	
  		<p id="she-ba"><router-link to="/gongdizhibo">
  			<img src="../../static/img/121.png" /></router-link>
  		</p>
  		<p id="she-f">重汽嘉泽苑<span>泥木工程</span></p>
  		<ul id="she-d">
  			<li v-on:click="showB">换一换<span class="iconfont icon-change"></span></li>
  			<li id="shejishi_f"><router-link to="/four">更多工地直播</router-link><span class="iconfont icon-more"></span></li>
  		</ul>
  	</div>
  </div> 
  <div id="she" v-show="!flagd">
  	<div id="she-a">
  		<div id="she-b">
  			<p>工地直播</p>
  		</div>	
  		<p id="she-ba"><router-link to="/gongdizhibo">
  			<img src="../../static/img/122.png" /></router-link>
  		</p>
  		<p id="she-f">伊萨卡国际3幢<span>水电</span></p>
  		<ul id="she-d">
  			<li v-on:click="showB">换一换<span class="iconfont icon-change"></span></li>
  			<li id="shejishi_f"><router-link to="/four">更多工地直播</router-link><span class="iconfont icon-more"></span></li>
  		</ul>
  	</div>
  </div>
  
  
  <!--装修攻略-->
  <div id="she">
  	<div id="she-a">
  		<div id="she-b">
  			<p>装修攻略</p>
  		</div>	
		<ul id="zxgl" v-show="!flage"><router-link to="/zhuangxouyusuan">
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
			</li></router-link>
		</ul>
  		<ul id="zxgl"  v-show="!flagf"><router-link to="/zhuangxouyusuan">
			<li v-for="item in arr.infofa">
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
			</li></router-link>
		</ul> 
		
  		<ul id="she-d">
  			<li v-on:click="showC">换一换<span class="iconfont icon-change"></span></li>
  			<li id="shejishi_f"><router-link to="/five">更多装修攻略</router-link><span class="iconfont icon-more"></span></li>
  		</ul>
  	</div>
  </div>
  
  </div>
  
</template>

<script>
import axios from "axios";
	//js代码
	
	export default{
		data(){
			return{
				arr:[],
				flag:false,
				flaga:true,
				flagc:false,
				flagd:true,
				flage:false,
				flagf:true,
				fla:false,
				flb:true
			}
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
			},
			qiehuan:function(){
				this.flag = !this.flag
				if(this.flag==true){
					this.flaga=false
				}else{
					this.flaga=true
				}
			},
			showB:function(){
				this.flagc = !this.flagc
				if(this.flagc==true){
					this.flagd=false
				}else{
					this.flagd=true
				}
			},
			showC:function(){
				this.flage = !this.flage
				if(this.flage==true){
					this.flagf=false
				}else{
					this.flagf=true
				}
			},
			showD:function(){
				this.fla = !this.fla
				if(this.fla==true){
					this.flb=false
				}else{
					this.flb=true
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		#she{
		width: 100%;
		border-bottom: 9px solid #eaeaea;
	}
	#she-a{
		margin-left: 10px;
		width:355px ;
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
	#yuyue-c{
		width: 100%;
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
	#yuyue #but{
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
	#she-c{
		width: 100%;
		display: flex;	
	}
	#she-c li{
			width: 25%;
			margin-top: 5px;
			flex-direction: column;
			align-items: center;
			text-align: center;
			font-size: 18px;
		}
		#she-c li span{
			width: 60px;
    display: block;
    height: 19px;
    line-height: 19px;
    font-size: 12px;
    color: white;
    background: #39C894;
    border-radius: 3px;
    text-align: center;
    margin-left: 17%;
    margin-top: 7px;
		}
		#she-c li img{
			width: 75%;
			height: 70px;
		}
	#she-d{
		margin-top: 18px;
		margin-bottom: 16px;
		width: 100%;
		display: flex;
		justify-content: center;		
	}
	#she-d li{
			color: #39C894;
			width: 48%;
			font-size: 14px;
			height: 35px;
			text-align: center;
			line-height: 35px;
			border: 1px solid #999999;
		}
		#she-d li span{
			margin-left: 7px;
			vertical-align: middle;
		}
		#she-ba img{
			width: 100%;
			/*height: 253px;*/
		}
		#she-e{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		#she-e li{
			width: 49%;
			margin-top: 3px;
		}
		#she-e li img{
			width: 100%;
		}
		#she-f{
			margin-top: 8px;
			width: 100%;
			display: flex;
			font-size: 14px;
		}
		#she-f span{
			display: block;
			background: #39C894;
			color: white;
			margin-left: 10px;
			border-radius: 5px;
			padding: 0px 6px 0px 6px;
			font-size: 12px;
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
		#jieshao{
			width: 100%;
			margin-top: 18px;
			margin-bottom: 18px;
			font-size: 14px;
			color: #333;
			text-indent: 2em;
		}
	#bottom_a{
		width: 100%;
		text-align: center;
	}
	#bottom_a p{
		margin-top: 15px;
		font-size: 14px;
		color: #333;
	}
	#bottom_a ul{
		display: flex;
		margin-top: 13px;
		width: 100%;
		font-size: 14px;
		border-bottom: 1px solid lightgray;
	}
	#bottom_a ul li{
		width: 25%;
		text-align: center;
		margin-bottom: 7px;
	}
	#bottom_a p:nth-of-type(2){
		margin-top: 15px;
		margin-bottom: 15px;
		color: #999999;
		font-size: 14px;
	}
	#bottom{
		width: 100%;
		position: fixed;
		z-index: 100;
		bottom: 0px;
		height: 53px;
		background: rgba(0,0,0,0.7);
		display: flex;
		justify-content: space-between;
	}
	#bottom li:nth-of-type(1) img{
		width: 90%;
		height: 30px;
	}
	#bottom li:nth-of-type(2) img{
		width: 85%;
		height:50px;
		margin-left: 10px;
	}
	#bottom button{
		background: #feb605;
		color: white;
		border-radius: 20px;
		width: 87px;
		height: 25px;
		border: 1px;
		margin-top: 13px;
		font-size: 13px;
		margin-right: 20px;
	}
	#maodian{
		position: fixed;
	    bottom: 13%;
	    right: 3%;
	    width: 43px;
	    height: 43px;
	    line-height: 43px;
	    border: 1px solid #959595;
	    border-radius: 50%;
	    text-align: center;
	    background: #fff;
	    opacity: .8;
	}
	#shejishi_f a{
		text-decoration: none;
		color: #39C894;
	}
	a{
		text-decoration: none;
		color: black;
	}
	#zxgl_right p:nth-of-type(2){
		margin-top: 25px;
	}
</style>
