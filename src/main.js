import './mock'

import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'

// 将公共部分封装
import common from './common'
// 这里相当于传递给了common下面的index文件一个vue对象，使用插件
Vue.use(common);

Vue.prototype.$center = new Vue();

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')