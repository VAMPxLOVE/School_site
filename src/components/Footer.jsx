import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
            {/* Top Institutional Banner */}
            <div className="footer-top-strip">
                <div className="container footer-top-content">
                    <div className="footer-brand-info">
                        <img src="/assets/logo.jpg" alt="D.R.P. Convent Public School Logo" className="footer-logo-img" />
                        <div>
                            <h3 className="footer-school-name">D.R.P. CONVENT PUBLIC SCHOOL</h3>
                            <span className="footer-affil-text">Recognized & Affiliated to C.B.S.E., New Delhi | Affiliation No: 2131027</span>
                        </div>
                    </div>
                    <div className="footer-top-cta">
                        <Link to="/admissions" className="footer-btn-apply">
                            Online Admission Form &rarr;
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main 4-Column Footer */}
            <div className="container footer-main-content">
                <div className="footer-grid">
                    {/* Col 1: About & Motto */}
                    <div className="footer-col">
                        <h4 className="footer-heading">About Institution</h4>
                        <p className="footer-text">
                            D.R.P. Convent Public School is committed to delivering quality CBSE education, fostering moral integrity, academic brilliance, and co-curricular excellence since 1998.
                        </p>
                        <div className="footer-badge-wrap">
                            <span className="footer-pill-badge">🎓 28+ Years of Service</span>
                            <span className="footer-pill-badge">🌟 2400+ Alumni</span>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About School & Heritage</Link></li>
                            <li><Link to="/founder">Founder's Desk</Link></li>
                            <li><Link to="/vision">Vision & Core Mission</Link></li>
                            <li><Link to="/faculty">Faculty & Staff</Link></li>
                            <li><Link to="/admissions">Admissions & Eligibility</Link></li>
                            <li><Link to="/gallery">Photo Gallery (Campus & Events)</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Academics & Student Zone */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Academics & Student Zone</h4>
                        <ul className="footer-links">
                            <li><Link to="/academics">CBSE Curriculum & Pedagogy</Link></li>
                            <li><Link to="/calendar">Annual Academic Calendar</Link></li>
                            <li><Link to="/results">Board Examination Results</Link></li>
                            <li><Link to="/downloads">Download Syllabus & Booklets</Link></li>
                            <li><Link to="/notices">Official Notices & Circulars</Link></li>
                            <li><Link to="/conduct">Parent & Visitor Guidelines</Link></li>
                        </ul>
                    </div>

                    {/* Col 4: Contact & Office */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Contact & Location</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <span className="contact-icon">📍</span>
                                <span>Near Shiv Vihar Tiraha & Gokalpuri, Main Road, Gokalpuri, Delhi-110094</span>
                            </li>
                            <li>
                                <span className="contact-icon">📞</span>
                                <a href="tel:+918287710710">+91 8287710710</a>
                            </li>
                            <li>
                                <span className="contact-icon">✉️</span>
                                <a href="mailto:drpconventschool@gmail.com">drpconventschool@gmail.com</a>
                            </li>
                            <li>
                                <span className="contact-icon">⏰</span>
                                <span>Mon - Sat: 8:00 AM – 2:30 PM</span>
                            </li>
                        </ul>

                        {/* Social Channels */}
                        <div className="footer-social-wrap">
                            <span className="social-label">Connect:</span>
                            <div className="social-icons-row">
                                <a href="https://www.instagram.com/drpschool/" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="Instagram">
                                    📸
                                </a>
                                <a href="#" className="social-circle-link" aria-label="Facebook">
                                    📘
                                </a>
                                <a href="#" className="social-circle-link" aria-label="YouTube">
                                    ▶️
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="footer-bottom-bar">
                <div className="container footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} D.R.P. CONVENT PUBLIC SCHOOL. All Rights Reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <span>•</span>
                        <Link to="/terms">Terms of Use</Link>
                        <span>•</span>
                        <Link to="/login">ERP Admin Login</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
