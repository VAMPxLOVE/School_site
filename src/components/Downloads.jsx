import React from 'react';

const Downloads = () => {
    const categories = [
        {
            title: "Syllabus & Curriculum",
            items: [
                { name: "Pre-Primary Syllabus 2026-27", url: "#" },
                { name: "Primary Syllabus (Classes 1-5)", url: "#" },
                { name: "Middle School Syllabus (Classes 6-8)", url: "#" },
                { name: "Secondary Curriculum (Classes 9-10)", url: "#" },
                { name: "Senior Secondary Streams (Classes 11-12)", url: "#" }
            ]
        },
        {
            title: "Administrative Forms",
            items: [
                { name: "Student Registration Form", url: "#" },
                { name: "Transfer Certificate Application", url: "#" },
                { name: "Transport Request Form", url: "#" },
                { name: "Leave Application Format", url: "#" }
            ]
        },
        {
            title: "School Publications",
            items: [
                { name: "School Newsletter - January 2026", url: "#" },
                { name: "Annual Magazine 'The Horizon'", url: "#" },
                { name: "Parent Handbook 2026-27", url: "#" }
            ]
        }
    ];

    return (
        <div className="container page-content">
            <h1>Download Center</h1>
            <p className="mb-4">Access important school documents, forms, and curriculum details here.</p>

            <div className="download-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {categories.map((cat, index) => (
                    <div key={index} className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
                        <h3 style={{ borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                            {cat.title}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {cat.items.map((item, idx) => (
                                <li key={idx} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ marginRight: '10px', fontSize: '1.2rem' }}>📄</span>
                                    <a href={item.url} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                                        onMouseOver={(e) => e.target.style.color = 'var(--color-secondary)'}
                                        onMouseOut={(e) => e.target.style.color = 'var(--color-text)'}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Downloads;
