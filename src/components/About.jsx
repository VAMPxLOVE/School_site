import React from 'react';
import Founder from './Founder';
import Vision from './Vision';
import Mission from './Mission';

const About = () => {
    return (
        <div>
            <div className="container page-content">
                <h1>About Us</h1>
                <section className="about-section">
                    <h2>Our History</h2>
                    <p>Welcome to D.R.P. CONVENT PUBLIC SCHOOL. We are committed to providing world-class education, fostering academic excellence and community service. What started as a small institution has grown into a premier center for learning.</p>
                </section>

                <section className="about-section">
                    <h2 className="text-3d-shadow" style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Leadership</h2>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="founder-card glass" style={{ marginBottom: 0, maxWidth: '500px' }}>
                            <img src="https://lh3.googleusercontent.com/pw/AP1GczPXc5lU87hoK1pgr-dtELKTv3TtpXaqf7pGf75DYMk9BHIrd9K9rd0O2YCNw8pM3wSMBYAT2CXbq8-thauAp4u5EJrI-u3lCzKQg1TBaPpCWeR3-J7NISM61y8Z89ZGkmy_6sQ3fOt7FgIjtl1FK1k5pQ=s0" alt="Mrs. Indu Sharma" className="founder-img" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                            <div>
                                <h3 style={{ color: '#003366' }}>Mrs. Indu Sharma</h3>
                                <p className="founder-role">Vice Principal</p>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>Post Graduate in Education</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Render sub-components */}
            <Founder />
            <Vision />
            <Mission />
        </div>
    );
};

export default About;
