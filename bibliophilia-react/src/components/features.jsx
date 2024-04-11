import React from "react"
import Group from "../assets/Group.png"
import girlie from "../assets/girlie.png"
import hourglass from "../assets/hourglass.png"
import community from "../assets/community.png"
import readingFormat from "../assets/readingFormat.png"




function features() {
    return (
        <>
            <section className="my-7 md:my-16 flex flex-col items-center justify-center">
                <div className=" font-body font-normal leading-6 text-center relative max-w-[1200px] w-full">
                <img src={Group} alt="plus-group" className=" hidden lg:flex absolute right-0" />
                    <p>Our Core Features</p>
                    <h1 className=" font-body font-bold text-xl md:text-4xl leading-7 text-center">Explore our Key Features</h1>
                </div>

                <div className=" flex flex-col space-y-2 justify-center items-center my-10 overflow-hidden lg:max-w-[1200px] lg:w-auto md:items-center md:justify-center">
                     <div className=" flex flex-col space-y-2 items-center justify-center lg:flex-row w-auto">
                        <div className="img-bg">
                            <img src={girlie}alt="girl-reading"
                                className="w-[230px] h-[250.25px] absolute -top-[30px] left-[110px] overflow-hidden md:w-[460px] md:h-[500px] md:left-[250px] md:-top-[52px]" />

                            <p className=" font-body font-semibold text-[16px] md:text-[32px] leading-[17.6px] absolute top-[42%] left-4 md:left-7 md:leading-8">Personalized Book<br /> Recommendations</p>
                        </div>
                        <div className="img-bggh">
                            <img src={hourglass} alt="hourglass"
                                className="w-[221.64px] h-[186px] top-[90px] absolute left-14 lg:w-[342px] lg:h-[287px] lg:left-[5%]  lg:top-[30%]" />

                            <p className=" font-body font-semibold text-[16px] leading-[17.6px] absolute top-[15%] left-16 lg:text-[32px] lg:text-center md:leading-9 lg:left-[5%]">Reading Progress Tracking</p>
                        </div>
                    </div>
                    
                    <div className=" flex flex-col space-y-2 items-center justify-center lg:flex-row lg:max-w-[1200px] lg:w-auto">
                        <div className="img-bgg">
                            <p className=" font-body font-semibold text-[16px] leading-[17.6px] absolute top-[15%] left-20 lg:text-[32px] lg:left-28">Community Interaction</p>

                            <img src={community} alt="community-interaction" className=" w-[256.08px] h-[167.68px] absolute top-[101.02px] left-8 lg:w-[436px] lg:h-[285.49px] lg:left-[12%] lg:top-[27%]" />
                        </div>
                        <div className="img-bgg">
                        <p className=" font-body font-semibold text-[16px] leading-[17.6px] absolute top-[15%] left-16 lg:text-[32px] lg:left-28">Multiple Reading Formats</p>

                            <img src={readingFormat} alt="reading-format" className=" w-[392.6px] h-[196.3px] top-[31%] absolute lg:w-[668.45px] lg:h-[334.23px] lg:top-[27%]" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default features