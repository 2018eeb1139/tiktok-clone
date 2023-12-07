import "./App.css";
import Video from "./Video";
import talent from "./talent.mp4";
import Videos from "./Video";
import React, { useState, useEffect } from "react";
import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "videos"), (snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
