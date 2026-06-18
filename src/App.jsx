import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/pages/hero";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Skills from "./Components/pages/Skills";
import Project from "./Components/pages/project";
import Academic from "./Components/pages/Academic"
import Showmore from "./Components/pages/Showmore";

function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Academic/>
      <Skills/>
      <Project/>
      <Contact/>
    </>
  );
}

function App(){
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/showmore" element={<Showmore/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;