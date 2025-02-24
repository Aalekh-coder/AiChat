import { CircleUser } from "lucide-react";

const AdminUser = () => {
    return (
        <div className="md:px-[3rem] lg:px-[8rem]">
            <div className="h-[19vh] bg-slate-200 m-3 overflow-hidden rounded-lg flex flex-row">
                <div className="w-28 h-30 flex items-center justify-center ">
                    <div className="w-20 h-20 border-[6px] border-gray-600 rounded-full flex items-center justify-center">
                        <CircleUser size={50} />
                    </div>
                </div>
                <div className="w-48 h-30 p-3">
                    <p className="font-bold">@Admin User</p>
                    <p className="mt-2">fiaalekh@gmail.com</p>
                    <button className="bg-blue-300 mt-2 font-bold px-3 text-blue-500 rounded-lg">Administrator</button>
                </div>
            </div>

            <form action="">
                <div className="flex flex-col px-4 mt-8">
                    <label htmlFor="" className="font-bold">First Name</label>
                    <input type="text" className="border-[2px] rounded-lg py-3 placeholder:text-gray-300  p-5" placeholder="Admin" />
                </div>
                <div className="flex flex-col px-4 mt-8">
                    <label htmlFor="" className="font-bold">Last Name</label>
                    <input type="text" className="border-[2px] rounded-lg py-3 placeholder:text-gray-300  p-5" placeholder="User" />
                </div>
                <div className="flex flex-col px-4 mt-8">
                    <label htmlFor="" className="font-bold">First Name</label>
                    <input type="text" className="border-[2px] rounded-lg py-3 placeholder:text-gray-300  p-5" placeholder="admin@gmail.com" />
                </div>
                <div className="flex flex-col px-4 mt-8">
                    <label htmlFor="" className="font-bold">Title</label>
                    <input type="text" className="border-[2px] rounded-lg py-3 placeholder:text-gray-300 p-5" placeholder="Vd Info" />
                </div>
                <div className="flex flex-col px-4 mt-8">
                    <label htmlFor="" className="font-bold">Description</label>
                    <textarea type="text" className="border-[2px] rounded-lg py-3 placeholder:text-gray-300 p-5" placeholder="Tell me about your self" ></textarea>
                </div>

                <button className="px-5 py-2 bg-blue-400 text-white mx-5 my-5 rounded-lg font-bold text-xl">Submit</button>
            </form>
        </div>
    )
}

export default AdminUser