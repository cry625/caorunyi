<template>
  <div ref="chartRef" :style="{ width: '100%', height: '400px' }"></div>
</template>

<script>
import * as echarts from 'echarts';
import { ref, onMounted, watch } from 'vue';

export default {
  name: 'EchartsItem',
  props: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
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
              text: '条形图示例'
            },
            tooltip: {},
            xAxis: {
              type: 'category',
              data: props.data.map(item => item.name) // 提取名称
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: '销量',
                type: 'bar',
                data: props.data.map(item => item.value), // 提取值
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
    window.addEventListener('resize', function () {
      myChart.resize();
    });
    onMounted(() => {
      myChart = echarts.init(chartRef.value);
      initChart();
    });

    watch(() => props.data, () => {
      initChart(); // 数据变化时重新绘制图表
    });

    return {
      chartRef
    };
  },
  beforeUnmount() {
    if (myChart) {
      myChart.dispose(); // 清理图表实例
    }
  }
};
</script>

<style scoped>
/* 可以根据需要添加样式 */
</style>
