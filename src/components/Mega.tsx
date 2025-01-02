import React from 'react';
import BlogCard from '../components/BlogCard'; 

export default function Mega() {
  const posts = [
    {
      id: '1',
      title: "Harry Potter and the Sorcerer's Stone (2001)",
      description: "This is the first movie in the series where Harry Potter discovers that he is a wizard and begins his adventure at Hogwarts School of Witchcraft and Wizardry. He uncovers a mystery related to the Sorcerer's Stone.",
      date: "November 10, 2001 (USA)",
      ImportantDetails: "The movie was a huge commercial success, grossing over $1 billion worldwide.",
      imageUrl: "/images/harry1.png",  
    },
    {
      id: '2',
      title: "Harry Potter and the Chamber of Secrets (2002)",
      description: "In the second movie, Harry returns to Hogwarts for his second year and uncovers the mystery of the Chamber of Secrets, where something is threatening the lives of students at the school.",
      date: "November 15, 2002 (USA)",
      ImportantDetails: "The film had a budget of $100 million and grossed around $879 million worldwide.",
      imageUrl: "/images/harry2.png",  
    },
    {
      id: '3',
      title: "Harry Potter and the Prisoner of Azkaban (2004)",
      description: "In the third movie, Harry learns that a dangerous prisoner, Sirius Black, has escaped from Azkaban. He embarks on a journey to uncover the truth about his family’s past.",
      date: "June 4, 2004 (USA)",
      ImportantDetails: "The film took the series in a darker direction and was the first to significantly change the visual style of the films.",
      imageUrl: "/images/harry3.png",  
    },
    {
      id: '4',
      title: "Harry Potter and the Goblet of Fire (2005)",
      description: "In this part, Harry competes in the Triwizard Tournament, facing dangerous challenges, and is forced to confront the return of Lord Voldemort.",
      date: "November 18, 2005 (USA)",
      ImportantDetails: "With a budget of $150 million, the film grossed $896 million worldwide.",
      imageUrl: "/images/harry4.png",  
    },
    {
      id: '5',
      title: "Harry Potter and the Order of the Phoenix (2007)",
      description: "In the fifth movie, Harry fights against the Ministry of Magic’s refusal to acknowledge Voldemort’s return. He leads a group of students called Dumbledore Army to prepare for the coming war.",
      date: "July 11, 2007 (USA)",
      ImportantDetails: "The film had a box office collection of $940 million and was the longest in the series.",
      imageUrl: "/images/harry5.png",  
    },
    {
      id: '6',
      title: "Harry Potter and the Half-Blood Prince (2009)",
      description: "In the sixth film, Harry learns more about Voldemort’s past and the dark secrets he has hidden. He also faces personal losses as the war against Voldemort intensifies.",
      date: "July 15, 2009 (USA)",
      ImportantDetails: "With a budget of $250 million, it earned $934 million at the box office worldwide.",
      imageUrl: "/images/harry6.png", 
    },
  ];

  return (
    <div className='my-3'>
      <h1 className='text-3xl font-extrabold text-center pt-9 py-7 text-blue-500 animate-color-change'>
        ❄️ HARRY POTTER ❄️ 
      </h1>

      <div className='grid grid-cols-1 text-black sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post, index) => (
          <div className='Fade-in' key={post.id}>
            <div className='blog-card bg-gray-300 p-4 rounded-lg shadow-md'>
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}






