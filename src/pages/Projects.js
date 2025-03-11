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
    link: "https://github.com/yourusername/fake-news-detection"
  },
  {
    title: "Stock Management System (ERP)",
    description: "Developed a platform for organizations to trace inventory, stock levels, sales, reports, and track the purchasing process.",
    image: "/images/stock_management.png",
    link: "https://github.com/yourusername/stock-management"
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
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <p className="mt-4 text-center">Here are some of my projects.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">{project.title}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
