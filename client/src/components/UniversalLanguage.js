// src/components/UniversalLanguageSelector.js
import React, { useState, useEffect } from 'react';
import autoTranslate from './utils/AutoTranslate';

const UniversalLanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState(autoTranslate.getCurrentLanguage());
  const [isLoading, setIsLoading] = useState(false);
  
  const languages = autoTranslate.getSupportedLanguages();

  const handleLanguageChange = async (langCode) => {
    setIsLoading(true);
    setCurrentLanguage(langCode);
    
    try {
      await autoTranslate.setLanguage(langCode);
    } catch (error) {
      console.error('Language change failed:', error);
    } finally {
      setIsLoading(false);
    }
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

  return (
    <div className="universal-language-selector">
      <select 
        value={currentLanguage} 
        onChange={(e) => handleLanguageChange(e.target.value)}
        disabled={isLoading}
        className="language-dropdown"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
      
      {isLoading && (
        <div className="loading-indicator">
          <span>🔄</span>
        </div>
      )}
    </div>
  );
};

export default UniversalLanguageSelector;