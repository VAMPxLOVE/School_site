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
                    <h2>Administration</h2>
                    <p><strong>Principal:</strong> Dr. Sarah Mitchell</p>
                    <p><strong>Vice Principal:</strong> Mr. James Anderson</p>
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
