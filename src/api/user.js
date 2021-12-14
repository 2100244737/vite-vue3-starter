import request from '@/utils/request'
import { changeData, getDataTime } from '@/utils/validate'
const number = glob.appId
const fileItem = {
  USER_LOGIN: 'BMOP_USER_LOGIN_REQ_' + number, // 登录
  USER_PASSWORD: 'BMOP_USER_PASSWORD_REQ_' + number // 重置密码
}
// 登录
export function login(params) {
  const file = fileItem.USER_LOGIN + '_' + getDataTime() + '.json'
  const data = changeData(params, file)
  return request({
    url: 'api/json',
    method: 'post',
    data
  })
}
// 重置密码
export function resetPassWord(params) {
  const file = fileItem.USER_PASSWORD + '_' + getDataTime() + '.json'
  const data = changeData(params, file)
  return request({
    url: 'api/json',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
