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
                {{ item.position }}·{{ item.area }}·{{ item.time }}
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
  {id:0,title:'1xxxxx奖',time:'20220101',area:1,position:'xxx开发',remark:'aggrfbhgnghfbldfhxdfg'},
  {id:1,title:'2xxxxx奖',time:'20220101',area:1,position:'xxx开发',remark:'aggrfbhgnghfbldfhxdfg'},
  {id:2,title:'3xxxxx奖',time:'20220101',area:1,position:'xxx开发',remark:'aggrfbhgnghfbldfhxdfg'},
  {id:3,title:'4xxxxx奖',time:'20220101',area:1,position:'xxx开发',remark:'aggrfbhgnghfbldfhxdfg'},
  {id:4,title:'5xxxxx奖',time:'20220101',area:1,position:'xxx开发',remark:'aggrfbhgnghfbldfhxdfg'},
]); // 定义总块数
const areaList=ref([
  {label:"院级",value:0},
  {label:"校级",value:1},
  {label:"市级",value:2},
  {label:"省级",value:3},
  {label:"国家级",value:4},
])
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
  
}
.grid-content{

}
</style>