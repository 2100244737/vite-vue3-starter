
import { getToken } from './auth'
/** SVG
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
/** 时间
 * @returns {string}
 */
export function getDataTime() {
  var date = new Date()
  // 以下代码依次是获取当前时间的年月日时分秒
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  var minute = date.getMinutes()
  var hour = date.getHours()
  var second = date.getSeconds()
  var milliseconds = date.getMilliseconds()
  // 固定时间格式
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  if (hour >= 0 && hour <= 9) {
    hour = '0' + hour
  }
  if (minute >= 0 && minute <= 9) {
    minute = '0' + minute
  }
  if (second >= 0 && second <= 9) {
    second = '0' + second
  }
  var currentdate = year + '' + month + strDate + hour + minute + second + milliseconds
  return currentdate
}
/** 时间
 * @returns {string}
 */
export function getTime() {
  var date = new Date()
  var seperator1 = '-'
  var seperator2 = ':'
  // 以下代码依次是获取当前时间的年月日时分秒
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  var minute = date.getMinutes()
  var hour = date.getHours()
  var second = date.getSeconds()
  // 固定时间格式
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  if (hour >= 0 && hour <= 9) {
    hour = '0' + hour
  }
  if (minute >= 0 && minute <= 9) {
    minute = '0' + minute
  }
  if (second >= 0 && second <= 9) {
    second = '0' + second
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate +
    'T' + hour + seperator2 + minute + seperator2 + second
  return currentdate
}
/**  处理请求对象
 * @param {Object}
 * @returns {Object}
 */
export function changeData(content, filename) {
  const accessToken = getToken('accessToken')
  if (getToken('openId')) {
    content.loginUserId = getToken('openId')
    content.accessToken = accessToken
    content.openId = getToken('openId')
  }
  var dataItme = {
    'bizContent': JSON.stringify(content),
    'encryptType': 'NONE',
    'filename': filename,
    'sigdataItmen': 'NONE',
    'signType': 'NONE',
    'timestamp': getTime(),
    'version': '2.0',
    'tokenType': 'USER_AUTH',
    'accessToken': accessToken
  }
  return dataItme
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
