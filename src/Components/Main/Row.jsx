// import React, { useRef, useState } from "react";
import "./Main.css";
import { Swiper, SwiperSlide } from "swiper/react";

function Row({ card, title }) {
  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";


  return (
    <div className="row" >
      <h1>{title}</h1>
      
     
        <div className="row-content"  >

        <Swiper
      slidesPerView={6}
      spaceBetween={30}
    >
      {card?.map((slideContent) => (
        <SwiperSlide key={slideContent?.id} >
      <img src={`${slideContent?.backdrop_path? BASE_URL_IMAGE + slideContent?.backdrop_path:"https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002615?referenceScheme=HeadOffice&allowPlaceHolder=true"}`} alt=""  />
        </SwiperSlide>
      ))}
    </Swiper>
        
        </div>
       
      </div>
    
  );
}

export default Row;
