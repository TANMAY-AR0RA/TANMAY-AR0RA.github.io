import React from "react";

const projects = [
  {
    title: "Cache and Memory Hierarchy Simulator",
    description: "Simulated a flexible cache module for any memory hierarchy level, implementing replacement, inclusion, and write policies. Evaluated performance, area, and energy using the SPEC-2000 benchmark.",
    image: "/images/CacheSimulator.png",
    link: "https://github.com/TANMAY-AR0RA/CacheSimulator"
  },
  {
    title: "Fake News Detection Using Deep Learning",
    description: "Optimized CNN models for classifying real vs. fake news using NLP techniques. Implemented N-gram & sequence vectorization, improving accuracy over other baseline models.",
    image: "/images/FakeNews.png",
    link: "https://github.com/TANMAY-AR0RA/fake-news-detection"
  },
  {
    title: "Stock Management System (ERP)",
    description: "Developed a platform for organizations to trace inventory, stock levels, sales, reports, and track the purchasing process.",
    image: "/images/stock-management.png",
    link: "https://github.com/TANMAY-AR0RA/stock-management"
  },
  {
    title: "Library Management System (LMS)",
    description: "Created a platform for students and teachers to access reading materials, borrow, and return books. Built the desktop app with Java Swing API and managed the MySQL database.",
    image: "/images/lms.png",
    link: "https://github.com/TANMAY-AR0RA/LibraryManagementSystem"
  },
];

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('images/Background.jpg')" }}
    >
    <div className="p-10">
    <div className="text-black p-10 rounded-lg max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-center">Projects</h1>
    </div> 
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-10 rounded-lg max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-black bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold text-black mt-4">{project.title}</h2>
            <p className="mt-2 text-black">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
