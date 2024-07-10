<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SideBar from "@/components/SideBar.vue"
import { useRouter, useRoute } from "vue-router";
const router = useRouter()
const headerList = ref([
  { name: '', path: '', id: 0,icon:"/public/icon/avatar.png" },
  { name: '简历', path: '/resume', id: 1 },
  { name: '知识库', path: '/resume', id: 2 },
  { name: '工具栏', path: '/resume', id: 3 },
  { name: '经 验', path: '/resume', id: 4 },
])
function goLink(path){
  router.push({ path: path})
}
</script>

<template>
  <el-container style="height: 100vh;">
    <!-- <SideBar/> -->
    <el-header style="height: 6vh;">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item :label="item.name" v-for="(item, key) in headerList" :key="key" @click="goLink(item.path)">
        <template #label>
          <img :src="item.icon" alt="">
        </template>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped>
.el-header {
  background: #74b9ff;
}

.el-main {
  padding: 0;
}
</style>
<style>
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
}
</style>
