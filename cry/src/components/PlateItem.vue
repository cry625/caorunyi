<template>
    <div class="PlateItem-container">
        <div class="PlateItem-title">{{ prop.titleName }}</div>
        <div class="PlateItem-content">
            <!-- <prop.cardType /> -->
            <div v-if="prop.cardType == 'IconCard'">
                <IconCard title="技术栈"/>
            </div>
            <div v-if="prop.cardType == 'TextCard'">
                <TextCard title="技术栈" :col="2"/>
            </div>
            <div v-if="prop.cardType == 'GalleryCard'">
                <GalleryCard title="技术栈" :col="3"/>
            </div>
            <div v-if="prop.cardType == 'ComplexCard'">
                <ComplexCard />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import IconCard from './Card/IconCard.vue';
import TextCard from './Card/TextCard.vue';
import GalleryCard from './Card/GalleryCard.vue';
import ComplexCard from './Card/ComplexCard.vue';
const prop = defineProps({
    titleName: String,
    cardType: String,
})
</script>
<style lang="scss" scoped>

</style>