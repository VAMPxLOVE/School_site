import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Page Components
import Home from './components/Home';
import Login from './components/Login';
import Admin from './components/Admin';
import Notices from './components/Notices';

// Content Components
import About from './components/About';
import Founder from './components/Founder';
import Vision from './components/Vision';
import Mission from './components/Mission';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Results from './components/Results';
import Downloads from './components/Downloads';
import SchoolCalendar from './components/SchoolCalendar';
import ParentConduct from './components/ParentConduct';
import WelcomeScreen from './components/WelcomeScreen';
import Faculty from './components/Faculty';
import Chatbot from './components/Chatbot';

function App() {
    return (
        <Router>
            <WelcomeScreen />
            <div id="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navigation />
                <main id="main-content" style={{ flexGrow: 1 }}>
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
                </main>
                <Footer />
                <Chatbot />
            </div>
        </Router>
    );
}

export default App;
