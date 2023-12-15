import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Steers from './pages/cattle/Steers';
import Heifer from './pages/cattle/Heifers';
import Bulls from './pages/cattle/Bulls';
import Cows from './pages/cattle/Cows';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/cattle" element={<Dashboard />} />
        <Route exact path="/cattle/steers" element={<Steers />} />
        <Route exact path="/cattle/heifer" element={<Heifer />} />
        <Route exact path="/cattle/bulls" element={<Bulls />} />
        <Route exact path="/cattle/cows" element={<Cows />} />
      </Routes>
    </>
  );
}

export default App;
