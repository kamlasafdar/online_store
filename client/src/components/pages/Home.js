import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import T, { useAutoTranslate } from '../Translatable';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { isRTL } = useAutoTranslate();

  // Simple hero slides
  const heroSlides = [
    {
      id: 1,
      title: "Welcome to Our Store",
      subtitle: "Quality Products for Every Need",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Premium Quality",
      subtitle: "Crafted with Excellence",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
    }
  ];

  // Featured products
  const products = [
    {
      id: 1,
      name: "Premium Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Accessories"
    },
    {
      id: 2,
      name: "Designer Bag",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Fashion"
    },
    {
      id: 3,
      name: "Smart Device",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Electronics"
    },
    {
      id: 4,
      name: "Home Decor",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Home"
    }
  ];

  // Popular searches
  const popularSearches = ["Watches", "Bags", "Electronics", "Home Decor", "Fashion", "Accessories"];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleProductClick = (product) => {
    console.log(`View product: ${product.name}`);
    // Navigate to product page
  };

  const handleContactUs = (product) => {
    navigate('/contact', { state: { product } });
  };

  return (
    <div className={`home ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-content">
                <h1><T>{slide.title}</T></h1>
                <p><T>{slide.subtitle}</T></p>
                <button className="hero-btn"><T>Explore Products</T></button>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Popular Searches */}
      <section className="popular-searches">
        <div className="container">
          <h2><T>Popular Searches</T></h2>
          <div className="search-tags">
            {popularSearches.map((search, index) => (
              <span key={index} className="tag">
                <T>{search}</T>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products">
        <div className="container">
          <h2><T>Featured Products</T></h2>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => handleProductClick(product)}
                  />
                  <div className="product-overlay">
                    <button
                      className="contact-btn"
                      onClick={() => handleContactUs(product)}
                    >
                      <T>Contact Us</T>
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h3><T>{product.name}</T></h3>
                  <p><T>{product.category}</T></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2><T>About Our Store</T></h2>
              <p>
                <T>We provide high-quality products with excellent customer service. Our mission is to deliver the best shopping experience with carefully selected items that meet your needs.</T>
              </p>
              <button className="about-btn"><T>Learn More</T></button>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="About us"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <h2><T>Why Choose Us</T></h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">⭐</div>
              <h3><T>Quality Products</T></h3>
              <p><T>Carefully selected high-quality items</T></p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <h3><T>Fast Response</T></h3>
              <p><T>Quick customer support and service</T></p>
            </div>
            <div className="feature">
              <div className="feature-icon">💎</div>
              <h3><T>Custom Solutions</T></h3>
              <p><T>Tailored products for your needs</T></p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta">
        <div className="container">
          <h2><T>Ready to Get Started?</T></h2>
          <p><T>Contact us today to discuss your requirements</T></p>
          <button className="cta-btn"><T>Get in Touch</T></button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;