/**
 * @Description: models 例子文件
 *
 * @author: 喵帕斯
 *
 * @date: 2020/7/23
 */

import { queryDemoData } from '@/services/demo';
// eslint-disable-next-line import/no-duplicates
import first from '@/assets/images/login/code.png'
// eslint-disable-next-line import/no-duplicates
import second from '@/assets/images/login/code.png'
// eslint-disable-next-line import/no-duplicates
import third from '@/assets/images/login/code.png'
// eslint-disable-next-line import/no-duplicates
import normal from '@/assets/images/login/code.png'



const demo = {
  namespace: 'jsjModels',
  state: {
    demoData: {
      rankData: '',
      xName: [],
      yValue: [],
      timerBar: null,
      circleIndex: 0,
      showBarName: '', // 展示的x轴
      imgList: [first,second,third,normal]// first,second,third,normal
    },
  },
  effects: {
    //  请求模块数据
    *fetchDemoData({ payload, callback }, { call, put }) {
      const response = yield call(queryDemoData, payload);
      yield put({
        type: 'saveDemoData',
        payload: response.data,
      });
      if(callback) callback(response.data)
    },
  },
  reducers: {
    // 保存模块数据
    saveDemoData(state, { payload }) {
      return {
        ...state,
        demoData: payload,
      };
    },


  },
};


export default demo;
