import { Tabs } from 'antd';
import styles from './index.less'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Index = () => (
  <div className={styles.pages}>
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
    </TabPane>
    <TabPane tab="Tab 2" key="2">
    </TabPane>
    <TabPane tab="Tab 3" key="3">
    </TabPane>
  </Tabs>
  </div>
);
export default Index;
