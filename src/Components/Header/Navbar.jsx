import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../Common/Assets/img/Logonetflix.png";
import user from "../../Common/Assets/img/Netflix-avatar.png";
import { Link, NavLink, Outlet } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navscroll, setNavscroll] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [input, setInput] = useState("");

  window.addEventListener("scroll", function () {
    window.scrollY > 100 ? setNavscroll(true) : setNavscroll(false);
  });
  useEffect(() => {
    scrollToTop();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  const fetchData = (value) => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=77b75897bd6de248789745dbd1270fe7&query=all"
    )
      .then((response) => response.json())
      .then((json) => {
        const results = json?.results?.filter((movie) => {
          return (
            movie?.original_title &&
            movie?.title &&
            movie?.title.toLowerCase().includes(value)
          );
        });
        console.log(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <>
    <div className={`navbar ${navscroll && "navbar-black"} `}>
      <div className="nav-contents">
        <div className="nav-left">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>

          <div onClick={handleClick} className="mobile-menu">
            Browse <i className="fa-solid fa-caret-down"></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink
                onClick={closeMobileMenu}
                activeclassname="activepage"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeMobileMenu} to="/tvshow">
                TV Shows
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={closeMobileMenu} to="/movies">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeMobileMenu} to="/latest">
                Latest
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeMobileMenu} to="/mylist">
                My List
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeMobileMenu} to="/bylanguages">
                Browser by Languages
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="input-wrapper">
            <i
              onClick={handleSearch}
              className="fa-solid fa-magnifying-glass"
            ></i>
            <input
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              className={showSearch ? "input-txt" : "activeInp"}
              type="text"
              placeholder="Titles, people, genres..."
            />
          </div>
          <img
            style={{ marginRight: "5px" }}
            className="user"
            src={user}
            alt="user"
          />
          <i
            style={{ marginLeft: "5px" }}
            className="fa-solid fa-caret-down"
          ></i>
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  );
}

export default Navbar;
