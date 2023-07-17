import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Work from "./Work";
import Contacts from "./Contacts";
import Sidebar from "./Sidebar";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/sidebar" element={<Sidebar />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
