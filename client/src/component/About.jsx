import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0e5ec] px-6 py-12">
      <div className="bg-[#e0e5ec] p-10 rounded-[20px] max-w-3xl shadow-[10px_10px_20px_#a3b1c6,_-10px_-10px_20px_#ffffff] text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our platform is designed to simplify and automate the process of managing <strong>vehicle insurance policies</strong> for clients. We help individuals and organizations stay informed and avoid policy lapses by tracking insurance expiration dates.
        </p>

        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          We send timely <strong>email reminders</strong> and <strong>WhatsApp notifications</strong> to clients <span className="font-semibold text-gray-700">5 days before their policy expiration date</span>, ensuring they have enough time to renew their insurance and stay protected.
        </p>

        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          Whether you're managing a single vehicle or an entire fleet, our system is built to offer peace of mind through automation, reliability, and proactive alerts. Our goal is to help you never miss a renewal again.
        </p>

        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          Join us and experience the future of smart insurance tracking and client communication.
        </p>
      </div>
    </div>
  );
};

export default About;
