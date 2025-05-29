
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
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
      technologies: ['LangChain', 'CrewAI', 'RAG', 'LangGraph', 'AI Agents']
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
      technologies: ['Computer Vision', 'Object Detection', 'Deep Learning', 'Image Segmentation']
    },
    {
      title: 'Machine Learning Research Intern',
      company: 'Indian Institute of Technology Kharagpur',
      location: 'Remote',
      period: 'Jan 2024 - Jun 2024',
      description: [
        'Researched accident risk analysis using the Kolkata Police traffic dataset.'
      ],
      technologies: ['Machine Learning', 'Data Analysis', 'Risk Assessment']
    },
    {
      title: 'Generative AI Intern',
      company: 'INNOVERV GLOBAL SOLUTIONS PVT LTD.',
      location: 'Remote',
      period: 'Mar 2024 - Jun 2024',
      description: [
        'Developed an AI-based masking and demasking tool for protecting sensitive SAP data in Excel files.'
      ],
      technologies: ['Generative AI', 'Data Privacy', 'SAP', 'Excel Automation']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:ml-20">
                {/* Timeline dot */}
                <div className="absolute -left-14 top-8 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 hidden md:block"></div>
                
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl text-cyan-400 mb-2">{exp.company}</h4>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-400 mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {exp.description.map((desc, i) => (
                      <p key={i} className="text-gray-300 leading-relaxed">
                        • {desc}
                      </p>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
