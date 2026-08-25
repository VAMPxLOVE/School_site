import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            text: "Namaste & Welcome to D.R.P. Convent Public School! 🙏\n\nI am your **AI Campus Counselor**. How can I help you today? You can ask me anything about admissions, class levels (up to Class X), fees, timings, results, or campus facilities.",
            sender: 'bot',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            actions: [
                { label: "📝 Admissions 2026-27", action: "admissions" },
                { label: "🏫 Classes Offered", action: "classes" },
                { label: "💳 Fee Structure", action: "fees" },
                { label: "📞 Call Helpline", action: "call" }
            ]
        }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen, isTyping]);

    // Comprehensive Knowledge Base (strictly up to Class X)
    const qaDatabase = [
        {
            keywords: ['standard', 'class', 'grade', 'level', 'upto', '10th', 'x', 'senior', '12th', 'stream', 'classes', 'nursery', 'kg', 'pre-primary'],
            answer: "🏫 **Academic Standard & Class Offerings:**\n\nD.R.P. Convent Public School is recognized and affiliated to **C.B.S.E., New Delhi up to Class X (Secondary Level)**.\n\nWe offer complete schooling across 4 progressive stages:\n• **Foundational:** Pre-Nursery, Nursery, K.G.\n• **Preparatory:** Classes I to V\n• **Middle Stage:** Classes VI to VIII\n• **Secondary Stage:** Classes IX and X (CBSE Board Exam Preparation)",
            actions: [
                { label: "Explore Curriculum Stages", link: "/academics" },
                { label: "Apply for Admission", link: "/admissions" }
            ]
        },
        {
            keywords: ['admission', 'apply', 'register', 'seat', 'enroll', 'form', 'entrance', 'admit', 'session', '2026', '2027'],
            answer: "📝 **Admissions for Session 2026-27 are currently OPEN!**\n\n• **Eligibility:** Pre-Nursery through Class X\n• **Online Registration:** Instant submission via our Admissions portal.\n• **Offline Prospectus:** Available at school reception (Mon–Sat, 8:00 AM – 2:30 PM).\n• **Direct Helpline:** +91 9312558500 / +91 8287710710",
            actions: [
                { label: "Apply Online Now", link: "/admissions" },
                { label: "📞 Call Helpline", tel: "+919312558500" }
            ]
        },
        {
            keywords: ['fee', 'fees', 'cost', 'charge', 'quarterly', 'tuition', 'payment', 'installment'],
            answer: "💳 **Fee Structure & Affordability:**\n\nOur fee structure is transparent, non-profit, and payable quarterly. It covers smart classes, wet lab maintenance, technology infrastructure, and co-curricular sports coaching.\n\nFor the exact grade-wise quarterly breakdown, please speak with our admissions desk or call **+91 9312558500**.",
            actions: [
                { label: "Admissions & Fee Desk", link: "/admissions" },
                { label: "💬 WhatsApp for Details", whatsapp: "919312558500" }
            ]
        },
        {
            keywords: ['timing', 'time', 'hours', 'open', 'schedule', 'office', 'when'],
            answer: "⏰ **School & Administrative Timings:**\n\n• **Student Class Hours:** 8:00 AM – 2:00 PM (Monday to Saturday)\n• **Administrative Office:** 8:00 AM – 2:30 PM (Monday to Saturday)\n• **Principal Interaction:** By prior appointment (10:00 AM – 1:00 PM)\n• *Closed on Sundays and Gazetted Holidays.*"
        },
        {
            keywords: ['location', 'address', 'where', 'map', 'reach', 'situated', 'place', 'landmark', 'route', 'babu nagar', 'shiv vihar', 'gokalpuri'],
            answer: "📍 **Campus Location & Address:**\n\n**D.R.P. Convent Public School**\nNear Shiv Vihar Tiraha & Gokalpuri, Main Road, Gokalpuri, Delhi-110094.\n\n• **Nearest Landmark:** Shiv Vihar Tiraha / Gokalpuri Metro Main Road.\n• Interactive GPS directions are available on our Contact page.",
            actions: [
                { label: "View on Interactive Map", link: "/contact" }
            ]
        },
        {
            keywords: ['contact', 'phone', 'mobile', 'call', 'number', 'email', 'helpline', 'principal'],
            answer: "📞 **Official Contact Credentials:**\n\n• **Primary Helpline:** +91 9312558500\n• **Secondary Helpline:** +91 8287710710\n• **Official Email:** drpconventschool@gmail.com\n• **Office Address:** Near Shiv Vihar Tiraha, Gokalpuri, Delhi-110094",
            actions: [
                { label: "📞 Call +91 9312558500", tel: "+919312558500" },
                { label: "✉️ Send an Email", email: "drpconventschool@gmail.com" }
            ]
        },
        {
            keywords: ['principal', 'indu', 'sharma', 'headmistress', 'leadership', 'desk'],
            answer: "👩‍🏫 **From the Principal's Desk:**\n\n**Mrs. Indu Sharma** (Post Graduate in Education) has been serving D.R.P. Convent Public School since 1998, leading as Principal for over two decades. Her philosophy centers on value-based holistic schooling, moral discipline, and nurturing future leaders.",
            actions: [
                { label: "Read Principal's Message", link: "/about" }
            ]
        },
        {
            keywords: ['cbse', 'affiliation', 'board', 'code', 'affiliated', 'recognized'],
            answer: "🏛️ **CBSE Board Affiliation:**\n\nD.R.P. Convent Public School is recognized and affiliated to the **Central Board of Secondary Education (CBSE), New Delhi** (Affiliation No: **2131027**) up to Secondary Level (Class X).",
            actions: [
                { label: "View About Institution", link: "/about" }
            ]
        },
        {
            keywords: ['document', 'requirement', 'birth', 'tc', 'aadhaar', 'eligibility', 'age', 'certificate'],
            answer: "📑 **Mandatory Admission Documents:**\n\n1. Municipal Birth Certificate / Age Proof\n2. Transfer Certificate (TC) from previous recognized school (Class II onwards)\n3. Previous Class Marksheet / Progress Card\n4. Aadhaar Card copies (Student & Parents)\n5. 4 Passport-size photographs"
        },
        {
            keywords: ['facility', 'facilities', 'lab', 'smart', 'computer', 'infrastructure', 'cctv', 'safety', 'security', 'classroom'],
            answer: "✨ **World-Class Campus Facilities:**\n\n• Smart Interactive Digital Classrooms\n• State-of-the-Art Science & Physics/Chemistry/Biology Labs\n• High-Tech Computer & AI Coding Lab\n• Instrumental Music & Fine Arts Studio\n• Badminton Court, Athletics Arena & Yoga Studio\n• 24/7 CCTV Security & Safe Transport",
            actions: [
                { label: "Explore Campus Facilities", link: "/academics" },
                { label: "View Photo Gallery", link: "/gallery" }
            ]
        },
        {
            keywords: ['result', 'marksheet', 'roll', 'score', 'portal', 'exam', 'topper', 'board result'],
            answer: "📊 **CBSE Board Results & Student Portal:**\n\n• **100% CBSE Class X Board Pass Rate** with multiple subject distinctions.\n• You can check individual scorecards online on our **Results** page using your Roll Number and Admission Number.",
            actions: [
                { label: "Check Online Scorecard", link: "/results" }
            ]
        },
        {
            keywords: ['calendar', 'holiday', 'event', 'vacation', 'summer', 'exam date', 'schedule', 'diwali', 'break'],
            answer: "📅 **Academic Calendar & Events:**\n\nCheck our comprehensive month-wise timeline for the 2026-27 session covering exams, cultural galas, sports tournaments, and holiday schedules.",
            actions: [
                { label: "Open School Calendar", link: "/calendar" },
                { label: "Download Circulars", link: "/downloads" }
            ]
        },
        {
            keywords: ['sport', 'sports', 'game', 'games', 'yoga', 'activity', 'activities', 'dance', 'music', 'badminton', 'chess'],
            answer: "🏆 **Sports & Co-Curricular Excellence:**\n\nStudents participate in competitive inter-house tournaments including Badminton, Track Athletics, Chess, Carrom, Classical Dance, Vocal & Keyboard Music, and daily Morning Yoga.",
            actions: [
                { label: "View Sports Album", link: "/gallery" }
            ]
        },
        {
            keywords: ['transport', 'bus', 'van', 'pickup', 'drop', 'cab', 'commute'],
            answer: "🚌 **Safe Student Transport:**\n\nSafe and monitored school vans/buses operate across North-East Delhi neighborhoods (Babu Nagar, Shiv Vihar, Gokalpuri, Mustafabad, Karawal Nagar, Yamuna Vihar). Verified drivers and staff ensure utmost child safety.",
            actions: [
                { label: "Inquire Transport Routes", link: "/contact" }
            ]
        },
        {
            keywords: ['uniform', 'dress', 'shoe', 'wear', 'costume'],
            answer: "👔 **School Uniform Guidelines:**\n\n• **Summer:** White & Navy Blue formal school uniform with school badge and black formal shoes.\n• **Winter:** Navy Blue blazer / sweater with school crest.\n• **House Activity Days:** Designated Inter-House sports T-shirts and track pants."
        },
        {
            keywords: ['founder', 'roopchand', 'yatender', 'history', 'established', '1998', 'legacy'],
            answer: "🏛️ **Our Heritage & Founders:**\n\nFounded in 1998 by **Late Sh. Roopchand Sharma (Advocate)** and championed by **Late Sh. Yatender Sharma (Ex-Chairman)**, D.R.P. Convent Public School has been delivering value-rooted quality education for 28+ glorious years.",
            actions: [
                { label: "Read Founders' Story", link: "/founder" }
            ]
        }
    ];

    const quickChips = [
        "📝 Admissions 2026-27",
        "🏫 Classes (Upto X)",
        "💳 Fee Structure",
        "⏰ School Timings",
        "📍 Campus Location",
        "📞 Helpline Number",
        "📊 Check Results",
        "✨ Campus Labs & Arts",
        "📅 Holiday Calendar",
        "🚌 Transport Coverage"
    ];

    const processUserMessage = (userText) => {
        const lower = userText.toLowerCase().trim();
        let matchedItem = null;

        if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('namaste')) {
            matchedItem = {
                answer: "Hello and Namaste! 😊 How can I help you today? You can ask me about **Classes offered (Pre-Nursery to Class X)**, **Admissions 2026-27**, **Fees**, **School Timings**, or **Location**!",
                actions: [
                    { label: "📝 Admissions 2026-27", action: "admissions" },
                    { label: "💳 Fee Structure", action: "fees" }
                ]
            };
        } else if (lower.includes('thank') || lower.includes('thanks')) {
            matchedItem = {
                answer: "You're most welcome! 🌟 Feel free to ask anything else, or visit our campus for a personal consultation and tour.",
                actions: [
                    { label: "📍 Contact Office", link: "/contact" },
                    { label: "📞 Call +91 9312558500", tel: "+919312558500" }
                ]
            };
        } else {
            // Find best matching Q&A item
            for (const item of qaDatabase) {
                const isMatch = item.keywords.some(kw => lower.includes(kw));
                if (isMatch) {
                    matchedItem = item;
                    break;
                }
            }
        }

        if (!matchedItem) {
            matchedItem = {
                answer: "I would be happy to connect you with our administrative counselor for detailed guidance! 📞\n\n• **Direct Helpline:** +91 9312558500 / +91 8287710710\n• **Official Email:** drpconventschool@gmail.com\n• **Campus Visit:** Monday to Saturday (8:00 AM – 2:30 PM)",
                actions: [
                    { label: "📞 Call Helpline", tel: "+919312558500" },
                    { label: "💬 WhatsApp Counselor", whatsapp: "919312558500" }
                ]
            };
        }

        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [
                ...prev,
                {
                    text: matchedItem.answer,
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    actions: matchedItem.actions
                }
            ]);
        }, 500);
    };

    const handleSend = () => {
        if (!input.trim()) return;
        const userMsg = {
            text: input,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMsg]);
        const currentInput = input;
        setInput('');
        processUserMessage(currentInput);
    };

    const handleQuickChipClick = (chipText) => {
        const cleanedText = chipText.replace(/^[^\w\s]+/, '').trim();
        const userMsg = {
            text: cleanedText,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMsg]);
        processUserMessage(cleanedText);
    };

    const handleResetChat = () => {
        setMessages([
            {
                text: "Chat refreshed! 🔄 How may I assist you now with D.R.P. Convent Public School admissions, academics, or facilities?",
                sender: 'bot',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                actions: [
                    { label: "📝 Admissions 2026-27", action: "admissions" },
                    { label: "🏫 Classes Offered", action: "classes" },
                    { label: "📞 Call Helpline", action: "call" }
                ]
            }
        ]);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="gurukul-chatbot-root" style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 10000 }}>
            {/* Launcher Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="chatbot-launcher-btn"
                    aria-label="Open School Virtual Assistant Chat"
                    style={{
                        background: 'linear-gradient(135deg, #0B2545 0%, #001B3A 100%)',
                        color: '#ffffff',
                        border: '2px solid #DAA520',
                        borderRadius: '999px',
                        padding: '0.8rem 1.35rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        boxShadow: '0 10px 30px rgba(0, 27, 58, 0.45), 0 0 15px rgba(218, 165, 32, 0.3)',
                        cursor: 'pointer',
                        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        fontSize: '0.92rem',
                        fontWeight: '700'
                    }}
                >
                    <span style={{ fontSize: '1.3rem' }}>💬</span>
                    <span style={{ fontFamily: 'var(--font-family-base)', letterSpacing: '0.02em' }}>School Assistant</span>
                    <span className="live-indicator-dot" style={{ width: '8px', height: '8px', background: '#22C55E', borderRadius: '50%', boxShadow: '0 0 8px #22C55E' }}></span>
                </button>
            )}

            {/* Chatbot Window */}
            {isOpen && (
                <div
                    className="chatbot-window-card"
                    style={{
                        width: '390px',
                        maxWidth: '92vw',
                        height: '560px',
                        maxHeight: '84vh',
                        background: '#ffffff',
                        borderRadius: '22px',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        boxShadow: '0 25px 60px rgba(0, 16, 38, 0.45)',
                        border: '2px solid rgba(218, 165, 32, 0.5)',
                        animation: 'chatSlideIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: '1rem 1.25rem',
                            background: 'linear-gradient(135deg, #0B2545 0%, #001B3A 100%)',
                            color: '#ffffff',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '2px solid #DAA520'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(218, 165, 32, 0.2)',
                                    border: '1.5px solid #DAA520',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    boxShadow: '0 0 10px rgba(218, 165, 32, 0.3)'
                                }}
                            >
                                🏛️
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: '800', fontFamily: 'var(--font-family-heading)', color: '#ffffff', letterSpacing: '0.02em' }}>
                                    D.R.P. School Assistant
                                </h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '2px' }}>
                                    <span style={{ width: '7px', height: '7px', background: '#22C55E', borderRadius: '50%', boxShadow: '0 0 6px #22C55E' }}></span>
                                    <span style={{ fontSize: '0.72rem', color: '#DAA520', fontWeight: '700' }}>CBSE Affiliation (Upto Class X)</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            {/* Reset Button */}
                            <button
                                onClick={handleResetChat}
                                aria-label="Refresh Conversation"
                                title="Reset Conversation"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    fontSize: '0.85rem',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                🔄
                            </button>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Close Chat"
                                title="Close Chat"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    fontSize: '0.95rem',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div
                        style={{
                            flex: 1,
                            padding: '1.2rem',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            background: '#F8FAFC'
                        }}
                    >
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                style={{
                                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '88%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                                }}
                            >
                                <div
                                    style={{
                                        padding: '0.85rem 1.1rem',
                                        borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                                        background: msg.sender === 'user' ? 'linear-gradient(135deg, #0B2545 0%, #134074 100%)' : '#ffffff',
                                        color: msg.sender === 'user' ? '#ffffff' : '#1E293B',
                                        boxShadow: '0 4px 14px rgba(11, 37, 69, 0.08)',
                                        border: msg.sender === 'user' ? '1px solid #DAA520' : '1px solid #E2E8F0',
                                        fontSize: '0.88rem',
                                        lineHeight: '1.6',
                                        whiteSpace: 'pre-wrap'
                                    }}
                                >
                                    {msg.text}

                                    {/* Action Links & Buttons */}
                                    {msg.actions && msg.actions.length > 0 && (
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.8rem', paddingTop: '0.6rem', borderTop: msg.sender === 'user' ? '1px solid rgba(255,255,255,0.2)' : '1px solid #F1F5F9' }}>
                                            {msg.actions.map((act, aIdx) => {
                                                if (act.link) {
                                                    return (
                                                        <Link
                                                            key={aIdx}
                                                            to={act.link}
                                                            onClick={() => setIsOpen(false)}
                                                            style={{
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '0.35rem',
                                                                background: '#0B2545',
                                                                color: '#ffffff',
                                                                padding: '0.4rem 0.8rem',
                                                                borderRadius: '999px',
                                                                fontSize: '0.78rem',
                                                                fontWeight: '700',
                                                                textDecoration: 'none',
                                                                border: '1px solid #DAA520'
                                                            }}
                                                        >
                                                            <span>{act.label}</span>
                                                            <i className="fa-solid fa-arrow-right-long" style={{ fontSize: '0.7rem' }}></i>
                                                        </Link>
                                                    );
                                                } else if (act.tel) {
                                                    return (
                                                        <a
                                                            key={aIdx}
                                                            href={`tel:${act.tel}`}
                                                            style={{
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '0.35rem',
                                                                background: '#16A34A',
                                                                color: '#ffffff',
                                                                padding: '0.4rem 0.8rem',
                                                                borderRadius: '999px',
                                                                fontSize: '0.78rem',
                                                                fontWeight: '700',
                                                                textDecoration: 'none'
                                                            }}
                                                        >
                                                            <span>{act.label}</span>
                                                        </a>
                                                    );
                                                } else if (act.whatsapp) {
                                                    return (
                                                        <a
                                                            key={aIdx}
                                                            href={`https://wa.me/${act.whatsapp}?text=Hello%20DRP%20Convent%20School%2C%20I%20have%20an%20inquiry.`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '0.35rem',
                                                                background: '#25D366',
                                                                color: '#ffffff',
                                                                padding: '0.4rem 0.8rem',
                                                                borderRadius: '999px',
                                                                fontSize: '0.78rem',
                                                                fontWeight: '700',
                                                                textDecoration: 'none'
                                                            }}
                                                        >
                                                            <span>{act.label}</span>
                                                        </a>
                                                    );
                                                } else if (act.action) {
                                                    return (
                                                        <button
                                                            key={aIdx}
                                                            onClick={() => handleQuickChipClick(act.label)}
                                                            style={{
                                                                background: '#F1F5F9',
                                                                color: '#0B2545',
                                                                border: '1px solid #CBD5E1',
                                                                padding: '0.35rem 0.75rem',
                                                                borderRadius: '999px',
                                                                fontSize: '0.76rem',
                                                                fontWeight: '700',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            {act.label}
                                                        </button>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                    )}
                                </div>
                                <span style={{ fontSize: '0.65rem', color: '#94A3B8', marginTop: '3px', padding: '0 4px' }}>
                                    {msg.time}
                                </span>
                            </div>
                        ))}

                        {/* Typing Animation Bubble */}
                        {isTyping && (
                            <div
                                style={{
                                    alignSelf: 'flex-start',
                                    padding: '0.75rem 1.1rem',
                                    borderRadius: '18px 18px 18px 4px',
                                    background: '#ffffff',
                                    border: '1px solid #E2E8F0',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px'
                                }}
                            >
                                <span className="typing-dot" style={{ width: '6px', height: '6px', background: '#DAA520', borderRadius: '50%', animation: 'chatDotBounce 1.2s infinite' }}></span>
                                <span className="typing-dot" style={{ width: '6px', height: '6px', background: '#0B2545', borderRadius: '50%', animation: 'chatDotBounce 1.2s infinite 0.2s' }}></span>
                                <span className="typing-dot" style={{ width: '6px', height: '6px', background: '#DAA520', borderRadius: '50%', animation: 'chatDotBounce 1.2s infinite 0.4s' }}></span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Suggestion Chips Horizontal Bar */}
                    <div
                        style={{
                            padding: '0.55rem 0.8rem',
                            background: '#F1F5F9',
                            borderTop: '1px solid #E2E8F0',
                            display: 'flex',
                            gap: '0.45rem',
                            overflowX: 'auto',
                            scrollbarWidth: 'none'
                        }}
                    >
                        {quickChips.map((chip, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleQuickChipClick(chip)}
                                style={{
                                    background: '#ffffff',
                                    border: '1px solid #CBD5E1',
                                    color: '#0B2545',
                                    padding: '0.35rem 0.75rem',
                                    borderRadius: '999px',
                                    fontSize: '0.74rem',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.2s ease',
                                    flexShrink: 0
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#DAA520';
                                    e.currentTarget.style.color = '#B8860B';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#CBD5E1';
                                    e.currentTarget.style.color = '#0B2545';
                                }}
                            >
                                {chip}
                            </button>
                        ))}
                    </div>

                    {/* Input Footer Area */}
                    <div
                        style={{
                            padding: '0.75rem 1rem',
                            background: '#ffffff',
                            borderTop: '1px solid #E2E8F0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem'
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Type your question here..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            style={{
                                flex: 1,
                                padding: '0.65rem 1rem',
                                borderRadius: '999px',
                                border: '1px solid #CBD5E1',
                                outline: 'none',
                                fontSize: '0.86rem',
                                background: '#F8FAFC',
                                color: '#1E293B',
                                transition: 'all 0.2s ease'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#0B2545';
                                e.target.style.background = '#ffffff';
                                e.target.style.boxShadow = '0 0 0 3px rgba(11, 37, 69, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#CBD5E1';
                                e.target.style.background = '#F8FAFC';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim()}
                            aria-label="Send Message"
                            style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                background: input.trim() ? 'linear-gradient(135deg, #0B2545 0%, #134074 100%)' : '#E2E8F0',
                                color: input.trim() ? '#ffffff' : '#94A3B8',
                                border: input.trim() ? '1px solid #DAA520' : 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: input.trim() ? 'pointer' : 'default',
                                transition: 'all 0.2s ease',
                                flexShrink: 0
                            }}
                        >
                            <i className="fa-solid fa-paper-plane" style={{ fontSize: '0.9rem' }}></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
