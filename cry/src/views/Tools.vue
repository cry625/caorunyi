<template>
  <Tabs :tabs="tabs">
    <template #default="{ activeTab }">
      <div v-if="activeTab === 'tab1'">这是第一个选项卡的内容。</div>
      <div v-if="activeTab === 'tab2'">这是第二个选项卡的内容。</div>
      <div v-if="activeTab === 'tab3'">这是第三个选项卡的内容。</div>
      <div v-if="activeTab === 'tab4'">这是第四个选项卡的内容。</div>
      <div v-if="activeTab === 'tab5'">这是第五个选项卡的内容。</div>
      <div v-if="activeTab === 'tab6'">这是第六个选项卡的内容。</div>
      <iframe src="https://www.zomoplan.com/web/list" width="1000" height="600"></iframe>
    </template>
  </Tabs>
</template>

<script setup>
import Tabs from '@/components/Tabs.vue';

const tabs = [
  { name: '1', label: '日历' },
  { name: '2', label: '便笺' },
  { name: '3', label: '删除文中所有注释的工具' },
  { name: '4', label: '解析json文件的工具' },
  { name: '5', label: '单词翻译' },
  { name: '6', label: '注销console.log' },
  { name: '7', label: '注销console.log' },
];

</script>