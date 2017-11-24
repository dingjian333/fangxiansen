<template>
  <div class="swiper1" style="margin-left:10px;">
  	<div class="swiper-container" id="banner">
  		<ul class="swiper-wrapper">
  			<li class="swiper-slide" v-for="item in arr.infoa">
  					<img :src="item.src" alt="" />
  			</li>
  		</ul>
  		<div class="swiper-pagination"></div>
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
  	  	var swiper = new Swiper("#banner",{
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
	.swiper1{
		width: 355px;
	}
	#banner{
		width: 100%;
		margin-top: 53px;
	}
	#banner img{
		width: 100%;
		height: 100%;
	}
</style>
