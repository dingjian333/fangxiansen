<template>
  <div id="yuyue">
  	<div id="she">
  	<div id="she-a">
  		<p id="jieshao">房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包
  		，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。</p>
  	</div>
  </div>
  <div>
  	<div id="she-a">
  		<div id="bottom_a">
  			<p><span class="iconfont icon-hot-line"></span>服务热线：400-9977-658</p>
  			<ul>
  				<li style="color: #39C893;">
  					<a href="index.html">触屏版</a>
  				</li>
  				<li>电脑版</li>
  				<li>
  						<router-link to="/oneb">关于我们</router-link>
  				</li>
  				<li>
  						<router-link to="/onea">联系我们</router-link>
  				</li>
  			</ul>
  			<p>©2017&nbsp;浙ICP备15033817号</p>
  		</div>
  	</div>
  </div>
  <a href="#aaa">
	  <div id="maodian">
	  	<span class="iconfont icon-top"></span>
	  </div>
  </a>
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
			#she{
		width: 100%;
		border-bottom: 9px solid #eaeaea;
	}
	#she-a{
		margin-left: 10px;
		width:355px ;
	}
	#she-b{
		display: flex;
		width: 100%;
		margin-top: 16px;
		margin-bottom: 22px;
		border-left: 2.5px solid #39c894;
	}
	#she-b p{
		font-size: 18px;
		color: #000;
		margin-left: 5px;
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
	#yuyue #but{
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
	#she-c{
		width: 100%;
		display: flex;	
	}
	#she-c li{
			width: 25%;
			margin-top: 5px;
			flex-direction: column;
			align-items: center;
			text-align: center;
			font-size: 18px;
		}
		#she-c li span{
			width: 60px;
    display: block;
    height: 19px;
    line-height: 19px;
    font-size: 12px;
    color: white;
    background: #39C894;
    border-radius: 3px;
    text-align: center;
    margin-left: 17%;
    margin-top: 7px;
		}
		#she-c li img{
			width: 75%;
			height: 70px;
		}
	#she-d{
		margin-top: 18px;
		margin-bottom: 16px;
		width: 100%;
		display: flex;
		justify-content: center;		
	}
	#she-d li{
			color: #39C894;
			width: 48%;
			font-size: 14px;
			height: 35px;
			text-align: center;
			line-height: 35px;
			border: 1px solid #999999;
		}
		#she-d li span{
			margin-left: 7px;
			vertical-align: middle;
		}
		#she-ba img{
			width: 100%;
			/*height: 253px;*/
		}
		#she-e{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		#she-e li{
			width: 49%;
			margin-top: 3px;
		}
		#she-e li img{
			width: 100%;
		}
		#she-f{
			margin-top: 8px;
			width: 100%;
			display: flex;
			font-size: 14px;
		}
		#she-f span{
			display: block;
			background: #39C894;
			color: white;
			margin-left: 10px;
			border-radius: 5px;
			padding: 0px 6px 0px 6px;
			font-size: 12px;
		}
		#zxgl{
			width: 100%;
		}
		#zxgl li{
			width: 100%;
			display: flex;
			margin-top: 15px;
			justify-content: space-between;
			border-bottom: 1px solid lightgray;
		}
		#zxgl li:nth-of-type(3){
			border: 0px;
		}
		#zxgl_left{
			width: 95px;
			height: 72px;
			margin-bottom: 15px;
		}
		#zxgl_left img{
			width: 100%;
			height: 100%;
		}
		#zxgl_right{
			width:249px ;
			height: 72px;
		}
		#zxgl_right p{
			font-size: 18px;
		}
		#zxgl_right span{
			font-size: 14px;
			color: #999;
		}
		#zxgl_right span:nth-of-type(2){
			margin-left: 37.5px;
		}
		#jieshao{
			width: 100%;
			margin-top: 18px;
			margin-bottom: 18px;
			font-size: 14px;
			color: #333;
			text-indent: 2em;
		}
	#bottom_a{
		width: 100%;
		text-align: center;
	}
	#bottom_a p{
		margin-top: 15px;
		font-size: 14px;
		color: #333;
	}
	#bottom_a ul{
		display: flex;
		margin-top: 13px;
		width: 100%;
		font-size: 14px;
		border-bottom: 1px solid lightgray;
	}
	#bottom_a ul li{
		width: 25%;
		text-align: center;
		margin-bottom: 7px;
	}
	#bottom_a p:nth-of-type(2){
		margin-top: 15px;
		margin-bottom: 15px;
		color: #999999;
		font-size: 14px;
	}
	#maodian{
		position: fixed;
	    bottom: 13%;
	    right: 3%;
	    width: 43px;
	    height: 43px;
	    line-height: 43px;
	    border: 1px solid #959595;
	    border-radius: 50%;
	    text-align: center;
	    background: #fff;
	    opacity: .8;
	}
	a{
		text-decoration: none;
		color: black;
	}
	#bottom_a ul li:nth-of-type(1) a:nth-of-type(1){
		color: #39C894;
	}
</style>
