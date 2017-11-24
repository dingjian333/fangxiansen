<template>
  <div class="lulu" style="	border-bottom: 9px solid #eaeaea;">
   			<ul id="daohang">
   				<li v-for="item in arr.infoc">
	   				<router-link :to="item.url">
	   					<img :src="item.src" alt="" />
	   					<p>{{item.name}}</p>
	   				</router-link>
   				</li>
   			</ul>
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
	#daohang{
		width: 365px;
		margin-top: 18px;
		display: flex;
		flex-wrap: wrap;
	
	}
	#daohang li{
			width: 25%;
			flex-direction: column;
			align-items: center;
			text-align: center;
			margin-bottom: 20px;
			font-size: 14px;
		}
	#daohang li img{
		width: 65%;
		height: 60px;
	}	
	#daohang li a{
		text-decoration: none;
		color: #333;
		font-size: 14px;
	}
</style>
