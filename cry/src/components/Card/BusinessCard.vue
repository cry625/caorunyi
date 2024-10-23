<template>
  <div class="business-card">
    <div class="top-wrapper">
      <div v-if="layout === 'avatar-left'" class="avatar-wrapper">
        <img :src="avatarUrl" alt="Avatar" class="avatar" />
      </div>
      <div
        :class="['info-wrapper', { 'padding-left': layout === 'avatar-left', 'padding-right': layout === 'avatar-right' }]">
        <div class="line-wrapper no-margin-bt">
          <p :style="titleStyle.name" v-if="title.name">{{ title.name }}</p>
          <p :style="titleStyle.tag" v-if="title.tag">{{ title.tag }}</p>
        </div>
        <div class="line-wrapper ">
          <p :style="subtitleStyle.post" v-if="subtitle.post">{{ subtitle.post }}</p>
          <p :style="subtitleStyle.dept" v-if="subtitle.post">{{ subtitle.dept }}</p>
        </div>
        <div class="line-wrapper" v-if="content?.progBar">
          <div class="sub-line-wrapper">
            <div class="progItem-wrapper" v-for="(item, index) in content.progBar" :key="index">
              <div :style="item.labelStyle">{{ item.label }}</div>
              <div class="prog">
                <van-progress :pivot-text="item.value" :color="item.color"
                  :percentage="convertLevelToPercentage(item.value)" :strokeWidth="item.width" />
              </div>
            </div>
          </div>
        </div>
        <div class="line-wrapper" v-if="content?.text">
          <div :style="contentStyle.text" v-if="content.text">擅长领域:{{ content.text }}</div>
        </div>
        <div class="line-wrapper" v-if="content?.assess">
          <div :style="content.assess.assessStyle" >
            <i class="iconfont icon-B-pingfen"></i>
            {{ content.assess.score }}
            <span :style="content.assess.labelStyle" class="label-pd-sm">咨询量</span>
            {{content.assess.consNum}}
            <span :style="content.assess.labelStyle" class="label-pd-sm">调用量</span>
            {{content.assess.callNum}}
          </div>
        </div>
      </div>
      <div v-if="layout === 'avatar-right'" class="avatar-wrapper">
        <img :src="avatarUrl" alt="Avatar" class="avatar" />
      </div>
    </div>
    <div class="additional-text-wrapper" v-if="additionalText">
      <!-- 这里可以放置新的文字内容 -->
      <p :style="additionalTextStyle">擅长领域:{{ additionalText }}</p>
    </div>
    <div class="assess-text-wrapper" v-if="assessObject">
      <!-- 这里可以放置新的文字内容 -->
      <div :style="assessObject.assessStyle" >
            <i class="iconfont icon-B-pingfen"></i>
            {{  assessObject.score  }}
            <span :style="assessObject.labelStyle" class="label-pd">咨询量</span>
            {{ assessObject.consNum}}
            <span :style="assessObject.labelStyle" class="label-pd">调用量</span>
            {{ assessObject.callNum}}
          </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  avatarUrl: {
    type: String,
    required: true,
  },
  title: {
    type: Object,
    required: true,
  },
  subtitle: {
    type: Object,
    required: true,
  },
  content: {
    type: Object,
    required: false,
  },
  additionalText: {
    type: String,
    required: false,
  },
  assessObject:{
    type:Object,
    required: false,
  },
  titleStyle: {
    type: Object,
    default: () => ({ name: { fontSize: '22px', fontWeight: 'bold', color: '#222222',paddingRight:'0.2rem' }, tag: { fontSize: '14px', fontWeight: 'bold', color: '#fff',padding:'0.06rem 0.12rem',background:'linear-gradient(to bottom, #FED892, #FFBA39)' } }),
  },
  subtitleStyle: {
    type: Object,
    default: () => ({ post: { fontSize: '14px', fontWeight: 'normal', color: '#222222',paddingRight:'0.12rem' }, dept: { fontSize: '12px', fontWeight: 'normal', color: '#5C5C5C' } }),
  },
  contentStyle: {
    type: Object,
    default: () => ({ text: { fontSize: '12px', fontWeight: 'normal', color: '#5C5C5C' } }),
  },
  additionalTextStyle: {
    type: Object,
    default: () => ({ fontSize: '14px', fontWeight: 'normal', color: '#5C5C5C' }),
  },
  layout: {
    type: String,
    default: 'avatar-left',
    validator: (value) => ['avatar-left', 'avatar-right'].includes(value),
  },
});
function convertLevelToPercentage(level) {
  switch (level) {
    case "L0":
      console.log("L0")
      return 0;
    case "L1":
      console.log("L1")
      return 25;
    case "L2":
      console.log("L2")
      return 50;
    case "L3":
      console.log("L3")
      return 75;
    case "L4":
      console.log("L4")
      return 100;
    default:
      throw new Error("Invalid level value");
  }
}  
</script>

<style scoped lang="scss">
.business-card {
  width: 98%;
  padding: 10px 16px;
  margin: 10px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);   */
  text-align: left;
}

.top-wrapper {
  display: flex;
  // align-items: center;
  justify-content: space-between;
}

.avatar-wrapper {
  margin-top:0.32rem;
  width: 76px;
  height: 76px;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.info-wrapper {
  flex: 1;
}

.padding-left {
  padding-left: 16px;
}

.padding-right {
  padding-right: 16px;
}

.line-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.no-margin-bt{
  margin-bottom: 0px;
}

.sub-line-wrapper {
  flex-grow: 1;
}
.progItem-wrapper {
    display: flex;
    align-items: center;
    line-height: 1.8;
  }
.prog{
  margin-left:0.2rem;
  flex:0 0 60%;
}
.additional-text-wrapper {
  margin-bottom: 8px;
}

h2 {
  margin: 0;
}

p {
  margin: 4px 0 0;
}
.label-pd{
  padding: 0 0.16rem;
}
.label-pd-sm{
  padding: 0 0.1rem;
}
</style>