// src/components/pages/Contact.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Contact = () => {
    const { state } = useLocation();
    const product = state?.product;


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        quantity: '1',
        address: '',
        customMessage: ''
    });


    const maxQuantity = 10; // You can make this dynamic if needed

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', { ...formData, product });
        alert('Order sent!');
    };

    return (
        <>
            <Navbar />
            <div className="contact-page">
                <h2>Order Product</h2>

                {product ? (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-box">
                            <div className="form-grid">
                                {/* Product info */}
                                <div className="form-group">
                                    <label>Item</label>
                                    <input type="text" value={product.name} disabled />
                                </div>
                                <div className="form-group">
                                    <label>Category</label>
                                    <input type="text" value={product.category} disabled />
                                </div>

                                {/* User inputs */}
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div> */}
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <div className="phone-inline">
                                        <select
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleChange}
                                            className="country-code"
                                        >
                                            <option value="+92">🇵🇰 +92</option>
                                            <option value="+91">🇮🇳 +91</option>
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+44">🇬🇧 +44</option>
                                            <option value="+971">🇦🇪 +971</option>
                                            <option value="+61">🇦🇺 +61</option>
                                            <option value="+81">🇯🇵 +81</option>
                                            <option value="+49">🇩🇪 +49</option>
                                            <option value="+33">🇫🇷 +33</option>
                                            <option value="+966">🇸🇦 +966</option>
                                            <option value="+880">🇧🇩 +880</option>
                                            <option value="+86">🇨🇳 +86</option>
                                            <option value="+234">🇳🇬 +234</option>
                                            <option value="+55">🇧🇷 +55</option>
                                            <option value="+20">🇪🇬 +20</option>
                                            <option value="+7">🇷🇺 +7</option>
                                            <option value="+34">🇪🇸 +34</option>

                                        </select>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder=""
                                            required
                                        />
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label>Quantity</label>
                                    <select
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                    >
                                        {[...Array(maxQuantity)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group full-width">
                                    <label>Delivery Address</label>
                                    <textarea
                                        name="address"
                                        rows="3"
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group full-width">
                                    <label>Custom Message</label>
                                    <textarea
                                        name="customMessage"
                                        rows="3"
                                        value={formData.customMessage}
                                        onChange={handleChange}
                                        placeholder="Write any special instructions..."
                                    />
                                </div>

                            </div>

                            {/* Submit button centered */}
                            <div className="button-wrapper">
                                <button type="submit" className="submit-btn">
                                    Submit Order
                                </button>
                            </div>
                        </div>
                    </form>

                ) : (
                    <p>No product selected.</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Contact;
