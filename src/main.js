/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
 import { createApp } from 'vue'
 import { createVuetify } from 'vuetify'
 import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
 // Translations provided by Vuetify
 import { es, en, pt } from 'vuetify/locale'
// Plugins
import { registerPlugins } from '@/plugins'
//import axiosInstance from './plugins/axios';
import router from '@/router'
// Components
import App from './App.vue'

// Importar VeeValidate y los mensajes de validación
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';

// Your own translation file
//import sv from './i18n/vuetify/sv'
import messages from './i18n/messages'

// Detectar el idioma del navegador
const browserLanguage = navigator.language || navigator.userLanguage; // Puede devolver un valor como 'en-US', 'es-ES', etc.

// Extraer el idioma base (por ejemplo, 'en', 'es', etc.)
const language = browserLanguage.split('-')[0];

console.log(language);
// Composables
const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: language,
  fallbackLocale: 'es',
  messages,
})
// Usar el idioma detectado para la localización de VeeValidate
configure({
  generateMessage: localize(language, messages[language]?.validation), // Usar las traducciones del idioma detectado
  validateOnInput: true,  // Validación en tiempo real
});

const vuetify = createVuetify({
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
})

const app = createApp(App)
//app.config.globalProperties.$axios = axiosInstance;
registerPlugins(app)

app.use(i18n)
app.use(vuetify)
app.use(router)
app.mount('#app')
