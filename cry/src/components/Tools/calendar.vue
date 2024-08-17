<template>
    <div class="introduce">
        <div class="introduce-title">
            删除代码中存在的console.log语句
        </div>
        <div class="introduce-content">
            将需要删除console.log语句的代码片段放入代码编辑器中即可
        </div>
        <ScriptEditor v-model="editorValue" />
    </div>
    <div class="introduce">
        <div class="introduce-content">
            以下是删除console.log语句后的代码片段：
        </div>
        <ScriptEditor v-model="resultValue" />
    </div>
</template>

<script setup>
import ScriptEditor from './scriptEditor.vue';
import { ref, watch } from "vue";
const editorValue = ref("")
const resultValue = ref("")

watch(()=>editorValue.value,()=>{
    removeConLog()
})
function removeConLog(){
    resultValue.value = editorValue.value.replace(/console\.log\(.*?\);?/g, '');
}
</script>

<style scoped lang="scss">
.introduce{
    color: var(--primary-text-black);
    padding: 0 1.6rem 1.2rem 1.6rem;
}
.introduce-title{
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.5;
}
.introduce-content{
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.5;
    padding-bottom: 1rem;
    color: var(--primary-bg-scripteditor);
}
</style>