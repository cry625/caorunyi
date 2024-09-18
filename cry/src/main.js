
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import piniaPersist from 'pinia-plugin-persist'
import 'element-plus/dist/index.css'
import '@/assets/font/iconfont.css'
import '@/assets/theme.css' 
import '@/assets/base.css' 
import '@/assets/elementPlus-custom.css' 
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import '@/assets/theme/red.scss'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')

