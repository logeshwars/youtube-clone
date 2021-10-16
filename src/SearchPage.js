import React from "react";
import "./Searchpage.css";
import Filter from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchpage">
      <div className="searchpage_filter">
        <Filter />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnjnqyIeME1VolscSyhZsDbUdB3o4YOw9RI79PZV2g=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Plip Plip"
        verified
        subs="100K"
        noOfVideos={433}
        description="Tamil movie reviews, political trolls, adult comedy is what we do. In simple, a channel run by the adults, for the adults."
      />
      <hr />
      <VideoRow
        image="https://i.ytimg.com/an_webp/bS586Evaf1Q/mqdefault_6s.webp?du=3000&sqp=CPjqj4UG&rs=AOn4CLDqpSE3fLDc5Ugb36oiDF1miB5opw"
        channel="Plip Plip"
        subs="100K"
        views="3M"
        timestamp="3 years ago"
        title="Let's Build a Youtube clone"
        description="Tamil movie reviews, political trolls, adult comedy is what we do. In simple, a channel run by the adults, for the adults."
      />
    </div>
  );
}

export default SearchPage;
