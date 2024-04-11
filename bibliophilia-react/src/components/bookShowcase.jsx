import Books from "./books"
import book1 from '../assets/book1.png'
import atomicLove from '../assets/atomicLove.png'

function bookShowcase() {
  return (
    <div className=" grid grid-cols-2 lg:grid-cols-4">
      <Books src={book1}
      title="Lorem Ipsum"/>
      <Books src={atomicLove}
      title="Atomic Love"/>
      <Books src={book1}
      title="Lorem Ipsum"/>
      <Books src={book1}
      title="Lorem Ipsum"/>
      <Books src={book1}
      title="Lorem Ipsum"/>
      <Books src={book1}
      title="Lorem Ipsum"/>
    </div>
  )
}

export default bookShowcase;