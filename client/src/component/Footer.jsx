import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#e0e5ec] mt-10 py-6 px-4 shadow-[inset_2px_2px_5px_#a3b1c6,_inset_-2px_-2px_5px_#ffffff] rounded-t-[20px] text-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: Copyright */}
        <p className="text-gray-700 text-sm font-medium">
          &copy; {new Date().getFullYear()} <span className="font-semibold">WhiteCircle</span>. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-gray-600 text-xl">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-200"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
