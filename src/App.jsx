import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  

  return (
    
    <div id='main'>
        <NavBar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
    </div>
  )
}

export default App
