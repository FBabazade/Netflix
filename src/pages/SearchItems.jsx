import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

function SearchItems({ navbarSearchValue }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef();
  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const fetchFilterData = async () => {
    setLoading(true);
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${navbarSearchValue}&include_adult=false&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2I3NTg5N2JkNmRlMjQ4Nzg5NzQ1ZGJkMTI3MGZlNyIsInN1YiI6IjYyMTVmODhkNDI4NGVhMDA0MGRmZGVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P0Tny7qd0U9YpU_PEZ7QfNr6bijWVs-CqyBMxH5nlwA",
          },
        }
      );
      res = await res.json();
      setTotalPage(res?.total_pages);
      setFilteredData(res?.results);

      setLoading(false);
    } catch {
      setLoading(false);
      alert("Axtaris melumatlarinin getirilmesi zamani xeta bas verdi");
    }
  };

  const fetchFilterDataPage = async () => {
    setLoading(true);
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${navbarSearchValue}&include_adult=false&language=en-US&page=${currentPage}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2I3NTg5N2JkNmRlMjQ4Nzg5NzQ1ZGJkMTI3MGZlNyIsInN1YiI6IjYyMTVmODhkNDI4NGVhMDA0MGRmZGVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P0Tny7qd0U9YpU_PEZ7QfNr6bijWVs-CqyBMxH5nlwA",
          },
        }
      );
      res = await res.json();
      setTotalPage(res?.total_pages);
      if (filteredData?.length > 0) {
        setFilteredData((prev) => [...prev, ...res?.results]);
      }
      setLoading(false);
    } catch {
      setLoading(false);
      alert("Axtaris melumatlarinin getirilmesi zamani xeta bas verdi");
    }
  };

  useEffect(() => {
    fetchFilterData();
  }, [navbarSearchValue]);

  useEffect(() => {
    fetchFilterDataPage();
  }, [currentPage]);

  const handleScroll = (e) => {
    if (scrollRef.current) {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const bottom = scrollPosition + windowHeight + 200 >= documentHeight;

      if (bottom) {
        if (currentPage <= totalPage && !loading) {
          setCurrentPage(currentPage + 1);
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div style={{ paddingTop: "150px" }} className="row">
      <h2>Results</h2>
      <div
        className="row-contents"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
        ref={scrollRef}
      >
        {filteredData &&
          filteredData?.length > 0 &&
          filteredData?.map((movie) => (
            <div
              key={movie?.id}
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <img
                src={BASE_URL_IMAGE + movie?.poster_path}
                alt="mov"
                width={200}
                height={250}
              />
              <span>{movie?.title?.slice(0, 15)}</span>
            </div>
          ))}
        {loading && <h1>LOADING.......</h1>}
      </div>
    </div>
  );
}

export default SearchItems;
