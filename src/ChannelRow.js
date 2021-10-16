import React from "react";
import "./Channelrow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckedCircle from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({
  channel,
  noOfVideos,
  subs,
  image,
  description,
  verified,
}) {
  return (
    <div className="channelrow">
      <Avatar className="channelrow_logo" src={image} alt="" />
      <div className="channelrow_text">
        <h4>
          {channel} {verified && <CheckedCircle />}
        </h4>
        <p>
          {subs}subscribers.{noOfVideos}videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
