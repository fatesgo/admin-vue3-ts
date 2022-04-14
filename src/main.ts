import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './permission' 
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')