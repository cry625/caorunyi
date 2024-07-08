<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <el-container>
    <el-aside width="200px" class="aside-container">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-container {
  height: 100vh;
}
.aside-container {
  position: relative;
  left: -160px; /* 将 aside 部分向左偏移 */
  transition: left 0.3s ease-in-out; /* 添加过渡动画 */
}

.aside-container:hover {
  left: 0; /* 当鼠标移入时,将 aside 部分移回到原位置 */
}

</style>
<style>
body{
  margin:0;
}
</style>
