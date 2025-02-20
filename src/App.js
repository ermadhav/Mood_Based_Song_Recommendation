import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <h1>Mood-Based Music Recommender</h1>
      <h2>Find music based on your mood</h2>

      <div className="input-container">
        <input type="text" placeholder="What are you thinking?" />
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="Turkish">Turkish</option>
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button className="get-music">Get Music</button>
        <button className="get-playlist" style={{ marginLeft: "10px" }}>
          Get Playlist
        </button>
      </div>

      <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default App;
