<template>
  <div class="container">
      <el-tabs v-model="activeTab" type="border-card" class="custom-tabs">
        <el-tab-pane label="标签一" name="tab1">
          这是标签一的内容。
        </el-tab-pane>
        <el-tab-pane label="标签二" name="tab2">
          这是标签二的内容。
        </el-tab-pane>
        <el-tab-pane label="标签三" name="tab3">
          这是标签三的内容。
        </el-tab-pane>
      </el-tabs>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const activeTab=ref('tab1')
</script>
<style scoped lang="css">
.custom-tabs .el-tabs__header {
  border: none;
  margin-bottom: 20px;
}

.custom-tabs .el-tabs__item {
  position: relative;
  padding: 10px 20px;
  margin-right: 10px;
  background: white;
}

.custom-tabs .el-tabs__item:before {
  content: '';
  position: absolute;
  top: 0;
  left: -10px; /* 调整到左侧 */
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid blue; /* 梯形的颜色 */
}

.custom-tabs .el-tabs__item.is-active {
  background-color: #409eff; /* 活动标签的背景色 */
  color: white; /* 活动标签的文字颜色 */
}

.custom-tabs .el-tabs__item.is-active:before {
  border-right-color: #409eff; /* 活动标签的梯形颜色 */
}
</style>