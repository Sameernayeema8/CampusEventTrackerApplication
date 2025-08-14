export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'quick_reply' | 'card';
  quickReplies?: string[];
  card?: {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    buttons?: Array<{
      text: string;
      url?: string;
      action?: string;
    }>;
  };
}

export interface ChatbotState {
  isOpen: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  context: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  icon: string;
  questions: FAQItem[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
  quickReplies?: string[];
  relatedLinks?: Array<{
    text: string;
    url: string;
  }>;
}