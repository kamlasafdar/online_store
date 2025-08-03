// src/components/TranslatableComponent.js
import React, { useState, useEffect } from 'react';
import autoTranslate from './utils/AutoTranslate';
// Component that automatically translates its content
const T = ({ children, ...props }) => {
  const [translatedText, setTranslatedText] = useState(children);
  const [currentLanguage, setCurrentLanguage] = useState(autoTranslate.getCurrentLanguage());

  useEffect(() => {
    const translateContent = async () => {
      if (typeof children === 'string') {
        const translated = await autoTranslate.translateText(children, currentLanguage);
        setTranslatedText(translated);
      }
    };

    translateContent();
  }, [children, currentLanguage]);

  useEffect(() => {
    const handleLanguageChanged = (event) => {
      setCurrentLanguage(event.detail.language);
    };

    window.addEventListener('languageChanged', handleLanguageChanged);
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChanged);
    };
  }, []);

  return <span {...props}>{translatedText}</span>;
};

// Hook for programmatic translation
export const useAutoTranslate = () => {
  const [currentLanguage, setCurrentLanguage] = useState(autoTranslate.getCurrentLanguage());

  const translate = async (text) => {
    return await autoTranslate.translateText(text, currentLanguage);
  };

  const changeLanguage = async (langCode) => {
    await autoTranslate.setLanguage(langCode);
    setCurrentLanguage(langCode);
  };

  useEffect(() => {
    const handleLanguageChanged = (event) => {
      setCurrentLanguage(event.detail.language);
    };

    window.addEventListener('languageChanged', handleLanguageChanged);
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChanged);
    };
  }, []);

  return {
    translate,
    changeLanguage,
    currentLanguage,
    isRTL: autoTranslate.isRTL(currentLanguage)
  };
};

export default T;