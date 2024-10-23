<template>
  <div>
    <BusinessCard avatarUrl="src/assets/images/avatar_talent.png" 
        :title="{ name: '专家姓名', tag: '集团高级专家-IP' }"
        :titleStyle="{ name: { fontSize: '18px', fontWeight: 'bold', color: '#222222',paddingRight:'0.2rem' }, tag: { fontSize: '12px', fontWeight: 'bold', color: '#fff',padding:'0.04rem 0.1rem',background:'linear-gradient(to bottom, #FED892, #FFBA39)'} }"
        :subtitle="{ dept: '网络操作维护中心', post: '软件开发工程师' }" 
        :subtitleStyle="{ post: { fontSize: '12px', fontWeight: 'normal', color: '#222222',paddingRight:'0.12rem' }, dept: { fontSize: '10px', fontWeight: 'normal', color: '#5C5C5C' } }"
        :content="{
          text: '利用标记模板字面量（JavaScript 的最新添加）和 CSS 的强大功能，styled-components 允许你编写实际的 CSS 代码来设置组件的样式。 它还删除了组件和样式之间的映射',
          progBar: [{ label: '云网工程师', value: 'L4', color: '#3C96E9', strokeWidth: '6', labelStyle: { color: '#3C96E9', fontSize: '10px', fontWeight: 'bold' } },
          { label: '研发工程师', value: 'L2', color: '#00B894', strokeWidth: '6', labelStyle: { color: '#00B894', fontSize: '10px', fontWeight: 'bold' } },
          { label: '产数工程师', value: 'L0', color: '#5350D3', strokeWidth: '6', labelStyle: { color: '#5350D3', fontSize: '10px', fontWeight: 'bold' } }
          ],
          assess: { score: 9.7, consNum: 1233, callNum: 456, assessStyle: { color: '#FDCB6E', fontSize: '12px', fontWeight: 'bold' },labelStyle:{ color: '#5C5C5C', fontSize: '10px', fontWeight: 'bold' }  }
        }" layout="avatar-left" />
      <BusinessCard avatarUrl="src/assets/images/avatar_talent.png" 
        :title="{ name: '专家姓名', tag: '集团高级专家-IP' }"
        :subtitle="{ dept: '网络操作维护中心', post: '软件开发工程师' }" 
        :content="{
          progBar: [{ label: '云网工程师', value: 'L4', color: '#3C96E9', strokeWidth: '8', labelStyle: { color: '#3C96E9', fontSize: '12px', fontWeight: 'bold' } },
          { label: '研发工程师', value: 'L2', color: '#00B894', strokeWidth: '8', labelStyle: { color: '#00B894', fontSize: '12px', fontWeight: 'bold' } },
          { label: '产数工程师', value: 'L0', color: '#5350D3', strokeWidth: '8', labelStyle: { color: '#5350D3', fontSize: '12px', fontWeight: 'bold' } }
          ]
        }"
        additionalText="利用标记模板字面量（JavaScript 的最新添加）和 CSS 的强大功能，styled-components 允许你编写实际的 CSS 代码来设置组件的样式。 它还删除了组件和样式之间的映射 - 使用组件作为底层样式构造再简单不过了！"
        :assessObject="{ score: 9.7 , consNum: 1233, callNum:456, assessStyle:{ color: '#FDCB6E', fontSize: '14px', fontWeight: 'bold' },labelStyle:{ color: '#5C5C5C', fontSize: '12px', fontWeight: 'bold' } }"
        layout="avatar-right" 
        />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BusinessCard from '@/components/Card/BusinessCard.vue';
</script>

<style scoped lang="css"></style>