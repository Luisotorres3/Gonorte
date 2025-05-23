import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/style.css";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Páginas completas
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import Contacto from "./pages/Contacto";
import Colaboraciones from "./pages/Colaboraciones";
import Testimonios from "./pages/Testimonios";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/Gonorte" element={<Home />} />
          <Route path="/Gonorte/planes" element={<Planes />} />
          <Route path="/Gonorte/colaboraciones" element={<Colaboraciones />} />
          <Route path="/Gonorte/testimonios" element={<Testimonios />} />
          <Route path="/Gonorte/contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate to="/Gonorte" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
