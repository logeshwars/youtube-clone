import React from "react";
import "./Sidebar.css";
import SideRow from "./SideRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
import VideoLibrarySharpIcon from "@material-ui/icons/VideoLibrarySharp";
import HistorySharpIcon from "@material-ui/icons/HistorySharp";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ShowMore from "@material-ui/icons/ExpandMore";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <SideRow title="Home" selected Icon={HomeIcon} />
        <SideRow title="Explore" Icon={ExploreIcon} />
        <SideRow title="Subscribtions" Icon={SubscriptionsSharpIcon} />
        <hr />
        <SideRow title="Library" Icon={VideoLibrarySharpIcon} />
        <SideRow title="History" Icon={HistorySharpIcon} />
        <SideRow title="Your Videos" Icon={OndemandVideoIcon} />
        <SideRow title="Watch Later" Icon={WatchLaterIcon} />
        <SideRow title="Liked Videos" Icon={ThumbUpIcon} />
        <SideRow title="Show More" Icon={ShowMore} />
        <hr />
        <SideRow title="Library" Icon={VideoLibrarySharpIcon} />
        <SideRow title="History" Icon={HistorySharpIcon} />
        <SideRow title="Your Videos" Icon={OndemandVideoIcon} />
        <SideRow title="Watch Later" Icon={WatchLaterIcon} />
        <SideRow title="Liked Videos" Icon={ThumbUpIcon} />
        <SideRow title="Show More" Icon={ShowMore} />
        <hr />
        <SideRow title="Library" Icon={VideoLibrarySharpIcon} />
        <SideRow title="History" Icon={HistorySharpIcon} />
        <SideRow title="Your Videos" Icon={OndemandVideoIcon} />
        <SideRow title="Watch Later" Icon={WatchLaterIcon} />
        <SideRow title="Liked Videos" Icon={ThumbUpIcon} />
        <SideRow title="Show More" Icon={ShowMore} />
        <hr />
      </div>
    </div>
  );
}

export default SideBar;
