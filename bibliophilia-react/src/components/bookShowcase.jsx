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
      <Books src={cluster} className="absolute right-5 top-12 flex"/>
      <div className="items-center justify-center text-center">
      <h1 className="font-body font-bold text-xl md:text-4xl leading-7 text-center pb-2">Book Showcase</h1>
      <p className="text-center pb-2">Discover a variety of high quality books</p>
      <button className="pb-2">Get Started</button>
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