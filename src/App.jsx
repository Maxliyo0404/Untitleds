import "./App.css";
import React from 'react'
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import SectionOne from "./Components/main/SectionOne/SectionOne";
import SectionTwo from "./Components/main/SectionTwo/SectionTwo";
import SectionThree from "./Components/main/SectionThree/SectionThree";

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    </>
  )
}

export default App