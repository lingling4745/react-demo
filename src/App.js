import React from 'react';
import './App.css';
import Home from './page/Home'
import Header from './page/Header'
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import '@style/page.less'

moment.locale('zh-cn')
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <Header />
        <Home/>
      </div>
    </ConfigProvider>
  );
}

export default App;
