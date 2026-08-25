import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Track scroll for sticky navbar shadow
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const isActive = (path) => location.pathname === path;
    const isParentActive = (paths) => paths.some(p => location.pathname === p);

    return (
        <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
            {/* --- TOP GURUKUL UTILITY & AFFILIATION STRIP --- */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="top-bar-left">
                        <span className="top-bar-item affiliation-badge">
                            <i className="fa-solid fa-landmark"></i> <strong>CBSE Affiliation No:</strong> 2131027
                        </span>
                        <span className="top-bar-divider">|</span>
                        <a href="tel:+918287710710" className="top-bar-item">
                            <i className="fa-solid fa-phone"></i> +91 8287710710
                        </a>
                        <span className="top-bar-divider hide-mobile">|</span>
                        <a href="mailto:drpconventschool@gmail.com" className="top-bar-item hide-mobile">
                            <i className="fa-solid fa-envelope"></i> drpconventschool@gmail.com
                        </a>
                    </div>
                    <div className="top-bar-right">
                        <Link to="/calendar" className="top-bar-link-pill hide-mobile">
                            <i className="fa-regular fa-calendar-days"></i> Calendar
                        </Link>
                        <Link to="/downloads" className="top-bar-link-pill hide-mobile">
                            <i className="fa-solid fa-file-arrow-down"></i> Circulars
                        </Link>
                        <Link to="/admissions" className="top-bar-badge badge-pulse">
                            <span className="sparkle-icon">✨</span> Admissions 2026-27 Open
                        </Link>
                        <Link to="/login" className="top-bar-btn">
                            <i className="fa-solid fa-user-lock"></i> ERP Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* --- MAIN GURUKUL NAVBAR --- */}
            <nav className="main-navbar">
                <div className="container navbar-content">
                    {/* Brand Crest & Title */}
                    <Link to="/" className="brand-logo">
                        <div className="brand-logo-frame">
                            <img
                                src="/assets/logo.jpg"
                                alt="D.R.P. Convent Public School Emblem"
                                className="brand-logo-img"
                            />
                        </div>
                        <div className="brand-text">
                            <span className="brand-title">D.R.P. CONVENT</span>
                            <span className="brand-subtitle">PUBLIC SCHOOL</span>
                            <span className="brand-tagline">
                                <span className="gold-ornament">✦</span> AFFILIATED TO C.B.S.E., NEW DELHI (10+2) <span className="gold-ornament">✦</span>
                            </span>
                        </div>
                    </Link>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        className={`menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                        aria-label="Toggle navigation menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Navigation Menu Tabs */}
                    <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                                Home
                            </Link>
                        </li>

                        {/* About Us Dropdown */}
                        <li className={`nav-item dropdown ${isParentActive(['/about', '/founder', '/vision', '/mission', '/faculty']) ? 'active' : ''}`}>
                            <Link to="/about" className="nav-link">
                                About Us <span className="dropdown-arrow">▾</span>
                            </Link>
                            <ul className="dropdown-content">
                                <li>
                                    <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                                        <i className="fa-solid fa-school"></i> About Institution
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/founder" className={isActive('/founder') ? 'active' : ''}>
                                        <i className="fa-solid fa-feather"></i> Founder's Desk
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/vision" className={isActive('/vision') ? 'active' : ''}>
                                        <i className="fa-regular fa-eye"></i> Vision & Goals
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/mission" className={isActive('/mission') ? 'active' : ''}>
                                        <i className="fa-solid fa-bullseye"></i> Mission & Values
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faculty" className={isActive('/faculty') ? 'active' : ''}>
                                        <i className="fa-solid fa-chalkboard-user"></i> Dedicated Faculty
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Academics Dropdown */}
                        <li className={`nav-item dropdown ${isParentActive(['/academics', '/calendar', '/conduct', '/downloads']) ? 'active' : ''}`}>
                            <Link to="/academics" className="nav-link">
                                Academics <span className="dropdown-arrow">▾</span>
                            </Link>
                            <ul className="dropdown-content">
                                <li>
                                    <Link to="/academics" className={isActive('/academics') ? 'active' : ''}>
                                        <i className="fa-solid fa-book-open-reader"></i> Curriculum Stages
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/calendar" className={isActive('/calendar') ? 'active' : ''}>
                                        <i className="fa-regular fa-calendar"></i> School Calendar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/conduct" className={isActive('/conduct') ? 'active' : ''}>
                                        <i className="fa-solid fa-handshake-angle"></i> Parent Conduct Code
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/downloads" className={isActive('/downloads') ? 'active' : ''}>
                                        <i className="fa-solid fa-download"></i> Download Center
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Admissions */}
                        <li className="nav-item">
                            <Link to="/admissions" className={`nav-link ${isActive('/admissions') ? 'active' : ''}`}>
                                Admissions
                            </Link>
                        </li>

                        {/* Campus Life & Gallery */}
                        <li className="nav-item">
                            <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>
                                Gallery & Events
                            </Link>
                        </li>

                        {/* Student Zone Dropdown */}
                        <li className={`nav-item dropdown ${isParentActive(['/results', '/notices']) ? 'active' : ''}`}>
                            <Link to="/notices" className="nav-link">
                                Student Zone <span className="dropdown-arrow">▾</span>
                            </Link>
                            <ul className="dropdown-content">
                                <li>
                                    <Link to="/results" className={isActive('/results') ? 'active' : ''}>
                                        <i className="fa-solid fa-trophy"></i> CBSE Board Results
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/notices" className={isActive('/notices') ? 'active' : ''}>
                                        <i className="fa-solid fa-bullhorn"></i> Notices & Circulars
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/downloads" className={isActive('/downloads') ? 'active' : ''}>
                                        <i className="fa-solid fa-file-pdf"></i> Syllabus & Worksheets
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Contact Us */}
                        <li className="nav-item">
                            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                                Contact Us
                            </Link>
                        </li>

                        {/* Royal CTA Apply Button */}
                        <li className="nav-cta-item">
                            <Link to="/admissions" className="nav-btn-apply">
                                <span>Enquire Now</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
