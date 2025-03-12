import React from "react";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase, FaLinux, FaGitAlt } from "react-icons/fa";

const TechnicalSkills = () => {
  return (
      <div className="mt-10">
        <h1 className="text-3xl font-bold">Technical Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          <div className="flex items-center space-x-2"><FaJava className="text-orange-600 text-2xl" /><span>Java</span></div>
          <div className="flex items-center space-x-2"><FaPython className="text-blue-500 text-2xl" /><span>Python</span></div>
          <div className="flex items-center space-x-2"><FaHtml5 className="text-red-500 text-2xl" /><span>HTML</span></div>
          <div className="flex items-center space-x-2"><FaCss3Alt className="text-blue-600 text-2xl" /><span>CSS</span></div>
          <div className="flex items-center space-x-2"><FaJs className="text-yellow-500 text-2xl" /><span>JavaScript</span></div>
          <div className="flex items-center space-x-2"><FaReact className="text-blue-400 text-2xl" /><span>React.js</span></div>
          <div className="flex items-center space-x-2"><FaNodeJs className="text-green-600 text-2xl" /><span>Node.js</span></div>
          <div className="flex items-center space-x-2"><FaAws className="text-orange-400 text-2xl" /><span>AWS</span></div>
          <div className="flex items-center space-x-2"><FaDocker className="text-blue-400 text-2xl" /><span>Docker</span></div>
          <div className="flex items-center space-x-2"><FaDatabase className="text-gray-600 text-2xl" /><span>MySQL / PostgreSQL</span></div>
          <div className="flex items-center space-x-2"><FaLinux className="text-black text-2xl" /><span>Linux</span></div>
          <div className="flex items-center space-x-2"><FaGitAlt className="text-orange-500 text-2xl" /><span>Git</span></div>
        </div>
      </div>
  );
};

export default TechnicalSkills;
