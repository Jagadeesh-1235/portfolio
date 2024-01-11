import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Footer from './pages/Footer'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import "react-vertical-timeline-component/style.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "react-slideshow-image/dist/styles.css";
function App() {
  

  return (
    <BrowserRouter >

      <Navbar/>
      <div >
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
      </div>
      
    </BrowserRouter>
  )
}

export default App
