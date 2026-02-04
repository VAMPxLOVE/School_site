import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="glass navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    <img src="/assets/logo.jpg" alt="D.R.P. Convent Public School" style={{ height: '60px', width: 'auto' }} />
                </Link>
                <button
                    className="menu-toggle"
                    aria-label="Toggle navigation"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </button>
                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li className="dropdown">
                        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us ▾</Link>
                        <ul className="dropdown-content">
                            <li><Link to="/founder" onClick={() => setIsMobileMenuOpen(false)}>Founder's Desk</Link></li>
                            <li><Link to="/vision" onClick={() => setIsMobileMenuOpen(false)}>Vision</Link></li>
                            <li><Link to="/mission" onClick={() => setIsMobileMenuOpen(false)}>Mission & Values</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/academics" onClick={() => setIsMobileMenuOpen(false)}>Academics</Link></li>
                    <li><Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>Admissions</Link></li>
                    <li><Link to="/results" onClick={() => setIsMobileMenuOpen(false)}>Results</Link></li>
                    <li><Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>
                    <li><Link to="/notices" onClick={() => setIsMobileMenuOpen(false)}>Notices</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
