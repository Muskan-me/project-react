import React from "react";
import{ Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import './App.css';
function App() {
  return (
    <div className="app-new">

    <Router>
      <navbar/>
      <div className="App">
        <Routes>
     < Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/footer" element={<Footer />} />

          <Route path="/navbar" element={<Navbar />} />
     
         
        </Routes>
      </div>
    </Router>
      </div>
  );
}


export default App;
