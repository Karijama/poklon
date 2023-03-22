import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from './pages/home.js';
import Register from './pages/register.js';
import Login from './pages/login.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reg" element={<Register/>} />
        <Route path="/log" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
