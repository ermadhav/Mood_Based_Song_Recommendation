import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("Turkish");

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <div className="container">
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        <h1>Mood-Based Music Recommender</h1>

        <div className="input-container">
          <input type="text" placeholder="What are you thinking?" />
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="Turkish">Turkish</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        <div className="button-container">
          <button>Get Music</button>
          <button>Get Playlist</button>
        </div>
      </div>
    </div>
  );
};

export default App;
