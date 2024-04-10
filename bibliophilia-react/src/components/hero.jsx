import React from "react";
import desktop from "../assets/desktop.png";
import havard from "../assets/havard.png";
import airtable from "../assets/airtable.png";
import dribbble from "../assets/dribbble.png";
import boom from "../assets/boom.png";
import menu from "../assets/menu.png";
import logo from "../assets/logo.png";

function Hero() {
    return (
        <>
            <div className="w-auto h-[300px] md:h-[690px] bg-cover bg-center relative items-center justify-center flex">
                <img src={desktop} alt="bg" className="h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-[#141D26B2] justify-center items-center">

                    {/*this is the nav bar */}
                    <div className="flex justify-between px-10 md:px-0 mt-2 md:justify-around items-center md:mt-4">
                        <img
                            className=" w-auto"
                            src={logo} alt="logo" />

                        <div className="hidden md:flex lg:pl-64">
                            <nav>
                                <ul className="text-sm text-white flex space-x-7 items-center">
                                    <li><a href="#"
                                        className=" font-mont">Home</a></li>
                                    <li><a href="#" className="font-mont">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="hidden md:flex space-x-2">
                        <button class="h-[56px] w-[175.41px] items-center bg-[#5D38CE] text-white font-semibold rounded-lg focus:outline-none font-mont">
                            Sign In
                        </button>

                        <button class="h-[56px] w-[175.41px] items-center text-white font-semibold rounded-lg focus:outline-none border font-mont">
                            Sign In
                        </button>
                        </div>

                        <img src={menu} className="md:hidden" />
                    </div>

                    {/* header content */}

                    <div class="text-white flex flex-col my-7 items-center md:mt-[211px]">
                        <h1 class="font-bold text-2xl text-center md:text-[64px] leading-[0.9]">Explore the Realm <br className="md:hidden" /> of Reading</h1>

                        <p class="text-center mt-2 md:text-[24px] md:mt-7 font-mont">Discover a world of literary <br className="md:hidden" />wonders and connect <br className=" hidden md:block" /> with fellow <br className="md:hidden" /> book enthusiasts.</p>

                        <button class="h-12 w-36 md:h-[56px] md:w-[175.41px] md:my-7 flex items-center justify-center bg-[#5D38CE] text-white font-semibold rounded-lg focus:outline-none my-4 font-mont">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>


            {/* this is the sponsor div */}
            <div className="bg-[#141d26] mt-2 w-full h-[43px] py-3 px-2 flex overflow-hidden items-center overflow-x-scroll scrollbar-none space-x-5 md:h-[135px] md:mt-4 md:justify-evenly lg:overscroll-x-none">
                <img src={havard} alt="havard-bus" className="sponsor-logo" />
                <img src={airtable} alt="airtable" className="sponsor-logo" />
                <img src={airtable} alt="airtable" className="sponsor-logo" />
                <img src={havard} alt="havard-bus" className="sponsor-logo" />
                <img src={dribbble} alt="havard-bus" className="sponsor-logo" />
                <img src={dribbble} alt="havard-bus" className="sponsor-logo" />
                <img src={boom} alt="boom" className="sponsor-logo" />

            </div></>
    )
}

export default Hero