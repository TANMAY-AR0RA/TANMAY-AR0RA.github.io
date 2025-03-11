import React from "react";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('images/Background.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white">Welcome to My Portfolio</h1>
        <p className="text-lg mt-4 text-gray-200 leading-relaxed">
          I'm currently pursuing my <strong>Master's in Computer Science</strong> at the University of Central Florida with a <strong>4.0 GPA</strong> and will be graduating this year. My coursework includes <strong>Design and Analysis of Algorithms, Computer Architecture, Machine Learning,</strong> and <strong>Advanced AI</strong>.
        </p>
        <p className="text-lg mt-4 text-gray-200 leading-relaxed">
          I'm currently interning at <strong>UCF-IT</strong> (my university's IT department) as a <strong>Software Engineering Intern</strong> within the <strong>Enterprise Infrastructure team</strong>. Here, I've worked on <strong>cloud security, automation, and Infrastructure as Code</strong> using <strong>Python scripts, Terraform, and GitHub</strong>. One of my projects included building a <strong>full-stack internal web application</strong> for the IT team, among other automation tasks. I also performed <strong>unit testing</strong> to ensure code reliability.
        </p>
        <p className="text-lg mt-4 text-gray-200 leading-relaxed">
          Alongside my internship, I have been a <strong>Teaching Assistant in the Computer Science department</strong> for the past year, helping students strengthen their understanding of algorithms and programming concepts.
        </p>
        <p className="text-lg mt-4 text-gray-200 leading-relaxed">
          Previously, I interned at a <strong>software company in India</strong>, where I gained valuable experience in <strong>full-stack web development</strong>, working with modern frameworks and development practices.
        </p>
        <p className="text-lg mt-4 text-gray-200 leading-relaxed">
          I'm excited about opportunities that align with my <strong>skills and interests</strong>. I thrive on <strong>solving complex problems</strong>, and I look forward to contributing to impactful software projects while working on the <strong>Software Development Life Cycle (SDLC)</strong>.
        </p>
      </div>
    </div>
  );
};

export default Home;