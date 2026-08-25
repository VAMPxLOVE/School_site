import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page-wrapper">
            {/* --- GURUKUL GRAND PAGE HEADER --- */}
            <div className="gurukul-page-header">
                <div className="container">
                    <div className="gurukul-header-content">
                        <span className="gurukul-kicker">✦ 28+ YEARS OF VALUE-BASED EXCELLENCE ✦</span>
                        <h1 className="gurukul-page-title">About D.R.P. Convent Public School</h1>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">🏛️</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="gurukul-header-desc">
                            A premier CBSE-affiliated secondary institution in North-East Delhi, cultivating intellect, moral discipline, and compassionate leadership from Pre-Nursery to Class X.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- KEY STATS / METRIC RIBBON --- */}
            <section className="about-stats-ribbon">
                <div className="container">
                    <div className="about-stats-grid">
                        <div className="about-stat-card">
                            <div className="stat-icon-disc">🏛️</div>
                            <div className="stat-num">1998</div>
                            <div className="stat-label">Year of Inception (28+ Years Legacy)</div>
                        </div>
                        <div className="about-stat-card">
                            <div className="stat-icon-disc">📜</div>
                            <div className="stat-num">CBSE</div>
                            <div className="stat-label">Affiliated to Board (Upto Class X)</div>
                        </div>
                        <div className="about-stat-card">
                            <div className="stat-icon-disc">🎓</div>
                            <div className="stat-num">2400+</div>
                            <div className="stat-label">Accomplished Alumni Worldwide</div>
                        </div>
                        <div className="about-stat-card">
                            <div className="stat-icon-disc">📈</div>
                            <div className="stat-num">100%</div>
                            <div className="stat-label">CBSE Board Exam Pass Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PRINCIPAL'S MESSAGE (ROYAL SHOWCASE SECTION) --- */}
            <section className="principal-desk-section section-padding">
                <div className="container">
                    <div className="section-header-center" style={{ marginBottom: '2.5rem' }}>
                        <span className="gurukul-kicker">✦ ACADEMIC LEADERSHIP & GUIDANCE ✦</span>
                        <h2 className="section-title">From the Principal's Desk</h2>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">✍️</span>
                            <span className="divider-line"></span>
                        </div>
                    </div>

                    <div className="principal-royal-card">
                        <div className="principal-card-grid">
                            {/* Principal Photo Column */}
                            <div className="principal-photo-col">
                                <div className="principal-photo-frame">
                                    <img
                                        src="https://lh3.googleusercontent.com/pw/AP1GczPXc5lU87hoK1pgr-dtELKTv3TtpXaqf7pGf75DYMk9BHIrd9K9rd0O2YCNw8pM3wSMBYAT2CXbq8-thauAp4u5EJrI-u3lCzKQg1TBaPpCWeR3-J7NISM61y8Z89ZGkmy_6sQ3fOt7FgIjtl1FK1k5pQ=s0"
                                        alt="Mrs. Indu Sharma, Principal"
                                        className="principal-portrait-img"
                                    />
                                    <div className="principal-gold-ribbon">
                                        <span>Principal</span>
                                    </div>
                                </div>
                                <div className="principal-badge-info">
                                    <h3 className="principal-name-title">Mrs. Indu Sharma</h3>
                                    <p className="principal-designation">Principal, D.R.P. Convent Public School</p>
                                    <p className="principal-qualifications">Post Graduate in Education | Serving Since 1998</p>
                                </div>
                            </div>

                            {/* Principal Message Column */}
                            <div className="principal-message-col">
                                <div className="quote-watermark">“</div>
                                <div className="principal-message-content">
                                    <p className="principal-lead-para">
                                        It gives me immense pleasure to share my journey with the <strong>D.R.P. Convent Public School</strong> family. I joined this esteemed institution in <strong>1998</strong> as a teacher, and in the early 2000s, I was honoured to take on the responsibility of serving as the Principal. For over two decades, this school has not only shaped my professional journey but has also strengthened my values, enriched my experience, and deepened my commitment to nurturing young minds.
                                    </p>

                                    <p>
                                        Education, to me, is far more than academics. It is about building character, instilling moral values, encouraging discipline, and inspiring students to become compassionate, confident, and responsible citizens. Every child carries unique potential, and it has always been my privilege to guide them on their path of learning and growth.
                                    </p>

                                    <div className="principal-highlight-quote">
                                        <i className="fa-solid fa-quote-left quote-icon"></i>
                                        <span>
                                            One of the greatest joys of my career is seeing former students return as proud parents, trusting us with the education of their children. This enduring bond is a testament to the trust, love, and values that define our school family, and it fills me with heartfelt pride and gratitude.
                                        </span>
                                    </div>

                                    <p>
                                        As we continue to move forward, my vision remains steadfast—to provide a nurturing environment where every student is encouraged to dream, discover, and achieve excellence. With the support of our dedicated teachers, caring parents, and enthusiastic students, I am confident that DRP Convent Public School will continue to set new benchmarks in quality education and remain a leading institution in the region.
                                    </p>

                                    <p>
                                        I sincerely thank every parent for their continued faith and every student for making this journey meaningful.
                                    </p>

                                    <div className="principal-signoff-box">
                                        <div className="signoff-text">
                                            <span className="signoff-salutation">With warm regards,</span>
                                            <strong className="signoff-name">Mrs. Indu Sharma</strong>
                                            <span className="signoff-school">Principal, D.R.P. Convent Public School</span>
                                        </div>
                                        <div className="signoff-emblem">
                                            <img src="/assets/logo.jpg" alt="School Seal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INSTITUTION HERITAGE & STORY SECTION --- */}
            <section className="about-heritage-section section-padding">
                <div className="container">
                    <div className="heritage-grid">
                        <div className="heritage-text-col">
                            <div className="gurukul-section-header">
                                <span className="gurukul-kicker">✦ THE D.R.P. HERITAGE ✦</span>
                                <h2 className="section-title">A Journey of Educational Dedication & Integrity</h2>
                                <div className="gurukul-gold-divider-left">
                                    <span className="divider-line"></span>
                                    <span className="divider-icon">🏛️</span>
                                </div>
                            </div>
                            <p className="heritage-p lead">
                                Founded in <strong>1998</strong>, D.R.P. Convent Public School was established with a profound vision: to bring affordable, world-class, value-rooted education to the children of North-East Delhi.
                            </p>
                            <p className="heritage-p">
                                Over the past 28+ years, our campus has evolved into a premier secondary institution affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Guided by a student-first philosophy, we harmonize cutting-edge smart classroom technology with time-honoured Indian moral traditions.
                            </p>

                            <div className="heritage-features-list">
                                <div className="h-feature-item">
                                    <div className="h-icon">✨</div>
                                    <div>
                                        <h4>Holistic Development</h4>
                                        <p>Equal emphasis on academic mastery, fine arts, sports, and character building.</p>
                                    </div>
                                </div>
                                <div className="h-feature-item">
                                    <div className="h-icon">🔬</div>
                                    <div>
                                        <h4>Modern Infrastructure</h4>
                                        <p>Smart interactive digital boards, science wet labs, and expansive play areas.</p>
                                    </div>
                                </div>
                                <div className="h-feature-item">
                                    <div className="h-icon">🛡️</div>
                                    <div>
                                        <h4>Safe & Caring Environment</h4>
                                        <p>24/7 CCTV surveillance, verified pastoral care, and individual student attention.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="heritage-visual-col">
                            <div className="heritage-img-stack">
                                <img
                                    src="/assets/school_building.jpg"
                                    alt="D.R.P. School Main Building"
                                    className="heritage-main-img"
                                />
                                <div className="heritage-floating-card">
                                    <span className="floating-years">28+</span>
                                    <span className="floating-label">Years of Nurturing Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOUNDING FATHERS LEGACY SECTION --- */}
            <section className="founding-fathers-section section-padding">
                <div className="container">
                    <div className="section-header-center">
                        <span className="gurukul-kicker">✦ PILLARS OF OUR FOUNDATION ✦</span>
                        <h2 className="section-title">Our Revered Founders & Leadership</h2>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">🌟</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="section-desc">
                            Honouring the visionary souls whose selfless dedication and lifelong service built the foundation of our institution.
                        </p>
                    </div>

                    <div className="founders-cards-grid">
                        {/* Founder 1: Late Sh. Roopchand Sharma */}
                        <div className="founder-tribute-card">
                            <div className="founder-tribute-header">
                                <div className="founder-avatar-frame">
                                    <img src="/assets/founder.jpg" alt="Late Sh. Roopchand Sharma" />
                                </div>
                                <div className="founder-tribute-meta">
                                    <span className="tribute-badge">FOUNDER</span>
                                    <h3 className="tribute-name">Late Sh. Roopchand Sharma</h3>
                                    <span className="tribute-sub">Advocate & Visionary Philanthropist</span>
                                </div>
                            </div>
                            <div className="founder-tribute-body">
                                <p>
                                    "Dreams do not die with those who dare to dream; they live on in the hearts of those they inspire." In 1998, Sh. Roopchand Sharma planted the seed of this institution as a beacon of hope, empowering every child to rise above limitations through education.
                                </p>
                                <Link to="/founder" className="tribute-link">
                                    <span>Read Founder's Full Vision</span>
                                    <i className="fa-solid fa-arrow-right-long link-arrow"></i>
                                </Link>
                            </div>
                        </div>

                        {/* Founder 2: Late Sh. Yatender Sharma */}
                        <div className="founder-tribute-card">
                            <div className="founder-tribute-header">
                                <div className="founder-avatar-frame">
                                    <img
                                        src="https://lh3.googleusercontent.com/pw/AP1GczP2Tucaw9l_tJzGvq-SzmbwnV2MZPszYoATOFSKA9NvbW_zMK-5ifpVptsIG8w2VHftArbog5xBVryTsdxazigVJ-mdOrdNAA5n7oZRMLTa9Z232xGbv9RfGEL7qu4CjcPCnu7EUfJZplkeZ-0PfCjWvA=s0"
                                        alt="Late Sh. Yatender Sharma"
                                    />
                                </div>
                                <div className="founder-tribute-meta">
                                    <span className="tribute-badge">EX-CHAIRMAN</span>
                                    <h3 className="tribute-name">Late Sh. Yatender Sharma</h3>
                                    <span className="tribute-sub">Social Reformer & Community Leader</span>
                                </div>
                            </div>
                            <div className="founder-tribute-body">
                                <p>
                                    A noble soul and guiding light who dedicated his life to community upliftment. Under his leadership, the school flourished into a cornerstone of academic distinction, sports excellence, and moral integrity for North-East Delhi.
                                </p>
                                <Link to="/founder" className="tribute-link">
                                    <span>Read Ex-Chairman's Ideology</span>
                                    <i className="fa-solid fa-arrow-right-long link-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- VISION & MISSION HIGHLIGHT CARDS --- */}
            <section className="about-vision-mission-section section-padding">
                <div className="container">
                    <div className="vision-mission-grid">
                        <div className="vm-card vision-card">
                            <div className="vm-icon-disc">👁️</div>
                            <span className="vm-kicker">OUR GUIDING LIGHT</span>
                            <h3 className="vm-title">Our Vision</h3>
                            <p className="vm-desc">
                                To be a beacon of academic excellence and value-based holistic education, nurturing self-reliant, ethical, and intellectually vibrant global citizens who contribute meaningfully to society.
                            </p>
                            <Link to="/vision" className="vm-link">
                                <span>Explore Vision & Goals</span>
                                <i className="fa-solid fa-arrow-right-long link-arrow"></i>
                            </Link>
                        </div>

                        <div className="vm-card mission-card">
                            <div className="vm-icon-disc">🎯</div>
                            <span className="vm-kicker">OUR DAILY COMMITMENT</span>
                            <h3 className="vm-title">Our Mission</h3>
                            <p className="vm-desc">
                                To provide an inclusive, safe, and stimulating learning ecosystem that fosters critical inquiry, creative arts, physical wellness, and unyielding moral integrity in every student from Pre-Nursery to Class X.
                            </p>
                            <Link to="/mission" className="vm-link">
                                <span>Explore Mission & Values</span>
                                <i className="fa-solid fa-arrow-right-long link-arrow"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ADMISSIONS CTA BANNER --- */}
            <section className="about-cta-section">
                <div className="container">
                    <div className="gurukul-cta-banner">
                        <div className="cta-banner-content">
                            <span className="cta-kicker">JOIN OUR SCHOOL FAMILY</span>
                            <h2 className="cta-title">Begin Your Child's Journey of Excellence at D.R.P.</h2>
                            <p className="cta-desc">
                                Admissions open for Academic Session 2026-27 from Pre-Nursery to Class X. Schedule a campus visit or enquire online today.
                            </p>
                        </div>
                        <div className="cta-banner-actions">
                            <Link to="/admissions" className="btn-cta-gold">
                                <span>Apply for Admission</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                            <Link to="/contact" className="btn-cta-outline">
                                Contact Office
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
