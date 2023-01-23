import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { globalMixin } from './assets/js/globalMixin'
import VueMetaInfo from 'vue-meta-info'

createApp(App)
.use(store)
.use(router)
.mixin(globalMixin)
.use(VueMetaInfo)
.mount('#app')

// 不加花括號 {} 是引用整個模組
// 使用花括號 {} 只會引用這個模組中的特定函數或物件
// 這樣可以減少程式碼的記憶體使用量和運行時間