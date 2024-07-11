<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SideBar from "@/components/SideBar.vue"
import { useRouter, useRoute } from "vue-router";
const router = useRouter()
const headerList = ref([
  { name: '', path: '', id: 0, icon: "/icon/avatar.png", property: 'avatar' },
  { name: '简历', path: '/resume', id: 1, property: 'text' },
  { name: '知识库', path: '/knowledge', id: 2, property: 'text' },
  { name: '工具栏', path: '/tools', id: 3, property: 'text' },
  { name: '经 验', path: '/workexp', id: 4, property: 'text' },
  { name: '', path: '', id: 0, property: 'btn' },
])
function goLink(path) {
  router.push({ path: path })
}
</script>

<template>
  <el-container style="height: 100vh;">
    <!-- <SideBar/> -->
    <el-header style="height: 6vh;">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item :label="item.name" v-for="(item, key) in headerList" :key="key" @click="goLink(item.path)">
          <template #label>
            <el-button icon="Avatar" v-if="item.property=='avatar'"></el-button>
            <el-button icon="setting" v-if="item.property=='btn'"></el-button>
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
  background: #74b9ff;
}
.el-header :deep(.el-form){
  text-align: center;
}
.el-header :deep(.el-form-item__label) {
  color: #fff;
  font-weight: 550;
  font-size: 10px;
}

.el-header :deep(.el-button) {
  background: transparent;
  border: none;
}
.el-header :deep(.el-icon){
  color:#fff;
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
