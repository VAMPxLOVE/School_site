import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Immediate layout and critical landing components for fast initial paint
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import WelcomeScreen from './components/WelcomeScreen';

// Code-split / Lazy-loaded subpages to minimize initial JS bundle
const About = lazy(() => import('./components/About'));
const Founder = lazy(() => import('./components/Founder'));
const Vision = lazy(() => import('./components/Vision'));
const Mission = lazy(() => import('./components/Mission'));
const Faculty = lazy(() => import('./components/Faculty'));
const Academics = lazy(() => import('./components/Academics'));
const Admissions = lazy(() => import('./components/Admissions'));
const Contact = lazy(() => import('./components/Contact'));
const Gallery = lazy(() => import('./components/Gallery'));
const Results = lazy(() => import('./components/Results'));
const Downloads = lazy(() => import('./components/Downloads'));
const SchoolCalendar = lazy(() => import('./components/SchoolCalendar'));
const ParentConduct = lazy(() => import('./components/ParentConduct'));
const Notices = lazy(() => import('./components/Notices'));
const Login = lazy(() => import('./components/Login'));
const Admin = lazy(() => import('./components/Admin'));
const Chatbot = lazy(() => import('./components/Chatbot'));

// Lightweight page loader during lazy transitions
const PageLoader = () => (
    <div
        style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            color: 'var(--color-primary, #003366)'
        }}
    >
        <div
            style={{
                width: '40px',
                height: '40px',
                border: '3px solid rgba(0, 51, 102, 0.15)',
                borderTopColor: 'var(--color-primary, #003366)',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite'
            }}
        />
        <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Loading page...</span>
    </div>
);

function App() {
    return (
        <Router>
            <WelcomeScreen />
            <div id="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navigation />
                <main id="main-content" style={{ flexGrow: 1 }}>
                    <Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/notices" element={<Notices />} />

                            <Route path="/about" element={<About />} />
                            <Route path="/founder" element={<Founder />} />
                            <Route path="/vision" element={<Vision />} />
                            <Route path="/mission" element={<Mission />} />
                            <Route path="/faculty" element={<Faculty />} />

                            <Route path="/academics" element={<Academics />} />
                            <Route path="/admissions" element={<Admissions />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/results" element={<Results />} />
                            <Route path="/downloads" element={<Downloads />} />
                            <Route path="/calendar" element={<SchoolCalendar />} />
                            <Route path="/conduct" element={<ParentConduct />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
                <Suspense fallback={null}>
                    <Chatbot />
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
