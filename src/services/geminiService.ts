import { GoogleGenAI } from '@google/genai';

export interface GeminiResponse {
  text: string;
  error?: string;
}

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('VITE_GEMINI_API_KEY environment variable is required');
    }
    this.ai = new GoogleGenAI({
      apiKey: apiKey,
    });
  }

  async generateResponse(prompt: string): Promise<GeminiResponse> {
    try {
      const websiteContext = `You are Sam's AI Assistant, representing Sambit Mallick's portfolio website. Use this comprehensive information to answer questions about him:

PERSONAL INFORMATION:
- Name: Sambit Mallick
- Location: Kolkata, India
- Email: sambitmallick.soccer@gmail.com
- Phone: +91 9088153107
- LinkedIn: https://linkedin.com/in/sambit-mallick
- GitHub: https://github.com/sambit-mallick

EDUCATION:
- B.Tech in Electronics & Communication Engineering
- Heritage Institute of Technology, Kolkata (2021-2025)
- CGPA: 9.71/10.0
- Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, Data Structures, Algorithms

CURRENT ROLES:
- GenAI/Data Science Trainee at SOMNETICS (Present)
- AI/ML Research Intern at ISRO (Indian Space Research Organisation)
- Freelance AI/ML Developer

TECHNICAL SKILLS:
Programming Languages: Python, C++, JavaScript, Java, SQL
AI/ML Frameworks: TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face
Computer Vision: OpenCV, YOLO, MediaPipe, PIL
GenAI & LLMs: GPT APIs, Langchain, RAG, Vector Databases, Fine-tuning
Web Technologies: React, Next.js, Node.js, Express, HTML, CSS
Databases: MongoDB, PostgreSQL, MySQL, Pinecone, ChromaDB
Cloud & DevOps: AWS, Google Cloud, Docker, Kubernetes, Git
Specialized Tools: MATLAB, Simulink, Arduino, Raspberry Pi

MAJOR PROJECTS:

1. SHAKTI Algorithm (ISRO Project):
   - Lunar crater and boulder detection system
   - Achieved 90%+ accuracy in crater detection
   - Won All India 2nd place at ISRO BHARTIYA ANTARIKSH HACKATHON 2024
   - Presidential Award recipient
   - Uses advanced computer vision and deep learning

2. Medical AI Chatbot with RAG:
   - Retrieval-Augmented Generation system for medical queries
   - Integrates with medical databases for accurate responses
   - Natural language processing for healthcare information
   - Deployed using modern web technologies

3. Skin Disease Detection Platform:
   - 93.8% accuracy in diagnosing skin conditions
   - Deep learning model for medical image analysis
   - User-friendly web interface for patient consultations
   - Real-time image processing and diagnosis

4. FashionAI - Trend Forecasting:
   - AI-powered fashion trend prediction system
   - Computer vision for style analysis
   - Machine learning models for trend forecasting
   - Market analysis and consumer behavior insights

5. Real-time Emotion Detection:
   - Live facial emotion recognition system
   - Computer vision and deep learning implementation
   - Real-time video processing capabilities
   - Multi-emotion classification with high accuracy

6. AI-Powered Portfolio Website:
   - This current interactive portfolio
   - Features AI assistant (you!) powered by Gemini AI
   - Modern React-based architecture with responsive design
   - Showcases projects, skills, and achievements

PUBLICATIONS & RESEARCH:
- 5+ publications in IEEE and Springer conferences
- Research areas: Computer Vision, Medical AI, Space Technology
- Focus on practical AI applications in healthcare and space exploration
- Active contributor to AI/ML research community

ACHIEVEMENTS & AWARDS:
- Presidential Award for All India 2nd place at ISRO Hackathon 2024
- Recognition for SHAKTI algorithm development
- Academic excellence with 9.71 CGPA
- Multiple project competitions winner
- Research publications in prestigious venues

RESEARCH INTERESTS:
- Computer Vision and Image Processing
- Medical AI and Healthcare Technology
- Space Technology and Satellite Imagery
- Generative AI and Large Language Models
- MLOps and AI System Deployment
- Quantum Computing applications in AI

EXPERIENCE HIGHLIGHTS:
- Led AI research projects at ISRO with government-level impact
- Developed production-ready AI systems with high accuracy
- Collaborated with multidisciplinary teams on complex projects
- Mentored junior developers and researchers
- Contributed to open-source AI projects

CURRENT FOCUS:
- Advanced GenAI applications and RAG systems
- MLOps and AI system scalability
- Medical AI for healthcare improvement
- Space technology and satellite image analysis
- Building AI-powered products and platforms

NAVIGATION INSTRUCTIONS:
When users ask to see, view, navigate to, or learn more about specific sections, include the appropriate navigation command:
- For questions about background, education, skills, biography: Include "NAVIGATE_TO_ABOUT"
- For questions about work experience, jobs, ISRO, current roles: Include "NAVIGATE_TO_EXPERIENCE" 
- For questions about projects, SHAKTI, medical AI, specific implementations: Include "NAVIGATE_TO_PROJECTS"
- For questions about research papers, publications, academic work: Include "NAVIGATE_TO_PUBLICATIONS"
- For questions about achievements, awards, recognition, Presidential award: Include "NAVIGATE_TO_AWARDS"
- For questions about contact information, collaboration, email: Include "NAVIGATE_TO_CONTACT"

Answer questions about Sambit's background, experience, projects, skills, achievements, education, research, or any other aspect of his professional profile. Be informative, engaging, and helpful. Include navigation commands when appropriate.`;

      const config = {
        responseMimeType: 'text/plain',
      };
      const model = 'gemini-2.0-flash-exp';
      const contents = [
        {
          role: 'user',
          parts: [
            {
              text: `${websiteContext}\n\nUser Question: ${prompt}`,
            },
          ],
        },
      ];

      const response = await this.ai.models.generateContentStream({
        model,
        config,
        contents,
      });

      let fullText = '';
      for await (const chunk of response) {
        fullText += chunk.text;
      }

      return { text: fullText };
    } catch (error) {
      console.error('Gemini API error:', error);
      return {
        text: getFallbackResponse(prompt),
        error: 'Failed to get AI response, using fallback'
      };
    }
  }
}

