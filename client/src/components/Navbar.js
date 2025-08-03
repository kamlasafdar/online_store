import React from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css'; // you can reuse your existing CSS

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
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
          <h2>{t('storeName', 'Your Store')}</h2>
        </div>
        <ul className="nav-menu">
          <li><a href="/">{t('home', 'Home')}</a></li>
          <li><a href="/products">{t('products', 'Products')}</a></li>
          <li><a href="/about">{t('about', 'About Us')}</a></li>
          <li><a href="/contact">{t('contact', 'Contact')}</a></li>
          <li><a href="/blog">{t('blog', 'Blog')}</a></li>
        </ul>
        
        {/* Language Selector */}
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Navbar;