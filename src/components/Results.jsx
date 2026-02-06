import React, { useState } from 'react';

import { API_BASE_URL } from '../config';

const Results = () => {
    const [rollNo, setRollNo] = useState('');
    const [admissionNo, setAdmissionNo] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [dob, setDob] = useState('');
    const [resultData, setResultData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setResultData(null);

        try {
            // Secure search matching multiple fields
            const params = new URLSearchParams({
                rollNo,
                admissionNo,
                class: studentClass,
                dob
            });
            const res = await fetch(`${API_BASE_URL}/api/search_result?${params.toString()}`);
            const data = await res.json();

            if (data.data) {
                setResultData(data.data);
            } else {
                setError('Result not found for this Roll Number.');
            }
        } catch (err) {
            console.error(err);
            setError('Error fetching result.');
        }
    };

    return (
        <div className="container page-content" style={{ maxWidth: '600px' }}>
            <h1>Student Results</h1>
            <div className="contact-form-container glass">
                <h2>Check Your Result</h2>
                <form id="result-form" className="contact-form" onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label htmlFor="rollNo">Roll Number</label>
                            <input
                                type="text"
                                id="rollNo"
                                required
                                value={rollNo}
                                onChange={(e) => setRollNo(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="admissionNo">Admission Number</label>
                            <input
                                type="text"
                                id="admissionNo"
                                required
                                value={admissionNo}
                                onChange={(e) => setAdmissionNo(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="class">Class</label>
                            <select
                                id="class"
                                required
                                value={studentClass}
                                onChange={(e) => setStudentClass(e.target.value)}
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            >
                                <option value="">Select Class</option>
                                <option value="X">Class X</option>
                                <option value="XII">Class XII</option>
                                {/* Add more options as needed or make it a text input if preferred */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input
                                type="date"
                                id="dob"
                                required
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>View Result</button>
                </form>

                {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

                {resultData && (
                    <div id="result-display" style={{ marginTop: '2rem', padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                            Result Card
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem', background: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>Student Name</p>
                                <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{resultData.student_name}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>Class</p>
                                <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{resultData.class}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>Roll Number</p>
                                <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{resultData.roll_no}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>Admission No.</p>
                                <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{resultData.admission_no || 'N/A'}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>Date of Birth</p>
                                <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{resultData.dob || 'N/A'}</p>
                            </div>
                        </div>

                        <h4 style={{ marginBottom: '1rem' }}>Marks Statement</h4>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', borderRadius: '4px 0 0 4px' }}>Subject</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'right', borderRadius: '0 4px 4px 0' }}>Marks Obtained</th>
                                </tr>
                            </thead>
                            <tbody>
                                {resultData.marks && Object.entries(resultData.marks).map(([subject, marks], index) => (
                                    <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                                        <td style={{ padding: '0.75rem' }}>{subject}</td>
                                        <td style={{ padding: '0.75rem', textAlign: 'right', fontWeight: 'bold' }}>{marks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Results;
