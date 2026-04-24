import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import viteLogo from '../public/assets/vite.svg'
import heroImg from '../public/assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './components/pages/Home'
import MyIndex from './components/pages/MyIndex'
import About from './components/pages/About'
import Service from './components/pages/Service'
import Project from './components/pages/Project'
import Contact from './components/pages/Contact'
import NavBar from './components/includes/navbar/NavBar'
import Header from './components/includes/header/Header'
import Footer from './components/includes/footer/Footer'
import MainLayout from './components/includes/MainLayout'



function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
      {/* <nav>
        <Header/>
        {/* <NavBar/> */}
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
      {/* </nav>  */}

      

      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<MyIndex />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
