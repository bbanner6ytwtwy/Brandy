import React from 'react';

const GrowingHerMind = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100 px-4 sm:px-10 py-20">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-purple-900 mb-6">
          💡 A Channel That Will Change How You See Yourself
        </h2>
        <img
          src="https://yt3.googleusercontent.com/LZYkzMWT7Q-0x9-0kTVdgiv71jRPqQqR-capFoMkd6dakAda6dCreEzqsbApwO4cwe44CrrABQ=s160-c-k-c0x00ffffff-no-rj"
          alt="Psych2Go"
          className="w-40 h-40 mx-auto rounded-full border-4 border-purple-300 mb-6"
        />
        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
          <strong>Psych2Go</strong> is your personal guide to understanding emotions, people, love, self-worth, and mental health — through short, animated, super-relatable videos. 
          Whether you're figuring out friendships, feelings, or your own power, this channel gets it.
        </p>
        <a
          href="https://www.youtube.com/@psych2go"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition-all duration-300 shadow-lg"
        >
          🌸 Visit Psych2Go
        </a>
      </div>
    </section>
  );
};

export default GrowingHerMind;
