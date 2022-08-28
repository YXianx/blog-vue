import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'

import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"

import {Popup} from 'vant'
import "vant/lib/index.css"

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(Popup)
app.use(mavonEditor)

app.mount('#app')
