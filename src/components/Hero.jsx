import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  useEffect(() => {
    const autoPlay = () => {
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0;
        audio.play().then(() => {
          setIsPlaying(true);
          const fadeIn = setInterval(() => {
            if (audio.volume < 0.9) {
              audio.volume += 0.1;
            } else {
              audio.volume = 1;
              clearInterval(fadeIn);
            }
          }, 50);
        }).catch(() => {});
      }
    };
    autoPlay();
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/epic.mp3" preload="auto" />

      <div className="relative w-full h-screen flex flex-col items-center justify-center px-6 sm:px-10 pt-24 pb-16 bg-[rgba(255,255,255,0.05)] overflow-y-auto">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-black mb-4 tracking-wide leading-tight">
          Hey Brandy 🌺
        </h1>

        <p className="text-md sm:text-lg md:text-xl text-center text-gray-700 max-w-md sm:max-w-xl mb-8 italic">
          This is your sacred space of daily affirmations, divine reminders, and powerful truths. You are loved. You are infinite.
        </p>

        <div className="w-full overflow-hidden whitespace-nowrap mt-8 relative">
          <div className="inline-block animate-marquee">
                        <span className="mx-4 text-xl sm:text-2xl font-semibold text-purple-900">
                "I am more. I am meant for more." · "The goddess within me rises." · "Strength. Grace. Power." · "Brandy, you are unstoppable." · 
                "Born of stars, shaped by fire." · "You carry Athena’s wisdom." · "Every day you bloom."
              </span>
              <span className="mx-4 text-xl sm:text-2xl font-semibold text-purple-900">
                "I am more. I am meant for more." · "The goddess within me rises." · "Strength. Grace. Power." · "Brandy, you are unstoppable." · 
                "Born of stars, shaped by fire." · "You carry Athena’s wisdom." · "Every day you bloom."
              </span>
              <span className="mx-4 text-xl sm:text-2xl font-semibold text-purple-900">
                "Brandy, your soul is rare light." · "You move with purpose and magic." · "You’re not a storm — you’re the sky." · "You bend reality with your belief."
              </span>
              <span className="mx-4 text-xl sm:text-2xl font-semibold text-purple-900">
                "Brandy, your strength is quiet thunder." · "The world shifts in your presence." · "You rise with beauty and fire." · "You lead with heart and instinct."
              </span>
              <span className="mx-4 text-xl sm:text-2xl font-semibold text-purple-900">
                "Your courage echoes through generations." · "Brandy, you are a living miracle." · "Every scar on you shines like armor." · "You were born to transform the world."
              </span>
              <span className="mx-4 text-xl sm:text-2xl font-semibold text-purple-900">
                "Brandy, your mind is a universe of stars." · "You embody power wrapped in elegance." · "You’re the heroine of your own legend." · "You make every space sacred."
              </span>
          </div>
        </div>

        {/* MUSIC BUTTON WITH GLOW + BARS */}
        <div className="mt-10 relative flex flex-col items-center justify-center">
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
            >
              {isPlaying ? '⏸️ Pause Mthic Vibes' : '🎵 Play Mythic Vibes'}
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
    </>
  );
};

export default Hero;
