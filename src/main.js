import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 自动设置 rem 基准值
import 'amfe-flexible'

// 导入 Vant 组件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 导入全局样式
import './styles/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
