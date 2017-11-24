<template>
  <div>
  		<div id="aaa"></div>
  		<my-header> </my-header>
  		<div id="box_bb">
  		<ul id="xiaoguo_top">
  				<li v-on:click="showToggle">户型<span class="iconfont icon-down"></span></li>
  				<li v-on:click="showA">区域<span class="iconfont icon-down"></span></li>
  				<li v-on:click="showB">风格<span class="iconfont icon-down"></span></li>
  				<li><span class="iconfont icon-search"></span></li>
  		</ul>
  		<div id="yincang" v-show="!flag">
  			<ul id="cc">
	  	  	<li>不限</li><li>一室</li><li>二室</li>
	  	  	<li>三室</li><li>四室</li><li>复式</li>
	  	  	<li>别墅</li><li>平层</li>
  	  </ul>
  		</div>
  		<div id="yincang" v-show="!flaga">
  			<ul id="cc">
	  	  	<li>不限</li><li>客厅</li><li>餐厅</li>
	  	  	<li>厨房</li><li>卧室</li><li>书房</li>
	  	  	<li>卫生间</li><li>阳台露台</li><li>其他</li>
  	  </ul>
  		</div>
  		<div id="yincang" v-show="!flagb">
  			<ul id="cc">
	  	  	<li>不限</li><li>现代</li><li>美式</li>
	  	  	<li>中式</li><li>地中海</li><li>混搭</li>
	  	  	<li>欧式</li><li>田园</li><li>简约</li>
	  	  	<li>新古典</li><li>东南亚</li><li>日式</li>
	  	  	<li>宜家</li>
  	  </ul>
  		</div>
  	  
  		<ul id="xiaoguo_zhong">
  			<li v-for="item in arr.infog"><router-link to="/xiaoguotu">
  				<img :src="item.src" alt="" />
  				<p>{{item.name}}</p>
  				<small><span>{{item.tel}}</span><span>{{item.tela}}</span><span>{{item.telb}}</span></small>
  			</router-link></li>
  		</ul>
  		<ul id="xiaoguo_zhongb">
  			<li>上一页</li>
  			<li>2/30</li>
  			<li>下一页</li> 			
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
  data (){ 
  			return{
  				arr:[],
  				flag:true,
  				flaga:true,
  				flagb:true
  			};
  			
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
				axios.get("../../static/one.json")
				.then(function(res){	
					that.arr = res.data
					console.log(that.arr)
				},function(err){
					alert(err.status)
				})
			},
			 showToggle:function(){  
                this.flag = !this.flag  
                if(this.flag==false){
                	this.flaga=true,
                	this.flagb=true
                }
           },
      showA:function(){  
                this.flaga = !this.flaga  ;
                if(this.flaga==false){
                	this.flag=true,
                	this.flagb=true
                }
          },
          showB:function(){  
                this.flagb = !this.flagb  ;
                if(this.flagb==false){
                	this.flaga=true,
                	this.flag=true
                }
          }
		}
		
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#huxing{
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		background: #F4F4F4;
		display: none;
	}
	#huxing li{
		width: 30%;
		height: 20px;
		line-height: 20px;
		text-align: center;
		margin-top: 8px;
		background: white;
	}
	#box_bb{
		width: 100%;
		background: #F4F4F4;
		margin-top: 51px;
	}
   #xiaoguo_top{
   	width: 100%;
   	background: white;
   	display: flex;
   	border-top: 1px solid lightgray;
   	border-bottom: 1px solid lightgray;
   	height: 50px;
   	/*border: 1px solid red;*/
   }
   #xiaoguo_top li{
   	   width: 25%;
   	   height: 30px;
   	   margin-top: 10px;
   	   line-height: 30px;
   	   text-align: center;
   	   border-right: 1px solid #F4F4F4;
   }
   #xiaoguo_top li:nth-of-type(4){
   	border: 0px;
   }
   .icon-down:before{
   	margin-left: 5px;
   	color: #999;
   }
   .icon-search:before{
   	font-size: 25px;
   	color: #39C894;
   }
   #xiaoguo_zhong{
   	width: 94%;
   	margin-left: 3%;
   	display: flex;
   	flex-wrap: wrap;
   	justify-content:space-around;
   	margin-top: 12px;
   	background: #F4F4F4;
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
   #xiaoguo_zhongb{
   	width: 94%;
   	margin-left: 3%; 	
   	display: flex;
   }
   #xiaoguo_zhongb li{
   	width: 33.33%;
   	height: 40px;
   	color: white;
   	margin-bottom: 18px;
   	font-size: 18px;
   	line-height: 40px;
   	background: #39c893;
   	border: 1px solid #EAEAEA;
   	text-align: center;
   }
   #xiaoguo_zhongb li:nth-of-type(2){
   	background: white;
   	color: black;
   }
   #cc{
   	width: 100%;
   	background: #f1f1f1;
   	display: flex;
   	/*justify-content: space-around;*/
   	flex-wrap: wrap;
   }
   #cc li{
   	width: 30%;
    height: 40px;
    line-height: 40px;
    background: #fff;
    font-size: 14px;
    margin: 5px 1.5% 5px 1.5%;
    text-align: center;
   }
   #yincang{
   	width: 100%;
   	height: 100%;
   	background: rgba(0,0,0,0.6);
   	position: fixed;
   	top: 103px;
   	z-index: 100;
   }
   #xiaoguo_zhong li a{
   	text-decoration: none;
   	color: black;
   }
</style>
