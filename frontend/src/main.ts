import '@/assets/main.css'
import '@/assets/base.css'
import '@/index.css'
import '@/services/themeSetup'
import VueTelInput from 'vue3-tel-input';
import 'vue3-tel-input/dist/vue3-tel-input.css'

const VueTelInputOptions = {
    mode: "international",
    onlyCountries: ["IN"]
}

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTelInput, VueTelInputOptions);

app.mount('#app')
