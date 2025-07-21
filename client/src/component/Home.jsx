import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0e5ec] px-4">
      <div className="bg-[#e0e5ec] p-10 rounded-[20px] shadow-[10px_10px_20px_#a3b1c6,_-10px_-10px_20px_#ffffff] max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Welcome to MyApp</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          This is the Home page of your modern React application with Neumorphic design.
          <br />
          Use the navigation bar above to explore more features like Login, Contact, and About.
        </p>
      </div>
    </div>
  );
};

export default Home;
