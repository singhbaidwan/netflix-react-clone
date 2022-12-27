import React, { useEffect, useState } from "react";
import axios from "./axios.js";
import requests from "./requests.js";
import "./Banner.css";

const base_image_url = "https://image.tmdb.org/t/p/original";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_image_url}/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner--contents">
        <h1 className="banner--title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* The below statement is called emmet shortcuts */}
        {/* div.banner--buttons>button.banner--button*2 */}
        <div className="banner--buttons">
          <button className="banner--button">Play</button>
          <button className="banner--button">My List</button>
        </div>
        <h1 className="banner--description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
