import React, { useState, useEffect } from "react";
import "./now.playing.css";
import RapidAPISearchService from "../../services/rapidapi/get.song";
import "./player.scss";
import Plyr from "plyr";
import { LinearProgress } from "@mui/material";

const WebPlayback = ({ current_track }: any) => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(null);
  const player = new Plyr("#player");
  const handleGetSong = async () => {
    setLoading(true);
    try {
      const res = await RapidAPISearchService.song(
        current_track?.replace(/\([^)]+\)/g, "")
      );
      console.log(res.data);
      if (res.data?.data) {
        setPreview(res.data?.data[0]?.preview);
      } else {
        console.log("not found");
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    (window as any).player = player;
    console.log(current_track);
    handleGetSong();
  }, []);

  return (
    <div className="container">
      <div className="main-wrapper">
        {/* {!loading && (
          <video controls autoPlay onPlay={() => setPlaying(true)}>
            <source src={preview as any} type="audio/mpeg" />
          </video>
        )} */}
        {loading && (
          <LinearProgress color="inherit" style={{ marginTop: "20px" }} />
        )}
        {!loading && (
          <div className="container">
            <audio autoPlay playsInline crossOrigin="" id="player">
              <source src={preview as any} type="audio/mp3" />
              <source src={preview as any} type="audio/ogg" />
            </audio>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebPlayback;
