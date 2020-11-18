import { createStore } from 'redux'

import todoApp from '../reducer/index'
let store = createStore(todoApp)
export default store;