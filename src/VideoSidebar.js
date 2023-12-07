import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videosideBar__button">
        {liked ? (
          <FavoriteIcon onClick={(e) => setLiked(false)} color="red" />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? parseInt(likes) + 1 : likes}</p>
      </div>
      <div className="videosideBar__button">
        <MessageIcon />
        <p>{messages}</p>
      </div>
      <div className="videosideBar__button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
