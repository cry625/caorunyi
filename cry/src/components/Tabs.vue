<template>
    <div>
        <div class="tabs">
            <div v-for="tab in tabs" :key="tab.name" class="tab" :class="{ active: activeTab === tab.name }"
                @click="activeTab = tab.name">
                {{ tab.label }}
            </div>
        </div>
        <div class="tab-content">
            <slot :activeTab="activeTab" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    tabs: {
        type: Array,
        required: true
    }
});

const activeTab = ref(props.tabs[0].name);
</script>

<style scoped>
.tabs {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding-top: 10px;;
}

.tab {
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    margin: 10px 20px;
    padding-left: 0.6rem;
    width: 100px;
    line-height: 50px;
    height: 50px;
    cursor: pointer;
    position: relative;
    margin: 0 5px;
    color: rgb(5, 5, 5);
    /* 字体颜色 */
    transition: background-color 0.3s;
    background: #42b983;
}

.tab.active {
    font-weight: bold;
    /* border-bottom: 2px solid #42b983; */
}

.tab::after{
    content:'';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 25px solid  red;            
    border-bottom: 25px solid transparent;
    border-left: 20px solid red;
    border-right: 20px solid #fff;
    right: 0;
}

.tab.active::before {
    background: linear-gradient(90deg, #42b983, #67d0e3);
    /* 激活状态的颜色 */
}

.tab-content {
    padding: 20px;
}
</style>