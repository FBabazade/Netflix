import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Header.css";

function Header() {
  const [movie, setMovie] = useState([]);
  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const fetchData = () => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=77b75897bd6de248789745dbd1270fe7&query=all"
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
      <Navbar />
      <div
        className="banner"
        style={{
          background: `url(${
            movie?.backdrop_path
              ? BASE_URL_IMAGE + movie?.backdrop_path
              : "https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002615?referenceScheme=HeadOffice&allowPlaceHolder=true"
          })`,
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
              <button><i className="fa-solid fa-play"></i> Play</button>
            </div>
            <div className="info-btn">
              <button><i className="fa-solid fa-circle-info"></i> More Info</button>
            </div>
          </div>
        </div>
        <div className="banner-fadeBottom" />
      </div>
    </header>
  );
}

export default Header;
