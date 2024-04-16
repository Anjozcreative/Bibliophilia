
import friends from "../assets/friends.png";
import vector from '../assets/Vector.png'

function About(){
    return(
        <section className="mt-4  md:flex md:flex-row md:mt-5 bg-[#F8F8F8] md:pt-20 pt-5">
            <div className=" flex flex-col space-y-7 relative lg:w-[45%] md:w-[60%]">
                <img src={vector} alt="vector" className="absolute right-5 top-12" />
                <div className=" p-4 md:pl-20">
                    <h2 className=" font-body font-bold text-2xl leading-8 tracking-wider">
                        Unleash Your Love for <br /> Books with Bibliophilia              
                    </h2>
                    <p className=" mt-4 font-semibold md: pr-12">Bibliophilia offers an immersive reading experience, connecting you with diverse books and fellow readers for captivating stories.</p>
                </div>
                    <div className=" flex flex-col p-4 bg-[#141D26] py-14 md:flex-row md:items-center md:pl-20 overscroll-x-none">
                    <div className="percent">
                        <h1 className="percentage">50%</h1>
                        <p className="sub-head">Discover New Books <br /> Every Week</p>
                    </div>
                    <div className="h-[1px] bg-white w-[150px] opacity-30 my-4 md:w-[1px] md:h-[150px] md:mx-12 flex"></div>
                    <div className="percent">
                        <h1 className="percentage mt-12 md:mt-0">50%</h1>
                        <p className="sub-head">Connect With A Thriving <br /> Reading Community</p>
                    </div>
                </div>
            </div>
            
        
            <div className="">
            <img src={friends} alt="friends-reading" className="h-full object-cover w-auto overscroll-x-none"  />
            </div>    

  </section>
    )
}

export default About