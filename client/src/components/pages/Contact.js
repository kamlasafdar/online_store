// // src/components/pages/Contact.js
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './Contact.css';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
// import { toast } from 'react-toastify';


// const Contact = () => {
//     const { state } = useLocation();
//     const product = state?.product;

//     const phoneLengthByCountry = {
//         '+92': { length: 10, hint: 'e.g. 3001234567' },
//         '+91': { length: 10, hint: 'e.g. 9123456789' },
//         '+1': { length: 10, hint: 'e.g. 4151234567' },
//         '+44': { length: 10, hint: 'e.g. 7123456789' },
//         '+971': { length: 9, hint: 'e.g. 501234567' },
//         '+61': { length: 9, hint: 'e.g. 412345678' },
//         '+81': { length: 10, hint: 'e.g. 9012345678' },
//         '+49': { length: 11, hint: 'e.g. 15123456789' },
//         '+33': { length: 9, hint: 'e.g. 612345678' },
//         '+966': { length: 9, hint: 'e.g. 501234567' },
//         '+880': { length: 10, hint: 'e.g. 1812345678' },
//         '+86': { length: 11, hint: 'e.g. 13123456789' },
//         '+234': { length: 10, hint: 'e.g. 8012345678' },
//         '+55': { length: 11, hint: 'e.g. 11912345678' },
//         '+20': { length: 10, hint: 'e.g. 1012345678' },
//         '+7': { length: 10, hint: 'e.g. 9123456789' },
//         '+34': { length: 9, hint: 'e.g. 612345678' },
//     };


//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         quantity: '1',
//         address: '',
//         customMessage: ''
//     });


//     const maxQuantity = 10; // You can make this dynamic if needed

//     const handleChange = (e) => {
//         setFormData((prev) => ({
//             ...prev,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const expectedLength = phoneLengthByCountry[formData.countryCode]?.length || 10;

//         if (formData.phone.length !== expectedLength) {
//             const hint = phoneLengthByCountry[formData.countryCode]?.hint || '';
//             toast.error(`Phone number is not valid. It should be ${expectedLength} digits. ${hint}`);
//             return;
//         }


//         try {
//             const response = await fetch('http://localhost:5000/api/send-email', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ formData, product }),
//             });

//             const result = await response.json();
//             if (response.ok) {
//                 toast.success('Order sent successfully!');

//             } else {
//                 toast.error('Something went wrong' + result.message);
//             }
//         } catch (error) {
//             toast.error('Something went wrong');
//         }
//     };


//     return (
//         <>
//             <Navbar />
//             <div className="contact-page">
//                 <h2>Order Product</h2>

//                 {product ? (
//                     <form className="contact-form" onSubmit={handleSubmit}>
//                         <div className="form-box">
//                             <div className="form-grid">
//                                 {/* Product info */}
//                                 <div className="form-group">
//                                     <label>Item</label>
//                                     <input type="text" value={product.name} disabled />
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Category</label>
//                                     <input type="text" value={product.category} disabled />
//                                 </div>

//                                 {/* User inputs */}
//                                 <div className="form-group">
//                                     <label>Your Name</label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         required
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Email</label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         required
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 <div className="form-group">
//                                     <label>Phone Number</label>
//                                     <div className="phone-inline">
//                                         <select
//                                             name="countryCode"
//                                             value={formData.countryCode}
//                                             onChange={handleChange}
//                                             className="country-code"
//                                         >
//                                             <option value="+92">🇵🇰 +92</option>
//                                             <option value="+91">🇮🇳 +91</option>
//                                             <option value="+1">🇺🇸 +1</option>
//                                             <option value="+44">🇬🇧 +44</option>
//                                             <option value="+971">🇦🇪 +971</option>
//                                             <option value="+61">🇦🇺 +61</option>
//                                             <option value="+81">🇯🇵 +81</option>
//                                             <option value="+49">🇩🇪 +49</option>
//                                             <option value="+33">🇫🇷 +33</option>
//                                             <option value="+966">🇸🇦 +966</option>
//                                             <option value="+880">🇧🇩 +880</option>
//                                             <option value="+86">🇨🇳 +86</option>
//                                             <option value="+234">🇳🇬 +234</option>
//                                             <option value="+55">🇧🇷 +55</option>
//                                             <option value="+20">🇪🇬 +20</option>
//                                             <option value="+7">🇷🇺 +7</option>
//                                             <option value="+34">🇪🇸 +34</option>

//                                         </select>

//                                         <div style={{ display: 'flex', flexDirection: 'column' }}>
//                                             <input
//                                                 type="tel"
//                                                 name="phone"
//                                                 value={formData.phone}
//                                                 onChange={handleChange}
//                                                 placeholder=""
//                                                 required
//                                             />

//                                             <p style={{ fontSize: '0.725rem', color: '#2D7D7B', marginTop: '4px' , fontWeight: 'bold'}}>
//                                                 {
//                                                     phoneLengthByCountry[formData.countryCode]
//                                                         ? `Phone format: ${phoneLengthByCountry[formData.countryCode].hint}`
//                                                         : 'Phone format: e.g. 1234567890'
//                                                 }
//                                             </p>
//                                         </div>

