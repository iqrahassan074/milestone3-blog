import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import Image from 'next/image'; 

const AuthorCard = () => {
  return (
    <div className="bg-blue-900 shadow-lg rounded-lg p-6 sm:p-10 lg:p-14 mt-16">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
       
       
        <Image
          className="w-32 h-32 sm:w-24 sm:h-24 rounded-full mb-4 sm:mb-0 object-cover border-4 border-yellow-200 hover:scale-105"
          src="/images/iqra2.jpeg" 
          alt="Author Image"
          width={128} 
          height={128} 
        />

        <div>
          <h3 className="text-xl sm:text-2xl font-sans text-pink-300">Iqra Hassan</h3>
          <p className="text-yellow-200 mt-2 sm:mt-4 text-lg sm:text-2xl font-sans">Web Developer</p>

          <p className="text-cyan-200 mt-4 text-sm sm:text-base font-sans">
            Passionate about creating beautiful and functional web applications, I specialize in using
            modern web technologies such as React, TypeScript, and Tailwind CSS. With a keen eye for
            detail and a love for coding, I aim to build responsive, user-friendly websites that offer
            seamless experiences across all devices. Whether working on the front-end or collaborating
            on full-stack projects, I enjoy problem-solving and bringing creative ideas to life on the
            web.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center font-mono text-yellow-200">
          <MdAlternateEmail />
          <a href="mailto: iqra123@gmail.com" className="text-xl">
            iqra123@gmail.com
          </a>
        </div>
        <div className="flex items-center font-mono text-yellow-200">
          <FaPhone />
          <a className="text-xl">0311-12223334</a>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
        <a
          href="https://x.com/?lang=en"
          className="px-4 py-2 text-black bg-pink-400 font-bold rounded-xl font-sans hover:bg-pink-500 transition duration-300 hover:scale-105"
        >
          Twitter
        </a>

        <a
          href="https://www.linkedin.com"
          className="px-4 py-2 text-black bg-cyan-400 font-bold rounded-xl font-sans hover:bg-cyan-500 transition duration-300 hover:scale-105"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/iqrahassan074"
          className="px-4 py-2 text-black bg-purple-400 font-bold rounded-xl font-sans hover:bg-purple-600 transition duration-300 hover:scale-105"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default AuthorCard;








