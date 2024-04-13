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
    <div className="showcase">
      <Books src={cluster}/>
      <h2>Book Showcase</h2>
      <p>Discover a variety of high quality books</p>
      <input type="button" value="Explore More" />
    <div className=" grid grid-cols-2 lg:grid-cols-3">
      <div>
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