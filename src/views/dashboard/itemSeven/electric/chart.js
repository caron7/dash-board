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
          color: "#8efdd9" // 0% 处的颜色
        },
        {
          offset: 1,
          color: "#336edb" // 100% 处的颜色
        }
      ],
      globalCoord: false // 缺省为 false
    }
  ],
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
    left: "3%",
    right: "0",
    top: "25%",
    bottom: "5%",
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
      fontSize: "60%"
    }
  },
  yAxis: {
    name: "单位：KW.h",
    nameTextStyle: {
      color: "#fff",
      fontSize: "65%",
      verticalAlign: "center",
      padding: [0, 0, 0, 20]
    },
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
      fontSize: "60%"
    }
  },
  line: {
    symbolSize: 4,
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
