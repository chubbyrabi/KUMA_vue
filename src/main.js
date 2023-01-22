import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { globalMixin } from './assets/js/globalMixin'

createApp(App).use(store).use(router).mixin(globalMixin).mount('#app')