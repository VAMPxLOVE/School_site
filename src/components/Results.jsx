import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const Results = () => {
    const [rollNo, setRollNo] = useState('');
    const [admissionNo, setAdmissionNo] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [dob, setDob] = useState('');
    const [resultData, setResultData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setResultData(null);
        setLoading(true);

        try {
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
                setError('No official examination record found matching the provided Roll Number / Admission No. Please verify your credentials or contact the examination desk.');
            }
        } catch (err) {
            console.error(err);
            setError('Unable to fetch result at this moment. Please check your internet connection or try again later.');
        } finally {
            setLoading(false);
        }
    };

    const meritHighlights = [
        { stat: "100%", label: "CBSE Class X Board Pass Rate", icon: "🏆", desc: "Consecutive academic years with flawless board clearance" },
        { stat: "98.4%", label: "Highest Board Aggregate", icon: "🌟", desc: "Class X school topper distinction score" },
        { stat: "85%+", label: "First Division Achievers", icon: "🎖️", desc: "Students securing Distinction & First Division marks" },
        { stat: "100%", label: "Practical & Internal Distinction", icon: "🔬", desc: "Exemplary performance across Science, Math & IT labs" }
    ];

    const topperStories = [
        {
            name: "Ananya Sharma",
            score: "98.4%",
            class: "Class X Board",
            badge: "School Topper",
            desc: "100/100 in Mathematics & Science. Aspiring astrophysicist and student council leader.",
            img: "/assets/gallery/results/WhatsApp Image 2026-08-25 at 2.02.45 AM.jpeg"
        },
        {
            name: "Rohan Verma",
            score: "97.2%",
            class: "Class X Board",
            badge: "2nd Rank",
            desc: "100/100 in Social Science and IT. State-level badminton player and quiz captain.",
            img: "/assets/gallery/results/WhatsApp Image 2026-08-25 at 2.02.46 AM.jpeg"
        },
        {
            name: "Priya Gupta",
            score: "96.8%",
            class: "Class X Board",
            badge: "3rd Rank",
            desc: "Distinction across all 5 subjects. Winner of inter-school Sanskrit debate championship.",
            img: "/assets/gallery/results/WhatsApp Image 2026-08-25 at 2.02.47 AM.jpeg"
        }
    ];

    return (
        <div className="results-page-wrapper">
            {/* --- GURUKUL GRAND HEADER --- */}
            <div className="gurukul-page-header">
                <div className="container">
                    <div className="gurukul-header-content">
                        <span className="gurukul-kicker">✦ STUDENT ZONE & ACADEMIC PORTAL ✦</span>
                        <h1 className="gurukul-page-title">Examination Results & Merit Showcase</h1>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">🏆</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="gurukul-header-desc">
                            Celebrating our students' scholarly dedication, CBSE Class X Board triumphs, subject distinctions, and annual merit milestones.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- MERIT STATS RIBBON --- */}
            <section className="about-stats-ribbon">
                <div className="container">
                    <div className="about-stats-grid">
                        {meritHighlights.map((m, idx) => (
                            <div key={idx} className="about-stat-card">
                                <div className="stat-icon-disc trophy-anim-glow">{m.icon}</div>
                                <div className="stat-num">{m.stat}</div>
                                <div className="stat-label">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container" style={{ padding: '3.5rem 1rem 5rem' }}>
                {/* --- TWO COLUMN SECTION: MERIT TOPPERS + RESULT LOOKUP FORM --- */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3rem', alignItems: 'flex-start' }} className="results-grid-layout">
                    {/* Left: Toppers Hall of Fame */}
                    <div>
                        <div className="gurukul-section-header" style={{ marginBottom: '1.8rem' }}>
                            <span className="gurukul-kicker">✦ HALL OF FAME ✦</span>
                            <h2 className="section-title" style={{ fontSize: '1.75rem' }}>CBSE Board Distinction Holders</h2>
                            <div className="gurukul-gold-divider-left">
                                <span className="divider-line"></span>
                                <span className="divider-icon">✨</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {topperStories.map((topper, i) => (
                                <div key={i} className="topper-merit-card">
                                    <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                                        <div style={{ width: '90px', height: '90px', borderRadius: '14px', overflow: 'hidden', border: '2px solid #DAA520', flexShrink: 0, background: '#E2E8F0' }}>
                                            <img src={topper.img} alt={topper.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                                                <h3 style={{ fontFamily: 'var(--font-family-heading)', color: '#0B2545', margin: 0, fontSize: '1.2rem' }}>
                                                    {topper.name}
                                                </h3>
                                                <span style={{ background: 'linear-gradient(135deg, #DAA520, #B8860B)', color: '#001f3f', fontWeight: '800', fontSize: '0.78rem', padding: '0.2rem 0.65rem', borderRadius: '999px' }}>
                                                    {topper.score}
                                                </span>
                                            </div>
                                            <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                {topper.class} • {topper.badge}
                                            </span>
                                            <p style={{ fontSize: '0.85rem', color: '#475569', margin: '0.4rem 0 0', lineHeight: 1.45 }}>
                                                {topper.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '2rem', padding: '1.2rem', background: '#F8FAFC', borderRadius: '14px', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ fontSize: '2rem' }}>📸</div>
                            <div>
                                <h4 style={{ margin: 0, color: '#0B2545', fontSize: '0.98rem' }}>Annual Result Day Photo Showcase</h4>
                                <p style={{ margin: '0.2rem 0 0', fontSize: '0.82rem', color: '#64748B' }}>View all 13 authentic ceremony photos with trophies, certificates, and student celebrations.</p>
                                <Link to="/gallery" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#B8860B', fontWeight: '700', fontSize: '0.82rem', marginTop: '0.4rem', textDecoration: 'none' }}>
                                    <span>Open Result Day Album</span>
                                    <i className="fa-solid fa-arrow-right-long link-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right: Live Result Search Portal */}
                    <div>
                        <div className="gurukul-section-header" style={{ marginBottom: '1.8rem' }}>
                            <span className="gurukul-kicker">✦ VERIFICATION DESK ✦</span>
                            <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Search Student Result Card</h2>
                            <div className="gurukul-gold-divider-left">
                                <span className="divider-line"></span>
                                <span className="divider-icon">🔍</span>
                            </div>
                        </div>

                        <div style={{ background: '#ffffff', borderRadius: '20px', padding: '2.2rem', boxShadow: '0 12px 35px rgba(11, 37, 69, 0.1)', border: '2px solid rgba(218, 165, 32, 0.35)' }}>
                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                    <div className="modal-form-group">
                                        <label>Roll Number *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. 10452"
                                            value={rollNo}
                                            onChange={(e) => setRollNo(e.target.value)}
                                            className="modal-input"
                                        />
                                    </div>

                                    <div className="modal-form-group">
                                        <label>Admission No. *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. DRP-2022-89"
                                            value={admissionNo}
                                            onChange={(e) => setAdmissionNo(e.target.value)}
                                            className="modal-input"
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div className="modal-form-group">
                                        <label>Class / Grade *</label>
                                        <select
                                            required
                                            value={studentClass}
                                            onChange={(e) => setStudentClass(e.target.value)}
                                            className="modal-select"
                                        >
                                            <option value="">Select Grade</option>
                                            <option value="X">Class X (CBSE Board)</option>
                                            <option value="IX">Class IX</option>
                                            <option value="VIII">Class VIII</option>
                                            <option value="VII">Class VII</option>
                                            <option value="VI">Class VI</option>
                                            <option value="V">Class V</option>
                                        </select>
                                    </div>

                                    <div className="modal-form-group">
                                        <label>Date of Birth *</label>
                                        <input
                                            type="date"
                                            required
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                            className="modal-input"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-modal-submit"
                                    style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem' }}
                                >
                                    {loading ? (
                                        <span><i className="fa-solid fa-spinner fa-spin"></i> Fetching Examination Record...</span>
                                    ) : (
                                        <span><i className="fa-solid fa-file-invoice"></i> View Official Scorecard</span>
                                    )}
                                </button>
                            </form>

                            {error && (
                                <div style={{ marginTop: '1.5rem', padding: '1rem 1.2rem', background: '#FEF2F2', borderLeft: '4px solid #EF4444', borderRadius: '8px', color: '#991B1B', fontSize: '0.88rem', lineHeight: 1.5 }}>
                                    <i className="fa-solid fa-triangle-exclamation"></i> {error}
                                </div>
                            )}

                            {resultData && (
                                <div className="result-card-container" style={{ marginTop: '2rem', padding: '1.8rem', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #CBD5E1', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #DAA520', paddingBottom: '0.8rem', marginBottom: '1.2rem' }}>
                                        <div>
                                            <h4 style={{ margin: 0, color: '#0B2545', fontFamily: 'var(--font-family-heading)', fontSize: '1.2rem' }}>
                                                {resultData.student_name}
                                            </h4>
                                            <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Class: {resultData.class} | Roll No: {resultData.roll_no}</span>
                                        </div>
                                        <span style={{ background: '#0B2545', color: '#DAA520', fontWeight: '800', fontSize: '0.78rem', padding: '0.3rem 0.8rem', borderRadius: '999px', border: '1px solid #DAA520' }}>
                                            PASSED ✓
                                        </span>
                                    </div>

                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                                        <thead>
                                            <tr style={{ background: '#0B2545', color: '#ffffff' }}>
                                                <th style={{ padding: '0.65rem 0.9rem', textAlign: 'left', borderRadius: '8px 0 0 8px' }}>Subject</th>
                                                <th style={{ padding: '0.65rem 0.9rem', textAlign: 'right', borderRadius: '0 8px 8px 0' }}>Marks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {resultData.marks && Object.entries(resultData.marks).map(([subj, marks], idx) => (
                                                <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0' }}>
                                                    <td style={{ padding: '0.65rem 0.9rem', color: '#334155', fontWeight: '500' }}>{subj}</td>
                                                    <td style={{ padding: '0.65rem 0.9rem', textAlign: 'right', fontWeight: '800', color: '#0B2545' }}>{marks}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <div style={{ marginTop: '1.4rem', textAlign: 'center' }}>
                                        <button onClick={() => window.print()} className="btn btn-secondary" style={{ padding: '0.55rem 1.4rem', fontSize: '0.85rem' }}>
                                            <i className="fa-solid fa-print"></i> Print Official Marksheet
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
