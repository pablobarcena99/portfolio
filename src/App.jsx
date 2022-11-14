import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './components/Hero'
import styled from "styled-components";
import Navbar from './components/Navbar'
import MainSection from './components/MainSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <MainSection />
      <MainSection />
      <MainSection />
      <MainSection />
    </div>
  );
}

export default App
