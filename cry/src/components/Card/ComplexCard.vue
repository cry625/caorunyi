<template>
  <div class="Card-container">
    <div class="Card-title">{{ prop.title }}</div>
    <el-divider></el-divider>
    <div class="Card-icon-group">
      <el-tooltip :content="item.name" v-for="(item, key) in iconList" :key="key" :effect="sysStore.theme">
        <img :src="item.src" :alt="item.name" >
      </el-tooltip>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'
import { useSysStore } from "@/stores/sys";
const sysStore = useSysStore()
const prop = defineProps({
  title: String,
})
const cardList = ref([
  { id: 0, src: "/pic/vue.png", name: "vue" },
  { id: 1, src: "/pic/js.png", name: "js" },
  { id: 2, src: "/pic/css.png", name: "css" },
  { id: 3, src: "/pic/html5.png", name: "html5" },
])

</script>
<style lang="scss" scoped>
</style>