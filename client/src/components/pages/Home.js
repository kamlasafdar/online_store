import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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
    <div className="home">
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
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <button className="hero-btn">Explore Products</button>
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
          <h2>Popular Searches</h2>
          <div className="search-tags">
            {popularSearches.map((search, index) => (
              <span key={index} className="tag">
                {search}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products">
        <div className="container">
          <h2>Featured Products</h2>
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
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
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
              <h2>About Our Store</h2>
              <p>
                We provide high-quality products with excellent customer service.
                Our mission is to deliver the best shopping experience with
                carefully selected items that meet your needs.
              </p>
              <button className="about-btn">Learn More</button>
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
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">⭐</div>
              <h3>Quality Products</h3>
              <p>Carefully selected high-quality items</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <h3>Fast Response</h3>
              <p>Quick customer support and service</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💎</div>
              <h3>Custom Solutions</h3>
              <p>Tailored products for your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss your requirements</p>
          <button className="cta-btn">Get in Touch</button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;