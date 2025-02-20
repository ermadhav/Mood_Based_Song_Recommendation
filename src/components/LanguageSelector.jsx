import { useState } from "react";

export default function LanguageSelector() {
  const [language, setLanguage] = useState("Turkish");
  const languages = ["English", "Turkish", "Hindi", "Spanish", "French"];

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}
