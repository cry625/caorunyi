<template>
    <div class="com-container">
        <div class="title">{{ prop.title }}</div>
        <el-divider></el-divider>
        <div class="icon-group">
            <img :src="item.src" :alt="item.name" v-for="(item, key) in iconList" :key="key">
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'
const prop = defineProps({
    title: String,
})
const iconList = ref([
    { id: 1, src: "/pic/html5.png", name: "html5" },
    { id: 2, src: "/pic/css.png", name: "css" },
    { id: 3, src: "/pic/js.png", name: "js" },
  ])
  </script>
  <style lang="scss" scoped>
  .com-container{
  width: 60%;
  height: 100%;
  margin:0 auto;
  }
  .icon-group{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    img{
        width: 60px;
        height: 60px;
    }
}
:deep(.el-divider--horizontal) {
  margin: 10px 0;
}
</style>