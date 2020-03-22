import axios from 'axios'
import {Message} from 'view-design';
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://127.0.0.1:3333';
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded';
export default {
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {params}).then(res => {
        let status = res.data.status;
        if (status == 1) {
          Message.error(res.data.msg);
          reject(res.data);
        } else {
          resolve(res.data)
        }
      }).catch(error => {
        Message.error(error.msg);
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        let status = res.data.status;
        if (status == 1) {
          if (url.indexOf('/users/userInfo') === -1 ) {
            Message.error(res.data.msg);
          }
          reject(res.data);
        } else {
          resolve(res.data)
        }
      }).catch(error => {
        Message.error(error.msg);
        reject(error)
      })
    })
  }
}
