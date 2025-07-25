import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // use NavLink for active styling

const letters = [
  {
    title: "My Perfect Baby",
    content: `I’ve written letters before, but none like this. None that carry the weight of how much I feel for you.
    Sometimes I’m scared—scared that loving you too much will either tire you out or tempt the universe to test us in cruel, unfair ways.
    You are the first girl I’ve ever felt this deeply for—not just a rush, but a love that feels mature, real, unshakable.`,
    color: "bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100",
  },
  {
    title: "Sunshine of My Heart",
    content: `You are my brightest morning, my softest night, and the dream I never want to wake from.
    I hope you know that every smile of yours feels like a universe lighting up, and I’m blessed to have you as my light.`,
    color: "bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100",
  },
  {
    title: "Forever & Always",
    content: `I never believed in forever until I found you. If love was a painting, you’d be the masterpiece every artist tries to capture.
    You complete every shade of my heart, and I’ll spend my life proving that to you.`,
    color: "bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100",
  },
  {
    title: "You Are My Universe",
    content: `You’re not just part of my world; you are my entire universe. Every thought begins and ends with you.
    I love how your existence makes mine beautiful.`,
    color: "bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200",
  },
  {
    title: "Every Beat of My Heart",
    content: `When my heart beats, it whispers your name in silence. Every rhythm is a love song written only for you.`,
    color: "bg-gradient-to-r from-red-300 via-orange-200 to-yellow-100",
  },
  {
    title: "The Day We Met",
    content: `The day we met was when my soul found home. You’ve been my safe space ever since, and I’m eternally grateful.`,
    color: "bg-gradient-to-r from-teal-300 via-green-200 to-lime-100",
  },
  {
    title: "More Than Words",
    content: `Words fail me when I try to express my love for you. It’s bigger than language and deeper than silence.`,
    color: "bg-gradient-to-r from-pink-400 via-pink-200 to-white",
  },
  {
    title: "Love Letters in My Mind",
    content: `I write you love letters in my mind every day, telling you how you’re the most beautiful part of my existence.`,
    color: "bg-gradient-to-r from-purple-300 via-indigo-200 to-pink-100",
  },
  {
    title: "A Thousand Lifetimes",
    content: `If I had a thousand lifetimes, I’d find you in every single one and fall for you all over again.`,
    color: "bg-gradient-to-r from-yellow-300 via-pink-200 to-orange-100",
  },
  {
    title: "You Are Magic",
    content: `There’s magic in the way you laugh, the way you love, and the way you look at me as if I’m your entire world.`,
    color: "bg-gradient-to-r from-pink-200 via-purple-100 to-indigo-100",
  },
  {
    title: "My Safe Place",
    content: `With you, I’m home. I never knew love could feel like safety, like peace, like warmth I never want to lose.`,
    color: "bg-gradient-to-r from-teal-200 via-blue-100 to-pink-100",
  },
  {
    title: "Your Voice",
    content: `Your voice is my favorite sound. It’s soft, kind, and somehow carries the warmth of every beautiful memory I have.`,
    color: "bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-100",
  },
  {
    title: "Dreaming of You",
    content: `Even when I sleep, I find you in my dreams. You’re the only dream I want to come true every single day.`,
    color: "bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-200",
  },
  {
    title: "In Your Eyes",
    content: `Your eyes hold galaxies, and I could spend forever exploring them. Every glance feels like poetry.`,
    color: "bg-gradient-to-r from-blue-300 via-teal-200 to-green-200",
  },
  {
    title: "Endless Love",
    content: `My love for you doesn’t end with words or moments; it flows endlessly, like a river that never runs dry.`,
    color: "bg-gradient-to-r from-yellow-300 via-pink-300 to-red-200",
  },
  {
    title: "Your Smile",
    content: `Your smile is the light that pulls me out of darkness. It’s the most beautiful thing I’ve ever known.`,
    color: "bg-gradient-to-r from-pink-300 via-orange-200 to-yellow-100",
  },
  {
    title: "You Are My Reason",
    content: `You are my reason for hope, for joy, and for every good thing that I believe in.`,
    color: "bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200",
  },
  {
    title: "Forever My Favorite",
    content: `If the world gave me every choice, I’d still choose you—every single time, in every single lifetime.`,
    color: "bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-100",
  },
  {
    title: "My Morning Thought",
    content: `You’re my first thought in the morning and my last before I sleep. That’s how much you mean to me.`,
    color: "bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200",
  },
  {
    title: "A Love That Grows",
    content: `Every day, I find new reasons to love you. You are a garden of endless beauty and warmth.`,
    color: "bg-gradient-to-r from-green-200 via-teal-100 to-pink-100",
  },
  {
    title: "A Poem Without Words",
    content: `If I could paint my heart, it would be filled with your name in colors words can’t even describe.`,
    color: "bg-gradient-to-r from-pink-300 via-red-200 to-orange-100",
  },
  {
    title: "Holding Your Hand",
    content: `When I hold your hand, it feels like I’m holding everything good and pure in the world.`,
    color: "bg-gradient-to-r from-purple-200 via-pink-200 to-white",
  },
  {
    title: "Your Laughter",
    content: `Your laughter is the sweetest melody, the kind that stays in my head and makes my heart dance.`,
    color: "bg-gradient-to-r from-yellow-200 via-pink-200 to-red-200",
  },
  {
    title: "More Than a Dream",
    content: `Sometimes I still wonder if you’re real because you’re everything I’ve ever dreamed of.`,
    color: "bg-gradient-to-r from-pink-200 via-orange-200 to-yellow-100",
  },
  {
    title: "My Guiding Star",
    content: `You’re my star in the dark, my guide when I’m lost, and my peace when the world feels loud.`,
    color: "bg-gradient-to-r from-blue-200 via-teal-200 to-purple-200",
  },
  {
    title: "In Every Moment",
    content: `Every little moment with you feels like a lifetime of happiness that I never want to end.`,
    color: "bg-gradient-to-r from-pink-300 via-purple-200 to-blue-100",
  },
  {
    title: "Your Kindness",
    content: `Your heart is made of gold, and every act of kindness you give makes me fall even deeper.`,
    color: "bg-gradient-to-r from-yellow-300 via-orange-200 to-red-200",
  },
  {
    title: "A Love Song",
    content: `If my love for you was music, it would be the most beautiful song ever written, playing on repeat.`,
    color: "bg-gradient-to-r from-pink-300 via-yellow-200 to-white",
  },
  {
    title: "Home in Your Arms",
    content: `Your arms feel like home, like a place I never want to leave, safe and filled with love.`,
    color: "bg-gradient-to-r from-teal-200 via-blue-100 to-pink-100",
  },
  {
    title: "Always Yours",
    content: `No matter where life takes us, I’ll always be yours. My heart belongs to you—now and forever.`,
    color: "bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200",
  },
];

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/l2", label: "Love" },
  { to: "/poems", label: "Poems" },
  { to: "/soon", label: "Soon" },
];

