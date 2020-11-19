import React from 'react'
//高阶组件是一个函数（而不是组件），它接受一个组件作为参数，返回一个新的组件。
//若多个组件使用同一个功能，则可以使用该方法

export default (Component,value) =>{
  return class NewComponent extends React.Component{
    constructor(){
      super()
      this.state ={
        data:null
      }
    }
    componentDidMount(){
      let data = localStorage.getItem(value)
      this.setState({ data })
    }
    render(){
      return <Component data={this.state.data}></Component>
    }
  }
}