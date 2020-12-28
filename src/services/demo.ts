import request from '../utils/request';
import Url from './url';

interface paramsType extends ReadableStream {}

// 例子数据
export async function queryDemoData(params: paramsType) {
  // return request(`${Url.evaluationOverview.url}/moduleAnalysis`, {
  //   //   method: 'POST',
  //   //   body: params,
  //   // });
  console.log(params);
  return new Promise(resolve => {
    const resData = {
      data:params,
      code: '200',
      message: '成功',
    };
    resolve(resData);
  });

}
export async function preserveMessage(params: paramsType) {
  return request(`http://10.249.216.52:8025/cloud/ProductQuestionnaireSurvey/getData`, {
  // return request(`http://10.249.216.52:8025/cloud/ProductQuestionnaireSurvey/phoneList`, {
      method: 'POST',
      body: params,
    });
  // console.log(params);
  // return new Promise(resolve => {
  //   const resData = {
  //     data:params,
  //     code: '200',
  //     message: '成功',
  //   };
  //   resolve(resData);
  // });

}
