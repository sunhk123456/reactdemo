import React, { PureComponent } from 'react';
import styles from './index.less';
import {connect} from 'umi'
import {ConnectState} from "@/models/connect";
import {Dispatch} from "@@/plugin-dva/connect";
import {DemoData} from '@/models/demo';
import LineEcharts from '@/components/line/lineEchart'
import Tab from '@/components/tab/index'

interface Props {
  demoData: DemoData
  dispatch: Dispatch
}

interface State {}

class Demo extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

 componentDidMount(): void {
   const { demoData } = this.props;
   console.log("id");
   console.log(demoData);
   const { dispatch } = this.props;


   dispatch({
     type: 'demoModels/fetchDemoData',
     payload: {
       id:'222',
       list: [{
         value: "商品",
         id: 333
       },{
         value: "食品",
         id: 222
       }]
     },

   })
   // dispatch({
   //   type: 'demoModels/preserveMessage',
   //   payload: {
   //
   //   },
   //
   // })


 }

  render(): React.ReactNode {


    return (<div className={styles.page}><Tab></Tab></div>

    );
  }
}
export default connect(
  ({demoModels}:ConnectState) =>{
    return {

      demoData : demoModels.demoData
      }
  }
    // ( {
    //   demoData: demoModels.demoData
    // })
)(Demo);
