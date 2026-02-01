import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import * as Icons from 'lucide-react';
import portfolioData from '../data/portfolio.json';

function Contact() {
  const { personalInfo, socials } = portfolioData;

  // Function to dynamically look up Lucide icons
  const getIcon = (iconName) => {
      const Icon = Icons[iconName] || Icons.HelpCircle;
      return <Icon size={24} />;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">Feel free to reach out for collaborations or just a friendly hello</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="bg-blue-600 p-10 text-white flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <Mail className="text-blue-200" />
                        <span>{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MapPin className="text-blue-200" />
                        <span>{personalInfo.location}</span>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h4 className="font-semibold mb-4 text-blue-100">Connect with me</h4>
                <div className="flex space-x-4">
                    {socials.map((social, index) => (
                         <a 
                            key={index} 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-700 rounded-full hover:bg-blue-500 transition-colors"
                         >
                            {getIcon(social.icon)}
                         </a>
                    ))}
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10">
            <form className="space-y-6">
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="John Doe" />
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="john@example.com" />
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="Your message..."></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
