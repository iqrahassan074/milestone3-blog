import React from 'react';
import Image from 'next/image';

const directors = [
  { name: "Chris Columbus", role: "Director (Harry Potter 1 & 2)", image: "/images/chris.png" },
  { name: "Alfonso Cuarón", role: "Director (Harry Potter 3)", image: "/images/alfonso.png" },
  { name: "Mike Newell", role: "Director (Harry Potter 4)", image: "/images/mike.png" },
  { name: "David Yates", role: "Director (Harry Potter 5–8)", image: "/images/devid.png" }
];

const Dir = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg animate-color-change">
          Meet the Directors of Harry Potter
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {directors.map((director, index) => (
            <div
              key={index}
              className="bg-blue-400 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src={director.image}
                  alt={director.name}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{director.name}</h2>
              <p className="text-lg text-gray-600">{director.role}</p>

              <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-purple-600 hover:to-green-600 transform transition duration-300">
                {director.name} as {director.role}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dir;
