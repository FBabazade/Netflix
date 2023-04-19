export const fetchTrending = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=77b75897bd6de248789745dbd1270fe7&query=horror`
    );
    res = await res.json();

    return res.results;
  };

  export  const fetchAnime = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=77b75897bd6de248789745dbd1270fe7&query=anime`
    );
    res = await res.json();
    return res.results;
  };
  export  const fetchComedy = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=77b75897bd6de248789745dbd1270fe7&query=comedy`
    );
    res = await res.json();
    return res.results;
  };
  export  const fetchHorror = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=77b75897bd6de248789745dbd1270fe7&query=crime`
    );
    res = await res.json();
    return res.results;
  };
  export  const fetchMystery = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=77b75897bd6de248789745dbd1270fe7&query=mystery`
    );
    res = await res.json();
    return res.results;
  };
  export  const fetchSciFi = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=77b75897bd6de248789745dbd1270fe7&query=sci-fi`
    );
    res = await res.json();
    return res.results;
  };