<template>
  <div>
    <EchartsItem
      type="pie"
      :data="pieData"
    />
    <EchartsItem
      type="bar"
      :data="barData"
    />
    <EchartsItem
      type="donut"
      :data="donutData"
    />
  </div>
</template>

<script>
import EchartsItem from '@/components/EchartsItem.vue';

export default {
  components: {
    EchartsItem
  },
  data() {
    return {
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      barData: [
        { name: '苹果', value: 5 },
        { name: '香蕉', value: '-' },
        { name: '橘子', value: 36 },
        { name: '梨', value: 10 },
        { name: '葡萄', value: 10 }
      ],
      donutData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ]
    };
  }
};
</script>

<style scoped lang="css"></style>