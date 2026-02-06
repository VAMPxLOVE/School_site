import React from 'react';

const ParentConduct = () => {
    return (
        <div className="container page-content">
            <h1>Parent & Visitor's Conduct</h1>

            <section className="about-section glass" style={{ padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                <h2>Code of Conduct</h2>
                <p>To ensure a safe, respectful, and positive learning environment for all students and staff, D.R.P. Convent Public School expects all parents and visitors to adhere to the following guidelines while on school premises.</p>

                <h3 style={{ marginTop: '1.5rem', color: 'var(--color-secondary)' }}>1. Respect & Courtesy</h3>
                <p>Treat all staff members, students, and other parents with respect and courtesy at all times. Aggressive, abusive, or threatening behavior (verbal or physical) will not be tolerated.</p>

                <h3 style={{ marginTop: '1.5rem', color: 'var(--color-secondary)' }}>2. Appointments</h3>
                <p>Parents wishing to meet teachers or the Principal must seek a prior appointment. This minimizes disruption to the teaching schedule. Please do not enter classrooms without permission.</p>

                <h3 style={{ marginTop: '1.5rem', color: 'var(--color-secondary)' }}>3. Dress Code & Appearance</h3>
                <p>Visitors are expected to dress appropriately when visiting the school. Please avoid attire that may be considered offensive or distracting in an educational setting.</p>

                <h3 style={{ marginTop: '1.5rem', color: 'var(--color-secondary)' }}>4. Safety & Security</h3>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>All visitors must report to the security gate and main office immediately upon arrival.</li>
                    <li>Visitor passes must be worn visibly at all times.</li>
                    <li>Smoking, consumption of alcohol, or use of tobacco products is strictly prohibited on school grounds.</li>
                </ul>

                <h3 style={{ marginTop: '1.5rem', color: 'var(--color-secondary)' }}>5. Social Media & Photography</h3>
                <p>Please respect the privacy of other students. Do not take or post photographs/videos of other children without their parents' explicit consent. Issues regarding the school should be discussed directly with the administration rather than aired on social media.</p>
            </section>

            <div className="alert glass" style={{ borderLeft: '5px solid #dc3545', padding: '1.5rem' }}>
                <h4 style={{ color: '#dc3545', margin: 0 }}>Note:</h4>
                <p style={{ margin: 0 }}>The school administration reserves the right to ask any visitor to leave the premises if their behavior is deemed inappropriate or disruptive to the educational environment.</p>
            </div>
        </div>
    );
};

export default ParentConduct;
