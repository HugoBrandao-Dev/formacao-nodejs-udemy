import Vue from 'vue'
import App from './App.vue'

// Framework CSS Bulma
import '../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
