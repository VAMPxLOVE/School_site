import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
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

    // Close mobile menu and collapse dropdowns on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
    }, [location.pathname]);

    const isActive = (path) => location.pathname === path;
    const isParentActive = (paths) => paths.some(p => location.pathname === p);

    const handleDropdownToggle = (e, menuName) => {
        // On mobile screen widths, toggle accordion sub-menu
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            e.stopPropagation();
            setOpenMobileDropdown(prev => prev === menuName ? null : menuName);
        }
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
    };

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
                        <a href="tel:+919312558500" className="top-bar-item">
                            <i className="fa-solid fa-phone"></i> +91 9312558500
                        </a>
                        <span className="top-bar-divider hide-mobile">|</span>
                        <a href="mailto:drpconventschool@gmail.com" className="top-bar-item hide-mobile">
                            <i className="fa-solid fa-envelope"></i> drpconventschool@gmail.com
                        </a>
                    </div>
                    <div className="top-bar-right">
                        <Link to="/calendar" onClick={handleLinkClick} className="top-bar-link-pill hide-mobile">
                            <i className="fa-regular fa-calendar-days"></i> Calendar
                        </Link>
                        <Link to="/downloads" onClick={handleLinkClick} className="top-bar-link-pill hide-mobile">
                            <i className="fa-solid fa-file-arrow-down"></i> Circulars
                        </Link>
                        <Link to="/admissions" onClick={handleLinkClick} className="top-bar-badge badge-pulse">
                            <span className="sparkle-icon">✨</span> Admissions 2026-27 Open
                        </Link>
                        <Link to="/login" onClick={handleLinkClick} className="top-bar-btn">
                            <i className="fa-solid fa-user-lock"></i> ERP Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* --- MAIN GURUKUL NAVBAR --- */}
            <nav className="main-navbar">
                <div className="container navbar-content">
                    {/* Brand Crest & Title */}
                    <Link to="/" onClick={handleLinkClick} className="brand-logo">
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
                                <span className="gold-ornament">✦</span> AFFILIATED TO C.B.S.E., NEW DELHI (UPTO CLASS X) <span className="gold-ornament">✦</span>
                            </span>
                        </div>
                    </Link>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        className={`menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                        aria-label="Toggle navigation menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="bar bar-1"></span>
                        <span className="bar bar-2"></span>
                        <span className="bar bar-3"></span>
                    </button>

                    {/* Navigation Menu Tabs */}
                    <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <Link to="/" onClick={handleLinkClick} className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                                Home
                            </Link>
                        </li>

                        {/* About Us Dropdown */}
                        <li className={`nav-item dropdown ${openMobileDropdown === 'about' ? 'mobile-expanded' : ''} ${isParentActive(['/about', '/founder', '/vision', '/mission', '/faculty']) ? 'active' : ''}`}>
                            <div
                                className="nav-link nav-dropdown-toggle"
                                onClick={(e) => handleDropdownToggle(e, 'about')}
                                role="button"
                                tabIndex={0}
                            >
                                <Link to="/about" onClick={(e) => { if (window.innerWidth <= 1024) { e.preventDefault(); handleDropdownToggle(e, 'about'); } else { handleLinkClick(); } }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <span>About Us</span>
                                </Link>
                                <i className={`fa-solid fa-chevron-down nav-dropdown-arrow ${openMobileDropdown === 'about' ? 'rotated' : ''}`}></i>
                            </div>
                            <ul className={`dropdown-content ${openMobileDropdown === 'about' ? 'show-mobile' : ''}`}>
                                <li>
                                    <Link to="/about" onClick={handleLinkClick} className={isActive('/about') ? 'active' : ''}>
                                        <i className="fa-solid fa-school"></i> About Institution
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/founder" onClick={handleLinkClick} className={isActive('/founder') ? 'active' : ''}>
                                        <i className="fa-solid fa-feather"></i> Founder's Desk
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/vision" onClick={handleLinkClick} className={isActive('/vision') ? 'active' : ''}>
                                        <i className="fa-regular fa-eye"></i> Vision & Goals
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/mission" onClick={handleLinkClick} className={isActive('/mission') ? 'active' : ''}>
                                        <i className="fa-solid fa-bullseye"></i> Mission & Values
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faculty" onClick={handleLinkClick} className={isActive('/faculty') ? 'active' : ''}>
                                        <i className="fa-solid fa-chalkboard-user"></i> Dedicated Faculty
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Academics Dropdown */}
                        <li className={`nav-item dropdown ${openMobileDropdown === 'academics' ? 'mobile-expanded' : ''} ${isParentActive(['/academics', '/calendar', '/conduct', '/downloads']) ? 'active' : ''}`}>
                            <div
                                className="nav-link nav-dropdown-toggle"
                                onClick={(e) => handleDropdownToggle(e, 'academics')}
                                role="button"
                                tabIndex={0}
                            >
                                <Link to="/academics" onClick={(e) => { if (window.innerWidth <= 1024) { e.preventDefault(); handleDropdownToggle(e, 'academics'); } else { handleLinkClick(); } }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <span>Academics</span>
                                </Link>
                                <i className={`fa-solid fa-chevron-down nav-dropdown-arrow ${openMobileDropdown === 'academics' ? 'rotated' : ''}`}></i>
                            </div>
                            <ul className={`dropdown-content ${openMobileDropdown === 'academics' ? 'show-mobile' : ''}`}>
                                <li>
                                    <Link to="/academics" onClick={handleLinkClick} className={isActive('/academics') ? 'active' : ''}>
                                        <i className="fa-solid fa-book-open-reader"></i> Curriculum Stages (Upto X)
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/calendar" onClick={handleLinkClick} className={isActive('/calendar') ? 'active' : ''}>
                                        <i className="fa-regular fa-calendar"></i> School Calendar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/conduct" onClick={handleLinkClick} className={isActive('/conduct') ? 'active' : ''}>
                                        <i className="fa-solid fa-handshake-angle"></i> Parent Conduct Code
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/downloads" onClick={handleLinkClick} className={isActive('/downloads') ? 'active' : ''}>
                                        <i className="fa-solid fa-download"></i> Download Center
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Admissions */}
                        <li className="nav-item">
                            <Link to="/admissions" onClick={handleLinkClick} className={`nav-link ${isActive('/admissions') ? 'active' : ''}`}>
                                Admissions
                            </Link>
                        </li>

                        {/* Campus Life & Gallery */}
                        <li className="nav-item">
                            <Link to="/gallery" onClick={handleLinkClick} className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>
                                Gallery & Events
                            </Link>
                        </li>

                        {/* Student Zone Dropdown */}
                        <li className={`nav-item dropdown ${openMobileDropdown === 'student-zone' ? 'mobile-expanded' : ''} ${isParentActive(['/results', '/notices']) ? 'active' : ''}`}>
                            <div
                                className="nav-link nav-dropdown-toggle"
                                onClick={(e) => handleDropdownToggle(e, 'student-zone')}
                                role="button"
                                tabIndex={0}
                            >
                                <Link to="/results" onClick={(e) => { if (window.innerWidth <= 1024) { e.preventDefault(); handleDropdownToggle(e, 'student-zone'); } else { handleLinkClick(); } }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <span>Student Zone</span>
                                </Link>
                                <i className={`fa-solid fa-chevron-down nav-dropdown-arrow ${openMobileDropdown === 'student-zone' ? 'rotated' : ''}`}></i>
                            </div>
                            <ul className={`dropdown-content ${openMobileDropdown === 'student-zone' ? 'show-mobile' : ''}`}>
                                <li>
                                    <Link to="/results" onClick={handleLinkClick} className={isActive('/results') ? 'active' : ''}>
                                        <i className="fa-solid fa-trophy"></i> CBSE Board Results
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/notices" onClick={handleLinkClick} className={isActive('/notices') ? 'active' : ''}>
                                        <i className="fa-solid fa-bullhorn"></i> Notices & Circulars
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/downloads" onClick={handleLinkClick} className={isActive('/downloads') ? 'active' : ''}>
                                        <i className="fa-solid fa-file-pdf"></i> Syllabus & Worksheets
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Contact Us */}
                        <li className="nav-item">
                            <Link to="/contact" onClick={handleLinkClick} className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                                Contact Us
                            </Link>
                        </li>

                        {/* Royal CTA Apply Button */}
                        <li className="nav-cta-item">
                            <Link to="/admissions" onClick={handleLinkClick} className="nav-btn-apply">
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
