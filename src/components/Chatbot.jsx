import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm the D.R.P. School Assistant. How can I help you today? 👋", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const qaDatabase = {
        "admission": "Admissions are currently open for the 2026-27 session! You can apply online via the 'Admissions' page or visit the school office between 9 AM - 2 PM.",
        "fee": "Fee details vary by class. Generally, tuition fees are paid quarterly. Please check the 'Admissions' page for the full fee structure.",
        "timing": "School timings are 8:00 AM to 2:00 PM for summer and 9:00 AM to 3:00 PM for winter.",
        "location": "We are located at Main Road, City Center. You can find us on Google Maps via the 'Contact' page.",
        "contact": "You can reach us at contact@drpconvent.edu or call +91-9876543210.",
        "syllabus": "You can download the latest syllabus from the 'Academics' -> 'Download Center' section.",
        "result": "Results can be checked online in the 'Student Zone' or 'Results' page using your Roll Number."
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simple Keyword Matching Logic
        const lowerInput = input.toLowerCase();
        let botResponse = "I'm not sure about that. Please contact the school office directly for more info! 📞";

        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            botResponse = "Hello! tailored to help you. Ask me about Admissions, Fees, or Results!";
        } else {
            for (const key in qaDatabase) {
                if (lowerInput.includes(key)) {
                    botResponse = qaDatabase[key];
                    break;
                }
            }
        }

        setTimeout(() => {
            setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
            {/* Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="btn btn-primary"
                    style={{
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                        fontSize: '1.5rem',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    💬
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="glass" style={{
                    width: '350px',
                    height: '500px',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                    animation: 'slideUp 0.3s ease-out'
                }}>
                    {/* Header */}
                    <div style={{
                        padding: '1rem',
                        background: '#003366',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '10px', height: '10px', background: '#00ff00', borderRadius: '50%' }}></div>
                            <span style={{ fontWeight: 'bold' }}>School Assistant</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>✖</button>
                    </div>

                    {/* Messages Area */}
                    <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '80%',
                                padding: '0.8rem 1rem',
                                borderRadius: '12px',
                                background: msg.sender === 'user' ? '#00509E' : 'white',
                                color: msg.sender === 'user' ? 'white' : '#333',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                borderBottomRightRadius: msg.sender === 'user' ? '2px' : '12px',
                                borderBottomLeftRadius: msg.sender === 'bot' ? '2px' : '12px'
                            }}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div style={{ padding: '1rem', borderTop: '1px solid rgba(0,0,0,0.1)', display: 'flex', gap: '0.5rem' }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about admissions, fees..."
                            style={{
                                flex: 1,
                                padding: '0.8rem',
                                borderRadius: '20px',
                                border: '1px solid #ddd',
                                outline: 'none'
                            }}
                        />
                        <button
                            onClick={handleSend}
                            style={{
                                background: '#003366',
                                color: 'white',
                                border: 'none',
                                padding: '0.8rem',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}
            <style jsx>{`
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Chatbot;
