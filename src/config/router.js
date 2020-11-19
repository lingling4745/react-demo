// import React from "react"
// import {
//   Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import app from '@src/app'
// import * as client from '@page/client'
// import { createHashHistory } from "history";
// const history = createHashHistory();

// /**
//  * exact :代表当前路由跟path精确匹配，
//  * path='/'一般需要加上，嵌套路由不要加，使用之后，子级路由将不生效
//  */
// export default () =>(
//   <Router history={history}>
//     <Switch>
//       <Route exact  path='/' component={app}></Route>
//       <Route  path='/client' component={client.Client}></Route>
//     </Switch>
//   </Router>
// )


/**
 * 区别于 <HashRouter>，有响应请求的服务器时使用 <BrowserRouter>，使用的是静态文件的服务器，则用 <HashRouter>。
 * 使用 hash 记录导航历史不支持 location.key 和 location.state
 */
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import app from '@src/app'
import * as client from '@page/client'
import { createHashHistory } from "history";
const history = createHashHistory();
export default () =>(
  <Router history={history}>
    <Switch>
      <Route exact  path='/' component={app}></Route>
      <Route exact  path='/client' component={client.Client}></Route>
      <Route exact  path='/params/:id' component={client.Params}></Route>
      <Route exact  path='/query' component={client.Query}></Route>
      <Route path='/render' render={() =><div>56456456</div>}></Route>
    </Switch>
  </Router>
)