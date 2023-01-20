import './App.css';
import Footer from './Footer';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Highlights from './Highlights';
import Testimonials from './Testimonials';

function App() {
  return (
    <>
    <div class="container">
      <Nav/>
      <Hero/>
      <Highlights />
      <Testimonials />
      <About/>
      <Footer />
    </div>
    </>
  );
}

export default App;