// Enhanced fallback responses with full context
export const getFallbackResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! I'm Sam's AI assistant. I can help you learn about Sambit Mallick's work in AI/ML, his projects at ISRO, publications, achievements, and much more. What would you like to know?";
  }
  
  if (message.includes('experience') || message.includes('work') || message.includes('job')) {
    return `Sambit has impressive experience in AI/ML:

🚀 **Current Roles:**
• GenAI/Data Science Trainee at SOMNETICS
• AI/ML Research Intern at ISRO
• Freelance AI/ML Developer

🔬 **Key Achievements:**
• Developed SHAKTI algorithm for lunar crater detection (90%+ accuracy)
• Presidential Award recipient (All India 2nd at ISRO Hackathon)
• 5+ publications in IEEE and Springer
• 9.71 CGPA from Heritage Institute of Technology

Would you like to know more about any specific role or project?`;
  }
  
  if (message.includes('project') || message.includes('shakti') || message.includes('medical') || message.includes('skin')) {
    return `Sambit has worked on several innovative projects:

🌙 **SHAKTI Algorithm (ISRO):** Lunar crater detection with 90%+ accuracy - Presidential Award winner
🏥 **Medical AI Chatbot:** RAG-based system for medical queries with database integration
🩺 **Skin Disease Detection:** 93.8% accuracy diagnostic platform for healthcare
🎨 **FashionAI:** AI-powered fashion trend forecasting system
😊 **Emotion Detection:** Real-time facial emotion recognition system
💼 **AI Portfolio:** This interactive website with AI assistant capabilities

Which project interests you most?`;
  }
  
  if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
    return `Sambit's comprehensive technical skills include:

💻 **Programming:** Python, C++, JavaScript, Java, SQL
🤖 **AI/ML:** TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face
👁️ **Computer Vision:** OpenCV, YOLO, MediaPipe, PIL
🧠 **GenAI:** GPT APIs, Langchain, RAG, Vector Databases, Fine-tuning
🌐 **Web Dev:** React, Next.js, Node.js, Express
☁️ **Cloud & DevOps:** AWS, Google Cloud, Docker, Kubernetes
🗄️ **Databases:** MongoDB, PostgreSQL, MySQL, Pinecone, ChromaDB

What specific technology area interests you?`;
  }
  
  if (message.includes('award') || message.includes('recognition') || message.includes('president')) {
    return `🏆 **Presidential Award Winner!**

Sambit received the prestigious All India 2nd place at ISRO's BHARTIYA ANTARIKSH HACKATHON 2024, awarded by the President of India. This was for his groundbreaking SHAKTI algorithm that detects lunar craters and boulders with over 90% accuracy.

**Other Achievements:**
• 5+ research publications in IEEE and Springer
• Academic excellence with 9.71 CGPA
• Multiple project competition wins
• Recognition in AI/ML research community`;
  }
  
  if (message.includes('education') || message.includes('study') || message.includes('college')) {
    return `🎓 **Education Background:**

**B.Tech in Electronics & Communication Engineering**
• Heritage Institute of Technology, Kolkata (2021-2025)
• CGPA: 9.71/10.0 (Outstanding Academic Performance)

**Relevant Coursework:**
• Machine Learning & Deep Learning
• Computer Vision & Image Processing
• Data Structures & Algorithms
• Signal Processing & Communications

**Research Focus:** AI/ML applications in healthcare, space technology, and computer vision.`;
  }
  
  if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
    return `📞 **Get in Touch with Sambit:**

📧 **Email:** sambitmallick.soccer@gmail.com
📱 **Phone:** +91 9088153107
🌍 **Location:** Kolkata, India
💼 **LinkedIn:** https://linkedin.com/in/sambit-mallick
💻 **GitHub:** https://github.com/sambit-mallick

Feel free to reach out for collaboration opportunities, research discussions, or project inquiries!`;
  }
  
  if (message.includes('research') || message.includes('publication') || message.includes('paper')) {
    return `📚 **Research & Publications:**

Sambit has 5+ publications in prestigious venues including IEEE and Springer conferences.

**Research Areas:**
• Computer Vision & Image Processing
• Medical AI & Healthcare Technology
• Space Technology & Satellite Imagery
• Generative AI & Large Language Models
• MLOps & AI System Deployment

**Current Research Focus:** Advanced GenAI applications, RAG systems, and practical AI implementations for real-world problems.

Would you like to know about specific research projects?`;
  }
  
  return `I can help you learn about Sambit Mallick's:

🔬 **Professional Experience** - ISRO, SOMNETICS, freelance work
🚀 **Projects** - SHAKTI algorithm, Medical AI, Skin Disease Detection
🏆 **Achievements** - Presidential Award, publications, academic excellence
💻 **Technical Skills** - AI/ML, Computer Vision, GenAI, Web Development
🎓 **Education** - B.Tech ECE, 9.71 CGPA, research background
📞 **Contact Information** - Email, phone, LinkedIn, GitHub

What specific aspect would you like to explore?`;
};