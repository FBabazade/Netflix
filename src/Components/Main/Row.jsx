import { useRef, useState } from "react";
import "./Main.css";
import Adding from "./Adding";

function Row({ card, title, setMyList, myList }) {
  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const directionRef = useRef();
  const [slideNum, setSlideNum] = useState(0);

  const [isMoved, setIsMoved] = useState(false);
  const [moved, setMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = directionRef.current.getBoundingClientRect().x - 20;
    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      directionRef.current.style.transform = `translateX(${330 + distance}px)`;
    }
    if (direction === "right" && slideNum < 10) {
      setSlideNum(slideNum + 1);
      directionRef.current.style.transform = `translateX(${-330 + distance}px)`;
    }
  };

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row-contents">
          <i
            id="left-right"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
            className="fa-solid fa-chevron-left"
          ></i>
          <div className="scroll-ref">
            <div className="row-items" ref={directionRef}>
              {card.map((item, index) => (
                <div
                  className="row-content"
                  onMouseEnter={() => setMoved(item?.id)}
                  onMouseLeave={() => setMoved(null)}
                  key={item?.id}
                >
                  <img
                    src={`${
                      item?.backdrop_path
                        ? BASE_URL_IMAGE + item?.backdrop_path
                        : "https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002615?referenceScheme=HeadOffice&allowPlaceHolder=true"
                    }`}
                    alt="movieposter"
                  />
                  {moved === item?.id && (
                    <Adding
                      index={index}
                      item={item}
                      setMyList={setMyList}
                      myList={myList}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <i
            id="left-right"
            onClick={() => handleClick("right")}
            className="fa-solid fa-chevron-right"
          ></i>
        </div>
      </div>
    </>
  );
}

export default Row;
