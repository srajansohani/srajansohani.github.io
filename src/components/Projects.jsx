import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <div className="bg-gray-50 rounded-lg shadow-sm p-6 border border-gray-200 hover:scale-105 transform transition duration-300 flex flex-col">
            <h3 className="text-xl font-semibold mb-3 text-blue-700 leading-tight">ONLINE-CODING-PLATFORM</h3>
            <p className="text-gray-700 mb-4 flex-grow text-base">Developed with a React frontend and a RESTful express backend, allowing users to run code, solve coding problems and participate in contests. Used JWT for authentication, RabbitMQ for communication, and Redis for polling mechanism.</p>
            <a href="#" className="text-blue-600 hover:underline font-semibold mt-auto inline-block text-base">Source Code →</a>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-sm p-6 border border-gray-200 hover:scale-105 transform transition duration-300 flex flex-col">
            <h3 className="text-xl font-semibold mb-3 text-blue-700 leading-tight">BLOG-THE-CHANGE</h3>
            <p className="text-gray-700 mb-4 flex-grow text-base">A GitHub Action that utilizes the capabilities of Gemini's LLM to produce blog summaries of the changes introduced by a commit in a repository on Hashnode. Uses Octokit for git diff and tagging automation.</p>
            <a href="#" className="text-blue-600 hover:underline font-semibold mt-auto inline-block text-base">Source Code →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
