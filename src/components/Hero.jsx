import React, { useRef, useState } from 'react';

const Hero = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const fadeOut = setInterval(() => {
        if (audio.volume > 0.1) {
          audio.volume -= 0.1;
        } else {
          audio.pause();
          audio.currentTime = 0;
          audio.volume = 1;
          setIsPlaying(false);
          clearInterval(fadeOut);
        }
      }, 50);
    } else {
      audio.volume = 0;
      audio.play();
      setIsPlaying(true);
      const fadeIn = setInterval(() => {
        if (audio.volume < 0.9) {
          audio.volume += 0.1;
        } else {
          audio.volume = 1;
          clearInterval(fadeIn);
        }
      }, 50);
    }
  };

  return (
    <>
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-pink-200/30 via-purple-200/30 to-pink-300/30 border-b border-white/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 text-2xl sm:text-3xl font-bold text-purple-800 italic tracking-wider">
              Brandy ✨
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
              {["Home", "Affirmations", "Music", "About"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-purple-800 hover:text-rose-600 transition duration-300 font-medium relative group scroll-smooth"
                >
                  {label}
                  <span className="block h-[2px] bg-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </div>

            {/* Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="text-purple-800 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {navOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {navOpen && (
          <div className="md:hidden bg-pink-50/60 backdrop-blur-xl">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {["Home", "Affirmations", "Music", "About"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setNavOpen(false)}
                  className="block text-purple-800 hover:text-rose-600 transition duration-300 font-medium"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <audio ref={audioRef} src="/epic.mp3" preload="auto" />

      {/* HERO SECTION */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 pt-24 pb-16 bg-[rgba(255,255,255,0.05)] text-black overflow-y-auto scroll-smooth">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-4 tracking-wide leading-tight">
          Hey Brandy 🌺
        </h1>

        <p className="text-md sm:text-lg md:text-xl text-center text-gray-700 max-w-md sm:max-w-xl mb-8 italic">
          This is your sacred space of daily affirmations, divine reminders, and powerful truths. You are loved. You are infinite.
        </p>

                {/* AFFIRMATIONS */}
        <div className="w-full overflow-hidden whitespace-nowrap mt-8 relative">
          <div className="inline-block animate-marquee">
            <span className="mx-4 text-xl sm:text-2xl font-semibold text-purple-900">
              "I am more. I am meant for more." · "The goddess within me rises." · "Strength. Grace. Power." · 
              "Brandy, you are unstoppable." · "Born of stars, shaped by fire." · "You carry Athena’s wisdom." · 
              "Every day you bloom." · "My energy is magnetic." · "I don’t chase, I attract." · 
              "I radiate divine feminine energy." · "I choose peace over perfection." · "I honor my sacred yes and powerful no." · 
              "Brandy, you are not too much — you are more than enough." · "You are the storm and the calm." · 
              "Every breath I take is filled with self-love." · "I am aligned. I am worthy. I am whole." · 
              "The universe dances for me." · "I am safe, seen, and supported." · "Everything is always working out for me." · 
              "My heart leads and the world follows." · "Brandy, you are divinely protected."
            </span>
          </div>
        </div>


        {/* MUSIC BUTTON */}
        <div className="mt-10 relative flex flex-col items-center justify-center" id="music">
          {isPlaying && (
            <div className="absolute -top-5 flex gap-[2px] h-4 z-10">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-[2px] rounded-full bg-[#a71ef0] ${
                    i % 3 === 0 ? 'animate-eq1' : i % 3 === 1 ? 'animate-eq2' : 'animate-eq3'
                  }`}
                />
              ))}
            </div>
          )}

          <div className={`relative z-10 ${isPlaying ? 'animate-glow' : ''}`}>
            <button
              className="bg-rose-200 hover:bg-rose-400 text-rose-900 font-medium px-6 py-2 rounded-full shadow-md transition duration-300 relative z-20"
              onClick={toggleAudio}
              title={isPlaying ? 'Pause music' : 'Play music'}
            >
              {isPlaying ? '🔇' : '🔊'}
            </button>
            {isPlaying && (
              <div className="absolute inset-0 rounded-full border-4 border-purple-500 opacity-50 animate-ping z-0" />
            )}
          </div>
        </div>

        {/* SYMBOL ICON */}
        <div className="absolute top-6 right-6 opacity-100 loop w-14 h-14 md:w-20 md:h-20">
          <img src="/yin-yang.png" alt="Antique Yin Yang" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-purple-700 bg-white/70">
        © {currentYear} Brandy. All rights reserved.
      </footer>
    </>
  );
};

export default Hero;
