import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import ChatbotSection from './components/ChatbotSection';
import { 
  Home, 
  BookOpen, 
  Users, 
  Download, 
  MessageSquare, 
  Calendar,
  Code,
  Brain,
  FileText,
  ExternalLink,
  Star,
  Clock,
  MapPin,
  Mail,
  Phone,
  Globe,
  ChevronRight,
  Play,
  Award,
  Lightbulb
} from 'lucide-react';

type Section = 'home' | 'learning' | 'resources' | 'downloads' | 'feedback' | 'chatbot';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  icon: React.ReactNode;
  link?: string;
}

interface CampusResource {
  id: string;
  name: string;
  type: 'club' | 'service' | 'event';
  contact: string;
  location?: string;
  description: string;
  website?: string;
  phone?: string;
}

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  type: 'template' | 'guide' | 'resource';
  category: string;
  fileType: string;
  icon: React.ReactNode;
}

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    category: 'suggestion',
    message: ''
  });

  const techResources: Resource[] = [
    {
      id: '1',
      title: 'Google Workspace Mastery',
      description: 'Complete guide to Google Docs, Sheets, Slides, and Drive collaboration',
      category: 'Google Tools',
      difficulty: 'Beginner',
      duration: '2 hours',
      icon: <Globe className="h-6 w-6" />,
      link: '#'
    },
    {
      id: '2',
      title: 'Python Programming Basics',
      description: 'Learn Python fundamentals with hands-on projects and exercises',
      category: 'Programming',
      difficulty: 'Beginner',
      duration: '4 hours',
      icon: <Code className="h-6 w-6" />,
      link: '#'
    },
    {
      id: '3',
      title: 'AI Tools for Students',
      description: 'Discover ChatGPT, Bard, and other AI tools to enhance your studies',
      category: 'AI & Machine Learning',
      difficulty: 'Beginner',
      duration: '1.5 hours',
      icon: <Brain className="h-6 w-6" />,
      link: '#'
    },
    {
      id: '4',
      title: 'Web Development Fundamentals',
      description: 'HTML, CSS, and JavaScript basics for building your first website',
      category: 'Web Development',
      difficulty: 'Intermediate',
      duration: '6 hours',
      icon: <Globe className="h-6 w-6" />,
      link: '#'
    },
    {
      id: '5',
      title: 'Data Analysis with Google Sheets',
      description: 'Advanced formulas, pivot tables, and data visualization techniques',
      category: 'Data Science',
      difficulty: 'Intermediate',
      duration: '3 hours',
      icon: <FileText className="h-6 w-6" />,
      link: '#'
    },
    {
      id: '6',
      title: 'Digital Marketing Essentials',
      description: 'Social media, SEO, and content marketing strategies for students',
      category: 'Marketing',
      difficulty: 'Beginner',
      duration: '2.5 hours',
      icon: <Star className="h-6 w-6" />,
      link: '#'
    }
  ];

  const campusResources: CampusResource[] = [
    {
      id: '1',
      name: 'Computer Science Club',
      type: 'club',
      contact: 'cs.club@university.edu',
      location: 'Engineering Building Room 301',
      description: 'Weekly coding workshops, hackathons, and tech career guidance',
      website: 'https://csclub.university.edu'
    },
    {
      id: '2',
      name: 'IT Help Desk',
      type: 'service',
      contact: 'ithelp@university.edu',
      location: 'Library Ground Floor',
      description: 'Technical support for students, software installation, and troubleshooting',
      phone: '(555) 123-4567'
    },
    {
      id: '3',
      name: 'Career Services',
      type: 'service',
      contact: 'careers@university.edu',
      location: 'Student Services Building',
      description: 'Resume reviews, interview prep, and job placement assistance',
      website: 'https://careers.university.edu'
    },
    {
      id: '4',
      name: 'Tech Entrepreneurship Society',
      type: 'club',
      contact: 'techentrepreneurs@university.edu',
      location: 'Business Building Room 205',
      description: 'Startup workshops, pitch competitions, and networking events',
      website: 'https://techentrepreneurs.university.edu'
    },
    {
      id: '5',
      name: 'Weekly Tech Talks',
      type: 'event',
      contact: 'events@university.edu',
      location: 'Main Auditorium',
      description: 'Industry professionals share insights on latest tech trends',
      website: 'https://events.university.edu/tech-talks'
    }
  ];

  const downloadItems: DownloadItem[] = [
    {
      id: '1',
      title: 'Professional Resume Template',
      description: 'ATS-friendly resume template with tech industry focus',
      type: 'template',
      category: 'Career',
      fileType: 'Google Docs',
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: '2',
      title: 'Project Presentation Template',
      description: 'Clean, modern slides perfect for technical presentations',
      type: 'template',
      category: 'Academic',
      fileType: 'Google Slides',
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: '3',
      title: 'Study Schedule Planner',
      description: 'Organize your coursework and project deadlines effectively',
      type: 'template',
      category: 'Productivity',
      fileType: 'Google Sheets',
      icon: <Calendar className="h-6 w-6" />
    },
    {
      id: '4',
      title: 'Coding Interview Prep Guide',
      description: 'Comprehensive guide with common questions and solutions',
      type: 'guide',
      category: 'Career',
      fileType: 'PDF',
      icon: <Code className="h-6 w-6" />
    },
    {
      id: '5',
      title: 'Research Paper Template',
      description: 'Properly formatted template for academic research papers',
      type: 'template',
      category: 'Academic',
      fileType: 'Google Docs',
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: '6',
      title: 'Tech Resource Checklist',
      description: 'Essential tools and resources every tech student should know',
      type: 'resource',
      category: 'Reference',
      fileType: 'PDF',
      icon: <Lightbulb className="h-6 w-6" />
    }
  ];

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    alert('Thank you for your feedback! We\'ll review it and get back to you soon.');
    setFeedbackForm({ name: '', email: '', category: 'suggestion', message: '' });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case 'club':
        return <Users className="h-5 w-5" />;
      case 'service':
        return <Award className="h-5 w-5" />;
      case 'event':
        return <Calendar className="h-5 w-5" />;
      default:
        return <Star className="h-5 w-5" />;
    }
  };

  const renderHome = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Campus Tech Resource Hub
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your one-stop destination for tech learning, campus resources, and student success tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('learning')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Start Learning
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveSection('chatbot')}
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Try AI Assistant
              <Brain className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveSection('resources')}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Explore Resources
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{techResources.length}</h3>
          <p className="text-gray-600">Learning Resources</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Users className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{campusResources.length}</h3>
          <p className="text-gray-600">Campus Resources</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Download className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{downloadItems.length}</h3>
          <p className="text-gray-600">Downloads Available</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Star className="h-6 w-6 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">AI</h3>
          <p className="text-gray-600">Assistant Available</p>
        </div>
      </div>

      {/* Featured Resources */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techResources.slice(0, 3).map(resource => (
            <div key={resource.id} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.category}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(resource.difficulty)}`}>
                  {resource.difficulty}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {resource.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLearning = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Tech Learning Center</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our curated collection of tutorials, guides, and resources to boost your tech skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techResources.map(resource => (
          <div key={resource.id} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-all duration-200 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-200">
                {resource.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600">{resource.category}</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{resource.description}</p>
            
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(resource.difficulty)}`}>
                {resource.difficulty}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {resource.duration}
              </span>
            </div>
            
            <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Play className="h-4 w-4 mr-2" />
              Start Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderResources = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Campus Resources</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with clubs, services, and events that support your academic and professional growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campusResources.map(resource => (
          <div key={resource.id} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  {getResourceTypeIcon(resource.type)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{resource.name}</h3>
                  <span className="text-sm text-green-600 capitalize">{resource.type}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{resource.description}</p>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <a href={`mailto:${resource.contact}`} className="text-blue-600 hover:text-blue-800">
                  {resource.contact}
                </a>
              </div>
              
              {resource.location && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{resource.location}</span>
                </div>
              )}
              
              {resource.phone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-400" />
                  <a href={`tel:${resource.phone}`} className="text-blue-600 hover:text-blue-800">
                    {resource.phone}
                  </a>
                </div>
              )}
              
              {resource.website && (
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-gray-400" />
                  <a 
                    href={resource.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Visit Website
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDownloads = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Download Center</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Access templates, guides, and resources to enhance your academic and professional work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {downloadItems.map(item => (
          <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{item.description}</p>
            
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                {item.type}
              </span>
              <span className="text-sm text-gray-500">{item.fileType}</span>
            </div>
            
            <button className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200">
              <Download className="h-4 w-4 mr-2" />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFeedback = () => (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Feedback & Suggestions</h1>
        <p className="text-lg text-gray-600">
          Help us improve the Campus Tech Resource Hub with your valuable feedback
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm border">
        <form onSubmit={handleFeedbackSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={feedbackForm.name}
                onChange={(e) => setFeedbackForm(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={feedbackForm.email}
                onChange={(e) => setFeedbackForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              id="category"
              value={feedbackForm.category}
              onChange={(e) => setFeedbackForm(prev => ({ ...prev, category: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="suggestion">Suggestion</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="content">Content Request</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={feedbackForm.message}
              onChange={(e) => setFeedbackForm(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Share your thoughts, suggestions, or report any issues..."
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return renderHome();
      case 'learning':
        return renderLearning();
      case 'resources':
        return renderResources();
      case 'downloads':
        return renderDownloads();
      case 'feedback':
        return renderFeedback();
      case 'chatbot':
        return <ChatbotSection />;
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Tech Hub</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'learning', label: 'Learning', icon: BookOpen },
                { id: 'resources', label: 'Resources', icon: Users },
                { id: 'downloads', label: 'Downloads', icon: Download },
                { id: 'feedback', label: 'Feedback', icon: MessageSquare },
                { id: 'chatbot', label: 'AI Assistant', icon: Brain }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id as Section)}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeSection === id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b">
        <div className="flex overflow-x-auto px-4 py-2 space-x-1">
          {[
            { id: 'home', label: 'Home', icon: Home },
            { id: 'learning', label: 'Learning', icon: BookOpen },
            { id: 'resources', label: 'Resources', icon: Users },
            { id: 'downloads', label: 'Downloads', icon: Download },
            { id: 'feedback', label: 'Feedback', icon: MessageSquare },
            { id: 'chatbot', label: 'AI Assistant', icon: Brain }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id as Section)}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeSection === id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Icon className="h-4 w-4 mr-2" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <Chatbot />
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                <Lightbulb className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900">Campus Tech Resource Hub</span>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering students with technology resources and campus connections
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Campus Tech Resource Hub. Built with modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;