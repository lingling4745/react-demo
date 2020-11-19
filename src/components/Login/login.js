import React, {Component} from 'react'
import { Form, Input,Modal } from 'antd';
import { addTodo, addList } from '@redux/action/index'
import { connect } from 'react-redux'
import { login } from '@api/api'
import PropTypes from 'prop-types' //检测字段类型

@connect((state, props) => ({
  userInfo:state.setUserInfo,
  list:state.setList
}))

class Login extends Component{

  formRef = React.createRef();

  static propTypes ={
    email:PropTypes.string,
    password:PropTypes.string
  }
  static defaultProps = {
    email:"123456789",
    password:"123456789"
  }

  constructor(props,context){
    super(props)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.fn = this.fn.bind(this)
    this.state = {}
  }
  inputEmail = (event) =>{
    this.setState({
      email:event.target.value
    })
  }
  inputPassword = (event) =>{
    this.setState({
      password:event.target.value
    })
  }
  fn(){
    this.props.pfn()
  }
  handleOk(e){
    e.preventDefault();
    this.formRef.current.validateFields().then(val =>{
      login(val).then(res =>{
        if(res){
          this.props.dispatch(addTodo(res))
          this.props.dispatch(addList([1,2,3,4,5,6]))
          let time = setTimeout(() =>{
            console.log(this.props);
            clearTimeout(time)
          },1000)
          this.fn()
        }
      }).catch( err => {

      })
      // this.fn()
    }).catch(errorInfo => {
      console.log("errorInfo:"+ errorInfo)
    })
  }
  handleCancel(){
    
    this.fn()
  }
  checkPsd(rule, value, callback){

  }
  render(){
    return(
      <Modal
        title="登录"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
          <Form ref={this.formRef}>
            {/* <Form.Item name="email" label="邮箱" rules={[{ required: true },{validator:(rule, value, callback) => { this.checkPsd(rule, value, callback) }}]} validateTrigger="onChange"> */}
            <Form.Item name='email' label="邮箱" rules={[{ required: true }]}>
              <Input type="email"></Input>
              {/* <Input type="email" value={this.state.email} onChange={this.inputEmail}></Input> */}
            </Form.Item>
            <Form.Item name='password' label="密码" rules={[{ required: true }]}>
              <Input type="email"></Input>
              {/* <Input type="password" value={this.state.password} onChange={this.inputPassword}></Input> */}
            </Form.Item>
          </Form>
      </Modal>
    )
  }
}
export default Login;
// export default connect((state, props) => ({
//   userInfo:state.setUserInfo,
//   list:state.setList
// }))(Login);