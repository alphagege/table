<template>
  <div class="Pos">
    <el-row id="row">
      <el-col :span="8" class="col">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table border style="width:100%" :data="tableData">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column  label="操作" fixed="right">
                <template>
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="16" class="col col2">222</el-col>
    </el-row>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
  
</el-radio-group>
<div class="father">
  <!-- <ul>
    <li v-for="(item,index) in list" @contextmenu.prevent="oncontextmenu(index,$event) ">{{item}}</li>
  </ul>
  <ul class="contextmenu" id="ul" v-show="menuShow">
    <li @click="remove" @mouseover="closeChangeColor($event)">Close</li>
    <li @click="closeOthers" @mouseover="closeChangeColor($event)">Close Others</li>
    <li @click="closeAll" @mouseover="closeChangeColor($event)">Close All</li> -->
    <button @click="add">+</button>
    <button @click="red">-</button>
    {{$store.state.count}}--{{count}}
  </ul>
</div>



  </div>
  </div>
</template> 
<script>



import store from '../../store/store.js'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Pos',
  data(){
    return{
      leftNav:"",
      closeIndex:"",
      menuShow:true,
      list:[1,2,3,4],
      isCollapse: true,
      tableData: [{
          goodsName: '可口可乐',
          price: 8,
          count:1
        }, {
          
          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, {
         
          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, {
         
          goodsName: '甜筒',
          price: 8,
          count:1
        }]
    }
  },
  mounted(){
    var leftNav = document.getElementsByClassName("leftNav")[0].offsetWidth
    this.leftNav=leftNav
    console.log(leftNav)
  },
  // methods:{
  //       oncontextmenu(index,$event){
  //         console.log(index)
  //         console.log($event)



  //         this.closeIndex=index
  //         var close = document.getElementById("ul")
  //         var e = $event
  //         this.menuShow=true
     
  //         close.style.left = (e.clientX-this.leftNav) + "px";
  //         close.style.top = e.offsetY + "px";

  //         return false
  //      },
  //       remove(){
  //         var index = this.closeIndex
  //          this.list.splice(index,1)
  //          this.menuShow=false

  //       },
  //       closeOthers(){
  //         var index = this.closeIndex
  //         this.list.splice(0,index)
  //         this.list.splice(1,this.list.length-1)
  //         this.menuShow=false
  //       },  
  //       closeAll(){
  //         this.list.splice(1,this.list.length)
  //         this.menuShow=false 
  //       },
  //       closeChangeColor($event){
  //         var menu = document.getElementsByClassName("contextmenu")[0]
  //         console.log(menu)
  //         var lis = menu.children;
  //         console.log(lis)
  //         for(var i=0;i<lis.length;i++){
  //           lis[i].style.backgroundColor="red"
  //         }
  //         $event.target.style.backgroundColor="gray"
  //       }
  // },
  methods:mapMutations(['add','red']),
  computed:mapState(['count']),
  // computed:mapState({
  //   count:state=>state.count
  // }),
  // computed:{
  //   count(){
  //     return this.$store.state.count
  //   }
  // },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .contextmenu{margin: 0;
    background: #fff;
    z-index: 2;
    position:absolute;
    top:0;
    left:0;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    -webkit-box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    display:"block"
}
  .contextmenu li{
        display: list-item;
        margin: 0;
    padding: 7px 16px;
    cursor: pointer;
  }
  .col2{
    background:#ccc;
    border-left:1px solid #ccc
  }
   .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  ul:first-of-type{
    width: 100%;
    height: 50px;
    margin:0;
  }
  ul:first-of-type li{
    width: 50px;
    height: 20px;
    background: red;
    float: left;
    list-style: none;
    margin-left: 10px;
  }
  .father{
    position: relative;
  }


  

</style>
<style>
  .Pos .el-menu--collapse .el-submenu .el-menu{
    margin-left:0px;
  }
</style>

