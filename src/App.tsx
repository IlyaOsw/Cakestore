import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Price from "./components/Price/Price";
import Contact from "./components/Contact/Contact";

const App: React.FC = () => {
  return (
    <div className="common">
      <Header />
      <Routes>
        <Route path="/Cakestore" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
