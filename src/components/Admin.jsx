import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const Admin = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('notices');

    // Notice Form State
    const [noticeTitle, setNoticeTitle] = useState('');
    const [noticeDate, setNoticeDate] = useState('');
    const [noticeContent, setNoticeContent] = useState('');
    const [noticeFile, setNoticeFile] = useState(null);

    // Messages State
    const [messages, setMessages] = useState([]);

    // Result Form State
    const [resultName, setResultName] = useState('');
    const [resultRollNo, setResultRollNo] = useState('');
    const [resultAdmissionNo, setResultAdmissionNo] = useState('');
    const [resultDob, setResultDob] = useState('');
    const [resultClass, setResultClass] = useState('');
    const [resultMarks, setResultMarks] = useState({ Math: '', Science: '', English: '', Hindi: '', SST: '' });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        fetchMessages();
    }, [navigate]);

    const fetchMessages = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/messages`);
            const data = await res.json();
            if (data.data) setMessages(data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleNoticeSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', noticeTitle);
        formData.append('date', noticeDate);
        formData.append('content', noticeContent);
        if (noticeFile) {
            formData.append('pdf', noticeFile);
        }

        try {
            const res = await fetch(`${API_BASE_URL}/api/notices`, {
                method: 'POST',
                body: formData
            });
            const result = await res.json();

            if (res.ok) {
                alert('Notice Posted Successfully!');
                setNoticeTitle('');
                setNoticeDate('');
                setNoticeContent('');
                setNoticeFile(null);
            } else {
                alert('Failed to post notice: ' + (result.error || 'Unknown error'));
            }
        } catch (err) {
            console.error(err);
            alert('Error posting notice');
        }
    };

    const handleResultSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_BASE_URL}/api/results`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    student_name: resultName,
                    roll_no: resultRollNo,
                    admission_no: resultAdmissionNo,
                    dob: resultDob,
                    class: resultClass,
                    marks: resultMarks
                })
            });
            const result = await res.json();

            if (res.ok) {
                alert('Result Uploaded Successfully!');
                setResultName('');
                setResultRollNo('');
                setResultAdmissionNo('');
                setResultDob('');
                setResultClass('');
                setResultMarks({ Math: '', Science: '', English: '', Hindi: '', SST: '' });
            } else {
                alert('Failed to upload result: ' + (result.error || 'Unknown error'));
            }
        } catch (err) {
            console.error(err);
            alert('Error uploading result');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="container page-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Admin Dashboard</h1>
                <button onClick={handleLogout} className="btn" style={{ background: '#dc3545', color: 'white' }}>Logout</button>
            </div>

            <div className="admin-tabs" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <button
                    className={`btn ${activeTab === 'notices' ? 'btn-primary' : ''}`}
                    style={{ background: activeTab !== 'notices' ? '#ccc' : '' }}
                    onClick={() => setActiveTab('notices')}
                >
                    Post Notice
                </button>
                <button
                    className={`btn ${activeTab === 'results' ? 'btn-primary' : ''}`}
                    style={{ background: activeTab !== 'results' ? '#ccc' : '' }}
                    onClick={() => setActiveTab('results')}
                >
                    Upload Result
                </button>
                <button
                    className={`btn ${activeTab === 'messages' ? 'btn-primary' : ''}`}
                    style={{ background: activeTab !== 'messages' ? '#ccc' : '' }}
                    onClick={() => setActiveTab('messages')}
                >
                    Messages
                </button>
            </div>

            {/* Notice Tab */}
            {activeTab === 'notices' && (
                <div className="tab-content glass" style={{ padding: '2rem', borderRadius: '8px' }}>
                    <h3>Post New Notice</h3>
                    <form onSubmit={handleNoticeSubmit}>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" required value={noticeTitle} onChange={(e) => setNoticeTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Date</label>
                            <input type="date" required value={noticeDate} onChange={(e) => setNoticeDate(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Content</label>
                            <textarea required rows="4" value={noticeContent} onChange={(e) => setNoticeContent(e.target.value)}></textarea>
                        </div>
                        <div className="form-group" style={{ background: 'rgba(0,0,0,0.05)', padding: '1rem', borderRadius: '8px', border: '1px dashed #ccc' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <span style={{ fontSize: '1.5rem' }}>📎</span>
                                <strong>Attach PDF File</strong> (Optional)
                            </label>
                            <input type="file" accept="application/pdf" onChange={(e) => setNoticeFile(e.target.files[0])} style={{ marginTop: '0.5rem' }} />
                        </div>
                        <button type="submit" className="btn btn-primary">Post Notice</button>
                    </form>
                </div>
            )}

            {/* Results Tab */}
            {activeTab === 'results' && (
                <div className="tab-content glass" style={{ padding: '2rem', borderRadius: '8px' }}>
                    <h3>Upload Student Result</h3>
                    <form onSubmit={handleResultSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="form-group">
                                <label>Student Name</label>
                                <input type="text" required value={resultName} onChange={(e) => setResultName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Class</label>
                                <input type="text" required value={resultClass} onChange={(e) => setResultClass(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Roll Number</label>
                                <input type="text" required value={resultRollNo} onChange={(e) => setResultRollNo(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Admission Number</label>
                                <input type="text" required value={resultAdmissionNo} onChange={(e) => setResultAdmissionNo(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input type="date" required value={resultDob} onChange={(e) => setResultDob(e.target.value)} />
                            </div>
                        </div>

                        <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>Subjects & Marks</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                            {Object.keys(resultMarks).map((subject) => (
                                <div key={subject} className="form-group">
                                    <label>{subject}</label>
                                    <input
                                        type="number"
                                        required
                                        value={resultMarks[subject]}
                                        onChange={(e) => setResultMarks({ ...resultMarks, [subject]: e.target.value })}
                                    />
                                </div>
                            ))}
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Upload Result</button>
                    </form>
                </div>
            )}

            {/* Messages Tab */}
            {activeTab === 'messages' && (
                <div className="tab-content glass" style={{ padding: '2rem', borderRadius: '8px' }}>
                    <h3>Inbox ({messages.length})</h3>
                    <div className="messages-list">
                        {messages.length === 0 ? <p>No messages found.</p> : (
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                                <thead>
                                    <tr style={{ background: '#f8f9fa' }}>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Date</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Name</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Subject</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages.map(msg => (
                                        <tr key={msg._id} style={{ borderBottom: '1px solid #eee' }}>
                                            <td style={{ padding: '1rem' }}>{msg.date}</td>
                                            <td style={{ padding: '1rem' }}>{msg.name} <br /><small>{msg.email}</small></td>
                                            <td style={{ padding: '1rem' }}>{msg.subject}</td>
                                            <td style={{ padding: '1rem' }}>
                                                <button className="btn" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }} onClick={() => alert(msg.message)}>View</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
