import React from 'react';

const Mission = () => {
    return (
        <div className="container page-content">
            <section className="about-section mission-section">
                <h2>Mission & Values</h2>
                <div className="mission-grid">
                    <div className="mission-card glass">
                        <h3>Our Mission</h3>
                        <p style={{ textAlign: 'justify' }}>D.R.P. School prepares students to understand, contribute, and succeed in a rapidly changing society, thus making the world a better place. We ensure that our students develop both the skills that a sound education provides and the competencies essential for success and leadership in the emerging creative economy. We also lead in generating practical and theoretical knowledge that enables students to better understand our world and improve the conditions for national and global communities.</p>
                    </div>
                    <div className="mission-card glass values-card">
                        <div className="values-image">
                            <img src="/assets/values.jpg" alt="Student Learning" style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }} />
                        </div>
                        <div className="values-content">
                            <h3>Our Values</h3>
                            <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>At D.R.P. School, we believe in teaching values which improve self-esteem of the students, their behaviour and raise the standards of learning.</p>
                            <p style={{ marginBottom: '1rem' }}>We are passionate about encouraging students to:</p>
                            <ul style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
                                <li>Pursue high standards of academic excellence</li>
                                <li>Discover the joy of learning</li>
                                <li>Stretch themselves and raise challenging questions</li>
                                <li>Demonstrate courage, Integrity and Commitment to ethical behaviour</li>
                                <li>Develop a sense of commitment to purposes larger than themselves</li>
                                <li>Appreciate the richness of diversity</li>
                                <li>Think independently and creatively</li>
                                <li>Take progressively more responsibility for themselves and their education</li>
                                <li>Lead healthy lives</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mission;
