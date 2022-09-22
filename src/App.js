import * as React from 'react';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import Search from './pages/Search.js';
import CompanySearch from './pages/CompanySearch';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/companySearch" element={<CompanySearch />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
