// import React, { useState, useRef, useEffect } from 'react';

// const ChatMessage = ({ text, isBot }) => (
//   <div className={`chat-message ${isBot ? 'bot' : 'user'}`}>
//     {isBot && (
//       <div className="chat-message-avatar">
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//         </svg>
//       </div>
//     )}
//     <div className="chat-message-bubble">
//       {text}
//     </div>
//   </div>
// );

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { text: "Hi, how can we help you today?", isBot: true }
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     if (isOpen) {
//       scrollToBottom();
//     }
//   }, [messages, isOpen]);

//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!inputValue.trim()) return;

//     const userText = inputValue;
//     // Add user message
//     const newMessages = [...messages, { text: userText, isBot: false }];
//     setMessages(newMessages);
//     setInputValue("");
//     setIsTyping(true);

//     try {
//       const response = await fetch('http://localhost:3001/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           message: userText,
//           history: newMessages.map(m => ({ role: m.isBot ? 'bot' : 'user', content: m.text }))
//         })
//       });

//       const data = await response.json();

//       setMessages(prev => [...prev, {
//         text: data.reply || "No response received.",
//         isBot: true
//       }]);
//     } catch (err) {
//       console.error("Chat API error:", err);
//       setMessages(prev => [...prev, {
//         text: "Sorry, I am currently unable to reach our systems.",
//         isBot: true
//       }]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <>
//       <button
//         className="chatbot-toggle"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Toggle chat window"
//       >
//         {isOpen ? (
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         ) : (
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//           </svg>
//         )}
//       </button>

//       {isOpen && (
//         <div className="chatbot-window">
//           <div className="chatbot-header">
//             <div className="chatbot-avatar">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="12" r="10" />
//                 <path d="M8 14s1.5 2 4 2 4-2 4-2" />
//                 <line x1="9" y1="9" x2="9.01" y2="9" />
//                 <line x1="15" y1="9" x2="15.01" y2="9" />
//               </svg>
//             </div>
//             <div className="chatbot-header-info">
//               <h4>Solstice Assistant</h4>
//               <span>Online</span>
//             </div>
//             <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             </button>
//           </div>

//           <div className="chatbot-messages">
//             {messages.map((msg, idx) => (
//               <ChatMessage key={idx} text={msg.text} isBot={msg.isBot} />
//             ))}
//             {isTyping && (
//               <div className="chat-message bot">
//                 <div className="chat-message-avatar">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//                   </svg>
//                 </div>
//                 <div className="chat-message-bubble typing-indicator">
//                   Agent is typing...
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           <form className="chatbot-input-area" onSubmit={handleSend}>
//             <input
//               type="text"
//               className="chatbot-input"
//               placeholder="Type your message..."
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//             />
//             <button type="submit" className="chatbot-send" aria-label="Send message">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="22" y1="2" x2="11" y2="13" />
//                 <polygon points="22 2 15 22 11 13 2 9 22 2" />
//               </svg>
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// }

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
      {!isOpen && (
        <a href="http://localhost:5174/" target="_blank" rel="noopener noreferrer" className="reference-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Customer Portal
        </a>
      )}
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