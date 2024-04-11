
import './App.css'
import Hero from './components/hero'
import About from './components/about'
import OtherSection from './components/otherSection'
import AuthForm from './components/authForm/AuthForm'
import Testimonial from './components/testimonial'
import Community from './components/community'
import Footer from './components/footer'


function App() {

  return (
    <>
    {/* <AuthForm/> */}
      <Hero />
      <About />
      <OtherSection />
      <Testimonial/>
      <Community/>
      <Footer/>
      
    </>
  )
}

export default App
