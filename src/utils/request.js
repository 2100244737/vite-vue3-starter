/*
 * @Author: your name
 * @Date: 2021-11-17 16:04:17
 * @LastEditTime: 2021-11-25 19:50:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \bmop-billing-admin2.0\src\utils\request.js
 */
import axios from 'axios'
import { ElMessage , ElMessageBox} from 'element-plus'
import store from '@/store'
import {getToken} from '@/utils/auth'

var root = import.meta.env.MODE === 'production' ? glob.BaseUrl : import.meta.env.MODE.VITE_APP_BASE_API
// var root = process.env.NODE_ENV === 'production' ? glob.BaseUrl : process.env.VUE_APP_BASE_API
// create an axios instance
const service = axios.create({
  baseURL: root, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    store.dispatch('app/setStatus', 'default')
    // do something before request is sent
    if (getToken('openId')) {
      return config
    } else {
      out('openId不能为空')
    }
    // return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  response => {
    const res = response.data
    store.dispatch('app/setLoading', false)
    // if the custom code is not 20000, it is judged as an error.
    if (res.statusCode !== 0 ) {
      if (res.statusCode === 1001) {
        out(res.errorMsg)
      }
      if (res.statusCode === 1002) {
        return res
      } else {
        store.dispatch('app/setStatus', 'default')
        ElMessage .closeAll()
        ElMessage ({
          message: res.errorMsg || 'Error',
          type: 'error',
          offset: 60,
          duration: 3 * 1000
        })
        return Promise.reject(new Error(res.message || 'Error'))
      }
    } else {
      if (JSON.parse(res.bizContent)) {
        if (JSON.parse(res.bizContent).data && JSON.parse(res.bizContent).data.length === 0) {
          store.dispatch('app/setStatus', 'undefinedData')
        }
      }
      return res
    }
  },
  error => {
    store.dispatch('app/setLoading', false)
    ElMessage .closeAll()
    if (error && error.response) {
      if (error.response.status === 500) {
        store.dispatch('app/setStatus', 'noNetwork')
        ElMessage ({
          message: '服务器出错......',
          type: 'error',
          offset: 60,
          duration: 2 * 1000
        })
      }
      if (error.response.status === 502) {
        store.dispatch('app/setStatus', 'noNetwork')
        ElMessage ({
          message: '网络出错......',
          type: 'error',
          offset: 60,
          duration: 2 * 1000
        })
      }
    }
    if (error.message.includes('timeout')) {
      store.dispatch('app/setStatus', 'overtime')
      ElMessage ({
        message: '请求超时......',
        type: 'error',
        offset: 60,
        duration: 2 * 1000
      })
    }
    return Promise.reject(error)
  }
)
function out(msg) {
  var url = glob.outUrl
  store.dispatch('user/logout')
  ElMessageBox.alert(msg, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    window.location.replace(url)
    return false
  }).catch(() => {
    window.location.replace(url)
    return false
  })
}
export default service
