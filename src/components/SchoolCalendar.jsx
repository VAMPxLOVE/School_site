import React from 'react';

const SchoolCalendar = () => {
    const events = [
        { month: "April 2026", events: ["New Session Begins", "World Health Day Assembly"] },
        { month: "May 2026", events: ["Summer Camp Starts", "Unit Test 1 (Classes 6-10)", "Mother's Day Celebration"] },
        { month: "June 2026", events: ["Summer Vacation", "International Yoga Day"] },
        { month: "July 2026", events: ["School Reopens", "Investiture Ceremony"] },
        { month: "August 2026", events: ["Independence Day Celebration", "Rakhi Making Competition"] },
        { month: "September 2026", events: ["Teacher's Day", "Half-Yearly Examinations"] },
        { month: "October 2026", events: ["Gandhi Jayanti", "Diwali Break", "Inter-House Sports Meet"] },
        { month: "November 2026", events: ["Children's Day Fete", "Annual Day Function"] },
        { month: "December 2026", events: ["Pre-Board Exams (Class 10 & 12)", "Winter Carnival", "Christmas Break"] },
        { month: "January 2027", events: ["School Reopens", "Republic Day Celebration"] },
        { month: "February 2027", events: ["Final Examinations (Classes 9 & 11)"] },
        { month: "March 2027", events: ["Final Examinations (Classes 1-8)", "Result Declaration"] }
    ];

    return (
        <div className="container page-content">
            <h1>School Calendar 2026-27</h1>
            <p>A tentative schedule of academic and co-curricular activities for the current session.</p>

            <div className="calendar-timeline" style={{ position: 'relative', maxWidth: '800px', margin: '3rem auto' }}>
                {events.map((item, index) => (
                    <div key={index} className="timeline-item glass" style={{ marginBottom: '2rem', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--color-secondary)', marginLeft: index % 2 === 0 ? '0' : 'auto', marginRight: index % 2 !== 0 ? '0' : 'auto' }}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{item.month}</h3>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                            {item.events.map((event, idx) => (
                                <li key={idx} style={{ marginBottom: '0.25rem' }}>{event}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a href="#" className="btn btn-primary">Download Full Calendar (PDF)</a>
            </div>
        </div>
    );
};

export default SchoolCalendar;
