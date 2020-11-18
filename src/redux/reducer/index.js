import {combineReducers} from 'redux'
import {ADD_TODO,ADD_LIST} from '../action/index.js'

const userInfo = {}
function setUserInfo (state = userInfo,action){
  switch(action.type){
    case ADD_TODO:
      return Object.assign({},userInfo,action.text);
    default: return state
  }
}
const list = [];
function setList (state = list,action){
  switch(action.type){
    case ADD_LIST:
      return Object.assign([],list,action.text);
    default: return state
  }
}
const todoApp = combineReducers({
  setUserInfo,
  setList
})
export default todoApp;