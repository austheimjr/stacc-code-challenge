import * as React from 'react';
import './App.css';
import Navbar from './Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Search from './Search';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
