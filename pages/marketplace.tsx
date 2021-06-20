
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import {  getSession, useSession } from "next-auth/client"
import { ParsedUrlQuery } from "querystring"
import SettingsIcon from '@material-ui/icons/Settings';
import Navbar from "../components/Navbar"
import SearchIcon from "@material-ui/icons/Search"
import SidebarRow from "../components/SidebarRow";
import StorefrontIcon from "@material-ui/icons/Storefront";

interface Props{
    session:any
}



// for some reason in function JSX.Element is ok while in arrow ones React.FC<Props> is the move 
const marketplace:React.FC<Props> = ({session}) => {
    const city= "Heraklion"
    const country = "Greece";
    const distance = 60;
    
    return (
        <div className="flex flex-col">
            <Navbar />
        <div className="flex space-x-2 bg-gray-800 ">
            {/* //! */}
            <div className="flex flex-col space-y-2 px-2 mt-2 relative" style={{flex:0.3,width:"350px"}}>
                {/* fix this positioning */}
                    <div style={{position:"fixed",top:"5rem"}}>

                    <div className="flex items-center mt-2 " >
                        <h1 className="text-white text-2xl">Marketplace</h1>
                        <div className="bg-gray-600 rounded-full ml-auto cursor-pointer hover:bg-gray-500 mt-2">
                        {/* //todo na ksekollhsw auto apo panw */}
                        <SettingsIcon  fontSize="large"
                        className="bg-gray-400  w-6 h-6 " />
                        </div>
                        
                    </div>
                    </div>
                     <div
                    className="flex bg-gray-500 rounded-full py-1.5 px-2 flex-grow-1"
                >
                    <SearchIcon className="text-gray-400 cursor-pointer" />
                    <input
                        className=" outline-none bg-transparent cursor-pointer"
                        type="text"
                        placeholder="Search Marketplace"
                    />
                    </div>
                {/* make another component to customise properly  */}
              <SidebarRow Icon={StorefrontIcon} text="Browse all" />  
              <SidebarRow Icon={StorefrontIcon} text="Browse all" />  
              <SidebarRow Icon={StorefrontIcon} text="Browse all" />  
              <SidebarRow Icon={StorefrontIcon} text="Browse all" />  
              {/* tailwind classes dont work on this  */}
                <button className="text-white bg-blue-500 hover:bg-blue-400 rounded-lg">&#43; Create New Listing</button>
            <hr />
            <p className="text-white font-semibold">Filters </p>
            <div className = "hover:bg-gray-400 rounded-md ">
            {/* text-blue for some reason doesnt work */}
                <p className="text-white">{city}, {country} 	&#183; Within {distance} kilometres </p>
            </div>
            <hr className= "my-2"/> 
            <p className="text-white font-semibold">Categories</p>
            {/* //todo na ftiaksw new component kai kapws na ta grouparw */}
             <SidebarRow Icon={StorefrontIcon} text="Browse all" />
             <SidebarRow Icon={StorefrontIcon} text="Browse all" />
             <SidebarRow Icon={StorefrontIcon} text="Browse all" />
             <SidebarRow Icon={StorefrontIcon} text="Browse all" />
             <SidebarRow Icon={StorefrontIcon} text="Browse all" />
            </div>
            
        </div>
        </div>
    )
}

export default marketplace

export  const getServerSideProps:GetServerSideProps = async (context:GetServerSidePropsContext<ParsedUrlQuery>) => {
    const session = await getSession(context);
    return {
        props: {
            session,
        },
    };
}