/**
 * @Description: models 例子文件
 *
 * @author: 喵帕斯
 *
 * @date: 2020/7/23
 */

import { queryDemoData ,preserveMessage} from '@/services/demo';

import { Reducer, Effect } from '@@/plugin-dva/connect';

export interface listItem {
  value: string
  id: number
}

export interface DemoData {
  id: string
  list: listItem[]

}

export interface demoModelsState {
  demoData: DemoData;
}


export interface demoModelsType {
  namespace: string;
  state: demoModelsState;
  effects: {
    fetchDemoData: Effect;
    preserveMessage: Effect;
  };
  reducers: {
    saveDemoData: Reducer;
  };
}


 const demo: demoModelsType = {
  namespace: 'demoModels',
  state: {
    demoData: {
      id: '123',
      list:[{value:"你好",id:1}]
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
    *preserveMessage({ payload, callback }, { call, put }) {
      const response = yield call(preserveMessage, payload);
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
