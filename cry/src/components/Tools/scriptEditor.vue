<template>
  <prism-editor class="my-editor" v-model="interValue" :highlight="highlighter" line-numbers
    ref="editor"></prism-editor>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere
const mylog = (...content) => {
  console.log("editor", ...content);
};
const emit = defineEmits(['update:modelValue']);
import { highlight, languages } from "prismjs/components/prism-core";
import 'prismjs/components/prism-clike';
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles
const highlighter = (code) => highlight(code, languages.bash); //returns html
const editor = ref()
const props = defineProps({
  modelValue: { type: String, default: "" }
})

const interValue = computed({
  get() { return props.modelValue },
  set(val) { emit("update:modelValue", val) }
})

</script>

<style lang="less" scoped>
.my-editor {
  background: var(--primary-bg-scripteditor);
  color: var(--primary-text-grey);

  font-family:
    Fira code,
    Fira Mono,
    Consolas,
    Menlo,
    Courier,
    monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 1rem;
  // height: 400px;
  flex-grow: 1;
  border-radius: 14px;
  border: 4px solid var(--primary-theme-white);
  box-sizing: border-box;
  box-shadow: #999999 0 0 8px;
  height: 40vh;
  overflow-y: scroll;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE 10+ */
  ::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
  }
}

.btn-group {
  width: 98%;
  margin: 10px auto;
}
</style>

<style>
.prism-editor__textarea:focus {
  outline: none;
}
</style>