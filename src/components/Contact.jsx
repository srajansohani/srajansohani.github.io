import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import * as Icons from 'lucide-react';
import portfolioData from '../data/portfolio.json';

function Contact() {
  const { personalInfo, socials } = portfolioData;
  const [formData, setFormData] = React.useState({
    name: '',
    message: ''
  });

  const getIcon = (iconName) => {
      const Icon = Icons[iconName] || Icons.HelpCircle;
      return <Icon size={20} />;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message } = formData;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hello Srajan,\n\n${message}\n\nBest regards,\n${name}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-[#d4af37] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">Feel free to reach out for collaborations or just a friendly hello</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Contact Info (Left Sidebar) */}
          <div className="lg:col-span-2 bg-[#d4af37] p-10 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Decorative BG pattern */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Let's Connect</h3>
                <p className="text-[#f6f0dd] mb-10 leading-relaxed text-sm">
                    I'm currently looking for new opportunities in Software Engineering roles. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                            <Mail size={18} className="text-white" />
                        </div>
                        <span className="font-medium text-[#f6f0dd] tracking-wide">{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                            <MapPin size={18} className="text-white" />
                        </div>
                        <span className="font-medium text-[#f6f0dd] tracking-wide">{personalInfo.location}</span>
                    </div>
                </div>
            </div>

            <div className="mt-16 relative z-10">
                <h4 className="font-semibold mb-4 text-[#f6f0dd]">Follow my journey</h4>
                <div className="flex space-x-3">
                    {socials.map((social, index) => (
                         <a 
                            key={index} 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-black/10 rounded-full hover:bg-white hover:text-[#d4af37] transition-all duration-300 hover:-translate-y-1"
                            title={social.platform}
                         >
                            {getIcon(social.icon)}
                         </a>
                    ))}
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-10 lg:p-12">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Send me a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                  <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition font-medium text-gray-900" 
                        placeholder="John Doe" 
                      />
                  </div>
              </div>
              <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition font-medium text-gray-900 resize-none" 
                    placeholder="How can I help you?"
                  ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#0f172a] text-white font-bold rounded-xl hover:bg-[#1e293b] transition duration-300 flex items-center justify-center space-x-2 group"
              >
                  <span>Send via Gmail</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
