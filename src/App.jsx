import React, { useEffect } from 'react';
import Header from './components/header/Header';
import NavBar from './components/nav/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Aos from 'aos';

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
