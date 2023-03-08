import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import Video from "./page/Video/Video";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
