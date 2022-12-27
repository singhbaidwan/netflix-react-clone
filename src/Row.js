import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
// rfce
import movieTrailer from "movie-trailer";
const base_image_url = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  function handleonClick(movie) {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }
  console.log(isLargeRow);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row--posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleonClick(movie)}
              className={`row--poster ${isLargeRow && "row--posterLarge"}`}
              src={`${base_image_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
