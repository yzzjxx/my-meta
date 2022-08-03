import Vue from 'vue'
import App from './App'
import TabBar from './components/TabBar.vue'

Vue.config.productionTip = false
Vue.component('tab-bar',TabBar)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
