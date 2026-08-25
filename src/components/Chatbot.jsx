import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            text: "Namaste & Welcome to D.R.P. Convent Public School! 🙏 I am your virtual campus assistant. How can I assist you today?",
            sender: 'bot',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
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

    // Comprehensive School Knowledge Base (strictly up to Class X)
    const qaDatabase = [
        {
            keywords: ['standard', 'class', 'grade', 'level', 'upto', '10th', 'x', 'senior', '12th', 'stream', 'classes'],
            answer: "🏫 **Academic Standard:** D.R.P. Convent Public School is recognized and affiliated to **C.B.S.E., New Delhi up to Class X (Secondary Level)**.\n\nWe offer education across 4 stages:\n• **Foundational:** Pre-Nursery, Nursery, K.G.\n• **Preparatory:** Classes I to V\n• **Middle Stage:** Classes VI to VIII\n• **Secondary Stage:** Classes IX and X (CBSE Board Preparation)"
        },
        {
            keywords: ['admission', 'apply', 'register', 'seat', 'enroll', 'form', 'entrance', 'admit'],
            answer: "📝 **Admissions for Session 2026-27 are currently OPEN** for Pre-Nursery through Class X!\n\n• You can apply online via our **Admissions** page.\n• Collect prospectus from the school reception (Mon-Sat, 8:00 AM – 2:30 PM).\n• Helpline: **+91 9312558500** / **+91 8287710710**"
        },
        {
            keywords: ['fee', 'fees', 'cost', 'charge', 'quarterly', 'tuition'],
            answer: "💳 **Fee Structure:** Our fee structure is competitive and structured quarterly. It covers tuition, smart classes, lab maintenance, and co-curricular sports. For exact grade-wise breakdown, please visit the **Admissions Desk** or call **+91 9312558500**."
        },
        {
            keywords: ['timing', 'time', 'hours', 'open', 'schedule', 'office'],
            answer: "⏰ **School & Office Timings:**\n• **Student Hours:** 8:00 AM to 2:00 PM (Mon–Sat)\n• **Administrative Office:** 8:00 AM to 2:30 PM (Mon–Sat)\n• *Closed on Sundays and Gazetted Holidays.*"
        },
        {
            keywords: ['location', 'address', 'where', 'map', 'reach', 'situated', 'place', 'landmark'],
            answer: "📍 **Campus Location:**\nNear Shiv Vihar Tiraha & Gokalpuri, Main Road, Gokalpuri, Delhi-110094.\n\nNearest Landmark: Shiv Vihar Tiraha / Gokalpuri Main Road. Check our interactive map on the **Contact** page."
        },
        {
            keywords: ['contact', 'phone', 'mobile', 'call', 'number', 'email', 'helpline'],
            answer: "📞 **Contact Credentials:**\n• **Admissions Helpline:** +91 9312558500 / +91 8287710710\n• **Official Email:** drpconventschool@gmail.com\n• **WhatsApp Support:** Available via our quick action side dock."
        },
        {
            keywords: ['cbse', 'affiliation', 'board', 'code', 'affiliated'],
            answer: "🏛️ **CBSE Affiliation:**\nD.R.P. Convent Public School is proudly affiliated to the **Central Board of Secondary Education (CBSE), New Delhi** (Affiliation No: **2131027**) up to Secondary Level (Class X)."
        },
        {
            keywords: ['document', 'requirement', 'birth', 'tc', 'aadhaar', 'eligibility', 'age'],
            answer: "📑 **Mandatory Admission Documents:**\n1. Municipal Birth Certificate\n2. Transfer Certificate (TC) for Class II upwards\n3. Previous Class Report Card / Marksheet\n4. Student & Parent Aadhaar Copies\n5. 4 Passport-size photographs"
        },
        {
            keywords: ['facility', 'facilities', 'lab', 'smart', 'computer', 'infrastructure', 'cctv', 'safety'],
            answer: "✨ **Campus Facilities:**\n• Interactive Smart Digital Classrooms\n• Science Wet Labs & Computer AI Lab\n• Music, Guitar & Performing Arts Studio\n• Badminton Court, Athletics & Yoga Arena\n• 24/7 CCTV Security & Safe Campus"
        },
        {
            keywords: ['result', 'marksheet', 'roll', 'score', 'portal', 'exam'],
            answer: "📊 **Student Result Portal:**\nYou can check terminal and annual examination results online in the **Results** section using your Roll Number, Admission Number, and Class."
        },
        {
            keywords: ['sport', 'sports', 'game', 'games', 'yoga', 'activity', 'activities', 'dance', 'music'],
            answer: "🏆 **Sports & Co-Curricular:**\nWe nurture well-rounded personalities through inter-house tournaments in **Badminton, Chess, Carrom, Track Athletics, Daily Yoga, Vocal Music, and Indian Classical Dance**."
        }
    ];

    const quickChips = [
        "🎓 Classes & Standards",
        "📝 Admissions 2026-27",
        "⏰ School Timings",
        "📍 Campus Location",
        "📞 Helpline & Contact",
        "✨ Campus Facilities"
    ];

    const processUserMessage = (userText) => {
        const lower = userText.toLowerCase().trim();
        let matchedAnswer = null;

        if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('namaste')) {
            matchedAnswer = "Hello! 😊 How can I help you today? You can ask me about **Classes offered (up to X)**, **Admissions 2026-27**, **Fees**, **School Timings**, or **Location**!";
        } else if (lower.includes('thank') || lower.includes('thanks')) {
            matchedAnswer = "You're most welcome! 🌟 Feel free to ask anything else or visit our campus for a personalized tour.";
        } else {
            for (const item of qaDatabase) {
                const isMatch = item.keywords.some(kw => lower.includes(kw));
                if (isMatch) {
                    matchedAnswer = item.answer;
                    break;
                }
            }
        }

        if (!matchedAnswer) {
            matchedAnswer = "I would be happy to connect you with our administrative desk for detailed information! 📞 You can call us directly at **+91 9312558500** / **+91 8287710710** or email **drpconventschool@gmail.com**.";
        }

        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [
                ...prev,
                {
                    text: matchedAnswer,
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
            ]);
        }, 600);
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
                        padding: '0.75rem 1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        boxShadow: '0 8px 25px rgba(0, 27, 58, 0.4)',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        fontSize: '0.9rem',
                        fontWeight: '700'
                    }}
                >
                    <span style={{ fontSize: '1.25rem' }}>💬</span>
                    <span style={{ fontFamily: 'var(--font-family-base)' }}>Ask Assistant</span>
                    <span className="live-indicator-dot" style={{ width: '8px', height: '8px', background: '#22C55E', borderRadius: '50%', boxShadow: '0 0 6px #22C55E' }}></span>
                </button>
            )}

            {/* Chatbot Window */}
            {isOpen && (
                <div
                    className="chatbot-window-card"
                    style={{
                        width: '380px',
                        maxWidth: '92vw',
                        height: '540px',
                        maxHeight: '82vh',
                        background: '#ffffff',
                        borderRadius: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(0, 16, 38, 0.35)',
                        border: '2px solid rgba(218, 165, 32, 0.4)',
                        animation: 'chatSlideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: '1rem 1.2rem',
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
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '50%',
                                    background: 'rgba(218, 165, 32, 0.2)',
                                    border: '1px solid #DAA520',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem'
                                }}
                            >
                                🏛️
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '800', fontFamily: 'var(--font-family-heading)', color: '#ffffff', letterSpacing: '0.02em' }}>
                                    D.R.P. School Assistant
                                </h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '2px' }}>
                                    <span style={{ width: '7px', height: '7px', background: '#22C55E', borderRadius: '50%', boxShadow: '0 0 6px #22C55E' }}></span>
                                    <span style={{ fontSize: '0.72rem', color: '#DAA520', fontWeight: '700' }}>Affiliated to CBSE (Upto Class X)</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close Chat"
                            style={{
                                background: 'rgba(255, 255, 255, 0.12)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                color: '#ffffff',
                                cursor: 'pointer',
                                fontSize: '1rem',
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

                    {/* Messages Area */}
                    <div
                        style={{
                            flex: 1,
                            padding: '1.2rem',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.9rem',
                            background: '#F8FAFC'
                        }}
                    >
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                style={{
                                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                                }}
                            >
                                <div
                                    style={{
                                        padding: '0.75rem 1rem',
                                        borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                                        background: msg.sender === 'user' ? 'linear-gradient(135deg, #0B2545 0%, #134074 100%)' : '#ffffff',
                                        color: msg.sender === 'user' ? '#ffffff' : '#1E293B',
                                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
                                        border: msg.sender === 'user' ? '1px solid #DAA520' : '1px solid #E2E8F0',
                                        fontSize: '0.86rem',
                                        lineHeight: '1.5',
                                        whiteSpace: 'pre-wrap'
                                    }}
                                >
                                    {msg.text}
                                </div>
                                <span style={{ fontSize: '0.65rem', color: '#94A3B8', marginTop: '3px', padding: '0 4px' }}>
                                    {msg.time}
                                </span>
                            </div>
                        ))}

                        {isTyping && (
                            <div style={{ alignSelf: 'flex-start', background: '#ffffff', padding: '0.6rem 0.9rem', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ width: '6px', height: '6px', background: '#DAA520', borderRadius: '50%', animation: 'typingDot 1.2s infinite' }}></span>
                                <span style={{ width: '6px', height: '6px', background: '#0B2545', borderRadius: '50%', animation: 'typingDot 1.2s infinite 0.2s' }}></span>
                                <span style={{ width: '6px', height: '6px', background: '#DAA520', borderRadius: '50%', animation: 'typingDot 1.2s infinite 0.4s' }}></span>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Suggestion Chips */}
                    <div
                        style={{
                            padding: '0.5rem 0.8rem',
                            background: '#FFFFFF',
                            borderTop: '1px solid #F1F5F9',
                            display: 'flex',
                            gap: '0.4rem',
                            overflowX: 'auto',
                            scrollbarWidth: 'none'
                        }}
                    >
                        {quickChips.map((chip, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleQuickChipClick(chip)}
                                style={{
                                    background: '#F1F5F9',
                                    border: '1px solid #CBD5E1',
                                    borderRadius: '999px',
                                    padding: '0.3rem 0.7rem',
                                    fontSize: '0.74rem',
                                    fontWeight: '700',
                                    color: '#0B2545',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = '#0B2545';
                                    e.currentTarget.style.color = '#DAA520';
                                    e.currentTarget.style.borderColor = '#DAA520';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = '#F1F5F9';
                                    e.currentTarget.style.color = '#0B2545';
                                    e.currentTarget.style.borderColor = '#CBD5E1';
                                }}
                            >
                                {chip}
                            </button>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div
                        style={{
                            padding: '0.8rem 1rem',
                            background: '#ffffff',
                            borderTop: '1px solid #E2E8F0',
                            display: 'flex',
                            gap: '0.6rem',
                            alignItems: 'center'
                        }}
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about admissions, standards, fees..."
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
                                e.target.style.boxShadow = '0 0 0 3px rgba(11, 37, 69, 0.1)';
                                e.target.style.background = '#ffffff';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#CBD5E1';
                                e.target.style.boxShadow = 'none';
                                e.target.style.background = '#F8FAFC';
                            }}
                        />
                        <button
                            onClick={handleSend}
                            aria-label="Send Message"
                            style={{
                                background: 'linear-gradient(135deg, #0B2545 0%, #134074 100%)',
                                color: '#DAA520',
                                border: '1px solid #DAA520',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                width: '38px',
                                height: '38px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                transition: 'all 0.2s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.08)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <i className="fa-solid fa-paper-plane" style={{ fontSize: '0.85rem' }}></i>
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes chatSlideIn {
                    from { transform: translateY(20px) scale(0.95); opacity: 0; }
                    to { transform: translateY(0) scale(1); opacity: 1; }
                }
                @keyframes typingDot {
                    0%, 100% { transform: translateY(0); opacity: 0.4; }
                    50% { transform: translateY(-4px); opacity: 1; }
                }
                .chatbot-launcher-btn:hover {
                    transform: translateY(-3px) scale(1.03);
                    border-color: #ffffff !important;
                    box-shadow: 0 12px 30px rgba(218, 165, 32, 0.4) !important;
                }
            `}</style>
        </div>
    );
};

export default Chatbot;
