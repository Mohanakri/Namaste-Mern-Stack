



const Header = () => {
  const company_name = 'okay getting props'
  return (    
    <div className="flex items-center justify-between bg-gray-100 px-8 py-4 shadow-md">

  <div className="text-2xl font-bold text-blue-600 cursor-pointer">
    Business
  </div>


  <div className="flex space-x-6 text-gray-700 font-medium">
    <div className=" cursor-pointer">My Hotel</div>
    <div className=" cursor-pointer">Search</div>
    <div className=" cursor-pointer">Offers</div>
    <div className=" cursor-pointer">Help</div>
    <div className=" cursor-pointer">Sign In</div>
    <div className=" cursor-pointer">Cart</div>
  </div>
</div>

    
    
  );
};

export default Header;