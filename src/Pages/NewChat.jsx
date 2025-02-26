// import { FaCodepen } from "react-icons/fa6"
// import { TbMath } from "react-icons/tb";
// import ChatInput from "../MiniComponents/ChatInput"
// import { IoDocumentTextOutline } from "react-icons/io5";
// import ChatBubble from "../MiniComponents/ChatBubble";
// import AiChatBubble from "../MiniComponents/AiChatBubble";

import { Biohazard, BookAudio, Bug, Codepen } from "lucide-react"
import ChatInput from "../MiniComponents/ChatInput"

// const NewChat = () => {


//     const relatedTag = [{ icon: <FaCodepen color="red" />, title: "Code With AI" }, { icon: <TbMath color="pink" />, title: "Solve Questions" }, { icon: <IoDocumentTextOutline color="green" />, title: "Create Doc" }]

//     return (
//         <div className="p-3 h-[90vh] sm:px-5 md:px-[10vw] lg:px-[10vw] text-white">
//             {/* for new chat  */}
//             <div className="h-[74vh] flex flex-col gap-5">
//           <div className="">
//                 <p className="text-2xl font-bold text-center sm:text-3xl md:text-4xl font mt-10 text-blue-950">How can I assist you today?</p>
//             {/* tags  */}
//             <div className="h-[40vh] flex flex-wrap gap-4 lg:px-[10rem] mt-5 px-14 ">
//                     {relatedTag?.map((item, index) => (
//                         <>
//                             <div className="border border-blue-950 h-12 gap-3 rounded-full flex items-center justify-evenly p-3 text-lg lg:flex-col lg:items-start  text-blue-950">
//                                 <span className="flex items-center justify-between ">
//                                     <span className="px-5">{item?.icon}</span>
//                                     <span>{item?.title}</span>
//                                 </span>

//                             </div>
//                         </>
//                     ))}
//                 </div>
//             </div>
//             </div>

//             {/* old chat  */}

//             {/* <div className="h-[74vh] flex flex-col gap-5 overflow-x-auto">
//                 <ChatBubble />
//                 <AiChatBubble/>
//             </div> */}
//             <ChatInput />
//         </div>
//     )
// }

// export default NewChat




const NewChat = () => {
  return (
    <div className="p-5 md:px-14 lg:px-[12rem]">
      <p ><Biohazard className="text-center mx-auto text-blue-950" size={40} /></p>
      <p className="text-blue-950 font-bold text-center mt-7 text-xl md:text-3xl">How can I assist you today?</p>
      <div className="mt-5 mb-[8rem] sm:mb-[10rem] sm:flex sm:flex-wrap sm:gap-5  lg:mb-[15rem] lg:px-[2rem]">
        <p className="flex items-center gap-1 border border-blue-950 px-10 py-3 rounded-full my-2 text-blue-950"><BookAudio /> create docs</p>
        <p className="flex items-center gap-1 border border-blue-950 px-10 py-3 rounded-full my-2 text-blue-950"><Bug color="yellow" />Find bug</p>
        <p className="flex items-center gap-1 border border-blue-950 px-10 py-3 rounded-full my-2 text-blue-950 "><Codepen className="text-purple-900" /> create docs</p>
        <p className="items-center gap-1 border border-blue-950 px-10 py-3 rounded-full my-2 text-blue-950 hidden sm:flex"><Codepen className="text-purple-900" /> create docs</p>
      </div>

      <ChatInput />

    </div>
  )
}

export default NewChat