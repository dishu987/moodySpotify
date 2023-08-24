import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const tc = useLocation();
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use smooth scrolling behavior
    });
  }, [tc.pathname]); // Empty dependency array ensures this effect runs only once when the component mounts

  return null; // This component doesn't render any visible content
}

export default ScrollToTop;
