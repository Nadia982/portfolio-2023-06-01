import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Skills from './sections/skills/Skills';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Certifications';
import Faqs from './sections/faqs/Faqs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Certifications from './sections/testimonials/Certifications';

const App = () => {
  return (
    <main>
        <Navbar/>
        <Header/>
        <Certifications/>
        <Portfolio/>
        <Skills/>
        
        <About/>
        <Faqs/>
        <Contact/>
        <Footer/>
        <FloatingNav/>
    </main>
  )
}

export default App