<template>
  <div class="introduce">
    <div class="introduce-title">
      删除代码中存在的console.log语句
    </div>
    <div class="introduce-content">
      <span>将需要删除console.log语句的代码片段放入代码编辑器中：</span>
      <el-button color="var(--primary-theme-blue)" :dark="isDark" size="middle" @click="clearEditorValue">
        <template #icon>
          <i class="iconfont icon-15qingkong-1"></i>
        </template>
      </el-button>
    </div>
    <ScriptEditor v-model="editorValue" />
  </div>
  <div class="introduce">
    <div class="introduce-content">
      <span>以下是删除console.log语句后的代码片段：</span>
      <el-button color="var(--primary-theme-blue)" :dark="isDark" size="middle" @click="copyResult">
        <template #icon>
          <i class="iconfont icon-fuzhi"></i>
        </template>
      </el-button>
    </div>
    <ScriptEditor v-model="resultValue" />
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import ScriptEditor from './scriptEditor.vue';
import { ref, watch } from "vue";
const editorValue = ref("")
const resultValue = ref("")
watch(() => editorValue.value, () => {
  removeConLog()
})
function removeConLog() {
  resultValue.value = editorValue.value.replace(/console\.log\(.*?\);?/g, '');
}
function clearEditorValue(){
    editorValue.value=''
    if (!editorValue.value) {
        ElMessage({
            message: '已清空',
            type: 'success',
        });
        return;
    }
}
function copyResult() {
  if (!resultValue.value) {
    ElMessage({
      message: '请先输入待修改的代码！',
      type: 'warning',
    });
    return;
  }
  navigator.clipboard.writeText(resultValue.value)
    .then(() => {
      console.log('复制成功！');
      ElMessage({
        message: '复制成功！',
        type: 'success',
      })
      // 你可以在这里添加一些用户反馈，比如弹出提示
    })
    .catch(err => {
      ElMessage({
        message: '复制失败！'+err,
        type: 'error',
      })
    });
}
</script>

<style scoped lang="scss">
.introduce {
  color: var(--primary-text-black);
  padding: 0 1.6rem 1.2rem 1.6rem;
}

.introduce-title {
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.5;
}

.introduce-content {
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5;
  padding-bottom: 1rem;
  color: var(--primary-bg-scripteditor);
}
</style>