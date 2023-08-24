import React from "react";
import "./now.playing.css";
import "./view.scss";
import "./../search/search.css";
import { convertDuration } from "../../utils/duration";
import { Link } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";

const AudioPlayer: React.FC = ({ data, loading }: any) => {
  const handleShare = (url: string) => {
    if (navigator.share) {
      const shareData = {
        title: "Shared Link",
        text: "Open Spotify",
        url: url,
      };
      navigator
        .share(shareData)
        .then(() => {
          console.log("Shared successfully");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      console.log("Web Share API not available");
    }
  };
  return (
    <div className="column add-bottom">
      <div id="mainwrap">
        <div className="album-details">
          <h2>
            {" "}
            <img
              src={
                loading
                  ? "https://68.media.tumblr.com/avatar_edbd71e8c8ac_128.png"
                  : data?.album?.images[0]?.url
              }
            />
            {data?.name}{" "}
          </h2>
          <h1>{data?.name}</h1>
          <span>
            {" "}
            <span>{convertDuration(data?.duration_ms)} </span>
          </span>
          <p>
            <Link
              to="#"
              onClick={() => handleShare(data?.external_urls?.spotify)}
              target="_blank"
            >
              <ShareIcon />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
