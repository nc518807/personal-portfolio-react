import React from 'react'
import Header from "./Components/header/Header"
import Nav from "./Components/nav/Nav"
import Contact from "./Components/Contact/Contact"
import Portfolio from './Components/portfolio/Portfolio'
import Experience from "./Components/experience/Experience"
import Testemonial from "./Components/testemonial/Testemonial"
import Footer from "./Components/footer/Footer"
import About from './Components/About/About'

const App = () => {
  return (
   <>
   <Header/>
   <Nav/>
   <About/>
   <Contact/>
   <Experience/>
   <Portfolio />
   <Testemonial/>
   <Footer/>

   </>
  )
}

export default App