import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './component/header/Header';
import Hero from './component/hero/Hero';

function App() {
  useEffect(()=>{
    Aos.init();
  }, []);

  return (
    <div>
    <Header/>
    <Hero/>
    
    </div>
  )
}

export default App
