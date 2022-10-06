import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'

import {Popup} from 'vant'
import "vant/lib/index.css"

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import App from './App.vue'
import Banner from './components/content/Banner.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Popup)
app.use(mavonEditor)
app.component('banner',Banner)

app.mount('#app')
