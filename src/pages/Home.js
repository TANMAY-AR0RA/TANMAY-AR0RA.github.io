import React from "react";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('images/Background.jpg')" }}
    >
      <div className="bg-white bg-opacity-50 p-10 rounded-lg max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-black">Welcome to My Portfolio</h1>
      </div>
    </div>
  );
};

export default Home;