<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const isAsideShow = ref(false);
const handleMouseEnter = () => {
  isAsideShow.value = true;
};

const handleMouseLeave = () => {
  isAsideShow.value = false;
};

onMounted(() => {
  // 监听鼠标移入/移出事件
  document.querySelector('.aside-container').addEventListener('mouseenter', handleMouseEnter);
});

onBeforeUnmount(() => {
  // 在组件销毁前移除事件监听
  document.querySelector('.aside-container').removeEventListener('mouseenter', handleMouseEnter);
});
</script>

<template>
  <el-container>
    <el-aside
      width="200px"
      class="aside-container"
      :class="{ 'aside-show': isAsideShow }"
      @mouseleave="handleMouseLeave"
    >Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.aside-container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  transition: width 0.3s ease-in-out;
  overflow-x: hidden;
}

.aside-show {
  width: 200px;
  background: #fdcb6e;
}
.el-header{
  background: #fefefe;
}
.aside-container:not(.aside-show) {
  width: 0;
}
</style>
<style>
body {
  margin: 0;
}
</style>
