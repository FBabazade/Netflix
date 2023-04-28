
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import Latest from "./pages/Latest";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar/>
      
   <Routes>
    <Route path="/"  element={<Home/>}>
     
    </Route>
    <Route path="/tvshow"  element={<TvShows/>}/>
    <Route path="/movies"  element={<Movies/>}/>
    <Route path="/latest"  element={<Latest/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
