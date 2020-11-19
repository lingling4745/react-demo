import React from 'react'
import wrapWithLoadData from '@src/higherOrderComponent/WrappedComponent'
class InputContent extends React.Component{
  constructor(props,context){
    super(props)
  }
  render(){
    return(
      <input value={this.props.data} disabled/>
    )
  }
}
localStorage.setItem('userName',123456789)
InputContent = wrapWithLoadData(InputContent,'userName')
export default InputContent;