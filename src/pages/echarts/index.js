import React, {Component} from 'react';
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar"
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Echarts extends Component {

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(porps) {
    super(porps);
    this.mainstyle= React.createRef();
    if (porps.style){
      this.changestyle();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.style){

      this.changestyle();
    }else {
      this.recoverestyle();

    }
  }

  // 修改样式
  changestyle=()=>{
    this.mainstyle.current.style.cssText=`background:pink`

  }

  recoverestyle=()=>{
    this.mainstyle.current.style.cssText=``
  }

    componentDidMount() {
        const MyChart =echarts.init(document.getElementById("main"))
        MyChart.setOption({
           tooltip:{},
            xAxis:{
                data:['裤子','袜子','帽子','卫衣','羽绒服']
            },
            yAxis:{},
            series:[{
                name:'销量',
                type:'bar',
                data:[5,12,44,18,33]
            }]

        });
    }

    render() {
      return (
          <div>
            <div id="main" style={{width:400,height:400}} ref={this.mainstyle} />
            {/* eslint-disable-next-line react/button-has-type */}
            <button type="submit" onClick={this.props.changeback} >Nihao</button>
          </div>
        );
    }
}

export default Echarts;
