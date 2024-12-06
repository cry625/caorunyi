<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import SideBar from "@/components/SideBar.vue"
import { useRouter, useRoute } from "vue-router";
import { useSysStore } from "@/stores/sys";
import { ElMessage } from 'element-plus/es';
import { isDark, toggleDark } from "@/composables";

const router = useRouter()
const sysStore = useSysStore()
const headerList = ref([
  { name: '简介', path: '/resume', id: 1, type: 'text' },
  { name: '知识库', path: '/knowledge', id: 2, type: 'text' },
  { name: '工具栏', path: '/tools', id: 3, type: 'text' },
  // { name: '经 验', path: '/workexp', id: 4, type: 'text' },
])
const dropdownList = ref([
  { name: '中 文', id: 0, icon: 'icon-zhongwen' },
  { name: 'English', id: 1, icon: 'icon-yingwen' },
])
const colorList = ref([
  { name: '绿色', value: 'green', id: 1, path: 'public/icon/color_icon/green.png' },
  { name: '蓝色', value: 'blue', id: 2, path: 'public/icon/color_icon/blue.png' },
  { name: '红色', value: 'red', id: 4, path: 'public/icon/color_icon/red.png' },
  { name: '灰色', value: 'grey', id: 3, path: 'public/icon/color_icon/grey.png' },
  { name: '黑暗模式', value: 'dark', id: 0, path: 'public/icon/color_icon/black.png' },
])
const showMenu = ref(false)
const showLight = ref(true)
const theme = ref('');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(theme) {
  window.document.documentElement.setAttribute('theme', theme);
  sysStore.setTheme(theme);
}

function changeTheme() {
  theme.value = window.document.documentElement.getAttribute('theme');
  let nowThemeText = theme.value === 'dark' ? '深色' : '浅色';
  let newThemeText = nowThemeText === '深色' ? '浅色' : '深色';
  ElMessage({
    message: '当前主题为' + nowThemeText + ',切换主题为' + newThemeText,
    type: 'success'
  });
  let newTheme = theme.value === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}
// 初始化主题
if (sysStore.theme) {
  setTheme(sysStore.theme);
} else {
  setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
}

// 监听系统颜色模式变化
prefersDarkScheme.addEventListener('change', (e) => {
  const newTheme = e.matches ? 'dark' : 'light';
  // 仅在用户未手动设置主题时自动切换
  if (theme.value !== 'dark' && theme.value !== 'light') {
    setTheme(newTheme);
  }
});

// 手动控制主题切换
watch(() => showLight.value, changeTheme);

function goLink(path) {
  router.push({ path: path })
}

// 页面加载时设置初始值
window.onload = function() {
  const savedClass = localStorage.getItem('htmlClass');
  if (!savedClass) {
    document.documentElement.className = 'blue'; // 设置初始值为 'blue'
    localStorage.setItem('htmlClass', 'blue'); // 存储到 localStorage
  } else {
    document.documentElement.className = savedClass; // 使用保存的类
  }
};

function changeSysColor(value) {
console.log("value",value)
  if (value == 'dark') {
    setHtmlClass(value)
    // 当前为手动黑暗模式
    toggleDark();
  } else {
    // 明亮颜色调整
      // 设置 <html> 元素的类并存储到 localStorage
      setHtmlClass(value)
  }
}
// 函数：设置和存储当前类
function setHtmlClass(className) {
    document.documentElement.className = className; // 设置 <html> 的类
    localStorage.setItem('htmlClass', className); // 存储到 localStorage
}
</script>

<template>
  <el-container style="height: 100vh;">
    <!-- <SideBar/> -->
    <el-header class="header">

      <!-- <i class="iconfont icon-touxiang"></i> -->

      <el-dropdown>
        <span class="el-dropdown-link">
          <div style="color:#ffffff;">修改颜色</div>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(item, index) in colorList" :key="index" @click="changeSysColor(item.value)" value="item.value">
              <template #default>
                <div><img :src="item.path" width="28">{{ item.name }}</div>
              </template>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-form :inline="true" class="mobile-dontShow">
        <el-form-item :label="item.name" v-for="(item, key) in headerList" :key="key" @click="goLink(item.path)">
        </el-form-item>
      </el-form>
      <div class="tool-bar">
        <div class="mr-right pc-dontShow">
          <i class="iconfont icon-gengduo1 text-color" @click="showMenu"></i>
        </div>
        <div class="mr-right">
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
    <el-main class="main-vue">
      <RouterView />
    </el-main>
  </el-container>

</template>

<style scoped lang="scss">
.tool-bar {
  display: flex;
}

.mr-right {
  margin: auto 0.8rem auto 0;
  line-height: 1;
}
</style>
