import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">About Me</h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed mx-auto max-w-2xl text-center">I am a software developer with a passion for building scalable web applications and solving complex problems. I love working with modern technologies and continuously learning.</p>
        
        {/* Education */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Education</h3>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-4 border border-gray-200">
            <p className="font-bold text-gray-800 text-lg mb-1">Shri Govindram Seksariya Institute Of Technology and Sciences, Indore</p>
            <p className="text-gray-700 text-base mb-1">B.Tech in Computer Science & Engineering</p>
            <p className="text-gray-600 text-sm">2021 - 2025 | 8.23/10 CGPA</p>
          </div>
        </div>

        {/* Work Experience */}
        <div id="experience" className="mb-10">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Work Experience</h3>
          {/* Hyperflex */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-4 border border-gray-200">
            <p className="font-bold text-gray-800 text-lg mb-1">Hyperflex</p>
            <p className="text-gray-700 text-base mb-1">Software Engineering Intern | Jan 2025 - Present | Pune</p>
            <ul className="list-disc list-inside text-gray-700 ml-6 mt-3 space-y-1 text-base">
              <li>Built an automated Elastic Upgradation Tool using Node.js, React, MongoDB, and Ansible to streamline on-premise Elasticsearch cluster upgrades.</li>
              <li>Worked extensively with the Elastic Stack (cluster management, real-time processing) and assisted in Splunk-to-Elastic migration tool development.</li>
            </ul>
          </div>
          {/* Deutsche Bank */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-4 border border-gray-200">
             <p className="font-bold text-gray-800 text-lg mb-1">Deutsche Bank</p>
             <p className="text-gray-700 text-base mb-1">Technology Development Intern, Risk Division | May 2024 - July 2024 | Pune</p>
             <ul className="list-disc list-inside text-gray-700 ml-6 mt-3 space-y-1 text-base">
               <li>Implemented WebSocket-based real-time alerts in Remedy service, reducing system alert latency from 10s to &lt;1s.</li>
               <li>Used Kafka for broadcasting notifications across pods, ensuring 95%+ message delivery and high availability.</li>
               <li>Optimized data retrieval via GraphQL-based DAL and improved database schema for 50% faster, more secure workflows.</li>
               <li>Deployed apps on Fabric, Deutsche Bank's proprietary cloud, gaining DevOps experience.</li>
             </ul>
           </div>
          {/* Consultadd */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-4 border border-gray-200">
             <p className="font-bold text-gray-800 text-lg mb-1">Consultadd</p>
             <p className="text-gray-700 text-base mb-1">Software Engineering Intern | Jan 2023 - July 2023 | Remote</p>
             <ul className="list-disc list-inside text-gray-700 ml-6 mt-3 space-y-1 text-base">
               <li>Developed features and fixed 50+ bugs in internal CRM/HRIS tools using React and Redux.</li>
               <li>Migrated to functional components, reducing maintenance by 10+ hrs/week and improving performance.</li>
               <li>Implemented debounced search, API caching, and infinite scroll, cutting server load by 25%.</li>
               <li>Added notification system via Service Workers + Firebase, boosting interactivity by 20%.</li>
             </ul>
           </div>
        </div>

        {/* Skills Overview */}
         <div className="mb-10">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Skills Overview</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Technical Skills */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-1">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Technical Skills</h4>
              <div className="text-gray-700 space-y-2 text-base">
                <p><span className="font-semibold">Languages:</span> Python, Java, C++, JavaScript, TypeScript</p>
                <p><span className="font-semibold">Backend:</span> Springboot, Node.js, Express.js</p>
                <p><span className="font-semibold">Frontend:</span> React, TailwindCSS, HTML, CSS, Bootstrap, Angular</p>
                <p><span className="font-semibold">Clouds & Databases:</span> AWS, PostgreSQL, MongoDB</p>
                <p><span className="font-semibold">Web Technologies:</span> Docker, Socket.IO, Redis</p>
                <p><span className="font-semibold">Developer Tools:</span> Postman, VS Code, GitHub, Xcode</p>
              </div>
            </div>

            {/* Algorithmic Competitions/Achievements */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-1">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Algorithmic Competitions/Achievements</h4>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-2 text-base">
                <li>Solved 700+ DSA problems from GFG, Leetcode, Codechef, codeforces, building problem solving skills.</li>
                <li>Rated 1800+ on Leetcode</li>
                <li>HacktoberFest 22 Contributer</li>
                <li>Completed CourseWorks - Computer Networks, DBMS, Computer Architecture, Agile Methodoly, etc</li>
                <li>Selected for Indian National Maths Olympiad.Among 30 students from complete state to do so.</li>
              </ul>
            </div>
             {/* You can add more skills categories here if needed, potentially in a third column on larger screens */}
             <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 col-span-1 md:col-span-2 lg:col-span-1">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Others</h4> {/* Example additional skills category */}
              <div className="text-gray-700 space-y-2 text-base">
                 <p><span className="font-semibold">DevOps:</span> CI/CD, Docker</p>
                 <p><span className="font-semibold">Tools:</span> Git, JIRA</p>
                 <p><span className="font-semibold">Methodologies:</span> Agile, Scrum</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links - Placed within About section as in the theme's structure */}
        <div className="flex justify-center space-x-6 mt-12">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 text-3xl transition"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-3xl transition"><i className="fab fa-linkedin"></i></a>
           {/* Add other social links as needed, e.g., Twitter, personal website */} 
        </div>

      </div>
    </section>
  );
}

export default About; 