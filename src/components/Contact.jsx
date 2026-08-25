import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => {
            setSent(false);
            setName('');
            setEmail('');
            setPhone('');
            setSubject('');
            setMessage('');
        }, 4000);
    };

    return (
        <div className="contact-page-container">
            {/* --- GURUKUL GRAND HEADER --- */}
            <div className="gurukul-page-header">
                <div className="container">
                    <div className="gurukul-header-content">
                        <span className="gurukul-kicker">✦ CONNECT & VISIT US ✦</span>
                        <h1 className="gurukul-page-title">Contact Us & Campus Location</h1>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">📍</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="gurukul-header-desc">
                            We are delighted to assist you with admissions, academic circulars, fee inquiries, and campus tour bookings.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '3.5rem 1rem 5rem' }}>
                {/* --- 4 QUICK CONTACT INFO BOXES --- */}
                <div className="features-grid" style={{ marginBottom: '3rem' }}>
                    <div className="feature-box">
                        <div className="feature-icon-circle">📍</div>
                        <h3 className="feature-title">School Campus Address</h3>
                        <p className="feature-text">Near Shiv Vihar Tiraha & Gokalpuri, Main Road, Gokalpuri, Delhi-110094</p>
                    </div>

                    <div className="feature-box">
                        <div className="feature-icon-circle">📞</div>
                        <h3 className="feature-title">Helpline & Admissions</h3>
                        <p className="feature-text" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                            <a href="tel:+919312558500" style={{ color: '#0B2545', fontWeight: '800', textDecoration: 'none', fontSize: '1.02rem' }}>
                                +91 9312558500
                            </a>
                            <a href="tel:+918287710710" style={{ color: '#475569', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem' }}>
                                +91 8287710710
                            </a>
                        </p>
                    </div>

                    <div className="feature-box">
                        <div className="feature-icon-circle">✉️</div>
                        <h3 className="feature-title">Email Communications</h3>
                        <p className="feature-text">
                            <a href="mailto:drpconventschool@gmail.com" style={{ color: '#0B2545', fontWeight: '600', textDecoration: 'none' }}>
                                drpconventschool@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="feature-box">
                        <div className="feature-icon-circle">⏰</div>
                        <h3 className="feature-title">Administrative Hours</h3>
                        <p className="feature-text">Monday to Saturday: 8:00 AM – 2:30 PM (Closed on Sundays & Gazetted Holidays)</p>
                    </div>
                </div>

                {/* --- MAP & MESSAGE FORM ROW --- */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem', alignItems: 'flex-start' }} className="contact-grid-row">
                    {/* Google Map */}
                    <div className="facility-spotlight-card" style={{ padding: '1.2rem', overflow: 'hidden' }}>
                        <h3 style={{ fontFamily: 'var(--font-family-heading)', color: '#0B2545', marginBottom: '0.8rem', fontSize: '1.3rem' }}>
                            <i className="fa-solid fa-map-location-dot gold-text"></i> Interactive Campus Map
                        </h3>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #CBD5E1' }}>
                            <iframe
                                title="School Location Map"
                                src="https://maps.google.com/maps?q=D.R.P.+Convent+Public+School,+Babu+Nagar,+Shiv+Vihar&output=embed"
                                width="100%"
                                height="420"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Message Form */}
                    <div style={{ background: '#ffffff', borderRadius: '18px', padding: '2rem', boxShadow: '0 8px 30px rgba(0, 31, 63, 0.08)', border: '1px solid rgba(218, 165, 32, 0.3)' }}>
                        <h3 style={{ fontFamily: 'var(--font-family-heading)', color: '#0B2545', marginBottom: '0.4rem', fontSize: '1.35rem' }}>
                            Send us a Message
                        </h3>
                        <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '1.4rem' }}>
                            Submit your query and our administrative desk will respond promptly.
                        </p>

                        {sent ? (
                            <div className="modal-success-state" style={{ padding: '2rem 1rem' }}>
                                <div className="success-icon">✨</div>
                                <h4>Message Dispatched Successfully!</h4>
                                <p>Thank you for reaching out. We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="modal-form-body" style={{ padding: 0 }}>
                                <div className="modal-form-group">
                                    <label>Your Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Ramesh Chandra"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="modal-input"
                                    />
                                </div>

                                <div className="modal-form-row">
                                    <div className="modal-form-group">
                                        <label>Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="name@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="modal-input"
                                        />
                                    </div>
                                    <div className="modal-form-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="10-digit mobile"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="modal-input"
                                        />
                                    </div>
                                </div>

                                <div className="modal-form-group">
                                    <label>Subject / Topic *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Admissions Inquiry / Transport Facility"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="modal-input"
                                    />
                                </div>

                                <div className="modal-form-group">
                                    <label>Message Content *</label>
                                    <textarea
                                        rows="4"
                                        required
                                        placeholder="Please write your detailed query or message here..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="modal-textarea"
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.8rem' }}>
                                    <span>Send Message to School Desk</span>
                                    <i className="fa-solid fa-paper-plane"></i>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
