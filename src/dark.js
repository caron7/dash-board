import echarts from "echarts";
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["exports", "echarts"], factory);
  } else if (
    typeof exports === "object" &&
    typeof exports.nodeName !== "string"
  ) {
    // CommonJS
    factory(exports, require("echarts"));
  } else {
    // Browser globals
    factory({}, echarts);
  }
})(this, function(exports, echarts) {
  var log = function(msg) {
    if (typeof console !== "undefined") {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log("ECharts is not Loaded");
    return;
  }
  echarts.registerTheme("dark", {
    color: [
      "#dd6b66",
      "#759aa0",
      "#e69d87",
      "#8dc1a9",
      "#ea7e53",
      "#eedd78",
      "#73a373",
      "#73b9bc",
      "#7289ab",
      "#91ca8c",
      "#f49f42"
    ],
    backgroundColor: "rgba(0,0,0,0)",
    textStyle: {},
    title: {
      textStyle: {
        color: "#ffffff"
      },
      subtextStyle: {
        color: "#ffffff"
      }
    },
    line: {
      itemStyle: {
        normal: {
          borderWidth: 1
        }
      },
      lineStyle: {
        normal: {
          width: 2
        }
      },
      symbolSize: 4,
      symbol: "emptyCircle",
      smooth: false
    },
    radar: {
      itemStyle: {
        normal: {
          borderWidth: 1
        }
      },
      lineStyle: {
        normal: {
          width: 2
        }
      },
      symbolSize: 4,
      symbol: "emptyCircle",
      smooth: false
    },
    bar: {
      itemStyle: {
        normal: {
          barBorderWidth: "0",
          barBorderColor: "#ffffff"
        },
        emphasis: {
          barBorderWidth: "0",
          barBorderColor: "#ffffff"
        }
      }
    },
    pie: {
      itemStyle: {
        normal: {
          borderWidth: "0",
          borderColor: "#ffffff"
        },
        emphasis: {
          borderWidth: "0",
          borderColor: "#ffffff"
        }
      }
    },
    scatter: {
      itemStyle: {
        normal: {
          borderWidth: "0",
          borderColor: "#ffffff"
        },
        emphasis: {
          borderWidth: "0",
          borderColor: "#ffffff"
        }
      }
    },
    boxplot: {
      itemStyle: {
        normal: {
          borderWidth: "0",
          borderColor: "#ffffff"
        },
        emphasis: {
          borderWidth: "0",
          borderColor: "#ffffff"
        }
      }
    },
    parallel: {
      itemStyle: {
        normal: {
          borderWidth: "0",
          borderColor: "#ffffff"
        },
        emphasis: {
          borderWidth: "0",
          borderColor: "#ffffff"
        }
      }
    },
    sankey: {
      itemStyle: {
        normal: {
          borderWidth: "0",
          borderColor: "#ffffff"
        },
        emphasis: {
          borderWidth: "0",
          borderColor: "#ffffff"
        }
      }
    },
    funnel: {
      itemStyle: {
        normal: {
          borderWidth: "0",
          borderColor: "#ffffff"
        },
        emphasis: {
          borderWidth: "0",
          borderColor: "#ffffff"
        }
      }
    },
    gauge: {
      itemStyle: {
        normal: {
          borderWidth: "0",
          borderColor: "#ffffff"
        },
        emphasis: {
          borderWidth: "0",
          borderColor: "#ffffff"
        }
      }
    },
    candlestick: {
      itemStyle: {
        normal: {
          color: "#fd1050",
          color0: "#0cf49b",
          borderColor: "#fd1050",
          borderColor0: "#0cf49b",
          borderWidth: 1
        }
      }
    },
    graph: {
      itemStyle: {
        normal: {
          borderWidth: "0",
          borderColor: "#ffffff"
        }
      },
      lineStyle: {
        normal: {
          width: 1,
          color: "#aaaaaa"
        }
      },
      symbolSize: 4,
      symbol: "emptyCircle",
      smooth: false,
      color: [
        "#dd6b66",
        "#759aa0",
        "#e69d87",
        "#8dc1a9",
        "#ea7e53",
        "#eedd78",
        "#73a373",
        "#73b9bc",
        "#7289ab",
        "#91ca8c",
        "#f49f42"
      ],
      label: {
        normal: {
          textStyle: {
            color: "#ffffff"
          }
        }
      }
    },
    map: {
      itemStyle: {
        normal: {
          areaColor: "#eee",
          borderColor: "#444",
          borderWidth: 0.5
        },
        emphasis: {
          areaColor: "rgba(255,215,0,0.8)",
          borderColor: "#444",
          borderWidth: 1
        }
      },
      label: {
        normal: {
          textStyle: {
            color: "#000"
          }
        },
        emphasis: {
          textStyle: {
            color: "rgb(100,0,0)"
          }
        }
      }
    },
    geo: {
      itemStyle: {
        normal: {
          areaColor: "#eee",
          borderColor: "#444",
          borderWidth: 0.5
        },
        emphasis: {
          areaColor: "rgba(255,215,0,0.8)",
          borderColor: "#444",
          borderWidth: 1
        }
      },
      label: {
        normal: {
          textStyle: {
            color: "#000"
          }
        },
        emphasis: {
          textStyle: {
            color: "rgb(100,0,0)"
          }
        }
      }
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#eeeeee"
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#eeeeee"
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ffffff"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#aaaaaa"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["#eeeeee"]
        }
      }
    },
    valueAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#606f78"
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#eeeeee"
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ffffff"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#606f78"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["#eeeeee"]
        }
      }
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#eeeeee"
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#eeeeee"
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ffffff"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#aaaaaa"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["#eeeeee"]
        }
      }
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#eeeeee"
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#eeeeee"
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ffffff"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#aaaaaa"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["#eeeeee"]
        }
      }
    },
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: "#999999"
        },
        emphasis: {
          borderColor: "#666666"
        }
      }
    },
    legend: {
      textStyle: {
        color: "#ffffff"
      }
    },
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: "#ffffff",
          width: "1"
        },
        crossStyle: {
          color: "#ffffff",
          width: "1"
        }
      }
    },
    timeline: {
      lineStyle: {
        color: "#eeeeee",
        width: 1
      },
      itemStyle: {
        normal: {
          color: "#dd6b66",
          borderWidth: 1
        },
        emphasis: {
          color: "#a9334c"
        }
      },
      controlStyle: {
        normal: {
          color: "#eeeeee",
          borderColor: "#eeeeee",
          borderWidth: 0.5
        },
        emphasis: {
          color: "#eeeeee",
          borderColor: "#eeeeee",
          borderWidth: 0.5
        }
      },
      checkpointStyle: {
        color: "#e43c59",
        borderColor: "rgba(194,53,49,0.5)"
      },
      label: {
        normal: {
          textStyle: {
            color: "#eeeeee"
          }
        },
        emphasis: {
          textStyle: {
            color: "#eeeeee"
          }
        }
      }
    },
    visualMap: {
      color: ["#bf444c", "#d88273", "#f6efa6"]
    },
    dataZoom: {
      backgroundColor: "rgba(47,69,84,0)",
      dataBackgroundColor: "rgba(255,255,255,0.3)",
      fillerColor: "rgba(167,183,204,0.4)",
      handleColor: "#a7b7cc",
      handleSize: "100%",
      textStyle: {
        color: "#eeeeee"
      }
    },
    markPoint: {
      label: {
        normal: {
          textStyle: {
            color: "#ffffff"
          }
        },
        emphasis: {
          textStyle: {
            color: "#ffffff"
          }
        }
      }
    }
  });
});
