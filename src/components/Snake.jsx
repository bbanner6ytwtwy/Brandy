// import React, { useEffect, useRef, useState } from 'react';

// const canvasSize = 400;
// const gridSize = 20;
// const directions = {
//   ArrowUp: [0, -1],
//   ArrowDown: [0, 1],
//   ArrowLeft: [-1, 0],
//   ArrowRight: [1, 0],
// };

// const getRandomPosition = () => {
//   const x = Math.floor(Math.random() * (canvasSize / gridSize));
//   const y = Math.floor(Math.random() * (canvasSize / gridSize));
//   return [x, y];
// };

// const appleTypes = [
//   { color: 'fuchsia', effect: 'color' },
//   { color: 'hotpink', effect: 'color' },
//   { color: 'orchid', effect: 'color' },
//   { color: 'violet', effect: 'color' },
//   { color: 'lightpink', effect: 'color' },
//   { color: 'mediumvioletred', effect: 'color' },
//   { color: 'plum', effect: 'color' },
//   { color: 'deeppink', effect: 'color' },
//   { color: 'lavenderblush', effect: 'color' },
//   { color: 'pink', effect: 'color' },
//   { color: 'mistyrose', effect: 'color' },
//   { color: 'thistle', effect: 'color' },
//   { color: 'peachpuff', effect: 'color' },
//   { color: 'lightcoral', effect: 'color' },
//   { color: 'salmon', effect: 'color' },
//   { color: 'coral', effect: 'color' },
//   { color: 'gold', effect: 'color' },
//   { color: 'lightyellow', effect: 'color' },
//   { color: 'khaki', effect: 'color' },
//   { color: 'lemonchiffon', effect: 'color' },
//   { color: 'rainbow', effect: 'rainbow' },
// ];

// const loveQuotes = [
//   "You're the color in my grayscale world 💖",
//   "Even the stars envy how you shine ✨",
//   "Your smile is my favorite sunrise 🌅",
//   "Brandy, you make ordinary moments magical 🌟",
//   "Every beat of my heart spells B-R-A-N-D-Y 💓",
//   "You're the reason I believe in beauty 💫",
//   "If I had a rose for every time I thought of you, I'd be walking through a garden forever 🌹",
//   "You’re the poem my heart recites endlessly 📜",
//   "When you laugh, the universe leans in to listen 🌌",
//   "Brandy, your kindness could melt glaciers ❄️💖",
//   "You're my favorite hello and hardest goodbye 🥺",
//   "You sparkle more than the stars above ✨",
//   "I’d pause the universe just to stare at you 😍",
//   "You're the glow in my galaxy 🌠",
//   "Your name rhymes with every love song in my soul 🎶",
//   "Brandy, my daydreams have your name on repeat 💭",
//   "I fell for you like gravity couldn’t help it 💘",
//   "You turn every heartbeat into a melody 🎼",
//   "The only thing better than your smile is seeing it twice 😊",
//   "Brandy, you are art in motion 🖌️",
//   "My compass points to you, always 🧭❤️",
//   "If kisses were stars, I'd give you the sky 💋🌌",
//   "You’re more magical than fairy dust ✨🧚",
//   "Even my dreams envy reality when you're near 💕",
//   "Brandy, your beauty rewrites the definition of stunning 🌟",
//   "Your voice is the harmony to my silence 🎵",
//   "Your love colors my world like a rainbow 🎨",
//   "You're the sunrise after every storm 🌈",
//   "In your eyes, I find my forever 🔮",
//   "You’re the heartbeat to my song of life 🎶💗"
// ];

