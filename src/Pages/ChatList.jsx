import { GiChaingun } from "react-icons/gi"
import AiChatBubble from "../MiniComponents/AiChatBubble"
import { BsThreeDots } from "react-icons/bs"
import AiReplyForCode from "../MiniComponents/AiReplyForCode"
import ChatInput from "../MiniComponents/ChatInput"
import ChatBubble from "../MiniComponents/ChatBubble"


const ChatList = () => {


    const code = `
    async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Network response was not ok");
    
        const data = await response.json();
        console.log("Fetched Data:", data.slice(0, 5));
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    
    fetchData();
`
const text =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ab molestias fuga possimus explicabo a deleniti cum ipsam, nam aut ex, optio repudiandae amet unde laudantium ipsum architecto accusantium? Eaque porro numquam placeat dignissimos ut itaque rerum? Non natus quas porro neque dignissimos velit tempora aperiam veniam architecto voluptatibus, nam veritatis, ratione officiis assumenda. Sit perspiciatis repellendus cumque corporis architecto a, maiores consectetur vero reiciendis aliquam fuga enim earum explicabo aspernatur nemo, iste eaque quasi sed laborum totam distinctio praesentium blanditiis. Reiciendis quibusdam unde eaque ipsum possimus molestiae nisi quia, ipsam sapiente, atque distinctio modi porro ratione voluptatibus? Animi, architecto.`
    
  return (
      <>
        <div className="p-5 h-[73vh] overflow-x-auto lg:px-[15rem]">
        <ChatBubble message="write Js Code"/>

        {/* Ai reply  */}

            <ChatBubble  message={text} place="right" image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIQIPm7VljdxhYUPXSvbVYFizJ9rdbfqLHA&s"} />
            <AiReplyForCode code={code} className=""/>
            
      </div>

      <div className="px-5 lg:px-[15rem]">
      <ChatInput/>
      </div>
      </>

            
    )
}

export default ChatList