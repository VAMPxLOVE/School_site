import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { API_BASE_URL } from '../config';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_BASE_URL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();

            if (data.token) {
                localStorage.setItem('token', data.token);
                alert('Login Successful!');
                navigate('/admin');
            } else {
                alert('Login Failed: ' + data.message);
            }
        } catch (err) {
            console.error(err);
            alert('Error logging in');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            background: '#e0f7fa',
            backgroundImage: `
                radial-gradient(at 0% 0%, hsla(190, 100%, 90%, 1) 0, transparent 50%),
                radial-gradient(at 50% 0%, hsla(210, 100%, 85%, 1) 0, transparent 50%),
                radial-gradient(at 100% 0%, hsla(200, 100%, 95%, 1) 0, transparent 50%)`
        }}>
            <div className="glass" style={{
                padding: '3rem',
                borderRadius: '24px',
                maxWidth: '450px',
                width: '100%',
                boxShadow: '0 20px 40px rgba(0, 51, 102, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.6)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div style={{
                        width: '80px', height: '80px', background: '#003366',
                        borderRadius: '50%', margin: '0 auto 1.5rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '2rem', color: 'white',
                        boxShadow: '0 10px 20px rgba(0, 51, 102, 0.3)'
                    }}>
                        🔐
                    </div>
                    <h2 style={{ color: '#003366', fontSize: '2rem', marginBottom: '0.5rem', fontWeight: '800' }}>Admin Portal</h2>
                    <p style={{ color: '#445566' }}>Secure access for staff only.</p>
                </div>

                <form id="login-form" onSubmit={handleLogin}>
                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="username" style={{ color: '#003366', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>Username</label>
                        <input
                            type="text"
                            id="username"
                            required
                            style={{
                                width: '100%', padding: '1rem', borderRadius: '12px',
                                border: '2px solid transparent', background: 'rgba(255,255,255,0.7)',
                                fontSize: '1rem', transition: 'all 0.3s',
                                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                            }}
                            onFocus={(e) => {
                                e.target.style.background = 'white';
                                e.target.style.borderColor = '#00509E';
                                e.target.style.boxShadow = '0 0 0 4px rgba(0, 80, 158, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.7)';
                                e.target.style.borderColor = 'transparent';
                                e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.05)';
                            }}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: '2rem' }}>
                        <label htmlFor="password" style={{ color: '#003366', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            style={{
                                width: '100%', padding: '1rem', borderRadius: '12px',
                                border: '2px solid transparent', background: 'rgba(255,255,255,0.7)',
                                fontSize: '1rem', transition: 'all 0.3s',
                                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                            }}
                            onFocus={(e) => {
                                e.target.style.background = 'white';
                                e.target.style.borderColor = '#00509E';
                                e.target.style.boxShadow = '0 0 0 4px rgba(0, 80, 158, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.7)';
                                e.target.style.borderColor = 'transparent';
                                e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.05)';
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{
                        width: '100%', padding: '1rem', fontSize: '1.2rem',
                        borderRadius: '12px', background: '#003366',
                        boxShadow: '0 8px 15px rgba(0, 51, 102, 0.25)',
                        border: 'none', cursor: 'pointer', color: 'white', fontWeight: 'bold'
                    }}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
