<template>
  <div id="yuyue" v-show="!flag">
  <ul id="bottom">
  	<li v-on:click="xiala">
  		<img src="../../static/img/icon_close.png" />
  	</li>
  	<li><router-link to="/eight">
  		<img src="../../static/img/bottom.png" /></router-link>
  	</li>
  	<li>
  		<router-link to="/eight"><button>免费获取报价</button></router-link>
  	</li>
  </ul>
  </div>
</template>

<script>
export default {
  data () {
  			return{
  				arr:[],
  				flag:false
  			}
  },
  mounted:function(){
  	  
  },
  methods:{
  	xiala:function(){  
			 	console.log("a")
                this.flag = !this.flag  
       }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
