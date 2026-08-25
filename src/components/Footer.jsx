import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
            {/* Top Institutional Banner */}
            <div className="footer-top-strip">
                <div className="container footer-top-content">
                    <div className="footer-brand-info">
                        <div className="footer-logo-frame">
                            <img src="/assets/logo.jpg" alt="D.R.P. Convent Public School Logo" className="footer-logo-img" />
                        </div>
                        <div>
                            <h3 className="footer-school-name">D.R.P. CONVENT PUBLIC SCHOOL</h3>
                            <span className="footer-affil-text">
                                <i className="fa-solid fa-certificate gold-text"></i> Recognized & Affiliated to C.B.S.E., New Delhi | Affiliation No: 2131027
                            </span>
                        </div>
                    </div>
                    <div className="footer-top-cta">
                        <Link to="/admissions" className="footer-btn-apply">
                            <span>Online Admission Enquiry</span>
                            <i className="fa-solid fa-arrow-right"></i>
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
                            D.R.P. Convent Public School is committed to delivering holistic CBSE education, fostering moral integrity, academic brilliance, and co-curricular leadership since 1998.
                        </p>
                        <div className="footer-badge-wrap">
                            <span className="footer-pill-badge"><i className="fa-solid fa-award"></i> 28+ Years of Service</span>
                            <span className="footer-pill-badge"><i className="fa-solid fa-user-graduate"></i> 2400+ Alumni</span>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Institutional Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/about"><i className="fa-solid fa-chevron-right"></i> About School & Heritage</Link></li>
                            <li><Link to="/founder"><i className="fa-solid fa-chevron-right"></i> Founder's Vision Desk</Link></li>
                            <li><Link to="/vision"><i className="fa-solid fa-chevron-right"></i> Vision & Core Goals</Link></li>
                            <li><Link to="/faculty"><i className="fa-solid fa-chevron-right"></i> Our Dedicated Faculty</Link></li>
                            <li><Link to="/admissions"><i className="fa-solid fa-chevron-right"></i> Admissions & Eligibility</Link></li>
                            <li><Link to="/gallery"><i className="fa-solid fa-chevron-right"></i> Campus Life & Visual Chronicles</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Academics & Student Zone */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Academics & Student Zone</h4>
                        <ul className="footer-links">
                            <li><Link to="/academics"><i className="fa-solid fa-chevron-right"></i> CBSE Curriculum & Wings</Link></li>
                            <li><Link to="/calendar"><i className="fa-solid fa-chevron-right"></i> Annual Academic Calendar</Link></li>
                            <li><Link to="/results"><i className="fa-solid fa-chevron-right"></i> Board Examination Results</Link></li>
                            <li><Link to="/downloads"><i className="fa-solid fa-chevron-right"></i> Download Center & Syllabus</Link></li>
                            <li><Link to="/notices"><i className="fa-solid fa-chevron-right"></i> Official Notices & Circulars</Link></li>
                            <li><Link to="/conduct"><i className="fa-solid fa-chevron-right"></i> Parent & Visitor Code</Link></li>
                        </ul>
                    </div>

                    {/* Col 4: Contact & Office */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Contact & Helpline</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <span className="contact-icon"><i className="fa-solid fa-location-dot"></i></span>
                                <span>Near Shiv Vihar Tiraha & Gokalpuri, Main Road, Gokalpuri, Delhi-110094</span>
                            </li>
                            <li>
                                <span className="contact-icon"><i className="fa-solid fa-phone"></i></span>
                                <span>
                                    <a href="tel:+919312558500">+91 9312558500</a> / <a href="tel:+918287710710">+91 8287710710</a>
                                </span>
                            </li>
                            <li>
                                <span className="contact-icon"><i className="fa-solid fa-envelope"></i></span>
                                <a href="mailto:drpconventschool@gmail.com">drpconventschool@gmail.com</a>
                            </li>
                            <li>
                                <span className="contact-icon"><i className="fa-regular fa-clock"></i></span>
                                <span>Mon - Sat: 8:00 AM – 2:30 PM</span>
                            </li>
                        </ul>

                        {/* Social Channels */}
                        <div className="footer-social-wrap">
                            <span className="social-label">Connect With Us:</span>
                            <div className="social-icons-row">
                                <a href="https://www.instagram.com/drpschool/" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="Instagram">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="#" className="social-circle-link" aria-label="Facebook">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-circle-link" aria-label="YouTube">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                                <a href="https://wa.me/918287710710" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="WhatsApp">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="footer-bottom-bar">
                <div className="container footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} D.R.P. CONVENT PUBLIC SCHOOL. All Rights Reserved. Affiliated to C.B.S.E., New Delhi.</p>
                    <div className="footer-bottom-links">
                        <Link to="/conduct">Mandatory Disclosure</Link>
                        <span>•</span>
                        <Link to="/downloads">Circulars</Link>
                        <span>•</span>
                        <Link to="/login">ERP Staff Login</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
