<template>
  <div class="grid-container">
    <div class="Card-icon-group">
      <el-row :gutter="20" >
        <el-col v-for="(item, index) in totalBlocks" :key="index" :span="24/prop.col" :xs="24">
          <div class="grid-block">
            <div class="grid-title">{{ item.title }}</div>
            <el-divider></el-divider>
            <div class="grid-content">
              <div class="line-brown">
                {{ item.position }} · {{ getAreaName(item.area) }} · {{ item.time }}
              </div>
              <div class="line-black">
              ·{{ item.remark }}
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'
const prop = defineProps({
  title: String,
  col: Number,
})
const totalBlocks = ref([
  {id:0,title:'第十三届蓝桥杯重庆赛区C/C++程序设计大学B组三等奖',time:'2022年',area:1,position:'xxx开发',remark:'aggrfbhgnghfbldfhxdfgaggrfbhgnghfbldfhxdfgaggrfbhgnghfbldfhxdfgaggrfbhgnghfbldfhxdfg'},
  {id:1,title:'重庆市高校数据库应用程序设计竞赛(重邮赛区)一等奖',time:'2022年',area:1,position:'xxx开发',remark:'aggrfbhgnghfbldfhxdfg'},
  {id:2,title:'第十二届挑战杯中国大学生创业计划竞赛重庆赛区银奖',time:'2022年',area:1,position:'xxx开发',remark:'aggrfbhgnghfbldfhxdfg'},
  {id:3,title:'2020年重邮电子商务“创新、创意及创业”挑战赛三等奖',time:'2022年',area:1,position:'xxx开发',remark:'aggrfbhgnghfbldfhxdfg'},
  {id:4,title:'牛客网-C语言能力认证训练营',time:'2022年',area:1,position:'xxx开发',remark:'aggrfbhgnghfbldfhxdfg'},
]); // 定义总块数
const areaList=ref([
  {label:"院级",value:0},
  {label:"校级",value:1},
  {label:"市级",value:2},
  {label:"省级",value:3},
  {label:"国家级",value:4},
])
function getAreaName(value){
  return areaList.value.find(item=>item.value==value).label
}
</script>
<style lang="scss" scoped>
.grid-block {
  padding: 20px;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 20px; 
  background: var(--primary-theme-white);
  box-shadow: var(--primary-text-grey) 0 0 10px;
}
.grid-title{
  text-align: left;
  color: var(--primary-text-blue);
  font-weight: bold;
}
.grid-content{
  text-align: left;
  .line-brown{
    color: var(--primary-text-yellow);
    width: 100%;
  }
  .line-black{
    color: var(--primary-text-black);
    word-wrap: break-word; /* 强制换行 */
    overflow-wrap: break-word; /* 强制换行 */
  }
}
</style>