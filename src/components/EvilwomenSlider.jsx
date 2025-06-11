import { useEffect, useState } from 'react';

const evilWomen = [
  {
    name: 'Elizabeth Báthory',
    nickname: 'The Blood Countess',
    image: '/eliz.jpeg',
    description: `Elizabeth Báthory was a Hungarian noblewoman accused of torturing and killing hundreds of young girls during the late 1500s. She reportedly believed that bathing in their blood would keep her young — a wild tale that earned her the nickname "The Blood Countess." Though some historians argue the story was exaggerated by political enemies, her legacy as one of history’s scariest noblewomen remains intact. She was eventually confined to her castle until her death.`
  },
  {
    name: 'Ilse Koch',
    nickname: 'The Witch of Buchenwald',
    image: '/koch.jpeg',
    description: `Ilse Koch, the wife of a Nazi concentration camp commandant, became notorious for her extreme cruelty during WWII. She was known for her obsession with tattoos and allegedly selected prisoners based on them. Stories say she had lampshades made of human skin, though this was never definitively proven. After the war, she was tried and convicted. Whether myth or reality, her name became symbolic of monstrous power in the hands of someone unhinged.`
  },
  {
    name: 'Jiang Qing',
    nickname: 'Madame Mao',
    image: '/qing.jpeg',
    description: `Once an actress, Jiang Qing rose to political power as Mao Zedong’s wife. She became a major force during China’s Cultural Revolution, orchestrating purges and silencing opposition in the arts, education, and government. Her leadership style was theatrical, dramatic, and ruthless — blending propaganda with punishment. After Mao’s death, she was arrested and labeled a major culprit behind the revolution’s darkest periods.`
  },
  {
    name: 'Myra Hindley',
    nickname: 'The Moors Murderer',
    image: '/myra.jpeg',
    description: `In the 1960s, Myra Hindley shocked the UK with her involvement in a series of horrifying murders committed alongside her partner Ian Brady. What made it even more unsettling was her seemingly ordinary appearance and calm demeanor. She became a symbol of how evil can wear a mask of innocence. Hindley was arrested, tried, and spent the rest of her life in prison.`
  },
  {
    name: 'Belle Gunness',
    nickname: 'Hell’s Belle',
    image: '/belle.jpeg',
    description: `Belle Gunness was an American serial killer who lured wealthy bachelors to her Indiana farm with marriage ads — then murdered them for their money. Dozens of bodies were eventually found buried on her land. One day, her house mysteriously burned down and she vanished. It’s unclear whether she died in the fire or faked her death, but either way, she left behind one of the eeriest unsolved mysteries in American crime history.`
  },
  // You can add more entries here
];

const EvilWomenSlider = () => {
  const [index, setIndex] = useState(0);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % evilWomen.length);
      setShowFull(false);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  const current = evilWomen[index];

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-6">
      {/* Header */}
      <div className="text-center max-w-4xl mb-3">
        <h1 className="text-4xl sm:text-5xl font-bold text-red-500 mb-4">
          🔥 History’s Most Evil Women 🔥
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 italic">
          Women can be forces of life, strength, and change — and sometimes, chaos and cruelty too. Here’s a wild reminder that power doesn’t always mean kindness.
        </p>
      </div>

      {/* Slide */}
      <div className="flex flex-col lg:flex-row items-center gap-10 bg-gray-900 bg-opacity-50 rounded-xl p-6 shadow-xl w-full max-w-6xl min-h-[70vh] transition-all duration-500">
        {/* Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={current.image}
            alt={current.name}
            className="w-full max-w-xs h-64 object-cover rounded-lg border-4 border-red-700"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-2/3 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-400 mb-2">
            {current.name}
          </h2>
          <h3 className="text-xl sm:text-2xl text-red-300 font-semibold mb-4">
            ({current.nickname})
          </h3>
          <p className="text-gray-300 text-base sm:text-lg">
            {showFull
              ? current.description
              : current.description.slice(0, 220) + '...'}
          </p>
          {!showFull && (
            <button
              onClick={() => setShowFull(true)}
              className="mt-2 text-sm font-bold text-red-500 hover:underline"
            >
              Read more
            </button>
          )}
          <p className="mt-6 text-sm text-gray-500 italic">
            A new villainess appears every 10 seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default EvilWomenSlider;
