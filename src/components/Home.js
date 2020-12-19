import React from "react";
import image from "../ckportbg.jpeg";

export default function Home() {
  return (
    <main className="relative">
      <img
        src={image}
        alt="Background as Scotland"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl md:text-4xl lg:text-5xl sm:text-3xl text-yellow-600 font-bold cursive leading-none lg:leading-snug home-name">
          Hallo! Ich bin Cüneyt!
        </h1>
      </section>
    </main>
  );
}
