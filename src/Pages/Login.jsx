import { FaGooglePlusG } from "react-icons/fa";

const Login = () => {
  return (
    <div className="absolute lg:top-0 lg:left-80 top-0 shadow-black drop-shadow-xl w-[100vw] h-[90vh] z-50 flex items-center justify-center font-roboto lg:w-[50vw] lg:mx-auto">
      <div className="bg-white hidden lg:block "><img className="h-[60vh]" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" /></div>
      <div
        className="bg-gray-100 w-[100vw] h-[60vh] md:w-[60vw]
        "
      >
        <p className="text-[#164E63] text-3xl font-medium text-center mt-4 md:text-4xl">
          Welcome
        </p>
        <p className="text-[#164E63] text-sm text-center mt-3 font-medium md:text-lg">
          Sign in to continue
        </p>
        <button className="bg-[#C4C7C5] px-5 py-2 flex items-center gap-1 rounded-sm mx-auto mt-4 font-roboto md:w-[30vw] lg:w-[20vw]">
          {" "}
          <FaGooglePlusG size={18} /> Continue with Google
        </button>

        <form action="" className="flex flex-col">
          <input
            type="text"
            placeholder="Email *"
            className="border-[1px] border-zinc-400 mx-12 bg-gray-100 placeholder:px-4 placeholder:text-gray-400 rounded-md mt-5 py-2 placeholder:font-thin"
          />

          <input
            type="password"
            placeholder="Password *"
            className="border-[1px] border-zinc-400 mx-12 bg-gray-100 placeholder:px-4 placeholder:text-gray-400 rounded-md mt-5 py-2 placeholder:font-thin"
          />
          <p className="mx-12 text-[#a1a1a1] mt-5 mb-3">Forget Password?</p>
          <button className="bg-blue-500 text-white mx-12 p-2 rounded-lg">
            Containue with Email
          </button>
        </form>
        <p className="mx-12 mt-3 text-[#a1a1a1] text-sm">
          Don&apos;t have an account?{" "}
          <span className="underline text-blue-500">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
