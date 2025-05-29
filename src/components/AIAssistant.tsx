
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Sambit's AI assistant. I can help you learn about his work, achievements, and research in AI/ML. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const portfolioData = {
    personal: {
      name: "Sambit Mallick",
      title: "AI/ML Researcher & Engineer",
      location: "Kolkata, India",
      email: "sambitmallick.soccer@gmail.com",
      phone: "+91 9088153107",
      education: "B.Tech in Electronics and Communication Engineering, Heritage Institute of Technology, GPA: 9.67",
      graduation: "Expected 2025"
    },
    skills: {
      languages: ["Python", "C++"],
      aiml: ["Computer Vision", "Deep Learning", "NLP", "Transfer Learning", "OpenCV", "Machine Learning", "Segmentation"],
      genai: ["LangChain", "LangFlow", "CrewAI", "PhiData", "AutoGen", "RAG", "Graph RAG"],
      mlops: ["DVC", "CI/CD Pipelines", "MLFlow"],
      tools: ["Flask", "Docker", "AWS", "Git", "Jupyter", "FastAPI", "Datastax", "Google Colab"]
    },
    experience: [
      {
        title: "GenAI/Data Science Trainee",
        company: "SOMNETICS - SOM IMAGING INFORMATICS PVT LTD",
        location: "Kolkata, India",
        period: "Feb 2024 - Present",
        description: "Working on Document parsing and understanding. Created AI Agents for Invoice Data extraction, Resume Shortlisting etc using LangGraph, LangChain, CrewAI, RAG etc."
      },
      {
        title: "AI Intern",
        company: "Space Application Center - ISRO",
        location: "Ahmedabad, India",
        period: "Oct 2024 - Nov 2024",
        description: "Developed SHAKTI algorithm with 90%+ accuracy for crater and boulder detection in OHRC images"
      }
    ],
    projects: [
      {
        name: "Medical AI Chatbot",
        description: "AI-powered chatbot for medical queries using RAG system",
        technologies: ["Langflow", "Streamlit", "Groq API", "RAG"]
      },
      {
        name: "Skin Disease Detection Platform",
        description: "Web-based diagnostic tool with 93.8% accuracy",
        technologies: ["Python", "YOLOv8", "Flask", "CNN", "Llama 2"]
      },
      {
        name: "SHAKTI Algorithm (ISRO)",
        description: "AI/ML algorithm for lunar crater detection with 90%+ accuracy",
        technologies: ["Computer Vision", "Deep Learning", "Object Detection"]
      }
    ],
    awards: [
      {
        title: "All India 2nd at ISRO - BHARTIYA ANTARIKSH HACKATHON 2024",
        description: "Awarded by the President of India for SHAKTI algorithm development",
        date: "Aug 2024"
      }
    ],
    publications: 6
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about Sambit Mallick's work and achievements. You can ask me about his projects, experience, publications, awards, or technical skills.";
    }
    
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return `Sambit has impressive experience in AI/ML:\n\n• Currently working as GenAI/Data Science Trainee at SOMNETICS, focusing on document parsing and AI agents\n• AI Intern at ISRO where he developed the SHAKTI algorithm\n• Research Intern at IIT Kharagpur\n• GenAI Intern at INNOVERV GLOBAL SOLUTIONS\n\nWould you like to know more about any specific role?`;
    }
    
    if (message.includes('project') || message.includes('shakti') || message.includes('medical') || message.includes('skin')) {
      return `Sambit has worked on several innovative projects:\n\n🔬 SHAKTI Algorithm (ISRO): Lunar crater detection with 90%+ accuracy\n🏥 Medical AI Chatbot: RAG-based system for medical queries\n🩺 Skin Disease Detection: 93.8% accuracy diagnostic platform\n🎨 FashionAI: AI-powered fashion trend forecasting\n\nWhich project interests you most?`;
    }
    
    if (message.includes('award') || message.includes('recognition') || message.includes('president')) {
      return `Sambit received the prestigious All India 2nd place at ISRO's BHARTIYA ANTARIKSH HACKATHON 2024, awarded by the Honourable President of India Smt. Droupadi Murmu on 1st National Space Day. This was for his SHAKTI algorithm that detects lunar craters and boulders with over 90% accuracy.`;
    }
    
    if (message.includes('publication') || message.includes('research') || message.includes('paper')) {
      return `Sambit has 6+ publications in top-tier venues including IEEE and Springer:\n\n• Breast Cancer Classification using Quantum-Classical Ensemble (Springer ICADCML 2024)\n• Autism Spectrum Disorder Detection (Springer ICIIOT 2024)\n• Monocular Depth Estimation (IEEE C3IT 2024)\n• Fracture Identification (IEEE PuneCon 2023)\n• Bone Joint Localization (Springer ICCVBIC 2022)\n\nHis research spans computer vision, quantum computing, and medical AI.`;
    }
    
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return `Sambit's technical expertise includes:\n\n💻 Languages: Python, C++\n🤖 AI/ML: Computer Vision, Deep Learning, NLP, Transfer Learning\n🧠 GenAI: LangChain, CrewAI, RAG, AutoGen, PhiData\n⚙️ MLOps: DVC, MLFlow, CI/CD\n🛠️ Tools: Flask, Docker, AWS, FastAPI\n\nHe specializes in Computer Vision and Generative AI applications.`;
    }
    
    if (message.includes('education') || message.includes('study') || message.includes('college')) {
      return `Sambit is pursuing B.Tech in Electronics and Communication Engineering at Heritage Institute of Technology, Kolkata with an excellent GPA of 9.67. He's expected to graduate in 2025. He also achieved 95.4% in Class 12 and 95% in Class 10 from Birla Bharati (CBSE).`;
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return `You can reach Sambit at:\n\n📧 Email: sambitmallick.soccer@gmail.com\n📱 Phone: +91 9088153107\n📍 Location: Kolkata, India\n\nHe's also available on LinkedIn and GitHub. Feel free to connect for collaboration opportunities!`;
    }
    
    if (message.includes('isro') || message.includes('space') || message.includes('nasa')) {
      return `Sambit's work with ISRO is particularly noteworthy! As an AI Intern at Space Application Center - ISRO, he developed the SHAKTI algorithm under the mentorship of ISRO scientists Dr. Aditya Dagar, Dr. Phani Rajasekhar, and Dr. Rohit Nagori. The algorithm achieves 90%+ accuracy in detecting craters and boulders in Chandrayaan-2 OHRC images, reducing manual annotation time by 70%.`;
    }
    
    return "I can help you learn about Sambit's experience, projects, publications, awards, technical skills, education, or contact information. What specific aspect would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const response = generateResponse(inputMessage);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-96 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-700 rounded-t-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
            <div className="flex items-center">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-3">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Sambit's AI Assistant</h3>
                <p className="text-xs text-gray-400">Ask me about his work & achievements</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-start max-w-[80%]">
                  {!message.isUser && (
                    <div className="p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-2 mt-1">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-slate-700/50 text-gray-100'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                  {message.isUser && (
                    <div className="p-1 bg-slate-600 rounded-full ml-2 mt-1">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start max-w-[80%]">
                  <div className="p-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-2 mt-1">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-3 rounded-lg bg-slate-700/50">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Sambit's work..."
                className="flex-1 px-3 py-2 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
