import "./search.css";

import { Link } from "react-router-dom";
import SpotifySearchService from "../../services/spotify/search.spotify";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AlbumCard from "../shared/card.album";
import ArtistCard from "../shared/card.artist";
import { LinearProgress, Skeleton } from "@mui/material";

export default function SearchSection() {
  const token = useSelector(
    (state: any) => state.getspotifyauth?.data?.access_token
  );
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [q, setq] = useState("Shreya Ghoshal");
  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await SpotifySearchService.search(q, token);
      console.log(res);
      setResults(res.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <>
      <div className="background" />
      <section>
        <div className="album-details">
          <h1 className="gradient_text">moodySpotify</h1>
        </div>
        <input
          className="search-container_search1"
          type="text"
          name="search-bar"
          id="search"
          onChange={(e) => setq(e.target.value)}
          placeholder="Search By Track, Album. Artist, Audiobook etc..."
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleSearch();
            }
          }}
        />
        {loading && <LinearProgress />}

        {!loading && (
          <>
            <div className="album-details">
              <h2 style={{ fontSize: "2rem" }}>#Tracks</h2>
            </div>
            <div className="album-tracks">
              <ol id="plList">
                {results &&
                  results?.tracks?.items?.map((track: any, i: number) => {
                    return (
                      <li key={i}>
                        {loading && <Skeleton />}
                        {!loading && (
                          <>
                            <span>
                              {" "}
                              <Link to={`/playlist/${track?.id}`}>
                                {" "}
                                {track.name}
                              </Link>
                              <br />
                            </span>
                            <span>
                              {" "}
                              <small>
                                {track?.artists?.map(
                                  (artist: any, index: number) => {
                                    return `${artist.name} ${
                                      track?.artists?.length !== index + 1 &&
                                      "|"
                                    } `;
                                  }
                                )}
                              </small>
                            </span>
                          </>
                        )}
                      </li>
                    );
                  })}
              </ol>
            </div>
            <div className="album-details">
              <h2 style={{ fontSize: "2rem" }}>#Albums</h2>
            </div>
            <div
              className="album-tracks"
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {results &&
                results?.albums?.items?.map((album: any, i: number) => {
                  return <AlbumCard album={album} />;
                })}
            </div>
            <div className="album-details">
              <h2 style={{ fontSize: "2rem" }}>#Artists</h2>
            </div>
            <div
              className="album-tracks"
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {results &&
                results?.artists?.items?.map((artist: any, i: number) => {
                  return <ArtistCard artist={artist} />;
                })}
            </div>
          </>
        )}
      </section>
    </>
  );
}
