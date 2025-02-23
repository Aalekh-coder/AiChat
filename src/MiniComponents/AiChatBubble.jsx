import ChatBubble from "./ChatBubble"
import AiReplyForCode from "./AiReplyForCode"
import { GiChaingun } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import AIReplyForTable from "./AIReplyForTable"

const AiChatBubble = () => {
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


    return (
        <>
            {/* chat reply */}
            {/* <ChatBubble place={"chat-start"} message={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, beatae, corrupti quae atque ab perspiciatis nisi mollitia nostrum quisquam culpa nobis minima ad optio deserunt corporis doloribus eius totam hic eveniet, animi eaque sed! Doloremque totam libero voluptatibus neque, eos maxime animi voluptate itaque, excepturi natus corrupti error facere, expedita alias quos ex? Explicabo culpa minima iure ea eos facere sapiente, perferendis tempora doloremque necessitatibus atque facilis in praesentium nobis quae officia impedit dolorem assumenda laboriosam? Qui quidem dicta quae aliquid iusto quam nisi necessitatibus autem architecto consequatur impedit minus praesentium hic, obcaecati inventore, quisquam sunt debitis voluptatum iure neque!"} />
            <div className="px-2"></div> */}

            {/* text reply for code */}
            {/* <div className="border-b-2">
                <p className="text-2xl capitalize mb-4 flex gap-3 items-center"> <GiChaingun className="animate-spin" /> Generating the code for your  <BsThreeDots className="animate-bounce" /></p>
                <AiReplyForCode code={code} />
            </div> */}
        
        {/* table reply  */}

        
        
        {/* <div className="border-b-2 ">
                <p className="text-2xl capitalize mb-4 flex gap-3 items-center"> <GiChaingun className="animate-spin" /> Generating the code for your  <BsThreeDots className="animate-bounce" /></p>
                <AIReplyForTable/>
            </div> */}

            

        </>
    )
}

export default AiChatBubble