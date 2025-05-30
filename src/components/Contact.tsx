import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, GraduationCap } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoSubject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:sambitmallick.soccer@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Open user's default mail client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Mail App",
      description: "Your default mail application will open with the message pre-filled.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto font-semibold">
            Let's collaborate on innovative AI/ML projects or discuss research opportunities. 
            I'm always excited to work on challenging problems in Computer Vision and Generative AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-cyan-500/20 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-semibold">Email</p>
                    <a 
                      href="mailto:sambitmallick.soccer@gmail.com" 
                      className="text-white hover:text-cyan-400 transition-colors font-semibold"
                    >
                      sambitmallick.soccer@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-purple-500/20 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-semibold">Phone</p>
                    <a 
                      href="tel:+919088153107" 
                      className="text-white hover:text-purple-400 transition-colors font-semibold"
                    >
                      +91 9088153107
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-blue-500/20 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-semibold">Location</p>
                    <p className="text-white font-semibold">Kolkata, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-bold text-white mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/sambitmallick"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-blue-500/25"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://github.com/SAMBITMALLICK2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-gray-500/25"
                    title="GitHub Profile"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=B4-OBDIAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-blue-600/25"
                    title="Google Scholar"
                  >
                    <GraduationCap className="w-5 h-5 text-white" />
                  </a>
                </div>
                
                {/* Quick Contact Buttons */}
                <div className="mt-6 space-y-3">
                  <a
                    href="mailto:sambitmallick.soccer@gmail.com?subject=Collaboration%20Opportunity&body=Hi%20Sambit,%0A%0AI%20would%20like%20to%20discuss%20a%20collaboration%20opportunity%20with%20you.%0A%0ABest%20regards,"
                    className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all duration-200 font-semibold"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Quick Email
                  </a>
                  
                  <a
                    href="https://calendly.com/sambitmallick"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-all duration-200 font-semibold"
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2 font-semibold">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors font-medium"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2 font-semibold">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors font-medium"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2 font-semibold">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors font-medium"
                  placeholder="Project Collaboration / Research Discussion / Job Opportunity"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 font-semibold">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none font-medium"
                  placeholder="Tell me about your project, research opportunity, or what you'd like to collaborate on..."
                ></textarea>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-lg p-4">
                <p className="text-cyan-400 text-sm font-semibold">
                  💡 This will open your default email client with the message pre-filled
                </p>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:scale-[1.02] transition-transform duration-200 font-bold flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
              >
                <Send className="w-5 h-5 mr-2" />
                Open in Mail App
              </button>
              
              {/* Alternative Contact Methods */}
              <div className="flex space-x-3 mt-4">
                <a
                  href="mailto:sambitmallick.soccer@gmail.com"
                  className="flex-1 px-4 py-2 bg-slate-700/50 border border-gray-600 text-gray-300 rounded-lg hover:bg-slate-600/50 transition-colors text-center font-semibold"
                >
                  Direct Email
                </a>
                <a
                  href="https://wa.me/919088153107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-green-600/20 border border-green-400/30 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors text-center font-semibold"
                >
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
