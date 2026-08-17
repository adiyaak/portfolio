import React, { useState, useEffect } from 'react'
import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Services/Services"
import MyWork from "./Components/MyWork/MyWork"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "mywork", "contact"];
      const scrollPosition = window.scrollY + 250;

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection("home");
  };

  return (
    <div style={{ position: 'relative' }}>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection}/>
      <Hero activeSection={activeSection} setActiveSection={setActiveSection}/>
      <About activeSection={activeSection}/>
      <Services activeSection={activeSection}/>
      <MyWork activeSection={activeSection}/>
      <Contact activeSection={activeSection}/>
      <Footer activeSection={activeSection} setActiveSection={setActiveSection}/>

      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(267deg, #0af739 -5.09%, #4d03fa 106.28%)',
            color: 'white',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: '0.3s'
          }}
          title="Back to Top"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default App