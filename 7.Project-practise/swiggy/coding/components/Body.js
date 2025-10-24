import { useState, useEffect } from "react";
import {SWIGGY_API_URL , CLOUDINARY_BASE_URL} from '../utility/values';

const Search = () =>{
  return (
    <div className="p-2">
      <input
        type="text"
        id="name"
        className="border-2 rounded px-2 py-1 w-64"
        placeholder="Search restaurants..."
        
      />
    </div>
  )
};



const Restcard = () => {
  const [carddata, setcarddata] = useState(0);

   
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SWIGGY_API_URL);
      const data = await res.json();
      //console.log(data);
      setcarddata(data);

    };

    fetchData();
  }, []);

  const restaurantName =
    carddata?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  console.log(restaurantName);

  return carddata === 0?(
    <ShimmerCard />) : (
      <div>
        <button className=" border-2 rounded px-2 py-1 " >4.4 ⭐</button>
        <div className="flex flex-wrap gap-4 p-4 mr-28 ml-28 mt-5">
          {restaurantName.map((ok, index) => {
            const imgid = ok?.info?.cloudinaryImageId;
            const url = `${CLOUDINARY_BASE_URL}${imgid}`;
              // verify image URL in console

            return (
              <div key={index} className="border w-48 p-2 shadow rounded-lg">
                <img
                  src={url}
                  alt={ok?.info?.name}
                  className="h-32 w-full object-cover rounded-md"
                />
                <div className="font-semibold mt-2">{ok?.info?.name}</div>
                <div>{ok?.info?.avgRating} ⭐</div>
              </div>
            );
          })}
        </div>

      </div>
    
  );
};
// ShimmerCard.js
const ShimmerCard = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 mr-28 ml-28 mt-5">      
    
      <div className="border w-48 p-2 shadow rounded-lg animate-pulse">
        <div className="h-32 w-full bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded mt-3"></div>
        <div className="h-3 bg-gray-300 rounded mt-2 w-1/2"></div>
      </div>
    </div>

  );
};




const Body = () => {
  return (

    <div>
      <Search />
      <Restcard />
      
    </div>

  )
};

export default Body;
