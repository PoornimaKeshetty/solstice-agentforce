import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';
const DEMO_ACCOUNT_ID = '001dM00003fy2XhQAI';

const ChatMessage = ({ text, isBot }) => (
  <div className={`chat-message ${isBot ? 'bot' : 'user'}`}>
    {isBot && (
      <div className="chat-message-avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>
    )}
    <div className="chat-message-bubble">
      {text}
    </div>
  </div>
);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm the Solstice Assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // These lines only exist while the agent is "thinking"
  const [currentStatusLines, setCurrentStatusLines] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping, currentStatusLines]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;

    // Clear everything for a fresh request
    setCurrentStatusLines([]);
    setMessages(prev => [...prev, { text: userText, isBot: false }]);
    setInputValue("");
    setIsTyping(true);

    // Show the first "live" status
    setCurrentStatusLines(["Accessing Solstice Agentic Mesh..."]);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/message`, {
        message: userText,
        session_id: 'portal-session',
        surface: 'portal',
        account_id: DEMO_ACCOUNT_ID
      });

      // We only save the TEXT message to history, NOT the status lines
      setMessages(prev => [...prev, {
        text: response.data.message || "I'm sorry, I couldn't process that.",
        isBot: true
      }]);

    } catch (err) {
      setMessages(prev => [...prev, {
        text: "I'm having trouble connecting to the system. Is the backend running?",
        isBot: true
      }]);
    } finally {
      setIsTyping(false);
      // Immediately clear the status lines so they don't stay visible
      setCurrentStatusLines([]);
    }
  };

  return (
    <>
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "💬"}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-avatar">🤖</div>
            <div className="chatbot-header-info">
              <h4>Solstice Assistant</h4>
              <span>Agentic Mesh Online</span>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <ChatMessage key={idx} text={msg.text} isBot={msg.isBot} />
            ))}

            {/* Thinking state - Only place where status lines are shown */}
            {isTyping && (
              <div className="chat-message bot opacity-80">
                <div className="chat-message-avatar">🤖</div>
                <div className="flex flex-col">
                  <div className="chat-message-bubble italic text-gray-400">
                    Thinking...
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    {currentStatusLines.map((line, i) => (
                      <span key={i} className="text-[10px] text-gray-500 italic ml-2 animate-pulse">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-area" onSubmit={handleSend}>
            <input
              className="chatbot-input"
              placeholder="Enter Your Query"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTyping}
            />
            <button type="submit" className="chatbot-send" disabled={isTyping || !inputValue.trim()}>
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
}

