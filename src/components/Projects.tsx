
import { useState } from 'react';
import { ExternalLink, Github, Eye, EyeOff } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Medical AI Chatbot',
      description: 'Developed an intelligent AI-powered chatbot delivering precise, real-time responses to complex medical queries, enabling better support for healthcare professionals and patients.',
      technologies: ['Langflow', 'Streamlit', 'Groq API', 'RAG'],
      features: [
        'Integrated a Retrieval-Augmented Generation (RAG) system to ensure AI agents provide accurate and context-aware medical insights.',
        'Real-time response system for complex medical queries',
        'Streamlit-based user interface for seamless interaction'
      ],
      demoLink: '#',
      githubLink: '#',
      image: 'medical-ai.jpg'
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
      demoLink: '#',
      githubLink: '#',
      image: 'skin-detection.jpg'
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
      demoLink: '#',
      githubLink: '#',
      image: 'fashion-ai.jpg'
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
      image: 'shakti-algo.jpg'
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
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-[1.02]"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-6xl text-white/20">🚀</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Expandable Features */}
                <div className="mb-4">
                  <button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {expandedProject === index ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                    {expandedProject === index ? 'Hide Details' : 'View Details'}
                  </button>
                  
                  {expandedProject === index && (
                    <div className="mt-3 space-y-2 animate-fade-in">
                      {project.features.map((feature, i) => (
                        <p key={i} className="text-gray-400 text-sm">
                          • {feature}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
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
