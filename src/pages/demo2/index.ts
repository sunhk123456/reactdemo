import React, {Component} from 'react';
import {connect} from 'umi';
import {ConnectState} from '@/models/connect';

class Index extends Component {
  render(): React.ReactNode {
  return (
    "div"
  );
  }
}

export default connect(
  ({demo2Models}:ConnectState)=>{
    console.log(demo2Models);
    return {
  demoData: demo2Models
}
  }
)(Index);
