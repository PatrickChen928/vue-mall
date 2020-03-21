import http from './public'
const baseUrl = '/api'

// 获取用户地址
export const addressList = (params) => {
  return http.fetchGet(`${baseUrl}/address/list`, params)
}
// 获取用户地址
export const addressDetail = (params) => {
  return http.fetchGet(`${baseUrl}/address/detail`, params)
}
// 修改收货地址
export const addressUpdate = (params) => {
  return http.fetchPost(`${baseUrl}/address/update`, params)
}
// 设置默认地址
export const setDefault = (params) => {
  return http.fetchPost(`${baseUrl}/address/setDefault`, params)
}
// 添加收货地址
export const addressAdd = (params) => {
  return http.fetchPost(`${baseUrl}/address/add`, params)
}
// 删除收货地址
export const addressDel = (params) => {
  return http.fetchPost(`${baseUrl}/address/del`, params)
}
