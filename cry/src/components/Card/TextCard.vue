<template>
  <div class="grid-container">
    <div class="Card-icon-group">
      <el-row :gutter="20" >
        <el-col v-for="(item, index) in totalBlocks" :key="index" :span="24 / prop.col" :xs="24">
          <div class="grid-block">
            <div class="grid-title">
              {{ item.title }}
            </div>
            <div class="subscript">{{ getPeriodName(item.period) }}</div>
            <el-divider></el-divider>
            <div class="grid-content">
              <div class="line-brown">
                {{ getSortName(item.sort) }} · {{ item.position }} · {{ getAreaName(item.area) }} · {{ item.time }}
              </div>
              <div class="line-black">
                {{ item.remark }}
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const prop = defineProps({
  title: String,
  col: Number,
})
const totalBlocks = ref([
  { id: 0, period: 0, title: '第十三届蓝桥杯重庆赛区C/C++程序设计大学B组三等奖', time: '2022年', area: 1, sort: 0, position: 'C/C++程序设计', remark: '由全国软件和信息技术专业人才大赛是由中华人民共和国工业和信息化部人才交流中心主办，国信蓝桥教育科技（北京）股份有限公司承办的计算机类学科竞赛' },
  { id: 1, period: 0, title: '重庆市高校数据库应用程序设计竞赛(重邮赛区)一等奖', time: '2022年', area: 1, sort: 1, position: '前端网页设计', remark: 'aggrfbhgnghfbldfhxdfg' },
  { id: 2, period: 0, title: '第十二届挑战杯中国大学生创业计划竞赛重庆赛区银奖', time: '2020年', area: 1, sort: 1, position: '策划', remark: 'aggrfbhgnghfbldfhxdfg' },
  { id: 3, period: 0, title: '牛客网-C语言能力认证训练营', time: '2022年', area: 1, sort: 0, position: 'C/C++程序设计', remark: 'aggrfbhgnghfbldfhxdfg' },
]); // 定义总块数
const areaList = ref([
  { label: "院级", value: 0 },
  { label: "校级", value: 1 },
  { label: "市级", value: 2 },
  { label: "省级", value: 3 },
  { label: "国家级", value: 4 },
])
const sortList = ref([
  { label: "个人", value: 0 },
  { label: "团体", value: 1 },
])
const periodList = ref([
  { label: "大学时期", value: 0 },
  { label: "在职期间", value: 1 },
])
function getAreaName(value) {
  return areaList.value.find(item => item.value == value).label
}
function getSortName(value) {
  return sortList.value.find(item => item.value == value).label
}
function getPeriodName(value) {
  return periodList.value.find(item => item.value == value).label
}
</script>
<style lang="scss" scoped>

</style>