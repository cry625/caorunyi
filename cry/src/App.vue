<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import SideBar from "@/components/SideBar.vue"
import { useRouter, useRoute } from "vue-router";
import { useSysStore } from "@/stores/sys";
import { ElMessage } from 'element-plus/es';

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
  { name: '红色', id: 0, path: 'public/icon/color_icon/red.png',package:'src/assets/theme/redSys' },
  { name: '灰色', id: 1, path: 'public/icon/color_icon/grey.png'},
  { name: '绿色', id: 2, path: 'public/icon/color_icon/green.png' ,package:'src/assets/theme/greenSys'},
  { name: '橙色', id: 3, path: 'public/icon/color_icon/orange.png' },
  { name: '蓝色', id: 4, path: 'public/icon/color_icon/blue.png' },
  { name: '黑色', id: 5, path: 'public/icon/color_icon/black.png' },
])
const showMenu=ref(false)
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
//修改系统颜色
function changeSysColor(id){
  
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
                <el-dropdown-item v-for="(item, index) in colorList" :key="index" @click="changeSysColor(item.id)">
                  <template #default>
                    <div><img :src="item.path"  width="28">{{ item.name }}</div>
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
    <el-main>
      <RouterView />
    </el-main>
  </el-container>

</template>

<style scoped lang="scss">
.tool-bar {
  display: flex;
}
.mr-right{
  margin: auto 0.8rem auto 0;
  line-height: 1;
}
</style>
