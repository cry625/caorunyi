<template>
    <div class="container">
        <div class="content">
            <div class="tabs">
                <div class="tab" v-for="tab in tabsWithColors" :key="tab.name" 
                    :class="{ active: activeTab === tab.name }"
                    :style="{ backgroundColor: tab.color, color: tab.fontcolor, borderBottomColor: activeTab === tab.name ? tab.darkencolor : tab.color, borderBottomWidth: activeTab === '2px', borderBottomStyle: 'solid' }"
                    @click="selectTab(tab.name)">
                    {{ tab.label }}
                </div>
            </div>
            <div class="tab-content" :style="tabStyle">
                <slot :activeTab="activeTab" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import tinycolor from 'tinycolor2';
const props = defineProps({
    tabs: {
        type: Array,
        required: true
    }
});
const selectedTabColor = ref(null); // 用于存储当前选中的标签颜色  
function updateSelectedTabColor(color) {
    selectedTabColor.value = color;
}
// 修改 activeTab 的设置方式，以便同时更新 selectedTabColor  
function selectTab(name) {
    const tab = tabsWithColors.value.find(t => t.name === name);
    if (tab) {
        activeTab.value = name;
        updateSelectedTabColor(tab.color); // 更新选中的标签颜色  
    }
}
// 随机生成颜色
const colors = ['#FFA500', '#FFD700', '#32CD32', '#ff7675']; // 橙色、黄色、绿色、红色
const tabsWithColors = computed(() => {
    return props.tabs.map((tab, index) => ({
        ...tab,
        color: colors[index % colors.length], // 使用索引来循环选择颜色  
        darkencolor: darkenColor(colors[index % colors.length], 10), // 加深颜色  
        fontcolor: darkenColor(colors[index % colors.length], 34)// 加深文字颜色 
    }));
});
function darkenColor(hexColor, amount = 10) {
    const color = tinycolor(hexColor);
    color.darken(amount); // 加深颜色  
    return color.toHexString(); // 返回十六进制字符串  
}
const activeTab = ref(tabsWithColors.value[0].name);

const tabStyle = computed(() => {
    // 将十六进制颜色转换为RGBA（这里我们假设alpha值为0.04）  
    const rgbaColor = hexToRgba(darkenColor(selectedTabColor.value, 50), 0.04);

    // 创建并返回样式对象  
    return {
        backgroundImage: `linear-gradient(to right, ${rgbaColor} 2px, transparent 0), linear-gradient(to bottom, ${rgbaColor} 2px, transparent 0)`,
        backgroundSize: '26px 26px',
        backgroundColor: 'var(--primary-grid-bg-white)'
    };
});
// 辅助函数：将十六进制颜色转换为RGBA  
function hexToRgba(hex, alpha) {
    if (!hex || typeof hex !== 'string' || hex.length < 7) {
        // 返回一个默认值或抛出错误，取决于你的需求  
        console.error('Invalid hex color format:', hex);
        return 'rgba(0, 0, 0, 0)'; // 或者你可以选择返回一个透明的RGBA颜色  
    }

    // 去除可能存在的#字符  
    hex = hex.startsWith('#') ? hex.slice(1) : hex;

    const r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
</script>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  /* flex-direction: column; */
  overflow-x: hidden;
}
.content{
    display: flex;
    flex-direction: column;
    height: calc(100vh - 3.2rem);
}
.tabs {
    display: flex;
    border-bottom: 1px solid var(--primary-text-grey);
    padding-top: 0.26rem;
    padding-left: 0.8rem;
    background: var(--primary-theme-lightblue);
    height: 2.4rem;
}

.tab {
    height: 2.25rem;
    line-height: 2.25rem;
    border-top-left-radius: 0.4rem;
    clip-path: polygon(0 100%, 100% 100%, 76% 0, 0% 0);
    cursor: pointer;
    position: relative;
    margin: 0 4px;
    padding-left: 1.2rem;
    padding-right: 3rem;
    color: var(--primary-text);
}

.tab.active {
    font-weight: bold;
}

.tab-content {
    flex: 1;
    padding: 0.78rem;
}
</style>
