
import "./Pages.css"

function MyList({ card }) {
  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";
  const data = JSON.parse(window.localStorage.getItem("mylist"));

const getItemsLocalStorage= ()=>{
  const data=localStorage.getItem('mylist')
  return data? JSON.parse(data):[];
}

  const handleRemove=(id)=>{
   const items= getItemsLocalStorage()
   const updateItems=items.filter((item)=>item.id!==id)
   localStorage.setItem("items",JSON.stringify(updateItems))
}
  
  return (
    <>
      <div style={{padding: "150px 0" }} className="row">
        <h2>My list</h2>
        <div className="mylist-contents">
          {data?.map((item) => ( 
            <div key={item.id} className="content" >
            <img 
              src={`${
                item?.backdrop_path
                  ? BASE_URL_IMAGE + item?.backdrop_path
                  : "https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002615?referenceScheme=HeadOffice&allowPlaceHolder=true"
              }`}
              alt="movieposter"
            />
            
            <h1>{item.original_title}</h1>
            <button onClick={()=>handleRemove(item.id)}>remove from  mylist</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyList;
