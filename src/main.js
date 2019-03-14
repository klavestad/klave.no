import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import VueTypedJs from 'vue-typed-js'
import 'vue-typed-js/dist/vue-typed-js.css'

library.add(faUserSecret)

Vue.use(Buefy)
Vue.use(VueTypedJs)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
