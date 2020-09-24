var option = {
  color: [
    '#feb300', '#28a499'
  ],
  legend: {
    orient: 'vertical',
    bottom: 10,
    left: 'center',
    data: [
      '占用车位', '空闲车位'
    ],
    itemWidth: 16,
    itemHeight: 8,
    textStyle: {
      fontSize: "70%"
    }
  },
  series: [
    {
      type: 'pie',
      center: [
        '50%', '40%'
      ],
      radius: [
        '60%', '70%'
      ],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: [
        {
          value: 335,
          name: '占用车位'
        }, {
          value: 310,
          name: '空闲车位'
        },
      ]
    }
  ]
};
export default option;
