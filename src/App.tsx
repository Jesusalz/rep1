import React, { useState } from 'react';
import IptvPlayer from './components/rep';
import Playlist from './components/Playlist';

const App: React.FC = () => {
  const [currentStream, setCurrentStream] = useState('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');

  const streams = [
    { title: 'Channel 1', url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: 'Channel 2', url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' },
    { title: 'Channel 2', url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' },
    { title: 'Channel 2', url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' },
    { title: 'Channel 2', url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' },
    { title: 'Channel 2', url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' },
  ];

  return (
    <div className="app">
      <h1>Reproductor 1</h1>
      <div className="content">
        <IptvPlayer streamUrl={currentStream} />
        <Playlist streams={streams} onSelect={setCurrentStream} />
      </div>
    </div>
  );
};

export default App;



