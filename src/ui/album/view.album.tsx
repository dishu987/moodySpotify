import React, { useEffect, useState } from "react";
import "./../song/now.playing.css";
import "./../song/view.scss";
import "./../search/search.css";
import { Avatar, Button, Chip } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import SpotifyAlbumService from "../../services/spotify/album.spotify";
import { useSelector } from "react-redux";
import { convertDuration } from "../../utils/duration";

const ViewAlbum: React.FC = () => {
  const { id } = useParams();
  const token = useSelector(
    (state: any) => state.getspotifyauth?.data?.access_token
  );
  const [info, setInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleAlbumInfo = async () => {
      setLoading(true);
      try {
        const res = await SpotifyAlbumService.get(id, token);
        setInfo(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    handleAlbumInfo();
  }, []);
  return (
    <>
      <div
        className="background"
        style={{
          background: `url(${info?.images[0]?.url}) top/cover`,
        }}
      />
      <section>
        <div className="album-info">
          <div className="album-art">
            <img
              src={
                loading
                  ? "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  : info?.images[0]?.url
              }
            />
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
          <div className="column add-bottom">
            <div id="mainwrap">
              <div className="album-details">
                <h2>
                  {" "}
                  <img src="https://68.media.tumblr.com/avatar_edbd71e8c8ac_128.png" />
                  {info?.album_type}
                </h2>
                <h1>
                  {" "}
                  {info?.name}{" "}
                  <Chip color="error" size="small" label={info?.label} />
                </h1>
                <span>
                  {" "}
                  <span>{info?.type} </span>
                  <span>
                    {info?.copyrights?.map((c: any) => {
                      return `${c?.type}-${c?.text},`;
                    })}
                  </span>
                </span>
                <p>
                  {info?.genres?.map((g: any) => {
                    return JSON.stringify(g);
                  })}
                </p>
              </div>
              <br />
              <div className="mainwrap">
                <h2>Artists :</h2>{" "}
                {info?.artists?.map((artist: any, i: number) => {
                  return (
                    <Link to={`/artist/${artist?.id}`}>
                      <Chip
                        key={i}
                        size="small"
                        avatar={<Avatar>{artist?.name[0]}</Avatar>}
                        label={artist?.name}
                        style={{ background: "#fff", marginRight: "5px" }}
                      />
                    </Link>
                  );
                })}
              </div>
              <div className="mainwrap">
                {info?.genres?.length > 0 && <h2>Genres :</h2>}
                {info?.genres?.map((g: any, i: number) => {
                  return (
                    <Chip
                      key={i}
                      size="small"
                      avatar={<Avatar>{JSON.stringify(g)[0]}</Avatar>}
                      label={JSON.stringify(g)}
                      style={{ background: "#fff", marginRight: "5px" }}
                    />
                  );
                })}
              </div>
              <div className="mainwrap">
                <h2>{info?.tracks?.total} Songs</h2>
              </div>
              <input
                className="search-container_search"
                type="text"
                name="search-bar"
                id="search"
                placeholder="Search..."
              />
              <div className="album-tracks">
                <ol id="plList">
                  {info?.tracks?.items?.map((track: any, i: number) => {
                    return (
                      <Link to={`/playlist/${track.id}`} key={i}>
                        <li>
                          {" "}
                          <span> {track.name}</span>
                          <span>{convertDuration(track?.duration_ms)}</span>
                        </li>
                      </Link>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewAlbum;
