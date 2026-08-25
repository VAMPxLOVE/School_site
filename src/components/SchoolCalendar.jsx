import React from 'react';
import { Link } from 'react-router-dom';

const SchoolCalendar = () => {
    const events = [
        { month: "April 2026", badge: "Session Commencement", events: ["New Academic Session 2026-27 Begins", "World Health Day Assembly & Wellness Pledge", "Earth Day Poster Making Competition"] },
        { month: "May 2026", badge: "Assessments & Mother's Day", events: ["Summer Camp & Hobby Clubs Start", "Unit Test 1 (Classes VI - X)", "Mother's Day Special Assembly & Card Making"] },
        { month: "June 2026", badge: "Summer Recess", events: ["Summer Vacation for Students", "International Yoga Day Workshop", "Faculty Pedagogical Development Webinars"] },
        { month: "July 2026", badge: "Investiture Ceremony", events: ["School Reopens after Summer Break", "Student Council Elections & Investiture Ceremony", "Inter-House Debate & Science Model Exhibition"] },
        { month: "August 2026", badge: "National Pride", events: ["79th Independence Day Grand Celebration", "Raksha Bandhan Craft Workshop", "Janmashtami & Samarpan Cultural Gala"] },
        { month: "September 2026", badge: "Mid-Term Exams", events: ["Teacher's Day Tributes by Senior Students", "Half-Yearly / Term-1 Board Mock Examinations", "Hindi Diwas Elocution Competition"] },
        { month: "October 2026", badge: "Festivals & Sports", events: ["Gandhi Jayanti Assembly", "Diwali Utsav, Rangoli & Diya Decoration", "Annual Inter-House Sports & Badminton Meet"] },
        { month: "November 2026", badge: "Children's Day", events: ["Children's Day Carnival & Food Stalls", "Annual Science & Computer AI Exhibition", "Guru Nanak Jayanti Observance"] },
        { month: "December 2026", badge: "Pre-Boards", events: ["CBSE Pre-Board Examinations (Classes X & XII)", "Winter Carnival & Art Showcase", "Christmas & Winter Break Begins"] },
        { month: "January 2027", badge: "Republic Day", events: ["School Reopens", "Republic Day Flag Hoisting & Patriotic Drill", "Second Pre-Board Exam Series"] },
        { month: "February 2027", badge: "Final Exams", events: ["CBSE Main Board Practicals & Vivas", "Final Annual Examinations (Classes IX & XI)", "Blessing & Farewell Ceremony for Class XII"] },
        { month: "March 2027", badge: "Annual Result Day", events: ["Final Examinations (Classes Pre-Nursery to VIII)", "Annual Result Declaration & Prize Distribution", "New Session Book & Uniform Distribution"] }
    ];

    return (
        <div className="calendar-page-container">
            {/* --- GURUKUL GRAND HEADER --- */}
            <div className="gurukul-page-header">
                <div className="container">
                    <div className="gurukul-header-content">
                        <span className="gurukul-kicker">✦ ACADEMIC PLANNER 2026-27 ✦</span>
                        <h1 className="gurukul-page-title">Annual Academic & Activity Calendar</h1>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">📅</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="gurukul-header-desc">
                            A comprehensive timeline of examinations, national holidays, cultural celebrations, sports galas, and parent-teacher orientations.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '3.5rem 1rem 5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.8rem' }}>
                    {events.map((item, index) => (
                        <div
                            key={index}
                            className="facility-spotlight-card"
                            style={{
                                padding: '1.8rem',
                                background: '#ffffff',
                                borderTop: '4px solid #0B2545',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                                    <h3 style={{ fontFamily: 'var(--font-family-heading)', color: '#0B2545', margin: 0, fontSize: '1.25rem' }}>
                                        {item.month}
                                    </h3>
                                    <span className="stage-panel-badge" style={{ margin: 0, fontSize: '0.72rem' }}>
                                        {item.badge}
                                    </span>
                                </div>
                                <ul className="facility-features-list" style={{ marginTop: '1rem', marginBottom: 0 }}>
                                    {item.events.map((event, idx) => (
                                        <li key={idx} style={{ fontSize: '0.88rem', color: '#334155' }}>
                                            <span className="check-bullet">✦</span>
                                            <span>{event}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                    <Link to="/downloads" className="btn btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
                        <span>Download Full Academic Circular (PDF)</span>
                        <i className="fa-solid fa-download"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SchoolCalendar;
