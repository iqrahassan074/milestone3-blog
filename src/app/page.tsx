import React from "react";
import Navbar from '../components/Navbar';
import AuthorCard from "@/components/AuthorCard";
import Mega from '../components/Mega';
import Feature from '../components/Feature';
import Dir from "@/components/Dir";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-purple-800 via-blue-900">
      <Navbar/>
      <AuthorCard/> 
      <Mega/>
      <Feature/>
      <Dir/>
      <Footer/>
    </div>
  );
}
