import React from "react";
import { Routes, Route } from "react-router-dom"
import './App.css';


import Home from './pages/Home';
import About from "./pages/About";
import AboutApp from "./pages/AboutApp";
import AboutAuthor from "./pages/AboutAuthor";
import NotFound from "./pages/NotFound";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/about-app" element={<AboutApp/>}/>
      <Route path="/about-author" element={<AboutAuthor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;