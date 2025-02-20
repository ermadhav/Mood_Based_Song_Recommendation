import { useState } from "react";

export default function LanguageSelector() {
  const [language, setLanguage] = useState("Turkish");
  const languages = ["English", "Turkish", "Hindi", "Spanish", "French"];

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-[#3c3c3c] text-white px-4 py-2 rounded-md border border-[#505050] hover:bg-[#505050] transition duration-200"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}
