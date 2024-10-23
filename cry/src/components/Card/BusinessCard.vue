<template>  
  <div :class="['business-card', { 'avatar-right': layout === 'avatar-right' }]">  
    <div v-if="layout === 'avatar-left'" class="avatar-wrapper">  
      <img :src="avatarUrl" alt="Avatar" class="avatar" />  
    </div>  
    <div class="info-wrapper" :class="{'padding-left':layout==='avatar-left','padding-right':layout==='avatar-right'}">  
      <h2 :style="titleStyle">{{ title }}</h2>  
      <p :style="subtitleStyle">{{ subtitle }}</p>  
    </div>  
    <div v-if="layout === 'avatar-right'" class="avatar-wrapper">  
      <img :src="avatarUrl" alt="Avatar" class="avatar" />  
    </div>  
  </div>  
</template>  
  
<script>  
export default {  
  name: 'BusinessCard',  
  props: {  
    avatarUrl: {  
      type: String,  
      required: true  
    },  
    title: {  
      type: String,  
      required: true  
    },  
    subtitle: {  
      type: String,  
      required: true  
    },  
    titleStyle: {  
      type: Object,  
      default: () => ({ fontSize: '18px', fontWeight: 'bold', color: '#333' })  
    },  
    subtitleStyle: {  
      type: Object,  
      default: () => ({ fontSize: '14px', fontWeight: 'normal', color: '#666' })  
    },  
    layout: {  
      type: String,  
      default: 'avatar-left',  
      validator: value => ['avatar-left', 'avatar-right'].includes(value)  
    }  
  }  
}  
</script>  
  
<style scoped>  
.business-card {  
  display: flex;  
  align-items: center;  
  justify-content: space-between;  
  padding: 16px;  
  border: 1px solid #ddd;  
  border-radius: 8px;  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
  width: 300px;  
  text-align: left;  
}  
  
.avatar-wrapper {  
  width: 80px;  
  height: 80px;  
}  
  
.avatar {  
  width: 100%;  
  height: 100%;  
  border-radius: 50%;  
  object-fit: cover;  
}  
  
.info-wrapper {  
  flex: 1;  
  /* padding-left: layout === 'avatar-left' ? '16px' : '0';  
  padding-right: layout === 'avatar-right' ? '16px' : '0';   */
  /* padding: layout ==='avatar-left'?'0 0 0 16px':'0 16px 0 0'; */
}  
.padding-left{
  padding: 0 0 0 16px;
}
.padding-right{
  padding: 0 16px 0 0;
}
h2 {  
  margin: 0;  
}  
  
p {  
  margin: 4px 0 0;  
}  
</style>