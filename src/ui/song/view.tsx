import { Button } from "@mui/material";
import "./view.scss";
import AudioPlayer from "./now.playing";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SpotifyAlbumService from "../../services/spotify/album.spotify";
import im from "./../../assets/search-bg.jpg";

const ViewSong = () => {
  const [info, setInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const token = useSelector(
    (state: any) => state.getspotifyauth?.data?.access_token
  );
  useEffect(() => {
    const handleTrackInfo = async () => {
      setLoading(true);
      try {
        const res = await SpotifyAlbumService.track(id, token);
        setInfo(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    handleTrackInfo();
  }, []);
  return (
    <>
      <div
        className="background"
        style={{
          background: `url(${
            loading ? im : info?.album?.images[0]?.url
          } ) top/cover`,
        }}
      />
      <section>
        <div className="album-info">
          <div className="album-art">
            <img src={loading ? im : info?.album?.images[0]?.url} />
            <div className="actions">
              <Button className="play">Play</Button>
              <Button className="bookmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#faa800"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </Button>
            </div>
          </div>
          <AudioPlayer data={info} loading={loading} />
        </div>
      </section>
    </>
  );
};

export default ViewSong;
