import React from "react";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Price from "./pages/Price/Price";
import Contact from "./pages/Contact/Contact";
import ScrollButton from "./common/ScrollButton";

const App: React.FC = () => {
  return (
    <div className="common">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Cakestore" />} />
        <Route path="/Cakestore" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
        <Route />
      </Routes>
      <ScrollButton />
      <Footer />
    </div>
  );
};

export default App;
