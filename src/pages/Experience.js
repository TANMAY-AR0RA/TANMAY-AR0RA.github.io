import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('images/Background.jpg')" }}>
      <div className="p-10 rounded-lg max-w-4xl  mx-auto text-black">
      <h1 className="text-5xl font-bold">Experience</h1>
      </div>
      <div className="mt-4 bg-white bg-opacity-50 p-10 rounded-lg max-w-4xl mx-auto text-black">
          <h3 className="text-xl font-medium">UCF-IT | Software Engineering Intern - Enterprise Infrastructure (Aug 2024 - Present)</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Developed a secure, full-stack internal web application hosted on GitHub Pages and Azure Functions.</li>
            <li>Automated inventory data synchronization using GitHub Actions.</li>
            <li>Assisted in migrating from GitLab to GitHub for better version control and collaboration.</li>
            <li>Developed Python scripts to automate F5 data migration to Terraform.</li>
            <li>Shadowed senior team members to manage F5 load balancers in Azure.</li>
          </ul>
        </div>
        <div className="mt-4 bg-white bg-opacity-50 p-10 rounded-lg max-w-4xl mx-auto text-black">
          <h3 className="text-xl font-medium">University of Central Florida | Teaching Assistant (Jan 2024 - May 2025)</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Created and graded assignments and quizzes while supporting students.</li>
            <li>Led sessions to help students implement algorithms in Python.</li>
            <li>Instructed students on GitHub commands, coding best practices, and collaborative platforms.</li>
          </ul>
        </div>
        
        <div className="mt-4 bg-white bg-opacity-50 p-10 rounded-lg max-w-4xl mx-auto text-black">
          <h3 className="text-xl font-medium">Business Web Solutions, India | Software Engineer Intern (Jul 2022 - Sep 2022)</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Developed software solutions using JavaScript and React.js.</li>
            <li>Built backend with Java in IntelliJ and optimized website performance.</li>
            <li>Wrote clean, efficient, and well-documented code using HTML, CSS, and Bootstrap.</li>
          </ul>
        </div>
    </div>
  );
};

export default Experience;
