import React, { useState } from 'react';

const Results = () => {
    const [rollNo, setRollNo] = useState('');
    const [resultData, setResultData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setResultData(null);

        try {
            // Assuming endpoint is like /api/results?rollNo=...
            const res = await fetch(`/api/results?rollNo=${rollNo}`);
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
                    <div className="form-group">
                        <label htmlFor="rollNo">Enter Roll Number</label>
                        <input
                            type="text"
                            id="rollNo"
                            placeholder="e.g., 101"
                            required
                            value={rollNo}
                            onChange={(e) => setRollNo(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>View Result</button>
                </form>

                {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

                {resultData && (
                    <div id="result-display" style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.8)', borderRadius: '8px' }}>
                        <h3>Result for {resultData.name}</h3>
                        <p><strong>Class:</strong> {resultData.class}</p>
                        <table style={{ width: '100%', marginTop: '1rem' }}>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'left' }}>Subject</th>
                                    <th style={{ textAlign: 'right' }}>Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Math</td><td style={{ textAlign: 'right' }}>{resultData.math}</td></tr>
                                <tr><td>Science</td><td style={{ textAlign: 'right' }}>{resultData.science}</td></tr>
                                <tr><td>English</td><td style={{ textAlign: 'right' }}>{resultData.english}</td></tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Results;
