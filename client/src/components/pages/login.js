import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [currentTheme, setCurrentTheme] = useState('blue');
    const [showThemes, setShowThemes] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const themes = [
        { name: 'red', color: '#ef4444' },
        { name: 'blue', color: '#3b82f6' },
        { name: 'green', color: '#10b981' },
        { name: 'orange', color: '#f97316' },
        { name: 'black', color: '#1f2937' }
    ];

    const handleThemeChange = (themeName) => {
        setCurrentTheme(themeName);
        setShowThemes(false);
        document.documentElement.setAttribute('data-theme', themeName);
    };

    const toggleThemeSelector = () => {
        setShowThemes(!showThemes);
    };

    const getCurrentThemeColor = () => {
        return themes.find(theme => theme.name === currentTheme)?.color || '#3b82f6';
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Login attempt:', { email: formData.email, password: formData.password });
            // Add your login logic here
        } else {
            console.log('Signup attempt:', formData);
            // Add your signup logic here
        }
    };

    const handleGoogleSignIn = () => {
        console.log('Google Sign-In clicked');
        // Add your Google OAuth logic here
    };

    return (
        <div className="login-container" data-theme={currentTheme}>
            <div className="login-card">
                {/* Logo and Header */}
                <div className="login-header">
                    <div className="logo">
                        <div className="logo-icon">S</div>
                        <h1>ShopEasy</h1>
                    </div>
                    <p className="welcome-text">
                        {isLogin ? 'Welcome back!' : 'Create your account'}
                    </p>
                </div>

                {/* Theme Selector */}
                <div className="theme-selector">
                    <div className="theme-toggle">
                        <button
                            className="main-theme-circle"
                            style={{ backgroundColor: getCurrentThemeColor() }}
                            onClick={toggleThemeSelector}
                            aria-label="Change theme"
                        >
                            <span className="theme-icon">🎨</span>
                        </button>

                        {showThemes && (
                            <div className="theme-options">
                                {themes.map((theme) => (
                                    <button
                                        key={theme.name}
                                        className={`theme-circle ${currentTheme === theme.name ? 'active' : ''}`}
                                        style={{ backgroundColor: theme.color }}
                                        onClick={() => handleThemeChange(theme.name)}
                                        aria-label={`Switch to ${theme.name} theme`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Tab Toggle */}
                <div className="tab-container">
                    <button
                        className={`tab-button ${isLogin ? 'active' : ''}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`tab-button ${!isLogin ? 'active' : ''}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Form */}
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            className="form-input"
                        />
                    </div>

                    {!isLogin && (
                        <div className="input-group">
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                                className="form-input"
                            />
                        </div>
                    )}

                    {isLogin && (
                        <div className="forgot-password">
                            <a href="#forgot">Forgot your password?</a>
                        </div>
                    )}

                    <button type="submit" className="submit-button">
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>

                    <div className="divider">
                        <span>or</span>
                    </div>

                    <button
                        type="button"
                        className="google-button"
                        onClick={handleGoogleSignIn}
                    >
                        <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Sign {isLogin ? 'in' : 'up'} with Google
                    </button>

                    <div className="switch-form">
                        {isLogin ? (
                            <p>
                                Don't have an account?{' '}
                                <button
                                    type="button"
                                    className="link-button"
                                    onClick={() => setIsLogin(false)}
                                >
                                    Sign up
                                </button>
                            </p>
                        ) : (
                            <p>
                                Already have an account?{' '}
                                <button
                                    type="button"
                                    className="link-button"
                                    onClick={() => setIsLogin(true)}
                                >
                                    Sign in
                                </button>
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;