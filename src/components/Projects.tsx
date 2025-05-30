import { useState } from 'react';
import { ExternalLink, Github, Eye, EyeOff } from 'lucide-react';
import LiveMeetingCopilotImage from './project-images/LiveMeetingCopilotImage';
import SkinDetectionImage from './project-images/SkinDetectionImage';
import FashionAIImage from './project-images/FashionAIImage';
import ShaktiAlgorithmImage from './project-images/ShaktiAlgorithmImage';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Live Meeting Copilot',
      description: 'A sophisticated AI meeting assistant powered by Google\'s Gemini API with wake word detection, real-time transcription, and an elegant PyQt-based user interface.',
      technologies: ['Google Gemini API', 'PyQt5', 'Speechmatics', 'RAG', 'OpenWakeWord'],
      features: [
        'Voice-activated AI assistant with wake word ("Alexa") activation and voice deactivation ("mute")',
        'Real-time meeting transcription using Speechmatics API',
        'Advanced content generation: meeting summaries, detailed minutes, and action item extraction',
        'RAG (Retrieval Augmented Generation) for document knowledge retrieval',
        'Multi-modal interaction with screen sharing and camera integration',
        'Calendar management for Microsoft Teams and Google Meet',
        'Automatic fact detection during conversations',
        'Modern PyQt5-based dark mode UI interface'
      ],
      demoLink: 'https://github.com/SAMBITMALLICK2003/AI-Meeting-Copilot-Agent',
      githubLink: 'https://github.com/SAMBITMALLICK2003/AI-Meeting-Copilot-Agent',
      ImageComponent: LiveMeetingCopilotImage
    },
    {
      title: 'Skin Disease Detection Platform',
      description: 'Developed a web-based diagnostic tool achieving 93.8% accuracy in skin disease detection, enabling early and effective treatment.',
      technologies: ['Python', 'YOLOv8', 'Flask', 'CNN', 'Llama 2'],
      features: [
        'Utilized an ensemble of CNN models and YOLOv8 to ensure high diagnostic precision and robustness.',
        'Utilised LLama 2 to create a Knowledge Hub integrated in the website.',
        'Delivered an intuitive platform, empowering both clinicians and patients to make informed decisions.',
        '93.8% accuracy in skin disease detection'
      ],
      demoLink: 'https://github.com/SAMBITMALLICK2003/SKIN-O-VIS',
      githubLink: 'https://github.com/SAMBITMALLICK2003/SKIN-O-VIS',
      ImageComponent: SkinDetectionImage
    },
    {
      title: 'FashionAI: Innovating Fashion Trends',
      description: 'Created an AI-powered solution to revolutionize fashion trend forecasting and design, bridging creativity and technology.',
      technologies: ['Stable Diffusion', 'ControlNet', 'NLP', 'Generative AI'],
      features: [
        'Integrated generative models with NLP for precise prediction of emerging fashion trends.',
        'Enabled designers to rapidly prototype concepts using automated design generation tools.',
        'Utilised multiple diffusion models to create accurate products with human feedback',
        'Automated design generation and trend forecasting'
      ],
      demoLink: 'https://github.com/SAMBITMALLICK2003/FashionAI_Innovating_Fashion_Trend',
      githubLink: 'https://github.com/SAMBITMALLICK2003/FashionAI_Innovating_Fashion_Trend',
      ImageComponent: FashionAIImage
    },
    {
      title: 'SHAKTI Algorithm (ISRO)',
      description: 'Developed an AI/ML algorithm for detecting lunar craters and boulders in Chandrayaan-2 OHRC images, achieving over 90% accuracy.',
      technologies: ['Computer Vision', 'Deep Learning', 'Object Detection', 'Image Segmentation'],
      features: [
        'Over 90% accuracy in object detection and segmentation',
        'Reduced manual annotation time by 70%',
        'Improved detection efficiency by 50%',
        'Recognized by the President of India on National Space Day'
      ],
      demoLink: null,
      githubLink: null,
      ImageComponent: ShaktiAlgorithmImage
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-[1.02] flex flex-col h-full"
            >
              {/* Custom Project Image - Fixed height for symmetry */}
              <div className="h-64 flex-shrink-0 overflow-hidden">
                <project.ImageComponent />
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-3 leading-relaxed min-h-[4.5rem]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Expandable Features - flexible height */}
                <div className="mb-4 flex-grow">
                  <button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-2"
                  >
                    {expandedProject === index ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                    {expandedProject === index ? 'Hide Details' : 'View Details'}
                  </button>
                  
                  {expandedProject === index && (
                    <div className="space-y-2 animate-fade-in">
                      {project.features.map((feature, i) => (
                        <p key={i} className="text-gray-400 text-sm">
                          • {feature}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Buttons - always at bottom */}
                <div className="flex space-x-4 mt-auto">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
