import request from '@api/requset.js'
const api = {
  banner:'/api/banner',
  cardList:'/api/get-data'
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