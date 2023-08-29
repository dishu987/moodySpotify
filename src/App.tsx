import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthRequestAction } from "./store/reducers/slices/auth.spotify";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SearchSection from "./ui/search/search";
import ViewSong from "./ui/song/view";
import { Routes, Route } from "react-router-dom";
import WebPlayback from "./ui/song/player";
import ViewAlbum from "./ui/album/view.album";
import ScrollToTop from "./utils/scroll.top";
import axios from "axios";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthRequestAction());
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const background = (document as any).querySelector(".background");
      if (background) {
        background.styles.backgroundPositionY = -scrollY + "rem"; // Adjust the multiplier for desired parallax speed
      }
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
                import.meta.env.VITE_OPENWEATHER_KEY
              }`
            )
            .then((response: any) => {
              console.log(response.data);
            })
            .catch((error: any) => {
              console.error("Error fetching weather data:", error);
            });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
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
