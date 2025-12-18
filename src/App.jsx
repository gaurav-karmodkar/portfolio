import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/Aboutme/About'
import Skills from './components/skill/Skills'
import Projects from './components/project/Projects'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
