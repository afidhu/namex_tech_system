import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import viteLogo from '../public/assets/vite.svg'
import heroImg from '../public/assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './components/pages/Home'
import MyIndex from './components/pages/MyIndex'



function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MyIndex />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
