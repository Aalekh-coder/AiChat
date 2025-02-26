import { RiImageAddLine } from "react-icons/ri";
import { FaMicrophoneLines } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";

const ChatInput = ({ input }) => {
  const [state, setState] = useState(input || "");

  return (
    <div className="flex gap-0.5 items-center border border-gray-300 rounded-lg px-4 py-2 w-full bg-white shadow-md sm:gap-4 lg:h-[10vh]">
      {/* Image Upload Icon */}
     
      {/* Input Field */}
      <input
        type="text"
        placeholder="Ask anythink"
        className="flex-1 py-2 outline-none text-gray-700 bg-transparent placeholder:text-lg"
        value={state}
        onChange={(e)=>setState(e.target.value)}
          />
           <button className="text-gray-500 hover:text-blue-500 ">
        <RiImageAddLine size={24} />
      </button>

      {/* Microphone Icon */}
      <button className="text-gray-500 hover:text-red-500">
        <FaMicrophoneLines size={20} />
      </button>


      {/* Send Button */}
      <button className="text-white bg-blue-500 hover:bg-blue-600 p-1 rounded-full transition duration-300">
        <IoMdSend size={20} />
      </button>
    </div>
  );
};

export default ChatInput;
