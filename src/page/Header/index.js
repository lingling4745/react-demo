import React, { Component }from 'react'
import top from '@images/top.jpg'
import logo from '@images/logo.png'
import {headerList,nav} from '@config/index.js'
import './style.less'
import {SmileOutlined} from  '@ant-design/icons'
import {Menu } from 'antd'

const { SubMenu } = Menu;

export default class Header extends Component{
  constructor(props,context) {
    super(props)
    this.state = {
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
  render() {
    
    return (
      <div className="header_main">
        <img src={top}  className="image"></img>
        <header>
          <div className="header_nav">
            <div>
              <span className="name">海信集团官网</span>
              <SmileOutlined />
            </div>
            <ul className="list">
              {
                headerList.map(val => <li data-id={val.id} key={val.id}>{val.title}</li>
                )
              }
            </ul>
          </div>
        </header>
        <nav>
          <div className='nav-item'>
            <div className='logo'>
              <img src={logo}></img>
              <span>官网</span>
            </div>
            <Menu mode="horizontal">
              {this.navLeftTree()}
            </Menu>
          </div>
        </nav>
      </div>
    )
  }
}