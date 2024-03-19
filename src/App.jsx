import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Services from './component/Services';

function App() {
  useEffect(()=>{
    Aos.init();
  }, []);

  return (
    <div>
    <Header/>
    <Hero/>
    <Services/>
    </div>
  )
}

export default App
