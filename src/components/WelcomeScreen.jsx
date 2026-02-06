import React, { useEffect, useState } from 'react';

const WelcomeScreen = () => {
    // Check sessionStorage immediately during state initialization
    const [visible, setVisible] = useState(() => {
        return !sessionStorage.getItem('hasVisited');
    });
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        if (visible) {
            // Start exit animation after 8 seconds
            const timer = setTimeout(() => {
                setExiting(true);
                // Remove from DOM after animation completes
                setTimeout(() => setVisible(false), 1200);
                sessionStorage.setItem('hasVisited', 'true');
            }, 8000);

            return () => clearTimeout(timer);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <div className={`welcome-overlay ${exiting ? 'exit' : ''}`}>
            <div className="welcome-content">
                <img src="/assets/logo.jpg" alt="Logo" className="welcome-logo" />
                <h1 className="welcome-text">D.R.P. Convent Public School</h1>
                <p className="welcome-subtext">WELCOME TO EXCELLENCE</p>
                <div style={{ marginTop: '2rem', fontSize: '2rem' }} className="animate-float">✨</div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
