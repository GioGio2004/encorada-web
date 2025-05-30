import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  X, 
  Send, 
  Minimize2, 
  User, 
  Bot
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  quickReplies?: string[];
}

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-popup after 3 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      if (!hasShownWelcome) {
        showWelcomeMessage();
        setHasShownWelcome(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasShownWelcome]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  const showWelcomeMessage = () => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: "👋 Hi there! I'm here to help you with your Next.js and React development needs. What can I assist you with today?",
      isUser: false,
      timestamp: new Date(),
      quickReplies: [
        "How does your service work?",
        "What's the pricing?",
        "How fast can you deliver?",
        "What technologies do you support?"
      ]
    };
    setMessages([welcomeMessage]);
  };

  const getBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    let responseText = "";
    let quickReplies: string[] = [];

    // Basic keyword matching for responses based on the landing page content
    if (lowerMessage.includes("how") && (lowerMessage.includes("work") || lowerMessage.includes("process"))) {
      responseText = "Our process is simple:\n\n1️⃣ Submit your Next.js/React request\n2️⃣ Get instant quote via email\n3️⃣ Secure payment after approval\n4️⃣ We build your solution\n5️⃣ Delivery with full ownership\n\nEverything completed in 24-48 hours!";
      quickReplies = ["What's the pricing?", "What can you build?", "Start a project"];
    }
    else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("pricing")) {
      responseText = "💰 Our pricing is transparent and fair:\n\n• Custom React Components: Starting from $50\n• NPM Package Development: $100-300\n• API Integration: $75-200\n• Bug Fixes: $25-100\n• Complete Features: $150-500\n\nYou only pay after approving the quote!";
      quickReplies = ["How fast can you deliver?", "Start a project", "What's included?"];
    }
    else if (lowerMessage.includes("fast") || lowerMessage.includes("delivery") || lowerMessage.includes("time")) {
      responseText = "⚡ We're lightning fast!\n\n• Standard delivery: 24-48 hours\n• Urgent requests: Same day possible\n• Average completion: 24 hours\n\nWe've completed 500+ projects with this speed!";
      quickReplies = ["Start urgent project", "What can you build?", "See examples"];
    }
    else if (lowerMessage.includes("technology") || lowerMessage.includes("tech") || lowerMessage.includes("support")) {
      responseText = "🛠️ We specialize in:\n\n• Next.js & React\n• TypeScript\n• Custom Components\n• NPM Packages\n• API Integrations\n• Performance Optimization\n• Bug Fixes & Debugging\n\nAll with modern best practices!";
      quickReplies = ["Start a project", "How does pricing work?", "See examples"];
    }
    else if (lowerMessage.includes("start") || lowerMessage.includes("project") || lowerMessage.includes("begin")) {
      responseText = "🚀 Ready to start? Here's what you need to do:\n\n1. Fill out our quick request form\n2. Describe your requirements\n3. Get instant quote\n4. We'll handle the rest!\n\nWould you like me to guide you to the request form?";
      quickReplies = ["Yes, show me the form", "I have questions first", "What's the process?"];
    }
    else if (lowerMessage.includes("form") || lowerMessage.includes("request")) {
      responseText = "📝 You can find our request form right on this page! It's in the hero section where you can:\n\n• Select your project type\n• Describe requirements\n• Choose timeline\n• Submit for instant quote\n\nScroll up to see it or I can help you here!";
      quickReplies = ["Help me here", "What info do you need?", "Pricing questions"];
    }
    else if (lowerMessage.includes("guarantee") || lowerMessage.includes("refund")) {
      responseText = "🔒 We offer a 100% money-back guarantee!\n\n• Pay only after approving the quote\n• Full refund if not satisfied\n• Trusted by 500+ developers\n• Secure payment processing\n\nYour satisfaction is guaranteed!";
      quickReplies = ["Start a project", "How does payment work?", "See testimonials"];
    }
    else if (lowerMessage.includes("example") || lowerMessage.includes("portfolio") || lowerMessage.includes("sample")) {
      responseText = "💼 We've built amazing solutions:\n\n• Custom React components with TypeScript\n• NPM packages with full documentation\n• Complex API integrations\n• Performance optimizations\n• Bug fixes and refactoring\n\nAll projects come with GitHub repos and docs!";
      quickReplies = ["Start my project", "What's the pricing?", "How fast can you work?"];
    }
    else if (lowerMessage.includes("payment") || lowerMessage.includes("pay")) {
      responseText = "💳 Payment is secure and flexible:\n\n• Google Pay, Apple Pay, or card\n• Pay only after quote approval\n• No upfront payments required\n• Secure processing\n• Money-back guarantee\n\nYou're in full control!";
      quickReplies = ["Start a project", "What's included?", "How does delivery work?"];
    }
    else {
      responseText = "I'd be happy to help! I can assist you with:\n\n• How our service works\n• Pricing information\n• Delivery timelines\n• Technical capabilities\n• Starting a new project\n\nWhat would you like to know?";
      quickReplies = [
        "How does it work?",
        "What's the pricing?", 
        "Start a project",
        "Technical questions"
      ];
    }

    return {
      id: Date.now().toString(),
      text: responseText,
      isUser: false,
      timestamp: new Date(),
      quickReplies: quickReplies.length > 0 ? quickReplies : undefined
    };
  };

  const handleSendMessage = (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (!hasShownWelcome) {
        showWelcomeMessage();
        setHasShownWelcome(true);
      }
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-2xl transition-all duration-300 ${
          isOpen && !isMinimized
            ? "bg-gray-700 hover:bg-gray-600"
            : "bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30,
          delay: 2.5 // Appear slightly before auto-popup
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen && !isMinimized ? (
            <motion.div
              key="minimize"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Minimize2 className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="h-6 w-6 text-white" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 0 : "auto"
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Next.js Support</h3>
                  <div className="flex items-center gap-1 text-xs text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Online - Quick Response
                  </div>
                </div>
              </div>
              <button
                onClick={closeChat}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-900">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[80%] ${message.isUser ? "order-2" : "order-1"}`}>
                        <div
                          className={`px-4 py-2 rounded-2xl ${
                            message.isUser
                              ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white"
                              : "bg-gray-800 text-gray-100"
                          }`}
                        >
                          <p className="whitespace-pre-wrap text-sm leading-relaxed">
                            {message.text}
                          </p>
                        </div>
                        
                        {/* Quick Replies */}
                        {message.quickReplies && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {message.quickReplies.map((reply, index) => (
                              <button
                                key={index}
                                onClick={() => handleQuickReply(reply)}
                                className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full hover:bg-gray-600 transition-colors"
                              >
                                {reply}
                              </button>
                            ))}
                          </div>
                        )}
                        
                        <div
                          className={`text-xs text-gray-500 mt-1 ${
                            message.isUser ? "text-right" : "text-left"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                      
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.isUser ? "order-1 mr-2 bg-gray-700" : "order-2 ml-2 bg-gray-800"
                      }`}>
                        {message.isUser ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-gray-300" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-2">
                        <Bot className="h-4 w-4 text-gray-300" />
                      </div>
                      <div className="bg-gray-800 px-4 py-2 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-700 bg-gray-800">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                      placeholder="Ask about our Next.js services..."
                      className="flex-1 px-4 py-2 bg-gray-900 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim()}
                      className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all"
                    >
                      <Send className="h-4 w-4 text-white" />
                    </button>
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-2 text-center">
                    Powered by Next.js Solutions • Available 24/7
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SupportChat;