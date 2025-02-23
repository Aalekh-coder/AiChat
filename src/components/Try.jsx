// import { AlignLeft, UserRoundPen } from "lucide-react"
// import { useState } from "react";


// const Try = () => {

//   const [toggleSideBar, setToggleSideBar] = useState(false);

//   return (
//     <div>
//       <div className='bg-zinc-900 h-[10vh] text-white flex items-center justify-between px-5'>
//         <AlignLeft onClick={()=> setToggleSideBar(!toggleSideBar)}/>
//         <UserRoundPen />
//       </div>

//       <div className='flex'>
      

//         <div className={`bg-gray-800 z-50 text-white rounded-e-md w-[90vw] p-4 h-[92.9vh] ${toggleSideBar ? "transition-transform -translate-x-[25rem] sm:-translate-x-[39rem] md:-translate-x-[6vw] lg:-translate-x-[5vw] duration-200" : "transition-transform -translate-x-[3.5rem] md:-translate-x-[27vw] lg:-translate-x-[20vw] duration-250 ease-linear"} md:w-[30vw] lg:w-[25vw]`}>hello</div>
        
       
//       </div>
      
//     </div>
//   )
// }

// export default Try


// import { AlignLeft, UserRoundPen } from "lucide-react";
// import { useState } from "react";

// const Try = () => {
//   const [toggleSideBar, setToggleSideBar] = useState(false);

//   return (
//     <div className="relative">
//       {/* Top Navbar */}
//       <div className="bg-zinc-900 h-[10vh] text-white flex items-center justify-between px-5">
//         <AlignLeft
//           className="cursor-pointer"
//           onClick={() => setToggleSideBar(!toggleSideBar)}
//         />
//         <UserRoundPen />
//       </div>

//       {/* Sidebar + Content Wrapper */}
//       <div className="flex transition-all duration-300 ease-in-out">
//         {/* Sidebar */}
//         <div
//           className={`bg-gray-800  rounded-e-md h-[92.9vh] shadow-lg transition-all duration-300 ease-in-out
//             ${toggleSideBar ? "w-[20vw] sm:w-[30vw] md:w-[20vw] lg:w-[20vw]" : "w-1 md:w-[10vw] lg:w-[10vw]"}`}
//         >
//         </div>

//         {/* Main Content */}
//         <div
//           className={`p-5 transition-all duration-300 ease-in-out flex-1
//             ${toggleSideBar ? "w-[25vw] md:w-[80vw] lg:w-[80vw]" : "w-[90vw] md:w-[90vw] lg:w-[90vw]"}`}
//         >
//           Main Content
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Try;




import { AlignLeft, Plus, MessageCircle, HelpCircle, Settings, UserCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Try = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  // Example Recent Chats
  const recentChats = [
    "Chat with AI",
    "Coding Help",
    "Project Discussion",
    "React Debugging",
    "Business Strategy",
    "API Integration",
    "Chat with AI",
    "Coding Help",
    "Project Discussion",
    "React Debugging",
    "API Integration",
    "Chat with AI",
    "Coding Help",
    "Project Discussion",
    "React Debugging",
   
  ];

  return (
    <div className="relative">
      {/* Top Navbar */}
      <div className="bg-zinc-900 h-[10vh] text-white flex items-center justify-between px-5">
        <AlignLeft
          className="cursor-pointer"
          onClick={() => setToggleSideBar(!toggleSideBar)}
        />
        <UserCheck />
      </div>

      {/* Sidebar + Content Wrapper */}
      <div className="flex transition-all duration-300 ease-in-out">
        {/* Sidebar */}
        <div
          className={`bg-gray-800 text-white h-[92.9vh]  shadow-lg flex flex-col justify-between transition-all duration-300 ease-in-out
            ${toggleSideBar ? "w-[75vw] md:w-[20vw] lg:w-[20vw]" : "w-0.5 md:w-[10vw] lg:w-[10vw]"}`}
        >
          {/* New Chat Button */}
          <button className={`flex items-center gap-2 ${ toggleSideBar?"bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-700 transition":""}`}>
            <Plus className="w-5 h-5" />
            {toggleSideBar && <span>New Chat</span>}
          </button>

          {/* Recent Chats (Scrollable) */}
          <div className="flex-1 overflow-y-auto mt-4 space-y-3 lg:h-[20vh]">
            {recentChats.map((chat, index) => (
              <div key={index} className="border-b border-gray-700 pb-2">
                <Link to={`/chat/${index}`} className="flex items-center gap-2 px-5 hover:text-gray-300">
                  <MessageCircle className="w-5 h-5" />
                  {toggleSideBar && <span>{chat}</span>}
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="space-y-2 border-t border-gray-700 pt-3">
            <Link to="/help" className="flex items-center gap-2 hover:text-gray-300">
              <HelpCircle className="w-5 h-5" />
              {toggleSideBar && <span>Help</span>}
            </Link>
            <Link to="/active" className="flex items-center gap-2 hover:text-gray-300">
              <UserCheck className="w-5 h-5" />
              {toggleSideBar && <span>Active</span>}
            </Link>
            <Link to="/settings" className="flex items-center gap-2 hover:text-gray-300">
              <Settings className="w-5 h-5" />
              {toggleSideBar && <span>Settings</span>}
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`p-5 transition-all duration-300 ease-in-out flex-1
            ${toggleSideBar ? "w-[25vw] md:w-[80vw] lg:w-[80vw]" : "w-[90vw] md:w-[90vw] lg:w-[90vw]"}`}
        >
          Main Content
        </div>
      </div>
    </div>
  );
};

export default Try;
