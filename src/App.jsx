import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './components/homepage';
import Aboutpage from './components/aboutpage';
import Header from './components/header';


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/about" element={<Aboutpage/>} />
      </Routes>
    </Router>
  )
}

export default App
