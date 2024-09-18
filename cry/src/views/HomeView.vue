<template>
  <div>
    <el-button>哈哈哈</el-button>
    <h1>这是一个基于vue+vite+elementPlus的个人网站</h1>
    <ul>以下介绍本网站中使用的技术统计
      <li>简单描述网站内容</li>
      <li>用饼图表示语言占比</li>
      <li>用折线图表示代码提交记录</li>
    </ul>
    <EchartsItem type="pie" :data="pieData" />
    <!-- <EchartsItem type="bar" :data="barData" /> -->
    <!-- <EchartsItem type="donut" :data="donutData" /> -->
    <EchartsItem type="line" :data="lineData" />
  </div>
</template>

<script setup>
import EchartsItem from '@/components/EchartsItem.vue';
import { ref } from 'vue';

// 数据
const pieData = ref([
  { value: 335, name: '直接访问' },
  { value: 310, name: '邮件营销' },
  { value: 234, name: '联盟广告' },
  { value: 135, name: '视频广告' },
  { value: 1548, name: '搜索引擎' }
]);

const barData = ref([
  { name: '苹果', value: 5 },
  { name: '香蕉', value: '-' },
  { name: '橘子', value: 36 },
  { name: '梨', value: 10 },
  { name: '葡萄', value: 10 }
]);

const donutData = ref([
  { value: 335, name: '直接访问' },
  { value: 310, name: '邮件营销' },
  { value: 234, name: '联盟广告' },
  { value: 135, name: '视频广告' },
  { value: 1548, name: '搜索引擎' }
]);

const lineData = ref([
  { value: 1, name: 'kind1' },
  { value: 23, name: 'kind2' },
  { value: 67, name: 'kind3' },
  { value: 55, name: 'kind4' },
  { value: 34, name: 'kind5' },
  { value: 88, name: 'kind6' },
]);
</script>

<style scoped lang="css"></style>