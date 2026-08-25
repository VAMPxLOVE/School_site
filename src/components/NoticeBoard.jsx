import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const defaultNotices = [
    { title: "Admissions Open for Session 2026-27 (Pre-Nursery to Class X) — Apply Online or Visit Campus Office", date: "2026-08-25", link: "/admissions" },
    { title: "CBSE Annual Academic Calendar 2026-27 & Examination Schedule is now published", date: "2026-08-20", link: "/calendar" },
    { title: "Inter-House Badminton, Chess & Cultural Gala Schedule Announced", date: "2026-08-18", link: "/gallery" },
    { title: "Parent-Teacher Interaction & Progress Review Meeting Notification", date: "2026-08-15", link: "/contact" }
];

const NoticeBoard = () => {
    const [notices, setNotices] = useState(defaultNotices);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/notices`);
                if (res.ok) {
                    const data = await res.json();
                    if (data.data && data.data.length > 0) {
                        setNotices(data.data);
                    }
                }
            } catch (err) {
                // Keep default notices
            }
        };
        fetchNotices();
    }, []);

    return (
        <div className="gurukul-notice-wrapper">
            <div className="notice-badge-label">
                <span className="notice-pulse-icon">📢</span>
                <span className="notice-label-text">CIRCULARS & NOTICES</span>
            </div>
            <div className="notice-ticker-track">
                <ul className="notice-list-items">
                    {notices.map((notice, index) => (
                        <li key={index} className="notice-item-node">
                            <span className="notice-star">✦</span>
                            {notice.link ? (
                                <Link to={notice.link} className="notice-link-anchor">
                                    {notice.title}
                                </Link>
                            ) : (
                                <span className="notice-text-span">{notice.title}</span>
                            )}
                            {notice.filePath && (
                                <a href={notice.filePath} target="_blank" rel="noreferrer" className="notice-pdf-chip">
                                    PDF
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NoticeBoard;
