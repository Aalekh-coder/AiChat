
const ChatBubble = ({ message, time, image, place }) => {
    return (
        <div className={`flex ${place?"justify-start":"justify-end"} mb-4 `}>
            <div className={`chat ${place?"chat-start":"chat-end"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={image ? image : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                    </div>
                </div>
                <div className="chat-header">
                    {/* Anakin */}
                    <time className="text-xs opacity-50">{time ? time : "12:46"}</time>
                </div>
                <div className="chat-bubble min-w-72 w-full bg-gray-100 text-black border-gray-300">{message ? message : "default Text"}</div>
                
                {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
            </div>
        </div>
    )
}

export default ChatBubble