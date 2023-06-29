import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
// import Skills from './sections/skills/Skills';
import Portfolio from './sections/portfolio/Portfolio';
import Training from './sections/training/Training';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Certifications from './sections/certifications/Certifications';

const App = () => {
  return (
    <main>
        <Navbar/>
        <Header/>
        <Certifications/>
        <Training/>
        
        <Portfolio/>
        {/* <Skills/> */}
        <About/>
        
        {/* <Contact/> */}
        <Footer/>
        {/* <FloatingNav/> */}
    </main>
  )
}

export default App