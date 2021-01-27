import Vue from 'vue'
import Fragment from 'vue-fragment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './utils/filter'
import directives from './utils/directives'
import * as util from './utils/util'

Vue.config.productionTip = false
Vue.use(Fragment.Plugin)
Vue.use(ElementUI, { size: 'small' })
Vue.use(directives)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.prototype.$util = util

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
