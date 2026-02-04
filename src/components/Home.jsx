import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NoticeBoard from './NoticeBoard';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
            title: 'Welcome to D.R.P. CONVENT PUBLIC SCHOOL',
            text: 'Empowering students to achieve greatness.',
            link: '/admissions',
            btnText: 'Apply Now'
        },
        {
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80',
            title: 'World-Class Education',
            text: 'Nurturing curiosity and critical thinking.',
            link: '/academics',
            btnText: 'Explore Academics'
        },
        {
            image: 'https://images.unsplash.com/photo-1427504743050-dad446326749?w=1600&q=80',
            title: 'Holistic Development',
            text: 'Sports, Arts, and Leadership programs.',
            link: '/gallery',
            btnText: 'View Campus Life'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* Carousel Section */}
            <div className="carousel-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url('${slide.image}')` }}
                    >
                        <div className="carousel-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.text}</p>
                            <Link to={slide.link} className="btn btn-primary">{slide.btnText}</Link>
                        </div>
                    </div>
                ))}

                <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous Slide">❮</button>
                <button className="carousel-control next" onClick={nextSlide} aria-label="Next Slide">❯</button>

                {/* Embedded Notice Board */}
                <NoticeBoard />
            </div>

            {/* Features Section */}
            <section className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                <h2>Why Choose Us?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                    <div className="feature-card">
                        <h3>Experienced Faculty</h3>
                        <p>Learn from the best educators committed to your success.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Modern Facilities</h3>
                        <p>State-of-the-art labs, library, and sports complex.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Holistic Development</h3>
                        <p>Focus on academic, physical, and moral growth.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
