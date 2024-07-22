<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import SideBar from "@/components/SideBar.vue"
import { useRouter, useRoute } from "vue-router";
import { useSysStore } from "@/stores/sys";
import { ElMessage } from 'element-plus/es';
const router = useRouter()
const sysStore = useSysStore()
window.document.documentElement.setAttribute('theme', sysStore.theme)
const headerList = ref([
  { name: '简介', path: '/resume', id: 1, type: 'text' },
  { name: '知识库', path: '/knowledge', id: 2, type: 'text' },
  { name: '工具栏', path: '/tools', id: 3, type: 'text' },
  { name: '经 验', path: '/workexp', id: 4, type: 'text' },
])
const dropdownList = ref([
  { name: '中 文', id: 0, icon: 'icon-zhongwen' },
  { name: 'English', id: 1, icon: 'icon-yingwen' },
])
const showLight = ref(true)
const theme = ref('')
watch(() => showLight.value, changeTheme)
function changeTheme() {
  theme.value = window.document.documentElement.getAttribute('theme')
  let nowThemeText = theme.value == 'dark' ? '深色' : '浅色'
  let newThemeText = nowThemeText == '深色' ? '浅色' : '深色'
  ElMessage({
    message: '当前主题为' + nowThemeText + ',切换主题为' + newThemeText,
    type: 'success'
  })
  let newTheme = theme.value == 'dark' ? 'light' : 'dark'
  window.document.documentElement.setAttribute('theme', newTheme)
  sysStore.setTheme(newTheme)
}
function goLink(path) {
  router.push({ path: path })
}
</script>

<template>
  <el-container style="height: 100vh;">
    <!-- <SideBar/> -->
    <el-header class="header">
      <i class="iconfont icon-touxiang"></i>
      <el-form :inline="true">
        <el-form-item :label="item.name" v-for="(item, key) in headerList" :key="key" @click="goLink(item.path)">
        </el-form-item>
      </el-form>
      <div class="tool-bar">
        <div class="dropdown">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="iconfont icon-quanqiu text-color"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="(item, index) in dropdownList" :key="index">
                  <template #default>
                    <div><i class="iconfont" :class="item.icon"></i>{{ item.name }}</div>
                  </template>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <el-switch v-model="showLight" inline-prompt>
          <template #active-action>
            <i class="iconfont icon-yueliang"></i>
          </template>
          <template #inactive-action>
            <i class="iconfont icon-qing"></i>
          </template>
        </el-switch>
      </div>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>

</template>

<style scoped lang="scss">
.tool-bar {
  display: flex;
}
.dropdown{
  margin: auto 0.8rem auto 0;
  line-height: 1;
}
</style>
