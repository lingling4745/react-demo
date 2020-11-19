import React from 'react'
export default class Params extends React.Component{
  
  constructor(props,contexts){
    super(props)
    this.state = {
      value:"this.props.history.push('/params/'+ '2'  )",
      id:''
    }
  }
  //只会在装载之前调用一次，在 render 之前调用,类似created
  componentWillMount(){
    this.init()
  }
  //只会在装载完成之后调用一次，在 render 之后调用,类似mounted
  componentDidMount(){
    // ReactDOM.findDOMNode(this)
  }
  init(){
    let params = this.props.match.params;
    let id = params.id;
    this.setState({
      id
    })
    console.log(id)
  }
  render(){ 
    return (
      <div>
        <p>{this.state.value}</p>
        <p>this.props.match.params.id:{this.state.id}</p>
      </div>
    )
  }
}