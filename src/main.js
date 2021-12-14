
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './permission' // 鉴权

import ElementPlus from 'element-plus'
 import 'element-plus/dist/index.css'
import store from './store/index'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
