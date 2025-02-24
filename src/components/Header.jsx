import { LogIn } from "lucide-react"
import SideBar from "./SideBar"
import { CgProfile } from "react-icons/cg";
const Header = () => {

 

    return (
        <>
        <div className="flex overflow-hidden">
           <SideBar/>
          <div className="bg-gray-200 w-screen h-12 flex justify-between items-center px-4">
            <div></div>
            <div><CgProfile size={25}/></div>
    
          </div>
          
        </div>
       
        </>
    )
}

export default Header