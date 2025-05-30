import { Brain, Rocket, Trophy, GraduationCap } from 'lucide-react';

const ResearchImpact = () => {
  return (
    <section id="research-impact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-12 backdrop-blur-sm border border-gray-700 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-black text-white mb-6">
                Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Impact</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
                Bridging theoretical innovation with practical applications across quantum computing, 
                computer vision, and medical AI
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Research Impact Content */}
              <div>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-2xl border border-cyan-400/20 hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-black text-cyan-400 mb-2">5+</div>
                    <div className="text-gray-300 font-bold">Publications</div>
                    <div className="text-gray-400 text-sm mt-1 font-semibold">IEEE & Springer</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl border border-purple-400/20 hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-black text-purple-400 mb-2">20+</div>
                    <div className="text-gray-300 font-bold">Projects</div>
                    <div className="text-gray-400 text-sm mt-1 font-semibold">AI/ML Solutions</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-400/20 hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-black text-blue-400 mb-2">🏆</div>
                    <div className="text-gray-300 font-bold">Presidential Award</div>
                    <div className="text-gray-400 text-sm mt-1 font-semibold">All India 2nd</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl border border-green-400/20 hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-black text-green-400 mb-2">9.71</div>
                    <div className="text-gray-300 font-bold">Academic GPA</div>
                    <div className="text-gray-400 text-sm mt-1 font-semibold">Heritage Institute</div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg font-semibold">
                  My research spans quantum computing, computer vision, and medical AI, with applications 
                  ranging from space exploration to healthcare diagnostics. Each project bridges theoretical 
                  innovation with practical impact.
                </p>
              </div>
              
              {/* Enhanced Image Placeholder - THIS IS WHERE YOU SET THE IMAGE */}
              <div className="relative">
                <div className="relative group">
                  {/* Using img tag with public folder path (recommended) */}
                  <img 
                    src="/images/sambit.jpg" 
                    alt="Sambit Mallick - AI/ML Researcher" 
                    className="w-full h-96 object-cover object-top rounded-3xl border-2 border-gray-600 hover:scale-105 transition-transform duration-300"
                    style={{ transform: 'translateY(-5px)' }}
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback placeholder */}
                  <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl border-2 border-dashed border-gray-600 flex items-center justify-center backdrop-blur-sm" style={{ display: 'none', transform: 'translateY(-5px)' }}>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-3xl font-black">SM</span>
                      </div>
                      <p className="text-gray-400 text-lg font-bold">Sambit's Photo</p>
                      <p className="text-gray-500 text-sm mt-2 font-semibold">Image not found</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-300 delay-100"></div>
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div className="mt-16 grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl p-6 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                  <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-xl font-black text-white mb-2">AI/ML</div>
                  <div className="text-gray-400 text-sm font-semibold">Deep Learning & Computer Vision</div>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-6 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105">
                  <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-xl font-black text-white mb-2">Space Tech</div>
                  <div className="text-gray-400 text-sm font-semibold">ISRO Research & Development</div>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
                  <Trophy className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-xl font-black text-white mb-2">Awards</div>
                  <div className="text-gray-400 text-sm font-semibold">Presidential Recognition</div>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-6 backdrop-blur-sm border border-green-400/30 hover:border-green-400/50 transition-all duration-300 group-hover:scale-105">
                  <GraduationCap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-xl font-black text-white mb-2">Academia</div>
                  <div className="text-gray-400 text-sm font-semibold">Top Academic Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchImpact;
