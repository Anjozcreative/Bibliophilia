import Books from "./books";
import book1 from "../assets/book1.png";
import atomicLove from "../assets/atomicLove.png";
import mollie from "../assets/mollie.png";
import penguin from "../assets/penguin.png";
import merci from "../assets/merci.png";
import personality from "../assets/personality.png";
import cluster from "../assets/cluster.png";
import clusterMobile from "../assets/Cluster Mobile.png";

function bookShowcase() {
  return (
    <div className="showcase relative bg-[#EEF2FC]">
      <div className="flex items-center justify-center md:grid-cols-2 md:grid lg:grid-cols-3 pb-9">
        <div className="absolute items-center hidden pt-3 md:flex md:justify-center md:relative">
          <Books src={cluster}  />
          
          
        </div>
        <div className="absolute flex pt-3 mr-[13rem] md:mr-0 md:justify-center md:relative w-[8.44px] h-[120.86px] md:hidden">
          
          <img src={clusterMobile} alt="" />
          
        </div>
        <div className="flex-col items-center md:justify-center">
          <h1 className="font-body font-bold text-[24px] md:text-4xl md:leading-7  mt-[3rem] pb-4 flex items-center justify-center leading-6">
            Book Showcase
          </h1>
          <p className="flex items-center justify-center pb-5 text-[14px] font-[400] leading-5 md:[18px]">
            Discover a variety of high quality books
          </p>
          <div className="flex items-center justify-center">
            <button className="mb-[2rem] h-[37.33px] w-[134.33px] md:h-[56px] md:w-[175.41px]  bg-[#141D26] text-white  md:rounded-lg focus:outline-none font-mont text-[14px] font-[600] leading-5 rounded-[4px]">
              Explore More
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 ml-16 mr-12 lg:grid-cols-3 pb-9">
        <div>
          <Books src={book1} title="Lorem Ipsum" />
        </div>
        <div>
          <Books src={atomicLove} title="Atomic Love" />
        </div>
        <div>
          <Books src={mollie} title="Mollie" />
        </div>
        <div>
          <Books src={penguin} title="Well-done Mummy Penguin" />
        </div>
        <div>
          <Books src={merci} title="Merci" />
        </div>
        <div>
          <Books src={personality} title="The power of Personality" />
        </div>
      </div>
    </div>
  );
}

export default bookShowcase;
