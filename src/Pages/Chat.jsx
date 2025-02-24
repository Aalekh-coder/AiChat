import { FaCodepen } from "react-icons/fa6"
import { TbMath } from "react-icons/tb";
import ChatInput from "../MiniComponents/ChatInput"
import { IoDocumentTextOutline } from "react-icons/io5";
import ChatBubble from "../MiniComponents/ChatBubble";
import AiChatBubble from "../MiniComponents/AiChatBubble";

const Chat = () => {


    const relatedTag = [{ icon: <FaCodepen color="red" />, title: "Code With AI" }, { icon: <TbMath color="pink" />, title: "Solve Questions" }, { icon: <IoDocumentTextOutline color="green" />, title: "Create Doc" }]

    return (
        <div className=" p-3 h-[90vh] sm:px-5 md:px-[10vw] lg:px-[10vw] text-white">
            {/* for new chat  */}
            <div className="h-[74vh] flex flex-col gap-5">
                <div className="">
                <p className="text-2xl font-bold text-center sm:text-3xl md:text-4xl font mt-10">How can I assist you today?</p>
            {/* tags  */}
            <div className="h-[40vh] flex flex-wrap gap-4 lg:px-10 mt-5">
                    {relatedTag?.map((item, index) => (
                        <>
                            <div className="border h-12 gap-3 rounded-full flex items-center justify-evenly p-5 text-lg lg:flex-col lg:items-start lg:h-56 lg:w-56 lg:rounded-lg">
                                <span className="flex items-center justify-between gap-2">
                                    <span>{item?.icon}</span>
                                    <span>{item?.title}</span>
                                </span>
                                <div className="hidden lg:block">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, hic!
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            </div>

            {/* old chat  */}

            {/* <div className="h-[74vh] flex flex-col gap-5 overflow-x-auto">
                <ChatBubble />
                <AiChatBubble/>
            </div> */}
            <ChatInput />
        </div>
    )
}

export default Chat


