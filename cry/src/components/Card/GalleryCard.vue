<template>
  <div class="grid-container ">
    <div class="Card-icon-group">
      <el-row :gutter="20">
        <el-col v-for="(item, index) in totalBlocks" :key="index" :span="24 / prop.col" :xs="24">
          <div class="grid-block galleryCard">
            <div class="grid-img">
              <img src="/public/pic/caorunyi.png" alt="">
            </div>
            <el-divider></el-divider>
            <div class="grid-content galleryCard-padding">
              <div class="line-green line-flex">
                <div class="line-flex-grow">{{ item.title }}</div>
                <i class="iconfont icon-gengduo"></i>
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

</style>