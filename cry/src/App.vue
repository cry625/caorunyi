<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SideBar from "@/components/SideBar.vue"
import { useRouter, useRoute } from "vue-router";
const router = useRouter()
const headerList = ref([
  { name: '', path: '', id: 0, icon: "/icon/avatar.png", type: 'avatar' },
  { name: '简介', path: '/resume', id: 1, type: 'text' },
  { name: '知识库', path: '/knowledge', id: 2, type: 'text' },
  { name: '工具栏', path: '/tools', id: 3, type: 'text' },
  { name: '经 验', path: '/workexp', id: 4, type: 'text' },
  { name: '', path: '', id: 5, type: 'btn' },
])
function goLink(path) {
  router.push({ path: path })
}
</script>

<template>
  <el-container style="height: 100vh;">
    <!-- <SideBar/> -->
    <el-header>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item :label="item.name" v-for="(item, key) in headerList" :key="key" @click="goLink(item.path)">
          <template #label>
            <el-button icon="Avatar" v-if="item.type == 'avatar'"></el-button>
            <el-button icon="setting" v-if="item.type == 'btn'"></el-button>
          </template>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped lang="css">
.el-header {
  background: #0984e3;
  height: auto;
}

.el-header :deep(.el-form) {
  text-align: center;
}

.el-header :deep(.el-form-item__label) {
  color: #fff;
  font-weight: 550;
  font-size: 1rem;
}

.el-header :deep(.el-form-item) {
  margin: 0.4rem 1.8rem;
}

.el-header :deep(.el-button) {
  background: transparent;
  border: none;
}

.el-header :deep(.el-icon) {
  color: #fff;
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
