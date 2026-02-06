import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const Notices = () => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/notices`);
                const data = await res.json();
                if (data.data) {
                    setNotices(data.data);
                }
            } catch (err) {
                console.error('Error fetching notices:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchNotices();
    }, []);

    return (
        <div className="notice-page-container">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ color: '#003366', fontSize: '3rem', margin: 0, textShadow: 'none' }}>Notice Archive</h1>
                    <Link to="/login" className="btn btn-primary" style={{ borderRadius: '20px', boxShadow: '0 0 15px rgba(0, 80, 158, 0.5)' }}>Admin Login</Link>
                </div>
                <p style={{ color: '#445566', fontSize: '1.1rem', maxWidth: '600px' }}>
                    Stay updated with the latest news, announcements, and official communications from D.R.P. CONVENT PUBLIC SCHOOL.
                </p>

                <div className="notice-feed">
                    {loading ? (
                        <p style={{ color: '#003366' }}>Loading updates...</p>
                    ) : notices.length > 0 ? (
                        notices.map((notice, index) => (
                            <article key={index} className="ios-card">
                                <div className="notice-date-pill">📅 {notice.date.split('-').reverse().join('/')}</div>
                                <h3 className="ios-title">{notice.title}</h3>
                                <p className="ios-content">{notice.content}</p>
                                {notice.filePath && (
                                    <a href={notice.filePath} target="_blank" rel="noopener noreferrer" className="btn-glass">
                                        📄 View PDF
                                    </a>
                                )}
                            </article>
                        ))
                    ) : (
                        <p>No notices found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notices;