const L2 = () => {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % letters.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + letters.length) % letters.length);

  // Auto-play every 6s
  useEffect(() => {
    const timer = setTimeout(() => nextSlide(), 6000);
    return () => clearTimeout(timer);
  }, [current]);

  // close mobile menu on route change (optional, if you inject useLocation)
  // useEffect(() => setOpen(false), [location.pathname]);

  const activeLink =
    "text-purple-900 font-semibold underline underline-offset-4";
  const baseLink =
    "px-3 py-2 rounded-md transition hover:text-purple-900 hover:font-medium";

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-gradient-to-r from-pink-200/40 via-purple-200/40 to-pink-300/40 border-b border-white/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent italic">
                Brandy ✨
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? activeLink : "text-gray-700"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>

            {/* Hamburger */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="md:hidden relative w-9 h-9 flex items-center justify-center"
            >
              <span
                className={`absolute h-0.5 w-6 bg-purple-800 transition-transform duration-300 ${
                  open ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-purple-800 transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-purple-800 transition-transform duration-300 ${
                  open ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden ${
            open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white/60 backdrop-blur-xl">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block ${baseLink} ${
                  isActive ? activeLink : "text-gray-700"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="relative w-full max-w-4xl mx-auto mt-24 px-6 pb-16">
        <div
          className={`rounded-3xl shadow-2xl p-10 md:p-16 text-center transition-all duration-700 ${letters[current].color}`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            {letters[current].title}
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-700 whitespace-pre-line">
            {letters[current].content}
          </p>
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white p-3 md:p-4 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white p-3 md:p-4 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {letters.map((_, i) => (
            <div
              key={i}
              className={`w-0.5 h-0.5 rounded-full transition-all ${
                i === current ? "bg-gray-800 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default L2;
