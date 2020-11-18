export const ADD_TODO = 'ADD_TODO'
export const ADD_LIST = 'ADD_LIST'

export function addTodo(text){
  return {
    type:ADD_TODO,
    text
  }
}
export function addList(text){
  return {
    type:ADD_LIST,
    text
  }
}

