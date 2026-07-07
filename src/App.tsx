import Hero from './components/Hero'
import Navbar from "./components/Navbar"
import About from './components/About'
import Featured from './components/Featured';
import Amenties from './components/Amenties';
import Testimonial from './components/Testimonial';
import Location from './components/Location';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <Amenties />
      <Testimonial />
      <Location />
      <Footer />
      
    </>
  )
}

export default App