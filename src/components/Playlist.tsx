import React from 'react';

interface PlaylistProps {
  streams: { title: string; url: string }[];
  onSelect: (url: string) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ streams, onSelect }) => {
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <ul>
        {streams.map((stream, index) => (
          <li key={index}>
            <button onClick={() => onSelect(stream.url)}>{stream.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
