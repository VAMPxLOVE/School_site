import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admissions = () => {
    const [submitted, setSubmitted] = useState(false);
    const [activeTab, setActiveTab] = useState('process');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="admissions-page-container">
            {/* --- GURUKUL GRAND HEADER --- */}
            <div className="gurukul-page-header">
                <div className="container">
                    <div className="gurukul-header-content">
                        <span className="gurukul-kicker">✦ ADMISSIONS SESSION 2026-27 ✦</span>
                        <h1 className="gurukul-page-title">Admission Procedure & Online Registration</h1>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">🎓</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="gurukul-header-desc">
                            Welcome to the D.R.P. Convent family. Explore our transparent, merit-oriented admissions process from Pre-Nursery to Secondary (Class X).
                        </p>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '3rem 1rem 5rem' }}>
                {/* --- ADMISSIONS TAB SWITCHER --- */}
                <div className="gurukul-tabs-wrapper" style={{ maxWidth: '750px', margin: '0 auto 2.5rem' }}>
                    <div className="gurukul-tabs-scroll" style={{ justifyContent: 'center' }}>
                        <button
                            className={`gurukul-tab-btn ${activeTab === 'process' ? 'active' : ''}`}
                            onClick={() => setActiveTab('process')}
                        >
                            <span className="tab-icon">📋</span>
                            <span className="tab-label">Admission Roadmap</span>
                        </button>
                        <button
                            className={`gurukul-tab-btn ${activeTab === 'eligibility' ? 'active' : ''}`}
                            onClick={() => setActiveTab('eligibility')}
                        >
                            <span className="tab-icon">🎂</span>
                            <span className="tab-label">Age Eligibility</span>
                        </button>
                        <button
                            className={`gurukul-tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
                            onClick={() => setActiveTab('documents')}
                        >
                            <span className="tab-icon">📑</span>
                            <span className="tab-label">Documents Required</span>
                        </button>
                        <button
                            className={`gurukul-tab-btn ${activeTab === 'form' ? 'active' : ''}`}
                            onClick={() => setActiveTab('form')}
                        >
                            <span className="tab-icon">✍️</span>
                            <span className="tab-label">Register Online</span>
                        </button>
                    </div>
                </div>

                {/* --- ROADMAP & OVERVIEW --- */}
                {activeTab === 'process' && (
                    <div className="admissions-tab-panel">
                        <div className="features-grid">
                            <div className="feature-box">
                                <div className="feature-icon-circle">1</div>
                                <h3 className="feature-title">Online / Desk Registration</h3>
                                <p className="feature-text">Fill the admission enquiry form online or collect the physical prospectus from the school office.</p>
                            </div>
                            <div className="feature-box">
                                <div className="feature-icon-circle">2</div>
                                <h3 className="feature-title">Campus Tour & Interaction</h3>
                                <p className="feature-text">Personal interaction with our educators. Foundational assessment for primary & baseline test for middle/senior grades.</p>
                            </div>
                            <div className="feature-box">
                                <div className="feature-icon-circle">3</div>
                                <h3 className="feature-title">Document Verification</h3>
                                <p className="feature-text">Submit birth certificate, previous report cards, transfer certificate (TC), and Aadhaar copies.</p>
                            </div>
                            <div className="feature-box">
                                <div className="feature-icon-circle">4</div>
                                <h3 className="feature-title">Seat Confirmation & Welcome</h3>
                                <p className="feature-text">Pay admission dues, collect student ID credentials, uniform details, and attend the Parent Orientation Session.</p>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                            <button onClick={() => setActiveTab('form')} className="btn btn-primary">
                                <span>Proceed to Registration Form</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                )}

                {/* --- AGE ELIGIBILITY --- */}
                {activeTab === 'eligibility' && (
                    <div className="admissions-tab-panel">
                        <div className="facility-spotlight-card" style={{ maxWidth: '850px', margin: '0 auto' }}>
                            <h3 className="section-title" style={{ fontSize: '1.45rem', marginBottom: '1rem' }}>
                                Age Criteria as on 31st March 2026 (As per NEP Guidelines)
                            </h3>
                            <table className="fee-table" style={{ marginTop: '1.2rem' }}>
                                <thead>
                                    <tr>
                                        <th>Grade / Class</th>
                                        <th>Minimum Age Requirement</th>
                                        <th>Pedagogical Stage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Pre-Nursery</strong></td>
                                        <td>2.5+ to 3 Years</td>
                                        <td>Foundational Stage</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Nursery / L.K.G.</strong></td>
                                        <td>3+ to 4 Years</td>
                                        <td>Foundational Stage</td>
                                    </tr>
                                    <tr>
                                        <td><strong>K.G. / U.K.G.</strong></td>
                                        <td>4+ to 5 Years</td>
                                        <td>Foundational Stage</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Class I</strong></td>
                                        <td>5+ to 6 Years</td>
                                        <td>Preparatory Stage</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Class VI to VIII</strong></td>
                                        <td>10+ to 13 Years</td>
                                        <td>Middle School Stage</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Class IX & X</strong></td>
                                        <td>As per CBSE norms & previous marksheet</td>
                                        <td>Secondary Stage (CBSE Board)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* --- DOCUMENTS REQUIRED --- */}
                {activeTab === 'documents' && (
                    <div className="admissions-tab-panel">
                        <div className="facility-spotlight-card" style={{ maxWidth: '850px', margin: '0 auto' }}>
                            <h3 className="section-title" style={{ fontSize: '1.45rem', marginBottom: '1rem' }}>
                                Mandatory Checklist for Admission
                            </h3>
                            <ul className="facility-features-list">
                                <li><span className="check-bullet">✓</span> Original / Attested Copy of Municipal Birth Certificate.</li>
                                <li><span className="check-bullet">✓</span> Transfer Certificate (TC) countersigned by Education Officer (for Class II upwards).</li>
                                <li><span className="check-bullet">✓</span> Previous Academic Progress Report Card / Marksheet.</li>
                                <li><span className="check-bullet">✓</span> Copy of Student's & Parents' Aadhaar Cards.</li>
                                <li><span className="check-bullet">✓</span> 4 Passport size photographs of the Student and 2 of each Parent.</li>
                                <li><span className="check-bullet">✓</span> Medical fitness certificate with blood group record.</li>
                            </ul>
                        </div>
                    </div>
                )}

                {/* --- ONLINE REGISTRATION FORM --- */}
                {activeTab === 'form' && (
                    <div className="admissions-tab-panel">
                        <div className="admissions-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'flex-start' }}>
                            <div className="admissions-info">
                                <div className="facility-spotlight-card" style={{ padding: '2rem' }}>
                                    <span className="facility-kicker">ADMISSIONS DESK</span>
                                    <h3 className="facility-title" style={{ fontSize: '1.45rem' }}>Admissions Helpline & Office</h3>
                                    <p className="facility-desc">
                                        Our admissions counselors are available Monday to Saturday (8:00 AM – 2:30 PM) to answer your questions regarding transport, curriculum, and fee structures.
                                    </p>
                                    <ul className="facility-features-list">
                                        <li><span className="check-bullet">📞</span> <strong>Helpline:</strong> <a href="tel:+919312558500" style={{ color: '#0B2545', fontWeight: '700', textDecoration: 'none' }}>+91 9312558500</a> / <a href="tel:+918287710710" style={{ color: '#475569', textDecoration: 'none' }}>+91 8287710710</a></li>
                                        <li><span className="check-bullet">✉️</span> <strong>Email:</strong> drpconventschool@gmail.com</li>
                                        <li><span className="check-bullet">📍</span> <strong>Campus:</strong> Near Shiv Vihar Tiraha, Gokalpuri, Delhi-110094</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="admissions-form-container" style={{ background: '#ffffff', borderRadius: '18px', padding: '2rem', boxShadow: '0 8px 30px rgba(0, 31, 63, 0.08)', border: '1px solid rgba(218, 165, 32, 0.3)' }}>
                                <h3 style={{ fontFamily: 'var(--font-family-heading)', color: '#0B2545', marginBottom: '0.4rem', fontSize: '1.4rem' }}>
                                    Register for Admission (2026-27)
                                </h3>
                                <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '1.5rem' }}>
                                    Submit your details below to schedule an interaction.
                                </p>

                                {submitted ? (
                                    <div className="modal-success-state" style={{ padding: '2rem 1rem' }}>
                                        <div className="success-icon">✨</div>
                                        <h4>Application Submitted Successfully!</h4>
                                        <p>Our admissions officer will contact you within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="modal-form-body" style={{ padding: 0 }}>
                                        <div className="modal-form-group">
                                            <label>Student's Full Name *</label>
                                            <input type="text" required placeholder="Enter student's full name" className="modal-input" />
                                        </div>
                                        <div className="modal-form-group">
                                            <label>Grade Applying For *</label>
                                            <select className="modal-select">
                                                <option>Pre-Nursery / Nursery</option>
                                                <option>K.G. / Class I</option>
                                                <option>Class II - V (Primary)</option>
                                                <option>Class VI - VIII (Middle)</option>
                                                <option>Class IX (Secondary)</option>
                                                <option>Class X (CBSE Board)</option>
                                            </select>
                                        </div>
                                        <div className="modal-form-group">
                                            <label>Parent / Guardian Name *</label>
                                            <input type="text" required placeholder="Enter parent's name" className="modal-input" />
                                        </div>
                                        <div className="modal-form-row">
                                            <div className="modal-form-group">
                                                <label>Phone Number *</label>
                                                <input type="tel" required placeholder="10-digit mobile" className="modal-input" />
                                            </div>
                                            <div className="modal-form-group">
                                                <label>Email Address</label>
                                                <input type="email" placeholder="For correspondence" className="modal-input" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                            <span>Submit Admission Application</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admissions;
