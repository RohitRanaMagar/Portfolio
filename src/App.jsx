import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/pages/hero";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Skills from "./Components/pages/Skills";
import Project from "./Components/pages/project";
import Academic from "./Components/pages/Academic"
function App(){
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Academic/>
      <Skills/>
      <Project/>
      <Contact/>
      
    </div>
  )
}
export default App;