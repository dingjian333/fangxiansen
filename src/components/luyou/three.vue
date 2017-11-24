<template>
  <div>
  	<div id="aaa"></div>
  		<my-header> </my-header>
  		<ul id="xiaoguo_top">
  				<li v-on:click="xiala">筛选<span class="iconfont icon-down"></span></li>
  				<li v-on:click="showA">风格<span class="iconfont icon-down"></span></li>
  				<li v-on:click="showB">排序<span class="iconfont icon-down"></span></li>
  				<li><span class="iconfont icon-search"></span></li>
  		</ul>
  		<div id="yincanga" v-show="!flag">
  			   <div id="yincanga_top">
  			   			<p id="ycat">级别</p>
  			   			<ul id="ycata">
	  			   				<li>不限</li>
	  			   				<li>总监</li>
	  			   				<li>主任</li>
	  			   				<li>优秀</li>
  			   			</ul>
  			   			<p id="ycat">级别</p>
  			   			<ul id="ycataa">
	  			   				<li>不限</li>
	  			   				<li>0-50元/㎡</li>
	  			   				<li>50-100元/㎡</li>
	  			   				<li>100-150元/㎡</li>
	  			   				<li>200元/㎡以上</li>		   				
  			   			</ul>
  			   			<button v-on:click="xiala">确认</button>
  			   </div>
  		</div>
  		<div id="yincang" v-show="!flaga">
  			<ul id="cc">
	  	  	<li>不限</li><li>现代</li><li>美式</li>
	  	  	<li>中式</li><li>地中海</li><li>混搭</li>
	  	  	<li>欧式</li><li>田园</li><li>简约</li>
	  	  	<li>新古典</li><li>东南亚</li><li>日式</li>
	  	  	<li>宜家</li>
  	  </ul>
  		</div>
  		<div id="yincang" v-show="!flagb">
  			<ul id="cc">
	  	  	<li>不限</li><li>预约</li><li>人气</li>
	  	  	<li>作品</li>
  	  </ul>
  		</div>
  		<ul id="shejishi_zhong">
  			<li v-for="item in arr.infoh">
  				<div id="shejishi_left">
  					<router-link to="/shejishixiangqing">
  							<img :src="item.src" alt="" />
  					</router-link>	
  				</div>
  				<div id="shejishi_right">
  					<p><span>{{item.name}}<samp>{{item.namea}}</samp></span><span><font>{{item.renqi}}</font><small>人气</small></span></p>
  					<p><span>作品：<small>{{item.zuopin}}</small></span><span>经验：<small>{{item.jingyan}}</small></span><span>评价：<small>{{item.pingjia}}</small></span></p>
  					<p><span>擅长风格：<small>{{item.fengge}}</small></span></p>
  				</div>
  			</li>
  		</ul>
  		<ul id="xiaoguo_zhongb">
  			<li>上一页</li>
  			<li>1/30</li>
  			<li>下一页</li> 			
  		</ul>
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
	  				flag:true,
	  				flaga:true,
	  				flagb:true
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
				axios.get("../../static/one.json")
				.then(function(res){	
					that.arr = res.data
					console.log(that.arr)
				},function(err){
					alert(err.status)
				})
			},
			xiala:function(){  
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
	 #xiaoguo_top{
   	width: 100%;
   	margin-top: 51px;
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
	   	font-size: 12.5px;
	   	color: #999;
   }
   .icon-search:before{
   	font-size: 20px;
   	color: #39C893;
   }
   #shejishi_zhong{
   	width: 100%;
   	border-top: 8px solid #EAEAEA;
   }
   #shejishi_zhong li{
   	width: 100%;
   	display: flex;
   	border-bottom: 1px solid #F4F4F4;
   }
   #shejishi_left{
   	margin-top: 18px;
   	margin-bottom: 18px;
   	height: 80px;
   	width: 30%;
   	text-align: center;
   }
   #shejishi_left img{
   	width: 70%;
   	height: 100%;
   }
   #shejishi_right{
   	margin-top: 18px;
   	margin-bottom: 18px;
   	height: 80px;
   	width: 65%;
   	margin-left: 11px;
   }
   #shejishi_right span{
   	font-size: 14px;
   	color: #333;
   }
   #shejishi_right p:nth-of-type(2),p:nth-of-type(3){
   	margin-top: 8px;
   }
   #shejishi_right font{
   	color: #FEB505;
   	font-size: 14px;
   }
   #shejishi_right small{
   	color: #999;
   	font-size: 14px;
   }
   #shejishi_right samp{
   	background: #39C894;
   	color: white;
   	font-size: 12px;
   	padding: 2px 5px 2px 5px;
   	border-radius: 3px;
   	margin-left: 11px;
   }
   #shejishi_right p:nth-of-type(1) span:nth-of-type(1){
   	font-size: 18px;
   	color: #000;
   }
   #shejishi_right p:nth-of-type(2) span:nth-of-type(2),span:nth-of-type(3){
   	  margin-left: 23px;
   }
   #shejishi_right p:nth-of-type(1){
   	 display: flex;
   	 justify-content: space-between;
   }
   #xiaoguo_zhongb{
   	width: 100%;
   	/*margin-left: 3%;*/
   	margin-top: 20px;
   	border-bottom: 8px solid #EAEAEA;
   	display: flex;
   }
   #xiaoguo_zhongb li{
   	width: 30%;
   	height: 40px;
   	color: white;
   	margin-bottom: 18px;
   	font-size: 18px;
   	line-height: 40px;
   	background: #39c893;
   	border: 1px solid #EAEAEA;
   	text-align: center;
   	margin-bottom: 20px;
   }
   #xiaoguo_zhongb li:nth-of-type(2){
   	background: white;
   	color: black;
   }
   #xiaoguo_zhongb li:nth-of-type(1){
   	background: white;
   	color: black;
   	margin-left: 5%;
   }
   #yincanga{
   	  width: 100%;
   	  height: 100%;
   	  position: fixed;
   	  top: 100px;
   	  background: rgba(0,0,0,0.6);
   	  z-index: 100;
   }
   #yincanga_top{
   	width: 100%;
   	background: #f1f1f1;
   }
   #ycat{
   	font-size: 14px;
   	color: #000;
   	padding: 25px 0 6px 3%;
   }
   #ycata{
   	width: 94%;
   	display: flex;
   	justify-content: space-between;
   	flex-wrap: wrap;
   	margin-left: 3%;
   }
   #ycata li{
   	width: 32%;
   	height: 29px;
   	font-size: 14px;
   	background: #fff;
   	line-height: 29px;
   	text-align: center;
   	border: 1px solid #EEEEEE;
   	margin-top: 12px;
   }
   #ycata li:hover{
   	color: #39C894;
   	border: 1px solid #39C894;
   }
   #yincanga_top button{
   	height: 35px;
   	background: #39C894;
   	color: white;
   	font-size: 18px;
   	margin-top: 20px;
   	width: 100%;
   	border: 1px;
   }
    #ycataa{
   	width: 94%;
   	display: flex;
   	justify-content:flex-start;
   	flex-wrap: wrap;
   	margin-left: 3%;
   }
   #ycataa li:hover{
   	color: #39C894;
   	border: 1px solid #39C894;
   }
   #ycataa li{
   	width: 32%;
   	height: 29px;
   	font-size: 14px;
   	margin-left: 0.5%;
   	background: #fff;
   	line-height: 29px;
   	text-align: center;
   	border: 1px solid #EEEEEE;
   	margin-top: 12px;
   }
      #cc{
   	width: 100%;
   	background: #f1f1f1;
   	display: flex;
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
</style>
