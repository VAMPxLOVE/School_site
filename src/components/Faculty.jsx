import React from 'react';

const Faculty = () => {
    return (
        <div className="container page-content">
            <h1 className="text-3d-shadow" style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Dedicated Faculty</h1>

            <div className="faculty-group-container card-3d" style={{ marginBottom: '4rem' }}>
                <div className="card-inner-3d" style={{ padding: '0', overflow: 'hidden' }}>
                    <img
                        src="https://lh3.googleusercontent.com/pw/AP1GczNRB34zQ9IXx9XqDQEBmUIYkQsC8DnK3QTMAZkw0qaSuKCNxXcCw2VqRM6IvkIbm_YQIh7BKRxf6smOFYa0ubPOIZXgHZ8GNyZqm97C0n3h17t01HGq=s0"
                        alt="D.R.P. Convent Public School Faculty"
                        style={{ width: '100%', display: 'block' }}
                    />
                    <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.95)' }}>
                        <h2 style={{ color: '#003366', marginBottom: '1rem' }}>A Team Committed to Excellence</h2>
                        <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
                            Our school is proud of its team of highly qualified and passionate educators who work tirelessly to nurture the potential of every student.
                            From academic excellence to holistic development, our faculty members are the backbone of our institution, guiding students towards a brighter future with knowledge, values, and care.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                <div className="feature-card glass" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h3 style={{ color: '#DAA520', marginBottom: '1rem' }}>Qualified Experts</h3>
                    <p>Teachers with advanced degrees and specialized training in their respective fields.</p>
                </div>
                <div className="feature-card glass" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h3 style={{ color: '#DAA520', marginBottom: '1rem' }}>Student-Centric</h3>
                    <p>Focusing on individual learning needs and providing personalized attention to every pupil.</p>
                </div>
                <div className="feature-card glass" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h3 style={{ color: '#DAA520', marginBottom: '1rem' }}>Value-Driven</h3>
                    <p>Imparting not just knowledge, but the moral values necessary for a successful life.</p>
                </div>
            </div>
        </div>
    );
};

export default Faculty;
