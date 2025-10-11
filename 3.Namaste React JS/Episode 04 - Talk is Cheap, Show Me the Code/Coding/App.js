
import React from 'react';
import ReactDOM from 'react-dom/client';

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/
const Header = ()=>{
  return (
    <div className='header'>
      food 

      </div>
    

  )  
  
};

const AppLayout = () => {
  return (
    <>
    <Header/>

    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);