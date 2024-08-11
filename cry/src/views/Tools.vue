<template>
  <Tabs :tabs="tabs">
    <template #default="{ activeTab }">
      <div v-if="activeTab === 'tab1'">这是第一个选项卡的内容。</div>
      <div v-if="activeTab === 'tab2'">这是第二个选项卡的内容。</div>
      <div v-if="activeTab === 'tab3'">这是第三个选项卡的内容。</div>
    </template>
  </Tabs>
</template>

<script setup>
import Tabs from '@/components/Tabs.vue';

const tabs = [
  { name: 'tab1', label: '选项卡 1' },
  { name: 'tab2', label: '选项卡 2' },
  { name: 'tab3', label: '选项卡 3' }
];
</script>