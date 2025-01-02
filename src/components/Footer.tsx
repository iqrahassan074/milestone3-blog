
import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-blue-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 animate-color-change">Harry Potter Blog</h2>
          <p className="text-lg sm:text-xl mb-4">All about the wizarding world of Harry Potter!</p>

          <div className="flex justify-center gap-6 text-2xl sm:text-3xl mb-4">
            <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-yellow-400 transition">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-yellow-400 transition">
              <FaFacebook />
            </a>
          </div>

          <div className="text-lg sm:text-xl mb-4">
            <a href="#" className="hover:text-yellow-400 transition mx-4">Home</a>
            <a href="#" className="hover:text-yellow-400 transition mx-4">About</a>
            <a href="#" className="hover:text-yellow-400 transition mx-4">Contact</a>
          </div>

          <p className="text-lg sm:text-xl italic">&quot;Mischief Managed!&quot;</p>
        </div>

        <div className="border-t border-yellow-400 pt-4">
          <p className="text-sm sm:text-base">&copy; 2025 Harry Potter Blog. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
