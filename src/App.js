import React from 'react';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-gray-800 min-h-screen text-white font-sans">
      <header className="py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          🎤 ParadymShift – Mixtape 2025
        </h1>
        <p className="mt-4 text-lg text-zinc-300 max-w-xl mx-auto">
          Conscious bars. Developer mind. Vegan grind. Tune into the shift.
        </p>
        <a
          href="#music"
          className="inline-block mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold shadow-md transition"
        >
          🎧 Listen Now
        </a>
      </header>

      <main id="music">
        <MusicPlayer />
      </main>

      <footer className="mt-20 py-6 text-center text-zinc-400 text-sm border-t border-zinc-700">
        © {new Date().getFullYear()} ParadymShift | <a href="https://soundcloud.com/paradymshift" className="underline hover:text-orange-400">SoundCloud</a>
      </footer>
    </div>
  );
}

export default App;
