import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import VueCookie from 'vue-cookie'
import { userInfo } from './api'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.use(infiniteScroll)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '/static/images/load.gif'
  // attempt: 1
})
Vue.config.productionTip = false

// 不需要登陆的页面 => 白名单
const whiteList = ['/home', '/goods', '/menGoods', '/womenGoods', '/login', '/goodsDetails']
router.beforeEach(function (to, from, next) {
  if (to.path !== '/login') {
    userInfo().then(res => {
      store.commit('RECORD_USERINFO', {info: res.result})
      //  跳转到
      if (to.path === '/login') {
        next({path: '/'})
      } else {
        next()
      }
    }).catch(() => {
      // 没登录
      // 白名单
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next('/login')
      }
    })
  } else {
    next()
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
