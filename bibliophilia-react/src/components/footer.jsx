// I CREATED THE MOBILE VIEW IN A SEPERATE DIV BELOW

const Footer = () => {
  return (
    <footer className="bg-[#141D26] md:py-12 md:px-[7.5rem] font-[sans-serif] rounded-tl-[2rem] rounded-tr-[2rem] relative md:mt-32 px-5 mt-20 py-2">
      <div className="md:flex justify-center items-center md:top-[-50px] md:left-[39rem] absolute hidden ">
        <img src="../../src/assets/Footer Arrow.png" alt="" />
      </div>

      <div className="justify-between hidden md:flex ">
        <div className="flex-col space-y-2">
          <div>
            <h1 className="font-bold text-[40px] leading-[44px] text-[#FFFFFF] ">
              Explore More
            </h1>
            <h1 className="font-bold text-[40px] leading-[44px] text-[#FFFFFF]">
              {" "}
              with Bibliophilia
            </h1>
          </div>
          <div>
            <p className="font-[400] text-[18px] leading-[27px] text-[#FFFFFF]">
              Join Our Community of Book Lovers and Dive{" "}
            </p>
            <p className="font-[400] text-[18px] leading-[27px] text-[#FFFFFF]">
              into Endless Reading Adventures
            </p>
          </div>
        </div>
        <div>
          <button className="bg-[#5D38CE] rounded-[8px]font-[400] p-3 rounded text-[16px] leading-6 text-[#FFFFFF]">
            Send us a message
          </button>
        </div>
      </div>

      <div className="p-5 sm:flex justify-between  bg-[#363F47] rounded-lg items-center mt-16 mb-12 hidden">
        <div className="flex space-x-4">
          <div className="bg-[#5D38CE] rounded-full flex items-center justify-center p-2">
            <img src="../../src/assets/facebook desktop.png" alt="" />
          </div>
          <div className="bg-[#5D38CE] rounded-full flex items-center justify-center p-2">
            <img src="../../src/assets/twitter desktop.png" alt="" />
          </div>
          <div className="bg-[#5D38CE] rounded-full flex items-center justify-center p-2">
            <img src="../../src/assets/instagram desktop.png" alt="" />
          </div>
          <div className="bg-[#5D38CE] rounded-full flex items-center justify-center p-2">
            <img src="../../src/assets/linkedin desktop.png" alt="" />
          </div>
        </div>
        <div className="font-[400] text-[14px] leading-[22.4px] text-[#FFFFFF]">
          © 2023 Bibliophilia. All rights reserved.
        </div>
        <div>
          <img src="../../src/assets/BIBLIOPHILIA Desktop.png" alt="" />
        </div>
      </div>

      {/* MOBILE  VIEW*/}
      <div>
        <div className="flex justify-center items-center   md:hidden relative bottom-10">
          <img src="../../src/assets/Footer Arrow Mobile.png" alt="" />
        </div>
        <div className="flex flex-col  space-y-8 sm:hidden md:mt-0">
          <div className="flex-col space-y-2">
            <div>
              <h1 className="font-[700] text-[24px] leading-[26px] text-[#FFFFFF] ">
                Explore More with
              </h1>
              <h1 className="font-[700] text-[24px] leading-[26px] text-[#FFFFFF]">
                {" "}
                Bibliophilia
              </h1>
            </div>
            <div>
              <p className="font-[400] text-[14px] leading-[21px] text-[#FFFFFF]">
                Join Our Community of Book Lovers and{" "}
              </p>
              <p className="font-[400] text-[14px] leading-[21px] text-[#FFFFFF]">
                Dive into Endless Reading Adventures
              </p>
            </div>
          </div>
          <div>
            <button className="bg-[#5D38CE] rounded-[8px]font-[400] p-3 rounded text-[16px] leading-6 text-[#FFFFFF]">
              Send us a message
            </button>
          </div>
        </div>

        <div className=" p-6   bg-[#363F47] rounded-lg items-center mt-24 mb-5 sm:hidden space-y-8">
          <div className="flex justify-start space-x-4">
            <div className="bg-[#5D38CE] rounded-full flex items-center justify-center p-2">
              <img src="../../src/assets/facebook desktop.png" alt="" />
            </div>
            <div className="bg-[#5D38CE] rounded-full flex items-center justify-center p-2">
              <img src="../../src/assets/twitter desktop.png" alt="" />
            </div>
            <div className="bg-[#5D38CE] rounded-full flex items-center justify-center p-2">
              <img src="../../src/assets/instagram desktop.png" alt="" />
            </div>
            <div className="bg-[#5D38CE] rounded-full flex items-center justify-center p-2">
              <img src="../../src/assets/linkedin desktop.png" alt="" />
            </div>
          </div>
          <div className="font-[400] text-[14px] leading-[22.4px] text-[#FFFFFF] flex justify-start">
            © 2023 Bibliophilia. All rights reserved.
          </div>
          <div className="flex justify-start">
            <img src="../../src/assets/BIBLIOPHILIA Desktop.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
