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
            image: '/assets/gallery/campus/smart_digital_classroom.jpg',
            badge: 'WORLD-CLASS PEDAGOGY',
            title: 'Empowering Young Minds Through Experiential Learning',
            subtitle: 'Modern smart interactive classrooms, state-of-the-art science & computer labs, and holistic sports facilities',
            primaryBtnText: 'View Academics',
            primaryLink: '/academics',
            secondaryBtnText: 'Check Results',
            secondaryLink: '/results'
        },
        {
            image: '/assets/gallery/sports/sports_interhouse_team_assembly.jpg',
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

            {/* --- WINGS OF LEARNING (GURUKUL ACADEMIC STAGES) --- */}
            <section className="wings-section">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-kicker">CURRICULUM STAGES</span>
                        <h2 className="section-title">Wings of Holistic Learning</h2>
                        <p className="section-desc">
                            Structured developmental stages designed to guide every child from early curiosity to senior scholastic brilliance.
                        </p>
                    </div>

                    <div className="wings-grid">
                        {/* Wing 1: Foundation */}
                        <div className="wing-card">
                            <div className="wing-header">
                                <div className="wing-icon">🌱</div>
                                <span className="wing-grade-badge">PRE-PRIMARY</span>
                                <h3 className="wing-title">Foundation Wing</h3>
                            </div>
                            <div className="wing-body">
                                <p className="wing-desc">Play-based, sensory, and phonics-centered early childhood development cultivating joy and curiosity.</p>
                                <ul className="wing-features">
                                    <li><span>✓</span> Experiential Activity Play</li>
                                    <li><span>✓</span> Phonics & Motor Skills</li>
                                    <li><span>✓</span> Safe Indoor Play Zone</li>
                                </ul>
                                <Link to="/admissions" className="wing-link">Admissions &rarr;</Link>
                            </div>
                        </div>

                        {/* Wing 2: Primary */}
                        <div className="wing-card">
                            <div className="wing-header">
                                <div className="wing-icon">📖</div>
                                <span className="wing-grade-badge">CLASSES I - V</span>
                                <h3 className="wing-title">Primary Wing</h3>
                            </div>
                            <div className="wing-body">
                                <p className="wing-desc">Laying fundamental numeracy, literacy, scientific inquiry, and ethical values through interactive learning.</p>
                                <ul className="wing-features">
                                    <li><span>✓</span> Smart Board Classes</li>
                                    <li><span>✓</span> Creative Arts & Cooking</li>
                                    <li><span>✓</span> Individual Mentorship</li>
                                </ul>
                                <Link to="/academics" className="wing-link">Curriculum &rarr;</Link>
                            </div>
                        </div>

                        {/* Wing 3: Middle */}
                        <div className="wing-card">
                            <div className="wing-header">
                                <div className="wing-icon">🔬</div>
                                <span className="wing-grade-badge">CLASSES VI - VIII</span>
                                <h3 className="wing-title">Middle Wing</h3>
                            </div>
                            <div className="wing-body">
                                <p className="wing-desc">Deepening subject mastery, analytical thinking, laboratory experiments, and competitive sports leagues.</p>
                                <ul className="wing-features">
                                    <li><span>✓</span> Practical Science Labs</li>
                                    <li><span>✓</span> Student Council Leadership</li>
                                    <li><span>✓</span> Inter-House Championships</li>
                                </ul>
                                <Link to="/academics" className="wing-link">Subjects &rarr;</Link>
                            </div>
                        </div>

                        {/* Wing 4: Senior */}
                        <div className="wing-card">
                            <div className="wing-header">
                                <div className="wing-icon">🎓</div>
                                <span className="wing-grade-badge">CLASSES IX - XII</span>
                                <h3 className="wing-title">Senior Wing</h3>
                            </div>
                            <div className="wing-body">
                                <p className="wing-desc">Rigorous CBSE Board preparation, career counseling, practical distinction, and collegiate readiness.</p>
                                <ul className="wing-features">
                                    <li><span>✓</span> 100% Board Success Track</li>
                                    <li><span>✓</span> Science & Commerce Streams</li>
                                    <li><span>✓</span> Career Guidance Seminars</li>
                                </ul>
                                <Link to="/results" className="wing-link">Board Results &rarr;</Link>
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
                            <div className="stat-name">Board Pass Results</div>
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
                            A glimpse into our authentic student activities, academic sessions, health awareness drives, and cultural galas.
                        </p>
                    </div>

                    <div className="happenings-grid">
                        {/* Card 1: Diwali Rangoli */}
                        <div className="happening-card">
                            <div className="happening-img-wrap">
                                <img src="/assets/gallery/diwali/diwali_lakshmi_rangoli_team.jpg" alt="Diwali Celebrations" />
                                <span className="happening-tag">Celebrations</span>
                            </div>
                            <div className="happening-body">
                                <h3 className="happening-title">Diwali Rangoli & Craft Competitions</h3>
                                <p className="happening-text">Students showcasing radiant traditional artistry, clay diya painting, and festive spirit.</p>
                                <Link to="/gallery" className="happening-link">View in Gallery &rarr;</Link>
                            </div>
                        </div>

                        {/* Card 2: Student Council */}
                        <div className="happening-card">
                            <div className="happening-img-wrap">
                                <img src="/assets/gallery/council/student_council_assembly.jpg" alt="Student Council Elections" />
                                <span className="happening-tag">Leadership</span>
                            </div>
                            <div className="happening-body">
                                <h3 className="happening-title">Student Council & House Prefects</h3>
                                <p className="happening-text">Democracy in action fostering integrity, responsibility, and student leadership across all 4 houses.</p>
                                <Link to="/gallery" className="happening-link">View in Gallery &rarr;</Link>
                            </div>
                        </div>

                        {/* Card 3: Sports Competition */}
                        <div className="happening-card">
                            <div className="happening-img-wrap">
                                <img src="/assets/gallery/sports/sports_interhouse_badminton.jpg" alt="Inter-House Sports" />
                                <span className="happening-tag">Sports & Games</span>
                            </div>
                            <div className="happening-body">
                                <h3 className="happening-title">Inter-House Sports Tournament</h3>
                                <p className="happening-text">Thrilling badminton rallies, chess championships, and carrom tournaments building stamina & sportsmanship.</p>
                                <Link to="/gallery" className="happening-link">View in Gallery &rarr;</Link>
                            </div>
                        </div>

                        {/* Card 4: Result Day */}
                        <div className="happening-card">
                            <div className="happening-img-wrap">
                                <img src="/assets/gallery/results/annual_result_top_rankers.jpg" alt="Annual Result Day" />
                                <span className="happening-tag">Merit & Awards</span>
                            </div>
                            <div className="happening-body">
                                <h3 className="happening-title">Annual Result Day & Prize Distribution</h3>
                                <p className="happening-text">Celebrating academic distinction, class toppers on the victory podium, and merit certificates.</p>
                                <Link to="/gallery" className="happening-link">View in Gallery &rarr;</Link>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/gallery" className="btn btn-primary" style={{ borderRadius: '999px', padding: '0.85rem 2.4rem', fontSize: '1rem' }}>
                            Explore Full School Gallery (65+ Photos) &rarr;
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

            {/* --- PARENT & STUDENT TESTIMONIALS --- */}
            <section className="testimonials-section section-padding">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-kicker">VOICES OF TRUST</span>
                        <h2 className="section-title">What Parents & Alumni Say</h2>
                        <p className="section-desc">
                            Real feedback from families who have entrusted their children's formative journey with us.
                        </p>
                    </div>

                    <div className="testimonial-card-single">
                        <div className="testimonial-quote-icon">“</div>
                        <p className="testimonial-quote-text">
                            {testimonials[activeTestimonial].quote}
                        </p>
                        <div className="testimonial-author-box">
                            <div className="testimonial-avatar">
                                {testimonials[activeTestimonial].author.charAt(0)}
                            </div>
                            <div>
                                <h4 className="testimonial-author-name">{testimonials[activeTestimonial].author}</h4>
                                <span className="testimonial-author-role">{testimonials[activeTestimonial].role}</span>
                            </div>
                        </div>

                        <div className="testimonial-indicators">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`testimonial-indicator ${idx === activeTestimonial ? 'active' : ''}`}
                                    onClick={() => setActiveTestimonial(idx)}
                                    aria-label={`Testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ADMISSIONS CTA STRIP --- */}
            <section className="cta-admission-section">
                <div className="container">
                    <div className="cta-admission-card">
                        <div className="cta-content">
                            <span className="cta-badge">ACADEMIC SESSION 2026-27</span>
                            <h2 className="cta-title">Begin Your Child's Journey of Excellence</h2>
                            <p className="cta-desc">
                                Limited seats available from Pre-School to Senior Secondary. Register today for personal counseling and campus walkthroughs.
                            </p>
                        </div>
                        <div className="cta-buttons">
                            <Link to="/admissions" className="btn btn-primary" style={{ background: '#DAA520', color: '#001f3f', fontWeight: '800', padding: '0.9rem 2rem', borderRadius: '999px' }}>
                                Apply Online &rarr;
                            </Link>
                            <Link to="/contact" className="btn btn-glass" style={{ borderRadius: '999px', padding: '0.9rem 2rem' }}>
                                Contact Admissions Desk
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
