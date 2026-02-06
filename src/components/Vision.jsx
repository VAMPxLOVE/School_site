import React from 'react';

const Vision = () => {
    return (
        <div className="container page-content">
            <section className="about-section vision-section">
                <h2>Our Vision</h2>
                <div className="vision-card glass" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="vision-content">
                        <p>Our school's vision is to foster an environment of excellence where every student is empowered to achieve their fullest potential-academically, socially and emotionally. We strive to create well-rounded individuals who are not only prepared for the challenges of tomorrow but are also compassionate, responsible and active contributors to society.</p>

                        <p style={{ marginTop: '1rem' }}>A key component of our vision is the promotion of values such as discipline, teamwork, leadership and healthy competition. To support these ideals, our school is divided into four houses—<strong>Agni, Jal, Vayu, and Prithvi</strong>—each representing the fundamental elements that are the core of life and the natural world. These houses aim to instill a sense of belonging, camaraderie and school spirit among students while encouraging them to strive for excellence in all areas of their lives.</p>
                    </div>

                    <div className="vision-image">
                        <img src="/assets/vision.jpg" alt="Classroom Vision" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vision;
