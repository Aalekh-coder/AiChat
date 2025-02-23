import { LogIn } from "lucide-react"
import SideBar from "./SideBar"
const Header = () => {

 

    return (
        <>
            <div className="bg-gray-600 h-[10vh] flex items-center justify-between p-5 border-none">
                <div></div>
                <div><LogIn /></div>
            </div>
            <SideBar />

        </>
    )
}

export default Header