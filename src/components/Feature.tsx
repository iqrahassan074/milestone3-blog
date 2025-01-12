import React from 'react';
import Image from 'next/image'; 

type Actor = {
  name: string;
  role: string;
  image: string;
};

const actors: Actor[] = [
  { name: "Daniel Radcliffe", role: "Harry Potter", image: "/images/deni.png" },
  { name: "Rupert Grint", role: "Ron Weasley", image: "/images/ron.png" },
  { name: "Emma Watson", role: "Hermione Granger", image: "/images/emma.png" },
  { name: "Tom Felton", role: "Draco Malfoy", image: "/images/tom.png" },
  { name: "Alan Rickman", role: "Severus Snape", image: "/images/all.png" },
  { name: "Maggie Smith", role: "Minerva McGonagall", image: "/images/mag.png" },
  { name: "Michael Gambon", role: "Albus Dumbledore (Harry Potter 3–8)", image: "/images/mic.png" },
  { name: "Matthew Lewis", role: "Neville Longbottom", image: "/images/math.png" },
  { name: "Gary Oldman", role: "Sirius Black", image: "/images/gary.png" },
  { name: "Ralph Fiennes", role: "Lord Voldemort", image: "/images/relph.png" },
  { name: "Bonnie Wright", role: "Ginny Weasley", image: "/images/bon.png" },
  { name: "James Phelps", role: "Fred Weasley", image: "/images/jam.png" },
  { name: "Oliver Phelps", role: "George Weasley", image: "/images/olive.png" },
  { name: "Evanna Lynch", role: "Luna Lovegood", image: "/images/eva.png" },
  { name: "Helena Bonham Carter", role: "Bellatrix Lestrange", image: "/images/hel.png" },
  { name: "David Thewlis", role: "Remus Lupin", image: "/images/dev.png" },
  { name: "John Hurt", role: "Mr. Ollivander", image: "/images/john.png" },
  { name: "Julie Walters", role: "Molly Weasley", image: "/images/julie.png"},
  { name: "Robbie Coltrane", role: "Hagrid", image: "/images/robbie.png" },
  { name: "Imelda Staunton", role: "Dolores Umbridge", image: "/images/imelda.png"},

];

const Feature = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg animate-color-change">
          Meet the Cast of Harry Potter
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {actors.map((actor, index) => (
            <div key={index} className="bg-blue-300 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="overflow-hidden rounded-lg mb-4">
               
                <Image
                  src={actor.image}
                  alt={actor.name}
                  width={300}  
                  height={400}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{actor.name}</h2>
              <p className="text-lg text-gray-600">{actor.role}</p>

              <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-purple-600 hover:to-green-600 transform transition duration-300">
                {actor.name} as {actor.role}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;