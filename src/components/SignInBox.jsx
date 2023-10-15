import { useRef } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { appleIcon, googleIcon } from "../utils/icons";

const SignInBox = () => {
  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("user", JSON.stringify(data.user));
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center md:w-7/12 h-fit md:p-3 p-1">
        {/* Sign In */}
        <div className="w-full">
          <span className="font-bold md:text-3xl text-md">Sign In</span>
        </div>

        {/* Sign in to your account */}
        <div className="w-full py-3">
          <span className="md:text-md text-gray-900 text-sm">Sign in to your account</span>
        </div>

        {/* Google and Apple Buttons */}
        <div className="w-full flex justify-between md:my-2 my-1">
          <button className="bg-white py-1 md:px-8 md:mx-0 mx-1 px-2 rounded-lg" onClick={handleSignIn}>
            <span>
              <img src={googleIcon} alt="google" className="inline md:w-4 w-3" />
            </span>
            <span className="md:ml-2 ml-1 text-sm text-gray-400">
              Sign in with Google
            </span>
          </button>

          <button className="bg-white py-1 md:px-8 md:mx-0 mx-1 px-2 rounded-lg">
            <span className="w-4 inline">
              {appleIcon}
            </span>
            <span className="md:ml-2 ml-1 text-sm text-gray-400">
              Sign in with Apple
            </span>
          </button>
          {/* <button>Apple</button> */}
        </div>

        {/* Input Fields */}
        <div className=" w-full h-fit bg-white rounded-2xl mx-2">
          <form className="flex flex-col w-full h-full p-4">
            <label htmlFor="email" className="md:text-md text-sm text-gray-900 py-2">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="p-3 bg-gray-200 rounded-lg md:text-lg text-sm"
              placeholder="Email"
            />
            <label htmlFor="password" className="md:text-md text-sm text-gray-900 py-2">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              className="p-3 bg-gray-200 rounded-lg md:text-lg text-sm"
              placeholder="Password"
            />
            <span className="text-blue-500 md:text-md text-sm my-4">Forgot Password ?</span>

            <button className="w-full bg-[#4285F4] p-2 rounded-lg text-white font-bold">
              Sign In
            </button>
          </form>
        </div>

        {/* Dont have an account? */}
        <div className="">
          <span className="text-gray-500">
            Dont have an account?
            <span className="text-blue-500"> Register here</span>
          </span>
        </div>
      </div>

      {/* <div>
            <h1 className="text-4xl font-bold pb-3">Sign In</h1>
            <p className="font-medium text-sm pb-6">Sign in to your account</p>
            <div className="w-full flex justify-around">
              <div>
                <button
                    type="button"
                    className="inline-block w-full rounded bg-[#ffffff] px-7 py-2 text-xs leading-normal text-gray-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    onClick={handleSignIn}
                    >
                    Sign in with Google
                </button>
              </div>
              <div>
                <button
                    type="button"
                    className="inline-block w-full rounded bg-[#ffffff] px-7 py-2 text-xs leading-normal text-gray-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Sign in with Apple
                </button>
              </div>
            </div>
            <form className="bg-white p-6 rounded-[10px] my-6">
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Email address</label>
                    <input type="email" id="email"
                           className="bg-[#f5f5f5] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[eaeaea] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                    <input type="password" id="password"
                           className="bg-[#f5f5f5] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[eaeaea] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required/>
                </div>
                <div className="mb-6">
                  <p className="text-[#346bd4]">Forgot Password?</p>
                </div>
                <button type="submit"
                        className="w-full text-white bg-[#4285f4] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In
                </button>
            </form>
            <div className="w-full text-center">
              <p className="inline text-[#858585]">Don't have an account? </p>
              <p className="inline text-[#346BD4]">Register here</p>
            </div>
          </div> */}
    </>
  );
};

export default SignInBox;
