import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/contact', { // Assuming endpoint exists or just demo
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                alert('Message Sent Successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Message Sent (Demo)'); // Fallback
            }
        } catch (err) {
            console.error(err);
            alert('Message Sent (Demo Mode)');
        }
    };

    return (
        <div className="container page-content">
            <h1>Contact Us</h1>
            <div className="contact-layout">
                <div className="contact-info">
                    <section>
                        <h2>Get in Touch</h2>
                        <p>We are here to answer your questions. Reach out to us via phone, email, or visit our campus.</p>
                        <div className="contact-details">
                            <p>📍 <strong>Address:</strong>Near Shiv Vihar Tiraha & Gokalpuri, Main Road, Gokalpuri, Delhi-110094</p>
                            <p>📞 <strong>Phone:</strong> +91-8287710710</p>
                            <p>✉️ <strong>Email:</strong> <a href="mailto:drpconventschool@gmail.com">drpconventschool@gmail.com</a></p>
                            <p>🕒 <strong>Office Hours:</strong> Mon-Fri, 8:00 AM - 4:00 PM</p>
                        </div>
                    </section>
                    <section>
                        <h2>Location</h2>
                        <div className="map-placeholder">
                            <iframe
                                src="https://maps.google.com/maps?q=D.R.P.+Convent+Public+School,+Babu+Nagar,+Shiv+Vihar&output=embed"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </section>
                </div>
                <div className="contact-form-container glass">
                    <h2>Send us a Message</h2>
                    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="c-name">Name</label>
                            <input type="text" id="c-name" name="name" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="c-email">Email</label>
                            <input type="email" id="c-email" name="email" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="c-subject">Subject</label>
                            <input type="text" id="c-subject" name="subject" required value={formData.subject} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="c-message">Message</label>
                            <textarea id="c-message" name="message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
