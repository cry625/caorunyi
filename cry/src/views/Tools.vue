<template>
  <div class="container">
    <div class="content ">
      <Tabs :tabs="tabs">
        <template #default="{ activeTab }">
          <div v-if="activeTab === '1'">
            <!-- <iframe src="https://www.zomoplan.com/web/list" class="windowSize"></iframe> -->
            <removeConLog />

          </div>
          <div v-if="activeTab === '2'">
            <removeAnnot />
          </div>
          <div v-if="activeTab === '3'">这是第三个选项卡的内容。</div>
          <div v-if="activeTab === '4'">
            <calendar />
          </div>
          <div v-if="activeTab === '5'">这是第五个选项卡的内容。</div>
          <div v-if="activeTab === '6'">这是第六个选项卡的内容。</div>

        </template>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import Tabs from '@/components/Tabs.vue';
import { computed, ref, watch } from "vue";
import removeConLog from '@/components/Tools/removeConLog.vue';
import calendar from '@/components/Tools/calendar.vue';
import removeAnnot from '@/components/Tools/removeAnnot.vue';
const tabs = [
  { name: '1', label: '注销console.log' },
  { name: '2', label: '删除文中所有注释' },
  { name: '3', label: '解析json文件' },
  { name: '4', label: '日历' },
  { name: '5', label: '便笺' },
  { name: '6', label: '单词翻译' },
];
</script>
<style scoped>
.container {
  height: auto;
}
</style>