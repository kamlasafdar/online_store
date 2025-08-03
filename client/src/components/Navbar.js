import React from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css'; // you can reuse your existing CSS

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
  };

  return (
    <div className="language-selector">
      <select 
        value={i18n.language} 
        onChange={(e) => changeLanguage(e.target.value)}
        className="language-dropdown"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h2>{t('storeName')}</h2>
        </div>
        <ul className="nav-menu">
          <li><a href="/">{t('home')}</a></li>
          <li><a href="/products">{t('products')}</a></li>
          <li><a href="/about">{t('about')}</a></li>
          <li><a href="/contact">{t('contact')}</a></li>
          <li><a href="/blog">{t('blog')}</a></li>
        </ul>
        
        {/* Language Selector */}
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Navbar;