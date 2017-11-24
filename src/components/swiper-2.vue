<template>
  <div id="swipera">
  	<div id="swiper-2">
  		<div id="swiper-2a">
  			<p>全屋装修<p><small>包设计、</small><small>包主材、</small><small>包水电、</small><small>包施工</small></p></p>
  		</div>
  	<div class="swiper-container" id="bannera">
  		<ul class="swiper-wrapper">
  			<li class="swiper-slide" v-for="item in arr.infob">
  					<router-link to="/fanganxiangqing"><img :src="item.src" alt="" /></router-link>
  			</li>
  		</ul>
  		<div class="swiper-pagination"></div>
  	</div>
  	<p id="swiper-2b">
  		<span class="iconfont icon-zero"><small>0增项，标准施工</small></span>
 			<span class="iconfont icon-protection-fill"><small>杜绝项目外包</small></span>
 			<span class="iconfont icon-price"><small>装修贷款</small></span>
  	</p>
  	</div>
  </div>
</template>

<script>
import axios from "axios";
	//js代码
	
	export default{
		data(){
			return{
				arr:[]
			}
		},
		mounted:function(){		
			this.getJSON()
				setTimeout(function(){
  	  	var swiper = new Swiper("#bannera",{
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
	#swipera{
		width: 100%;
		border-bottom: 9px solid #eaeaea;
	}
	#swiper-2{
		margin-left: 10px;
		width:355px ;
	}
	#bannera{
		width: 100%;
		height: 230px;
	}
	#bannera img{
		width: 100%;
		height: 200px;
	}
	#swiper-2a{
		display: flex;
		width: 100%;
		margin-top: 16px;
		margin-bottom: 16px;
		border-left: 2.5px solid #39c894;
	}
	#swiper-2a p{
		font-size: 18px;
		color: #000;
		margin-left: 5px;
	}
	#swiper-2a p small{
		color: #999;
		font-size: 12px;
		margin-left: 7px;
	}
	#swiper-2b{
	 		display: flex;
	 		justify-content:space-around;
	 		margin-bottom: 18px; 		
	}
	#swiper-2b .iconfont{
		font-size: 15px;
		vertical-align: middle;
	}
	#swiper-2b .iconfont small{
		margin-left: 6px;
	}
	#swiper-2b .icon-price:before{
		color: #39C894;
	}
	#swiper-2b .icon-protection-fill:before{
		color: #39C894;
	}
	#swiper-2b .icon-zero:before{
		color: #39C894;
	}
</style>
<style>
	.swiper-pagination-bullet-active{
		background: #39C894;
	}
</style>