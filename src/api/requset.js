import axios from 'axios'
import { message} from 'antd';

const request = axios.create({
  baseURL:'http://localhost:8080',
  timeout:60000
})

const errorHandler = (err) =>{
  if(err.response){
    let data = err.response.data;
    if (err.response.status === 403) {
      message.error({
        message: 'Forbidden',
        description: data.message
      })
    }

  }
}
request.interceptors.request.use(config =>{
  console.log(config)
  config.headers['device_type'] = 'web'
  config.headers['version_number'] = 101
  config.headers['version_name'] = '1.0.1'
  config.headers['device_id'] = ''
  config.headers['push_id'] = ''
   return config
},errorHandler)

request.interceptors.response.use((response) =>{
  if(response.data && response.data.code == 0){
    return response.data.data
  }
  if(response.data && response.data.code != 0){
    message.error(response.message)
    return false;
  }
  return response.data
},errorHandler)

export default request;