import '@/libs/mainCss'
import VueTelInput from 'vue3-tel-input'
import VueTelInputOptions from '@/libs/VueTelInput'
import Vue3Toastify, { type ToastContainerOptions,updateGlobalOptions } from 'vue3-toastify';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './libs/i18n';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueTelInput, VueTelInputOptions);
app.use(Vue3Toastify, {
    autoClose: 3000,
    limit: 4,
} as ToastContainerOptions);
app.use(i18n);
app.mount('#app')
