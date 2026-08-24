import React, { useEffect, useState, useCallback } from 'react';

const WelcomeScreen = () => {
    // Check sessionStorage immediately during state initialization
    const [visible, setVisible] = useState(() => {
        try {
            return !sessionStorage.getItem('hasVisited');
        } catch {
            return false;
        }
    });
    const [exiting, setExiting] = useState(false);

    const handleDismiss = useCallback(() => {
        if (exiting) return;
        setExiting(true);
        try {
            sessionStorage.setItem('hasVisited', 'true');
        } catch {}
        setTimeout(() => setVisible(false), 450);
    }, [exiting]);

    useEffect(() => {
        if (visible) {
            // Auto exit quickly after 1.2s to prevent slow initial load experience
            const timer = setTimeout(() => {
                handleDismiss();
            }, 1200);

            return () => clearTimeout(timer);
        }
    }, [visible, handleDismiss]);

    if (!visible) return null;

    return (
        <div
            className={`welcome-overlay ${exiting ? 'exit' : ''}`}
            onClick={handleDismiss}
            role="dialog"
            aria-label="Welcome screen"
            style={{ cursor: 'pointer' }}
        >
            <div className="welcome-content">
                <img
                    src="/assets/logo.jpg"
                    alt="Logo"
                    className="welcome-logo"
                    width="120"
                    height="120"
                    loading="eager"
                    fetchpriority="high"
                />
                <h1 className="welcome-text">D.R.P. Convent Public School</h1>
                <p className="welcome-subtext">WELCOME TO EXCELLENCE</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDismiss();
                        }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.35)',
                            color: '#ffffff',
                            padding: '0.45rem 1.2rem',
                            borderRadius: '999px',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            backdropFilter: 'blur(8px)',
                            transition: 'all 0.2s ease',
                            letterSpacing: '0.05em'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
                    >
                        Enter Website &rarr;
                    </button>
                    <span style={{ fontSize: '0.75rem', opacity: 0.6, color: 'white' }}>
                        (Click anywhere to enter)
                    </span>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
