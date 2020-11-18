import React from 'react'
export default class Client extends React.Component{
  constructor(props,contexts){
    super(props)
    this.state ={

    }
  }
  click(){
  }
  render(){
    return(
      <div onClick={() =>this.click()}>156456456456</div>
    )
  }
}