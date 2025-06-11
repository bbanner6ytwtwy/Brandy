import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import AffirmationOfTheDay from "./components/AffirmationofTheDay";
import EvilWomenSlider from "./components/EvilwomenSlider";
import GrowingHerMind from "./components/GrowingHerMind";
import FooterBrandy from "./components/FooterBrandy";
function SplashScreen() {
  return (
    <div className="fixed bg-[rgba(255, 255, 255, 0.9)] hero-section inset-0 w-[100%] h-[100vh] flex items-center justify-center z-50">
      <h1 className="text-4xl lg:text-7xl lq font-bold text-black text-center ">
        Welcome Brandy. 💖
      </h1>
    </div>
  );
}

function MainContent() {
  return (
    <> 
    <div className="overflow-hidden">
      <Hero />
      <AffirmationOfTheDay />
      <EvilWomenSlider />
      <GrowingHerMind />
      <FooterBrandy />
    </div>
    </>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 8000); // 8 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      {!showSplash && <MainContent />}
    </>
  );
}
