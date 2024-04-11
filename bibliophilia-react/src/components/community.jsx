// I CREATED THE MOBILE VIEW IN A SEPERATE DIV BELOW
const Community = () => {
  return (
    <div className="bg-white font-[sans-serif] ">
      <div className="container flex-col items-center justify-center hidden mx-auto md:px-8 md:flex">
        <div>
          <img src="../../src/assets/community1.png" alt="" />
        </div>

        <div
          className=" py-12 px-8 rounded-xl shadow-md md:w-[90%]  flex-col flex justify-center items-center text-white "
          style={{ backgroundImage: 'url("../../src/assets/community2.png")' }}
        >
          <h2 className=" text-[32px] font-extrabold mb-4 leading-10">
            Join the bibliophilia Community
          </h2>
          <p className=" leading-relaxed text-base font-bold text-[18px]">
            Discover new books, connect with fellow readers and share your love
            for literature
          </p>
          <button
            className="mt-4 font-semibold btn btn-lg bg-[#5D38CE] hover:bg-purple-400 hover:text-black text-[16px] text-[#FFFFFE]
leading-6 border-none"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="container flex flex-col items-center justify-center px-4 mx-auto sm:hidden">
        <div>
          <img src="../../src/assets/mobile community1.png" alt="" />
        </div>

        <div
          className="flex flex-col items-center justify-center w-full px-4 py-4 space-y-2 text-white rounded shadow-md "
          style={{
            backgroundImage: 'url("../../src/assets/mobile community2.png")',
          }}
        >
          <h2
            className=" font-extrabold text-[16px] flex items-center justify-center leading-5 text-[#FFFFFF];
]"
          >
            Join the bibliophilia Community
          </h2>
          <p className=" leading-relaxed font-bold text-[8px]">
            Discover new books, connect with fellow readers and share your love
            for literature
          </p>
          <button
            className="mt-4 font-[600] bg-[#5D38CE] btn btn-sm text-[5px] text-[#FFFFFE]
leading-[7.31px] border-none"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
