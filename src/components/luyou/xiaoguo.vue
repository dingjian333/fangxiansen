<template>
	<div id="xiaoguo">
		<header>
			<div>
				<router-link to="/HelloWorld">
					<img src="../../../static/切图/logo.png" />
				</router-link>
			</div>
			<div>
				<p>效果图</p>
			</div>
			<ul>
				<li>
					<img src="../../../static/切图/3_spec_03.png" />
					<p>我的</p>
				</li>
				<li>
					<img src="../../../static/切图/3_spec_05.png" />
					<p>导航</p>
				</li>
			</ul>

		</header>
		<nav>
			<div>
				<ul id="tds" v-on:click="xian">
					<li @click="tab('tab1')"><p>户型 V</p></li>
					<li @click="tab('tab2')"><p>区域 V</p></li>
					<li @click="tab('tab3')"><p>风格 V</p></li>
					<li><img src="../../../static/切图/sou.png" /></li>
				</ul>
			</div>
		</nav>
		
		<div id="navs">
			<div id="tab1">
				<ul>
					<li>不限</li>
					<li>一室</li>
					<li>二室</li>
					<li>三室</li>
					<li>四室</li>
					<li>复式</li>
					<li>别墅</li>
					<li>平层</li>
				</ul>
			</div>
			<div id="tab2">
				<ul>
					<li>不限</li>
					<li>客厅</li>
					<li>餐厅</li>
					<li>厨房</li>
					<li>卧室</li>
					<li>书房</li>
					<li>卫生间</li>
					<li>阳台露台</li>
					<li>其他</li>
				</ul>
			</div>
			<div id="tab3">
				<ul>
					<li>不限</li>
					<li>现代</li>
					<li>美式</li>
					<li>中式</li>
					<li>地中海</li>
					<li>混搭</li>
					<li>欧式</li>
					<li>田园</li>
					<li>简约</li>
					<li>新古典</li>
					<li>东南亚</li>
					<li>日式</li>
					<li>宜家</li>
				</ul>
			</div>
		</div>
		<section>
			<my-xiaoguo></my-xiaoguo>
			<div>
				<button>上一页</button>
				<span>2/30</span>
				<button>下一页</button>
			</div>
		</section>
		<footer>
				<div>
				 	<img src="../../../static/切图/2_spec_18.png"/>
				 	<p>服务热线：400-9977-6528</p>
				</div>
				<div>
					<ul>
						<li><router-link to="/HelloWorld">触屏版</router-link></li>
						<li><router-link to="">电脑版</router-link></li>
						<li><router-link to="/my">关于我们</router-link></li>
						<li><router-link to="/lian">联系我们</router-link></li>
					</ul>
				</div>
				<div>
					<p>@2016 浙ICP备15033817号</p>
				</div>
		</footer>
		
		<div class="foudon">
			<img src="../../../static/切图/common/icon_close.png"/>
				<div>
						<img src="../../../static/切图/common/icon_logo.png"/>
						<div>
							<p>装修报价，只需10秒</p>
							<p>免费为你算得装修预算</p>
						</div>
				</div>
				<button>免费获取报价</button>
		</div>
	</div>
</template>

<script>
	import Xiao from "../sections"
	export default {
		data() {
			return {

			}
		},
		components:{
			'my-xiaoguo':Xiao
		},
		methods:{
			
			tab:function(pid){
				var tabs=["tab1","tab2","tab3","tab4"];
				for(var i=0;i<4;i++){
					if(tabs[i]==pid){
						document.getElementById(tabs[i]).style.display="block";
					}else{
						document.getElementById(tabs[i]).style.display="none";
					}
				}
			},
			xian:function(){
				var siz=document.getElementById("navs");
				siz.style.display="block"
			},
			yin:function(){
				var siz=document.getElementById("navs");
				siz.style.display="none"
			}
		}

	}
</script>

