// import { AlignLeft } from "lucide-react";
// import { useState } from "react";

// const SideHeader = () => {
//     const [state, setState] = useState(false);

//     return (
//         <div className="relative">
//             {/* Header (Fixed Width) */}
//             <div className="h-[10vh] bg-cyan-300 w-full flex items-center px-4 relative z-10">
//                 {!state && (
//                     <AlignLeft size={35} className="cursor-pointer" onClick={() => setState(!state)} />
//                 )}
//             </div>

//             {/* Sidebar (Animated, Overlaps Header) */}
//             <div
//                 className={`h-screen bg-red-400 absolute top-0 left-0 z-30 transition-all duration-300 ease-in-out ${state ? "w-[18vw]" : "w-0"
//                     }`}
//             >
//                 <AlignLeft
//                     size={35}
//                     className="mt-3 ml-3 cursor-pointer"
//                     onClick={() => setState(!state)}
//                 />
//             </div>
//         </div>
//     );
// };

// export default SideHeader;




// import { AlignLeft } from "lucide-react";
// import { useState } from "react";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   const [state, setState] = useState(false);

//   return (
//     <div className="flex">
//       {/* Sidebar (Animated) */}
//       <div
//         className={`h-screen bg-red-400 fixed top-0 left-0 z-30 transition-all duration-300 ease-in-out ${
//           state ? "w-[18vw]" : "w-0"
//         }`}
//       >
//         <AlignLeft
//           size={35}
//           className="mt-3 ml-3 cursor-pointer"
//           onClick={() => setState(!state)}
//         />
//       </div>

//       {/* Main Content Area */}
//       <div className={`flex-1 ${state ? "ml-[18vw]" : "ml-0"} transition-all duration-300 ease-in-out`}>
//         {/* Header (Fixed Width) */}
//         <div className="h-[10vh] bg-cyan-300 w-full flex items-center px-4 relative z-10">
//           {!state && (
//             <AlignLeft size={35} className="cursor-pointer" onClick={() => setState(!state)} />
//           )}
//         </div>

//         {/* Dynamic Page Content (Outlet) */}
//         <div className="p-4">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;


import { AlignLeft } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [state, setState] = useState(false);

  return (
    <div className="relative flex">
      {/* Sidebar (Higher Z-Index) */}
      <div
        className={`h-screen bg-gray-300 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
          state ? "w-[18vw]" : "w-0"
        }`}
      >
        <AlignLeft
          size={35}
          className="mt-3 ml-5 cursor-pointer"
          onClick={() => setState(!state)}
        />
      </div>

      {/* Overlay (Click to Close Sidebar) */}
      {state && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 z-40"
          onClick={() => setState(!state)}
        ></div>
      )}

      {/* Main Content Area */}
      <div className={`flex-1 ${state ? "ml-[18vw]" : "ml-0"} transition-all duration-300 ease-in-out`}>
        {/* Header (Fixed Width) */}
        <div className="h-[10vh] bg-gray-100 w-full flex items-center relative z-10 justify-between">
          {!state && (
            <AlignLeft size={35} className="cursor-pointer ml-5" onClick={() => setState(!state)} />
                  )} 
               {!state  && <div className="border-[2px] border-blue-950 px-3 py-1 rounded-full mr-3">Login</div>}
        </div>

        {/* Dynamic Page Content (Outlet) - Lower Z-Index */}
        <div className="p-4 relative z-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
