/**
 *
 * @author Sunhk
 * @date 2020/11/11
 */
import React, {PureComponent} from 'react';
import "element-theme-default"
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar"

import "./index.less"
import {connect} from "umi";


class Dsjecharts extends PureComponent {

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props) {
    super(props);
    this.bar =React.createRef();
  }
                                       
  componentDidMount() {
    this.initBarChart()
  }

componentWillUnmount() {
  clearInterval(this.timerBar)
  this.timerBar = null
}

  componentDidUpdate(prevProps, prevState, snapshot) {
      this.myChart.clear()
      clearInterval(this.timerBar)
      this.timerBar = null
      this.circleIndex = 0
      this.initBarChart()
  }

  initBarChart() {
    const {demoData}=this.props;
    const yValue = ['222']
    const xValue = ['222']
    const tooltipValue = ["222"]
    // 1.00 没有dayRanklist
    // this.dayRankList.dataList.forEach((item)=>{
    //   yValue.push(item.numberValue)
    //   xValue.push(item.name)
    //   tooltipValue.push(item.stringValue)
    // })
    // eslint-disable-next-line no-undef
    this.myChart = echarts.init(document.querySelector(".barChart"))
    const option = {
      tooltip: {
        show: true,
        formatter: (params) => {
          return `${this.dayRankList.moduleTitle  }(${  this.dayRankList.dataList[0].unit  })<br/>${  params.name  }：${  tooltipValue[params.dataIndex]}`
        }
      },
      grid: {
        top: 40,
        bottom: 32,
        containLabel: true
      },
      xAxis: {
        data: xValue,
        offset:20,
        nameLoction: 'start',
        axisLine: {
          show: true,
          onZero: false,
          lineStyle: {
            color: '#047ca6'
          }
        },
        // 坐标值标注
        axisLabel: {
          show: true,
          interval: 0,
          align: 'center',
          margin: -8,
          formatter: (name, index) => {
            let result
            switch (index) {
              case 0:
                // result = `{first|}`
                result = `{demoData.first|}`
                break
              case 1:
                // result = `{second|}`
                result = `{demoData.second|}`
                break
              case 2:
                // result = `{third|}`
                result = `{demoData.third|}`
                break
              default:
                result = ['{a|}',`{normal|}`].join('\n')
                // result = `{normal|}`
                break
            }
            return result
          },
          rich:{
            first: {
              width: 18,
              height: 18,
              padding: [10,0,-10],
              backgroundColor: {
                image: demoData.first
              },
            },
            second: {
              width: 18,
              height: 18,
              backgroundColor: {
                image: demoData.second
              },
            },
            third: {
              width: 18,
              height: 18,
              backgroundColor: {
                image: demoData.third
              },
            },
            a: {
              height: 6
            },
            normal: {
              width: 8,
              height: 8,
              borderRadius: 10,
              backgroundColor: '#fff'
            }
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false,
          textStyle: {
            color: '#fff',
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      series: [{
        type: 'bar',
        barWidth: 20.5,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#08416d" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#057c9b" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#02c9c3" // 100% 处的颜色
            }], false)
          }
        },
        emphasis: {
          // label: {
          //   show: true,
          //   color: '#fff',
          //   fontSize: 11,
          //   position: 'top',
          //   offset: [20,5],
          //   distance: 15,
          //   formatter: (params) => {return params.name}
          // },
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "#414d50" // 0% 处的颜色
            }, {
              offset: 0.6,
              color: "#787f71" // 60% 处的颜色
            }, {
              offset: 1,
              color: "#cdbd90" // 100% 处的颜色
            }], false)
          }
        },
        data: yValue,
        barGap: 0
      }]
    };
    this.myChart.setOption(option)
    window.addEventListener('resize',function () {
      this.myChart.resize()
    })
    const self = this
    if (self.timerBar) {
      clearInterval(self.timerBar)
      self.timerBar = null
    }
    // 设置计时器，每2000ms执行一次dispatchAction方法
    // 实现柱图的轮播高亮
    self.timerBar = setInterval(() => {
      self.showBarName = xValue[self.circleIndex]
      self.myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: self.circleIndex
      })
      self.myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: self.circleIndex-1
      })
      // self.circleIndex<self.dayRankList.dataList.length ? self.circleIndex+= 1 : self.circleIndex=0      1.00  没有定义
    }, 2000)
    this.myChart.on('mouseover',function (params) {
      clearInterval(self.timerBar)
      self.timerBar = null
      self.showBarName = xValue[params.dataIndex]
      self.myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: self.circleIndex - 1
      })
      self.myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: params.dataIndex
      })
      self.circleIndex = params.dataIndex
    })
    this.myChart.on('mouseout', function (params) {
      clearInterval(self.timerBar)
      self.timerBar = null
      self.showBarName = ''
      self.myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: params.dataIndex
      })
      self.circleIndex = params.dataIndex + 1
      self.timerBar = setInterval(() => {
        self.showBarName = xValue[self.circleIndex]
        self.myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: self.circleIndex
        })
        self.myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: self.circleIndex-1
        })
        self.circleIndex<self.dayRankList.dataList.length ? self.circleIndex+=1 : self.circleIndex=0
      }, 2000)
    })
  }

  render() {
   const  {demoData} =this.props;
    console.log(demoData);


    return (
      <div className="barAll">
        <div className="showBarName" />
        <div className="barTitle" />

        {/* eslint-disable-next-line react/no-string-refs */}
        <div className="barChart" ref="this.bar" />
      </div>
    );
    // <div className="showBarName">{showBarName}</div>
    // <div className="barTitle" > {{this.dayRankList.moduleTitle}} </div>
    // {{this.dayRankList.moduleTitle}}

  }
}


export default connect(
  ({jsjModels}) =>{
    return {

      demoData : jsjModels.demoData
    }
  }

)(Dsjecharts)  ;
