import { useEffect } from 'react';
import Aos from 'aos';
import './App.css'
import Header from './component/header/Header'

function App() {
  useEffect(()=>{
    Aos.init();
  }, []);

  return (
    <div>
    <Header/>
    
    </div>
  )
}

export default App
