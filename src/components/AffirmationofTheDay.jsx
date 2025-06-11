import { useEffect, useState } from 'react';

const affirmations = [
  "I am worthy of Real love and respect.",
  "My beauty radiates from within.",
  "I deserve happiness and joy, I will get Nothing less.",
  "I am confident and comfortable in my skin(Perfection doesn't shy-away).",
  "My presence is powerful and valuable(Very!)",
  "I love and accept myself unconditionally(100%)",
  "I am more than enough(Believe that!)",
  "My voice matters and deserves to be heard(100%)",
  "I am a divine expression of beauty(That Egyptian Goddess glow)",
  "I radiate confidence and inner strength(Super Woman)",
  "My value is not based on others' opinions(Hard to believe Sometimes, But 100%)",
  "I am proud of who I am becoming.",
  "I honor my body and treat it with kindness.",
  "I am a light in the world(Brighter than the Sun)",
  "I am a magnet for love and positivity(You are!)",
  "My worth is infinite and untouchable.",
  "I embrace my flaws—they make me unique.",
  "I am resilient and capable of growth.",
  "My energy uplifts and inspires others.",
  "I am a masterpiece in progress.",
  "I am at peace with who I am.",
  "I deserve to take up space.",
  "I deserve to be loved Genuinely(100%)",
  "My dreams are valid and achievable(100%)",
  "I choose to see my beauty every day.",
  "My life has purpose and meaning.",
  "I honor my emotions and trust my journey(You have to!)",
  "I am glowing with self-love(Light in the Dark!)",
  "I attract abundance by being myself.",
  "I am grounded, powerful, and serene.",
  "My kindness is my strength.",
  "I am the author of my own story.",
  "I radiate self-worth in every step I take.",
  "I trust myself and my decisions.",
  "My body is a gift and I cherish it.",
  "I let go of comparison—I am unique.",
  "I am enough just as I am(You are!)",
  "My authenticity is my superpower.",
  "I am deeply rooted in my self-worth.",
  "I am safe, I am seen, I am celebrated.",
  "I sparkle with confidence and grace.",
  "I celebrate my wins, big and small.",
  "My beauty is undeniable and divine.",
  "I allow myself to shine brightly.",
  "I am strong, I am soft, I am sacred(Uphold this)",
  "I nourish my soul with kindness.",
  "I am aligned with my highest self.",
  "My truth is powerful and beautiful(100%!)",
  "I give myself permission to thrive.",
  "I radiate love for myself and others.",
  "I walk in beauty, grace, and purpose."
];

const AffirmationOfTheDay = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % affirmations.length);
    }, 20000); // every 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-6 sm:px-10 bg-gradient-to-br from-pink-50 to-purple-100 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-6">
        ✨ Brandy's Affirmations
      </h2>
                <p className="max-w-4xl text-4xl sm:text-5xl text-gray-800 font-semibold italic leading-snug mb-12 transition-opacity duration-500">
            {affirmations[index]}
            </p>

      <span className="px-4 py-2 bg-white rounded-full shadow-md text-purple-800 font-semibold text-sm sm:text-base">
        Auto-updating every 20 seconds
      </span>
    </div>
  );
};

export default AffirmationOfTheDay;
