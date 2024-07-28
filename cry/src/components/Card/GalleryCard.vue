<template>
  <div class="grid-container ">
    <div class="Card-icon-group">
      <el-row :gutter="20">
        <el-col v-for="(item, index) in totalBlocks" :key="index" :span="24 / prop.col" :xs="24">
          <div class="grid-block galleryCard">
            <div class="grid-img">
              <img src="/public/pic/caorunyi.png" alt="">
            </div>
            <!-- <div class="flag">
              <div class="text">{{ getPeriodName(item.period) }}</div>
            </div> -->
            <el-divider></el-divider>
            <div class="grid-content galleryCard-padding">
              <div class="line-green line-flex">
                <div class="line-flex-grow">{{ item.title }}</div>
                <i class="iconfont icon-gengduo1"></i>
              </div>
              <div class="tag-group">
                <el-tag :class="{'tag-orange':get_color_with_id(id)=='var(--primary-tag-orange)','tag-pink':get_color_with_id(id)=='var(--primary-tag-pink)'}" effect="plain" v-for="id in item.label">{{ get_label_with_id(id) }}</el-tag>
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
import {get_color_with_id, get_label_with_id } from '@/utils/global_define';
const prop = defineProps({
  title: String,
  col: Number,
})
const totalBlocks = ref([
  { title: '基于yoloV5的人群密集检测', label: [0, 101], remark: 'aggrfbhgnghfbldfhxdfgaggrfbhgnghfbldfhxdfg' },
  { title: '基于yoloV5的人群密集检测', label: [0, 102], remark: 'aggrfbhgnghfbldfhxdfg' },
  { title: '基于yoloV5的人群密集检测', label: [0, 103], remark: 'aggrfbhgnghfbldfhxdfg' },
  { title: '基于yoloV5的人群密集检测', label: [1, 101], remark: 'aggrfbhgnghfbldfhxdfg' },
  { title: '基于yoloV5的人群密集检测', label: [1, 102], remark: 'aggrfbhgnghfbldfhxdfgaggrfbhgnghfbldfhxdfg' },
  { title: '基于yoloV5的人群密集检测', label: [0, 103], remark: 'aggrfbhgnghfbldfhxdfg' },
  { title: '基于yoloV5的人群密集检测', label: [0, 102], remark: 'aggrfbhgnghfbldfhxdfg' },
  { title: '基于yoloV5的人群密集检测', label: [0, 103], remark: 'aggrfbhgnghfbldfhxdfg' },
  { title: '基于yoloV5的人群密集检测', label: [0, 103], remark: 'aggrfbhgnghfbldfhxdfgaggrfbhgnghfbldfhxdfg' },
]); 

</script>
<style lang="scss" scoped>
.flag {
  position: absolute;
  right: 8px;
  top: 0;
  width: 56px;
  background-color: var(--primary-text-green);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.text {
  position: relative;
  padding: 6px 4px;
  text-align: center;
  color: var(--primary-text);
  font-size: 14px;
}

.text::after {
  content: '';
  position: absolute;
  left: 0;
  top: 22px;
  border-width: 10px 28px;
  border-color: var(--primary-text-green);
  border-style: solid;
  border-bottom: 12px solid transparent;
}
:deep(.el-tag){
  margin: 0.2rem 0.46rem 0.2rem 0;
}
.tag-orange {
  font-weight: bold;
  color: var(--primary-tag-orange); 
  border-color: var(--primary-tag-orange); 
  border: 2px solid;
  background: transparent;
}
.tag-orange:hover {
  background-color: var(--primary-tag-bg-orange); 
}
.tag-pink {
  font-weight: bold;
  color: var(--primary-tag-pink); 
  border-color: var(--primary-tag-pink); 
  border: 2px solid;
  background: transparent;
}

.tag-pink:hover {
  background-color: var(--primary-tag-bg-pink); 
}
</style>