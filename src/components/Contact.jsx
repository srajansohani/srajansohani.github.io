import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Contact</h2>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <textarea placeholder="Your Message" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
