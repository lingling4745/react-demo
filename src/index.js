import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@mocks/mocks.js'


import { Provider} from 'react-redux'
import store from '@redux/stores/index.js'

import RouterConfig from '@config/router'

import {ThemeContext,themes} from '@config/theme-context'

ReactDOM.render(
  <Provider store={store}>
    <ThemeContext.Provider value={themes.light}>
        <RouterConfig />
    </ThemeContext.Provider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
