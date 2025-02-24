
const CRM = () => {
    return (
        <div className="flex items-center justify-center mt-14 shadow-slate-900">

            <form className="bg-blue-100 rounded-lg w-[90vw] h-[70vh] p-5 md:w-[80vw] md:px-10 lg:w-[60vw]">
                <p className="font-bold text-black mb-5 sm:text-2xl">Setting</p>
                <div className=" flex items-center mb-5">
                    <div className="bg-cyan-50 mx-1 rounded-lg px-1 text-[12px] sm:text-[20px]">Detail</div>
                    <div className="bg-cyan-50 mx-1 rounded-lg px-1 text-[12px] sm:text-[20px]">Profile</div>
                    <div className="bg-cyan-50 mx-1 rounded-lg px-1 text-[12px] sm:text-[20px]">Dashboard</div>
                    <div className="bg-cyan-50 mx-1 rounded-lg px-1 text-[12px] sm:text-[20px]">Contact</div>
                </div>

                <input type="text" className="px-5 py-1 rounded-lg border-2 mb-2 placeholder:text-sm sm:mr-5 sm:py-2" placeholder="Tenant Id" required />
                <input type="text" className="px-5 py-1 rounded-lg border-2 mb-2  placeholder:text-sm sm:py-2" placeholder="Client Id" required />
                <input type="text" className="px-5 py-1 rounded-lg border-2 mb-2  placeholder:text-sm sm:mr-5 sm:py-2" placeholder="Client Secret" required />
                <input type="text" className="px-5 py-1 rounded-lg border-2 mb-2  placeholder:text-sm sm:py-2" placeholder="Resourse (CRM Url)" required />
                <input type="text" className="px-5 py-1 rounded-lg border-2 mb-2 placeholder:text-sm sm:py-2" placeholder="Default CRM Solution (Unmanaged Only)" required />

                <div className="flex">
                    <button className="px-3 m-3 rounded-full text-black border-blue-600 border-2 sm:px-6 sm:py-2 hover:bg-blue-400">Save</button>
                    <button className="border-2 border-red-500 px-3 m-3 rounded-full text-black sm:px-6 sm:py-2 hover:bg-red-400">Clear</button>
                </div>
            </form>
        </div>
    )
}

export default CRM