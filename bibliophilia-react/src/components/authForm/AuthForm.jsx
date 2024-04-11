// import Login from "./Login";
// import SignUp from "./SignUp";
import AuthPic from "../../assets/AuthPic.png";
import SignUp from "./SignUp";
// import Login from "./Login";

const AuthForm = () => {
  return (
    <>
      {/* Container Div*/}
      <div className="font-[sans-serif] text-[#333]">
        <div className="flex flex-col items-center justify-center ">
          <div className="grid md:grid-cols-2 items-start gap-4  sm:w-[65%] w-full   rounded-md sm:my-5 sm:px-0 px-4">
            {/* image */}

            <img
              src={AuthPic}
              className="hidden object-contain w-full h-full sm:block"
              alt="login-image"
            />
              <SignUp/>
              {/* <Login/> */}
            

           
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
