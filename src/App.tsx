import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthRequestAction } from "./store/reducers/slices/auth.spotify";
import { useSelector } from "react-redux";
import SpotifySearchService from "./services/spotify/search.spotify";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SearchSection from "./ui/search/search";
import ViewSong from "./ui/song/view";
import AudioPlayer from "./ui/song/now.playing";
import { Routes, Route } from "react-router-dom";
import WebPlayback from "./ui/song/temp";
import ViewAlbum from "./ui/album/view.album";
import ScrollToTop from "./utils/scroll.top";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthRequestAction());
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<SearchSection />} />
        <Route path="/playlist/:id" element={<ViewSong />} />
        <Route path="/webplayback" element={<WebPlayback />} />
        <Route path="/albums/:id" element={<ViewAlbum />} />
      </Routes>
    </div>
  );
};

export default App;
