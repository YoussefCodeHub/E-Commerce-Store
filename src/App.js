import { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Offers from './Components/Offers';
import Navbar from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="App">
      <Router basename="/">
        <Navbar setSearchQuery={setSearchQuery} /> 
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/offers" element={<Offers />} /> 
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
