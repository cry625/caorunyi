<template>
<div class="container">
  <div class="card-list">
    <!-- <PlateItem titleName="项目1" /> -->
    <!-- <PlateItem titleName="项目2" />
    <PlateItem titleName="项目3" />
    <PlateItem titleName="项目4" /> -->
    <IconCard title="前端"/>
  </div>
</div>

</template>
<script setup>
import PlateItem from '@/components/PlateItem.vue';
import IconCard from '@/components/Card/IconCard.vue';
</script>
<style scoped lang="css">
.container{
  width: 60%;
  height: 100%;
  margin:0 auto;
}
</style>