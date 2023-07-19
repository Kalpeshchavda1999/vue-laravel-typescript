import { createI18n } from 'vue-i18n'
import en from '@/libs/i18n/locales/en.json';
import guj from '@/libs/i18n/locales/guj.json';

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], 'en' | 'guj'>({
    locale: 'en',
    legacy: false,
    globalInjection: true,
    messages: {
        'en': en,
        'guj' : guj
    }
})

export default i18n;
