import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const app = createApp(App)
app.use(VueAxios, axios)
app.mount('#app')