<style scoped>
	#xiaoguo {
		width: 100%;
	}
	
	header {
		width: 100%;
		display: flex;
		justify-content: space-around;
		padding-top: 8px;
		padding-bottom: 8px;
		background: white;
		position: fixed;
		z-index: 10;
		top: 0;
	}
	
	header>div:first-of-type {
		width: 30%;
	}
	
	header>div:first-of-type>a>img:first-of-type {
		width: 110px;
		height: 36.5px;
		/*margin-left: 9px;*/
	}
	
	header>div:nth-of-type(2) {
		width: 30%;
		font-weight: 600;
		color: black;
		font-size: 1.2rem;
		text-align: center;
		line-height: 47px;
	}
	
	header>div:nth-of-type(2)>p {
		margin-left: 10%;
	}
	
	header>ul {
		width: 30%;
		display: flex;
		justify-content: space-around;
	}
	
	header>ul>li {
		width: 38%;
		text-align: center;
	}
	
	header>ul>li p {
		font-size: 1rem;
		color: gray;
	}
	
	header>ul>li:first-of-type {
		margin-left: 40px;
	}
	
	header>ul>li:first-of-type>img {
		width: 24.5px;
		height: 22.5px;
	}
	
	header>ul>li:nth-of-type(2)>img {
		width: 24.5px;
		height: 22.5px;
	}
	
	nav {
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-top:62px ;
		background: white;
	}
	
	nav>div:first-of-type {
		width: 96%;
		margin: 0 auto;
	}
	
	nav>div>ul {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	
	nav>div>ul li {
		width: 25%;
		text-align: center;
		height: 3.57rem;
		line-height:3.57rem;
		border-right: 1px solid gainsboro;
		font-size: 18px;
		color: #000000;
	}
	nav>div>ul li:last-of-type{
		border-right: none;
		margin-right: 10px;
		position: relative;
	}
	nav>div>ul li:last-of-type >img{
		width: 24px;
		height: 24px;
		position: absolute;
		top:30%;
		left: 40%;
	}
	
	#navs{
		width: 100%;
		height:200px ;
		background: #F4F4F4;
		overflow: hidden;
		position: fixed;
		z-index: 2;
		top: 18%;
		opacity: 90%;
		display: none;
	}
	#navs>div{
		width: 100%;
		display: none;
	}
	#navs>div:first-of-type{
		display: block;
	}
	#navs>div>ul{
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	#navs>div>ul>li{
		width: 30%;
		height: 28px;
		text-align: center;
		line-height: 28px;
		color: #000000;
		font-size: 0.8rem;
		border: 1px solid #3CC893;
		margin-top: 10px;
	}
	
	section:nth-of-type(1){
		width: 100%;
		padding-bottom: 1.28rem;
	}
	#scs{
		
	}
	section:nth-of-type(1) >div:last-of-type{
		width: 96%;
		margin: 0 auto;
		margin-top:1.28rem;
		background: white;
		display: flex;
		justify-content: space-between;
	}
	section:nth-of-type(1) >div:last-of-type button{
		width: 40%;
		height:42px;
		background: #3CC893;
		color: white;
		border: none;
		font-size: 1.2rem;
		
	}
	section:nth-of-type(1) >div:last-of-type span{
		width:30%;
		height:41px;
		border: 1px solid #EAEAEA;
		text-align: center;
		line-height: 41px;
		font-size: 1.2rem;
	}
	footer{
		width: 100%;
		margin-top: 10px;
		background: white;
		padding-top: 17px;
		padding-bottom: 11px;
	}
	footer>div:first-of-type{
		width:96%;
		text-align: center;
		display: flex;
		font-size: 14px;
		color: #333333;
	}
	footer>div:first-of-type >img{
		width: 16px;
		height: 16px;
		margin-left: 20%;
	}
	footer>div:nth-of-type(2){
		width:96%;
		margin: 0 auto;
	}
	footer>div:nth-of-type(2) >ul{
		width: 100%;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid gainsboro;
		padding-bottom: 11px;
	}
	footer>div:nth-of-type(2) >ul >li{
		width: 25%;
		text-align: center;
		font-size:16px ;
	}
	footer>div:nth-of-type(2) >ul >li>a{
		text-decoration: none;
		color: #000000;
	}
	footer>div:nth-of-type(2) >ul >li:first-of-type{
		color: #3CC893;
	}
	footer>div:nth-of-type(3){
		width:96%;
		margin: 0 auto;
		text-align: center;
		padding-top: 10px;
	}
	
	.foudon{
		width: 100%;
		height:54px;
		background: #000000;
		opacity:0.8;
		position: fixed;
		z-index: 10;
		bottom: 0;
		display:flex;
	}
	.foudon >img:first-of-type{
		width: 24.5px;
		height: 24.5px;
		position: absolute;
		left: 0%;
		top: 0%;
		padding-top: 3px;
		display: flex;
		justify-content: space-around;
	}
	.foudon >div:first-of-type{
		width: 65%;
		margin-left: 10%;
		display: flex;
	}
	.foudon >div:first-of-type >img{
		width: 56px;
		height: 42.5px;
	}
	.foudon >div:first-of-type >div{
		width: 50%;
		
	}
	.foudon >div:first-of-type >div>p:first-of-type{
		font-family: "楷体";
		color: yellow;
		margin-top: 10px;
		white-space: nowrap;
	}
	.foudon >div:first-of-type >div>p:nth-of-type(2){
		font-family: "楷体";
		color: white;
		margin-top: 6px;
			white-space: nowrap;
	}
	.foudon >button{
		width: 87.5px;
		height: 25px;
		margin-left: -20%;
		background: #EB9316;
		border-radius:27px ;
		color: white;
		border: none;
		position: absolute;
		right: 4%;
    	top: 30%;
	}
</style>