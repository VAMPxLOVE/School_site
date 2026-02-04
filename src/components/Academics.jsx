import React from 'react';
import { Link } from 'react-router-dom';

const Academics = () => {
    return (
        <div className="container page-content">
            <h1>Academics</h1>
            <section className="academics-section">
                <h2>Curriculum</h2>
                <p>We follow a comprehensive curriculum designed to challenge and inspire students across all grades.</p>
                <ul>
                    <li><strong>Primary:</strong> Focus on foundational literacy, numeracy, and social skills.</li>
                    <li><strong>Middle School:</strong> Broad-based education with introduction to specialized subjects.</li>
                    <li><strong>Senior Secondary:</strong> Specialized streams in Science, Commerce, and Arts.</li>
                </ul>
            </section>
            <section className="academics-section">
                <h2>Departments</h2>
                <div className="dept-grid">
                    <div className="dept-card">Science & Mathematics</div>
                    <div className="dept-card">Humanities & Social Sciences</div>
                    <div className="dept-card">Languages & Literature</div>
                    <div className="dept-card">Computer Science & Technology</div>
                    <div className="dept-card">Visual & Performing Arts</div>
                    <div className="dept-card">Physical Education</div>
                </div>
            </section>
            <section className="academics-section">
                <h2>Academic Calendar</h2>
                <p>Download our <a href="#" style={{ color: 'var(--color-primary)' }}>Annual Calendar 2026-27</a> (PDF)</p>
            </section>
        </div>
    );
};

export default Academics;
