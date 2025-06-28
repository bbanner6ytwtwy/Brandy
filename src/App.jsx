import { useState } from "react";
import Home from "./pages/Home"; // ✅ This assumes you have a file at: src/pages/Home.jsx

// Passcode generator function
function getCurrentPasscode() {
  const baseYear = 2025;
  const offset = new Date().getFullYear() - baseYear;
  const firstTwo = 15 + offset;
  const lastTwo = 21 + offset;
  return `${firstTwo}${lastTwo}`;
}

// Toast notification
function Toast({ message, isError }) {
  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-xl text-white font-semibold z-[9999] transition-all duration-500
        ${isError ? "bg-gradient-to-r from-red-500 to-red-700" : "bg-gradient-to-r from-purple-500 to-pink-500"}
      `}
    >
      {message}
    </div>
  );
}

// Splash screen login
function SplashScreen({ onAccessGranted }) {
  const [input, setInput] = useState(["", "", "", ""]);
  const [toast, setToast] = useState({ show: false, message: "", isError: false });
  const passcode = getCurrentPasscode();

  const showToast = (msg, isError = false) => {
    setToast({ show: true, message: msg, isError });
    setTimeout(() => setToast({ show: false, message: "", isError: false }), 3000);
  };

  const handleChange = (index, direction) => {
    setInput(prev => {
      const newVal = [...prev];
      let current = parseInt(newVal[index] || 0);
      current = (current + (direction === "up" ? 1 : 9)) % 10;
      newVal[index] = String(current);
      return newVal;
    });
  };

  const handleSubmit = () => {
    const entered = input.join("");
    if (entered === passcode) {
      showToast("Welcome Brandy 💖", false);
      setTimeout(() => onAccessGranted(), 1000);
    } else {
      showToast("Fuck off intruder, you're n0t brandy", true);
    }
  };

  return (
    <div className="fixed bg-[rgba(255,255,255,0.95)] inset-0 w-full h-full flex flex-col items-center justify-center z-50">
      {toast.show && <Toast message={toast.message} isError={toast.isError} />}

      <h1 className="text-4xl lg:text-6xl font-bold text-black text-center mb-10">
        Welcome Brandy. 💖
      </h1>

      <div className="flex space-x-4">
        {input.map((num, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center neumorphic rounded-xl p-4 bg-white shadow-inner"
          >
            <button
              onClick={() => handleChange(index, "up")}
              className="text-purple-700 text-2xl font-bold hover:scale-110 transition"
            >
              ▲
            </button>
            <div className="text-3xl font-semibold text-black py-2 min-w-[2rem] text-center">
              {num || "0"}
            </div>
            <button
              onClick={() => handleChange(index, "down")}
              className="text-purple-700 text-2xl font-bold hover:scale-110 transition"
            >
              ▼
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-8 px-6 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition"
      >
        Enter
      </button>
    </div>
  );
}

// Main app content
function App() {
  const [accessGranted, setAccessGranted] = useState(false);

  return (
    <>
      {!accessGranted && <SplashScreen onAccessGranted={() => setAccessGranted(true)} />}
      {accessGranted && <Home />}
    </>
  );
}

export default App;
