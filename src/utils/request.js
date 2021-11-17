import axios from 'axios'
import { message } from 'antd'
import siteConfigs from '../configs'

console.log('line 5 - siteconfigs', siteConfigs);
const errorHandler = error => {
  const { response } = error
  const { status } = response || {}
  if (status === 404) {
    message.error('Request not found!')
  }
  return new Response({ meta: { ok: false } })
}

const instance = axios.create({
  baseURL: siteConfigs.API_URL,
  timeout: 10000
})

instance.interceptors.response.use(response => {
  if (!response || response.statusText !== 'OK' || !response.data) {
    errorHandler(response)
    return Promise.reject(response)
  }
  return response.data
}, error => {
  errorHandler(error)
  return Promise.reject(error)
})

export default instance
