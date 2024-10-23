<template>
  <div>
    <BusinessCard  
      avatarUrl="/public/icon/avatar.png"  
      title="John Doe"  
      subtitle="Software Engineer"  
      :titleStyle="{ fontSize: '22px', fontWeight: '600', color: '#1a0dab' }"  
      :subtitleStyle="{ fontSize: '16px', fontWeight: 'normal', color: '#555' }"  
      layout="avatar-left"  
    />  
    <BusinessCard  
      avatarUrl="/public/icon/avatar.png"  
      title="Jane Smith"  
      subtitle="Product Manager"  
      :titleStyle="{ fontSize: '22px', fontWeight: 'bold', color: '#d9534f' }"  
      :subtitleStyle="{ fontSize: '14px', fontWeight: '300', color: '#ccc' }"  
      layout="avatar-right"  
    />  
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BusinessCard from '@/components/Card/BusinessCard.vue';
</script>

<style scoped lang="css"></style>