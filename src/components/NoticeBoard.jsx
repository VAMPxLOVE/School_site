import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NoticeBoard = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const res = await fetch('/api/notices');
                const data = await res.json();
                if (data.data) {
                    setNotices(data.data);
                }
            } catch (err) {
                console.error("Failed to fetch notices for ticker", err);
            }
        };
        fetchNotices();
    }, []);

    return (
        <div className="notice-board-container">
            <div className="notice-header">NOTICE BOARD</div>
            <div className="notice-ticker">
                <ul className="notice-list">
                    {notices.length > 0 ? (
                        notices.map((notice, index) => (
                            <li key={index}>
                                <span style={{ color: '#FFD700' }}>★</span> {notice.title} - {notice.date}
                                {notice.filePath &&
                                    <span style={{ marginLeft: '5px', fontSize: '0.8em', background: 'white', color: 'blue', padding: '2px 5px', borderRadius: '3px' }}>
                                        PDF
                                    </span>
                                }
                            </li>
                        ))
                    ) : (
                        <li>Loading latest updates...</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default NoticeBoard;
