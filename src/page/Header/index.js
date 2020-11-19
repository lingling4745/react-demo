import React, { Component }from 'react'
import top from '@images/top.jpg'
import logo from '@images/logo.png'
import {headerList,nav} from '@config/index.js'
import './style.less'
import {SmileOutlined} from  '@ant-design/icons'
import {Menu } from 'antd'
import Login from '@components/Login/login'

const { SubMenu } = Menu;

export default class Header extends Component{
  
  constructor(props,context) {
    super(props)
    this.state = {
      visible:false,
      content: '<h1>React.js 小书</h1>',
      header:[
        {
          id:0,
          title:''
        }
      ],
      current:''
    }
  }
  navLeftTree(){
    return nav.map(val =>{
      if(val.children && val.children.length >0){
        return <SubMenu>
          {
            val.children.map(element =>  <Menu.Item key={element.title}>{element.title}</Menu.Item>)
          }
        </SubMenu>
      }else {
        return (<Menu.Item key={val.title}>{val.title}</Menu.Item>)
      }
    })
  }
  clickEvent(id){

    if(id === 0){
      this.setState({
        visible:true
      })
    }else if(id === 1){
      this.props.history.push({
        pathname: '/client',
        state: {
            id: 3
        }
      })
    }else if(id === 2){
      this.props.history.push('/params/'+ '2'  )
    }else if(id === 3){
      // this.props.history.push({
      //   pathname: '/query',
      //   query: {
      //       id: 3
      //   }
      // })
      this.props.history.push({
        pathname: '/query',
        search:'id=3&type=4'
      })
    }else if(id === 4){
      this.props.history.push('/render')
    }
  };
  fn(){
    this.setState({
      visible:false
    })
  }

  /**
   * 方法
   * onChange= {this.clickEvent.bind(this,val.id)}
   * 或
   * onChange= {() =>this.clickEvent(val.id)}
   */
  render() {
    return (
      <div className="header_main">
        <img src={top}  className="image"alt=''></img>
        <header>
          <div className="header_nav">
            <div>
              <span className="name">海信集团官网</span>
              <SmileOutlined />
            </div>
            <ul className="list">
              {
                headerList.map(val => <li data-id={val.id} key={val.id} onClick={this.clickEvent.bind(this,val.id)}>{val.title}</li>
                )
              }
            </ul>
          </div>
        </header>
        <nav>
          <div className='nav-item'>
            <div className='logo'>
              <img src={logo} alt='logo'></img>
              <span>官网</span>
            </div>
            <Menu mode="horizontal">
              {this.navLeftTree()}
            </Menu>
          </div>
        </nav>
        {this.props.children}
        <Login visible={this.state.visible} pfn={this.fn.bind(this)}></Login>
      </div>
    )
  }
}