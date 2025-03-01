/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
//import axiosInstance from './plugins/axios';
import router from '@/router'
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

//app.config.globalProperties.$axios = axiosInstance;
registerPlugins(app)


app.use(router).mount('#app')
