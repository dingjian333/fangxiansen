<template>
	<div>
	<my-header></my-header>
  <div id="xgbox">
  	<div class="swiper-container" id="bannerc">
  		<ul class="swiper-wrapper">
  			<li class="swiper-slide">
  				  <img src="../../../static/img/t_02.png" />
  			</li>
  				<li class="swiper-slide">
  				  <img src="../../../static/img/130.png" />
  			</li>
  				<li class="swiper-slide">
  				  <img src="../../../static/img/131.png" />
  			</li>
  		</ul>
  	</div>
  </div>
  </div>
</template>

<script>
	import Header from "@/components/header";
	import Bottom from "@/components/bottom";
	import Guanggao from "@/components/guanggao";
import axios from "axios";
	//js代码
	
	export default{
		data(){
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
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#xgbox #bannec{
		width: 100%;
		background: black;
		padding-top: 200px;
	}
	#bannerc img{
		width: 100%;
		height: 100%;
	}
	#xgbox{
		width: 100%;
		border: 1px solid red;
		height: 480px;
		background: black;
	}
</style>
