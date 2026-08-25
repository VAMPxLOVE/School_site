import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FloatingSideDock = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        phone: '',
        grade: 'Nursery',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setIsEnquiryModalOpen(false);
            setFormData({
                studentName: '',
                parentName: '',
                phone: '',
                grade: 'Nursery',
                message: ''
            });
        }, 3000);
    };

    return (
        <>
            {/* --- GURUKUL FLOATING QUICK-ACTION SIDE DOCK --- */}
            <aside className="gurukul-floating-dock" aria-label="Quick Action Floating Menu">
                <ul className="floating-dock-list">
                    {/* Quick Admission Enquiry */}
                    <li className="dock-item">
                        <button
                            className="dock-btn enquiry-btn"
                            onClick={() => setIsEnquiryModalOpen(true)}
                            title="Admissions Enquiry"
                            aria-label="Admissions Enquiry"
                        >
                            <span className="dock-icon">📝</span>
                            <span className="dock-label">Online Enquiry</span>
                        </button>
                    </li>

                    {/* School Calendar */}
                    <li className="dock-item">
                        <Link
                            to="/calendar"
                            className="dock-btn calendar-btn"
                            title="School Calendar"
                            aria-label="School Calendar"
                        >
                            <span className="dock-icon">📅</span>
                            <span className="dock-label">Academic Calendar</span>
                        </Link>
                    </li>

                    {/* Phone Helpline */}
                    <li className="dock-item">
                        <a
                            href="tel:+918287710710"
                            className="dock-btn call-btn"
                            title="Call Admissions Office"
                            aria-label="Call Admissions Office"
                        >
                            <span className="dock-icon">📞</span>
                            <span className="dock-label">+91 8287710710</span>
                        </a>
                    </li>

                    {/* WhatsApp */}
                    <li className="dock-item">
                        <a
                            href="https://wa.me/918287710710?text=Hello%20DRP%20Convent%20School%2C%20I%20would%20like%20to%20enquire%20about%20Admissions."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dock-btn whatsapp-btn"
                            title="WhatsApp Helpline"
                            aria-label="WhatsApp Helpline"
                        >
                            <span className="dock-icon">💬</span>
                            <span className="dock-label">WhatsApp Us</span>
                        </a>
                    </li>

                    {/* ERP Login */}
                    <li className="dock-item">
                        <Link
                            to="/login"
                            className="dock-btn erp-btn"
                            title="ERP Portal Login"
                            aria-label="ERP Portal Login"
                        >
                            <span className="dock-icon">🔐</span>
                            <span className="dock-label">ERP Login</span>
                        </Link>
                    </li>

                    {/* Scroll to Top */}
                    {showBackToTop && (
                        <li className="dock-item back-to-top-item">
                            <button
                                className="dock-btn scroll-top-btn"
                                onClick={scrollToTop}
                                title="Back to Top"
                                aria-label="Back to Top"
                            >
                                <span className="dock-icon">▲</span>
                                <span className="dock-label">Top of Page</span>
                            </button>
                        </li>
                    )}
                </ul>
            </aside>

            {/* --- QUICK ENQUIRY MODAL --- */}
            {isEnquiryModalOpen && (
                <div className="gurukul-modal-backdrop" onClick={() => setIsEnquiryModalOpen(false)}>
                    <div className="gurukul-modal-dialog" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header-gurukul">
                            <div>
                                <span className="modal-kicker">ADMISSIONS 2026-27</span>
                                <h3 className="modal-title">Quick Admission Enquiry</h3>
                            </div>
                            <button
                                className="modal-close-btn"
                                onClick={() => setIsEnquiryModalOpen(false)}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                        </div>

                        {formSubmitted ? (
                            <div className="modal-success-state">
                                <div className="success-icon">✨</div>
                                <h4>Enquiry Received Successfully!</h4>
                                <p>Thank you for your interest in D.R.P. Convent Public School. Our admissions counselor will connect with you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="modal-form-body">
                                <p className="modal-intro-text">
                                    Fill out this quick form and our admissions desk will guide you through syllabus, eligibility, and fee details.
                                </p>

                                <div className="modal-form-group">
                                    <label>Student's Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Aarav Sharma"
                                        value={formData.studentName}
                                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                                        className="modal-input"
                                    />
                                </div>

                                <div className="modal-form-row">
                                    <div className="modal-form-group">
                                        <label>Parent / Guardian Name *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Rajesh Sharma"
                                            value={formData.parentName}
                                            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                            className="modal-input"
                                        />
                                    </div>
                                    <div className="modal-form-group">
                                        <label>Contact Phone Number *</label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="10-digit mobile number"
                                            pattern="[0-9]{10}"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="modal-input"
                                        />
                                    </div>
                                </div>

                                <div className="modal-form-group">
                                    <label>Applying for Grade / Class *</label>
                                    <select
                                        value={formData.grade}
                                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                                        className="modal-select"
                                    >
                                        <option value="Pre-Nursery">Pre-Nursery (Foundation)</option>
                                        <option value="Nursery">Nursery / L.K.G.</option>
                                        <option value="K.G.">K.G. / U.K.G.</option>
                                        <option value="Class I">Class I</option>
                                        <option value="Class II">Class II</option>
                                        <option value="Class III">Class III</option>
                                        <option value="Class IV">Class IV</option>
                                        <option value="Class V">Class V</option>
                                        <option value="Class VI">Class VI</option>
                                        <option value="Class VII">Class VII</option>
                                        <option value="Class VIII">Class VIII</option>
                                        <option value="Class IX">Class IX</option>
                                        <option value="Class X">Class X (CBSE Board)</option>
                                    </select>
                                </div>

                                <div className="modal-form-group">
                                    <label>Questions / Notes (Optional)</label>
                                    <textarea
                                        rows="2"
                                        placeholder="Any specific query regarding transport, fee, or curriculum..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="modal-textarea"
                                    ></textarea>
                                </div>

                                <div className="modal-footer-actions">
                                    <button type="submit" className="btn-modal-submit">
                                        Submit Admission Enquiry &rarr;
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsEnquiryModalOpen(false);
                                            navigate('/admissions');
                                        }}
                                        className="btn-modal-secondary"
                                    >
                                        Detailed Admission Guide
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingSideDock;
