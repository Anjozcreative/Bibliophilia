import desktop from "../assets/desktop.png";
import havard from "../assets/havard.png";
import airtable from "../assets/airtable.png";
import dribbble from "../assets/dribbble.png";
import boom from "../assets/boom.png";
import menu from "../assets/menu.png";
import logo from "../assets/logo.png";
import airtableMobile from "../assets/airtable mobile.png";
import dribbleMobile from "../assets/dribble mobile.png";
import havardMobile from "../assets/havard mobile.png";
import boomMobile from "../assets/Boom mobile.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-auto h-[300px] md:h-[690px] bg-cover bg-center relative items-center justify-center flex">
        <img src={desktop} alt="bg" className="object-cover h-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#141D26B2] justify-center items-center">
          {/*this is the nav bar */}
          <div className="flex items-center justify-between px-10 mt-2 md:px-0 md:justify-around md:mt-4">
            <img className="w-auto " src={logo} alt="logo" />

            <div className="hidden md:flex lg:pl-64">
              <nav className="">
                <ul className="text-sm">
                  <li>
                    <a href="#" className=" active:underline font-mont">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-mont">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="hidden space-x-2 md:flex">
              
              <Link to={"/login"}>
              <button className="h-[56px] w-[175.41px] items-center bg-[#5D38CE] text-white font-semibold rounded-lg focus:outline-none font-mont">
                Sign In
              </button>
              </Link>
             
              <Link to={"/signup"}>
              <button className="h-[56px] w-[175.41px] items-center text-white font-semibold rounded-lg focus:outline-none border font-mont">
                Sign Up
              </button>
              </Link>
              
            </div>

            <img
              src={menu}
              className="md:hidden cursor-pointer"
              onClick={() => {
                setOpen(true);
              }}
            />
          </div>

          {/* header content */}

          <div className="text-white flex flex-col my-7 items-center md:mt-[211px]">
            <h1 className="font-bold text-2xl text-center md:text-[64px] leading-[0.9]">
              Explore the Realm <br className="md:hidden" /> of Reading
            </h1>

            <p className="text-center mt-2 md:text-[24px] md:mt-7 font-mont">
              Discover a world of literary <br className="md:hidden" />
              wonders and connect <br className="hidden md:block" /> with
              fellow <br className="md:hidden" /> book enthusiasts.
            </p>

            <button className="h-12 w-36 md:h-[56px] md:w-[175.41px] md:my-7 flex items-center justify-center bg-[#5D38CE] text-white font-semibold rounded-lg focus:outline-none my-4 font-mont">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* this is the sponsor div */}
      <div className="flex md:gap-10 gap-4 md:p-10 p-5 mt-5 bg-[#141D26] sponsor-div items-center justify-center  ">
        <img src={havard} alt="havard-bus" className="hidden md:flex"/>
        <img src={airtable} alt="airtable" className="hidden md:flex"/>
        <img src={airtable} alt="airtable" className="hidden md:flex"/>
        <img src={havard} alt="havard-bus" className="hidden md:flex"/>
        <img src={dribbble} alt="havard-bus" className="hidden md:flex"/>
        <img src={dribbble} alt="havard-bus" className="hidden md:flex"/>
        <img src={boom} alt="boom" className="hidden md:flex" />

        {/* MOBILE */}
        <img src={airtableMobile} alt="airtable" className="flex md:hidden"/>
        <img src={airtableMobile} alt="airtable" className="flex md:hidden"/>
        <img src={havardMobile} alt="havard" className="flex md:hidden"/>
        <img src={dribbleMobile} alt="dribble" className="flex md:hidden"/>
        <img src={dribbleMobile} alt="dribble" className="flex md:hidden"/>
        <img src={boomMobile} alt="dribble" className="flex md:hidden"/>
        
      </div>

      {/* Navbar Modal */}
      {open ? (
        <div className="fixed inset-0 px-4 w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
      >
          <div className="w-full max-w-lg bg-[#141D26] border text-white  shadow-lg rounded-md p-6 relative mx-auto my-8 border-gray-700">
            <div className="flex items-center text-black">
              <h3 className="flex-1 text-xl font-bold"></h3>
              <div
                onClick={() => {
                  setOpen(false);
                }}
                className="text-2xl font-bold text-white cursor-pointer"
              >
                X
              </div>
            </div>
           <ul className="flex flex-col items-center justify-center space-y-4">
            <li className="text-xl font-bold cursor-pointer">Home</li>
            <li className="text-xl font-bold cursor-pointer">Contact Us</li>
            <div className="flex gap-4">
            <Link to={"/login"}>
            <button  className="btn btn-sm  text-white hover:bg-purple-500 bg-[#5D38CE] border-none cursor-pointer ">Login</button>
            </Link>
            <Link to={"/signup"}>
            <button className="btn btn-sm bg-[#5D38CE] text-white cursor-pointer hover:bg-purple-500 border-none">Sign Up</button>
            </Link>
            </div>
           
           </ul>
          </div>
        </div>
      ) : null}
    
    </>
  );
}

export default Hero;
