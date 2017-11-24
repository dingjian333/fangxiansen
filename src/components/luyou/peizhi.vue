<template>
  <div>
      <my-header></my-header>
      <div id="faxq">
      		<ul>
      			<li>
      					<img src="../../../static/img/f_03.png"/>
      			</li>
      			<li>
      				 <p>699全包精装套餐</p>
      				 <p><span>价格：</span><font><b>699元/㎡</b></font></p>
      				 <p><span>已预约：</span><samp>221套</samp></p>
      				 <p><span>正式发售：</span><font>全包套餐火爆预约中</font></p>
      			</li>
      			
      		</ul>
      		<p id="faxq_a">精装全包套餐，包设计/包主材/包施工/报监理。采用知名辅材，一线主材，工厂直供F2C模式</p>
      </div>
      <ul id="faxq_b">
      	  <li><router-link to="/fanganxiangqing">套餐详情</router-link></li>
      	  <li><router-link to="/peizhi">配置清单</router-link></li>
      	  <li>施工工艺</li>
      	  <li>服务流程</li>
      </ul>
    <ul id="peizhia">
    	<li>厨房</li>
    	<li>卫生间</li>
    	<li>阳台</li>
    	<li>卧室/客房/书房</li>
    </ul>
    <table border="1" cellspacing="0">
    	<tr>
    		<td><span>项目</span></td>
    		<td><span>品牌</span></td>
    		<td><span>详细说明</span></td>
    	</tr>
    	<tr>
    		<td><span>地柜</span></td>
    		<td><span>定制橱柜</span></td>
    		<td><span>3延米以内</span></td>
    	</tr>
    	<tr>
    		<td><span>吊柜</span></td>
    		<td><span>定制橱柜</span></td>
    		<td><span>1.2延米内，阻尼抽屉2个（单色石英台面）</span></td>
    	</tr>
    	<tr>
    		<td><span>台面</span></td>
    		<td><span>石英石</span></td>
    		<td><span>3延米以内</span></td>
    	</tr>
    	<tr>
    		<td><span>门套</span></td>
    		<td><span>双诺</span></td>
    		<td><span>定制</span></td>
    	</tr>
    	<tr>
    		<td><span>小地砖</span></td>
    		<td><span>马可波罗瓷砖</span></td>
    		<td><span>地砖满铺</span></td>
    	</tr>
    </table>
    <button id="but"><span class="iconfont icon-pencle"></span><span>马上免费预约</span></button>
    <my-bottom></my-bottom>
  </div>
</template>

<script>
	import Header from "@/components/header";
	import Bottom from "@/components/bottom";
export default {
  data () {
  			return{
  				arr:[]
  			}
  },
  components:{
			"my-header":Header,
			"my-bottom":Bottom			
		},
  mounted:function(){
  	  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#but{
		width: 100%;
		height: 40px;
		text-align: center;
		color: white;
		background: rgba(255,0,0,0.7);
		border: 1px;
		position: fixed;
		bottom: 0px;
	}
	#but span{
		margin-left:10px;
	}
	table{
		width: 94%;
		margin-left: 3%;
		border-left: 0px;
		border-right: 0px;
		font-size: 10px;
		border-top: 1px solid #dcdcdc;
		border-bottom: 1px solid #dcdcdc;
	}
	table span{
		margin-left: 6px;
	}
	table td{
		border: 1px solid #dcdcdc;
	}
	table tr td:nth-of-type(1){
		border-left: 0px;
	}
	table tr td:nth-of-type(3){
		border-right: 0px;
	}
	table tr{
		border: 1px solid #DCDCDC;
		height: 30px;
		color: gray;
	}
	#peizhia{
		width: 94%;
		margin-left: 3%;
		display: flex;
		margin-top:10px;
		margin-bottom: 12px;
	}
	#peizhia li{
		border: 1px solid #39C894;
		color: #39C894;
		border-radius: 20px;
		margin-left: 6px;
		height: 25px;
		line-height: 25px;
		padding: 0 10px 0 10px;
		font-size: 14px;
	}
#faxq{
	width: 100%;
	margin-top: 50px;
	border-top: 8px solid #F4F4F4;
	border-bottom: 8px solid #F4F4F4;
}
#faxq ul{
	width: 94%;
	margin-top: 12px;
	margin-left: 3%;
	display: flex;
	justify-content: space-between;
}
#faxq ul li:nth-of-type(1){
	width: 35%;
}
#faxq ul li:nth-of-type(1) img{
	width: 100%;
}
#faxq ul li:nth-of-type(2){
	width: 60%;
}
#faxq ul li span{
	color: #999999;
	font-size: 12px;
	margin-right: 6px;
}
#faxq ul li font{
	color: #FF4351;
	font-size: 12px;
}
#faxq_a{
	width: 94%;
	margin-left: 3%;
	font-size: 13px;
	margin-bottom: 10px;
}
#faxq_b{
	width: 94%;
	margin-left: 3%;
	display: flex;
}
#faxq_b li{
	width: 25%;
	height: 50px;
	text-align: center;
	line-height: 50px;
}
#faxq_c{
	width: 100%;
	border-bottom: 8px solid #EAEAEA;
}
#faxq_c img{
	width: 94%;
	margin-left: 3%;
	margin-bottom: 10px;
}
#faxq_b li a{
	color: black;
	text-decoration: none;
}
#faxq_b li:nth-of-type(2) a{
	color: #39C894;	
	
}
#faxq_b li:nth-of-type(2){
	border-bottom: 1px solid #39C894;
}
</style>
