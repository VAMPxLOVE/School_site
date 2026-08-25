import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Academics = () => {
    const [activeTab, setActiveTab] = useState('stages');

    return (
        <div className="academics-page-container">
            {/* --- GURUKUL GRAND HEADER --- */}
            <div className="gurukul-page-header">
                <div className="container">
                    <div className="gurukul-header-content">
                        <span className="gurukul-kicker">✦ SCHOLASTIC EXCELLENCE ✦</span>
                        <h1 className="gurukul-page-title">Curriculum, Pedagogy & Academic Wings</h1>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">📖</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="gurukul-header-desc">
                            Aligned strictly with the Central Board of Secondary Education (CBSE), New Delhi, nurturing conceptual depth, critical inquiry, and ethical leadership.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '3rem 1rem 5rem' }}>
                {/* --- ACADEMICS INTERACTIVE TAB BAR --- */}
                <div className="gurukul-tabs-wrapper" style={{ maxWidth: '850px', margin: '0 auto 2.5rem' }}>
                    <div className="gurukul-tabs-scroll" style={{ justifyContent: 'center' }}>
                        <button
                            className={`gurukul-tab-btn ${activeTab === 'stages' ? 'active' : ''}`}
                            onClick={() => setActiveTab('stages')}
                        >
                            <span className="tab-icon">🌱</span>
                            <span className="tab-label">Curriculum Stages</span>
                        </button>
                        <button
                            className={`gurukul-tab-btn ${activeTab === 'departments' ? 'active' : ''}`}
                            onClick={() => setActiveTab('departments')}
                        >
                            <span className="tab-icon">🔬</span>
                            <span className="tab-label">Academic Departments</span>
                        </button>
                        <button
                            className={`gurukul-tab-btn ${activeTab === 'evaluation' ? 'active' : ''}`}
                            onClick={() => setActiveTab('evaluation')}
                        >
                            <span className="tab-icon">📊</span>
                            <span className="tab-label">Evaluation & Examination</span>
                        </button>
                        <button
                            className={`gurukul-tab-btn ${activeTab === 'guidelines' ? 'active' : ''}`}
                            onClick={() => setActiveTab('guidelines')}
                        >
                            <span className="tab-icon">📜</span>
                            <span className="tab-label">Pedagogy & NEP 2020</span>
                        </button>
                    </div>
                </div>

                {/* --- TAB CONTENT PANELS --- */}
                {activeTab === 'stages' && (
                    <div className="academics-tab-panel">
                        <div className="wings-grid" style={{ marginTop: '0' }}>
                            {/* Foundational */}
                            <div className="wing-card">
                                <div className="wing-header">
                                    <div className="wing-icon">🌱</div>
                                    <span className="wing-grade-badge">FOUNDATIONAL STAGE</span>
                                    <h3 className="wing-title">Pre-Primary Wing</h3>
                                </div>
                                <div className="wing-body">
                                    <p className="wing-desc">Play-based, sensory, and phonics-centered early childhood development cultivating spontaneous curiosity.</p>
                                    <ul className="wing-features">
                                        <li><span>✓</span> Phonics & Motor Coordination</li>
                                        <li><span>✓</span> Sensory Activity Learning</li>
                                        <li><span>✓</span> Interactive Rhymes & Stories</li>
                                        <li><span>✓</span> Safe Indoor Play Zone</li>
                                    </ul>
                                    <Link to="/admissions" className="wing-link">Apply for Foundation &rarr;</Link>
                                </div>
                            </div>

                            {/* Primary */}
                            <div className="wing-card">
                                <div className="wing-header">
                                    <div className="wing-icon">📖</div>
                                    <span className="wing-grade-badge">CLASSES I - V</span>
                                    <h3 className="wing-title">Preparatory Wing</h3>
                                </div>
                                <div className="wing-body">
                                    <p className="wing-desc">Laying fundamental numeracy, literacy, scientific inquiry, environmental studies, and ethical values.</p>
                                    <ul className="wing-features">
                                        <li><span>✓</span> Smart Digital Classrooms</li>
                                        <li><span>✓</span> Integrated Math & EVS Labs</li>
                                        <li><span>✓</span> Music, Fine Arts & Dance</li>
                                        <li><span>✓</span> Individual Student Mentoring</li>
                                    </ul>
                                    <Link to="/downloads" className="wing-link">Download Syllabus &rarr;</Link>
                                </div>
                            </div>

                            {/* Middle */}
                            <div className="wing-card">
                                <div className="wing-header">
                                    <div className="wing-icon">🔬</div>
                                    <span className="wing-grade-badge">CLASSES VI - VIII</span>
                                    <h3 className="wing-title">Middle School Wing</h3>
                                </div>
                                <div className="wing-body">
                                    <p className="wing-desc">Deepening subject mastery, analytical thinking, laboratory experiments, and competitive sports leagues.</p>
                                    <ul className="wing-features">
                                        <li><span>✓</span> Practical Science Experiments</li>
                                        <li><span>✓</span> Computational AI & Coding</li>
                                        <li><span>✓</span> Student Council Leadership</li>
                                        <li><span>✓</span> Inter-House Championships</li>
                                    </ul>
                                    <Link to="/gallery" className="wing-link">View Lab Photos &rarr;</Link>
                                </div>
                            </div>

                            {/* Senior Secondary */}
                            <div className="wing-card">
                                <div className="wing-header">
                                    <div className="wing-icon">🎓</div>
                                    <span className="wing-grade-badge">CLASSES IX - XII</span>
                                    <h3 className="wing-title">Senior Secondary Wing</h3>
                                </div>
                                <div className="wing-body">
                                    <p className="wing-desc">Rigorous CBSE Board preparation, career counseling, practical distinction, and collegiate readiness.</p>
                                    <ul className="wing-features">
                                        <li><span>✓</span> 100% Board Success Track</li>
                                        <li><span>✓</span> Science & Commerce Streams</li>
                                        <li><span>✓</span> Comprehensive Mock Exams</li>
                                        <li><span>✓</span> Career Counseling Seminars</li>
                                    </ul>
                                    <Link to="/results" className="wing-link">Check Board Merit &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'departments' && (
                    <div className="academics-tab-panel">
                        <div className="features-grid">
                            <div className="feature-box">
                                <div className="feature-icon-circle">🔬</div>
                                <h3 className="feature-title">Science & Mathematics</h3>
                                <p className="feature-text">Physics, Chemistry, Biology, Mathematics, and Applied Sciences with hands-on wet laboratory practicals.</p>
                            </div>
                            <div className="feature-box">
                                <div className="feature-icon-circle">💻</div>
                                <h3 className="feature-title">Computer Science & AI</h3>
                                <p className="feature-text">Information Technology, Python programming, digital literacy, and computational problem-solving.</p>
                            </div>
                            <div className="feature-box">
                                <div className="feature-icon-circle">📚</div>
                                <h3 className="feature-title">Languages & Literature</h3>
                                <p className="feature-text">English Core, Hindi, Sanskrit literature, debate forums, creative writing, and public elocution.</p>
                            </div>
                            <div className="feature-box">
                                <div className="feature-icon-circle">📈</div>
                                <h3 className="feature-title">Commerce & Accountancy</h3>
                                <p className="feature-text">Business Studies, Accountancy, Economics, Financial Literacy, and practical case study seminars.</p>
                            </div>
                            <div className="feature-box">
                                <div className="feature-icon-circle">🎵</div>
                                <h3 className="feature-title">Performing & Visual Arts</h3>
                                <p className="feature-text">Electronic keyboard, guitar studio, vocal Indian classical, folk dance, and fine arts craft.</p>
                            </div>
                            <div className="feature-box">
                                <div className="feature-icon-circle">⚽</div>
                                <h3 className="feature-title">Physical & Health Education</h3>
                                <p className="feature-text">Track athletics, badminton tournament training, chess mastery, carrom, and daily yoga wellness.</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'evaluation' && (
                    <div className="academics-tab-panel">
                        <div className="facility-spotlight-card">
                            <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                                CBSE Continuous Assessment & Examination Scheme
                            </h3>
                            <p className="section-paragraph">
                                In strict alignment with CBSE guidelines, our assessment framework evaluates both scholastic understanding and co-scholastic growth:
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                                <div className="milestone-item" style={{ background: '#ffffff', padding: '1.2rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                                    <div>
                                        <h4 style={{ color: '#0B2545', margin: '0 0 0.4rem', fontSize: '1.05rem' }}>Periodic Assessments (PA I & II)</h4>
                                        <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748B' }}>Regular pen-paper unit tests, notebook submissions, and subject enrichment activities.</p>
                                    </div>
                                </div>
                                <div className="milestone-item" style={{ background: '#ffffff', padding: '1.2rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                                    <div>
                                        <h4 style={{ color: '#0B2545', margin: '0 0 0.4rem', fontSize: '1.05rem' }}>Term End & Pre-Board Examinations</h4>
                                        <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748B' }}>Rigorous mock test series simulating CBSE Board exam conditions for Classes X and XII.</p>
                                    </div>
                                </div>
                                <div className="milestone-item" style={{ background: '#ffffff', padding: '1.2rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                                    <div>
                                        <h4 style={{ color: '#0B2545', margin: '0 0 0.4rem', fontSize: '1.05rem' }}>Practical Lab Vivas & Projects</h4>
                                        <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748B' }}>Individual assessment on laboratory experiments, portfolios, and viva-voce demonstrations.</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                                <Link to="/calendar" className="btn btn-primary">
                                    <span>View Annual Exam Calendar 2026-27</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'guidelines' && (
                    <div className="academics-tab-panel">
                        <div className="facility-spotlight-card">
                            <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                                NEP 2020 Pedagogical Framework
                            </h3>
                            <p className="section-paragraph">
                                D.R.P. Convent Public School has integrated the transformative pedagogical guidelines of the National Education Policy (NEP 2020) and the National Curriculum Framework (NCF):
                            </p>
                            <ul className="facility-features-list" style={{ marginTop: '1.2rem' }}>
                                <li><span className="check-bullet">✓</span> <strong>Experiential Learning:</strong> Shift from rote memorization to concept inquiry, interactive projects, and lab exploration.</li>
                                <li><span className="check-bullet">✓</span> <strong>Holistic 360-Degree Progress Cards:</strong> Comprehensive developmental feedback covering cognitive, socio-emotional, and physical domains.</li>
                                <li><span className="check-bullet">✓</span> <strong>Arts & Sports Integration:</strong> Using performing arts, music, and physical education as cross-curricular learning tools.</li>
                                <li><span className="check-bullet">✓</span> <strong>Vocational Skills & Digital Citizenship:</strong> Early exposure to computational thinking, financial awareness, and cyber safety.</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Academics;
