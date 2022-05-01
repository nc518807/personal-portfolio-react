import React from 'react'
import Header from "./Components/header/Header"
import Nav from "./Components/nav/Nav"
import Contact from "./Components/Contact/Contact"
import Experience from "./Components/experience/Experience"
import Service from "./Components/service/Service"
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
   <Service/>
   <Testemonial/>
   <Footer/>

   </>
  )
}

export default App