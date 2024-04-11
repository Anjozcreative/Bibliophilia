import googleIcon from "../../assets/google.png";
const SignUp = () => {
 
 
  
  return (
    <>
    <div className="justify-start w-full py-4 sm:px-6">
              <form>
                <div className="flex-col items-start justify-start">
                  <h3 className="text-3xl font-extrabold sm:text-2xl">
                    Create your Account
                  </h3>
                  <div className="flex items-center justify-center gap-2 py-1 my-5 border rounded">
                    <img src={googleIcon} alt="Google logo" className="w-5 sm:w-4" />
                    <h1 className="text-gray-500 cursor-pointer sm:text-[14px] text-[18px]">
                      Sign Up with Google
                    </h1>
                  </div>
                  <div className="flex items-center justify-center gap-1 my-4 ">
                    <span className=" h-[1px] bg-gray-200 sm:w-[32%] w-[20%]"></span>
                    <p className="mx-2 text-gray-500 sm:text-[12px] text-[18px]">
                      or sign up with email
                    </p>
                    <span className=" h-[1px] bg-gray-200 w-[20%] sm:w-[32%]"></span>
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-lg sm:text-sm text-[20px]">Username</label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full text-sm  border-gray-300 rounded focus:border-[#333] px-2 py-2 outline-none bg-gray-100"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block mb-1 sm:text-sm text-[20px]">Email Address</label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full text-sm  border-gray-300 rounded focus:border-[#333] px-2 py-2 outline-none bg-gray-100"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block mb-1 sm:text-sm text-[20px]">Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full text-sm  border-gray-300 rounded focus:border-[#333] px-2 py-2 outline-none bg-gray-100"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block mb-1 sm:text-sm text-[20px]">Confirm Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full text-sm  border-gray-300 rounded focus:border-[#333] px-2 py-2 outline-none bg-gray-100"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start gap-2 mt-5 sm:space-x-16">
                  <div className="flex-col items-center space-y-1">
                    <div className="flex items-center gap-1">
                      <input
                       
                        type="radio"
                        className="w-3 h-3 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500"
                      />
                      <label className="block text-sm sm:text-xs">One lowercase character</label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                       
                        type="radio"
                        className="text-blue-600 border-gray-300 rounded sm:h-3 sm:w-3 shrink-0 focus:ring-blue-500"
                      />
                      <label className="block text-sm sm:text-xs">One uppercase character</label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                       
                        type="radio"
                        className="w-3 h-3 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500"
                      />
                      <label className="block text-sm sm:text-xs">One number</label>
                    </div>
                  </div>
                  <div className="flex-col items-center space-y-1 ">
                  <div className="flex items-center gap-1">
                      <input
                       
                        type="radio"
                        className="w-3 h-3 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500"
                      />
                      <label className="block text-sm sm:text-xs">One special character</label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                       
                        type="radio"
                        className="w-3 h-3 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500"
                      />
                      <label className="block text-sm sm:text-xs">8 character minimum</label>
                    </div>
                   
                  </div>
                </div>
                <div className="mt-4 sm:mt-8">
                  <button
                    type="button"
                    className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-purple-700 hover:bg-blue-700 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
    </>
  );
};

export default SignUp;
