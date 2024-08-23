import React from 'react';
import IptvPlayer from './components/rep';

const App: React.FC = () => {
  const streamUrl = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'; 

  return (
    <div>
      <h1>Reproductor 1</h1>
      <IptvPlayer streamUrl={streamUrl} />
    </div>
  );
};

export default App;

