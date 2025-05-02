import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/style.css";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Páginas completas
import Home from "./pages/Home";
import Planes from "./pages/Planes";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planes" element={<Planes />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
