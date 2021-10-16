import { Avatar } from "@material-ui/core";
import React from "react";
import "./Videocard.css";

function VideoCard({ image, title, channel, views, timestamp, channelimage }) {
  return (
    <div className="videocard">
      <img src={image} alt="" />
      <div className="videocard_info">
        <Avatar className="videocard_avatar" alt={channel} src={channelimage} />
        <div className="video_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views}.{timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
