import React from "react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/TanmayArora_Resume.pdf";
    link.download = "TanmayArora_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-10 flex flex-col items-center" style={{ backgroundImage: "url('images/Background.jpg')"}}>
      <h1 className="text-5xl font-bold bg-black bg-opacity-50 p-10 rounded-lg">Resume</h1>
      <button
        onClick={handleDownload}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Download Resume
      </button>
      <iframe
        src="/TanmayArora_Resume.pdf"
        className="mt-6 w-full max-w-4xl h-[1000px] border rounded-lg shadow-lg"
      ></iframe>
      
    </div>
  );
};

export default Resume;
