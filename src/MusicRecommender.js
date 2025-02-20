import React, { useState } from 'react';

const MusicRecommender = () => {
    const [thoughts, setThoughts] = useState('');
    const [language, setLanguage] = useState('Turkish');

    const handleGetMusic = () => {
        console.log(`Getting music for: ${thoughts} in ${language}`);
    };

    const handleGetPlaylist = () => {
        console.log(`Getting playlist for: ${thoughts} in ${language}`);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Mood-Based Music Recommender</h1>
            <input
                type="text"
                placeholder="What are you thinking?"
                value={thoughts}
                onChange={(e) => setThoughts(e.target.value)}
                style={styles.input}
            />
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={styles.select}
            >
                <option value="Turkish">Turkish</option>
                {/* More languages can be added here */}
            </select>
            <div style={styles.buttonContainer}>
                <button onClick={handleGetMusic} style={styles.button}>Get Music</button>
                <button onClick={handleGetPlaylist} style={styles.button}>Get Playlist</button>
            </div>
        </div>
    );
};

const styles = {
    // styles omitted for brevity; use the previous example
};

export default MusicRecommender;