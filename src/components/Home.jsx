import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NoticeBoard from './NoticeBoard';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/assets/school_building.jpg',
            badge: 'ADMISSIONS OPEN 2026-27',
            title: 'Nurturing Future Leaders with Value-Based Education',
            subtitle: 'D.R.P. Convent Public School — A Premier C.B.S.E. Affiliated Institution in North-East Delhi',
            primaryBtnText: 'Apply For Admission',
            primaryLink: '/admissions',
            secondaryBtnText: 'Explore Campus Life',
            secondaryLink: '/gallery'
        },
        {
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
            badge: 'WORLD-CLASS PEDAGOGY',
            title: 'Empowering Young Minds Through Experiential Learning',
            subtitle: 'Modern smart interactive classrooms, state-of-the-art science & computer labs, and holistic sports facilities',
            primaryBtnText: 'View Academics',
            primaryLink: '/academics',
            secondaryBtnText: 'Check Results',
            secondaryLink: '/results'
        },
        {
            image: 'https://images.unsplash.com/photo-1577896334614-2019376d108d?w=1600&q=80',
            badge: 'HOLISTIC DEVELOPMENT',
            title: 'Celebrating Creativity, Sports & Moral Character',
            subtitle: 'Comprehensive co-curricular education fostering instrumental music, athletics, and cultural values',
            primaryBtnText: 'Explore Activities',
            primaryLink: '/gallery',
            secondaryBtnText: 'Contact Office',
            secondaryLink: '/contact'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [slides.length]);

    // Testimonials data
    const testimonials = [
        {
            quote: "D.R.P. Convent Public School has provided our daughter with the finest academic guidance and values. The teachers give personal attention to every child.",
            author: "Rajesh Sharma",
            role: "Parent of Class X Student"
        },
        {
            quote: "The combination of smart classrooms, science labs, and extracurricular music training makes learning a truly joyful experience for our children.",
            author: "Pooja Verma",
            role: "Parent of Class VIII Student"
        },
        {
            quote: "My foundation at D.R.P. School prepared me for higher university education and leadership. Proud to be part of the 2400+ alumni family!",
            author: "Aman Gupta",
            role: "Alumnus (Batch of 2021)"
        }
    ];

    const [activeTestimonial, setActiveTestimonial] = useState(0);

    return (
        <div className="home-page">
            {/* --- HERO BANNER SECTION --- */}
            <section className="hero-slider-section">
                <div className="hero-slider-container">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                            style={{ backgroundImage: `url('${slide.image}')` }}
                        >
                            <div className="hero-slide-overlay"></div>
                            <div className="container hero-slide-content">
                                <span className="hero-badge">{slide.badge}</span>
                                <h1 className="hero-title">{slide.title}</h1>
                                <p className="hero-subtitle">{slide.subtitle}</p>
                                <div className="hero-btn-group">
                                    <Link to={slide.primaryLink} className="btn-hero-primary">
                                        {slide.primaryBtnText} &rarr;
                                    </Link>
                                    <Link to={slide.secondaryLink} className="btn-hero-secondary">
                                        {slide.secondaryBtnText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Slider Arrows */}
                    <button className="slider-nav-btn prev" onClick={prevSlide} aria-label="Previous Slide">
                        &#10094;
                    </button>
                    <button className="slider-nav-btn next" onClick={nextSlide} aria-label="Next Slide">
                        &#10095;
                    </button>

                    {/* Slider Pagination Dots */}
                    <div className="slider-dots">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                className={`slider-dot ${i === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* News & Circulars Ticker Bar */}
                <div className="hero-notice-bar">
                    <NoticeBoard />
                </div>
            </section>

            {/* --- FLOATING 4-PILLAR QUICK CARDS --- */}
            <section className="quick-pillars-section">
                <div className="container">
                    <div className="quick-pillars-grid">
                        <div className="pillar-card">
                            <div className="pillar-icon">🏫</div>
                            <h3 className="pillar-title">Modern Infrastructure</h3>
                            <p className="pillar-desc">Smart digital classrooms, state-of-the-art science wet labs & computer centers.</p>
                            <Link to="/gallery" className="pillar-link">Explore Campus &rarr;</Link>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-icon">🎓</div>
                            <h3 className="pillar-title">Academic Excellence</h3>
                            <p className="pillar-desc">CBSE-aligned curriculum with continuous evaluation and experienced faculty.</p>
                            <Link to="/academics" className="pillar-link">View Academics &rarr;</Link>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-icon">⚽</div>
                            <h3 className="pillar-title">Sports & Athletics</h3>
                            <p className="pillar-desc">Track athletics, inter-house championships, outdoor games, and daily yoga.</p>
                            <Link to="/gallery" className="pillar-link">Sports Life &rarr;</Link>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-icon">🎵</div>
                            <h3 className="pillar-title">Music & Cultural Arts</h3>
                            <p className="pillar-desc">Instrumental keyboard, guitar studios, theatre, classical dance, and annual galas.</p>
                            <Link to="/gallery" className="pillar-link">Cultural Arts &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ABOUT / LEGACY SPOTLIGHT SECTION --- */}
            <section className="legacy-section section-padding">
                <div className="container">
                    <div className="legacy-grid">
                        <div className="legacy-image-col">
                            <div className="legacy-image-wrapper">
                                <img
                                    src="/assets/school_building.jpg"
                                    alt="D.R.P. Convent Public School Building"
                                    className="legacy-main-img"
                                />
                                <div className="legacy-experience-badge">
                                    <span className="badge-years">28+</span>
                                    <span className="badge-text">Years of<br />Educational Excellence</span>
                                </div>
                            </div>
                        </div>

                        <div className="legacy-content-col">
                            <span className="section-kicker">WELCOME TO D.R.P. CONVENT</span>
                            <h2 className="section-title">A Legacy of Nurturing Confident, Compassionate & Capable Leaders</h2>
                            <p className="section-paragraph">
                                Established with a visionary commitment to holistic child development, <strong>D.R.P. CONVENT PUBLIC SCHOOL</strong> (Affiliated to C.B.S.E., New Delhi) stands as a beacon of academic rigor, moral values, and creative expression.
                            </p>
                            <p className="section-paragraph">
                                We believe education transcends textbooks. Through smart digital learning, hands-on scientific inquiry, and comprehensive co-curricular enrichment, we empower every learner to reach their highest potential.
                            </p>

                            <div className="legacy-highlights-list">
                                <div className="legacy-highlight-item">
                                    <span className="highlight-icon">✓</span>
                                    <div>
                                        <strong>Recognized & Affiliated to C.B.S.E.</strong>
                                        <p>Strict adherence to national pedagogical standards and continuous evaluation.</p>
                                    </div>
                                </div>
                                <div className="legacy-highlight-item">
                                    <span className="highlight-icon">✓</span>
                                    <div>
                                        <strong>100% Board Success & Merit Accolades</strong>
                                        <p>Consistent academic distinctions in secondary and senior secondary examinations.</p>
                                    </div>
                                </div>
                                <div className="legacy-highlight-item">
                                    <span className="highlight-icon">✓</span>
                                    <div>
                                        <strong>Child Safety & POCSO Compliant Campus</strong>
                                        <p>Secure, nurturing environment with round-the-clock surveillance and care.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="legacy-actions">
                                <Link to="/about" className="btn btn-primary" style={{ borderRadius: '999px', padding: '0.75rem 1.8rem' }}>
                                    Discover Our Heritage &rarr;
                                </Link>
                                <Link to="/founder" className="btn btn-glass" style={{ borderRadius: '999px', padding: '0.75rem 1.8rem' }}>
                                    Founder's Desk
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- KEY METRICS COUNTER STRIP --- */}
            <section className="stats-ribbon-section">
                <div className="container">
                    <div className="stats-ribbon-grid">
                        <div className="stats-ribbon-card">
                            <div className="stat-icon-wrap">🏆</div>
                            <div className="stat-value">28+</div>
                            <div className="stat-name">Years of Excellence</div>
                        </div>
                        <div className="stats-ribbon-card">
                            <div className="stat-icon-wrap">🎓</div>
                            <div className="stat-value">2400+</div>
                            <div className="stat-name">Successful Alumni</div>
                        </div>
                        <div className="stats-ribbon-card">
                            <div className="stat-icon-wrap">📈</div>
                            <div className="stat-value">100%</div>
                            <div className="stat-name">Board Examination Results</div>
                        </div>
                        <div className="stats-ribbon-card">
                            <div className="stat-icon-wrap">🎖️</div>
                            <div className="stat-value">50+</div>
                            <div className="stat-name">Awards & Recognitions</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CAMPUS HAPPENINGS & LIFE AT D.R.P. --- */}
            <section className="happenings-section section-padding">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-kicker">CAMPUS LIFE & HAPPENINGS</span>
                        <h2 className="section-title">Moments of Discovery, Learning & Joy</h2>
                        <p className="section-desc">
                            A glimpse into recent student activities, academic sessions, health awareness drives, and parent-school partnerships.
                        </p>
                    </div>

                    <div className="happenings-grid">
                        {/* Card 1: Smart Classroom */}
                        <div className="happening-card">
                            <div className="happening-img-wrap">
                                <img src="/assets/gallery/campus/smart_digital_classroom.jpg" alt="Smart Classroom" />
                                <span className="happening-tag">Academics</span>
                            </div>
                            <div className="happening-body">
                                <h3 className="happening-title">Smart Digital Classroom Learning</h3>
                                <p className="happening-text">Interactive audiovisual learning modules enhancing conceptual clarity and student participation.</p>
                                <Link to="/gallery" className="happening-link">View in Gallery &rarr;</Link>
                            </div>
                        </div>

                        {/* Card 2: Science Lab */}
                        <div className="happening-card">
                            <div className="happening-img-wrap">
                                <img src="/assets/gallery/campus/science_lab_practical.jpg" alt="Science Lab" />
                                <span className="happening-tag">Science & Labs</span>
                            </div>
                            <div className="happening-body">
                                <h3 className="happening-title">Hands-on Science & Lab Inquiries</h3>
                                <p className="happening-text">Practical laboratory demonstrations fostering curiosity, analytical skills, and scientific temper.</p>
                                <Link to="/gallery" className="happening-link">View in Gallery &rarr;</Link>
                            </div>
                        </div>

                        {/* Card 3: Health Awareness */}
                        <div className="happening-card">
                            <div className="happening-img-wrap">
                                <img src="/assets/gallery/health/hygiene_awareness_kits.jpg" alt="Health Awareness" />
                                <span className="happening-tag">Wellness</span>
                            </div>
                            <div className="happening-body">
                                <h3 className="happening-title">Health, Hygiene & Safety Drives</h3>
                                <p className="happening-text">Comprehensive student wellness sessions, hygiene kit distributions, and POCSO child safety awareness.</p>
                                <Link to="/gallery" className="happening-link">View in Gallery &rarr;</Link>
                            </div>
                        </div>

                        {/* Card 4: Parents Orientation */}
                        <div className="happening-card">
                            <div className="happening-img-wrap">
                                <img src="/assets/gallery/orientation/orientation_welcome_session.jpg" alt="Parents Orientation" />
                                <span className="happening-tag">Community</span>
                            </div>
                            <div className="happening-body">
                                <h3 className="happening-title">Parents Orientation 2026-27</h3>
                                <p className="happening-text">Strengthening parent-school collaboration through curriculum walkthroughs and academic roadmaps.</p>
                                <Link to="/gallery" className="happening-link">View in Gallery &rarr;</Link>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/gallery" className="btn btn-primary" style={{ borderRadius: '999px', padding: '0.8rem 2.2rem', fontSize: '1rem' }}>
                            Explore Full School Gallery (30+ Photos) &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- PILLARS OF EXCELLENCE / WHY CHOOSE US --- */}
            <section className="why-choose-section section-padding">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-kicker">WHY CHOOSE D.R.P. CONVENT</span>
                        <h2 className="section-title">Core Pillars That Set Us Apart</h2>
                        <p className="section-desc">
                            We provide a balanced ecosystem where academic diligence meets character building.
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-box">
                            <div className="feature-icon-circle">👨‍🏫</div>
                            <h3 className="feature-title">Dedicated & Qualified Faculty</h3>
                            <p className="feature-text">Passionate educators committed to individualized attention, conceptual clarity, and mentorship.</p>
                        </div>

                        <div className="feature-box">
                            <div className="feature-icon-circle">🔬</div>
                            <h3 className="feature-title">State-of-the-Art Labs</h3>
                            <p className="feature-text">Fully equipped physics, chemistry, biology, and computer AI laboratories for practical mastery.</p>
                        </div>

                        <div className="feature-box">
                            <div className="feature-icon-circle">🛡️</div>
                            <h3 className="feature-title">Safe & Supportive Campus</h3>
                            <p className="feature-text">24/7 CCTV surveillance, strictly monitored premises, and complete child protection protocols.</p>
                        </div>

                        <div className="feature-box">
                            <div className="feature-icon-circle">🎸</div>
                            <h3 className="feature-title">Co-Curricular Studios</h3>
                            <p className="feature-text">Dedicated music, electronic keyboard, acoustic guitar, fine arts, and speech training.</p>
                        </div>

                        <div className="feature-box">
                            <div className="feature-icon-circle">📚</div>
                            <h3 className="feature-title">Resource-Rich Library</h3>
                            <p className="feature-text">Vast collection of reference encyclopedias, competitive journals, periodicals, and e-learning resources.</p>
                        </div>

                        <div className="feature-box">
                            <div className="feature-icon-circle">🤝</div>
                            <h3 className="feature-title">Active Parent Engagement</h3>
                            <p className="feature-text">Regular PTMs, transparent academic updates, and collaborative orientation workshops.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIALS / VOICES OF EXCELLENCE --- */}
            <section className="testimonials-section section-padding">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-kicker" style={{ color: '#DAA520' }}>VOICES OF OUR COMMUNITY</span>
                        <h2 className="section-title" style={{ color: '#ffffff' }}>What Parents & Alumni Say</h2>
                    </div>

                    <div className="testimonials-container">
                        <div className="testimonial-card-single">
                            <div className="quote-mark">“</div>
                            <p className="testimonial-quote-text">{testimonials[activeTestimonial].quote}</p>
                            <div className="testimonial-author-box">
                                <h4 className="testimonial-author-name">{testimonials[activeTestimonial].author}</h4>
                                <span className="testimonial-author-role">{testimonials[activeTestimonial].role}</span>
                            </div>
                        </div>

                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
                                    onClick={() => setActiveTestimonial(index)}
                                    aria-label={`Testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION / ADMISSION STRIP --- */}
            <section className="cta-admission-section">
                <div className="container">
                    <div className="cta-admission-card">
                        <div className="cta-content">
                            <span className="cta-kicker">JOIN OUR LEARNING COMMUNITY</span>
                            <h2 className="cta-title">Admissions Open for Academic Session 2026-27</h2>
                            <p className="cta-desc">
                                Give your child the foundation of academic excellence, values, and leadership. Limited seats available for Pre-Primary to Class XII.
                            </p>
                        </div>
                        <div className="cta-buttons">
                            <Link to="/admissions" className="btn-cta-gold">
                                Apply Online Now &rarr;
                            </Link>
                            <Link to="/contact" className="btn-cta-outline">
                                Schedule Campus Visit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
