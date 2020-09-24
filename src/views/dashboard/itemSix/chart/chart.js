var option = {
  color: [
    {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: "#e5901d" // 0% 处的颜色
        },
        {
          offset: 1,
          color: "#e5901d" // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    },
    "#59c3dc"
  ],
  legend: {
    data: ["告警数量"],
    top: "5%",
    right: "8%",
    itemWidth: 16,
    itemHeight: 8,
    textStyle: {
      fontSize: "70%"
    }
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#283b56"
      }
    }
  },
  grid: {
    left: "5%",
    right: "5%",
    top: "25%",
    bottom: "10%",
    containLabel: true
  },

  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      fontSize: "70%"
    },
    boundaryGap: false
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        width: 0.5
      }
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      fontSize: "70%"
    }
  },
  line: {
    symbolSize: 3,
    symbol: "circle"
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar"
    }
  ]
};
export default option;
