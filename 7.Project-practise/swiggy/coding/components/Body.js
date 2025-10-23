import { useState, useEffect } from "react";
import {SWIGGY_API_URL , CLOUDINARY_BASE_URL} from '../utility/values';

const Restcard = () => {
  const [carddata, setcarddata] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SWIGGY_API_URL);
      const data = await res.json();
      setcarddata(data);
    };

    fetchData();
  }, []);

  const restaurantName =
    carddata?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  console.log(restaurantName); // for debugging

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {restaurantName.map((ok, index) => {
        const imgid = ok?.info?.cloudinaryImageId;
        const url = `${CLOUDINARY_BASE_URL}${imgid}`;
        console.log(url); // verify image URL in console

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
  );
};

const Body = () => {
  return <Restcard />;
};

export default Body;
