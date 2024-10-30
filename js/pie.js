/*大屏*/
(function () {
    'use strict';
    var myChart = echarts.init(document.getElementById('left-mid-nong'));

    // 指定图表的配置项和数据
    var option = {
        tooltip: {},
        legend: [{
                // 设置布局方向
                orient: 'vertical',
                // 文字和图形对齐方式
                align: 'left',
                right: '25%',
                top: '10%',
                // 图形形状
                icon: 'circle',
                padding: [20, 0, 0, 0],
                itemGap: 20,
                textStyle: {
                    borderRadius: 100,
                    color:'#fff'
                },
                data: ["无障碍通道", '防滑地面和扶手', "座椅休息区", "无障碍厕所", "简明易懂的标识"]
            },
            {
                orient: 'vertical',
                right: '6%',
                top: '10%',
                padding: [20, 0, 0, 0],
                itemGap: 20,
                // 文字和图形对齐方式
                align: 'left',
                // 图形形状
                icon: 'circle',
                textStyle: {
                    borderRadius: 100,
                    color:'#fff'
                },
                data: ["自动扶梯和电梯", "智能健康监测设备", "公共场所温度调节", "社区紧急呼叫系统", "老年专用健身器材"]
            }
        ],
        series: [{
            name: '销量',
            type: 'pie',
            radius: '50%',
            right: '40%',
            bottom:'10%',
            data: [{
                    value: 200,
                    name: '无障碍通道'
                },
                {
                    value: 156,
                    name: '防滑地面和扶手'
                },
                {
                    value: 400,
                    name: '座椅休息区'
                },
                {
                    value: 991,
                    name: '无障碍厕所'
                },
                {
                    value: 332,
                    name: '简明易懂的标识'
                },
                {
                    value: 100,
                    name: '自动扶梯和电梯'
                },
                {
                    value: 455,
                    name: '智能健康监测设备'
                },
                {
                    value: 378,
                    name: '公共场所温度调节'
                },
                {
                    value: 230,
                    name: '社区紧急呼叫系统'
                },
                {
                    value: 50,
                    name: '老年专用健身器材'
                }
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })

    
})()