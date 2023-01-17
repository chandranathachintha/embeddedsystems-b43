import React from 'react';
import Cvideos from './components/Cvideos';
import DifTopics from './components/DifTopics';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cprogramming' element={<Cvideos />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
