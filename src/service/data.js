export const fetchTrending = async () => {
  let res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&with_genres=${28}`
  );
  res = await res.json();
  return res.results;
};

export const fetchAnime = async () => {
  let res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&with_genres=${16}`
  );
  res = await res.json();
  return res.results;
};
export const fetchComedy = async () => {
  let res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&with_genres=${35}`
  );
  res = await res.json();
  return res.results;
};
export const fetchHorror = async () => {
  let res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&with_genres=${80}`
  );
  res = await res.json();
  return res.results;
};
export const fetchMystery = async () => {
  let res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&with_genres=${9648}`
  );
  res = await res.json();
  return res.results;
};
export const fetchSciFi = async () => {
  let res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&with_genres=${878}`
  );
  res = await res.json();
  return res.results;
};
