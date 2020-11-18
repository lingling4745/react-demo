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

import React from "react"
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import app from '@src/app'
import * as client from '@page/client'
export default () =>(
  <HashRouter>
    <Switch>
      <Route exact  path='/' component={app}></Route>
      <Route exact  path='/client' component={client.Client}></Route>
    </Switch>
  </HashRouter>
)