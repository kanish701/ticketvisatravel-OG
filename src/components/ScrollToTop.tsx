import React, { useState, useEffect } from "react";
import { Rocket } from "lucide-react";

const RocketScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-indigo-600 text-white rounded-full shadow-2xl transition-all duration-500 transform hover:bg-indigo-700
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
      group
      `}
    >
      <div className="group-hover:animate-bounce">
        <Rocket size={24} className="group-hover:-rotate-45 transition-transform duration-300" />
      </div>
    </button>
  );
};

export default RocketScroll;