//                                     </div>
//                                 </div>


//                                 <div className="form-group">
//                                     <label>Quantity</label>
//                                     <select
//                                         name="quantity"
//                                         value={formData.quantity}
//                                         onChange={handleChange}
//                                     >
//                                         {[...Array(maxQuantity)].map((_, i) => (
//                                             <option key={i + 1} value={i + 1}>
//                                                 {i + 1}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </div>

//                                 <div className="form-group full-width">
//                                     <label>Delivery Address</label>
//                                     <textarea
//                                         name="address"
//                                         rows="3"
//                                         required
//                                         value={formData.address}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="form-group full-width">
//                                     <label>Custom Message</label>
//                                     <textarea
//                                         name="customMessage"
//                                         rows="3"
//                                         value={formData.customMessage}
//                                         onChange={handleChange}
//                                         placeholder="Write any special instructions..."
//                                     />
//                                 </div>

//                             </div>

//                             {/* Submit button centered */}
//                             <div className="button-wrapper">
//                                 <button type="submit" className="submit-btn">
//                                     Submit Order
//                                 </button>
//                             </div>
//                         </div>
//                     </form>

//                 ) : (
//                     <p>No product selected.</p>
//                 )}
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Contact;

// src/components/pages/Contact.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { toast } from 'react-toastify';
import T, { useAutoTranslate } from '../Translatable';

const Contact = () => {
    const { state } = useLocation();
    const product = state?.product;
    const { isRTL } = useAutoTranslate();

    const phoneLengthByCountry = {
        '+92': { length: 10, hint: 'e.g. 3001234567' },
        '+91': { length: 10, hint: 'e.g. 9123456789' },
        '+1': { length: 10, hint: 'e.g. 4151234567' },
        '+44': { length: 10, hint: 'e.g. 7123456789' },
        '+971': { length: 9, hint: 'e.g. 501234567' },
        '+61': { length: 9, hint: 'e.g. 412345678' },
        '+81': { length: 10, hint: 'e.g. 9012345678' },
        '+49': { length: 11, hint: 'e.g. 15123456789' },
        '+33': { length: 9, hint: 'e.g. 612345678' },
        '+966': { length: 9, hint: 'e.g. 501234567' },
        '+880': { length: 10, hint: 'e.g. 1812345678' },
        '+86': { length: 11, hint: 'e.g. 13123456789' },
        '+234': { length: 10, hint: 'e.g. 8012345678' },
        '+55': { length: 11, hint: 'e.g. 11912345678' },
        '+20': { length: 10, hint: 'e.g. 1012345678' },
        '+7': { length: 10, hint: 'e.g. 9123456789' },
        '+34': { length: 9, hint: 'e.g. 612345678' },
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        quantity: '1',
        address: '',
        customMessage: ''
    });

    const maxQuantity = 10;

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const expectedLength = phoneLengthByCountry[formData.countryCode]?.length || 10;

        if (formData.phone.length !== expectedLength) {
            const hint = phoneLengthByCountry[formData.countryCode]?.hint || '';
            toast.error(`Phone number is not valid. It should be ${expectedLength} digits. ${hint}`);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData, product }),
            });

            const result = await response.json();
            if (response.ok) {
                toast.success('Order sent successfully!');
            } else {
                toast.error('Something went wrong' + result.message);
            }
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    return (
        <>
            <Navbar />
            <div className={`contact-page ${isRTL ? 'rtl' : 'ltr'}`}>
                <h2><T>Order Product</T></h2>

                {product ? (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-box">
                            <div className="form-grid">
                                {/* Product info */}
                                <div className="form-group">
                                    <label><T>Item</T></label>
                                    <input type="text" value={product.name} disabled />
                                </div>
                                <div className="form-group">
                                    <label><T>Category</T></label>
                                    <input type="text" value={product.category} disabled />
                                </div>

                                {/* User inputs */}
                                <div className="form-group">
                                    <label><T>Your Name</T></label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label><T>Email</T></label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><T>Phone Number</T></label>
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

                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder=""
                                                required
                                            />

                                            <p style={{ fontSize: '0.725rem', color: '#2D7D7B', marginTop: '4px' , fontWeight: 'bold'}}>
                                                <T>Phone format</T>: {
                                                    phoneLengthByCountry[formData.countryCode]
                                                        ? phoneLengthByCountry[formData.countryCode].hint
                                                        : 'e.g. 1234567890'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label><T>Quantity</T></label>
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
                                    <label><T>Delivery Address</T></label>
                                    <textarea
                                        name="address"
                                        rows="3"
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group full-width">
                                    <label><T>Custom Message</T></label>
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
                                    <T>Submit Order</T>
                                </button>
                            </div>
                        </div>
                    </form>

                ) : (
                    <p><T>No product selected.</T></p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Contact;