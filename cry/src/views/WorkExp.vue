<template>
  <el-button type="primary" @click="isShow=true">count is: {{ count }}</el-button>
  <el-dialog v-model="isShow">
    <div>hhh</div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="isShow = false">Cancel</el-button>
        <el-button type="primary" @click="func()">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  </template>
  <script setup>
 import { ElMessageBox } from 'element-plus';
import { ref } from 'vue';
  const isShow=ref(false)
  function func(){
    ElMessageBox.confirm(
      '是否删除','警告',
      {
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }
    ).then(()=>{console.log("hhhh")}).catch(()=>{console.log("wwww")})
  }
  </script>
  <style scoped lang="css">
  </style>