import { AlignLeft } from "lucide-react"
import { useState } from "react";
import { RxQuestionMarkCircled, RxCounterClockwiseClock } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";


const SideBar = () => {
const [toggleSideBar, setToggleSideBar] = useState(false);

    return (
        <div className="">
            <div className="m-2 ml-5">
                <AlignLeft className="" onClick={()=>setToggleSideBar(!toggleSideBar)}/>
            </div>

            <div className={`bg-gray-800 text-white rounded-e-md w-[90vw] p-4 h-[92.9vh] z-70 ${toggleSideBar?"transition-transform -translate-x-[25rem] md:-translate-x-[20vw] lg:-translate-x-[5vw] duration-200":"transition-transform -translate-x-2 lg:-translate-x-[20vw] duration-250 ease-linear"} md:w-[30vw] lg:w-[25vw]`} >
 
                
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloribus? Adipisci possimus minima autem quam mollitia nulla eligendi delectus nobis temporibus fugit! Illum adipisci sunt veritatis iste, cupiditate tempora officiis inventore perferendis. Fugit, labore omnis molestiae velit deserunt ea nostrum obcaecati animi illum pariatur maxime tempore veniam, eaque temporibus enim necessitatibus omnis?
                {/* <div>
                    <button>New Chat</button>
                </div>

                <div>
                    <p>Recent</p>
                    <ul>
                        <li></li>
                    </ul>
                </div>

                <div>
                    <span>

                    </span>

                    
                </div> */}

            </div>
            <div className="absolute top-10 text-red-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae a ab praesentium quae nesciunt architecto doloribus ducimus sit perspiciatis voluptates, est consequuntur fugiat! Placeat consequatur ducimus nihil suscipit sit laboriosam quo odit ea quia totam vitae voluptate, tempora perspiciatis veritatis, aperiam veniam quam eligendi blanditiis labore quis? Dolorum, numquam ullam!</div>
                
           
        </div>
    )
}

export default SideBar