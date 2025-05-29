
import { ExternalLink, Calendar, Users } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'A Novel Approach to Breast Cancer Histopathological Image Classification Using Cross-Colour Space Feature Fusion and Quantum-Classical Stack Ensemble Method',
      authors: 'Sambit Mallick, Snigdha Paul, Dr.Anindya Sen',
      venue: 'Springer, ICADCML 2024',
      year: '2024',
      link: 'https://doi.org/10.1007/978-981-97-1841-2_2',
      description: 'Novel quantum-classical ensemble approach for breast cancer classification with enhanced accuracy.'
    },
    {
      title: 'Advanced Descriptor Techniques for Quantum Enhanced Autism Spectrum Disorder Detection',
      authors: 'Sambit Mallick, Snigdha Paul, Debdeep Mitra, Jacob Vishal, Aniket Das, Rik Das',
      venue: 'Springer ICIIOT 2024',
      year: '2024',
      link: '#',
      description: 'Quantum-enhanced techniques for autism spectrum disorder detection using advanced descriptors.'
    },
    {
      title: 'Exploring the Benefits of Ensemble Techniques involving MiDaS and MonoDepth2 Models for Monocular Depth Estimation',
      authors: 'Debdeep Mitra, Sambit Mallick, Snigdha Paul, Dr. Amlan Chakrabarti, Dola Gupta',
      venue: 'IEEE, C3IT 2024',
      year: '2024',
      link: 'https://doi.org/10.1109/C3IT60531.2024.10829443',
      description: 'Ensemble approach for improved monocular depth estimation using state-of-the-art models.'
    },
    {
      title: 'Exploring the Efficacy of Partial Denoising Using Bit Plane Slicing for Enhanced Fracture Identification',
      authors: 'Snigdha Paul, Sambit Mallick, Dr. Anindya Sen',
      venue: 'IEEE, PuneCon 2023',
      year: '2023',
      link: 'https://doi.org/10.1109/PuneCon58714.2023.10450051',
      description: 'Comparative study of deep learning and handcrafted features for fracture identification.'
    },
    {
      title: 'Comparative Study of Multiple Deep Learning Algorithms for Efficient Localization of Bone Joints in the Upper Limbs of Human Body',
      authors: 'Soumalya Bose, Soham Basu, Indranil Bera, Sambit Mallick, Snigdha Paul, Saumodip Das, Swarnendu Sil, Swarnava Ghosh, Anindya Sen',
      venue: 'Springer ICCVBIC 2022 and 108th ISCA',
      year: '2022',
      link: 'https://doi.org/10.1007/978-981-19-9819-5_46',
      description: 'Comprehensive comparison of deep learning approaches for bone joint localization.'
    }
  ];

  return (
    <section id="publications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Publications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-[1.01]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                    {pub.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-400 mb-2">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{pub.authors}</span>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{pub.venue} • {pub.year}</span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {pub.description}
                  </p>
                </div>
                
                <div className="lg:text-right">
                  {pub.link !== '#' && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform duration-200 font-semibold"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Paper
                    </a>
                  )}
                  {pub.link === '#' && (
                    <span className="inline-flex items-center px-6 py-3 bg-gray-600 text-gray-300 rounded-lg font-semibold">
                      Published
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Research Impact</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
                <div className="text-gray-400">Publications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">IEEE & Springer</div>
                <div className="text-gray-400">Top Venues</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">Cross-Domain</div>
                <div className="text-gray-400">Research Areas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
