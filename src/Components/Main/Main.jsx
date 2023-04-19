import Row from "./Row";
import { useEffect, useState } from "react";
import {
  fetchAnime,
  fetchTrending,
  fetchComedy,
  fetchHorror,
  fetchMystery,
  fetchSciFi,
} from "../../service";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Main() {
  const [trending, setTrending] = useState([]);
  const [anime, setAnime] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [horror, setHorror] = useState([]);
  const [mystery, setMystery] = useState([]);
  const [scifi, setSciFi] = useState([]);

  const fetchAllData = async () => {
    const [
      dataAnime,
      dataTrending,
      dataComedy,
      dataHorror,
      dataMystery,
      dataSciFi,
    ] = await Promise.all([
      fetchAnime(),
      fetchTrending(),
      fetchComedy(),
      fetchHorror(),
      fetchMystery(),
      fetchSciFi(),
    ]);
    setTrending(dataTrending);
    setAnime(dataAnime);
    setComedy(dataComedy);
    setHorror(dataHorror);
    setMystery(dataMystery);
    setSciFi(dataSciFi);
  };
  useEffect(() => {
    fetchAllData();
  }, []);
  return (
    <div className="main-rows">
      <Row title="Trending" card={mystery} />
      <Row title="Anime" card={anime} />
      <Row title="Comedy" card={comedy} />
      <Row title="Horror" card={horror} />
      <Row title="Mystery" card={trending} />
      <Row title="Sci-Fi" card={scifi} />
    </div>
  );
}

export default Main;
