import React from 'react';
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from 'next/image'; 

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;

  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card className={`p-4 ${isDarkBackground ? 'bg-indigo-600 text-black' : 'bg-purple-500 text-black'} font-semibold text-xl rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}>
      <div className="w-full h-80 sm:h-96 md:h-[30rem] relative">
        <Image
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover rounded-t-lg"
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      <CardTitle className="text-xl font-normal mt-4 text-center">{post.title}</CardTitle>
      <br />
      <CardContent className="text-center">
        <p className="text-sm sm:text-base">{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p className={`text-lg mb-2 ${isDarkBackground ? 'text-white' : 'text-white'}`}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>

        <a
          href={`/posts/${post.id}`}
          className="inline-block text-sm py-3 px-8 sm:px-16 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:bg-gradient-to-l hover:text-black transition-all duration-300"
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
