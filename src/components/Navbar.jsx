// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ links, onProtectedClick }) => {
  const [navOpen, setNavOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-pink-200/30 via-purple-200/30 to-pink-300/30 border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl sm:text-3xl font-bold text-purple-800 italic tracking-wider">
            Brandy ✨
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {links.map(({ label, protected: isProtected }) => (
              <a
                key={label}
                href={`/${label.toLowerCase()}`}
                onClick={(e) => {
                  if (isProtected) {
                    e.preventDefault();
                    onProtectedClick(label);
                  }
                }}
                className="text-purple-800 hover:text-rose-600 transition duration-300 font-medium relative group"
              >
                {label}
                <span className="block h-[2px] bg-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-purple-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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

      {/* Mobile Links */}
      {navOpen && (
        <div className="md:hidden bg-pink-50/60 backdrop-blur-xl">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {links.map(({ label, protected: isProtected }) => (
              <a
                key={label}
                href={`/${label.toLowerCase()}`}
                onClick={(e) => {
                  setNavOpen(false);
                  if (isProtected) {
                    e.preventDefault();
                    onProtectedClick(label);
                  }
                }}
                className="block text-purple-800 hover:text-rose-600 transition duration-300 font-medium"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
