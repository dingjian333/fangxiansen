<template>
  <div>
  	<header>
   				<ul id="headera">
   						<li><a href="index.html">
   							<img src="../../static/img/logo.png"></a>
   						</li>
   						<li>
   							<p>
   								<span class="iconfont icon-user"></span>
   								<span class="iconfont icon-nav" v-on:click="xiala"></span>
   							</p>
   							<p>
   								<span>我的</span>
   								<span v-on:click="xiala">导航</span>
   							</p>
   						</li>
   				</ul>
   				<div id="daohang" v-show="!flag">
   						<span class="iconfont icon-close" v-on:click="xiala"></span>
   						<ul id="daohanga">
   							<li v-for="item in arr.infoo">
   								 <router-link :to="item.url">
   								 <div :class="item.ida"><i :class="item.claa"></i></div>
   								 <p>{{item.name}}</p></router-link>
   							</li>
   						</ul>
   				</div>
   		</header>
  </div>
</template>

<script>
	import axios from "axios";
export default {
  data () {
  			return{
  				arr:[],
  				flag:true
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
			xiala:function(){  
                this.flag = !this.flag  
            }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		header{
		width: 100%;
		height:51px;
		position: fixed;
		top: 0px;
		z-index: 100;
		background: white;
		border-bottom: 1px solid #EAEAEA;
	}
	#headera{
		width: 100%;
		height: 51px;
		display: flex;
		justify-content: space-between;
	}
	.icon-user:before{
		font-size: 16px;
	}
	.icon-nav:before{
		font-size: 16px;
	}
	#headera li img{
		margin-top: 8px;
		margin-left: 9px;
		height: 34px;
	}
	#headera li:nth-of-type(2){
			font-size: 11px;
			text-align: center;
			margin-right: 8px;
			color: gray;
	}
	#headera li:nth-of-type(2) img{
		height: 22.5px;
	}
	#headera li:nth-of-type(2) span{
		flex-direction: column;
		align-items: center;
		margin-left: 9px;
	}
	#daohang{
		width: 100%;
		background: rgba(0,0,0,0.7);
		position: fixed;
		top: 0px;
		height: 215px;
	}
	#daohang span{
		margin-left: 92%;
	}
	.icon-close:before{
		color: white;
		font-size: 23px;
	}
	#daohanga{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	#daohanga li{
		width: 25%;
		flex-direction: column;
		align-items: center;
		text-align: center;
		color: white;
		margin-bottom: 10px;
	}
	#daohanga li a{
		text-decoration: none;
	}
	.a{
		background: #39C894;
	}
	.b{
		background: #FEB505;
	}
	.c{
		background: #eed215;
	}
	.d{
		background: #00b2b2;
	}
	.e{
		background: #1B9AF7;
	}
	.f{
		background: #7B72E9;
	}
	.g{
		background: #FF4351;
	}
	.h{
		background: #FE8864;
	}
	#daohanga li div{
		width: 55px;
		height: 55px;
		color: white;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
	#daohanga li p{
		font-size: 13px;
		margin-top: 5px;
		color: white;
	}
	.iconfont{
		font-size: 28px;
	}
</style>
