import Navbar1 from './Navbar';
import Home1 from './Home';
import QuemSomos from'./QuemSomos';


import Footer1 from './Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar1 />
       
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/quemsomos" element={<QuemSomos />} />

          
          
          
         
        </Routes>
        <Footer1 />
      </header>
    </div>
  </Router>
  )
}

export default App