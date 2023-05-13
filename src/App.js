import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import Latest from "./pages/Latest";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import MyList from "./pages/MyList";
import Layout from "./pages/Layout";
import SearchItems from "./pages/SearchItems";
import Error404 from "./pages/Error404";
import { useState } from "react";

function App() {
  const [navbarSearchValue, setNavbarSearchValue] = useState("");
  return (
    <div className="app">
      <Navbar setNavbarSearchValue={setNavbarSearchValue} />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route
            path="searchresults"
            element={<SearchItems navbarSearchValue={navbarSearchValue} />}
          />
        </Route>
        <Route path="/tvshow" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
