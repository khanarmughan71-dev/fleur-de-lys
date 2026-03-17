import { useEffect, useState } from "react";

export default function Preloader({ logo }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 800); // fade out delay
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-[#0b0b0b] flex justify-center items-center z-50 transition-opacity duration-500">
      <img
        src={logo}
        alt="Logo"
        className="w-50 h-50 animate-pulse"
      />
    </div>
  );
}