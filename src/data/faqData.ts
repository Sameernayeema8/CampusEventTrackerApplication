import { FAQCategory, FAQItem } from '../types/Chatbot';

export const faqCategories: FAQCategory[] = [
  {
    id: 'events',
    name: 'Events & Activities',
    icon: '📅',
    questions: []
  },
  {
    id: 'facilities',
    name: 'Campus Facilities',
    icon: '🏫',
    questions: []
  },
  {
    id: 'academics',
    name: 'Academics',
    icon: '📚',
    questions: []
  },
  {
    id: 'tech',
    name: 'Tech Support',
    icon: '💻',
    questions: []
  },
  {
    id: 'clubs',
    name: 'Clubs & Organizations',
    icon: '👥',
    questions: []
  }
];

export const faqData: FAQItem[] = [
  // Events & Activities
  {
    id: 'events-1',
    question: 'What events are happening this week?',
    answer: 'This week we have several exciting events! Check out our Tech Talks on Wednesday at 3 PM in the Main Auditorium, and the Computer Science Club meeting on Friday at 4 PM in Engineering Building Room 301.',
    category: 'events',
    keywords: ['events', 'this week', 'happening', 'schedule'],
    quickReplies: ['Show all events', 'Tech events only', 'Club meetings'],
    relatedLinks: [
      { text: 'View Full Calendar', url: '#' },
      { text: 'Event Registration', url: '#' }
    ]
  },
  {
    id: 'events-2',
    question: 'How do I register for events?',
    answer: 'You can register for events through our campus portal or by clicking the registration links provided in event announcements. Some events may require advance registration while others are walk-in.',
    category: 'events',
    keywords: ['register', 'registration', 'sign up', 'events'],
    quickReplies: ['Campus portal link', 'Walk-in events', 'Registration help']
  },

  // Campus Facilities
  {
    id: 'facilities-1',
    question: 'What are the library hours?',
    answer: 'The main library is open Monday-Friday 8 AM to 10 PM, Saturday 9 AM to 8 PM, and Sunday 12 PM to 8 PM. During finals week, we extend hours to 24/7.',
    category: 'facilities',
    keywords: ['library', 'hours', 'open', 'time', 'schedule'],
    quickReplies: ['Library location', 'Study rooms', 'Computer lab hours']
  },
  {
    id: 'facilities-2',
    question: 'Where is the IT Help Desk located?',
    answer: 'The IT Help Desk is located on the ground floor of the Library. They provide technical support, software installation, and troubleshooting. You can also reach them at ithelp@university.edu or (555) 123-4567.',
    category: 'facilities',
    keywords: ['IT', 'help desk', 'location', 'tech support', 'computer help'],
    quickReplies: ['IT services', 'Contact IT', 'Software help']
  },
  {
    id: 'facilities-3',
    question: 'How do I book a study room?',
    answer: 'Study rooms can be booked through the library website or at the circulation desk. Rooms are available for 2-hour slots and can be reserved up to 7 days in advance.',
    category: 'facilities',
    keywords: ['study room', 'book', 'reserve', 'library'],
    quickReplies: ['Library website', 'Room availability', 'Booking rules']
  },

  // Academics
  {
    id: 'academics-1',
    question: 'Where can I find academic forms?',
    answer: 'Academic forms are available on the Student Services website under the Forms section. Common forms include course registration, grade appeals, and transcript requests.',
    category: 'academics',
    keywords: ['forms', 'academic', 'registration', 'transcript', 'documents'],
    quickReplies: ['Student portal', 'Transcript request', 'Grade appeal'],
    relatedLinks: [
      { text: 'Student Services Portal', url: '#' },
      { text: 'Academic Calendar', url: '#' }
    ]
  },
  {
    id: 'academics-2',
    question: 'How do I contact my academic advisor?',
    answer: 'You can find your academic advisor\'s contact information in your student portal under "My Advisor." You can also visit the Academic Advising Center in the Student Services Building.',
    category: 'academics',
    keywords: ['advisor', 'academic advisor', 'contact', 'advising'],
    quickReplies: ['Student portal', 'Advising center', 'Schedule appointment']
  },

  // Tech Support
  {
    id: 'tech-1',
    question: 'How do I connect to campus WiFi?',
    answer: 'To connect to campus WiFi, select "CampusNet" from available networks and log in with your student credentials. For guest access, use "CampusGuest" - no password required.',
    category: 'tech',
    keywords: ['wifi', 'internet', 'connection', 'network', 'campus'],
    quickReplies: ['WiFi troubleshooting', 'Guest network', 'Password reset']
  },
  {
    id: 'tech-2',
    question: 'What software is available for students?',
    answer: 'Students have access to Microsoft Office 365, Adobe Creative Suite, programming IDEs, and various academic software. Visit the IT Help Desk or software portal for installation guides.',
    category: 'tech',
    keywords: ['software', 'programs', 'office', 'adobe', 'free'],
    quickReplies: ['Software portal', 'Installation help', 'License info']
  },

  // Clubs & Organizations
  {
    id: 'clubs-1',
    question: 'How do I join the Computer Science Club?',
    answer: 'The Computer Science Club meets every Friday at 4 PM in Engineering Building Room 301. You can join by attending a meeting or emailing cs.club@university.edu. No prior experience required!',
    category: 'clubs',
    keywords: ['computer science club', 'CS club', 'join', 'programming'],
    quickReplies: ['Meeting times', 'Contact club', 'Other tech clubs'],
    relatedLinks: [
      { text: 'CS Club Website', url: '#' },
      { text: 'All Clubs Directory', url: '#' }
    ]
  },
  {
    id: 'clubs-2',
    question: 'What clubs are available for tech students?',
    answer: 'We have several tech-focused clubs: Computer Science Club, Tech Entrepreneurship Society, Robotics Club, and Cybersecurity Club. Each offers unique opportunities for learning and networking.',
    category: 'clubs',
    keywords: ['tech clubs', 'technology', 'programming', 'clubs list'],
    quickReplies: ['CS Club', 'Entrepreneurship', 'Robotics', 'Cybersecurity']
  }
];

// Chatbot responses for common greetings and fallbacks
export const defaultResponses = {
  greeting: [
    "Hi there! 👋 I'm your Campus FAQ Assistant. I can help you with information about events, facilities, academics, and more. What would you like to know?",
    "Hello! Welcome to the Campus Tech Resource Hub. I'm here to answer your questions about campus life, events, and resources. How can I help you today?",
    "Hey! I'm your AI campus assistant. Ask me anything about events, library hours, clubs, tech support, or academics!"
  ],
  fallback: [
    "I'm not sure about that specific question, but I can help you with information about campus events, facilities, academics, tech support, and clubs. What would you like to know?",
    "I don't have information about that topic yet, but I'm constantly learning! Try asking about events, library hours, clubs, or tech support.",
    "That's not something I can help with right now. I specialize in campus information like events, facilities, academics, and student resources. What else can I help you with?"
  ],
  goodbye: [
    "Thanks for chatting! Feel free to ask me anything else about campus life. Have a great day! 😊",
    "Goodbye! I'm always here if you need help with campus information. Take care!",
    "See you later! Don't hesitate to reach out if you have more questions about campus resources."
  ]
};

export const quickReplyOptions = [
  "📅 Upcoming Events",
  "📚 Library Hours", 
  "💻 Tech Support",
  "👥 Join Clubs",
  "📋 Academic Forms",
  "🏫 Campus Map"
];