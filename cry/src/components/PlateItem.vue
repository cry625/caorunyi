<template>
    <div class="container">
        <div class="title">{{ prop.titleName }}</div>
        <div class="content">
            <!-- <prop.cardType /> -->
            <!-- <div v-if="prop.cardType == 'IconCard'">
                <IconCard />
            </div>
            <div v-if="prop.cardType == 'TextCard'">
                <TextCard />
            </div>
            <div v-if="prop.cardType == 'GalleryCard'">
                <GalleryCard />
            </div>
            <div v-if="prop.cardType == 'ComplexCard'">
                <ComplexCard />
            </div> -->
            <component :is="prop.cardType" v-bind="prop"/>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import IconCard from './Card/IconCard.vue';
const prop = defineProps({
    titleName: String,
    cardType: String,
})
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    overflow-x: hidden;
}

.title {
    background: var(--primary-theme-lightblue);
    height: 60px;
    line-height: 60px;
    font-size: 1rem;
    font-weight: 550;
    color: var(--primary-text);
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