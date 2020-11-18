import Mock from "mockjs"
import {builder} from './index.js'
import {list, userInfo} from '@config/index.js'
import data from '@/json/data.json'
const responseData = () =>{
  return builder(data)
};
const banner = () =>{
  return builder(list);
}
const login = (option) =>{
  let value = JSON.parse(option.body);
  let message = '';
  let code = 0;
  let data = null;
  if(value.email !== userInfo.email){
    message ='账号错误';
    code = 101
  }
  else if(value.password !== userInfo.password){
    message ='密码错误';
    code = 101
  }else{
    data = value;
  }
  return builder(data,message,code);
}
Mock.setup({
  timeout: 800 // setter delay time
})
Mock.mock('http://localhost:8080/api/get-data','get',responseData)
Mock.mock('http://localhost:8080/api/banner','get',banner)
Mock.mock('http://localhost:8080/api/login','post',login)