import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Dropdown from 'vue-simple-search-dropdown';


const app = createApp(App)
app.use(Dropdown)
app.use(VueAxios, axios)
app.mount('#app')
