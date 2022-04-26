import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import Home from "./components/Home";
import Photos from "./components/Photos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";

export default App;
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
        <Footer />
        <FooterBottom />
      </BrowserRouter>
     
    </div>
  );
}
