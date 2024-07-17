<template>
    <div class="container">
        <div class="title">{{ prop.titleName }}</div>
        <div class="content">
            <prop.cardType />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const prop = defineProps({
    titleName: String,
    cardType: String,
})
</script>
<style lang="scss" scoped>
.container {}

.title {
    background: #74b9ff;
    height: 60px;
    line-height: 60px;
    font-size: 1rem;
    font-weight: 550;
    color: #fff;
    padding-left: 1.2rem;
    letter-spacing: 2px;
}

.content {
    width: 100%;
    height: 300px;
    background-image: linear-gradient(to right, rgba(60, 10, 30, 0.04) 1px, transparent 0),
        linear-gradient(to bottom, rgba(60, 10, 30, 0.04) 1px, transparent 0);
    background-size: 20px 20px;
}
</style>