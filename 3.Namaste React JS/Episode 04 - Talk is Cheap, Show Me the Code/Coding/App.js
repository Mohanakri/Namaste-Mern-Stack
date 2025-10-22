
import React from 'react';
import ReactDOM from 'react-dom/client';
import dt from './utils/data.js'
import { useState } from 'react';



const Header = ()=>{
  return (
    <div className = 'header'>
      <div className = "app-logo">
        <h1>logo</h1>

      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>     


        </ul>
      </div>
    </div>
  )    
};



const Restcard = (props) => {




  return (
    <div className='rest-card'>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + props.imagee}
       className ='rest-card-image' />
      <h3>{props.resName}</h3>
      <h3>{props.rating}</h3>
      <h4>{props.cuisines}</h4>
      <h4>{props.city}</h4>

    </div>
  )
}


const dat = dt.data.cards[2].card.card.gridElements.infoWithStyle;

const Body =  () => { 
  const [listrest,uselistrest] = useState(dat);
  

  
  
  return (
    <div className='body'>
      <div className='search'>
        <div >
          <button className='sr-btn'
          onClick={()=>console.log('click done')}>4 start Rating</button>
        </div>
        <div className='rest-card-container'>
        {listrest.restaurants.map((itert, i) => (
          <Restcard 
            key={i}
            imagee = {itert.info.cloudinaryImageId}
            resName={itert.info.name}
            rating ={itert.info.avgRating}
            cuisines={itert.info.cuisines.join(", ")}
            city={itert.info.areaName}
          />
        ))}

        


        </div>
        

      </div>

    </div>
  )
}
const AppLayout = () => {
  return (
    <>
    <Header/>
    <Body />

    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);