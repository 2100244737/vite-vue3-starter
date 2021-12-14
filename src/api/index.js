import request from '@/utils/request'
import { changeData, getDataTime } from '@/utils/validate'

import system from './modules/syetem'
export {
  system, // 系统管理
}
export function gettingData(params, fileName) {
  const file = fileName + '_' + getDataTime() + '.json'
  const data = changeData(params, file)
  return request({
    url: 'api/json',
    method: 'post',
    data
  })
}
