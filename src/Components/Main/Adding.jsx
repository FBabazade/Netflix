import "./Adding.css";
function Adding({ item, myList, setMyList }) {
  const handleAddList = (item) => {
    const findMovie = myList?.find((mov) => mov?.id === item?.id);
    if (!findMovie) {
      setMyList((prev) => [...prev, item]);
    }
  };

  const textPart = (string, e) => {
    return string?.length > e ? string.substr(0, e) + "..." : string;
  };

  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";

  return (
    <div className="d-flex align-items-center add-box">
      <img
        src={`${
          item?.backdrop_path
            ? BASE_URL_IMAGE + item?.backdrop_path
            : "https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002615?referenceScheme=HeadOffice&allowPlaceHolder=true"
        }`}
        alt=""
        style={{ objectFit: "fill", width: "100%", height: "60%" }}
      />
      <div className="icons-set">
        <i id="icons" className="fa-solid fa-circle-play"></i>
        <i
          onClick={() => handleAddList(item)}
          id="icons"
          className="fa-solid fa-circle-plus"
        ></i>
        <i id="icons" className="fa-regular fa-thumbs-up"></i>
      </div>
      <p> {textPart(item?.overview, 100)}</p>
    </div>
  );
}

export default Adding;
