import Body, {Body1} from "./Body";


const Header_name = ({name})=> {
  
  return (
    <p> checking props</p>
  )
}



const Header = () => {
  const company_name = 'okay getting props'
  return (    
    <div className=" flex ">
      <p className="pa text-blue-500 text-xl font-semibold bg-gray-100 p-4 rounded-lg shadow-md">
      Hi, how are you?
      </p>
      <div className=" flex justify-between">
        <div>My Hotel</div> 
        <div>Search</div>
        <div>Offers</div>
        <div>Help</div>
        <div>Sign in</div>
        <div>cart</div>

      </div>

    </div>
    
    
  );
};

export default Header;