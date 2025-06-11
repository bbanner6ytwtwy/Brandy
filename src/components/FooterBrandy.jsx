import React, { useEffect, useState } from 'react';

const slides = [
  {
    name: 'Cleopatra',
    quote: 'I will not be triumphed over.',
    image: '/cleo.jpeg',
  },
  {
    name: 'Rosa Parks',
    quote: 'I would like to be remembered as a person who wanted to be free.',
    image: '/rosa.jpeg',
  },
  {
    name: 'Frida Kahlo',
    quote: 'I am my own muse. I am the subject I know best.',
    image: '/frida.jpeg',
  },
  {
    name: 'Marie Curie',
    quote: 'Nothing in life is to be feared, it is only to be understood.',
    image: '/marie.jpeg',
  },
  {
    name: 'Malala Yousafzai',
    quote: 'One child, one teacher, one book, one pen can change the world.',
    image: '/malala.jpeg',
  },
  {
    name: 'Maya Angelou',
    quote: 'I am a woman phenomenally. Phenomenal woman, that’s me.',
    image: '/maya.jpeg',
  },
  {
    name: 'Michelle Obama',
    quote: 'There is no limit to what we, as women, can accomplish.',
    image: '/michelle.jpeg',
  },
  {
    name: 'Serena Williams',
    quote: 'The success of every woman should be the inspiration to another.',
    image: '/serena.jpeg',
  },
  {
    name: 'Rihanna',
    quote: 'There’s something so special about a woman who dominates in a man’s world.',
    image: '/rihanna.jpeg',
  },
  {
    name: 'Catwoman (Selina Kyle)',
    quote: 'I’m a woman who can get by on her own.',
    image: '/selina.jpeg',
  },
];

const FooterBrandy = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(iv);
  }, []);

  const current = slides[index];

  return (
    <footer className="w-full bg-black text-white flex flex-col items-center justify-center">
      <div className="relative w-full h-[70vh] max-w-6xl overflow-hidden flex items-center justify-center">
        {/* Background image */}
        <img
          src={current.image}
          alt={current.name}
          className="absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-1000"
        />
        {/* Overlay content */}
        <div className="relative z-10 p-6 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-400 mb-4">{current.name}</h2>
          <p className="text-lg sm:text-xl italic text-gray-200">“{current.quote}”</p>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="w-full bg-black text-center py-4 border-t border-gray-700">
        <p className="text-pink-500 text-lg font-semibold">❤️ For Brandy ❤️</p>
      </div>
    </footer>
  );
};

export default FooterBrandy;
