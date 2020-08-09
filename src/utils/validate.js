/*
    一些数据验证方法*/

/**
 * 判断字符串是否是https?:|mailto:|tal: 开头的
 * @param path
 * @returns {boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 邮箱格式校验
 * @param email
 * @returns {boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * 手机号格式校验
 * @param phone
 * @returns {boolean}
 */
export function isValidPhone(phone) {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(phone)
}
