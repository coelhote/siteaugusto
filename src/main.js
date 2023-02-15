import { createApp } from 'vue'
import VueMobileDetection from "vue-mobile-detection";
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueMobileDetection)
  .mount('#app')
