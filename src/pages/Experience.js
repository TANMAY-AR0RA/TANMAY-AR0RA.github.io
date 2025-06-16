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
          <h3 className="text-xl font-medium">National Medico Agency, India | Software Engineer (Jul 2020 - Jul 2023)</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Built and maintained a custom ERP and inventory platform using Java, Spring Boot, and MySQL, streamlining stock tracking for 1,500+ products and reducing manual effort by 60%.</li>
            <li>Developed a React.js portal for B2B clients to view products and send inquiries, cutting phone/email orders by 70%.</li>
            <li>Created 10+ REST APIs with Spring Security and JWT auth, improving data control and access security.</li>
            <li>Integrated features like PDF invoice generation, email alerts, and analytics dashboards, saving staff 4+ hours/week.</li>
            <li>Collaborated with non-technical staff to prioritize features and enhance usability, leading to ~85% user satisfaction.</li>
          </ul>
        </div>
    </div>
  );
};

export default Experience;
