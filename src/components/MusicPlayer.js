import React from 'react';

const MusicPlayer = () => {
  return (
    <section className="max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">🎧 Listen to ParadymShift</h2>
      <div className="rounded-xl overflow-hidden shadow-2xl border border-zinc-700">
        <iframe 
          width="100%" 
          height="450" 
          scrolling="no" 
          frameBorder="no" 
          allow="autoplay" 
          title="ParadymShift SoundCloud Player"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/paradymshift&color=%2319191d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
      </div>
    </section>
  );
};

export default MusicPlayer;
