// import React from 'react';
// import './Footer.css'; // if styles are in a separate CSS file

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-section">
//             <h3>Your Store</h3>
//             <p>Quality products and excellent service</p>
//           </div>
//           <div className="footer-section">
//             <h3>Quick Links</h3>
//             <ul>
//               <li><a href="/">Home</a></li>
//               <li><a href="/products">Products</a></li>
//               <li><a href="/about">About</a></li>
//               <li><a href="/contact">Contact</a></li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h3>Contact Info</h3>
//             <p>Email: info@yourstore.com</p>
//             <p>Phone: +92 300 1234567</p>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>&copy; 2024 Your Store. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// src/components/Footer.js
import React from 'react';
import T, { useAutoTranslate } from './Translatable';
import './Footer.css';

const Footer = () => {
  const { isRTL } = useAutoTranslate();

  return (
    <footer className={`footer ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="footer-container">
        <div className="footer-sections">
          <div className="footer-section">
            <h3><T>Your Store</T></h3>
            <p><T>Quality products and excellent service</T></p>
          </div>
          
          <div className="footer-section">
            <h3><T>Quick Links</T></h3>
            <ul>
              <li><a href="/"><T>Home</T></a></li>
              <li><a href="/products"><T>Products</T></a></li>
              <li><a href="/about"><T>About</T></a></li>
              <li><a href="/contact"><T>Contact</T></a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3><T>Contact Info</T></h3>
            <p><T>Email</T>: info@yourstore.com</p>
            <p><T>Phone</T>: +92 300 1234567</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 <T>Your Store</T>. <T>All rights reserved.</T></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
