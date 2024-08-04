<template>
  <div class="container">
    <div class="content">
      <PlateItem titleName="技术栈" cardType="IconCard" />
      <PlateItem titleName="获奖经历" cardType="TextCard" />
      <PlateItem titleName="项目经验" cardType="GalleryCard" />
      <PlateItem titleName="个人经历" cardType="ComplexCard" />
    </div>
  </div>

</template>
<script setup>
import PlateItem from '@/components/PlateItem.vue';
</script>
<style scoped lang="css"></style>