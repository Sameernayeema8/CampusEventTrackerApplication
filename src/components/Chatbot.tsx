import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  ExternalLink,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { ChatMessage, ChatbotState } from '../types/Chatbot';
import { faqData, defaultResponses, quickReplyOptions } from '../data/faqData';

const Chatbot: React.FC = () => {
  const [chatState, setChatState] = useState<ChatbotState>({
    isOpen: false,
    messages: [],
    isTyping: false,
    context: ''
  });
  const [inputText, setInputText] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addMessage = (text: string, sender: 'user' | 'bot', options?: Partial<ChatMessage>) => {
    const message: ChatMessage = {
      id: generateId(),
      text,
      sender,
      timestamp: new Date(),
      ...options
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  };

  const findBestMatch = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Check for greetings
    if (/^(hi|hello|hey|good morning|good afternoon|good evening)/.test(input)) {
      return defaultResponses.greeting[Math.floor(Math.random() * defaultResponses.greeting.length)];
    }

    // Check for goodbye
    if (/^(bye|goodbye|see you|thanks|thank you)/.test(input)) {
      return defaultResponses.goodbye[Math.floor(Math.random() * defaultResponses.goodbye.length)];
    }

    // Find matching FAQ
    let bestMatch = null;
    let highestScore = 0;

    for (const faq of faqData) {
      let score = 0;
      
      // Check keywords
      for (const keyword of faq.keywords) {
        if (input.includes(keyword.toLowerCase())) {
          score += 2;
        }
      }

      // Check question similarity
      const questionWords = faq.question.toLowerCase().split(' ');
      const inputWords = input.split(' ');
      
      for (const word of inputWords) {
        if (questionWords.includes(word) && word.length > 2) {
          score += 1;
        }
      }

      if (score > highestScore && score > 0) {
        highestScore = score;
        bestMatch = faq;
      }
    }

    if (bestMatch) {
      return bestMatch.answer;
    }

    return defaultResponses.fallback[Math.floor(Math.random() * defaultResponses.fallback.length)];
  };

  const simulateTyping = (callback: () => void, delay = 1000) => {
    setChatState(prev => ({ ...prev, isTyping: true }));
    setTimeout(() => {
      setChatState(prev => ({ ...prev, isTyping: false }));
      callback();
    }, delay);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    addMessage(inputText, 'user');
    const userMessage = inputText;
    setInputText('');

    // Simulate bot response
    simulateTyping(() => {
      const response = findBestMatch(userMessage);
      addMessage(response, 'bot');
    });
  };

  const handleQuickReply = (reply: string) => {
    addMessage(reply, 'user');
    
    simulateTyping(() => {
      const response = findBestMatch(reply);
      addMessage(response, 'bot');
    });
  };

  const openChat = () => {
    setChatState(prev => ({ ...prev, isOpen: true }));
    
    // Add welcome message if no messages exist
    if (chatState.messages.length === 0) {
      setTimeout(() => {
        addMessage(
          "Hi there! 👋 I'm your Campus FAQ Assistant. I can help you with information about events, facilities, academics, and more. What would you like to know?",
          'bot',
          { quickReplies: quickReplyOptions }
        );
      }, 500);
    }
  };

  const closeChat = () => {
    setChatState(prev => ({ ...prev, isOpen: false }));
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!chatState.isOpen) {
    return (
      <button
        onClick={openChat}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50 group"
        title="Open Campus FAQ Assistant"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Ask me anything!
        </div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 bg-white rounded-lg shadow-2xl border z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-medium text-sm">Campus FAQ Assistant</h3>
            <p className="text-xs text-blue-100">Online • Ready to help</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={toggleMinimize}
            className="p-1 hover:bg-blue-500 rounded transition-colors duration-200"
            title={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={closeChat}
            className="p-1 hover:bg-blue-500 rounded transition-colors duration-200"
            title="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {chatState.messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-200'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-3 w-3 text-white" />
                    ) : (
                      <Bot className="h-3 w-3 text-gray-600" />
                    )}
                  </div>
                  <div className={`rounded-lg px-3 py-2 text-sm ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p>{message.text}</p>
                    {message.quickReplies && message.sender === 'bot' && (
                      <div className="mt-2 space-y-1">
                        {message.quickReplies.map((reply, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickReply(reply)}
                            className="block w-full text-left px-2 py-1 text-xs bg-white text-blue-600 rounded border border-blue-200 hover:bg-blue-50 transition-colors duration-200"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {chatState.isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <Bot className="h-3 w-3 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about campus events, facilities, clubs..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={chatState.isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || chatState.isTyping}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;