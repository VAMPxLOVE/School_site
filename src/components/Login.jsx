import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/login', {
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
        <div className="container page-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div className="login-container glass" style={{ padding: '2.5rem', borderRadius: '12px', maxWidth: '400px', width: '100%', background: 'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#003366', fontWeight: 'bold' }}>Admin Login</h2>
                <form id="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username" style={{ color: '#003366', fontWeight: 'bold' }}>Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.3)' }}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style={{ color: '#003366', fontWeight: 'bold' }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.3)' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '0.8rem', fontSize: '1.1rem' }}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
