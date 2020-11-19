import React,{useState,useEffect,useRef,ChatAPI} from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
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

let app = 1;
function ListItemLink({to,...rest}){
  return (
    <Route
    to ={to}
    children = {({match}) =>(
      <li className={match?'active':""}>
        <Link to={to} {...rest}>{to}</Link>
      </li>
    )}
    ></Route>
  )
}


// export default class App extends React.Component{
//   constructor(props,context){
//     super(props)
//   }
//   render(){
//     return (
//       <ConfigProvider locale={zhCN}>
//         <div className="App">
//           <Header {...this.props}/>
//           <Home/>
//         </div>
//       </ConfigProvider>
//     )
//   }
// }

/**
 * 
 * useState 是允许你在 React 函数组件中添加 state 的 Hook,类似component中的state
 * useEffect可以看作componentWillUnmount,componentDidMount,componentDidUpdate三个函数的结合
 *            并且在执行 DOM 更新之后调用它
 */
function App(props){
  let [state,setState] = useState(0);

/**
 *  组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这一点，useEffect 函数需返回一个清除函数
    如果组件多次渲染（通常如此），则在执行下一个 effect 之前，上一个 effect 就已被清除
    添加[props.source]，只有在props.source有变化的时候,才调用里面的方法
 */

// useEffect(() => {
//   function handleStatusChange() {
//   }

//   ChatAPI.subscribeToFriendStatus(props.id, handleStatusChange);
//   return () => {
//     ChatAPI.unsubscribeFromFriendStatus(props.id, handleStatusChange);
//   };
// }, [props.id]);


  let domRef = useRef(null);
  function  onButtonClick(){
    domRef.current.focus();
  }

  return(
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <Header {...props}>
          <div>show</div>
          <div>this.props.Children</div>
        </Header>
        <p onClick={() => setState(state + 2)}>{state}</p>
        <input ref={domRef}></input>
        <button onClick={onButtonClick}>Focus the input</button>
        <Router>
          <ul>
            <ListItemLink to="/somewhere" />
            <ListItemLink to="/somewhere-else" />
          </ul>
        </Router>
        <Home/>
      </div>
    </ConfigProvider>
  )
}


export default App;
