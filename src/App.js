import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Business  from './Business';
import Sports  from './Sports';
import Trending  from './Trending';
import World  from './World';
import Entertainment from './Entertainment';

function App(){
  return(
    <Router>
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<World />} />
      <Route path="/World" element={<World />} />
      <Route path="/Business" element={<Business />} />
      <Route path="/Sports" element={<Sports />} />
      <Route path="/Trending" element={<Trending />} />
      <Route path="/Entertainment" element={<Entertainment />} />
  

      </Routes>
         
        
    </div>
    </Router>
   
  )
  
}

export default App;