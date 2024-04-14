import Books from "./books"
import book1 from '../assets/book1.png'
import atomicLove from '../assets/atomicLove.png'
import mollie from '../assets/mollie.png'
import penguin from '../assets/penguin.png'
import merci from '../assets/merci.png'
import personality from '../assets/personality.png'
import cluster from '../assets/cluster.png'




function bookShowcase() {
  return (
    <div className="showcase relative bg-[#EEF2FC]">
      <div className="flex">
        <div className="lg:pl-[18rem] pt-3"><Books src={cluster} className="absolute flex"/></div> 
      <div className="items-center justify-center items-center justify-center text-center">
      <h1 className="font-body font-bold text-2xl md:text-4xl leading-7 lg:ml-[13rem] ml-[7rem] mt-[3rem] pb-4">Book Showcase</h1>
      <p className="text-center pb-5 lg:ml-[13rem] ml-[6rem]">Discover a variety of high quality books</p>
      <button className="mb-[2rem] lg:ml-[13rem] ml-[6rem] h-[56px] w-[175.41px] items-center bg-[#141D26] text-white  rounded-lg focus:outline-none font-mont">Explore More</button>
      </div>
      </div>
     
      

    <div className=" grid grid-cols-2 lg:grid-cols-3 ml-16 mr-12 pb-9">
      <div >
      <Books src={book1}
      title="Lorem Ipsum"/>
      </div>
      <div>
      <Books src={atomicLove}
      title="Atomic Love"/>
      </div>
      <div>
      <Books src={mollie}
      title="Mollie"/>
      </div>
      <div>
      <Books src={penguin}
      title="Well-done Mummy Penguin"/>
      </div>
      <div>
      <Books src={merci}
      title="Merci"/>
      </div>
      <div>
      <Books src={personality}
      title="The power of Personality"/>
      </div>
      
    </div>
    </div>
  )
}

export default bookShowcase;