// export default function SnakeGame() {
//   const canvasRef = useRef(null);
//   const [snake, setSnake] = useState([[5, 5]]);
//   const [direction, setDirection] = useState([1, 0]);
//   const [apple, setApple] = useState({ pos: getRandomPosition(), type: appleTypes[0] });
//   const [snakeColors, setSnakeColors] = useState(['white']);
//   const [rainbowMode, setRainbowMode] = useState(false);
//   const [level, setLevel] = useState(0);
//   const [quote, setQuote] = useState('');
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (directions[e.key]) {
//         setDirection(directions[e.key]);
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   useEffect(() => {
//     if (!running) return;
//     const interval = setInterval(() => {
//       setSnake((prev) => {
//         const newHead = [prev[0][0] + direction[0], prev[0][1] + direction[1]];
//         if (
//           newHead[0] < 0 ||
//           newHead[1] < 0 ||
//           newHead[0] >= canvasSize / gridSize ||
//           newHead[1] >= canvasSize / gridSize ||
//           prev.some((segment) => segment[0] === newHead[0] && segment[1] === newHead[1])
//         ) {
//           setSnakeColors(['white']);
//           return [[5, 5]];
//         }

//         const newSnake = [newHead, ...prev];
//         const ateApple = newHead[0] === apple.pos[0] && newHead[1] === apple.pos[1];

//         if (ateApple) {
//           if (apple.type.effect === 'rainbow') {
//             setRainbowMode(true);
//             setTimeout(() => setRainbowMode(false), 5000);
//           } else {
//             setSnakeColors((prevColors) => [apple.type.color, ...prevColors]);
//           }
//           const nextLevel = level + 1;
//           setLevel(nextLevel);
//           setQuote(loveQuotes[nextLevel % loveQuotes.length]);
//           setApple({ pos: getRandomPosition(), type: appleTypes[Math.floor(Math.random() * appleTypes.length)] });
//           return newSnake;
//         }

//         setSnakeColors((prevColors) => [prevColors[0], ...prevColors.slice(0, newSnake.length - 1)]);
//         return newSnake.slice(0, -1);
//       });
//     }, 120);
//     return () => clearInterval(interval);
//   }, [direction, apple, level, running]);

//   useEffect(() => {
//     const ctx = canvasRef.current.getContext('2d');
//     ctx.clearRect(0, 0, canvasSize, canvasSize);

//     snake.forEach(([x, y], i) => {
//       const color = rainbowMode ? `hsl(${(i * 30) % 360}, 100%, 60%)` : snakeColors[i] || 'white';
//       ctx.fillStyle = color;
//       ctx.beginPath();
//       ctx.arc(x * gridSize + gridSize / 2, y * gridSize + gridSize / 2, gridSize / 2, 0, Math.PI * 2);
//       ctx.fill();
//     });

//     if (apple.type.color === 'rainbow') {
//       const gradient = ctx.createLinearGradient(0, 0, canvasSize, 0);
//       gradient.addColorStop(0, 'fuchsia');
//       gradient.addColorStop(0.5, 'yellow');
//       gradient.addColorStop(1, 'violet');
//       ctx.fillStyle = gradient;
//     } else {
//       ctx.fillStyle = apple.type.color;
//     }
//     ctx.beginPath();
//     ctx.arc(
//       apple.pos[0] * gridSize + gridSize / 2,
//       apple.pos[1] * gridSize + gridSize / 2,
//       gridSize / 2,
//       0,
//       Math.PI * 2
//     );
//     ctx.fill();
//   }, [snake, apple, snakeColors, rainbowMode]);

//   return (
//     <div className="relative z-50 flex flex-col items-center gap-6 py-10 bg-white min-h-screen">
//       <h2 className="text-4xl font-bold text-pink-600 drop-shadow">Snake Game 🍎</h2>
//       <canvas
//         ref={canvasRef}
//         width={canvasSize}
//         height={canvasSize}
//         className="border-4 border-pink-400 shadow-xl rounded-2xl bg-black"
//       />
//       <div className="flex gap-4">
//         <button
//           onClick={() => setRunning(true)}
//           className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
//         >
//           Start
//         </button>
//         <button
//           onClick={() => setRunning(false)}
//           className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
//         >
//           Pause
//         </button>
//         <button
//           onClick={() => {
//             setRunning(false);
//             setSnake([[5, 5]]);
//             setSnakeColors(['white']);
//             setLevel(0);
//             setQuote('');
//           }}
//           className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//         >
//           End
//         </button>
//       </div>
//       {quote && (
//         <p className="text-center text-xl max-w-md text-pink-700 italic animate-fade-in">
//           {quote}
//         </p>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from 'react';

const canvasSize = 400;
const gridSize = 20;
const directions = {
  ArrowUp: [0, -1],
  ArrowDown: [0, 1],
  ArrowLeft: [-1, 0],
  ArrowRight: [1, 0],
};


const getRandomPosition = () => {
  const x = Math.floor(Math.random() * (canvasSize / gridSize));
  const y = Math.floor(Math.random() * (canvasSize / gridSize));
  return [x, y];
};

const appleTypes = [
  { color: 'fuchsia', effect: 'color' },
  { color: 'hotpink', effect: 'color' },
  { color: 'orchid', effect: 'color' },
  { color: 'violet', effect: 'color' },
  { color: 'lightpink', effect: 'color' },
  { color: 'mediumvioletred', effect: 'color' },
  { color: 'plum', effect: 'color' },
  { color: 'deeppink', effect: 'color' },
  { color: 'lavenderblush', effect: 'color' },
  { color: 'pink', effect: 'color' },
  { color: 'mistyrose', effect: 'color' },
  { color: 'thistle', effect: 'color' },
  { color: 'peachpuff', effect: 'color' },
  { color: 'lightcoral', effect: 'color' },
  { color: 'salmon', effect: 'color' },
  { color: 'coral', effect: 'color' },
  { color: 'gold', effect: 'color' },
  { color: 'lightyellow', effect: 'color' },
  { color: 'khaki', effect: 'color' },
  { color: 'lemonchiffon', effect: 'color' },
  { color: 'rainbow', effect: 'rainbow' },
];

const loveQuotes = [
  "You're the color in my grayscale world 💖",
  "Even the stars envy how you shine ✨",
  "Your smile is my favorite sunrise 🌅",
  "Brandy, you make ordinary moments magical 🌟",
  "Every beat of my heart spells B-R-A-N-D-Y 💓",
  "You're the reason I believe in beauty 💫",
  "If I had a rose for every time I thought of you, I'd be walking through a garden forever 🌹",
  "You’re the poem my heart recites endlessly 📜",
  "When you laugh, the universe leans in to listen 🌌",
  "Brandy, your kindness could melt glaciers ❄️💖",
  "You're my favorite hello and hardest goodbye 🥺",
  "You sparkle more than the stars above ✨",
  "I’d pause the universe just to stare at you 😍",
  "You're the glow in my galaxy 🌠",
  "Your name rhymes with every love song in my soul 🎶",
  "Brandy, my daydreams have your name on repeat 💭",
  "I fell for you like gravity couldn’t help it 💘",
  "You turn every heartbeat into a melody 🎼",
  "The only thing better than your smile is seeing it twice 😊",
  "Brandy, you are art in motion 🖌️",
  "My compass points to you, always 🧭❤️",
  "If kisses were stars, I'd give you the sky 💋🌌",
  "You’re more magical than fairy dust ✨🧚",
  "Even my dreams envy reality when you're near 💕",
  "Brandy, your beauty rewrites the definition of stunning 🌟",
  "Your voice is the harmony to my silence 🎵",
  "Your love colors my world like a rainbow 🎨",
  "You're the sunrise after every storm 🌈",
  "In your eyes, I find my forever 🔮",
  "You’re the heartbeat to my song of life 🎶💗"
];

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const gameContainerRef = useRef(null);
  const [snake, setSnake] = useState([[5, 5]]);
  const [direction, setDirection] = useState([1, 0]);
  const [apple, setApple] = useState({ pos: getRandomPosition(), type: appleTypes[0] });
  const [snakeColors, setSnakeColors] = useState(['white']);
  const [rainbowMode, setRainbowMode] = useState(false);
  const [level, setLevel] = useState(0);
  const [quote, setQuote] = useState('');
  const [running, setRunning] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  // Prevent scrolling with arrow keys
//   useEffect(() => {
//     const preventArrowScroll = (e) => {
//       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
//         e.preventDefault();
//       }
//     };
//     if (running) {
//       window.addEventListener('keydown', preventArrowScroll);
//       document.body.style.overflow = 'hidden';
//       setIsFixed(true);
//     } else {
//       window.removeEventListener('keydown', preventArrowScroll);
//       document.body.style.overflow = '';
//       setIsFixed(false);
//     }
//     return () => window.removeEventListener('keydown', preventArrowScroll);
//   }, [running]);

  // Game movement
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const newHead = [prev[0][0] + direction[0], prev[0][1] + direction[1]];
        if (
          newHead[0] < 0 ||
          newHead[1] < 0 ||
          newHead[0] >= canvasSize / gridSize ||
          newHead[1] >= canvasSize / gridSize ||
          prev.some((segment) => segment[0] === newHead[0] && segment[1] === newHead[1])
        ) {
          setSnakeColors(['white']);
          return [[5, 5]];
        }

        const newSnake = [newHead, ...prev];
        const ateApple = newHead[0] === apple.pos[0] && newHead[1] === apple.pos[1];

        if (ateApple) {
          if (apple.type.effect === 'rainbow') {
            setRainbowMode(true);
            setTimeout(() => setRainbowMode(false), 5000);
          } else {
            setSnakeColors((prevColors) => [apple.type.color, ...prevColors]);
          }
          const nextLevel = level + 1;
          setLevel(nextLevel);
          setQuote(loveQuotes[nextLevel % loveQuotes.length]);
          setApple({ pos: getRandomPosition(), type: appleTypes[Math.floor(Math.random() * appleTypes.length)] });
          return newSnake;
        }

        setSnakeColors((prevColors) => [prevColors[0], ...prevColors.slice(0, newSnake.length - 1)]);
        return newSnake.slice(0, -1);
      });
    }, 120);
    return () => clearInterval(interval);
  }, [direction, apple, level, running]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasSize, canvasSize);

    snake.forEach(([x, y], i) => {
      const color = rainbowMode ? `hsl(${(i * 30) % 360}, 100%, 60%)` : snakeColors[i] || 'white';
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x * gridSize + gridSize / 2, y * gridSize + gridSize / 2, gridSize / 2, 0, Math.PI * 2);
      ctx.fill();
    });

    if (apple.type.color === 'rainbow') {
      const gradient = ctx.createLinearGradient(0, 0, canvasSize, 0);
      gradient.addColorStop(0, 'fuchsia');
      gradient.addColorStop(0.5, 'yellow');
      gradient.addColorStop(1, 'violet');
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = apple.type.color;
    }
    ctx.beginPath();
    ctx.arc(
      apple.pos[0] * gridSize + gridSize / 2,
      apple.pos[1] * gridSize + gridSize / 2,
      gridSize / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }, [snake, apple, snakeColors, rainbowMode]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      gameContainerRef.current.requestFullscreen().catch((err) => console.log(err));
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      ref={gameContainerRef}
      className={`${isFixed ? 'fixed inset-0 z-50 bg-white' : 'relative'} flex flex-col items-center justify-center gap-6 p-6 min-h-screen overflow-hidden`}
    >
      <h2 className="text-4xl font-bold text-pink-600 drop-shadow">Snake Game 🍎</h2>
      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        className="border-4 border-pink-400 shadow-xl rounded-2xl bg-black"
      />
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setRunning(true)}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
        >
          Start
        </button>
        <button
          onClick={() => setRunning(false)}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Pause
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setSnake([[5, 5]]);
            setSnakeColors(['white']);
            setLevel(0);
            setQuote('');
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          End
        </button>
        <button
          onClick={toggleFullscreen}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          Fullscreen
        </button>
      </div>
      {quote && (
        <p className="text-center text-xl max-w-md text-pink-700 italic animate-fade-in">
          {quote}
        </p>
      )}
    </div>
  );
}
