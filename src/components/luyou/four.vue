<template>
  <div>
     <my-header></my-header>
     <ul id="xiaoguo_top">
  				<li v-on:click="xiala">筛选<span class="iconfont icon-down"></span></li>
  				<li v-on:click="showA">阶段<span class="iconfont icon-down"></span></li>
  				<li v-on:click="showB">排序<span class="iconfont icon-down"></span></li>
  				<li><span class="iconfont icon-search"></span></li>
  	 </ul>
  	 <div id="yincanga" v-show="!flag">
  			   <div id="yincanga_top">
  			   			<p id="ycat">户型</p>
  			   			<ul id="ycataa">
	  			   				<li>不限</li>
	  			   				<li>一室</li>
	  			   				<li>二室</li>
	  			   				<li>三室</li>
	  			   				<li>四室</li>
	  			   				<li>复室</li>
	  			   				<li>别墅</li>
	  			   				<li>平层</li>
  			   			</ul>
  			   			<p id="ycat">面积</p>
  			   			<ul id="ycata">
	  			   				<li>不限</li>
	  			   				<li>60㎡以下</li>
	  			   				<li>60-90㎡</li>
	  			   				<li>90-120㎡</li>
	  			   				<li>120-200㎡</li>		  
	  			   				<li>200㎡以上</li>
  			   			</ul>
  			   			<button v-on:click="xiala">确认</button>
  			   </div>
  		</div>
  		<div id="yincang" v-show="!flaga">
  			<ul id="cc">
	  	  	<li>不限</li><li>拆改阶段</li><li>水电工程</li>
	  	  	<li>泥木工程</li><li>油漆工程</li><li>竣工验收</li>
  	  </ul>
  		</div>
  		<div id="yincang" v-show="!flagb">
  			<ul id="cc">
	  	  	<li>不限</li><li>最新更新</li><li>最多回复</li>
  	  </ul>
  		</div>
  	 <ul id="zhibozhong"><router-link to="/gongdizhibo">
  	 		<li v-for="item in arr.infoj">
  	 				<div id="zhiboleft">
  	 					<img :src="item.src" alt="" />
  	 				</div>
  	 				<div id="zhiboright">
  	 					   <p>{{item.name}}</p>
  	 					   <p><small>{{item.namea}}</small><span :class="item.claa"></span></p>
  	 					   <p><span>{{item.jishi}}</span><span>{{item.pingfang}}</span><span class="iconfont icon-location">{{item.qianmi}}</span></p>
  	 				</div>
  	 		</li></router-link>
  	 </ul>
  	 <ul id="xiaoguo_zhongb">
  			<li>上一页</li>
  			<li>2/30</li>
  			<li>下一页</li> 			
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
  				arr:[],
  				flag:true,
  				flaga:true,
  				flagb:true
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
				axios.get("../static/one.json")
				.then(function(res){	
					that.arr = res.data
					console.log(that.arr)
				},function(err){
					alert(err.status)
				})
			},
			xiala:function(){  
			 	console.log("a")
                this.flag = !this.flag  
                if(this.flag == false){
                	this.flaga=true,
                	this.flagb=true
                }
           },
      showA:function(){  
			 	console.log("b")
                this.flaga = !this.flaga
                if(this.flaga == false){
                	this.flag=true,
                	this.flagb=true
                }
           },
      showB:function(){  
			 	console.log("c")
                this.flagb = !this.flagb  
                if(this.flagb == false){
                	this.flag=true,
                	this.flaga=true
                }
            }
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		#xiaoguo_top{
   	width: 100%;
   	background: white;
   	display: flex;
   	border-top: 1px solid lightgray;
   	border-bottom: 1px solid lightgray;
   	height: 50px;
   	margin-top: 50px;
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
   #zhibozhong{
   	width: 94%;
   	margin-left: 3%;
   }
   #zhibozhong li{
   	border-bottom: 1px solid #F4F4F4;
   	width: 100%;
   	display: flex;
   	justify-content: space-between;
   }
   #zhiboleft{
   	width: 35%;
   	margin-top: 15px;
   	margin-bottom: 15px;
   	height: 90px;
   }
   #zhiboleft img{
   	width: 100%;
   	height: 90px;
   }
   #zhiboright{
   	width: 60%;
   	margin-top: 15px;
   	margin-bottom: 15px;
   }
   #zhiboright p:nth-of-type(1){
   	font-size: 18px;
   	color: #000;
   }
   #zhiboright p:nth-of-type(2) small{
   	background: #39C894;
   	color: white;
   	font-size: 12px;
   	padding: 2px 5px 2px 5px;
   	border-radius: 5px;
   }
   #zhiboright p:nth-of-type(3){
   	display: flex;
   	justify-content: space-between;
   	  color: #999;
   }
    #zhiboright p:nth-of-type(2),p:nth-of-type(3){
    	margin-top: 12px;
    }
    .icon-panorama{
    	margin-left: 18px;
    	font-size: 20px;
    	color: #39C894;
    	vertical-align: middle;
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
   	width: 31%;
   	height: 30px;
   	font-size: 14px;
   	background: #fff;
   	line-height: 30px;
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
   	width: 31%;
   	height: 30px;
   	font-size: 14px;
   	margin-left: 1.5%;
   	background: #fff;
   	line-height: 30px;
   	text-align: center;
   	border: 1px solid #EEEEEE;
   	margin-top: 12px;
   }
   #zhibozhong a{
   	text-decoration: none;
   	color: black;
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
    #cc{
   	width: 100%;
   	background: #f1f1f1;
   	display: flex;
   	flex-wrap: wrap;
   }
</style>

