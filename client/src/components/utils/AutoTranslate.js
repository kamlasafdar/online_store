// src/utils/AutoTranslate.js
class AutoTranslate {
  constructor() {
    this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.cache = new Map();
    this.isTranslating = false;
  }

  getSupportedLanguages() {
    return [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Español', flag: '🇪🇸' },
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
      { code: 'it', name: 'Italiano', flag: '🇮🇹' },
      { code: 'pt', name: 'Português', flag: '🇵🇹' },
      { code: 'ru', name: 'Русский', flag: '🇷🇺' },
      { code: 'ja', name: '日本語', flag: '🇯🇵' },
      { code: 'ko', name: '한국어', flag: '🇰🇷' },
      { code: 'zh', name: '中文', flag: '🇨🇳' },
      { code: 'ar', name: 'العربية', flag: '🇸🇦' },
      { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
      { code: 'ur', name: 'اردو', flag: '🇵🇰' },
      { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
      { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
      { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
      { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
      { code: 'pl', name: 'Polski', flag: '🇵🇱' },
      { code: 'th', name: 'ไทย', flag: '🇹🇭' },
      { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' }
    ];
  }

  async translateText(text, targetLang) {
    if (!text || targetLang === 'en') return text;
    
    const cacheKey = `${text}_${targetLang}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
      );
      const data = await response.json();
      
      const translatedText = data.responseData?.translatedText || text;
      this.cache.set(cacheKey, translatedText);
      return translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  }

  isRTL(langCode) {
    const rtlLanguages = ['ar', 'ur', 'fa', 'he'];
    return rtlLanguages.includes(langCode);
  }

  async setLanguage(langCode) {
    this.currentLanguage = langCode;
    localStorage.setItem('selectedLanguage', langCode);
    
    document.documentElement.dir = this.isRTL(langCode) ? 'rtl' : 'ltr';
    document.documentElement.lang = langCode;
    
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: langCode } 
    }));
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }
}

const autoTranslate = new AutoTranslate();
export default autoTranslate;