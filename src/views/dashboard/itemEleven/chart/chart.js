var option = {
  color: [
    "rgba(69,246,255,1)", "rgba(49,88,255,1)"
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
    right: "3%",
    top: "19%",
    bottom: "3%",
    containLabel: true
  },
  legend: {
    data: [
      "湿度", "温度"
    ],
    top: "6%",
    itemWidth: 16,
    itemHeight: 8,
    itemGap: 20,
    textStyle: {
      fontSize: "70%"
    }
  },
  xAxis: {
    type: "category",
    data: [],
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false,
      fontSize: "60%"
    },
    boundaryGap: false
  },
  dataZoom: {
    type: 'inside',
    start: 0,
    end: 10000
  },
  yAxis: [
    {
      name: "湿度（%）",
      nameTextStyle: {
        color: "#48f1ff",
        fontSize: "65%",
        verticalAlign: "center",
        padding: [0, 0, 0, 20]
      },
      type: "value",
      scale: true,
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        fontSize: "60%"
      }
    }, {
      name: "温度（℃）",
      nameTextStyle: {
        color: "#2f55f6",
        fontSize: "65%",
        verticalAlign: "center",
        padding: [0, 20, 0, 0]
      },
      splitLine: {
        show: false
      },
      type: "value",
      scale: true,
      axisLabel: {
        fontSize: "60%"
      },
      axisLine: {
        show: false
      }
    }
  ],
  series: [
    {
      data: [
        120,
        200,
        150,
        80,
        70,
        110,
        130
      ],
      type: "bar"
    }
  ]
};
export default option;
