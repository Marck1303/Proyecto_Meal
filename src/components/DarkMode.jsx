import { useEffect, useState } from "react";

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setIsDark(true);
    } else {
      document.body.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  return (
    <button
      id="darkmode"
      className="flex justify-end p-2 md:px-15"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      <svg
        viewBox="0 0 24 24"
        width="50"
        height="50"
        fill="none"
        onClick={toggleTheme}
      >
        <path
          className={`moon-icon ${isDark ? "hidden" : "block"}`}
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          fill="##7d20e4"
          stroke="#7d20e4"
        />

        <g
          className={`sun-icon ${isDark ? "block" : "hidden"}`}
          stroke="#f97316"
        >
          1
          <circle cx="12" cy="12" r="4.5" fill="#f97316" strokeWidth="1.5" />
          <g strokeWidth="1.5" strokeLinecap="round">
            <line x1="12" y1="3" x2="12" y2="1" />
            <line x1="12" y1="23" x2="12" y2="21" />
            <line x1="5.64" y1="5.64" x2="4.22" y2="4.22" />
            <line x1="19.78" y1="19.78" x2="18.36" y2="18.36" />
            <line x1="3" y1="12" x2="1" y2="12" />
            <line x1="23" y1="12" x2="21" y2="12" />
            <line x1="5.64" y1="18.36" x2="4.22" y2="19.78" />
            <line x1="19.78" y1="4.22" x2="18.36" y2="5.64" />

            <line x1="8.49" y1="8.49" x2="6.36" y2="6.36" />
            <line x1="17.51" y1="17.51" x2="19.64" y2="19.64" />
            <line x1="8.49" y1="15.51" x2="6.36" y2="17.64" />
            <line x1="15.51" y1="8.49" x2="17.64" y2="6.36" />
          </g>
        </g>
      </svg>
    </button>
  );
}
