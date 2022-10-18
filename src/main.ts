import './lib/xiao.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import plugin from './plugin'
import {provide} from "vue"
import 'github-markdown-css'
const app = createApp(App)
app.use(router).use(plugin)
app.mount('#app')
