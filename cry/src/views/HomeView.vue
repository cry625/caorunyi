<template>
  <div>
    <div>
      <el-button @click="count++">count is: {{ count }}</el-button>
      <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
      <el-button type="success" @click="count++">count is: {{ count }}</el-button>
      <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
      <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
      <el-button type="info" @click="count++">count is: {{ count }}</el-button>
    </div>
    <!-- 输入框 -->
    <div class="demo-input">
      <el-input placeholder="Primary Input" v-model="primaryInput" prefix-icon="el-icon-search"
        class="demo-input-item"></el-input>
      <el-input placeholder="Success Input" v-model="successInput" prefix-icon="el-icon-success" class="demo-input-item"
        :class="{ 'el-input--success': true }"></el-input>
      <!-- 注意：Element Plus 输入框没有内置的warning、danger等类型，这里通过自定义类来模拟 -->
      <el-input placeholder="Warning Input" v-model="warningInput" prefix-icon="el-icon-warning-outline"
        class="demo-input-item warning-input"></el-input>
      <el-input placeholder="Danger Input" v-model="dangerInput" prefix-icon="el-icon-error"
        class="demo-input-item danger-input"></el-input>
      <el-input placeholder="Info Input" v-model="infoInput" prefix-icon="el-icon-info"
        class="demo-input-item"></el-input>
      <el-input placeholder="Default Input" v-model="defaultInput" class="demo-input-item"></el-input>
    </div>

    <!-- 选择器 -->
    <div class="demo-select">
      <el-select v-model="primarySelect" placeholder="Select Primary">
        <el-option label="Option1" value="1"></el-option>
        <el-option label="Option2" value="2"></el-option>
      </el-select>
      <el-select v-model="successSelect" placeholder="Select Success" class="success-select">
        <el-option label="OptionA" value="a"></el-option>
        <el-option label="OptionB" value="b"></el-option>
      </el-select>
      <!-- 其余选择器类似，但Element Plus选择器没有内置的warning、danger等类型，可以通过自定义样式实现 -->
    </div>
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
const count = ref(0)
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

const primaryInput = ref('');
const successInput = ref('');
const warningInput = ref('');
const dangerInput = ref('');
const infoInput = ref('');
const defaultInput = ref('');
 
const primarySelect = ref('');
const successSelect = ref('');
</script>

<style scoped lang="css"></style>