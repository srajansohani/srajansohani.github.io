import React from 'react';

function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Skills Overview</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Technical Skills</h3>
            <div className="text-gray-700 space-y-2">
              <p><span className="font-semibold">Languages:</span> Python, Java, C++, JavaScript, TypeScript</p>
              <p><span className="font-semibold">Backend:</span> Springboot, Node.js, Express.js</p>
              <p><span className="font-semibold">Frontend:</span> React, TailwindCSS, HTML, CSS, Bootstrap, Angular</p>
              <p><span className="font-semibold">Clouds & Databases:</span> AWS, PostgreSQL, MongoDB</p>
              <p><span className="font-semibold">Web Technologies:</span> Docker, Socket.IO, Redis</p>
              <p><span className="font-semibold">Developer Tools:</span> Postman, VS Code, GitHub, Xcode</p>
            </div>
          </div>

          {/* Algorithmic Competitions/Achievements */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-6 col-span-full lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Algorithmic Competitions/Achievements</h3>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Solved 700+ DSA problems from GFG, Leetcode, Codechef, codeforces, building problem solving skills.</li>
              <li>Rated 1800+ on Leetcode</li>
              <li>HacktoberFest 22 Contributer</li>
              <li>Completed CourseWorks - Computer Networks, DBMS, Computer Architecture, Agile Methodoly, etc</li>
              <li>Selected for Indian National Maths Olympiad.Among 30 students from complete state to do so.</li>
            </ul>
          </div>
          {/* You can add more skills categories here if needed */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
