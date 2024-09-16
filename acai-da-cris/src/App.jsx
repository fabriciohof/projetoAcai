import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Prices from './components/Prices';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const location = useLocation();
  const footerClass = ['/order', '/prices'].includes(location.pathname) ? 'no-footer' : '';

  return (
    <div className={footerClass}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/prices" element={<Prices />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

