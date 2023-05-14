import Row from "./Row";
import { useEffect, useState } from "react";
import {
  fetchAnime,
  fetchTrending,
  fetchComedy,
  fetchHorror,
  fetchMystery,
  fetchSciFi,
} from "../../service/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Main() {
  const [trending, setTrending] = useState([]);
  const [anime, setAnime] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [horror, setHorror] = useState([]);
  const [mystery, setMystery] = useState([]);
  const [scifi, setSciFi] = useState([]);
  const [myList, setMyList] = useState([]);
  const intialMyList = JSON.parse(window.localStorage.getItem("mylist"));

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
    intialMyList && setMyList(intialMyList);
  },[]);

  useEffect(() => {
    window.localStorage.setItem("mylist", JSON.stringify(myList));
  }, [myList]);

  
  return (
    <div className="main-rows">
      <Row title="Trending" card={mystery} setMyList={setMyList} myList={myList}/>
      <Row title="Anime" card={anime} setMyList={setMyList} myList={myList} />
      <Row title="Comedy" card={comedy} setMyList={setMyList} myList={myList} />
      <Row title="Horror" card={horror} setMyList={setMyList} myList={myList} />
      <Row title="Mystery" card={trending} setMyList={setMyList}  myList={myList}/>
      <Row title="Sci-Fi" card={scifi} setMyList={setMyList} myList={myList} />
    </div>
  );
}

export default Main;