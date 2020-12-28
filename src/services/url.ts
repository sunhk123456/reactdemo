interface urlType {
  [k: string]: {
    title: string;
    url: string;
  };
}

const Url: urlType = {
  login: {
    title: '登录接口',
    url: 'http://10.125.1.51:8021',
  },
  analysis: {
    title: '竞品分析,投诉分析,舆情分析的筛选条件和布局接口',
    url: 'http://10.125.1.51:8021/v4/hbase/mycomments',
  },
  productIndex: {
    title: '产品指标对比',
    url: 'http://10.125.1.54:8036/v4/hbase/comparisonOfindicators',
  },
  sun: {
    title: '旭日图',
    url: 'http://10.125.1.51:8021/v4/hbase/mycomments',
  },
};

export default Url;
export { Url };
