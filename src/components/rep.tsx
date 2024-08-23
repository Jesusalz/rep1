import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface IptvPlayerProps {
  streamUrl: string;
}

const IptvPlayer: React.FC<IptvPlayerProps> = ({ streamUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = streamUrl;
      }
    }
  }, [streamUrl]);

  return <video ref={videoRef} controls />;
};

export default IptvPlayer;
