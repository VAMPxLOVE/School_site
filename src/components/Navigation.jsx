import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="site-header">
            {/* Top Bar / Affiliation & Quick Links */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="top-bar-left">
                        <span className="top-bar-item">
                            🏛️ <strong>CBSE Affiliation No:</strong> 2131027
                        </span>
                        <span className="top-bar-divider">|</span>
                        <a href="tel:+918287710710" className="top-bar-item">
                            📞 +91 8287710710
                        </a>
                        <span className="top-bar-divider">|</span>
                        <a href="mailto:drpconventschool@gmail.com" className="top-bar-item">
                            ✉️ drpconventschool@gmail.com
                        </a>
                    </div>
                    <div className="top-bar-right">
                        <Link to="/admissions" className="top-bar-badge badge-pulse">
                            🎓 Admissions 2026-27 Open
                        </Link>
                        <Link to="/login" className="top-bar-btn">
                            🔐 ERP Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className="main-navbar">
                <div className="container navbar-content">
                    {/* School Brand & Logo */}
                    <Link to="/" className="brand-logo">
                        <img
                            src="/assets/logo.jpg"
                            alt="D.R.P. Convent Public School Logo"
                            className="brand-logo-img"
                        />
                        <div className="brand-text">
                            <span className="brand-title">D.R.P. CONVENT</span>
                            <span className="brand-subtitle">PUBLIC SCHOOL</span>
                            <span className="brand-tagline">Affiliated to C.B.S.E., New Delhi</span>
                        </div>
                    </Link>

                    {/* Mobile Toggle Button */}
                    <button
                        className="menu-toggle"
                        aria-label="Toggle navigation"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>

                    {/* Navigation Menu */}
                    <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li>
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                                Home
                            </Link>
                        </li>

                        <li className="dropdown">
                            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                                About Us <span className="dropdown-arrow">▾</span>
                            </Link>
                            <ul className="dropdown-content">
                                <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About School</Link></li>
                                <li><Link to="/founder" onClick={() => setIsMobileMenuOpen(false)}>Founder's Desk</Link></li>
                                <li><Link to="/vision" onClick={() => setIsMobileMenuOpen(false)}>Vision & Goals</Link></li>
                                <li><Link to="/mission" onClick={() => setIsMobileMenuOpen(false)}>Mission & Core Values</Link></li>
                                <li><Link to="/faculty" onClick={() => setIsMobileMenuOpen(false)}>Our Faculty</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="/academics" onClick={() => setIsMobileMenuOpen(false)}>
                                Academics <span className="dropdown-arrow">▾</span>
                            </Link>
                            <ul className="dropdown-content">
                                <li><Link to="/academics" onClick={() => setIsMobileMenuOpen(false)}>Curriculum & Pedagogy</Link></li>
                                <li><Link to="/calendar" onClick={() => setIsMobileMenuOpen(false)}>School Calendar</Link></li>
                                <li><Link to="/conduct" onClick={() => setIsMobileMenuOpen(false)}>Parents & Visitor Conduct</Link></li>
                                <li><Link to="/downloads" onClick={() => setIsMobileMenuOpen(false)}>Download Center</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
                                Admissions
                            </Link>
                        </li>

                        <li>
                            <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
                                Campus Life & Gallery
                            </Link>
                        </li>

                        <li className="dropdown">
                            <Link to="/notices" onClick={() => setIsMobileMenuOpen(false)}>
                                Student Zone <span className="dropdown-arrow">▾</span>
                            </Link>
                            <ul className="dropdown-content">
                                <li><Link to="/results" onClick={() => setIsMobileMenuOpen(false)}>Check Board Results</Link></li>
                                <li><Link to="/notices" onClick={() => setIsMobileMenuOpen(false)}>Notices & Circulars</Link></li>
                                <li><Link to="/downloads" onClick={() => setIsMobileMenuOpen(false)}>Syllabus & Assignments</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                Contact Us
                            </Link>
                        </li>

                        {/* CTA Button */}
                        <li className="nav-cta-item">
                            <Link
                                to="/admissions"
                                className="nav-btn-apply"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Enquire Now &rarr;
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
