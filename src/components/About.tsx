
import { Brain, Award, Users, Rocket } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Brain, number: '5+', label: 'AI Research Projects' },
    { icon: Award, number: '6+', label: 'Publications' },
    { icon: Users, number: '3+', label: 'Research Internships' },
    { icon: Rocket, number: 'ISRO', label: 'Space Research' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate AI/ML researcher and engineer pursuing B.Tech in Electronics and Communication Engineering 
              at Heritage Institute of Technology with a GPA of 9.67. My expertise spans across Computer Vision, 
              Deep Learning, and Generative AI.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently working as a GenAI/Data Science Trainee at Somnetics, I have developed cutting-edge solutions 
              for document parsing, AI agents, and RAG systems. My work at ISRO led to the development of the SHAKTI 
              algorithm for lunar crater detection, earning recognition from the President of India.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With 6+ publications in top-tier conferences and journals, I am committed to advancing AI research 
              and creating impactful solutions that bridge the gap between research and real-world applications.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'C++'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">AI/ML</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Computer Vision', 'Deep Learning', 'NLP', 'Transfer Learning', 'OpenCV'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">GenAI Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['LangChain', 'CrewAI', 'RAG', 'AutoGen', 'PhiData'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Research Impact Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-12 backdrop-blur-sm border border-gray-700 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
            </div>
            
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Research Impact Content */}
                <div>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Impact</span>
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-2xl border border-cyan-400/20">
                      <div className="text-4xl font-bold text-cyan-400 mb-2">6+</div>
                      <div className="text-gray-300 font-semibold">Publications</div>
                      <div className="text-gray-400 text-sm mt-1">IEEE & Springer</div>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl border border-purple-400/20">
                      <div className="text-4xl font-bold text-purple-400 mb-2">90%+</div>
                      <div className="text-gray-300 font-semibold">SHAKTI Accuracy</div>
                      <div className="text-gray-400 text-sm mt-1">ISRO Algorithm</div>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-400/20">
                      <div className="text-4xl font-bold text-blue-400 mb-2">🏆</div>
                      <div className="text-gray-300 font-semibold">Presidential Award</div>
                      <div className="text-gray-400 text-sm mt-1">All India 2nd</div>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl border border-green-400/20">
                      <div className="text-4xl font-bold text-green-400 mb-2">9.67</div>
                      <div className="text-gray-300 font-semibold">Academic GPA</div>
                      <div className="text-gray-400 text-sm mt-1">Heritage Institute</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    My research spans quantum computing, computer vision, and medical AI, with applications 
                    ranging from space exploration to healthcare diagnostics. Each project bridges theoretical 
                    innovation with practical impact.
                  </p>
                </div>
                
                {/* Image Placeholder */}
                <div className="relative">
                  <div className="relative group">
                    {/* Placeholder for Sambit's image */}
                    <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl border-2 border-dashed border-gray-600 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white text-3xl font-bold">SM</span>
                        </div>
                        <p className="text-gray-400 text-lg">Sambit's Photo</p>
                        <p className="text-gray-500 text-sm mt-2">Upload image here</p>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-300 delay-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
