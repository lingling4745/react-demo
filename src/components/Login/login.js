import React, {Component} from 'react'
import { Form, Input,Modal } from 'antd';

export default class Login extends Component{
  constructor(props,contexts){
    super(props)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.fn = this.fn.bind(this)
    this.state = {
      email:'',
      password:''
    }
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
  handleOk(){

    this.fn()
  }
  handleCancel(){
    this.fn()
  }
  render(){
    return(
      <Modal
        title="登录"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
          <Form>
            <Form.Item name="email" label="邮箱" rules={[{ required: true }]}>
              <Input type="email" value={this.state.email} onChange={this.inputEmail}></Input>
            </Form.Item>
            <Form.Item name='password' label="密码" rules={[{ required: true }]}>
              <Input type="password" value={this.state.password} onChange={this.inputPassword}></Input>
            </Form.Item>
          </Form>
      </Modal>
    )
  }
}