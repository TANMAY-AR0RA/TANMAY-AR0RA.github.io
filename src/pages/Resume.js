import React from "react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/TanmayArora_Resume.pdf"; // Ensure the PDF is in the public folder
    link.download = "TanmayArora_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Resume</h1>
      <iframe
        src="/TanmayArora_Resume.pdf"
        className="mt-6 w-full max-w-4xl h-[600px] border rounded-lg shadow-lg"
      ></iframe>
      <button
        onClick={handleDownload}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
