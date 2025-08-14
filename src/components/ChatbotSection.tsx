import React from 'react';
import { Bot, MessageSquare, Clock, Globe, Zap, Users } from 'lucide-react';

const ChatbotSection: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: '24/7 Availability',
      description: 'Get instant answers to your questions anytime, day or night'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Instant Responses',
      description: 'No waiting in lines or office hours - get answers immediately'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Campus Knowledge',
      description: 'Comprehensive information about events, facilities, and resources'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Student-Focused',
      description: 'Designed specifically for student needs and common questions'
    }
  ];

  const sampleQuestions = [
    "What events are happening this week?",
    "What are the library hours?",
    "How do I join the Computer Science Club?",
    "Where is the IT Help Desk?",
    "How do I connect to campus WiFi?",
    "What academic forms do I need?"
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-br from-purple-50 to-blue-100 rounded-2xl">
        <div className="max-w-3xl mx-auto px-6">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Bot className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Campus Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get instant answers to your campus questions with our AI-powered chatbot. 
            Available 24/7 to help you navigate student life.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>AI Assistant is online and ready to help</span>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Use Our AI Assistant?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Questions */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Try Asking These Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleQuestions.map((question, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border hover:shadow-md transition-all duration-200 cursor-pointer group">
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  "{question}"
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Click the chat icon in the bottom right corner to start asking questions!
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
            <Bot className="h-4 w-4" />
            <span className="text-sm font-medium">AI Assistant is ready to help</span>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              1
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Ask Your Question</h3>
            <p className="text-gray-600 text-sm">
              Type your question in natural language - no special commands needed
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              2
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">AI Processing</h3>
            <p className="text-gray-600 text-sm">
              Our AI understands your question and searches our knowledge base
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              3
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Get Instant Answer</h3>
            <p className="text-gray-600 text-sm">
              Receive accurate, helpful information with relevant links and resources
            </p>
          </div>
        </div>
      </div>

      {/* Integration Info */}
      <div className="bg-white rounded-xl p-8 shadow-sm border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Powered by Google Dialogflow</h2>
          <p className="text-gray-600 mb-6">
            This chatbot demonstrates how Google's Dialogflow can be integrated into campus websites 
            to provide instant, intelligent responses to student questions. The system can be easily 
            extended to include more topics and integrated with other campus systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Natural Language Processing</h4>
              <p className="text-gray-600">Understands questions in everyday language</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Contextual Responses</h4>
              <p className="text-gray-600">Provides relevant, accurate information</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Easy Integration</h4>
              <p className="text-gray-600">Can be embedded in websites, apps, or messaging platforms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSection;