"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(
        now.toLocaleString("en-US", options) +
          " " +
          now.toLocaleTimeString("en-us", { hour12: false })
      );
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="bg-indigo-600 text-xl font-semibold shadow-xl py-4">
      <div className="container mx-auto flex justify-center items-center px-6 sm:px-8">
        <div className="text-center text-black">
          <span className="text-sm sm:text-lg md:text-xl">{currentDateTime}</span>
        </div>
      </div>
    </header>
  );
}
