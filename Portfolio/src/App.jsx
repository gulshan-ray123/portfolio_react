import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Res from './Components/Res'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Proj_htlh from './Components/Proj_htlh'
import Project_bank from './Components/Project_bank'
import Blogs from './Components/Blogs'
function App() {
  const [color, setColor] = useState("black")

  return (
  <>
  <Header/>
  <Home/>
  <About/>
  <Res/>
  <Skills/>
  <Project/>
  <Proj_htlh/>
  <Project_bank/>
  <Blogs/>
<Footer/>
</>
  )
}

export default App
