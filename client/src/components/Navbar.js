// src/components/Navbar.js
import React from 'react';
import UniversalLanguageSelector from './UniversalLanguage';
import T, { useAutoTranslate} from './Translatable';
import './Navbar.css';

const Navbar = () => {
  const { isRTL } = useAutoTranslate();

  return (
    <nav className={`navbar ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="nav-container">
        <div className="logo">
          <h2>
            <T>Your Store</T>
          </h2>
        </div>
        
        <ul className="nav-menu">
          <li><a href="/"><T>Home</T></a></li>
          <li><a href="/products"><T>Products</T></a></li>
          <li><a href="/about"><T>About Us</T></a></li>
          <li><a href="/contact"><T>Contact</T></a></li>
          <li><a href="/blog"><T>Blog</T></a></li>
        </ul>
        
        {/* Universal Language Selector - All Languages */}
        <UniversalLanguageSelector />
      </div>
    </nav>
  );
};

export default Navbar;