<template>
  <div class="container">
    <Tabs :tabs="tabs">
    <template #default="{ activeTab }">
      <div v-if="activeTab === '1'">
        <iframe src="https://www.zomoplan.com/web/list" class="windowSize"></iframe>
      </div>
      <div v-if="activeTab === '2'">这是第二个选项卡的内容。</div>
      <div v-if="activeTab === '3'">这是第三个选项卡的内容。</div>
      <div v-if="activeTab === '4'">这是第四个选项卡的内容。</div>
      <div v-if="activeTab === '5'">这是第五个选项卡的内容。</div>
      <div v-if="activeTab === '6'">这是第六个选项卡的内容。</div>

    </template>
  </Tabs>
  </div>
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
<style scoped>
.windowSize{
  width: 100%;
  height: calc(100vh - 7.86rem);
}
</style>