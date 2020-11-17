import Mock from "mockjs"
import {builder} from './index.js'
import {list} from '@config/index.js'
import data from '@/json/data.json'

const responseData = () =>{
  return builder(data)
};
const banner = () =>{
  return builder(list);
}
Mock.setup({
  timeout: 800 // setter delay time
})
Mock.mock('http://localhost:8080/api/get-data','get',responseData)
Mock.mock('http://localhost:8080/api/banner','get',banner)