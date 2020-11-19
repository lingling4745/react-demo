import React from 'react'
export default class Query extends React.Component{
  
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
    // if(this.props.location.query){
    //   let query = this.props.location.query;
    //   let id = query.id;
    //   this.setState({
    //     id
    //   })
    //   sessionStorage.setItem('id',id)
    // }else{
    //   this.setState({
    //     id:sessionStorage.getItem('id')
    //   })
    // }
    const data=this.props.location.search;
    const param=data.substr(1,data.length);
    console.log(param)
  }
  render(){ 
    return (
      <div>
        <p>{this.state.value}</p>
        <p>this.props.match.query.id:{this.state.id}</p>
      </div>
    )
  }
}