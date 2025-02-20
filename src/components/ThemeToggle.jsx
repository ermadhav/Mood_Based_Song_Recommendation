import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-5 right-5 px-4 py-2 rounded-md text-white bg-[#3c3c3c] border border-[#505050] hover:bg-[#505050] transition duration-200"
    >
      {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
