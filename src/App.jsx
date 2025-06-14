import VantaBackground from './components/VantaBackground';
import Header from './components/Header';
import MainContent from './components/MainContent';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CertificatesSection from './components/CertificatesSection';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <VantaBackground />
      <Header />
      
      <MainContent />
      <About />
      <Skills />
      <Projects />
      <CertificatesSection />
      <Footer />      
    </>
  );  
}

export default App;
