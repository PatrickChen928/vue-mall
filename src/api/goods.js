import http from './public'
const baseUrl = '/api'

//热门商品
export const hotList = (params) => {
  return http.fetchGet(`${baseUrl}/goods/hotList`, params)
};
// 商品列表
export const queryGoodsList = (params) => {
  return http.fetchGet(`${baseUrl}/goods/list`, params)
};
//添加商品
export const addGoods = (data) => {
  return http.fetchPost(`${baseUrl}/goods/add`, data)
}
// 获取购物车列表
export const getCartList = (params) => {
  return http.fetchGet(`${baseUrl}/car/list`, params)
}
// 加入购物车
export const addCart = (params) => {
  return http.fetchPost(`${baseUrl}/car/add`, params)
}
// 批量加入购物车
export const addCartBatch = (params) => {
  return http.fetchPost(`${baseUrl}/car/addBatch`, params)
}
/*// 删除购物车
export const delCart = (params) => {
  return http.fetchPost(`${baseUrl}/car/delCart`, params)
}*/
// 编辑购物车
export const cartEdit = (params) => {
  return http.fetchPost(`${baseUrl}/car/cartEdit`, params)
}
// 全选
export const editCheckAll = (params) => {
  return http.fetchPost(`${baseUrl}/car/editCheckAll`, params)
}
// 删除整条购物车
export const cartDel = (params) => {
  return http.fetchPost(`${baseUrl}/car/cartDel`, params)
}
// 获取用户地址
export const addressList = (params) => {
  return http.fetchPost(`${baseUrl}/users/addressList`, params)
}
// 修改收货地址
export const addressUpdate = (params) => {
  return http.fetchPost(`${baseUrl}/users/addressUpdate`, params)
}
// 添加收货地址
export const addressAdd = (params) => {
  return http.fetchPost(`${baseUrl}/users/addressAdd`, params)
}
// 删除收货地址
export const addressDel = (params) => {
  return http.fetchPost(`${baseUrl}/users/addressDel`, params)
}
// 支付
export const payMent = (params) => {
  return http.fetchPost(`${baseUrl}/order/payMent`, params)
}
// 订单
export const orderList = (params) => {
  return http.fetchPost(`${baseUrl}/order/orderList`, params)
}
// 商品详情
export const productDet = (params) => {
  return http.fetchGet(`${baseUrl}/goods/productDet`, params)
}
// 删除订单
export const delOrder = (params) => {
  return http.fetchPost(`${baseUrl}/order/delOrder`, params)
}
