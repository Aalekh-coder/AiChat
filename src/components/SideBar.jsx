import { AlignLeft } from "lucide-react";
import { IoAddCircleSharp } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router";

const SideBar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(true);

  const recentChat = [
    "Chat 1",
    "Chat 2",
    "Chat 3",
    "Chat 4",
    "Chat 5",
    "Chat 2",
    "Chat 3",
    "Chat 4",
    "Chat 5",
  ];

  return (
    <>
      <div
        className={`bg-gray-200 ${
          toggleSideBar
            ? "w-[20vw] shadow-lg transition-all duration-300 ease-in-out lg:w-[15vw]"
            : "w-12 lg:w-16"
        } h-[100vh]`}
      >
        <div
          className="pt-5 pl-3 lg:pl-5"
          onClick={() => setToggleSideBar(!toggleSideBar)}
        >
          <AlignLeft className="cursor-pointer" />
        </div>
        <div className="h-[65vh] flex flex-col items-center ">
          <Link to="/"
            className={`text-[#444444] flex  items-center mt-10 ${
              toggleSideBar ? "mr-10" : ""
            }`}
          >
            <IoAddCircleSharp className="text-gray-400" size={35} />
            <div className={toggleSideBar ? "block mx-2" : "hidden"}>
              New chat
            </div>
          </Link>
          {toggleSideBar ? (
            <>
              <p className="mr-8 mt-5 lg:mr-24">Recent</p>
              <div className="lg:mr-16">_______________</div>
              <div className="h-full w-full overflow-x-auto">
                {recentChat.map((chat, index) => (
                  <Link to="/chat"
                    key={index}
                    className="text-[#444444] flex items-center mt-5 mx-5"
                  >
                    <BsChatLeftText className="text-gray-400" size={10} />
                    <div className="block mx-2">{chat}</div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <div
          className={`h-[30vh] flex items-center flex-col gap-5 py-5 ${
            toggleSideBar ? "lg:mr-10 lg:mt-10" : "lg:mt-10"
          }`}
        >
          <div className="text-[#444444] flex">
            <AiFillQuestionCircle size={25} />
            <div className={toggleSideBar ? "block px-4 " : "hidden"}>Help</div>
          </div>
          <Link to="profile" className="text-[#444444] flex">
            <CgProfile size={25} />
            <div className={toggleSideBar ? "block px-3" : "hidden"}>
              Active
            </div>
          </Link>
          <Link to="setting" className="text-[#444444] flex">
            <IoMdSettings size={25} />
            <div className={toggleSideBar ? "block px-2" : "hidden"}>
              Setting
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
