import React, { useEffect, useState } from 'react';

const slides = [
  { name: 'Cleopatra', quote: 'I will not be triumphed over.', image: '/cleo.jpeg' },
  { name: 'Rosa Parks', quote: 'I would like to be remembered as a person who wanted to be free.', image: '/rosa.jpeg' },
  { name: 'Frida Kahlo', quote: 'I am my own muse. I am the subject I know best.', image: '/frida.jpeg' },
  { name: 'Marie Curie', quote: 'Nothing in life is to be feared, it is only to be understood.', image: '/marie.jpeg' },
  { name: 'Malala Yousafzai', quote: 'One child, one teacher, one book, one pen can change the world.', image: '/malala.jpeg' },
  { name: 'Maya Angelou', quote: 'I am a woman phenomenally. Phenomenal woman, that’s me.', image: '/maya.jpeg' },
  { name: 'Michelle Obama', quote: 'There is no limit to what we, as women, can accomplish.', image: '/michelle.jpeg' },
  { name: 'Serena Williams', quote: 'The success of every woman should be the inspiration to another.', image: '/serena.jpeg' },
  { name: 'Rihanna', quote: 'There’s something so special about a woman who dominates in a man’s world.', image: '/rihanna.jpeg' },
  { name: 'Catwoman (Selina Kyle)', quote: 'I’m a woman who can get by on her own.', image: '/selina.jpeg' },
];

// Base64-encoded password: "1521"
const encodedPassword = "MTUyMQ==";

const FooterBrandy = () => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const iv = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(iv);
  }, []);

  const current = slides[index];
  const correctPassword = atob(encodedPassword);

  const handleSubmit = () => {
    if (input === correctPassword) {
      setMessage("📞 WhatsApp Number: 07017329926");
    } else {
      setMessage("❌ Incorrect password");
    }
  };

  return (
    <footer className="w-full bg-black text-white flex flex-col items-center justify-center">
      <div className="relative w-full h-[70vh] max-w-6xl overflow-hidden flex items-center justify-center">
        <img
          src={current.image}
          alt={current.name}
          className="absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-1000"
        />
        <div className="relative z-10 p-6 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-400 mb-4">{current.name}</h2>
          <p className="text-lg sm:text-xl italic text-gray-200">“{current.quote}”</p>
        </div>
      </div>

      <div className="w-full bg-black border-t border-gray-700 py-4 relative text-center">
        <p className="text-pink-500 text-lg sm:text-xl font-semibold tracking-wide">
          ❤️ For Brandy ❤️
        </p>

        <div
          className="absolute right-2 bottom-1 text-[0.5rem] text-gray-800 cursor-pointer select-none"
          onClick={() => setShowModal(true)}
        >
          🛑
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gradient-to-bl from-pink-100 via-pink-400 to-pink-100 bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xs text-center">
            <h2 className="text-lg font-semibold mb-2 text-gray-900">Enter Access Key</h2>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="••••"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex justify-between mt-4">
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded"
                onClick={handleSubmit}
              >
                Unlock
              </button>
              <button
                className="text-gray-600 hover:text-black text-sm"
                onClick={() => {
                  setShowModal(false);
                  setInput('');
                  setMessage('');
                }}
              >
                Cancel
              </button>
            </div>
            {message && (
              <p className="mt-3 text-sm font-medium text-gray-700">{message}</p>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};

export default FooterBrandy;
