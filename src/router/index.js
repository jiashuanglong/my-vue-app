import Vue from 'vue'
import Router from 'vue-router'
// 引入UserElement組件
import UserElement from '../components/userElement.vue'
import Login from '../components/login/login.vue'
import Home from '../components/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // redirect是重定向，就是請求根目錄時跳到home首頁
    {path: '/', redirect: '/home'},
    // 上面代碼也可以寫成
    // {path: '/', redirect: { name: 'home' }},
    {path: '/userElement', component: UserElement},
    {path: '/login', name: 'login', component: Login}, // 登錄路由
    {path: '/home', name: 'home', component: Home} // 首頁路由
  ]
})
