import { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AOS from 'aos'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className='wave-bg'>
      <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </div>
  )
}

export default App
