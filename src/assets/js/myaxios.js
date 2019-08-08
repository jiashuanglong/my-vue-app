// 自己封裝一個axios插件
import Vue from 'vue'
import axios from 'axios'
// 創建插件對象
let myaxios = {}
myaxios.install = function () {
  // 統一設置請求路徑
  axios.defaults.baseURL = 'http://localhost:3306/api/private/v1/'
  // 將axios添加到Vue的原型鏈中
  Vue.prototype.$http = axios
}
export default myaxios
