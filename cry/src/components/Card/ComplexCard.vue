<template>
  <div class="Card-container" v-for="(item, key) in cardList" :key="key">
    <div class="Card-title">
      <img :src="item.img" :alt="item.title" height="40px">
      <div class="flex-grow">{{ item.title }}</div>
      <div>{{ item.role }}</div>
    </div>
    <el-divider></el-divider>
    <div class="Card-detail block-display">
      <div class="detail-font italic-font">{{ item.sum }}</div>
      <div class="detail-ul detail-font" v-for="(i,k) in  item.detail" :key="k">
        <div>{{ i.title }}</div>
        <ul>
          <li v-for="(i1) in i.items">{{ i1 }}</li>
        </ul>
      </div>
    </div>
    <el-divider></el-divider>
    <div>
      <div class="Card-detail detail-font">{{ item.time }} | {{ item.place }}</div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'
import { useSysStore } from "@/stores/sys";
const sysStore = useSysStore()

const cardList = ref([
  { id: 0, title: "计算机科学与技术学院", role: "学生", img: "/public/pic/cqupt.png", time:'2019-2023',place:'重庆',
  sum:'全日制计算机科学与技术课程',detail:[{title:'智慧公寓',items:['PC端、移动端房源板块','局方PC端页面']},{title:'云上清风',items:['UI设计和静态页面']}]},
  { id: 1, title: "IT及大数据运营中心", role: "前端工程师", img: "/public/pic/telecom.png", time:'2023-至今',place:'深圳',
  sum:'主要负责前端开发',detail:[{title:'智慧公寓',items:['PC端、移动端房源板块','局方PC端页面']},{title:'云上清风',items:['UI设计和静态页面']}]},
])

</script>
<style lang="scss" scoped>
.Card-title {
  display: flex;
  padding: 0;
}

.Card-title img {
  width: 200px;
  padding-right: 26px;
}

.Card-title div {
  vertical-align: middle;
  height: 40px;
  line-height: 40px;
  font-size: 1.32rem;
  font-weight: 450;
}

.Card-title .flex-grow {
  flex-grow: 1;
}
.Card-title .detail-font{
  font-size: 1rem;
}

:deep(ul){
  margin-block-start: 0.4rem;
  margin-block-end: 0.4rem;
  padding-left: 1.2rem;
  line-height: 1.5rem;
}
.detail-ul{
  margin: 1rem 0;
}

</style>