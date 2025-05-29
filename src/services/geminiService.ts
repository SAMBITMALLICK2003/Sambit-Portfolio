
// Gemini API Service for AI features
export interface GeminiResponse {
  text: string;
  error?: string;
}

export class GeminiService {
  private apiKey: string;
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateResponse(prompt: string, context?: string): Promise<GeminiResponse> {
    try {
      const systemPrompt = `You are Sam's AI Assistant, representing Sambit Mallick, an AI/ML researcher and engineer. 

Key Information about Sambit Mallick:
- AI/ML Researcher & Engineer at ISRO and SOMNETICS
- Developed SHAKTI algorithm for lunar crater detection (90%+ accuracy)
- 6+ publications in IEEE and Springer
- Presidential Award recipient (All India 2nd at ISRO Hackathon)
- B.Tech in ECE from Heritage Institute, GPA: 9.67
- Skills: Python, C++, Computer Vision, Deep Learning, GenAI, RAG
- Projects: Medical AI Chatbot, Skin Disease Detection, FashionAI
- Location: Kolkata, India
- Email: sambitmallick.soccer@gmail.com

${context ? `Additional context: ${context}` : ''}

Respond as Sam's knowledgeable AI assistant. Be helpful, informative, and engaging. If asked about topics outside of Sambit's expertise, redirect to his relevant work or suggest contacting him directly.`;

      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${systemPrompt}\n\nUser Question: ${prompt}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return {
          text: data.candidates[0].content.parts[0].text
        };
      } else {
        throw new Error('Invalid response format from Gemini API');
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      return {
        text: "I'm having trouble connecting to the AI service right now. Please try again later or contact Sambit directly at sambitmallick.soccer@gmail.com",
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

// Fallback responses when API is not available
export const getFallbackResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! I'm Sam's AI assistant. I can help you learn about Sambit Mallick's work in AI/ML, his projects at ISRO, publications, and achievements. What would you like to know?";
  }
  
  if (message.includes('experience') || message.includes('work') || message.includes('job')) {
    return `Sambit has impressive experience in AI/ML:\n\n• Currently working as GenAI/Data Science Trainee at SOMNETICS\n• AI Intern at ISRO where he developed the SHAKTI algorithm\n• Research across quantum computing, computer vision, and medical AI\n\nWould you like to know more about any specific role?`;
  }
  
  if (message.includes('project') || message.includes('shakti') || message.includes('medical') || message.includes('skin')) {
    return `Sambit has worked on several innovative projects:\n\n🔬 SHAKTI Algorithm (ISRO): Lunar crater detection with 90%+ accuracy\n🏥 Medical AI Chatbot: RAG-based system for medical queries\n🩺 Skin Disease Detection: 93.8% accuracy diagnostic platform\n🎨 FashionAI: AI-powered fashion trend forecasting\n\nWhich project interests you most?`;
  }
  
  if (message.includes('award') || message.includes('recognition') || message.includes('president')) {
    return `Sambit received the prestigious All India 2nd place at ISRO's BHARTIYA ANTARIKSH HACKATHON 2024, awarded by the President of India. This was for his SHAKTI algorithm that detects lunar craters and boulders with over 90% accuracy.`;
  }
  
  if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
    return `You can reach Sambit at:\n\n📧 Email: sambitmallick.soccer@gmail.com\n📱 Phone: +91 9088153107\n📍 Location: Kolkata, India\n\nFeel free to connect for collaboration opportunities!`;
  }
  
  return "I can help you learn about Sambit's experience, projects, publications, awards, technical skills, education, or contact information. What specific aspect would you like to know more about?";
};
