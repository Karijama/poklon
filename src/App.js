import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from './pages/home.js';
import Register from './pages/register.js';
import Login from './pages/login.js';
import HomeA from './pages/homeA.js';
import Profile from './pages/profile.js';
import Blog from "./pages/blog.js"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reg" element={<Register/>} />
        <Route path="/log" element={<Login/>} />
        <Route path="/main" element={<HomeA/>} />
        <Route path="/prof" element={<Profile/>}/>
        <Route path="/create-blog" element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
