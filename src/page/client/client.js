import React from 'react'
import {ThemeContext} from '@config/theme-context'
import InputContent from './input'
export default class Client extends React.Component{
  constructor(props,contexts){
    super(props)
    this.state ={
      id:''
    }
  }
  componentDidMount(){
    this.init()
  }
  init(){
    let state= this.props.history.location.state
    console.log(this.props.history)
    console.log(state)
    if(state){
      this.setState({
        'id':state.id
      })
    }
  }
  click(){
  }
  use
  render(){
    let theme = this.context;
    console.log(theme)
    return(
      <div onClick={() =>this.click()}>
        <label>
          昵称：<InputContent />
        </label>
        <button style={{backgroundColor: theme.background}}>156456456456</button>
      </div>
    )
  }
}
Client.contextType = ThemeContext;