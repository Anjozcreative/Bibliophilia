
import './App.css'
import Hero from './components/hero'
import About from './components/about'
// import OtherSection from './components/otherSection'
// import AuthForm from './components/authForm/AuthForm'
import Testimonial from './components/testimonial'
import Community from './components/community'
import Footer from './components/footer'
import BookShowcase from './components/bookShowcase'
import Features from './components/features'


function App() {

  return (
    <>
    {/* <AuthForm/> */}
    <div className='bg-white'>
    <Hero />
      <About />
      <Features />
      <BookShowcase />
      <Testimonial/>
      <Community/>
      <Footer/>
    </div>
     
    </>
  )
}

export default App;
