import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import "./Video.css";
import VideoSidebar from "./VideoSidebar";

const Videos = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        ref={videoRef}
        className="video__player"
        loop
        src={url}
        onClick={onVideoPress}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Videos;
