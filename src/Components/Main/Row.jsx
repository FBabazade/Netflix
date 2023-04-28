import { useRef } from "react";
import "./Main.css";

function Row({ card, title }) {
  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";
const directionRef=useRef()
  const handleClick=(direction)=>{
    let distance=directionRef.current.getBoundingClientRect().x-20
if(direction==="left"){
directionRef.current.style.transform=`translateX(${330+distance}px)`
}
if(direction==="right"){
  directionRef.current.style.transform=`translateX(${-330+distance}px)`
  }
  console.log(distance);
  }
  return (
  
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row-contents">
        <i onClick={()=>handleClick("left")} className="fa-solid fa-chevron-left"></i>
        <div className="scroll-ref">
        <div className="row-items"  ref={directionRef} >
        {card?.map((item) => (
         <div  className="row-content" >
            <img
            key={item?.id}
              src={`${
                item?.backdrop_path
                  ? BASE_URL_IMAGE + item?.backdrop_path
                  : "https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002615?referenceScheme=HeadOffice&allowPlaceHolder=true"
              }`}
              alt="movieposter"
            />
          </div>
        ))}
        </div>
        </div>
        <i onClick={()=>handleClick("right")} className="fa-solid fa-chevron-right"></i>
        </div>

      </div>
    </>
  );
}

export default Row;











  // <div className="row" >
    //   <h1>{title}</h1>

    //     <div className="row-content"  >

    //     <Swiper
    //   slidesPerView={6}
    //   spaceBetween={30}
    // >
    //   {card?.map((slideContent) => (
    //     <SwiperSlide key={slideContent?.id} >
    //       <div className="img-container">
    //   <img src={`${slideContent?.backdrop_path? BASE_URL_IMAGE + slideContent?.backdrop_path:"https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002615?referenceScheme=HeadOffice&allowPlaceHolder=true"}`} alt=""  />
    //    <div className="icons-info">
    //     ssssssssss
    //    </div>
    //    </div>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>

    //     </div>

    //   </div>