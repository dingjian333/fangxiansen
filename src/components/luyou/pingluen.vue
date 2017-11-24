<template>
  <div>

  		<my-header> </my-header>
  		<ul id="pingluen">
  			<li v-for="item in arr.infok">
  				<p>
  					<span><img :src="item.src" alt="" /><font>{{item.name}}</font></span>
  					<span>{{item.time}}</span>
  				</p>
  				<p>{{item.tel}}</p>
  			</li>
  		</ul>
  	<ul id="xiaoguo_zhongb">
  			<li>上一页</li>
  			<li>2/30</li>
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
				axios.get("../../static/one.json")
				.then(function(res){	
					that.arr = res.data
					console.log(that.arr)
				},function(err){
					alert(err.status)
				})
			},
			showToggle:function(){
				this.isShow = !this.isShow;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pingluen{
	margin-top: 62px;
	width: 94%;
	margin-left: 3%;
}
#pingluen li{
	width: 100%;
	border-bottom: 1px solid #eaeaea;
}
#pingluen li font{
	color: #39C894;
	font-size: 14px;
	margin-left: 10px;
}
#pingluen p{
	display: flex;
	justify-content: space-between;
}
#pingluen p img{
	width: 50%;
	vertical-align: middle;
}
#pingluen span:nth-of-type(2){
	color: #999;
	font-size: 14px;
	line-height: 45px;
}
#pingluen p:nth-of-type(1){
	margin-top: 10px;
}
#pingluen p:nth-of-type(2){
	margin-top: 13px;
	margin-bottom: 13px;
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
</style>
