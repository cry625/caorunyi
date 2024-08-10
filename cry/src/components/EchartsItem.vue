<template>
  <div ref="chartRef" :style="{ width: '100%', height: '400px' }"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, watch, defineProps, onBeforeUnmount } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
});

const chartRef = ref(null);
let myChart = null;

const initChart = () => {
  let option;
  switch (props.type) {
    case 'pie':
      option = {
        title: {
          text: '饼状图示例',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: props.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      break;
    case 'bar':
      option = {
        title: {
          text: '条形图示例',
          left: 'center'
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: props.data.map(item => item.name)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '销量',
            type: 'bar',
            data: props.data.map(item => item.value),
            itemStyle: {
              color: '#91cc75',
              shadowColor: '#91cc75',
              borderType: 'dashed',
              opacity: 0.5
            }
          }
        ]
      };
      break;
      case 'line':
      option = {
        title: {
          text: '折线图示例',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: props.data.map(item => item.name)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '销量',
            type: 'line',
            data: props.data.map(item => item.value),
            itemStyle: {
              color: 'red'
            },
            smooth: true
          }
        ]
      };
      break;
    case 'donut':
      option = {
        title: {
          text: '环状图示例',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            data: props.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      break;
    default:
      console.error('Unsupported chart type:', props.type);
      return;
  }

  myChart.setOption(option);
};
//重新计算图表大小
const resizeChart = () => {
  myChart.resize();
};
//当数据发生变化时，重新进行初始化图像
watch(() => props.data, () => {
  initChart();
}); 
//当组件挂载后执行，用chartRef创建的响应式引用指向的DOM元素，初始化图表实例
onMounted(() => {
  myChart = echarts.init(chartRef.value);
  initChart();
  window.addEventListener('resize', resizeChart);
});
//组件卸载之前清理echarts实例释放资源
onBeforeUnmount(() => {
  if (myChart) {
    myChart.dispose();
  }
});
</script>

<style scoped lang="scss">
/* 可以根据需要添加样式 */
</style>
