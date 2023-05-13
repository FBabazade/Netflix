import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [movie, setMovie] = useState([]);
  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const fetchData = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&with_genres=all"
    )
      .then((response) => response.json())
      .then((movie) => {
        const rand = Math.trunc(Math.random() * 10);
        setMovie(movie.results[rand]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const textPart = (string, e) => {
    return string?.length > e ? string.substr(0, e) + "..." : string;
  };
  return (
    <header>
      <div
        className="banner"
        style={{
          background: `url(${BASE_URL_IMAGE + movie?.backdrop_path})`,
        }}
      >
        <div className="banner-fadeBottom2" />
        <div className="banner-contents">
          <h1 className="banner-title">{movie?.original_title}</h1>
          <h1 className="banner-description">
            {textPart(movie?.overview, 150)}
          </h1>
          <div className="banner-button">
            <div className="play-btn">
              <button>
                <i className="fa-solid fa-play"></i> Play
              </button>
            </div>
            <div className="info-btn">
              <button>
                <i className="fa-solid fa-circle-info"></i> More Info
              </button>
            </div>
          </div>
        </div>
        <div className="banner-fadeBottom" />
      </div>
    </header>
  );
}

export default Header;
