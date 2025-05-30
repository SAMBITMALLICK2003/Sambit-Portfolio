import { Trophy, Award, Star, Medal } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'All India 2nd at ISRO - BHARTIYA ANTARIKSH HACKATHON 2024',
      description: 'Awarded by the Honourable President of India Smt. Droupadi Murmu on 1st National Space Day',
      details: 'Developed the SHAKTI algorithm for detecting lunar craters and boulders in Chandrayaan-2 OHRC images, achieving over 90% accuracy in object detection and segmentation',
      date: 'Aug 2024',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintaining GPA of 9.71 in B.Tech ECE',
      icon: Star,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Research Impact',
      description: '5+ publications in IEEE & Springer',
      icon: Award,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Industry Recognition',
      description: 'Multiple prestigious internships',
      icon: Medal,
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="awards" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Major Award */}
        <div className="mb-16">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 group hover:scale-[1.02] relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/10 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className={`p-4 bg-gradient-to-r ${award.color} rounded-2xl`}>
                    <award.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {award.title}
                      </h3>
                      <span className="text-yellow-400 font-semibold mt-2 lg:mt-0">
                        {award.date}
                      </span>
                    </div>
                    
                    <p className="text-xl text-yellow-300 mb-4 font-semibold">
                      {award.description}
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {award.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105 text-center"
            >
              <div className={`inline-flex p-4 bg-gradient-to-r ${achievement.color} rounded-2xl mb-4`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {achievement.title}
              </h3>
              
              <p className="text-gray-300">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Educational Background */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Educational Background</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
              <h4 className="text-xl font-bold text-cyan-400 mb-2">B.Tech in Electronics and Communication Engineering</h4>
              <p className="text-white font-semibold mb-1">Heritage Institute of Technology, Kolkata</p>
              <p className="text-gray-400 mb-3">Expected 2025 • GPA: 9.71</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
              <h4 className="text-xl font-bold text-purple-400 mb-2">Class 12 and Class 10</h4>
              <p className="text-white font-semibold mb-1">Birla Bharati, Kolkata (CBSE)</p>
              <p className="text-gray-400 mb-3">2018 - 2021 • 95.4% in Class 12, 95% in Class 10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
