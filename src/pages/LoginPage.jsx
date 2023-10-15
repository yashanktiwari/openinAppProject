import SignInBox from "../components/SignInBox";
import { githubIcon, linkedInIcon, twitterIcon } from "../utils/icons";


const LoginPage = () => {
  return (
    <>
      <div className="flex md:h-[100vh] h-[75%] md:bg-[#F8FAFF] md-border-0 md:border-t-0 border-t-[100px] border-t-[#4285F4]">
        <div className="md:hidden h-[100px]"></div>
        <div className="md:w-1/2  bg-[#4285F4] md:h-full md:flex md:flex-col">
          <div className="absolute w-9/10 md:h-full h-[75vh] md:py-4 ">
            <span className="text-white md:block hidden font-bold md:text-3xl text-lg md:ml-4">
              Logo
            </span>
          
            <span className="text-white md:block hidden font-bold md:text-5xl text-2xl pt-12 ml-[75%] md:ml-[95%]">
              Board.
            </span>

            <div className="md:top-[39rem] md:left-32 md:w-[15vw] absolute w-[100vw] h-[15%] flex justify-center items-center bg-[#4285F4] bottom-0 rounded-t-[50%]">
              <span className="px-2 cursor-pointer">{githubIcon}</span>
              <span className="px-2 cursor-pointer">{twitterIcon}</span>
              <span className="px-2 cursor-pointer">{linkedInIcon}</span>
            </div>
          </div>

          <div className="md:h-full md:w-full md:border-r-[150px] md:border-r-[#F8FAFF] md:border-t-[100vh] md:border-t-transparent border-t-100px"></div>
        </div>
        <div className="md:w-1/2 w-full md:p-0 p-1 md:h-full h-[60vh] flex justify-center items-center">
          <SignInBox />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
// bg-[#3b7fef]
