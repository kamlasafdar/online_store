import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
import enTranslation from './locales/en/translation.json';
import urTranslation from './locales/ur/translation.json';
import hiTranslation from './locales/hi/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  ur: {
    translation: urTranslation
  },
  hi: {
    translation: hiTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', // default language
    fallbackLng: 'en',
    debug: true, // Enable debug to see what's happening
    
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;