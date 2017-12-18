<template>
  <div class="table">
      <table cellspacing="0" cellpadding="0" border="0" class="hovertable">
          <th colspan="5" >个人信息</th>
          <tr>
              <td>姓名</td>
              <td>曾用名</td>
              <td>性别</td>
              <td colspan="2">证件号</td>
          </tr>
          <tr>
              <td>董文杰</td>
              <td>---</td>
              <td>男</td>
              <td colspan="2">610102199307211519</td>
          </tr>
          <tr>
              <td colspan="2">毕业院校</td>
              <td>学历</td>
              <td>供养人数</td>
              <td>供养人数</td>
          </tr>
          <tr>
              <td colspan="2">陕西省西安市第十中学陕西省西安市第十中学</td>
              <td>博士</td>
              <td >2</td>
              <td>3</td>
          </tr>
          <tr>
              <td>子女人数</td>
              <td>移动电话</td>
              <td>住宅电话</td>
              <td>电子邮箱</td>
              <td>QQ/微信</td>
          </tr>
          <tr>
              <td>3</td>
              <td>13679183949</td>
              <td>87568226</td>
              <td>dongwenjie1340@143.com</td>
              <td>707530569</td>
          </tr>
          <tr>
              <td colspan="2">仙居状况</td>
              <td>月租金</td>  
              <td>来滴申请事件</td>  
              <td>现居住地居住时间</td> 
          </tr>
          <tr>
              <td colspan="2" align='left'>山西身西安市莲湖区自强西路237号光学小区山西身西安市莲湖区自强西路237号光学小区</td>
              <td>1000元</td>  
              <td>2017 9 8</td>  
              <td>2018 7 9</td> 
          </tr>
          <tr>
              <td colspan="3">户口所在地</td> 
              <td colspan="2">现居住地</td>
          </tr>
          <tr>
              <td colspan="3">山西身西安市莲湖区郑花路5单元214号</td> 
              <td colspan="2">山西身西安市莲湖区郑花路5单元214号</td>
          </tr>
          <tr>
              <td colspan="5">邮寄地址</td> 
          </tr>
          <tr>
              <td colspan="5">{{hehe}}</td> 
          </tr>
          
      </table>
  </div>
</template>

<script>
export default {    
  data () {
    return {
        hehe:"山西身西安市莲湖区郑花路5单元214号山西身西安市莲湖区郑花路5单元214号"
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
.table{
    width:100%;
}
table{
    width: 90%;
    margin:0 auto;
    display: table;
    border:1px solid grey;

}
/* .table td,.table th{
    text-align: center;
    }  */
    table.hovertable {
	font-family: verdana,arial,sans-serif;
	font-size:13px;
	color:#606266;
	border-width: 1px;
	border-color: #999999;
	border-collapse: collapse;
}
table.hovertable th {
	background-color:#DFE2E6;
	border-width: 1px;
	padding:8px 4px;
	border-style: solid;
	border-color: #a9c6c9;
}
table.hovertable tr:nth-of-type(odd){
    text-align: center;
    font-weight:bold;
    color:#303133;
    background-color: #ecf1f1;
background-image: -webkit-linear-gradient(0deg, #ecf1f1 0%, #fcfcff 100%);
background-image: -moz-linear-gradient(0deg, #ecf1f1 0%, #fcfcff 100%);
background-image: -o-linear-gradient(0deg, #ecf1f1 0%, #fcfcff 100%);
background-image: linear-gradient(0deg, #ecf1f1 0%, #fcfcff 100%);


}
table.hovertable tr:nth-of-type(even){
background-color: #ced8de;
background-image: -webkit-linear-gradient(0deg, #ced8de 0%, #e8e8ef 100%);
background-image: -moz-linear-gradient(0deg, #ced8de 0%, #e8e8ef 100%);
background-image: -o-linear-gradient(0deg, #ced8de 0%, #e8e8ef 100%);
background-image: linear-gradient(0deg, #ced8de 0%, #e8e8ef 100%);





}
table.hovertable td {
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #a9c6c9;
}
</style>