import { MapPin, Calendar, ExternalLink, Building2, Rocket, GraduationCap, Briefcase } from 'lucide-react';
import { useState } from 'react';

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: 'GenAI/Data Science Trainee',
      company: 'SOMNETICS - SOM IMAGING INFORMATICS PVT LTD',
      location: 'Kolkata, India',
      period: 'Feb 2024 - Present',
      description: [
        'Working on Document parsing and understanding. Created AI Agents for Invoice Data extraction, Resume Shortlisting etc using LangGraph, LangChain, CrewAI, RAG etc.',
        'Worked on 5+ AI Agent RAG usecases utilising various LLMs and Agentic AI Systems.'
      ],
      technologies: ['LangChain', 'CrewAI', 'RAG', 'LangGraph', 'AI Agents'],
      logo: Building2,
      logoColor: 'from-blue-500 to-cyan-500',
      companyUrl: 'https://somneticstech.com/'
    },
    {
      title: 'AI Intern',
      company: 'Space Application Center - ISRO',
      location: 'Ahmedabad, India',
      period: 'Oct 2024 - Nov 2024',
      description: [
        'Working under the mentorship of ISRO scientists Dr.Aditya Dagar, Dr.Phani Rajasekhar and Dr.Rohit Nagori.',
        'Developed SHAKTI, an AI/ML algorithm with a detection accuracy of over 90% for automatic identification of craters and boulders in OHRC images, reducing manual annotation time by 70% and improving detection efficiency by 50%.'
      ],
      technologies: ['Computer Vision', 'Object Detection', 'Deep Learning', 'Image Segmentation'],
      logo: Rocket,
      logoColor: 'from-orange-500 to-red-500',
      companyUrl: 'https://www.sac.gov.in/Vyom/'
    },
    {
      title: 'Machine Learning Research Intern',
      company: 'Indian Institute of Technology Kharagpur',
      location: 'Remote',
      period: 'Jan 2024 - Jun 2024',
      description: [
        'Researched accident risk analysis using the Kolkata Police traffic dataset.'
      ],
      technologies: ['Machine Learning', 'Data Analysis', 'Risk Assessment'],
      logo: GraduationCap,
      logoColor: 'from-green-500 to-emerald-500',
      companyUrl: 'https://www.iitkgp.ac.in/'
    },
    {
      title: 'Generative AI Intern',
      company: 'INNOVERV GLOBAL SOLUTIONS PVT LTD.',
      location: 'Remote',
      period: 'Mar 2024 - Jun 2024',
      description: [
        'Developed an AI-based masking and demasking tool for protecting sensitive SAP data in Excel files.'
      ],
      technologies: ['Generative AI', 'Data Privacy', 'SAP', 'Excel Automation'],
      logo: Briefcase,
      logoColor: 'from-purple-500 to-pink-500',
      companyUrl: 'https://innovervglobal.com/'
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Animated Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-cyan-400 hidden md:block">
            <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Logo = exp.logo;
              const isHovered = hoveredIndex === index;
              
              return (
                <div 
                  key={index} 
                  className="relative md:ml-20"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Animated Timeline dot */}
                  <div className={`absolute -left-14 top-8 w-4 h-4 rounded-full border-4 border-slate-900 hidden md:block transition-all duration-300 ${
                    isHovered ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50' : 'bg-cyan-400'
                  }`}>
                    <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  
                  <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 transition-all duration-500 group relative overflow-hidden ${
                    isHovered ? 'border-cyan-400/70 scale-[1.02] shadow-2xl shadow-cyan-400/20' : 'hover:border-cyan-400/50'
                  }`}>
                    {/* Animated background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 transition-opacity duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    {/* Floating particles effect */}
                    {isHovered && (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                        <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-200"></div>
                        <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                      </div>
                    )}
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                        <div className="flex items-start space-x-4 flex-1">
                          {/* Company Logo */}
                          <div className={`p-3 bg-gradient-to-r ${exp.logoColor} rounded-2xl transition-all duration-300 ${
                            isHovered ? 'scale-110 rotate-3 shadow-lg' : ''
                          }`}>
                            <Logo className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                              isHovered ? 'text-cyan-400 transform translate-x-2' : 'text-white group-hover:text-cyan-400'
                            }`}>
                              {exp.title}
                            </h3>
                            <a 
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xl text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-2"
                            >
                              {exp.company}
                              <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </a>
                          </div>
                        </div>
                        
                        <div className="text-right mt-4 md:mt-0">
                          <div className={`flex items-center text-gray-400 mb-1 transition-all duration-300 ${
                            isHovered ? 'transform translate-x-1' : ''
                          }`}>
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                          <div className={`flex items-center text-gray-400 transition-all duration-300 ${
                            isHovered ? 'transform translate-x-1' : ''
                          }`}>
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {exp.description.map((desc, i) => (
                          <p 
                            key={i} 
                            className={`text-gray-300 leading-relaxed transition-all duration-300 delay-${i * 100} ${
                              isHovered ? 'transform translate-x-2 text-gray-200' : ''
                            }`}
                          >
                            • {desc}
                          </p>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className={`px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30 transition-all duration-300 delay-${i * 50} ${
                              isHovered ? 'scale-105 border-cyan-400/50 shadow-md' : 'hover:scale-105'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 right-10 opacity-20 animate-float">
          <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 animate-float delay-1000">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-2xl"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;
