//import Restcard from 'Restcard'
import { useState,useEffect } from "react";

const Restcard = () => {

 

 const [carddata, setcarddata] = useState(0);


  //console.log(carddata);
  useEffect (()=>{
       const fetchData = async () => {
        const res = await fetch(
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9804517&lng=77.746281&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const data = await res.json();
        
        setcarddata(data);

      };

    fetchData(); 
  },[]
  );
  const test = 
  console.log(carddata);
  const restaurantName = carddata?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants; //.[0]?.info?.name;
  
  console.log(restaurantName); 


    
  return (
    <div className="flex flex-wrap gap-4">
      {restaurantName?.map((ok, index) => (
        <div key={index} className="border w-40 p-2">
          <div className="h-24 bg-gray-200 flex items-center justify-center">
            image
          </div>
          <img src="/Photos/Logo.png" alt="logo" className="my-2" />
          <div>{ok?.info?.name}</div>
          <div>{ok?.info?.avgRating}</div>
        </div>
      ))}
    </div>
  );

}





const Body = () => {

  return (
    <Restcard />
  )
}

export default Body;