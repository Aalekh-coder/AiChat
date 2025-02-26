import { useState } from "react";
import SideBar from "./SideBar"
import { CgProfile } from "react-icons/cg";
import { Outlet } from "react-router-dom"
import Login from "../Pages/Login"

const Header = () => {

  const [toggleAuth, setToggleAuth] = useState(false);


  return (
    <>
      <div className="flex overflow-hidden">
        {/* SideBar  */}
        {/* <div className="bg-cyan-400 w-[8vw] h-[100vh]">SideBar</div> */}
        <SideBar />
        <div className="w-[100vw] flex flex-col">
          <div className="w-[100%] bg-gray-200 h-[10vh] -z-1 flex items-center justify-between px-7">
            <div></div>
            <div onClick={() => setToggleAuth(!toggleAuth)}><CgProfile size={25} /></div>
          </div>
          <div className="">
            <Outlet />
            {toggleAuth? <Login/>:""}
          
          </div>
        </div>

      </div>

    </>
  )
}

export default Header