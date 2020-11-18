import request from '@api/requset.js'
const api = {
  banner:'/api/banner',
  cardList:'/api/get-data',
  login:'/api/login'
}
export const getBanner = () =>{
  return request({
    url:api.banner,
    method:'get'
  })
}
export const cardList = () =>{
  return request({
    url:api.cardList,
    method:'get'
  })
}
export const login = (data) =>{
  return request({
    url:api.login,
    method:'post',
    data:data
  })
}