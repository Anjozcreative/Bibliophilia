// I CREATED THE MOBILE VIEW IN A SEPERATE DIV BELOW
import backgroundImage from "../../src/assets/community2.png";
import backgroundImage2 from "../../src/assets/mobile community2.png";
import communityArrow from "../../src/assets/community1.png";
import communityArrow2 from "../../src/assets/mobile community1.png";
const Community = () => {
  return (
    <>
      <div
        className="bg-white font-[sans-serif]  md:flex hidden
    
    "
      >
        <div className="container flex-col items-center justify-center hidden mx-auto md:px-20 md:flex ">
          <div>
            <img src={communityArrow} alt="" />
          </div>

          <div
            className=" hero text-white"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              borderRadius: "16px",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-[16px] "></div>
            <div className="text-center hero-content text-white flex flex-col py-10">
              <h2 className=" text-[32px] font-extrabold mb-2 leading-10">
                Join the bibliophilia Community
              </h2>
              <p className=" leading-relaxed text-base font-bold text-[18px]">
                Discover new books, connect with fellow readers and share your
                love for literature
              </p>
              <button
                className="mt-2 font-semibold btn btn-lg bg-[#5D38CE] hover:bg-purple-400 hover:text-black text-[16px] text-[#FFFFFE]
leading-6 border-none"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className=" bg-white font-[sans-serif]  md:hidden flex">
        <div className="container flex-col items-center justify-center flex mx-auto px-4 md:hidden ">
          <div>
            <img src={communityArrow2} alt="" />
          </div>

          <div
            className="  hero text-white"
            style={{
              backgroundImage: `url(${backgroundImage2})`,
              borderRadius: "4px",
            }}
          >
            <div className=" hero-overlay bg-opacity-60 rounded-[4px]"></div>
            <div className="text-center hero-content text-white flex flex-col py-5">
              <h2
                className=" font-extrabold text-[16px] flex items-center justify-center leading-5 text-[#FFFFFF] "
              >
                Join the bibliophilia Community
              </h2>
              <p className=" leading-relaxed font-bold text-[8px]">
                Discover new books, connect with fellow readers and share your
                love for literature
              </p>
              <button
                className=" font-[600] bg-[#5D38CE] btn btn-sm text-[5px] text-[#FFFFFE]
leading-[7.31px] border-none"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
