import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NoticeBoard from './NoticeBoard';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeWingTab, setActiveWingTab] = useState(0);
    const [activeFacilityTab, setActiveFacilityTab] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const slides = [
        {
            image: '/assets/school_building.jpg',
            badge: '✦ ADMISSIONS OPEN 2026-27 ✦',
            title: 'Nurturing Future Leaders with Value-Based Education',
            subtitle: 'D.R.P. Convent Public School — A Premier C.B.S.E. Affiliated Senior Secondary Institution in North-East Delhi',
            primaryBtnText: 'Apply For Admission',
            primaryLink: '/admissions',
            secondaryBtnText: 'Explore Campus Life',
            secondaryLink: '/gallery'
        },
        {
            image: '/assets/gallery/campus/smart_digital_classroom.jpg',
            badge: '✦ WORLD-CLASS PEDAGOGY ✦',
            title: 'Empowering Young Minds Through Experiential Inquiry',
            subtitle: 'Modern smart interactive digital classrooms, state-of-the-art science & AI laboratories, and dedicated mentorship',
            primaryBtnText: 'View Academics',
            primaryLink: '/academics',
            secondaryBtnText: 'Check Board Results',
            secondaryLink: '/results'
        },
        {
            image: '/assets/gallery/sports/sports_interhouse_team_assembly.jpg',
            badge: '✦ HOLISTIC EXCELLENCE ✦',
            title: 'Celebrating Creativity, Sportsmanship & Moral Character',
            subtitle: 'Comprehensive co-curricular enrichment fostering instrumental music studios, track athletics, and cultural values',
            primaryBtnText: 'Explore Campus Life',
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

    // Academic Wings Tab Data (Gurukul Stages)
    const wingsData = [
        {
            id: 'foundational',
            icon: '🌱',
            label: 'Foundational Stage',
            gradeBadge: 'PRE-NURSERY TO KG',
            title: 'Foundational Wing (Early Childhood)',
            desc: 'A joyful, play-integrated learning sanctuary structured around phonics, sensory exploration, motor skills, and creative storytelling.',
            image: '/assets/gallery/campus/school_campus_front.jpg',
            highlights: [
                'Activity-based sensory & phonics curriculum',
                'Safe, vibrant indoor interactive play arena',
                'Nurturing mother-teacher pastoral care system',
                'Expressive arts, dance, rhyme & rhythm workshops'
            ],
            link: '/admissions',
            btnText: 'Foundational Admissions'
        },
        {
            id: 'preparatory',
            icon: '📖',
            label: 'Preparatory Stage',
            gradeBadge: 'CLASSES I - V',
            title: 'Primary Wing (Preparatory Years)',
            desc: 'Building rock-solid literacy, numeracy, logical reasoning, and ethical mindfulness through experiential classroom projects.',
            image: '/assets/gallery/cooking/cooking_activity_board.jpg',
            highlights: [
                'Interactive smart digital board enabled classrooms',
                'Hands-on experimental science and math labs',
                'Music, keyboard, guitar & fine arts initiation',
                'Regular parent-teacher collaborative reviews'
            ],
            link: '/academics',
            btnText: 'Primary Curriculum'
        },
        {
            id: 'middle',
            icon: '🔬',
            label: 'Middle Stage',
            gradeBadge: 'CLASSES VI - VIII',
            title: 'Middle Wing (Exploratory Stage)',
            desc: 'Deepening analytical inquiry, independent research, computational thinking, science practicals, and inter-house competitive sports leagues.',
            image: '/assets/gallery/sports/sports_interhouse_badminton.jpg',
            highlights: [
                'Subject-specialist faculty and advanced sciences',
                'Student Council & House Prefect leadership roles',
                'Inter-house badminton, chess, carrom & athletics',
                'Language proficiency, debates, drama & quiz meets'
            ],
            link: '/academics',
            btnText: 'Middle School Overview'
        },
        {
            id: 'senior',
            icon: '🎓',
            label: 'Senior Secondary',
            gradeBadge: 'CLASSES IX - XII',
            title: 'Senior Secondary Wing (Career & Board)',
            desc: 'Rigorous CBSE Board exam preparation, personalized academic mentorship, career counseling, practical distinction, and collegiate readiness.',
            image: '/assets/gallery/results/annual_result_top_rankers.jpg',
            highlights: [
                '100% Board Pass Rate & merit scholarship accolades',
                'Well-equipped Science & Commerce stream tracks',
                'Comprehensive practical lab assessments & mock tests',
                'Higher education & competitive career counseling'
            ],
            link: '/results',
            btnText: 'Explore Board Results'
        }
    ];

    // Campus Facilities Tab Data (Gurukul Style Tab Showcase)
    const facilitiesData = [
        {
            id: 'smart-class',
            icon: '💻',
            label: 'Digital Smart Classrooms',
            title: 'Interactive Smart Digital Classrooms',
            desc: 'Every classroom is equipped with high-definition digital smart boards, multimedia projectors, and rich audio-visual modules making complex scientific and mathematical concepts intuitively graspable.',
            image: '/assets/gallery/campus/smart_digital_classroom.jpg',
            points: ['Multimedia interactive curricula', 'Comfortable ergonomic seating', 'Airy, well-ventilated acoustic design']
        },
        {
            id: 'science-lab',
            icon: '🔬',
            label: 'Science & Practical Labs',
            title: 'State-of-the-Art Science & Wet Labs',
            desc: 'Fully equipped physics, chemistry, biology, and computer AI laboratories with precision instruments, modern safety apparatus, and individual student workstations.',
            image: '/assets/gallery/campus/science_lab_practical.jpg',
            points: ['Individual student practical apparatus', 'Strict POCSO & chemical safety norms', 'Hands-on scientific inquiry & AI training']
        },
        {
            id: 'music-studio',
            icon: '🎵',
            label: 'Music & Cultural Arts',
            title: 'Instrumental Music & Fine Arts Studio',
            desc: 'Dedicated creative studios with acoustic guitars, electronic keyboards, classical harmonium, tabla, and fine arts workspaces nurturing artistic genius.',
            image: '/assets/gallery/campus/music_keyboard_class.jpg',
            points: ['Instrumental & vocal music coaching', 'Classical, folk & contemporary dance', 'Annual cultural festival spotlight']
        },
        {
            id: 'campus-ground',
            icon: '🏛️',
            label: 'Campus & Courtyard',
            title: 'Grand Campus & Assembly Courtyard',
            desc: 'A spacious, secure campus environment complete with an open courtyard for daily morning assemblies, yoga sessions, annual galas, and inter-house sporting events.',
            image: '/assets/gallery/campus/school_campus_front.jpg',
            points: ['Vibrant open-air assembly arena', '24/7 CCTV security & security gates', 'Eco-friendly green landscaped surroundings']
        },
        {
            id: 'safe-campus',
            icon: '🛡️',
            label: 'Safety & Surveillance',
            title: 'Safe, Monitored & Caring Environment',
            desc: 'Strict child safety compliance with round-the-clock CCTV surveillance, monitored entry/exit gates, background-verified staff, and clean hygienic sanitation.',
            image: '/assets/school_building.jpg',
            points: ['24/7 High-definition CCTV monitoring', 'Strict visitor verification protocol', 'Dedicated infirmary & first-aid care']
        }
    ];

    // Testimonials data
    const testimonials = [
        {
            quote: "D.R.P. Convent Public School has provided our daughter with the finest academic guidance and cultural values. The teachers give individualized attention to every single child.",
            author: "Rajesh Sharma",
            role: "Parent of Class X Student",
            stars: "★★★★★"
        },
        {
            quote: "The combination of smart classrooms, science practicals, and extracurricular music training makes learning a truly joyful and holistic experience for our children.",
            author: "Pooja Verma",
            role: "Parent of Class VIII Student",
            stars: "★★★★★"
        },
        {
            quote: "My 12-year foundation at D.R.P. School prepared me for higher university education and corporate leadership. Proud to be part of the 2400+ alumni family!",
            author: "Aman Gupta",
            role: "Alumnus (Batch of 2021)",
            stars: "★★★★★"
        }
    ];

    const currentFacility = facilitiesData[activeFacilityTab] || facilitiesData[0];
    const currentWing = wingsData[activeWingTab] || wingsData[0];

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
                                        <span>{slide.primaryBtnText}</span>
                                        <i className="fa-solid fa-arrow-right"></i>
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
                            <h3 className="pillar-title">Academic Distinction</h3>
                            <p className="pillar-desc">CBSE-aligned curriculum with continuous evaluation, smart boards & experienced faculty.</p>
                            <Link to="/academics" className="pillar-link">View Academics &rarr;</Link>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-icon">⚽</div>
                            <h3 className="pillar-title">Sports & Athletics</h3>
                            <p className="pillar-desc">Badminton, chess, carrom championships, courtyard games, and physical endurance.</p>
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
                            <div className="gurukul-section-header">
                                <span className="gurukul-kicker">✦ WELCOME TO D.R.P. CONVENT ✦</span>
                                <h2 className="section-title">A Legacy of Nurturing Confident, Compassionate & Capable Leaders</h2>
                                <div className="gurukul-gold-divider-left">
                                    <span className="divider-line"></span>
                                    <span className="divider-icon">🏛️</span>
                                </div>
                            </div>
                            <p className="section-paragraph">
                                Established with a visionary commitment to holistic child development, <strong>D.R.P. CONVENT PUBLIC SCHOOL</strong> (Affiliated to C.B.S.E., New Delhi) stands as a premier seat of academic rigor, moral values, and creative expression.
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
                                <Link to="/about" className="btn btn-primary">
                                    <span>Discover Our Heritage</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link to="/founder" className="btn btn-glass">
                                    Founder's Desk
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- GURUKUL INTERACTIVE ACADEMIC WINGS TABS --- */}
            <section className="gurukul-wings-tab-section section-padding">
                <div className="container">
                    <div className="section-header-center">
                        <span className="gurukul-kicker">✦ PEDAGOGICAL PHASES ✦</span>
                        <h2 className="section-title">Wings of Holistic Learning</h2>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">📖</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="section-desc">
                            Explore our structured developmental stages tailored to guide every child from early sensory curiosity to senior scholastic distinction.
                        </p>
                    </div>

                    {/* Interactive Tab Bar */}
                    <div className="gurukul-stage-tabs-wrapper">
                        <div className="gurukul-stage-tabs-scroll">
                            {wingsData.map((wing, idx) => (
                                <button
                                    key={wing.id}
                                    className={`stage-tab-btn ${idx === activeWingTab ? 'active' : ''}`}
                                    onClick={() => setActiveWingTab(idx)}
                                >
                                    <span className="stage-tab-icon">{wing.icon}</span>
                                    <div className="stage-tab-text">
                                        <span className="stage-tab-name">{wing.label}</span>
                                        <span className="stage-tab-badge">{wing.gradeBadge}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Stage Content Panel */}
                    <div className="gurukul-stage-panel">
                        <div className="stage-panel-grid">
                            <div className="stage-panel-content">
                                <span className="stage-panel-badge">{currentWing.gradeBadge}</span>
                                <h3 className="stage-panel-title">{currentWing.title}</h3>
                                <p className="stage-panel-desc">{currentWing.desc}</p>

                                <div className="stage-milestones-box">
                                    <h4 className="milestones-heading">
                                        <i className="fa-solid fa-star gold-text"></i> Key Stage Milestones
                                    </h4>
                                    <ul className="stage-highlights-grid">
                                        {currentWing.highlights.map((hl, i) => (
                                            <li key={i} className="milestone-item">
                                                <span className="check-bullet">✓</span>
                                                <span>{hl}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="stage-panel-actions">
                                    <Link to={currentWing.link} className="btn btn-primary">
                                        <span>{currentWing.btnText}</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link to="/academics" className="btn btn-glass">
                                        Detailed Syllabus &rarr;
                                    </Link>
                                </div>
                            </div>

                            <div className="stage-panel-visual">
                                <div className="stage-image-frame">
                                    <img
                                        src={currentWing.image}
                                        alt={currentWing.title}
                                        className="stage-visual-img"
                                    />
                                    <div className="stage-visual-caption">
                                        <span className="caption-tag">{currentWing.icon} {currentWing.label}</span>
                                        <h4 className="caption-text">{currentWing.title}</h4>
                                    </div>
                                </div>
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

            {/* --- GURUKUL INTERACTIVE CAMPUS FACILITIES TABS --- */}
            <section className="gurukul-facilities-section section-padding">
                <div className="container">
                    <div className="section-header-center">
                        <span className="gurukul-kicker">✦ WORLD-CLASS INFRASTRUCTURE ✦</span>
                        <h2 className="section-title">Campus & State-of-the-Art Facilities</h2>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">🏛️</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="section-desc">
                            A stimulating physical and digital ecosystem designed to inspire creativity, scientific inquiry, and holistic student wellness.
                        </p>
                    </div>

                    {/* Facility Tabs Bar */}
                    <div className="gurukul-facilities-nav-wrapper">
                        <div className="gurukul-facilities-nav-scroll">
                            {facilitiesData.map((fac, idx) => (
                                <button
                                    key={fac.id}
                                    className={`facility-nav-tab ${idx === activeFacilityTab ? 'active' : ''}`}
                                    onClick={() => setActiveFacilityTab(idx)}
                                >
                                    <span className="fac-tab-icon">{fac.icon}</span>
                                    <span className="fac-tab-label">{fac.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Facility Content Card */}
                    <div className="facility-spotlight-card">
                        <div className="facility-spotlight-grid">
                            <div className="facility-img-col">
                                <div className="facility-img-frame">
                                    <img
                                        src={currentFacility.image}
                                        alt={currentFacility.title}
                                        className="facility-main-img"
                                    />
                                    <span className="facility-badge-float">{currentFacility.icon} {currentFacility.label}</span>
                                </div>
                            </div>
                            <div className="facility-info-col">
                                <span className="facility-kicker">CAMPUS HIGHLIGHT</span>
                                <h3 className="facility-title">{currentFacility.title}</h3>
                                <p className="facility-desc">{currentFacility.desc}</p>
                                <ul className="facility-features-list">
                                    {currentFacility.points.map((pt, pIdx) => (
                                        <li key={pIdx}>
                                            <span className="check-bullet">✓</span>
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="facility-btn-row">
                                    <Link to="/gallery" className="btn btn-primary">
                                        <span>View Campus Gallery</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link to="/contact" className="btn btn-glass">
                                        Schedule Campus Visit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CAMPUS HAPPENINGS & LIFE AT D.R.P. --- */}
            <section className="happenings-section section-padding">
                <div className="container">
                    <div className="section-header-center">
                        <span className="gurukul-kicker">✦ HAPPENINGS & CHRONICLES ✦</span>
                        <h2 className="section-title">Moments of Joy, Leadership & Achievement</h2>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">✨</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="section-desc">
                            A glimpse into our authentic student galas, academic triumphs, health drives, and cultural festivities.
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
                                <p className="happening-text">Students showcasing traditional artistry, clay diya painting, and festive joy.</p>
                                <Link to="/gallery" className="happening-link">View in Gallery &rarr;</Link>
                            </div>
                        </div>

                        {/* Card 2: Student Council */}
                        <div className="happening-card">
                            <div className="happening-img-wrap">
                                <img src="/assets/gallery/council/student_council_assembly.jpg" alt="Student Council Assembly" />
                                <span className="happening-tag">Leadership</span>
                            </div>
                            <div className="happening-body">
                                <h3 className="happening-title">Student Council & House Prefects</h3>
                                <p className="happening-text">Democracy in action fostering integrity, responsibility, and student leadership.</p>
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
                                <p className="happening-text">Thrilling badminton rallies, chess championships, and carrom tournaments.</p>
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
                                <h3 className="happening-title">Annual Result Day & Honors</h3>
                                <p className="happening-text">Celebrating academic distinction, class toppers on the podium, and merit certificates.</p>
                                <Link to="/gallery" className="happening-link">View in Gallery &rarr;</Link>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/gallery" className="btn btn-primary" style={{ padding: '0.9rem 2.5rem', fontSize: '1rem' }}>
                            <span>Explore Full School Gallery (60+ Photos)</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- PARENT & STUDENT TESTIMONIALS --- */}
            <section className="testimonials-section section-padding">
                <div className="container">
                    <div className="section-header-center">
                        <span className="gurukul-kicker">✦ VOICES OF TRUST ✦</span>
                        <h2 className="section-title">What Parents & Alumni Say</h2>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">💬</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="section-desc">
                            Authentic feedback from families who have entrusted their children's formative journey with us.
                        </p>
                    </div>

                    <div className="testimonial-card-single">
                        <div className="testimonial-stars">{testimonials[activeTestimonial].stars}</div>
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

            {/* --- ADMISSIONS CALL TO ACTION BANNER --- */}
            <section className="gurukul-cta-banner-section">
                <div className="container">
                    <div className="gurukul-cta-banner">
                        <div className="cta-banner-content">
                            <span className="cta-kicker">ADMISSIONS OPEN FOR SESSION 2026-27</span>
                            <h2 className="cta-title">Begin Your Child's Journey to Leadership & Character</h2>
                            <p className="cta-desc">
                                Limited seats available from Pre-Nursery to Class XII. Schedule a campus visit or register online today.
                            </p>
                        </div>
                        <div className="cta-banner-actions">
                            <Link to="/admissions" className="btn-cta-gold">
                                <span>Apply Online Now</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                            <a href="tel:+918287710710" className="btn-cta-outline">
                                <i className="fa-solid fa-phone"></i> Call Admissions Desk
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
