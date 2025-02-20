export default function MusicButtons() {
    return (
      <div className="mt-6 flex space-x-4">
        <button className="bg-blue-600 px-5 py-2 text-white rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
          🎵 Get Music
        </button>
        <button className="bg-green-600 px-5 py-2 text-white rounded-lg shadow-lg hover:bg-green-500 transition duration-300">
          📜 Get Playlist
        </button>
      </div>
    );
  }
  