<template>
  <div id="yuyue">
  	<div id="yuyue-a">
  		<div id="yuyue-b">
  			<p>装修预约<p><small>免费上门量房，</small><small>设计方案满意为止</small></p></p>
  		</div>
  		<div id="yuyue-c">
  		<input type="text" placeholder="小区名" id="txt"/>
  		<input type="text" placeholder="手机号" id="txt"/>
  		<input type="text" placeholder="建筑面积" id="txt"/>
  		<button id="but">立即申请</button>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
  			return{
  				arr:[]
  			}
  },
  mounted:function(){
  	  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		#yuyue{
		width: 100%;
		border-bottom: 9px solid #eaeaea;
	}
	#yuyue-a{
		margin-left: 10px;
		width:355px ;
	}
	#yuyue-b{
		display: flex;
		width: 100%;
		margin-top: 16px;
		margin-bottom: 22px;
		border-left: 2.5px solid #39c894;
	}
	#yuyue-b p{
		font-size: 18px;
		color: #000;
		margin-left: 5px;
	}
	#yuyue-b p small{
		color: #999;
		font-size: 12px;
		margin-left: 7px;
	}
	#yuyue-c{
		width: 100%;
		text-align: center;
	}
	#yuyue-c #txt{
		width: 293px;
		height: 35px;
		border: 1px;
		border: 1px solid #EAEAEA;
		border-radius: 5px;
		font-size: 14px;
		color: #cacaca;
		margin-bottom: 12.5px;
		text-indent: 10px;
		letter-spacing: 2px;
	}
	#yuyue-c #but{
		width: 293px;
		text-align: center;
		height: 35px;
		border: 1px;
		border-radius: 5px;
		border: 1px solid #EAEAEA;
		background: #feb505;
		color: white;
		letter-spacing: 2px;
		font-size: 18px;
		margin-bottom: 18px;
	}
</style>
