import { message } from "antd"

const responseBody = {
  code:0,
  message:'',
  data:null
}
export const builder = (data,message,code = 0,headers = {}) =>{
  responseBody.data = data;
  if(!message){
    responseBody.message = message
  }
  if(code != undefined && code != null){
    responseBody.code = code;
  }
  return responseBody;
}